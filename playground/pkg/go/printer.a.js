0��
go/printer�fapackage printer
import testing "testing"
import bytes "bytes"
import ast "go/ast"
import token "go/token"
import utf8 "unicode/utf8"
import fmt "fmt"
import io "io"
import os "os"
import strconv "strconv"
import strings "strings"
import tabwriter "text/tabwriter"
import unicode "unicode"
type @"".CommentedNode struct { @"".Node interface {  }; @"".Comments []*@"go/ast".CommentGroup }
type @"".Config struct { @"".Mode @"".Mode; @"".Tabwidth int; @"".Indent int }
func (? *@"".Config) @"".Fprint(@"".output @"io".Writer, @"".fset *@"go/token".FileSet, @"".node interface {  }) (? error)
func (? *@"".Config) @"".fprint(@"".output @"io".Writer, @"".fset *@"go/token".FileSet, @"".node interface {  }, @"".nodeSizes map[@"go/ast".Node]int) (@"".err error)
func @"".Fprint(@"".output @"io".Writer, @"".fset *@"go/token".FileSet, @"".node interface {  }) (? error)
type @"".Mode uint
const @"".RawFormat @"".Mode = 0x1
const @"".SourcePos @"".Mode = 0x8
const @"".TabIndent @"".Mode = 0x2
func @"".TestSourcePos(@"".t *@"testing".T) ()
const @"".UseSpaces @"".Mode = 0x4
type @"".commentInfo struct { @"".cindex int; @"".comment *@"go/ast".CommentGroup; @"".commentOffset int; @"".commentNewline bool }
type @"".exprListMode uint
type @"".pmode int
type @"".printer struct { ? @"".Config; @"".fset *@"go/token".FileSet; @"".output []byte; @"".indent int; @"".mode @"".pmode; @"".impliedSemi bool; @"".lastTok @"go/token".Token; @"".prevOpen @"go/token".Token; @"".wsbuf []@"".whiteSpace; @"".pos @"go/token".Position; @"".out @"go/token".Position; @"".last @"go/token".Position; @"".linePtr *int; @"".comments []*@"go/ast".CommentGroup; @"".useNodeComments bool; ? @"".commentInfo; @"".nodeSizes map[@"go/ast".Node]int; @"".cachedPos @"go/token".Pos; @"".cachedLine int }
func (? *@"".printer) @"".adjBlock(@"".headerSize int, @"".sep @"".whiteSpace, @"".b *@"go/ast".BlockStmt) ()
func (? *@"".printer) @"".atLineBegin(@"".pos @"go/token".Position) ()
func (? *@"".printer) @"".binaryExpr(@"".x *@"go/ast".BinaryExpr, @"".prec1 int, @"".cutoff int, @"".depth int) ()
func (? *@"".printer) @"".block(@"".b *@"go/ast".BlockStmt, @"".nindent int) ()
func (? *@"".printer) @"".bodySize(@"".b *@"go/ast".BlockStmt, @"".maxSize int) (? int)
func (? *@"".printer) @"".commentBefore(@"".next @"go/token".Position) (? bool)
func (? *@"".printer) @"".commentSizeBefore(@"".next @"go/token".Position) (? int)
func (? *@"".printer) @"".commentsHaveNewline(@"".list []*@"go/ast".Comment) (? bool)
func (? *@"".printer) @"".controlClause(@"".isForStmt bool, @"".init @"go/ast".Stmt, @"".expr @"go/ast".Expr, @"".post @"go/ast".Stmt) ()
func (? *@"".printer) @"".decl(@"".decl @"go/ast".Decl) ()
func (? *@"".printer) @"".declList(@"".list []@"go/ast".Decl) ()
func (? *@"".printer) @"".distanceFrom(@"".from @"go/token".Pos) (? int)
func (? *@"".printer) @"".expr(@"".x @"go/ast".Expr) ()
func (? *@"".printer) @"".expr0(@"".x @"go/ast".Expr, @"".depth int) ()
func (? *@"".printer) @"".expr1(@"".expr @"go/ast".Expr, @"".prec1 int, @"".depth int) ()
func (? *@"".printer) @"".exprList(@"".prev0 @"go/token".Pos, @"".list []@"go/ast".Expr, @"".depth int, @"".mode @"".exprListMode, @"".next0 @"go/token".Pos) ()
func (? *@"".printer) @"".fieldList(@"".fields *@"go/ast".FieldList, @"".isStruct bool, @"".isIncomplete bool) ()
func (? *@"".printer) @"".file(@"".src *@"go/ast".File) ()
func (? *@"".printer) @"".flush(@"".next @"go/token".Position, @"".tok @"go/token".Token) (@"".wroteNewline bool, @"".droppedFF bool)
func (? *@"".printer) @"".funcDecl(@"".d *@"go/ast".FuncDecl) ()
func (? *@"".printer) @"".genDecl(@"".d *@"go/ast".GenDecl) ()
func (? *@"".printer) @"".identList(@"".list []*@"go/ast".Ident, @"".indent bool) ()
func (? *@"".printer) @"".indentList(@"".list []@"go/ast".Expr) (? bool)
func (? *@"".printer) @"".init(@"".cfg *@"".Config, @"".fset *@"go/token".FileSet, @"".nodeSizes map[@"go/ast".Node]int) ()
func (? *@"".printer) @"".internalError(@"".msg ...interface {  }) ()
func (? *@"".printer) @"".intersperseComments(@"".next @"go/token".Position, @"".tok @"go/token".Token) (@"".wroteNewline bool, @"".droppedFF bool)
func (? *@"".printer) @"".isOneLineFieldList(@"".list []*@"go/ast".Field) (? bool)
func (? *@"".printer) @"".lineFor(@"".pos @"go/token".Pos) (? int)
func (? *@"".printer) @"".linebreak(@"".line int, @"".min int, @"".ws @"".whiteSpace, @"".newSection bool) (@"".printedBreak bool)
func (? *@"".printer) @"".linesFrom(@"".line int) (? int)
func (? *@"".printer) @"".nextComment() ()
func (? *@"".printer) @"".nodeSize(@"".n @"go/ast".Node, @"".maxSize int) (@"".size int)
func (? *@"".printer) @"".parameters(@"".fields *@"go/ast".FieldList) ()
func (? *@"".printer) @"".posFor(@"".pos @"go/token".Pos) (? @"go/token".Position)
func (? *@"".printer) @"".print(@"".args ...interface {  }) ()
func (? *@"".printer) @"".printNode(@"".node interface {  }) (? error)
func (? *@"".printer) @"".recordLine(@"".linePtr *int) ()
func (? *@"".printer) @"".setComment(@"".g *@"go/ast".CommentGroup) ()
func (? *@"".printer) @"".setLineComment(@"".text string) ()
func (? *@"".printer) @"".signature(@"".params *@"go/ast".FieldList, @"".result *@"go/ast".FieldList) ()
func (? *@"".printer) @"".spec(@"".spec @"go/ast".Spec, @"".n int, @"".doIndent bool) ()
func (? *@"".printer) @"".stmt(@"".stmt @"go/ast".Stmt, @"".nextIsRBrace bool) ()
func (? *@"".printer) @"".stmtList(@"".list []@"go/ast".Stmt, @"".nindent int, @"".nextIsRBrace bool) ()
func (? *@"".printer) @"".valueSpec(@"".s *@"go/ast".ValueSpec, @"".keepType bool) ()
func (? *@"".printer) @"".writeByte(@"".ch byte, @"".n int) ()
func (? *@"".printer) @"".writeComment(@"".comment *@"go/ast".Comment) ()
func (? *@"".printer) @"".writeCommentPrefix(@"".pos @"go/token".Position, @"".next @"go/token".Position, @"".prev *@"go/ast".Comment, @"".comment *@"go/ast".Comment, @"".tok @"go/token".Token) ()
func (? *@"".printer) @"".writeCommentSuffix(@"".needsLinebreak bool) (@"".wroteNewline bool, @"".droppedFF bool)
func (? *@"".printer) @"".writeString(@"".pos @"go/token".Position, @"".s string, @"".isLit bool) ()
func (? *@"".printer) @"".writeWhitespace(@"".n int) ()
type @"".trimmer struct { @"".output @"io".Writer; @"".state int; @"".space []byte }
func (? *@"".trimmer) @"".Write(@"".data []byte) (@"".n int, @"".err error)
func (? *@"".trimmer) @"".resetSpace() ()
type @"".whiteSpace byte
type @"go/ast".CommentGroup struct { @"go/ast".List []*@"go/ast".Comment }
func (? *@"go/ast".CommentGroup) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".CommentGroup) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".CommentGroup) @"go/ast".Text() (? string)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
import sync "sync"
type @"go/token".FileSet struct { @"go/token".mutex @"sync".RWMutex; @"go/token".base int; @"go/token".files []*@"go/token".File; @"go/token".last *@"go/token".File }
func (? *@"go/token".FileSet) @"go/token".AddFile(@"go/token".filename string, @"go/token".base int, @"go/token".size int) (? *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Base() (? int)
func (? *@"go/token".FileSet) @"go/token".File(@"go/token".p @"go/token".Pos) (@"go/token".f *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Iterate(@"go/token".f func (? *@"go/token".File) (? bool)) ()
func (? *@"go/token".FileSet) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".FileSet) @"go/token".Read(@"go/token".decode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".Write(@"go/token".encode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".file(@"go/token".p @"go/token".Pos) (? *@"go/token".File)
type @"go/ast".Node interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos) }
type @"testing".T struct { ? @"testing".common; @"testing".name string; @"testing".startParallel chan bool }
func (? *@"testing".T) @"testing".Parallel() ()
func (? *@"testing".T) @"testing".report() ()
type @"go/token".Token int
func (? @"go/token".Token) @"go/token".IsKeyword() (? bool)
func (? @"go/token".Token) @"go/token".IsLiteral() (? bool)
func (? @"go/token".Token) @"go/token".IsOperator() (? bool)
func (? @"go/token".Token) @"go/token".Precedence() (? int)
func (? @"go/token".Token) @"go/token".String() (? string)
func (? *@"go/token".Token) @"go/token".IsKeyword() (? bool)
func (? *@"go/token".Token) @"go/token".IsLiteral() (? bool)
func (? *@"go/token".Token) @"go/token".IsOperator() (? bool)
func (? *@"go/token".Token) @"go/token".Precedence() (? int)
func (? *@"go/token".Token) @"go/token".String() (? string)
type @"go/token".Position struct { @"go/token".Filename string; @"go/token".Offset int; @"go/token".Line int; @"go/token".Column int }
func (? @"go/token".Position) @"go/token".String() (? string)
func (? *@"go/token".Position) @"go/token".IsValid() (? bool)
func (? *@"go/token".Position) @"go/token".String() (? string)
type @"go/token".Pos int
func (? @"go/token".Pos) @"go/token".IsValid() (? bool)
func (? *@"go/token".Pos) @"go/token".IsValid() (? bool)
type @"go/ast".BlockStmt struct { @"go/ast".Lbrace @"go/token".Pos; @"go/ast".List []@"go/ast".Stmt; @"go/ast".Rbrace @"go/token".Pos }
func (? *@"go/ast".BlockStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BlockStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BlockStmt) @"go/ast".stmtNode() ()
type @"go/ast".BinaryExpr struct { @"go/ast".X @"go/ast".Expr; @"go/ast".OpPos @"go/token".Pos; @"go/ast".Op @"go/token".Token; @"go/ast".Y @"go/ast".Expr }
func (? *@"go/ast".BinaryExpr) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BinaryExpr) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BinaryExpr) @"go/ast".exprNode() ()
type @"go/ast".Comment struct { @"go/ast".Slash @"go/token".Pos; @"go/ast".Text string }
func (? *@"go/ast".Comment) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Comment) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".Stmt interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".stmtNode() () }
type @"go/ast".Expr interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".exprNode() () }
type @"go/ast".Decl interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".declNode() () }
type @"go/ast".FieldList struct { @"go/ast".Opening @"go/token".Pos; @"go/ast".List []*@"go/ast".Field; @"go/ast".Closing @"go/token".Pos }
func (? *@"go/ast".FieldList) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FieldList) @"go/ast".NumFields() (? int)
func (? *@"go/ast".FieldList) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".File struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Package @"go/token".Pos; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Decls []@"go/ast".Decl; @"go/ast".Scope *@"go/ast".Scope; @"go/ast".Imports []*@"go/ast".ImportSpec; @"go/ast".Unresolved []*@"go/ast".Ident; @"go/ast".Comments []*@"go/ast".CommentGroup }
func (? *@"go/ast".File) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".File) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".FuncDecl struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Recv *@"go/ast".FieldList; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Type *@"go/ast".FuncType; @"go/ast".Body *@"go/ast".BlockStmt }
func (? *@"go/ast".FuncDecl) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FuncDecl) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".FuncDecl) @"go/ast".declNode() ()
type @"go/ast".GenDecl struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".TokPos @"go/token".Pos; @"go/ast".Tok @"go/token".Token; @"go/ast".Lparen @"go/token".Pos; @"go/ast".Specs []@"go/ast".Spec; @"go/ast".Rparen @"go/token".Pos }
func (? *@"go/ast".GenDecl) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".GenDecl) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".GenDecl) @"go/ast".declNode() ()
type @"go/ast".Ident struct { @"go/ast".NamePos @"go/token".Pos; @"go/ast".Name string; @"go/ast".Obj *@"go/ast".Object }
func (? *@"go/ast".Ident) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Ident) @"go/ast".IsExported() (? bool)
func (? *@"go/ast".Ident) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".Ident) @"go/ast".String() (? string)
func (? *@"go/ast".Ident) @"go/ast".exprNode() ()
type @"go/ast".Field struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Names []*@"go/ast".Ident; @"go/ast".Type @"go/ast".Expr; @"go/ast".Tag *@"go/ast".BasicLit; @"go/ast".Comment *@"go/ast".CommentGroup }
func (? *@"go/ast".Field) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Field) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".Spec interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".specNode() () }
type @"go/ast".ValueSpec struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Names []*@"go/ast".Ident; @"go/ast".Type @"go/ast".Expr; @"go/ast".Values []@"go/ast".Expr; @"go/ast".Comment *@"go/ast".CommentGroup }
func (? *@"go/ast".ValueSpec) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".ValueSpec) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".ValueSpec) @"go/ast".specNode() ()
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
type @"go/token".File struct { @"go/token".set *@"go/token".FileSet; @"go/token".name string; @"go/token".base int; @"go/token".size int; @"go/token".lines []int; @"go/token".infos []@"go/token".lineInfo }
func (? *@"go/token".File) @"go/token".AddLine(@"go/token".offset int) ()
func (? *@"go/token".File) @"go/token".AddLineInfo(@"go/token".offset int, @"go/token".filename string, @"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Base() (? int)
func (? *@"go/token".File) @"go/token".Line(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".LineCount() (? int)
func (? *@"go/token".File) @"go/token".MergeLine(@"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Name() (? string)
func (? *@"go/token".File) @"go/token".Offset(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".Pos(@"go/token".offset int) (? @"go/token".Pos)
func (? *@"go/token".File) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".SetLines(@"go/token".lines []int) (? bool)
func (? *@"go/token".File) @"go/token".SetLinesForContent(@"go/token".content []byte) ()
func (? *@"go/token".File) @"go/token".Size() (? int)
func (? *@"go/token".File) @"go/token".info(@"go/token".offset int) (@"go/token".filename string, @"go/token".line int, @"go/token".column int)
func (? *@"go/token".File) @"go/token".position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
import time "time"
type @"testing".common struct { @"testing".mu @"sync".RWMutex; @"testing".output []byte; @"testing".failed bool; @"testing".skipped bool; @"testing".finished bool; @"testing".start @"time".Time; @"testing".duration @"time".Duration; @"testing".self interface {  }; @"testing".signal chan interface {  } }
func (? *@"testing".common) @"testing".Error(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Errorf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fail() ()
func (? *@"testing".common) @"testing".FailNow() ()
func (? *@"testing".common) @"testing".Failed() (? bool)
func (? *@"testing".common) @"testing".Fatal(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fatalf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Log(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Logf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skip(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".SkipNow() ()
func (? *@"testing".common) @"testing".Skipf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skipped() (? bool)
func (? *@"testing".common) @"testing".log(@"testing".s string) ()
func (? *@"testing".common) @"testing".private() ()
func (? *@"testing".common) @"testing".skip() ()
type @"go/ast".Scope struct { @"go/ast".Outer *@"go/ast".Scope; @"go/ast".Objects map[string]*@"go/ast".Object }
func (? *@"go/ast".Scope) @"go/ast".Insert(@"go/ast".obj *@"go/ast".Object) (@"go/ast".alt *@"go/ast".Object)
func (? *@"go/ast".Scope) @"go/ast".Lookup(@"go/ast".name string) (? *@"go/ast".Object)
func (? *@"go/ast".Scope) @"go/ast".String() (? string)
type @"go/ast".ImportSpec struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Path *@"go/ast".BasicLit; @"go/ast".Comment *@"go/ast".CommentGroup; @"go/ast".EndPos @"go/token".Pos }
func (? *@"go/ast".ImportSpec) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".ImportSpec) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".ImportSpec) @"go/ast".specNode() ()
type @"go/ast".FuncType struct { @"go/ast".Func @"go/token".Pos; @"go/ast".Params *@"go/ast".FieldList; @"go/ast".Results *@"go/ast".FieldList }
func (? *@"go/ast".FuncType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FuncType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".FuncType) @"go/ast".exprNode() ()
type @"go/ast".Object struct { @"go/ast".Kind @"go/ast".ObjKind; @"go/ast".Name string; @"go/ast".Decl interface {  }; @"go/ast".Data interface {  }; @"go/ast".Type interface {  } }
func (? *@"go/ast".Object) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".BasicLit struct { @"go/ast".ValuePos @"go/token".Pos; @"go/ast".Kind @"go/token".Token; @"go/ast".Value string }
func (? *@"go/ast".BasicLit) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BasicLit) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BasicLit) @"go/ast".exprNode() ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
type @"go/token".lineInfo struct { @"go/token".Offset int; @"go/token".Filename string; @"go/token".Line int }
type @"time".Time struct { @"time".sec int64; @"time".nsec uintptr; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"go/ast".ObjKind int
func (? @"go/ast".ObjKind) @"go/ast".String() (? string)
func (? *@"go/ast".ObjKind) @"go/ast".String() (? string)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
0�github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathsyscallstringstimeosstrconvreflectfmtsortflagbufiotext/tabwriter
go/scannergo/ast0��0testingA0
bytesB0go/astC0
whiteSpace0  0d 0AAJAA=$pkg.pmode=$newType(4,"Int","printer.pmode","pmode","go/printer",null); 0pmode0  0�� 0AB��AB=$pkg.commentInfo=$newType(0,"Struct","printer.commentInfo","commentInfo","go/printer",function(cindex_,comment_,commentOffset_,commentNewline_){this.$val=this;this.cindex=cindex_!==undefined?cindex_:0;this.comment=comment_!==undefined?comment_:($ptrType(C.CommentGroup)).nil;this.commentOffset=commentOffset_!==undefined?commentOffset_:0;this.commentNewline=commentNewline_!==undefined?commentNewline_:false;});��AB.init([["cindex","cindex","go/printer",$Int,""],["comment","comment","go/printer",($ptrType(C.CommentGroup)),""],["commentOffset","commentOffset","go/printer",$Int,""],["commentNewline","commentNewline","go/printer",$Bool,""]]);0
aNewline0  0d 0  6    AL=new($sliceType($Uint8))($stringToBytes("\n"));0
aNewline0go/printer:aNewline 0��go/printer.TestSourcePos0MaM=$pkg.TestSourcePos=function(a){   [a.common.Skip(new($sliceType($emptyInterface))([]));    }; 0
    if(b.comments===($sliceType(($ptrType(C.CommentGroup)))).nil){  
Ab.comments=($sliceType(($ptrType(C.CommentGroup)))).make(1);        }else if(b.commentInfo.cindex<b.comments.$length){  8b.flush($clone(b.posFor((c=a.List,((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0])).Pos()),D.Position),0);  lb.comments=$subslice(b.comments,0,1);  �b.internalError(new($sliceType($emptyInterface))([new $String("setComment found pending comments")]));    }  �(d=b.comments,(0<0||0>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+0]=a);  �b.commentInfo.cindex=0;  �    if(b.commentInfo.commentOffset===1073741824){  �b.nextComment();    }    };AC.prototype.setComment=function(a){return this.$val.setComment(a);}; 0printer
setComment0��go/ast:CommentGroupgo/printer:flushgo/printer:internalErrorgo/printer:nextCommentgo/printer:posForgo/printer:printergo/token:Position 0�c(*go/printer.printer).identList0 ��AC.Ptr.prototype.identList=function(a,b){var c,d,e,f,g,h,i;  Tc=this;  �d=($sliceType(C.Expr)).make(a.$length);  �e=a;f=0;while(f<e.$length){g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  (g<0||g>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+g]=h;    f++;}  (  ,i=0;  ?    if(!b){  Ni=2;    }  bc.exprList(0,d,1,i,0);    };AC.prototype.identList=function(a,b){return this.$val.identList(a,b);}; 0printer	identList06go/ast:Exprgo/printer:exprListgo/printer:printer 0��(*go/printer.printer).exprList0 �
�AC.Ptr.prototype.exprList=function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae;  �f=this;  a    if(b.$length===0){  wreturn;    }  �g=new D.Position.Ptr();$copy(g,f.posFor(a),D.Position);  �h=new D.Position.Ptr();$copy(h,f.posFor(e),D.Position);  �i=f.lineFor(((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0]).Pos());  �k=f.lineFor((j=b.$length-1>>0,((j<0||j>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+j])).End());      if(g.IsValid()&&(g.Line===i)&&(i===k)){  ll=b;m=0;while(m<l.$length){n=m;o=((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]);  �    if(n>0){  f.print(new($sliceType($emptyInterface))([new D.Pos(o.Pos()),new D.Token(52),new Z(32)]));    }  1f.expr0(o,c);    m++;}  Ireturn;    }  p=0;  +    if(((d&2)>>>0)===0){  Ep=62;    }  �q=-1;      if(g.IsValid()&&g.Line<i&&f.linebreak(i,0,p,true)){  _p=0;  mq=0;    }  �r=0;  	s=b;t=0;while(t<s.$length){u=t;v=((t<0||t>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+t]);  $w=i;  7i=f.lineFor(v.Pos());  �x=true;  wy=r;  �  �r=f.nodeSize(v,1000000);  �z=$assertType(v,($ptrType(C.KeyValueExpr)),true);aa=z[0];ab=z[1];  	    if(r<=1000000&&g.IsValid()&&h.IsValid()){  d    if(ab){  tr=f.nodeSize(aa.Key,1000000);    }    }else{  �r=0;    }  �    if(y>0&&r>0){    )    if(y<=20&&r<=20){  ]x=false;    }else{  {  �ac=r/y;  �x=ac<=0.25||4<=ac;    }    }  �    if(u>0){  ad=w<i&&w>0&&i>0;  �    if(!ad){  f.print(new($sliceType($emptyInterface))([new D.Pos(v.Pos())]));    }  f.print(new($sliceType($emptyInterface))([new D.Token(52)]));  2ae=true;  H    if(ad){      if(f.linebreak(i,0,p,x||(q+1>>0)<u)){  Up=0;  fq=u;  yae=false;    }    }  �    if(ae){  �f.print(new($sliceType($emptyInterface))([new Z(32)]));    }    }  �    if(ab&&r>0&&b.$length>1){  �f.expr(aa.Key);  �f.print(new($sliceType($emptyInterface))([new D.Pos(aa.Colon),new D.Token(58),new Z(11)]));   f.expr(aa.Value);    }else{   4f.expr0(v,c);    }    t++;}   O    if(!((((d&1)>>>0)===0))&&h.IsValid()&&f.pos.Line<h.Line){   �f.print(new($sliceType($emptyInterface))([new D.Token(52)]));   �    if((p===0)&&(((d&2)>>>0)===0)){  !8f.print(new($sliceType($emptyInterface))([new Z(60)]));    }  !Pf.print(new($sliceType($emptyInterface))([new Z(12)]));  !�return;    }  !�    if((p===0)&&(((d&2)>>>0)===0)){  !�f.print(new($sliceType($emptyInterface))([new Z(60)]));    }    };AC.prototype.exprList=function(a,b,c,d,e){return this.$val.exprList(a,b,c,d,e);}; 0printerexprList0��go/ast:KeyValueExprgo/printer:exprgo/printer:expr0go/printer:lineForgo/printer:linebreakgo/printer:nodeSizego/printer:posForgo/printer:printgo/printer:printergo/printer:whiteSpacego/token:Posgo/token:Positiongo/token:Token 0� (*go/printer.printer).parameters0 ��AC.Ptr.prototype.parameters=function(a){var b,c,d,e,f,g,h,i,j,k,l,m;  "
b=this;  ";b.print(new($sliceType($emptyInterface))([new D.Pos(a.Opening),new D.Token(49)]));  "b    if(a.List.$length>0){  "~c=b.lineFor(a.Opening);  "�d=62;  "�e=a.List;f=0;while(f<e.$length){g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  #u  #yi=0;  #�    if(h.Names.$length>0){  #�i=b.lineFor((j=h.Names,((0<0||0>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+0])).Pos());    }else{  #�i=b.lineFor(h.Type.Pos());    }  $  $k=b.lineFor(h.Type.End());  $^l=0<c&&c<i;  $�    if(g>0){  %M    if(!l){  %gb.print(new($sliceType($emptyInterface))([new D.Pos(h.Pos())]));    }  %�b.print(new($sliceType($emptyInterface))([new D.Token(52)]));    }  %�    if(l&&b.linebreak(i,0,d,true)){  &ed=0;        }else if(g>0){  &�b.print(new($sliceType($emptyInterface))([new Z(32)]));    }  &�    if(h.Names.$length>0){  (`b.identList(h.Names,d===62);  (�b.print(new($sliceType($emptyInterface))([new Z(32)]));    }  (�b.expr(W(h.Type));  (�c=k;    f++;}  )k  )nm=b.lineFor(a.Closing);    if(0<c&&c<m){  )�b.print(new($sliceType($emptyInterface))([new D.Token(52)]));  )�b.linebreak(m,0,0,true);    }  *    if(d===0){  *2b.print(new($sliceType($emptyInterface))([new Z(60)]));    }    }  *Lb.print(new($sliceType($emptyInterface))([new D.Pos(a.Closing),new D.Token(54)]));    };AC.prototype.parameters=function(a){return this.$val.parameters(a);}; 0printer
parameters0��go/printer:exprgo/printer:identListgo/printer:lineForgo/printer:linebreakgo/printer:printgo/printer:printergo/printer:stripParensAlwaysgo/printer:whiteSpacego/token:Posgo/token:Token 0��(*go/printer.printer).signature0 ��AC.Ptr.prototype.signature=function(a,b){var c,d,e,f;  *{c=this;  *�    if(!(a===($ptrType(C.FieldList)).nil)){  *�c.parameters(a);    }else{  *�c.print(new($sliceType($emptyInterface))([new D.Token(49),new D.Token(54)]));    }  +d=b.NumFields();  +*    if(d>0){  +Jc.print(new($sliceType($emptyInterface))([new Z(32)]));  +[    if((d===1)&&(e=b.List,((0<0||0>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+0])).Names===($sliceType(($ptrType(C.Ident)))).nil){  +�c.expr(W((f=b.List,((0<0||0>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+0])).Type));  +�return;    }  +�c.parameters(b);    }    };AC.prototype.signature=function(a,b){return this.$val.signature(a,b);}; 0printer	signature0��go/ast:FieldListgo/ast:Identgo/printer:exprgo/printer:parametersgo/printer:printgo/printer:printergo/printer:stripParensAlwaysgo/printer:whiteSpacego/token:Token 0��go/printer.identListSize0O�0O=function(a,b){var c=0,d,e,f,g;  ,Kd=a;e=0;while(e<d.$length){f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  ,f    if(f>0){  ,tc=c+(2)>>0;    }  ,�c=c+(E.RuneCountInString(g.Name))>>0;  ,�    if(c>=b){  ,�break;    }    e++;}  ,�return c;    }; 0
switch(0){default:if($assertType(m,($ptrType(C.BinaryExpr)),true)[1]){l=m.$val;  ="    if((new D.Token(l.Op)).Precedence()<=(new D.Token(a.Op)).Precedence()){  =�break;    }  =�n=P(l);o=n[0];p=n[1];q=n[2];  =�b=b||o;  =�c=c||p;  =�    if(d<q){  >d=q;    }      >(}else if($assertType(m,($ptrType(C.StarExpr)),true)[1]){l=m.$val;  >>    if(a.Op===15){  >`d=5;    }      >u}else if($assertType(m,($ptrType(C.UnaryExpr)),true)[1]){l=m.$val;  >�r=(new D.Token(a.Op)).String()+(new D.Token(l.Op)).String();  >�if(r==="/*"||r==="&&"||r==="&^"){  >�d=5;      >�}else if(r==="++"||r==="--"){  >�    if(d<4){  ?d=4;    }    }    }}  ?(return[b,c,d];    }; 0
walkBinary0Fgo/ast:BinaryExprgo/ast:StarExprgo/ast:UnaryExprgo/token:Token 0�7go/printer.cutoff0Q��Q=function(a,b){var c,d,e,f;  ?cc=P(a);d=c[0];e=c[1];f=c[2];  ?�    if(f>0){  ?�return f+1>>0;    }  ?�    if(d&&e){  ?�    if(b===1){  ?�return 5;    }  ?�return 4;    }  ?�    if(b===1){  @return 6;    }  @return 4;    }; 0cutoff0go/printer:walkBinary 0�go/printer.diffPrec0R��R=function(a,b){var c,d,e;  @Xc=$assertType(a,($ptrType(C.BinaryExpr)),true);d=c[0];e=c[1];  @y    if(!e||!((b===(new D.Token(d.Op)).Precedence()))){  @�return 1;    }  @�return 0;    }; 0
diffPrec0#go/ast:BinaryExprgo/token:Token 0��go/printer.reduceDepth0SYS=function(a){  @�  @�a=a-(1)>>0;  @�    if(a<1){  @�a=1;    }  Areturn a;    }; 0
binaryExpr0��go/printer:diffPrecgo/printer:expr0go/printer:expr1go/printer:lineForgo/printer:linebreakgo/printer:printgo/printer:printergo/printer:reduceDepthgo/printer:whiteSpacego/token:Posgo/token:Token 0��go/printer.isBinary0TfT=function(a){var b,c;  JMb=$assertType(a,($ptrType(C.BinaryExpr)),true);c=b[1];  Jnreturn c;    }; 0
isBinary0go/ast:BinaryExpr 0�"�(*go/printer.printer).expr10 �QAC.Ptr.prototype.expr1=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;  J�d=this;  J�d.print(new($sliceType($emptyInterface))([new D.Pos(a.Pos())]));  J�f=a;  J�if($assertType(f,($ptrType(C.BadExpr)),true)[1]){e=f.$val;  J�d.print(new($sliceType($emptyInterface))([new $String("BadExpr")]));      K}else if($assertType(f,($ptrType(C.Ident)),true)[1]){e=f.$val;  K%d.print(new($sliceType($emptyInterface))([e]));      K2}else if($assertType(f,($ptrType(C.BinaryExpr)),true)[1]){e=f.$val;  KJ    if(c<1){  K\d.internalError(new($sliceType($emptyInterface))([new $String("depth < 1:"),new $Int(c)]));  K�c=1;    }  K�d.binaryExpr(e,b,Q(e,c),c);      K�}else if($assertType(f,($ptrType(C.KeyValueExpr)),true)[1]){e=f.$val;  K�d.expr(e.Key);  K�d.print(new($sliceType($emptyInterface))([new D.Pos(e.Colon),new D.Token(58),new Z(32)]));  Ld.expr(e.Value);      L)}else if($assertType(f,($ptrType(C.StarExpr)),true)[1]){e=f.$val;  L?  L^    if(6<b){  L�d.print(new($sliceType($emptyInterface))([new D.Token(49)]));  L�d.print(new($sliceType($emptyInterface))([new D.Token(14)]));  L�d.expr(e.X);  L�d.print(new($sliceType($emptyInterface))([new D.Token(54)]));    }else{  M
d.print(new($sliceType($emptyInterface))([new D.Token(14)]));  M d.expr(e.X);    }      M2}else if($assertType(f,($ptrType(C.UnaryExpr)),true)[1]){e=f.$val;  MI  Mh    if(6<b){  M�d.print(new($sliceType($emptyInterface))([new D.Token(49)]));  M�d.expr(e);  M�d.print(new($sliceType($emptyInterface))([new D.Token(54)]));    }else{  M�d.print(new($sliceType($emptyInterface))([new D.Token(e.Op)]));  N
isTypeName0#go/ast:Identgo/ast:SelectorExpr 0�bgo/printer.stripParens0V��V=function(a){var b,c,d;  g�  g�b=$assertType(a,($ptrType(C.ParenExpr)),true);c=b[0];d=b[1];    if(d){  h�C.Inspect(c.X,(function(e){var f,g;  h�g=e;  h�if($assertType(g,($ptrType(C.ParenExpr)),true)[1]){f=g.$val;  i/return false;      i?}else if($assertType(g,($ptrType(C.CompositeLit)),true)[1]){f=g.$val;  i[    if(U(f.Type)){  ixd=false;    }  i�return false;    }  i�return true;    }));  i�    if(d){  jreturn V(c.X);    }    }  j-return a;    }; 0
    if(!($interfaceIsEqual(d,$ifaceNil))){  me.stmt(d,false);  m7f=true;    }    }    }  mV    if(f){  mhe.print(new($sliceType($emptyInterface))([new Z(32)]));    }    };AC.prototype.controlClause=function(a,b,c,d){return this.$val.controlClause(a,b,c,d);}; 0printer
indentList0(go/printer:lineForgo/printer:printer 0�(*go/printer.printer).stmt0 ��AC.Ptr.prototype.stmt=function(a,b){var c,d,e,f,g,h,i,j,k;  qVc=this;  q�c.print(new($sliceType($emptyInterface))([new D.Pos(a.Pos())]));  q�e=a;  q�switch(0){default:if($assertType(e,($ptrType(C.BadStmt)),true)[1]){d=e.$val;  q�c.print(new($sliceType($emptyInterface))([new $String("BadStmt")]));      q�}else if($assertType(e,($ptrType(C.DeclStmt)),true)[1]){d=e.$val;  q�c.decl(d.Decl);      r}else if($assertType(e,($ptrType(C.EmptyStmt)),true)[1]){d=e.$val;      r8}else if($assertType(e,($ptrType(C.LabeledStmt)),true)[1]){d=e.$val;  r�c.print(new($sliceType($emptyInterface))([new Z(60)]));  sc.expr(d.Label);  sc.print(new($sliceType($emptyInterface))([new D.Pos(d.Colon),new D.Token(58),new Z(62)]));  s?  sBf=$assertType(d.Stmt,($ptrType(C.EmptyStmt)),true);g=f[0];h=f[1];    if(h){  sv    if(!b){  s�c.print(new($sliceType($emptyInterface))([new Z(10),new D.Pos(g.Pos()),new D.Token(57)]));  s�break;    }    }else{  s�c.linebreak(c.lineFor(d.Stmt.Pos()),1,0,true);    }  tc.stmt(d.Stmt,b);      t0}else if($assertType(e,($ptrType(C.ExprStmt)),true)[1]){d=e.$val;  tF  tXc.expr0(d.X,1);      tn}else if($assertType(e,($ptrType(C.SendStmt)),true)[1]){d=e.$val;  t�  t�c.expr0(d.Chan,1);  t�c.print(new($sliceType($emptyInterface))([new Z(32),new D.Pos(d.Arrow),new D.Token(36),new Z(32)]));  t�c.expr0(d.Value,1);      t�}else if($assertType(e,($ptrType(C.IncDecStmt)),true)[1]){d=e.$val;  u  u!c.expr0(d.X,2);  u9c.print(new($sliceType($emptyInterface))([new D.Pos(d.TokPos),new D.Token(d.Tok)]));      uT}else if($assertType(e,($ptrType(C.AssignStmt)),true)[1]){d=e.$val;  ul  upi=1;  u|    if(d.Lhs.$length>1&&d.Rhs.$length>1){  u�  u�i=i+(1)>>0;    }  u�c.exprList(d.Pos(),d.Lhs,i,0,d.TokPos);  u�c.print(new($sliceType($emptyInterface))([new Z(32),new D.Pos(d.TokPos),new D.Token(d.Tok),new Z(32)]));  v
c.expr(d.Key);  �    if(!($interfaceIsEqual(d.Value,$ifaceNil))){  ��c.print(new($sliceType($emptyInterface))([new D.Pos(d.Value.Pos()),new D.Token(52),new Z(32)]));  ��c.expr(d.Value);    }  ��c.print(new($sliceType($emptyInterface))([new Z(32),new D.Pos(d.TokPos),new D.Token(d.Tok),new Z(32),new D.Token(79),new Z(32)]));  �c.expr(V(d.X));  �3c.print(new($sliceType($emptyInterface))([new Z(32)]));  �Dc.block(d.Body,1);    }else{d=e;  �d$panic(new $String("unreachable"));    }}  �~return;    };AC.prototype.stmt=function(a,b){return this.$val.stmt(a,b);}; 0printerstmt0�go/ast:AssignStmtgo/ast:BadStmtgo/ast:BlockStmtgo/ast:BranchStmtgo/ast:CaseClausego/ast:CommClausego/ast:DeclStmtgo/ast:DeferStmtgo/ast:EmptyStmtgo/ast:Exprgo/ast:ExprStmtgo/ast:ForStmt
recordLine0go/printer:printer 0��(*go/printer.printer).linesFrom0 ��AC.Ptr.prototype.linesFrom=function(a){var b;  ��b=this;  ��return b.out.Line-a>>0;    };AC.prototype.linesFrom=function(a){return this.$val.linesFrom(a);}; 0printer	linesFrom0go/printer:printer 0��(*go/printer.printer).posFor0 ��AC.Ptr.prototype.posFor=function(a){var b;  ��b=this;  �\return b.fset.Position(a);    };AC.prototype.posFor=function(a){return this.$val.posFor(a);}; 0printerposFor0go/printer:printer 0�O(*go/printer.printer).lineFor0 ��AC.Ptr.prototype.lineFor=function(a){var b;  ��b=this;  ��    if(!((a===b.cachedPos))){  ��b.cachedPos=a;  ��b.cachedLine=b.fset.Position(a).Line;    }  �return b.cachedLine;    };AC.prototype.lineFor=function(a){return this.$val.lineFor(a);}; 0printerlineFor0go/printer:printer 0��!(*go/printer.printer).atLineBegin0 �+AC.Ptr.prototype.atLineBegin=function(a){var b,c,d;  �nb=this;  ��    if(!((((b.Config.Mode&8)>>>0)===0))&&a.IsValid()&&(!((b.out.Line===a.Line))||!(b.out.Filename===a.Filename))){  �8b.output=$append(b.output,255);  ��b.output=$appendSlice(b.output,new($sliceType($Uint8))($stringToBytes(F.Sprintf("//line %s:%d\n",new($sliceType($emptyInterface))([new $String(a.Filename),new $Int(a.Line)])))));  ��b.output=$append(b.output,255);  �Qb.out.Filename=a.Filename;  �qb.out.Line=a.Line;    }  ��c=b.Config.Indent+b.indent>>0;  �5  �9d=0;while(d<c){  �Pb.output=$append(b.output,9);      �H  �Hd=d+(1)>>0;}  b.pos.Offset=b.pos.Offset+(c)>>0;  b.pos.Column=b.pos.Column+(c)>>0;  ²b.out.Column=b.out.Column+(c)>>0;    };AC.prototype.atLineBegin=function(a){return this.$val.atLineBegin(a);}; 0printeratLineBegin0!fmt:Sprintfgo/printer:printer 0��(*go/printer.printer).writeByte0 �DAC.Ptr.prototype.writeByte=function(a,b){var c,d;  �c=this;  �4    if(c.out.Column===1){  �Mc.atLineBegin($clone(c.pos,D.Position));    }  �g  �kd=0;while(d<b){  Âc.output=$append(c.output,a);      �z  �zd=d+(1)>>0;}  üc.pos.Offset=c.pos.Offset+(b)>>0;  ��    if((a===10)||(a===12)){  ��c.pos.Line=c.pos.Line+(b)>>0;  �c.out.Line=c.out.Line+(b)>>0;  �c.pos.Column=1;  �&c.out.Column=1;  �9return;    }  �Dc.pos.Column=c.pos.Column+(b)>>0;  �Wc.out.Column=c.out.Column+(b)>>0;    };AC.prototype.writeByte=function(a,b){return this.$val.writeByte(a,b);}; 0printer	writeByte0?go/printer:atLineBegingo/printer:printergo/token:Position 0�b!(*go/printer.printer).writeString0 ��AC.Ptr.prototype.writeString=function(a,b,c){var d,e,f,g,h;  ��d=this;  �    if(d.out.Column===1){  �1d.atLineBegin($clone(a,D.Position));    }  �I    if(a.IsValid()){  �=$copy(d.pos,a,D.Position);    }  �N    if(c){  �#d.output=$append(d.output,255);    }  �V  ɺd.output=$appendSlice(d.output,new($sliceType($Uint8))($stringToBytes(b)));  ��e=0;  �   �f=0;  �:  �>g=0;while(g<b.length){  ʖ    if(b.charCodeAt(g)===10){  ʫ  ʫe=e+(1)>>0;  ʷf=g;    }      �R  �Rg=g+(1)>>0;}  ��d.pos.Offset=d.pos.Offset+(b.length)>>0;  ��    if(e>0){  ��d.pos.Line=d.pos.Line+(e)>>0;  �d.out.Line=d.out.Line+(e)>>0;  �h=b.length-f>>0;  �1d.pos.Column=h;  �Dd.out.Column=h;    }else{  �ad.pos.Column=d.pos.Column+(b.length)>>0;  �zd.out.Column=d.out.Column+(b.length)>>0;    }  ˖    if(c){  ˣd.output=$append(d.output,255);    }  ��$copy(d.last,d.pos,D.Position);    };AC.prototype.writeString=function(a,b,c){return this.$val.writeString(a,b,c);}; 0printerwriteString0?go/printer:atLineBegingo/printer:printergo/token:Position 0�	�((*go/printer.printer).writeCommentPrefix0 ��AC.Ptr.prototype.writeCommentPrefix=function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa;  �^f=this;  ��    if(f.output.$length===0){  �/return;    }  �;    if(a.IsValid()&&!(a.Filename===f.last.Filename)){  έf.writeByte(12,2);  ��return;    }  ��    if((a.Line===f.last.Line)&&(c===($ptrType(C.Comment)).nil||!((c.Text.charCodeAt(1)===47)))){  �wg=false;  ω    if(c===($ptrType(C.Comment)).nil){  ��h=0;  ��i=f.wsbuf;j=0;while(j<i.$length){k=j;l=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);  ��m=l;  ��if(m===32){  �;(n=f.wsbuf,(k<0||k>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+k]=0);  �Tj++;continue;      �a}else if(m===11){  ��g=true;  ��j++;continue;      ��}else if(m===62){  �"j++;continue;    }  �5h=k;  �?break;    }  �Mf.writeWhitespace(h);    }  ї    if(!g){  ѧo=9;  Ѽ    if(a.Line===b.Line){  �ho=32;    }  �zf.writeByte(o,1);    }    }else{  ��p=false;  �q=0;  �r=f.wsbuf;s=0;while(s<r.$length){t=s;u=((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]);  �1v=u;  �@if(v===32||v===11){  ӑ(w=f.wsbuf,(t<0||t>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+t]=0);  өs++;continue;      ӵ}else if(v===62){  ��s++;continue;      ��}else if(v===60){  ��    if((t+1>>0)<f.wsbuf.$length&&((x=f.wsbuf,y=t+1>>0,((y<0||y>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+y]))===60)){  � s++;continue;    }  �q    if(!((e===56))&&(a.Column===b.Column)){  ֬s++;continue;    }      ־}else if(v===10||v===12){  ��(z=f.wsbuf,(t<0||t>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+t]=0);  ��p=c===($ptrType(C.Comment)).nil;    }  �Dq=t;  �Mbreak;    }  �Yf.writeWhitespace(q);  רaa=0;  ױ    if(a.IsValid()&&f.last.IsValid()){  ��aa=a.Line-f.last.Line>>0;  ��    if(aa<0){  �aa=0;    }    }  �    if((f.indent===0)&&p){  �1  �1aa=aa+(1)>>0;    }  ٜ    if((aa===0)&&!(c===($ptrType(C.Comment)).nil)&&(c.Text.charCodeAt(1)===47)){  ��aa=1;    }  ��    if(aa>0){  چf.writeByte(12,AH(aa));    }    }    };AC.prototype.writeCommentPrefix=function(a,b,c,d,e){return this.$val.writeCommentPrefix(a,b,c,d,e);}; 0printerwriteCommentPrefix0igo/ast:Commentgo/printer:nlimitgo/printer:printergo/printer:writeBytego/printer:writeWhitespace 0��go/printer.isBlank0AD��AD=function(a){var b;  �=  �Ab=0;while(b<a.length){  �]    if(a.charCodeAt(b)>32){  �preturn false;    }      �U  �Ub=b+(1)>>0;}  ۅreturn true;    }; 0	isBlank0  0�go/printer.commonPrefix0AE��AE=function(a,b){var c;  ��c=0;  ��while(c<a.length&&c<b.length&&(a.charCodeAt(c)===b.charCodeAt(c))&&(a.charCodeAt(c)<=32||(a.charCodeAt(c)===42))){  �L  �Lc=c+(1)>>0;    }  �Treturn a.substring(0,c);    }; 0commonPrefix0  0��go/printer.trimRight0AF?AF=function(a){  ��return J.TrimRightFunc(a,L.IsSpace);    }; 0	trimRight0(strings:TrimRightFuncunicode:IsSpace 0�
Vgo/printer.stripCommonPrefix0AG�	�AG=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa;  ރ    if(a.$length<=1){  ޚreturn;    }  �N  �Rb="";  �a    if(a.$length>2){  �wc=true;  �d=$subslice(a,1,(a.$length-1>>0));e=0;while(e<d.$length){f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  �  ��if(AD(g)){  ��(h=1+f>>0,(h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h]="");      �}else if(c){  �b=AE(g,g);  �Dc=false;    }else{  �bb=AE(b,g);    }    e++;}    }else{  ��i=((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]);  ��b=AE(i,i);    }  �cj=false;  �y  �|k=J.Index(b,"*");    if(k>=0){  ��    if(k>0&&(b.charCodeAt((k-1>>0))===32)){  ��  ��k=k-(1)>>0;    }  �/b=b.substring(0,k);  �Fj=true;    }else{  ��l=((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]);  �    if(AD(l.substring(2))){  � m=b.length;  �  �n=0;while(n<3&&m>0&&(b.charCodeAt((m-1>>0))===32)){  �P  �Pm=m-(1)>>0;      �F  �Fn=n+(1)>>0;}  �\    if((m===b.length)&&m>0&&(b.charCodeAt((m-1>>0))===9)){  �  �m=m-(1)>>0;    }  �b=b.substring(0,m);    }else{  ��o=($sliceType($Uint8)).make(l.length);  �p=2;  �4while(p<l.length&&l.charCodeAt(p)<=32){  �`(p<0||p>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+p]=l.charCodeAt(p);  �y  �yp=p+(1)>>0;    }  �    if(p>2&&(((2<0||2>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+2])===9)){  ��o=$subslice(o,2,p);    }else{  �q=32;r=32;(0<0||0>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+0]=q;(1<0||1>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+1]=r;  �Co=$subslice(o,0,p);    }  ��b=J.TrimSuffix(b,$bytesToString(o));    }    }  �t=(s=a.$length-1>>0,((s<0||s>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+s]));  �u="*/";  ��v=J.Index(t,u);  �    if(AD(t.substring(0,v))){  �S    if(j){  �gu=" */";    }  �(w=a.$length-1>>0,(w<0||w>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+w]=b+u);    }else{  �Sb=AE(b,t);    }  ��x=a;y=0;while(y<x.$length){z=y;aa=((y<0||y>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+y]);  ��    if(z>0&&!(aa==="")){  ��(z<0||z>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+z]=aa.substring(b.length);    }    y++;}    }; 0stripCommonPrefix0Pgo/printer:commonPrefixgo/printer:isBlank
b.pos.Line=h;  �!b.pos.Column=1;  �7b.indent=j;    }),[]]);    }    }    }  �    if(c.charCodeAt(1)===47){  �b.writeString($clone(d,D.Position),AF(c),true);  ��return;    }  �Lk=J.Split(c,"\n");  �    if(d.IsValid()&&(d.Column===1)&&b.indent>0){  ��l=$subslice(k,1);m=0;while(m<l.$length){n=m;o=((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]);  �(p=1+n>>0,(p<0||p>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+p]="   "+o);    m++;}    }  �=AG(k);  ��q=k;r=0;while(r<q.$length){s=r;t=((r<0||r>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+r]);  ��    if(s>0){  ��b.writeByte(12,1);  ��$copy(d,b.pos,D.Position);    }  �    if(t.length>0){  �"b.writeString($clone(d,D.Position),AF(t),true);    }    r++;}    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AC.prototype.writeComment=function(a){return this.$val.writeComment(a);}; 0printerwriteComment0��go/printer:posForgo/printer:printergo/printer:stripCommonPrefixgo/printer:trimRightgo/printer:writeBytego/printer:writeStringgo/token:Positionstrconv:Atoistrings:HasPrefixstrings:LastIndex
mayCombine0  0�|(*go/printer.printer).print0 �
�AC.Ptr.prototype.print=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v; 
"b=this; 
Lc=a;d=0;while(d<c.$length){e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]); 
� 
�f=""; 
� 
�g=false; 
� 
�h=false;  i=b.lastTok; 5if(i===0){     f}else if(i===49||i===50){ �b.prevOpen=b.lastTok;    }else{ �b.prevOpen=0;    } �k=e; if($assertType(k,AA,true)[1]){j=k.$val; Cb.mode=(b.mode^(j))>>0; Rd++;continue;     ^}else if($assertType(k,Z,true)[1]){j=k.$val; r    if(j===0){ �d++;continue;    } 
l=b.wsbuf.$length; 
AC.Ptr.prototype.printNode=function(a){var $this=this,$args=arguments,$s=0,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;while(true){switch($s){case 0: b=$this; T Xc=($sliceType(($ptrType(C.CommentGroup)))).nil; v yd=$assertType(a,($ptrType(AO)),true);e=d[0];f=d[1];    if(f){ �a=e.Node; �c=e.Comments;    } �    if(!(c===($sliceType(($ptrType(C.CommentGroup)))).nil)){}else{$s=2;continue;} ,g=$assertType(a,C.Node,true);h=g[0];i=g[1]; G    if(!i){}else{$s=4;continue;} S$s=1;continue;    case 4: jj=h.Pos(); {k=h.End(); H Kl=AJ(h);    if(!(l===($ptrType(C.CommentGroup)).nil)){ mj=l.Pos();    } �m=0; �while(m<c.$length&&((m<0||m>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+m]).End()<j){  m=m+(1)>>0;    } n=m; !while(n<c.$length&&((n<0||n>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+n]).Pos()<k){ W Wn=n+(1)>>0;    } a    if(m<n){ ob.comments=$subslice(c,m,n);    }    $s=3;continue;case 2: � �o=$assertType(a,($ptrType(C.File)),true);p=o[0];q=o[1];    if(q){ �b.comments=p.Comments;    }    case 3:  +b.useNodeComments=b.comments===($sliceType(($ptrType(C.CommentGroup)))).nil;  rb.nextComment();  �s=a;  �if($assertType(s,C.Expr,true)[1]){}else if($assertType(s,C.Stmt,true)[1]){$s=5;continue;}else if($assertType(s,C.Decl,true)[1]){$s=6;continue;}else if($assertType(s,C.Spec,true)[1]){$s=7;continue;}else if($assertType(s,($sliceType(C.Stmt)),true)[1]){$s=8;continue;}else if($assertType(s,($sliceType(C.Decl)),true)[1]){$s=9;continue;}else if($assertType(s,($ptrType(C.File)),true)[1]){$s=10;continue;}else{$s=11;continue;}r=s;  �b.expr(r);      �$s=12;continue;case 5:r=s; !V !Yt=$assertType(r,($ptrType(C.LabeledStmt)),true);u=t[1];    if(u){ !�b.indent=1;    } !�b.stmt(r,false);     !�$s=12;continue;case 6:r=s; !�b.decl(r);     !�$s=12;continue;case 7:r=s; !�b.spec(r,1,false);     !�$s=12;continue;case 8:r=s.$val; "tv=r;w=0;while(w<v.$length){x=((w<0||w>=v.$length)?$throwRuntimeError("index out of range"):v.$array[v.$offset+w]); "� "�y=$assertType(x,($ptrType(C.LabeledStmt)),true);z=y[1];    if(z){ "�b.indent=1;    }    w++;} "�b.stmtList(r,0,false);     "�$s=12;continue;case 9:r=s.$val; "�b.declList(r);     #$s=12;continue;case 10:r=s.$val; #b.file(r);    $s=12;continue;case 11:r=s; #3$s=1;continue;    case 12: #Ireturn $ifaceNil; #U #ccase 1:return F.Errorf("go/printer: unsupported node type %T",new($sliceType($emptyInterface))([a]));    case-1:}return;}};AC.prototype.printNode=function(a){return this.$val.printNode(a);}; 0printer	printNode0�[
fmt:Errorfgo/ast:CommentGroupgo/ast:Declgo/ast:Exprgo/ast:Filego/ast:LabeledStmtgo/ast:Nodego/ast:Specgo/ast:Stmtgo/printer:CommentedNodego/printer:declgo/printer:declListgo/printer:exprgo/printer:filego/printer:getDocgo/printer:nextCommentgo/printer:printergo/printer:specgo/printer:stmtgo/printer:stmtList 0� (*go/printer.trimmer).resetSpace0 ��AK.Ptr.prototype.resetSpace=function(){var a; &_a=this; &{a.state=0; &�a.space=$subslice(a.space,0,0);    };AK.prototype.resetSpace=function(){return this.$val.resetSpace();}; 0trimmer
resetSpace0go/printer:trimmer 0�](*go/printer.trimmer).Write0 ��AK.Ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u; '�d=this; (�e=0; (� (�f=0; (�g=a;h=0;while(h<g.$length){b=h;f=((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]); (�    if(f===11){ (�f=9;    } )i=d.state; )%if(i===0){ )6j=f; )Dif(j===9||j===32){ )Xd.space=$append(d.space,f);     )x}else if(j===10||j===12){ )�d.resetSpace(); )�k=d.output.Write(AL);c=k[1];     )�}else if(j===255){ )�l=d.output.Write(d.space);c=l[1]; *d.state=1; *6e=b+1>>0;    }else{ *mm=d.output.Write(d.space);c=m[1]; *�d.state=2; *�e=b;    }     *�}else if(i===1){ *�    if(f===255){ *�n=d.output.Write($subslice(a,e,b));c=n[1]; +d.resetSpace();    }     +"}else if(i===2){ +2o=f; +@if(o===9||o===32){ +Tp=d.output.Write($subslice(a,e,b));c=p[1]; +{d.resetSpace(); +�d.space=$append(d.space,f);     +�}else if(o===10||o===12){ +�q=d.output.Write($subslice(a,e,b));c=q[1]; +�d.resetSpace(); +�r=d.output.Write(AL);c=r[1];     ,"}else if(o===255){ ,=s=d.output.Write($subslice(a,e,b));c=s[1]; ,dd.state=1; ,{e=b+1>>0;    }    }else{ ,�$panic(new $String("unreachable"));    } ,�    if(!($interfaceIsEqual(c,$ifaceNil))){ ,�return[b,c];    }    h++;} ,�b=a.$length; -t=d.state; -if(t===1||t===2){ --u=d.output.Write($subslice(a,e,b));c=u[1]; -Rd.resetSpace();    } -freturn[b,c];    };AK.prototype.Write=function(a){return this.$val.Write(a);}; 0	trimmer0@go/printer:aNewlinego/printer:resetSpacego/printer:trimmer 0��(*go/printer.Config).fprint0 ��AN.Ptr.prototype.fprint=function(a,b,c,d){var e=$ifaceNil,f,g,h,i,j,k,l,m; 0�f=this; 1* 1.g=new AC.Ptr();$copy(g,new AC.Ptr(),AC); 19g.init(f,b,d); 1W 1Ze=g.printNode(c);    if(!($interfaceIsEqual(e,$ifaceNil))){ 1�return e;    } 1�g.impliedSemi=false; 1�g.flush(new D.Position.Ptr("",1073741824,1073741824,0),1); 38a=new AK.Ptr(a,0,($sliceType($Uint8)).nil); 3�    if(((f.Mode&1)>>>0)===0){ 3�h=f.Tabwidth; 3�i=9; 3�    if(!((((f.Mode&4)>>>0)===0))){ 4i=32;    } 4j=8; 4C    if(!((((f.Mode&2)>>>0)===0))){ 4ch=0; 4sj=(j|(16))>>>0;    } 4�a=K.NewWriter(a,h,f.Tabwidth,1,i,j);    } 5' 5*k=a.Write(g.output);e=k[1];    if(!($interfaceIsEqual(e,$ifaceNil))){ 5Zreturn e;    } 5� 5�l=$assertType(a,($ptrType(K.Writer)),true);m=l[0];    if(!(m===($ptrType(K.Writer)).nil)){ 5�e=m.Flush();    } 5�return e;    };AN.prototype.fprint=function(a,b,c,d){return this.$val.fprint(a,b,c,d);}; 0Configfprint0��go/printer:Configgo/printer:flushgo/printer:initgo/printer:printNodego/printer:printergo/printer:trimmergo/token:Positiontext/tabwriter:NewWritertext/tabwriter:Writer 0�(*go/printer.Config).Fprint0 ��AN.Ptr.prototype.Fprint=function(a,b,c){var d; 8"d=this; 8xreturn d.fprint(a,b,c,new $Map());    };AN.prototype.Fprint=function(a,b,c){return this.$val.Fprint(a,b,c);}; 0Config0&go/printer:Configgo/printer:fprint 0��go/printer.Fprint0APSAP=$pkg.Fprint=function(a,b,c){ 9lreturn(new AN.Ptr(0,8,0)).Fprint(a,b,c);    }; 0Fprint0go/printer:Config 0
 �