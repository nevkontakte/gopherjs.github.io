package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"go/ast"
	"go/parser"
	"go/scanner"
	"go/token"
	"go/types"
	"runtime"
	"strings"

	"github.com/gopherjs/gopherjs/compiler"
	"github.com/gopherjs/gopherjs/js"
	"honnef.co/go/js/xhr"
)

type Line map[string]string

var output []Line
var fileSet *token.FileSet
var pkgsToLoad map[string]struct{}
var importContext *compiler.ImportContext
var packages map[string]*compiler.Archive
var pkgsReceived int

func main() {
	packages = make(map[string]*compiler.Archive)
	importContext = &compiler.ImportContext{
		Packages: make(map[string]*types.Package),
		Import: func(path string) (*compiler.Archive, error) {
			if pkg, found := packages[path]; found {
				return pkg, nil
			}
			pkgsToLoad[path] = struct{}{}
			return &compiler.Archive{}, nil
		},
	}
	fileSet = token.NewFileSet()
	pkgsReceived = 0

	setupEnvironment()
	js.Global.Set("runCode", js.MakeFunc(runCode))
}

func runCode(this *js.Object, arguments []*js.Object) interface{} {
	code := arguments[0].String()
	escaped, err := json.Marshal(code)
	if err != nil {
		fmt.Println("Error during marshalling:", err)
		return nil
	}
	// log code
	js.Global.Call("eval", js.InternalObject("console.log('code: "+string(escaped)+"')"))
	output = nil
	pkgsToLoad = make(map[string]struct{})

	file, err := parser.ParseFile(fileSet, "prog.go", []byte(code), parser.ParseComments)
	if err != nil {
		if list, ok := err.(scanner.ErrorList); ok {
			for _, entry := range list {
				output = append(output, Line{"type": "err", "content": entry.Error()})
			}
			return output
		}
		return err.Error()
	}

	mainPkg, err := compiler.Compile("main", []*ast.File{file}, fileSet, importContext, false)
	packages["main"] = mainPkg
	if err != nil && len(pkgsToLoad) == 0 {
		if list, ok := err.(compiler.ErrorList); ok {
			var output []Line
			for _, entry := range list {
				output = append(output, Line{"type": "err", "content": entry.Error()})
			}
			return output
		}
		return err.Error()
	}

	var allPkgs []*compiler.Archive
	if len(pkgsToLoad) == 0 {
		allPkgs, _ = compiler.ImportDependencies(mainPkg, importContext.Import)
	}

	if len(pkgsToLoad) != 0 {
		pkgsReceived = 0
		for path := range pkgsToLoad {
			req := xhr.NewRequest("GET", "https://cdn.jsdelivr.net/gh/naorzr/gopherjs-runtime@master/playground/pkg/"+path+".a.js")
			req.ResponseType = xhr.ArrayBuffer
			go func(path string) {
				err := req.Send(nil)
				if err != nil || req.Status != 200 {
					// log error
					js.Global.Call("eval", js.InternalObject("console.error('error loading package: "+path+"')"))
					return
				}

				data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
				packages[path], err = compiler.ReadArchive(path+".a", bytes.NewReader(data))
				if err != nil {
					// log error
					js.Global.Call("eval", js.InternalObject("console.error('error reading archive package: "+path+"')"))
					return
				}
				if err := packages[path].RegisterTypes(importContext.Packages); err != nil {
					// log error
					js.Global.Call("eval", js.InternalObject("console.error('error registering types package: "+path+"')"))
					return
				}
				pkgsReceived++
				if pkgsReceived == len(pkgsToLoad) {
					// log pkgsToLoad
					pkgsToLoadStr := ""
					for path := range pkgsToLoad {
						pkgsToLoadStr += path + ", "
					}
					js.Global.Call("eval", js.InternalObject("console.log('packages loaded:  "+pkgsToLoadStr+"')"))
					// log pkgsReceived
					js.Global.Call("eval", js.InternalObject("console.log('pkgsReceived:  "+fmt.Sprintf("%d", pkgsReceived)+"')"))
					// log code
					runCode(nil, arguments)
				}
			}(path)
		}
	}

	jsCode := bytes.NewBuffer(nil)
	jsCode.WriteString("try{\n")
	compiler.WriteProgramCode(allPkgs, &compiler.SourceMapFilter{Writer: jsCode}, runtime.Version())
	jsCode.WriteString("} catch (err) {\nconsole.error(err.message);\n}\n")
	js.Global.Set("$checkForDeadlock", true)
	js.Global.Call("eval", js.InternalObject(jsCode.String()))

	return jsCode.String()
}
func setupEnvironment() {
	js.Global.Set("goPrintToConsole", js.InternalObject(func(b []byte) {
		lines := strings.Split(string(b), "\n")
		if len(output) == 0 || output[len(output)-1]["type"] != "out" {
			output = append(output, Line{"type": "out", "content": ""})
		}
		output[len(output)-1]["content"] += lines[0]
		for i := 1; i < len(lines); i++ {
			output = append(output, Line{"type": "out", "content": lines[i]})
		}
	}))
	js.Global.Set("goPanicHandler", js.InternalObject(func(msg string) {
		output = append(output, Line{"type": "err", "content": "panic: " + msg})
	}))
}
