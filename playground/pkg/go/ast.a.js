0��go/ast���package ast
import token "go/token"
import strings "strings"
import unicode "unicode"
import utf8 "unicode/utf8"
import bytes "bytes"
import fmt "fmt"
import sort "sort"
import strconv "strconv"
import io "io"
import os "os"
import reflect "reflect"
import scanner "go/scanner"
type @"".ArrayType struct { @"".Lbrack @"go/token".Pos; @"".Len @"".Expr; @"".Elt @"".Expr }
func (? *@"".ArrayType) @"".End() (? @"go/token".Pos)
func (? *@"".ArrayType) @"".Pos() (? @"go/token".Pos)
func (? *@"".ArrayType) @"".exprNode() ()
type @"".AssignStmt struct { @"".Lhs []@"".Expr; @"".TokPos @"go/token".Pos; @"".Tok @"go/token".Token; @"".Rhs []@"".Expr }
func (? *@"".AssignStmt) @"".End() (? @"go/token".Pos)
func (? *@"".AssignStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".AssignStmt) @"".stmtNode() ()
const @"".Bad @"".ObjKind = 0x0
type @"".BadDecl struct { @"".From @"go/token".Pos; @"".To @"go/token".Pos }
func (? *@"".BadDecl) @"".End() (? @"go/token".Pos)
func (? *@"".BadDecl) @"".Pos() (? @"go/token".Pos)
func (? *@"".BadDecl) @"".declNode() ()
type @"".BadExpr struct { @"".From @"go/token".Pos; @"".To @"go/token".Pos }
func (? *@"".BadExpr) @"".End() (? @"go/token".Pos)
func (? *@"".BadExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".BadExpr) @"".exprNode() ()
type @"".BadStmt struct { @"".From @"go/token".Pos; @"".To @"go/token".Pos }
func (? *@"".BadStmt) @"".End() (? @"go/token".Pos)
func (? *@"".BadStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".BadStmt) @"".stmtNode() ()
type @"".BasicLit struct { @"".ValuePos @"go/token".Pos; @"".Kind @"go/token".Token; @"".Value string }
func (? *@"".BasicLit) @"".End() (? @"go/token".Pos)
func (? *@"".BasicLit) @"".Pos() (? @"go/token".Pos)
func (? *@"".BasicLit) @"".exprNode() ()
type @"".BinaryExpr struct { @"".X @"".Expr; @"".OpPos @"go/token".Pos; @"".Op @"go/token".Token; @"".Y @"".Expr }
func (? *@"".BinaryExpr) @"".End() (? @"go/token".Pos)
func (? *@"".BinaryExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".BinaryExpr) @"".exprNode() ()
type @"".BlockStmt struct { @"".Lbrace @"go/token".Pos; @"".List []@"".Stmt; @"".Rbrace @"go/token".Pos }
func (? *@"".BlockStmt) @"".End() (? @"go/token".Pos)
func (? *@"".BlockStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".BlockStmt) @"".stmtNode() ()
type @"".BranchStmt struct { @"".TokPos @"go/token".Pos; @"".Tok @"go/token".Token; @"".Label *@"".Ident }
func (? *@"".BranchStmt) @"".End() (? @"go/token".Pos)
func (? *@"".BranchStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".BranchStmt) @"".stmtNode() ()
type @"".CallExpr struct { @"".Fun @"".Expr; @"".Lparen @"go/token".Pos; @"".Args []@"".Expr; @"".Ellipsis @"go/token".Pos; @"".Rparen @"go/token".Pos }
func (? *@"".CallExpr) @"".End() (? @"go/token".Pos)
func (? *@"".CallExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".CallExpr) @"".exprNode() ()
type @"".CaseClause struct { @"".Case @"go/token".Pos; @"".List []@"".Expr; @"".Colon @"go/token".Pos; @"".Body []@"".Stmt }
func (? *@"".CaseClause) @"".End() (? @"go/token".Pos)
func (? *@"".CaseClause) @"".Pos() (? @"go/token".Pos)
func (? *@"".CaseClause) @"".stmtNode() ()
type @"".ChanDir int
type @"".ChanType struct { @"".Begin @"go/token".Pos; @"".Arrow @"go/token".Pos; @"".Dir @"".ChanDir; @"".Value @"".Expr }
func (? *@"".ChanType) @"".End() (? @"go/token".Pos)
func (? *@"".ChanType) @"".Pos() (? @"go/token".Pos)
func (? *@"".ChanType) @"".exprNode() ()
type @"".CommClause struct { @"".Case @"go/token".Pos; @"".Comm @"".Stmt; @"".Colon @"go/token".Pos; @"".Body []@"".Stmt }
func (? *@"".CommClause) @"".End() (? @"go/token".Pos)
func (? *@"".CommClause) @"".Pos() (? @"go/token".Pos)
func (? *@"".CommClause) @"".stmtNode() ()
type @"".Comment struct { @"".Slash @"go/token".Pos; @"".Text string }
func (? *@"".Comment) @"".End() (? @"go/token".Pos)
func (? *@"".Comment) @"".Pos() (? @"go/token".Pos)
type @"".CommentGroup struct { @"".List []*@"".Comment }
func (? *@"".CommentGroup) @"".End() (? @"go/token".Pos)
func (? *@"".CommentGroup) @"".Pos() (? @"go/token".Pos)
func (? *@"".CommentGroup) @"".Text() (? string)
type @"".CommentMap map[@"".Node][]*@"".CommentGroup
func (? @"".CommentMap) @"".Comments() (? []*@"".CommentGroup)
func (? @"".CommentMap) @"".Filter(@"".node @"".Node) (? @"".CommentMap)
func (? @"".CommentMap) @"".String() (? string)
func (? @"".CommentMap) @"".Update(@"".old @"".Node, @"".new @"".Node) (? @"".Node)
func (? @"".CommentMap) @"".addComment(@"".n @"".Node, @"".c *@"".CommentGroup) ()
func (? *@"".CommentMap) @"".Comments() (? []*@"".CommentGroup)
func (? *@"".CommentMap) @"".Filter(@"".node @"".Node) (? @"".CommentMap)
func (? *@"".CommentMap) @"".String() (? string)
func (? *@"".CommentMap) @"".Update(@"".old @"".Node, @"".new @"".Node) (? @"".Node)
func (? *@"".CommentMap) @"".addComment(@"".n @"".Node, @"".c *@"".CommentGroup) ()
type @"".CompositeLit struct { @"".Type @"".Expr; @"".Lbrace @"go/token".Pos; @"".Elts []@"".Expr; @"".Rbrace @"go/token".Pos }
func (? *@"".CompositeLit) @"".End() (? @"go/token".Pos)
func (? *@"".CompositeLit) @"".Pos() (? @"go/token".Pos)
func (? *@"".CompositeLit) @"".exprNode() ()
const @"".Con @"".ObjKind = 0x2
type @"".Decl interface { @"".End() (? @"go/token".Pos); @"".Pos() (? @"go/token".Pos); @"".declNode() () }
type @"".DeclStmt struct { @"".Decl @"".Decl }
func (? *@"".DeclStmt) @"".End() (? @"go/token".Pos)
func (? *@"".DeclStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".DeclStmt) @"".stmtNode() ()
type @"".DeferStmt struct { @"".Defer @"go/token".Pos; @"".Call *@"".CallExpr }
func (? *@"".DeferStmt) @"".End() (? @"go/token".Pos)
func (? *@"".DeferStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".DeferStmt) @"".stmtNode() ()
type @"".Ellipsis struct { @"".Ellipsis @"go/token".Pos; @"".Elt @"".Expr }
func (? *@"".Ellipsis) @"".End() (? @"go/token".Pos)
func (? *@"".Ellipsis) @"".Pos() (? @"go/token".Pos)
func (? *@"".Ellipsis) @"".exprNode() ()
type @"".EmptyStmt struct { @"".Semicolon @"go/token".Pos }
func (? *@"".EmptyStmt) @"".End() (? @"go/token".Pos)
func (? *@"".EmptyStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".EmptyStmt) @"".stmtNode() ()
type @"".Expr interface { @"".End() (? @"go/token".Pos); @"".Pos() (? @"go/token".Pos); @"".exprNode() () }
type @"".ExprStmt struct { @"".X @"".Expr }
func (? *@"".ExprStmt) @"".End() (? @"go/token".Pos)
func (? *@"".ExprStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".ExprStmt) @"".stmtNode() ()
type @"".Field struct { @"".Doc *@"".CommentGroup; @"".Names []*@"".Ident; @"".Type @"".Expr; @"".Tag *@"".BasicLit; @"".Comment *@"".CommentGroup }
func (? *@"".Field) @"".End() (? @"go/token".Pos)
func (? *@"".Field) @"".Pos() (? @"go/token".Pos)
type @"".FieldFilter func (@"".name string, @"".value @"reflect".Value) (? bool)
type @"".FieldList struct { @"".Opening @"go/token".Pos; @"".List []*@"".Field; @"".Closing @"go/token".Pos }
func (? *@"".FieldList) @"".End() (? @"go/token".Pos)
func (? *@"".FieldList) @"".NumFields() (? int)
func (? *@"".FieldList) @"".Pos() (? @"go/token".Pos)
type @"".File struct { @"".Doc *@"".CommentGroup; @"".Package @"go/token".Pos; @"".Name *@"".Ident; @"".Decls []@"".Decl; @"".Scope *@"".Scope; @"".Imports []*@"".ImportSpec; @"".Unresolved []*@"".Ident; @"".Comments []*@"".CommentGroup }
func (? *@"".File) @"".End() (? @"go/token".Pos)
func (? *@"".File) @"".Pos() (? @"go/token".Pos)
func @"".FileExports(@"".src *@"".File) (? bool)
type @"".Filter func (? string) (? bool)
func @"".FilterDecl(@"".decl @"".Decl, @"".f @"".Filter) (? bool)
func @"".FilterFile(@"".src *@"".File, @"".f @"".Filter) (? bool)
const @"".FilterFuncDuplicates @"".MergeMode = 0x1
const @"".FilterImportDuplicates @"".MergeMode = 0x4
func @"".FilterPackage(@"".pkg *@"".Package, @"".f @"".Filter) (? bool)
const @"".FilterUnassociatedComments @"".MergeMode = 0x2
type @"".ForStmt struct { @"".For @"go/token".Pos; @"".Init @"".Stmt; @"".Cond @"".Expr; @"".Post @"".Stmt; @"".Body *@"".BlockStmt }
func (? *@"".ForStmt) @"".End() (? @"go/token".Pos)
func (? *@"".ForStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".ForStmt) @"".stmtNode() ()
func @"".Fprint(@"".w @"io".Writer, @"".fset *@"go/token".FileSet, @"".x interface {  }, @"".f @"".FieldFilter) (@"".err error)
const @"".Fun @"".ObjKind = 0x5
type @"".FuncDecl struct { @"".Doc *@"".CommentGroup; @"".Recv *@"".FieldList; @"".Name *@"".Ident; @"".Type *@"".FuncType; @"".Body *@"".BlockStmt }
func (? *@"".FuncDecl) @"".End() (? @"go/token".Pos)
func (? *@"".FuncDecl) @"".Pos() (? @"go/token".Pos)
func (? *@"".FuncDecl) @"".declNode() ()
type @"".FuncLit struct { @"".Type *@"".FuncType; @"".Body *@"".BlockStmt }
func (? *@"".FuncLit) @"".End() (? @"go/token".Pos)
func (? *@"".FuncLit) @"".Pos() (? @"go/token".Pos)
func (? *@"".FuncLit) @"".exprNode() ()
type @"".FuncType struct { @"".Func @"go/token".Pos; @"".Params *@"".FieldList; @"".Results *@"".FieldList }
func (? *@"".FuncType) @"".End() (? @"go/token".Pos)
func (? *@"".FuncType) @"".Pos() (? @"go/token".Pos)
func (? *@"".FuncType) @"".exprNode() ()
type @"".GenDecl struct { @"".Doc *@"".CommentGroup; @"".TokPos @"go/token".Pos; @"".Tok @"go/token".Token; @"".Lparen @"go/token".Pos; @"".Specs []@"".Spec; @"".Rparen @"go/token".Pos }
func (? *@"".GenDecl) @"".End() (? @"go/token".Pos)
func (? *@"".GenDecl) @"".Pos() (? @"go/token".Pos)
func (? *@"".GenDecl) @"".declNode() ()
type @"".GoStmt struct { @"".Go @"go/token".Pos; @"".Call *@"".CallExpr }
func (? *@"".GoStmt) @"".End() (? @"go/token".Pos)
func (? *@"".GoStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".GoStmt) @"".stmtNode() ()
type @"".Ident struct { @"".NamePos @"go/token".Pos; @"".Name string; @"".Obj *@"".Object }
func (? *@"".Ident) @"".End() (? @"go/token".Pos)
func (? *@"".Ident) @"".IsExported() (? bool)
func (? *@"".Ident) @"".Pos() (? @"go/token".Pos)
func (? *@"".Ident) @"".String() (? string)
func (? *@"".Ident) @"".exprNode() ()
type @"".IfStmt struct { @"".If @"go/token".Pos; @"".Init @"".Stmt; @"".Cond @"".Expr; @"".Body *@"".BlockStmt; @"".Else @"".Stmt }
func (? *@"".IfStmt) @"".End() (? @"go/token".Pos)
func (? *@"".IfStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".IfStmt) @"".stmtNode() ()
type @"".ImportSpec struct { @"".Doc *@"".CommentGroup; @"".Name *@"".Ident; @"".Path *@"".BasicLit; @"".Comment *@"".CommentGroup; @"".EndPos @"go/token".Pos }
func (? *@"".ImportSpec) @"".End() (? @"go/token".Pos)
func (? *@"".ImportSpec) @"".Pos() (? @"go/token".Pos)
func (? *@"".ImportSpec) @"".specNode() ()
type @"".Importer func (@"".imports map[string]*@"".Object, @"".path string) (@"".pkg *@"".Object, @"".err error)
type @"".IncDecStmt struct { @"".X @"".Expr; @"".TokPos @"go/token".Pos; @"".Tok @"go/token".Token }
func (? *@"".IncDecStmt) @"".End() (? @"go/token".Pos)
func (? *@"".IncDecStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".IncDecStmt) @"".stmtNode() ()
type @"".IndexExpr struct { @"".X @"".Expr; @"".Lbrack @"go/token".Pos; @"".Index @"".Expr; @"".Rbrack @"go/token".Pos }
func (? *@"".IndexExpr) @"".End() (? @"go/token".Pos)
func (? *@"".IndexExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".IndexExpr) @"".exprNode() ()
func @"".Inspect(@"".node @"".Node, @"".f func (? @"".Node) (? bool)) ()
type @"".InterfaceType struct { @"".Interface @"go/token".Pos; @"".Methods *@"".FieldList; @"".Incomplete bool }
func (? *@"".InterfaceType) @"".End() (? @"go/token".Pos)
func (? *@"".InterfaceType) @"".Pos() (? @"go/token".Pos)
func (? *@"".InterfaceType) @"".exprNode() ()
func @"".IsExported(@"".name string) (? bool)
type @"".KeyValueExpr struct { @"".Key @"".Expr; @"".Colon @"go/token".Pos; @"".Value @"".Expr }
func (? *@"".KeyValueExpr) @"".End() (? @"go/token".Pos)
func (? *@"".KeyValueExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".KeyValueExpr) @"".exprNode() ()
type @"".LabeledStmt struct { @"".Label *@"".Ident; @"".Colon @"go/token".Pos; @"".Stmt @"".Stmt }
func (? *@"".LabeledStmt) @"".End() (? @"go/token".Pos)
func (? *@"".LabeledStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".LabeledStmt) @"".stmtNode() ()
const @"".Lbl @"".ObjKind = 0x6
type @"".MapType struct { @"".Map @"go/token".Pos; @"".Key @"".Expr; @"".Value @"".Expr }
func (? *@"".MapType) @"".End() (? @"go/token".Pos)
func (? *@"".MapType) @"".Pos() (? @"go/token".Pos)
func (? *@"".MapType) @"".exprNode() ()
type @"".MergeMode uint
func @"".MergePackageFiles(@"".pkg *@"".Package, @"".mode @"".MergeMode) (? *@"".File)
func @"".NewCommentMap(@"".fset *@"go/token".FileSet, @"".node @"".Node, @"".comments []*@"".CommentGroup) (? @"".CommentMap)
func @"".NewIdent(@"".name string) (? *@"".Ident)
func @"".NewObj(@"".kind @"".ObjKind, @"".name string) (? *@"".Object)
func @"".NewPackage(@"".fset *@"go/token".FileSet, @"".files map[string]*@"".File, @"".importer @"".Importer, @"".universe *@"".Scope) (? *@"".Package, ? error)
func @"".NewScope(@"".outer *@"".Scope) (? *@"".Scope)
type @"".Node interface { @"".End() (? @"go/token".Pos); @"".Pos() (? @"go/token".Pos) }
func @"".NotNilFilter(_ string, @"".v @"reflect".Value) (? bool)
type @"".ObjKind int
func (? @"".ObjKind) @"".String() (? string)
func (? *@"".ObjKind) @"".String() (? string)
type @"".Object struct { @"".Kind @"".ObjKind; @"".Name string; @"".Decl interface {  }; @"".Data interface {  }; @"".Type interface {  } }
func (? *@"".Object) @"".Pos() (? @"go/token".Pos)
type @"".Package struct { @"".Name string; @"".Scope *@"".Scope; @"".Imports map[string]*@"".Object; @"".Files map[string]*@"".File }
func (? *@"".Package) @"".End() (? @"go/token".Pos)
func (? *@"".Package) @"".Pos() (? @"go/token".Pos)
func @"".PackageExports(@"".pkg *@"".Package) (? bool)
type @"".ParenExpr struct { @"".Lparen @"go/token".Pos; @"".X @"".Expr; @"".Rparen @"go/token".Pos }
func (? *@"".ParenExpr) @"".End() (? @"go/token".Pos)
func (? *@"".ParenExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".ParenExpr) @"".exprNode() ()
const @"".Pkg @"".ObjKind = 0x1
func @"".Print(@"".fset *@"go/token".FileSet, @"".x interface {  }) (? error)
const @"".RECV @"".ChanDir = 0x2
type @"".RangeStmt struct { @"".For @"go/token".Pos; @"".Key @"".Expr; @"".Value @"".Expr; @"".TokPos @"go/token".Pos; @"".Tok @"go/token".Token; @"".X @"".Expr; @"".Body *@"".BlockStmt }
func (? *@"".RangeStmt) @"".End() (? @"go/token".Pos)
func (? *@"".RangeStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".RangeStmt) @"".stmtNode() ()
type @"".ReturnStmt struct { @"".Return @"go/token".Pos; @"".Results []@"".Expr }
func (? *@"".ReturnStmt) @"".End() (? @"go/token".Pos)
func (? *@"".ReturnStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".ReturnStmt) @"".stmtNode() ()
const @"".SEND @"".ChanDir = 0x1
type @"".Scope struct { @"".Outer *@"".Scope; @"".Objects map[string]*@"".Object }
func (? *@"".Scope) @"".Insert(@"".obj *@"".Object) (@"".alt *@"".Object)
func (? *@"".Scope) @"".Lookup(@"".name string) (? *@"".Object)
func (? *@"".Scope) @"".String() (? string)
type @"".SelectStmt struct { @"".Select @"go/token".Pos; @"".Body *@"".BlockStmt }
func (? *@"".SelectStmt) @"".End() (? @"go/token".Pos)
func (? *@"".SelectStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".SelectStmt) @"".stmtNode() ()
type @"".SelectorExpr struct { @"".X @"".Expr; @"".Sel *@"".Ident }
func (? *@"".SelectorExpr) @"".End() (? @"go/token".Pos)
func (? *@"".SelectorExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".SelectorExpr) @"".exprNode() ()
type @"".SendStmt struct { @"".Chan @"".Expr; @"".Arrow @"go/token".Pos; @"".Value @"".Expr }
func (? *@"".SendStmt) @"".End() (? @"go/token".Pos)
func (? *@"".SendStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".SendStmt) @"".stmtNode() ()
type @"".SliceExpr struct { @"".X @"".Expr; @"".Lbrack @"go/token".Pos; @"".Low @"".Expr; @"".High @"".Expr; @"".Max @"".Expr; @"".Slice3 bool; @"".Rbrack @"go/token".Pos }
func (? *@"".SliceExpr) @"".End() (? @"go/token".Pos)
func (? *@"".SliceExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".SliceExpr) @"".exprNode() ()
func @"".SortImports(@"".fset *@"go/token".FileSet, @"".f *@"".File) ()
type @"".Spec interface { @"".End() (? @"go/token".Pos); @"".Pos() (? @"go/token".Pos); @"".specNode() () }
type @"".StarExpr struct { @"".Star @"go/token".Pos; @"".X @"".Expr }
func (? *@"".StarExpr) @"".End() (? @"go/token".Pos)
func (? *@"".StarExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".StarExpr) @"".exprNode() ()
type @"".Stmt interface { @"".End() (? @"go/token".Pos); @"".Pos() (? @"go/token".Pos); @"".stmtNode() () }
type @"".StructType struct { @"".Struct @"go/token".Pos; @"".Fields *@"".FieldList; @"".Incomplete bool }
func (? *@"".StructType) @"".End() (? @"go/token".Pos)
func (? *@"".StructType) @"".Pos() (? @"go/token".Pos)
func (? *@"".StructType) @"".exprNode() ()
type @"".SwitchStmt struct { @"".Switch @"go/token".Pos; @"".Init @"".Stmt; @"".Tag @"".Expr; @"".Body *@"".BlockStmt }
func (? *@"".SwitchStmt) @"".End() (? @"go/token".Pos)
func (? *@"".SwitchStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".SwitchStmt) @"".stmtNode() ()
const @"".Typ @"".ObjKind = 0x3
type @"".TypeAssertExpr struct { @"".X @"".Expr; @"".Lparen @"go/token".Pos; @"".Type @"".Expr; @"".Rparen @"go/token".Pos }
func (? *@"".TypeAssertExpr) @"".End() (? @"go/token".Pos)
func (? *@"".TypeAssertExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".TypeAssertExpr) @"".exprNode() ()
type @"".TypeSpec struct { @"".Doc *@"".CommentGroup; @"".Name *@"".Ident; @"".Type @"".Expr; @"".Comment *@"".CommentGroup }
func (? *@"".TypeSpec) @"".End() (? @"go/token".Pos)
func (? *@"".TypeSpec) @"".Pos() (? @"go/token".Pos)
func (? *@"".TypeSpec) @"".specNode() ()
type @"".TypeSwitchStmt struct { @"".Switch @"go/token".Pos; @"".Init @"".Stmt; @"".Assign @"".Stmt; @"".Body *@"".BlockStmt }
func (? *@"".TypeSwitchStmt) @"".End() (? @"go/token".Pos)
func (? *@"".TypeSwitchStmt) @"".Pos() (? @"go/token".Pos)
func (? *@"".TypeSwitchStmt) @"".stmtNode() ()
type @"".UnaryExpr struct { @"".OpPos @"go/token".Pos; @"".Op @"go/token".Token; @"".X @"".Expr }
func (? *@"".UnaryExpr) @"".End() (? @"go/token".Pos)
func (? *@"".UnaryExpr) @"".Pos() (? @"go/token".Pos)
func (? *@"".UnaryExpr) @"".exprNode() ()
type @"".ValueSpec struct { @"".Doc *@"".CommentGroup; @"".Names []*@"".Ident; @"".Type @"".Expr; @"".Values []@"".Expr; @"".Comment *@"".CommentGroup }
func (? *@"".ValueSpec) @"".End() (? @"go/token".Pos)
func (? *@"".ValueSpec) @"".Pos() (? @"go/token".Pos)
func (? *@"".ValueSpec) @"".specNode() ()
const @"".Var @"".ObjKind = 0x4
type @"".Visitor interface { @"".Visit(@"".node @"".Node) (@"".w @"".Visitor) }
func @"".Walk(@"".v @"".Visitor, @"".node @"".Node) ()
type @"".byCommentPos []*@"".CommentGroup
func (? @"".byCommentPos) @"".Len() (? int)
func (? @"".byCommentPos) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byCommentPos) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byCommentPos) @"".Len() (? int)
func (? *@"".byCommentPos) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byCommentPos) @"".Swap(@"".i int, @"".j int) ()
type @"".byImportSpec []@"".Spec
func (? @"".byImportSpec) @"".Len() (? int)
func (? @"".byImportSpec) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byImportSpec) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byImportSpec) @"".Len() (? int)
func (? *@"".byImportSpec) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byImportSpec) @"".Swap(@"".i int, @"".j int) ()
type @"".byInterval []@"".Node
func (? @"".byInterval) @"".Len() (? int)
func (? @"".byInterval) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byInterval) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byInterval) @"".Len() (? int)
func (? *@"".byInterval) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byInterval) @"".Swap(@"".i int, @"".j int) ()
type @"".byPos []*@"".CommentGroup
func (? @"".byPos) @"".Len() (? int)
func (? @"".byPos) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byPos) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byPos) @"".Len() (? int)
func (? *@"".byPos) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byPos) @"".Swap(@"".i int, @"".j int) ()
type @"".commentListReader struct { @"".fset *@"go/token".FileSet; @"".list []*@"".CommentGroup; @"".index int; @"".comment *@"".CommentGroup; @"".pos @"go/token".Position; @"".end @"go/token".Position }
func (? *@"".commentListReader) @"".eol() (? bool)
func (? *@"".commentListReader) @"".next() ()
type @"".inspector func (? @"".Node) (? bool)
func (? @"".inspector) @"".Visit(@"".node @"".Node) (? @"".Visitor)
func (? *@"".inspector) @"".Visit(@"".node @"".Node) (? @"".Visitor)
type @"".localError struct { @"".err error }
type @"".nodeStack []@"".Node
func (? *@"".nodeStack) @"".pop(@"".pos @"go/token".Pos) (@"".top @"".Node)
func (? *@"".nodeStack) @"".push(@"".n @"".Node) ()
type @"".pkgBuilder struct { @"".fset *@"go/token".FileSet; @"".errors @"go/scanner".ErrorList }
func (? *@"".pkgBuilder) @"".declare(@"".scope *@"".Scope, @"".altScope *@"".Scope, @"".obj *@"".Object) ()
func (? *@"".pkgBuilder) @"".error(@"".pos @"go/token".Pos, @"".msg string) ()
func (? *@"".pkgBuilder) @"".errorf(@"".pos @"go/token".Pos, @"".format string, @"".args ...interface {  }) ()
type @"".posSpan struct { @"".Start @"go/token".Pos; @"".End @"go/token".Pos }
type @"".printer struct { @"".output @"io".Writer; @"".fset *@"go/token".FileSet; @"".filter @"".FieldFilter; @"".ptrmap map[interface {  }]int; @"".indent int; @"".last byte; @"".line int }
func (? *@"".printer) @"".Write(@"".data []byte) (@"".n int, @"".err error)
func (? *@"".printer) @"".print(@"".x @"reflect".Value) ()
func (? *@"".printer) @"".printf(@"".format string, @"".args ...interface {  }) ()
type @"go/token".Pos int
func (? @"go/token".Pos) @"go/token".IsValid() (? bool)
func (? *@"go/token".Pos) @"go/token".IsValid() (? bool)
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
type @"reflect".Value struct { @"reflect".typ *@"reflect".rtype; @"reflect".ptr @"unsafe".Pointer; @"reflect".scalar uintptr; ? @"reflect".flag }
func (? @"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Bool() (? bool)
func (? @"reflect".Value) @"reflect".Bytes() (? []byte)
func (? @"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CanAddr() (? bool)
func (? @"reflect".Value) @"reflect".CanInterface() (? bool)
func (? @"reflect".Value) @"reflect".CanSet() (? bool)
func (? @"reflect".Value) @"reflect".Cap() (? int)
func (? @"reflect".Value) @"reflect".Close() ()
func (? @"reflect".Value) @"reflect".Complex() (? complex128)
func (? @"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Float() (? float64)
func (? @"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Int() (? int64)
func (? @"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? @"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? @"reflect".Value) @"reflect".IsNil() (? bool)
func (? @"reflect".Value) @"reflect".IsValid() (? bool)
func (? @"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? @"reflect".Value) @"reflect".Len() (? int)
func (? @"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".NumField() (? int)
func (? @"reflect".Value) @"reflect".NumMethod() (? int)
func (? @"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? @"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? @"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? @"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? @"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? @"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? @"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? @"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? @"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? @"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? @"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? @"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".String() (? string)
func (? @"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? @"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? @"reflect".Value) @"reflect".Uint() (? uint64)
func (? @"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? @"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? @"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? @"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".runes() (? []rune)
func (? @"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? @"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
func (? *@"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Bool() (? bool)
func (? *@"reflect".Value) @"reflect".Bytes() (? []byte)
func (? *@"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CanAddr() (? bool)
func (? *@"reflect".Value) @"reflect".CanInterface() (? bool)
func (? *@"reflect".Value) @"reflect".CanSet() (? bool)
func (? *@"reflect".Value) @"reflect".Cap() (? int)
func (? *@"reflect".Value) @"reflect".Close() ()
func (? *@"reflect".Value) @"reflect".Complex() (? complex128)
func (? *@"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Float() (? float64)
func (? *@"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Int() (? int64)
func (? *@"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? *@"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? *@"reflect".Value) @"reflect".IsNil() (? bool)
func (? *@"reflect".Value) @"reflect".IsValid() (? bool)
func (? *@"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".Value) @"reflect".Len() (? int)
func (? *@"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".NumField() (? int)
func (? *@"reflect".Value) @"reflect".NumMethod() (? int)
func (? *@"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? *@"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? *@"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? *@"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? *@"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? *@"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? *@"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? *@"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? *@"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? *@"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? *@"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".String() (? string)
func (? *@"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? *@"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? *@"reflect".Value) @"reflect".Uint() (? uint64)
func (? *@"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? *@"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? *@"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? *@"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".runes() (? []rune)
func (? *@"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? *@"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
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
type @"go/token".Position struct { @"go/token".Filename string; @"go/token".Offset int; @"go/token".Line int; @"go/token".Column int }
func (? @"go/token".Position) @"go/token".String() (? string)
func (? *@"go/token".Position) @"go/token".IsValid() (? bool)
func (? *@"go/token".Position) @"go/token".String() (? string)
type @"go/scanner".ErrorList []*@"go/scanner".Error
func (? @"go/scanner".ErrorList) @"go/scanner".Err() (? error)
func (? @"go/scanner".ErrorList) @"go/scanner".Error() (? string)
func (? @"go/scanner".ErrorList) @"go/scanner".Len() (? int)
func (? @"go/scanner".ErrorList) @"go/scanner".Less(@"go/scanner".i int, @"go/scanner".j int) (? bool)
func (? @"go/scanner".ErrorList) @"go/scanner".Sort() ()
func (? @"go/scanner".ErrorList) @"go/scanner".Swap(@"go/scanner".i int, @"go/scanner".j int) ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Add(@"go/scanner".pos @"go/token".Position, @"go/scanner".msg string) ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Err() (? error)
func (? *@"go/scanner".ErrorList) @"go/scanner".Error() (? string)
func (? *@"go/scanner".ErrorList) @"go/scanner".Len() (? int)
func (? *@"go/scanner".ErrorList) @"go/scanner".Less(@"go/scanner".i int, @"go/scanner".j int) (? bool)
func (? *@"go/scanner".ErrorList) @"go/scanner".RemoveMultiples() ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Reset() ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Sort() ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Swap(@"go/scanner".i int, @"go/scanner".j int) ()
type @"reflect".rtype struct { @"reflect".size uintptr; @"reflect".hash uint32; _ uint8; @"reflect".align uint8; @"reflect".fieldAlign uint8; @"reflect".kind uint8; @"reflect".alg *uintptr; @"reflect".gc @"unsafe".Pointer; @"reflect".string *string; ? *@"reflect".uncommonType; @"reflect".ptrToThis *@"reflect".rtype; @"reflect".zero @"unsafe".Pointer }
func (? *@"reflect".rtype) @"reflect".Align() (? int)
func (? *@"reflect".rtype) @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Bits() (? int)
func (? *@"reflect".rtype) @"reflect".ChanDir() (? @"reflect".ChanDir)
func (? *@"reflect".rtype) @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Elem() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Field(@"reflect".i int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldAlign() (? int)
func (? *@"reflect".rtype) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".In(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".IsVariadic() (? bool)
func (? *@"reflect".rtype) @"reflect".Key() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".rtype) @"reflect".Len() (? int)
func (? *@"reflect".rtype) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".rtype) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".rtype) @"reflect".Name() (? string)
func (? *@"reflect".rtype) @"reflect".NumField() (? int)
func (? *@"reflect".rtype) @"reflect".NumIn() (? int)
func (? *@"reflect".rtype) @"reflect".NumMethod() (? int)
func (? *@"reflect".rtype) @"reflect".NumOut() (? int)
func (? *@"reflect".rtype) @"reflect".Out(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".PkgPath() (? string)
func (? *@"reflect".rtype) @"reflect".Size() (? uintptr)
func (? *@"reflect".rtype) @"reflect".String() (? string)
func (? *@"reflect".rtype) @"reflect".common() (? *@"reflect".rtype)
func (? *@"reflect".rtype) @"reflect".pointers() (? bool)
func (? *@"reflect".rtype) @"reflect".ptrTo() (? *@"reflect".rtype)
type @"reflect".flag uintptr
func (? @"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? @"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? @"reflect".flag) @"reflect".mustBeAssignable() ()
func (? @"reflect".flag) @"reflect".mustBeExported() ()
func (? *@"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? *@"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? *@"reflect".flag) @"reflect".mustBeAssignable() ()
func (? *@"reflect".flag) @"reflect".mustBeExported() ()
type @"reflect".Type interface { @"reflect".Align() (? int); @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Bits() (? int); @"reflect".ChanDir() (? @"reflect".ChanDir); @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Elem() (? @"reflect".Type); @"reflect".Field(@"reflect".i int) (? @"reflect".StructField); @"reflect".FieldAlign() (? int); @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField); @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool); @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool); @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool); @"reflect".In(@"reflect".i int) (? @"reflect".Type); @"reflect".IsVariadic() (? bool); @"reflect".Key() (? @"reflect".Type); @"reflect".Kind() (? @"reflect".Kind); @"reflect".Len() (? int); @"reflect".Method(? int) (? @"reflect".Method); @"reflect".MethodByName(? string) (? @"reflect".Method, ? bool); @"reflect".Name() (? string); @"reflect".NumField() (? int); @"reflect".NumIn() (? int); @"reflect".NumMethod() (? int); @"reflect".NumOut() (? int); @"reflect".Out(@"reflect".i int) (? @"reflect".Type); @"reflect".PkgPath() (? string); @"reflect".Size() (? uintptr); @"reflect".String() (? string); @"reflect".common() (? *@"reflect".rtype); @"reflect".uncommon() (? *@"reflect".uncommonType) }
type @"reflect".Kind uint
func (? @"reflect".Kind) @"reflect".String() (? string)
func (? *@"reflect".Kind) @"reflect".String() (? string)
type @"reflect".iword @"unsafe".Pointer
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
type @"go/scanner".Error struct { @"go/scanner".Pos @"go/token".Position; @"go/scanner".Msg string }
func (? @"go/scanner".Error) @"go/scanner".Error() (? string)
func (? *@"go/scanner".Error) @"go/scanner".Error() (? string)
type @"reflect".uncommonType struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".methods []@"reflect".method }
func (? *@"reflect".uncommonType) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".uncommonType) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".uncommonType) @"reflect".Name() (? string)
func (? *@"reflect".uncommonType) @"reflect".NumMethod() (? int)
func (? *@"reflect".uncommonType) @"reflect".PkgPath() (? string)
func (? *@"reflect".uncommonType) @"reflect".uncommon() (? *@"reflect".uncommonType)
type @"reflect".ChanDir int
func (? @"reflect".ChanDir) @"reflect".String() (? string)
func (? *@"reflect".ChanDir) @"reflect".String() (? string)
type @"reflect".StructField struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Tag @"reflect".StructTag; @"reflect".Offset uintptr; @"reflect".Index []int; @"reflect".Anonymous bool }
type @"reflect".Method struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Func @"reflect".Value; @"reflect".Index int }
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
type @"go/token".lineInfo struct { @"go/token".Offset int; @"go/token".Filename string; @"go/token".Line int }
type @"reflect".method struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".mtyp *@"reflect".rtype; @"reflect".typ *@"reflect".rtype; @"reflect".ifn @"unsafe".Pointer; @"reflect".tfn @"unsafe".Pointer }
type @"reflect".StructTag string
func (? @"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
func (? *@"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
$$
0� github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathsyscallstringstimeosstrconvreflectfmtsortflagbufiotext/tabwriter
go/scanner0��0
bytesE0fmtF0	sortG0strconvH0ioI0osJ0reflectK0
go/scannerL0�1�0�� 0MDM=$pkg.Node=$newType(8,"Interface","ast.Node","Node","go/ast",null);dM.init([["End","End","",$funcType([],[A.Pos],false)],["Pos","Pos","",$funcType([],[A.Pos],false)]]);0Node0go/token:Pos 0� 0NDN=$pkg.Expr=$newType(8,"Interface","ast.Expr","Expr","go/ast",null);��N.init([["End","End","",$funcType([],[A.Pos],false)],["Pos","Pos","",$funcType([],[A.Pos],false)],["exprNode","exprNode","go/ast",$funcType([],[],false)]]);0Expr0go/token:Pos 0� 0ODO=$pkg.Stmt=$newType(8,"Interface","ast.Stmt","Stmt","go/ast",null);��O.init([["End","End","",$funcType([],[A.Pos],false)],["Pos","Pos","",$funcType([],[A.Pos],false)],["stmtNode","stmtNode","go/ast",$funcType([],[],false)]]);0Stmt0go/token:Pos 0� 0PDP=$pkg.Decl=$newType(8,"Interface","ast.Decl","Decl","go/ast",null);��P.init([["End","End","",$funcType([],[A.Pos],false)],["Pos","Pos","",$funcType([],[A.Pos],false)],["declNode","declNode","go/ast",$funcType([],[],false)]]);0Decl0go/token:Pos 0�� 0Q��Q=$pkg.Comment=$newType(0,"Struct","ast.Comment","Comment","go/ast",function(Slash_,Text_){this.$val=this;this.Slash=Slash_!==undefined?Slash_:0;this.Text=Text_!==undefined?Text_:"";});��($ptrType(Q)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1]];Q.init([["Slash","Slash","",A.Pos,""],["Text","Text","",$String,""]]);0	Comment0go/token:Pos 0�� 0R��R=$pkg.CommentGroup=$newType(0,"Struct","ast.CommentGroup","CommentGroup","go/ast",function(List_){this.$val=this;this.List=List_!==undefined?List_:($sliceType(($ptrType(Q)))).nil;});��($ptrType(R)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["Text","Text","",$funcType([],[$String],false),-1]];R.init([["List","List","",($sliceType(($ptrType(Q)))),""]]);0CommentGroup0go/ast:Commentgo/token:Pos 0�2 0U��U=$pkg.Field=$newType(0,"Struct","ast.Field","Field","go/ast",function(Doc_,Names_,Type_,Tag_,Comment_){this.$val=this;this.Doc=Doc_!==undefined?Doc_:($ptrType(R)).nil;this.Names=Names_!==undefined?Names_:($sliceType(($ptrType(X)))).nil;this.Type=Type_!==undefined?Type_:$ifaceNil;this.Tag=Tag_!==undefined?Tag_:($ptrType(Z)).nil;this.Comment=Comment_!==undefined?Comment_:($ptrType(R)).nil;});�<($ptrType(U)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1]];U.init([["Doc","Doc","",($ptrType(R)),""],["Names","Names","",($sliceType(($ptrType(X)))),""],["Type","Type","",N,""],["Tag","Tag","",($ptrType(Z)),""],["Comment","Comment","",($ptrType(R)),""]]);0Field0Ogo/ast:BasicLitgo/ast:CommentGroupgo/ast:Exprgo/ast:Identgo/token:Pos 0�� 0V�V=$pkg.FieldList=$newType(0,"Struct","ast.FieldList","FieldList","go/ast",function(Opening_,List_,Closing_){this.$val=this;this.Opening=Opening_!==undefined?Opening_:0;this.List=List_!==undefined?List_:($sliceType(($ptrType(U)))).nil;this.Closing=Closing_!==undefined?Closing_:0;});�3($ptrType(V)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["NumFields","NumFields","",$funcType([],[$Int],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1]];V.init([["Opening","Opening","",A.Pos,""],["List","List","",($sliceType(($ptrType(U)))),""],["Closing","Closing","",A.Pos,""]]);0	FieldList0go/ast:Fieldgo/token:Pos 0�� 0W��W=$pkg.BadExpr=$newType(0,"Struct","ast.BadExpr","BadExpr","go/ast",function(From_,To_){this.$val=this;this.From=From_!==undefined?From_:0;this.To=To_!==undefined?To_:0;});��($ptrType(W)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];W.init([["From","From","",A.Pos,""],["To","To","",A.Pos,""]]);0	BadExpr0go/token:Pos 0�� 0X��X=$pkg.Ident=$newType(0,"Struct","ast.Ident","Ident","go/ast",function(NamePos_,Name_,Obj_){this.$val=this;this.NamePos=NamePos_!==undefined?NamePos_:0;this.Name=Name_!==undefined?Name_:"";this.Obj=Obj_!==undefined?Obj_:($ptrType(DZ)).nil;});��($ptrType(X)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["IsExported","IsExported","",$funcType([],[$Bool],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["String","String","",$funcType([],[$String],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];X.init([["NamePos","NamePos","",A.Pos,""],["Name","Name","",$String,""],["Obj","Obj","",($ptrType(DZ)),""]]);0Ident0
Ellipsis0go/ast:Exprgo/token:Pos 0�R 0Z��Z=$pkg.BasicLit=$newType(0,"Struct","ast.BasicLit","BasicLit","go/ast",function(ValuePos_,Kind_,Value_){this.$val=this;this.ValuePos=ValuePos_!==undefined?ValuePos_:0;this.Kind=Kind_!==undefined?Kind_:0;this.Value=Value_!==undefined?Value_:"";});�($ptrType(Z)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];Z.init([["ValuePos","ValuePos","",A.Pos,""],["Kind","Kind","",A.Token,""],["Value","Value","",$String,""]]);0
BasicLit0go/token:Posgo/token:Token 0�0 0AA��AA=$pkg.FuncLit=$newType(0,"Struct","ast.FuncLit","FuncLit","go/ast",function(Type_,Body_){this.$val=this;this.Type=Type_!==undefined?Type_:($ptrType(AP)).nil;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;});�	($ptrType(AA)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AA.init([["Type","Type","",($ptrType(AP)),""],["Body","Body","",($ptrType(BH)),""]]);0	FuncLit01go/ast:BlockStmtgo/ast:FuncTypego/token:Pos 0�� 0AB�BAB=$pkg.CompositeLit=$newType(0,"Struct","ast.CompositeLit","CompositeLit","go/ast",function(Type_,Lbrace_,Elts_,Rbrace_){this.$val=this;this.Type=Type_!==undefined?Type_:$ifaceNil;this.Lbrace=Lbrace_!==undefined?Lbrace_:0;this.Elts=Elts_!==undefined?Elts_:($sliceType(N)).nil;this.Rbrace=Rbrace_!==undefined?Rbrace_:0;});�=($ptrType(AB)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AB.init([["Type","Type","",N,""],["Lbrace","Lbrace","",A.Pos,""],["Elts","Elts","",($sliceType(N)),""],["Rbrace","Rbrace","",A.Pos,""]]);0CompositeLit0go/ast:Exprgo/token:Pos 0�> 0AC��AC=$pkg.ParenExpr=$newType(0,"Struct","ast.ParenExpr","ParenExpr","go/ast",function(Lparen_,X_,Rparen_){this.$val=this;this.Lparen=Lparen_!==undefined?Lparen_:0;this.X=X_!==undefined?X_:$ifaceNil;this.Rparen=Rparen_!==undefined?Rparen_:0;});�($ptrType(AC)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AC.init([["Lparen","Lparen","",A.Pos,""],["X","X","",N,""],["Rparen","Rparen","",A.Pos,""]]);0	ParenExpr0go/ast:Exprgo/token:Pos 0� 0AD��AD=$pkg.SelectorExpr=$newType(0,"Struct","ast.SelectorExpr","SelectorExpr","go/ast",function(X_,Sel_){this.$val=this;this.X=X_!==undefined?X_:$ifaceNil;this.Sel=Sel_!==undefined?Sel_:($ptrType(X)).nil;});��($ptrType(AD)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AD.init([["X","X","",N,""],["Sel","Sel","",($ptrType(X)),""]]);0SelectorExpr0)go/ast:Exprgo/ast:Identgo/token:Pos 0�� 0AE�'AE=$pkg.IndexExpr=$newType(0,"Struct","ast.IndexExpr","IndexExpr","go/ast",function(X_,Lbrack_,Index_,Rbrack_){this.$val=this;this.X=X_!==undefined?X_:$ifaceNil;this.Lbrack=Lbrack_!==undefined?Lbrack_:0;this.Index=Index_!==undefined?Index_:$ifaceNil;this.Rbrack=Rbrack_!==undefined?Rbrack_:0;});�+($ptrType(AE)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AE.init([["X","X","",N,""],["Lbrack","Lbrack","",A.Pos,""],["Index","Index","",N,""],["Rbrack","Rbrack","",A.Pos,""]]);0	IndexExpr0go/ast:Exprgo/token:Pos 0�g 0AF��AF=$pkg.SliceExpr=$newType(0,"Struct","ast.SliceExpr","SliceExpr","go/ast",function(X_,Lbrack_,Low_,High_,Max_,Slice3_,Rbrack_){this.$val=this;this.X=X_!==undefined?X_:$ifaceNil;this.Lbrack=Lbrack_!==undefined?Lbrack_:0;this.Low=Low_!==undefined?Low_:$ifaceNil;this.High=High_!==undefined?High_:$ifaceNil;this.Max=Max_!==undefined?Max_:$ifaceNil;this.Slice3=Slice3_!==undefined?Slice3_:false;this.Rbrack=Rbrack_!==undefined?Rbrack_:0;});�u($ptrType(AF)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AF.init([["X","X","",N,""],["Lbrack","Lbrack","",A.Pos,""],["Low","Low","",N,""],["High","High","",N,""],["Max","Max","",N,""],["Slice3","Slice3","",$Bool,""],["Rbrack","Rbrack","",A.Pos,""]]);0	SliceExpr0go/ast:Exprgo/token:Pos 0�� 0AG�2AG=$pkg.TypeAssertExpr=$newType(0,"Struct","ast.TypeAssertExpr","TypeAssertExpr","go/ast",function(X_,Lparen_,Type_,Rparen_){this.$val=this;this.X=X_!==undefined?X_:$ifaceNil;this.Lparen=Lparen_!==undefined?Lparen_:0;this.Type=Type_!==undefined?Type_:$ifaceNil;this.Rparen=Rparen_!==undefined?Rparen_:0;});�)($ptrType(AG)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AG.init([["X","X","",N,""],["Lparen","Lparen","",A.Pos,""],["Type","Type","",N,""],["Rparen","Rparen","",A.Pos,""]]);0TypeAssertExpr0go/ast:Exprgo/token:Pos 0� 0AH�lAH=$pkg.CallExpr=$newType(0,"Struct","ast.CallExpr","CallExpr","go/ast",function(Fun_,Lparen_,Args_,Ellipsis_,Rparen_){this.$val=this;this.Fun=Fun_!==undefined?Fun_:$ifaceNil;this.Lparen=Lparen_!==undefined?Lparen_:0;this.Args=Args_!==undefined?Args_:($sliceType(N)).nil;this.Ellipsis=Ellipsis_!==undefined?Ellipsis_:0;this.Rparen=Rparen_!==undefined?Rparen_:0;});�_($ptrType(AH)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AH.init([["Fun","Fun","",N,""],["Lparen","Lparen","",A.Pos,""],["Args","Args","",($sliceType(N)),""],["Ellipsis","Ellipsis","",A.Pos,""],["Rparen","Rparen","",A.Pos,""]]);0
CallExpr0go/ast:Exprgo/token:Pos 0�� 0AI��AI=$pkg.StarExpr=$newType(0,"Struct","ast.StarExpr","StarExpr","go/ast",function(Star_,X_){this.$val=this;this.Star=Star_!==undefined?Star_:0;this.X=X_!==undefined?X_:$ifaceNil;});��($ptrType(AI)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AI.init([["Star","Star","",A.Pos,""],["X","X","",N,""]]);0
StarExpr0go/ast:Exprgo/token:Pos 0�2 0AJ��AJ=$pkg.UnaryExpr=$newType(0,"Struct","ast.UnaryExpr","UnaryExpr","go/ast",function(OpPos_,Op_,X_){this.$val=this;this.OpPos=OpPos_!==undefined?OpPos_:0;this.Op=Op_!==undefined?Op_:0;this.X=X_!==undefined?X_:$ifaceNil;});�	($ptrType(AJ)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AJ.init([["OpPos","OpPos","",A.Pos,""],["Op","Op","",A.Token,""],["X","X","",N,""]]);0	UnaryExpr0+go/ast:Exprgo/token:Posgo/token:Token 0�o 0AK�AK=$pkg.BinaryExpr=$newType(0,"Struct","ast.BinaryExpr","BinaryExpr","go/ast",function(X_,OpPos_,Op_,Y_){this.$val=this;this.X=X_!==undefined?X_:$ifaceNil;this.OpPos=OpPos_!==undefined?OpPos_:0;this.Op=Op_!==undefined?Op_:0;this.Y=Y_!==undefined?Y_:$ifaceNil;});�($ptrType(AK)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AK.init([["X","X","",N,""],["OpPos","OpPos","",A.Pos,""],["Op","Op","",A.Token,""],["Y","Y","",N,""]]);0
BinaryExpr0+go/ast:Exprgo/token:Posgo/token:Token 0�O 0AL�AL=$pkg.KeyValueExpr=$newType(0,"Struct","ast.KeyValueExpr","KeyValueExpr","go/ast",function(Key_,Colon_,Value_){this.$val=this;this.Key=Key_!==undefined?Key_:$ifaceNil;this.Colon=Colon_!==undefined?Colon_:0;this.Value=Value_!==undefined?Value_:$ifaceNil;});�
StructType0 go/ast:FieldListgo/token:Pos 0�� 0AP�AP=$pkg.FuncType=$newType(0,"Struct","ast.FuncType","FuncType","go/ast",function(Func_,Params_,Results_){this.$val=this;this.Func=Func_!==undefined?Func_:0;this.Params=Params_!==undefined?Params_:($ptrType(V)).nil;this.Results=Results_!==undefined?Results_:($ptrType(V)).nil;});�-($ptrType(AP)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AP.init([["Func","Func","",A.Pos,""],["Params","Params","",($ptrType(V)),""],["Results","Results","",($ptrType(V)),""]]);0
FuncType0 go/ast:FieldListgo/token:Pos 0�� 0AQ�=AQ=$pkg.InterfaceType=$newType(0,"Struct","ast.InterfaceType","InterfaceType","go/ast",function(Interface_,Methods_,Incomplete_){this.$val=this;this.Interface=Interface_!==undefined?Interface_:0;this.Methods=Methods_!==undefined?Methods_:($ptrType(V)).nil;this.Incomplete=Incomplete_!==undefined?Incomplete_:false;});�7($ptrType(AQ)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["exprNode","exprNode","go/ast",$funcType([],[],false),-1]];AQ.init([["Interface","Interface","",A.Pos,""],["Methods","Methods","",($ptrType(V)),""],["Incomplete","Incomplete","",$Bool,""]]);0
ChanType0+go/ast:ChanDirgo/ast:Exprgo/token:Pos 0�� 0AV��AV=$pkg.BadStmt=$newType(0,"Struct","ast.BadStmt","BadStmt","go/ast",function(From_,To_){this.$val=this;this.From=From_!==undefined?From_:0;this.To=To_!==undefined?To_:0;});��($ptrType(AV)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];AV.init([["From","From","",A.Pos,""],["To","To","",A.Pos,""]]);0	BadStmt0go/token:Pos 0�� 0AW��AW=$pkg.DeclStmt=$newType(0,"Struct","ast.DeclStmt","DeclStmt","go/ast",function(Decl_){this.$val=this;this.Decl=Decl_!==undefined?Decl_:$ifaceNil;});��($ptrType(AW)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];AW.init([["Decl","Decl","",P,""]]);0
DeclStmt0go/ast:Declgo/token:Pos 0�� 0AX��AX=$pkg.EmptyStmt=$newType(0,"Struct","ast.EmptyStmt","EmptyStmt","go/ast",function(Semicolon_){this.$val=this;this.Semicolon=Semicolon_!==undefined?Semicolon_:0;});��($ptrType(AX)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];AX.init([["Semicolon","Semicolon","",A.Pos,""]]);0	EmptyStmt0go/token:Pos 0�s 0AY�AY=$pkg.LabeledStmt=$newType(0,"Struct","ast.LabeledStmt","LabeledStmt","go/ast",function(Label_,Colon_,Stmt_){this.$val=this;this.Label=Label_!==undefined?Label_:($ptrType(X)).nil;this.Colon=Colon_!==undefined?Colon_:0;this.Stmt=Stmt_!==undefined?Stmt_:$ifaceNil;});�($ptrType(AY)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];AY.init([["Label","Label","",($ptrType(X)),""],["Colon","Colon","",A.Pos,""],["Stmt","Stmt","",O,""]]);0
ExprStmt0go/ast:Exprgo/token:Pos 0�D 0BA��BA=$pkg.SendStmt=$newType(0,"Struct","ast.SendStmt","SendStmt","go/ast",function(Chan_,Arrow_,Value_){this.$val=this;this.Chan=Chan_!==undefined?Chan_:$ifaceNil;this.Arrow=Arrow_!==undefined?Arrow_:0;this.Value=Value_!==undefined?Value_:$ifaceNil;});�($ptrType(BA)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BA.init([["Chan","Chan","",N,""],["Arrow","Arrow","",A.Pos,""],["Value","Value","",N,""]]);0
SendStmt0go/ast:Exprgo/token:Pos 0�B 0BB��BB=$pkg.IncDecStmt=$newType(0,"Struct","ast.IncDecStmt","IncDecStmt","go/ast",function(X_,TokPos_,Tok_){this.$val=this;this.X=X_!==undefined?X_:$ifaceNil;this.TokPos=TokPos_!==undefined?TokPos_:0;this.Tok=Tok_!==undefined?Tok_:0;});�
IncDecStmt0+go/ast:Exprgo/token:Posgo/token:Token 0�� 0BC�2BC=$pkg.AssignStmt=$newType(0,"Struct","ast.AssignStmt","AssignStmt","go/ast",function(Lhs_,TokPos_,Tok_,Rhs_){this.$val=this;this.Lhs=Lhs_!==undefined?Lhs_:($sliceType(N)).nil;this.TokPos=TokPos_!==undefined?TokPos_:0;this.Tok=Tok_!==undefined?Tok_:0;this.Rhs=Rhs_!==undefined?Rhs_:($sliceType(N)).nil;});�C($ptrType(BC)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BC.init([["Lhs","Lhs","",($sliceType(N)),""],["TokPos","TokPos","",A.Pos,""],["Tok","Tok","",A.Token,""],["Rhs","Rhs","",($sliceType(N)),""]]);0
AssignStmt0+go/ast:Exprgo/token:Posgo/token:Token 0�� 0BD��BD=$pkg.GoStmt=$newType(0,"Struct","ast.GoStmt","GoStmt","go/ast",function(Go_,Call_){this.$val=this;this.Go=Go_!==undefined?Go_:0;this.Call=Call_!==undefined?Call_:($ptrType(AH)).nil;});��($ptrType(BD)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BD.init([["Go","Go","",A.Pos,""],["Call","Call","",($ptrType(AH)),""]]);0GoStmt0go/ast:CallExprgo/token:Pos 0� 0BE��BE=$pkg.DeferStmt=$newType(0,"Struct","ast.DeferStmt","DeferStmt","go/ast",function(Defer_,Call_){this.$val=this;this.Defer=Defer_!==undefined?Defer_:0;this.Call=Call_!==undefined?Call_:($ptrType(AH)).nil;});�($ptrType(BE)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BE.init([["Defer","Defer","",A.Pos,""],["Call","Call","",($ptrType(AH)),""]]);0	DeferStmt0go/ast:CallExprgo/token:Pos 0�, 0BF��BF=$pkg.ReturnStmt=$newType(0,"Struct","ast.ReturnStmt","ReturnStmt","go/ast",function(Return_,Results_){this.$val=this;this.Return=Return_!==undefined?Return_:0;this.Results=Results_!==undefined?Results_:($sliceType(N)).nil;});�($ptrType(BF)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BF.init([["Return","Return","",A.Pos,""],["Results","Results","",($sliceType(N)),""]]);0
ReturnStmt0go/ast:Exprgo/token:Pos 0�p 0BG� BG=$pkg.BranchStmt=$newType(0,"Struct","ast.BranchStmt","BranchStmt","go/ast",function(TokPos_,Tok_,Label_){this.$val=this;this.TokPos=TokPos_!==undefined?TokPos_:0;this.Tok=Tok_!==undefined?Tok_:0;this.Label=Label_!==undefined?Label_:($ptrType(X)).nil;});�!($ptrType(BG)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BG.init([["TokPos","TokPos","",A.Pos,""],["Tok","Tok","",A.Token,""],["Label","Label","",($ptrType(X)),""]]);0
BranchStmt0,go/ast:Identgo/token:Posgo/token:Token 0�i 0BH�BH=$pkg.BlockStmt=$newType(0,"Struct","ast.BlockStmt","BlockStmt","go/ast",function(Lbrace_,List_,Rbrace_){this.$val=this;this.Lbrace=Lbrace_!==undefined?Lbrace_:0;this.List=List_!==undefined?List_:($sliceType(O)).nil;this.Rbrace=Rbrace_!==undefined?Rbrace_:0;});�%($ptrType(BH)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BH.init([["Lbrace","Lbrace","",A.Pos,""],["List","List","",($sliceType(O)),""],["Rbrace","Rbrace","",A.Pos,""]]);0	BlockStmt0go/ast:Stmtgo/token:Pos 0�� 0BI�QBI=$pkg.IfStmt=$newType(0,"Struct","ast.IfStmt","IfStmt","go/ast",function(If_,Init_,Cond_,Body_,Else_){this.$val=this;this.If=If_!==undefined?If_:0;this.Init=Init_!==undefined?Init_:$ifaceNil;this.Cond=Cond_!==undefined?Cond_:$ifaceNil;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;this.Else=Else_!==undefined?Else_:$ifaceNil;});�D($ptrType(BI)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BI.init([["If","If","",A.Pos,""],["Init","Init","",O,""],["Cond","Cond","",N,""],["Body","Body","",($ptrType(BH)),""],["Else","Else","",O,""]]);0IfStmt0:go/ast:BlockStmtgo/ast:Exprgo/ast:Stmtgo/token:Pos 0�� 0BJ�:BJ=$pkg.CaseClause=$newType(0,"Struct","ast.CaseClause","CaseClause","go/ast",function(Case_,List_,Colon_,Body_){this.$val=this;this.Case=Case_!==undefined?Case_:0;this.List=List_!==undefined?List_:($sliceType(N)).nil;this.Colon=Colon_!==undefined?Colon_:0;this.Body=Body_!==undefined?Body_:($sliceType(O)).nil;});�E($ptrType(BJ)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BJ.init([["Case","Case","",A.Pos,""],["List","List","",($sliceType(N)),""],["Colon","Colon","",A.Pos,""],["Body","Body","",($sliceType(O)),""]]);0
CaseClause0(go/ast:Exprgo/ast:Stmtgo/token:Pos 0�� 0BK�7BK=$pkg.SwitchStmt=$newType(0,"Struct","ast.SwitchStmt","SwitchStmt","go/ast",function(Switch_,Init_,Tag_,Body_){this.$val=this;this.Switch=Switch_!==undefined?Switch_:0;this.Init=Init_!==undefined?Init_:$ifaceNil;this.Tag=Tag_!==undefined?Tag_:$ifaceNil;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;});�2($ptrType(BK)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BK.init([["Switch","Switch","",A.Pos,""],["Init","Init","",O,""],["Tag","Tag","",N,""],["Body","Body","",($ptrType(BH)),""]]);0
SwitchStmt0:go/ast:BlockStmtgo/ast:Exprgo/ast:Stmtgo/token:Pos 0�� 0BL�OBL=$pkg.TypeSwitchStmt=$newType(0,"Struct","ast.TypeSwitchStmt","TypeSwitchStmt","go/ast",function(Switch_,Init_,Assign_,Body_){this.$val=this;this.Switch=Switch_!==undefined?Switch_:0;this.Init=Init_!==undefined?Init_:$ifaceNil;this.Assign=Assign_!==undefined?Assign_:$ifaceNil;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;});�8($ptrType(BL)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BL.init([["Switch","Switch","",A.Pos,""],["Init","Init","",O,""],["Assign","Assign","",O,""],["Body","Body","",($ptrType(BH)),""]]);0TypeSwitchStmt0-go/ast:BlockStmtgo/ast:Stmtgo/token:Pos 0�� 0BM�0BM=$pkg.CommClause=$newType(0,"Struct","ast.CommClause","CommClause","go/ast",function(Case_,Comm_,Colon_,Body_){this.$val=this;this.Case=Case_!==undefined?Case_:0;this.Comm=Comm_!==undefined?Comm_:$ifaceNil;this.Colon=Colon_!==undefined?Colon_:0;this.Body=Body_!==undefined?Body_:($sliceType(O)).nil;});�7($ptrType(BM)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BM.init([["Case","Case","",A.Pos,""],["Comm","Comm","",O,""],["Colon","Colon","",A.Pos,""],["Body","Body","",($sliceType(O)),""]]);0
CommClause0go/ast:Stmtgo/token:Pos 0� 0BN��BN=$pkg.SelectStmt=$newType(0,"Struct","ast.SelectStmt","SelectStmt","go/ast",function(Select_,Body_){this.$val=this;this.Select=Select_!==undefined?Select_:0;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;});�($ptrType(BN)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BN.init([["Select","Select","",A.Pos,""],["Body","Body","",($ptrType(BH)),""]]);0
SelectStmt0 go/ast:BlockStmtgo/token:Pos 0�� 0BO�XBO=$pkg.ForStmt=$newType(0,"Struct","ast.ForStmt","ForStmt","go/ast",function(For_,Init_,Cond_,Post_,Body_){this.$val=this;this.For=For_!==undefined?For_:0;this.Init=Init_!==undefined?Init_:$ifaceNil;this.Cond=Cond_!==undefined?Cond_:$ifaceNil;this.Post=Post_!==undefined?Post_:$ifaceNil;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;});�F($ptrType(BO)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BO.init([["For","For","",A.Pos,""],["Init","Init","",O,""],["Cond","Cond","",N,""],["Post","Post","",O,""],["Body","Body","",($ptrType(BH)),""]]);0	ForStmt0:go/ast:BlockStmtgo/ast:Exprgo/ast:Stmtgo/token:Pos 0�� 0BP��BP=$pkg.RangeStmt=$newType(0,"Struct","ast.RangeStmt","RangeStmt","go/ast",function(For_,Key_,Value_,TokPos_,Tok_,X_,Body_){this.$val=this;this.For=For_!==undefined?For_:0;this.Key=Key_!==undefined?Key_:$ifaceNil;this.Value=Value_!==undefined?Value_:$ifaceNil;this.TokPos=TokPos_!==undefined?TokPos_:0;this.Tok=Tok_!==undefined?Tok_:0;this.X=X_!==undefined?X_:$ifaceNil;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;});�|($ptrType(BP)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["stmtNode","stmtNode","go/ast",$funcType([],[],false),-1]];BP.init([["For","For","",A.Pos,""],["Key","Key","",N,""],["Value","Value","",N,""],["TokPos","TokPos","",A.Pos,""],["Tok","Tok","",A.Token,""],["X","X","",N,""],["Body","Body","",($ptrType(BH)),""]]);0	RangeStmt0=go/ast:BlockStmtgo/ast:Exprgo/token:Posgo/token:Token 0�
 0BQEBQ=$pkg.Spec=$newType(8,"Interface","ast.Spec","Spec","go/ast",null);��BQ.init([["End","End","",$funcType([],[A.Pos],false)],["Pos","Pos","",$funcType([],[A.Pos],false)],["specNode","specNode","go/ast",$funcType([],[],false)]]);0Spec0go/token:Pos 0�d 0BR��BR=$pkg.ImportSpec=$newType(0,"Struct","ast.ImportSpec","ImportSpec","go/ast",function(Doc_,Name_,Path_,Comment_,EndPos_){this.$val=this;this.Doc=Doc_!==undefined?Doc_:($ptrType(R)).nil;this.Name=Name_!==undefined?Name_:($ptrType(X)).nil;this.Path=Path_!==undefined?Path_:($ptrType(Z)).nil;this.Comment=Comment_!==undefined?Comment_:($ptrType(R)).nil;this.EndPos=EndPos_!==undefined?EndPos_:0;});�s($ptrType(BR)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["specNode","specNode","go/ast",$funcType([],[],false),-1]];BR.init([["Doc","Doc","",($ptrType(R)),""],["Name","Name","",($ptrType(X)),""],["Path","Path","",($ptrType(Z)),""],["Comment","Comment","",($ptrType(R)),""],["EndPos","EndPos","",A.Pos,""]]);0
ImportSpec0Bgo/ast:BasicLitgo/ast:CommentGroupgo/ast:Identgo/token:Pos 0�� 0BS��BS=$pkg.ValueSpec=$newType(0,"Struct","ast.ValueSpec","ValueSpec","go/ast",function(Doc_,Names_,Type_,Values_,Comment_){this.$val=this;this.Doc=Doc_!==undefined?Doc_:($ptrType(R)).nil;this.Names=Names_!==undefined?Names_:($sliceType(($ptrType(X)))).nil;this.Type=Type_!==undefined?Type_:$ifaceNil;this.Values=Values_!==undefined?Values_:($sliceType(N)).nil;this.Comment=Comment_!==undefined?Comment_:($ptrType(R)).nil;});��($ptrType(BS)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["specNode","specNode","go/ast",$funcType([],[],false),-1]];BS.init([["Doc","Doc","",($ptrType(R)),""],["Names","Names","",($sliceType(($ptrType(X)))),""],["Type","Type","",N,""],["Values","Values","",($sliceType(N)),""],["Comment","Comment","",($ptrType(R)),""]]);0	ValueSpec0>go/ast:CommentGroupgo/ast:Exprgo/ast:Identgo/token:Pos 0�� 0BT�LBT=$pkg.TypeSpec=$newType(0,"Struct","ast.TypeSpec","TypeSpec","go/ast",function(Doc_,Name_,Type_,Comment_){this.$val=this;this.Doc=Doc_!==undefined?Doc_:($ptrType(R)).nil;this.Name=Name_!==undefined?Name_:($ptrType(X)).nil;this.Type=Type_!==undefined?Type_:$ifaceNil;this.Comment=Comment_!==undefined?Comment_:($ptrType(R)).nil;});�G($ptrType(BT)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["specNode","specNode","go/ast",$funcType([],[],false),-1]];BT.init([["Doc","Doc","",($ptrType(R)),""],["Name","Name","",($ptrType(X)),""],["Type","Type","",N,""],["Comment","Comment","",($ptrType(R)),""]]);0
TypeSpec0>go/ast:CommentGroupgo/ast:Exprgo/ast:Identgo/token:Pos 0�� 0BU��BU=$pkg.BadDecl=$newType(0,"Struct","ast.BadDecl","BadDecl","go/ast",function(From_,To_){this.$val=this;this.From=From_!==undefined?From_:0;this.To=To_!==undefined?To_:0;});��($ptrType(BU)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["declNode","declNode","go/ast",$funcType([],[],false),-1]];BU.init([["From","From","",A.Pos,""],["To","To","",A.Pos,""]]);0	BadDecl0go/token:Pos 0�z 0BV��BV=$pkg.GenDecl=$newType(0,"Struct","ast.GenDecl","GenDecl","go/ast",function(Doc_,TokPos_,Tok_,Lparen_,Specs_,Rparen_){this.$val=this;this.Doc=Doc_!==undefined?Doc_:($ptrType(R)).nil;this.TokPos=TokPos_!==undefined?TokPos_:0;this.Tok=Tok_!==undefined?Tok_:0;this.Lparen=Lparen_!==undefined?Lparen_:0;this.Specs=Specs_!==undefined?Specs_:($sliceType(BQ)).nil;this.Rparen=Rparen_!==undefined?Rparen_:0;});��($ptrType(BV)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["declNode","declNode","go/ast",$funcType([],[],false),-1]];BV.init([["Doc","Doc","",($ptrType(R)),""],["TokPos","TokPos","",A.Pos,""],["Tok","Tok","",A.Token,""],["Lparen","Lparen","",A.Pos,""],["Specs","Specs","",($sliceType(BQ)),""],["Rparen","Rparen","",A.Pos,""]]);0	GenDecl0@go/ast:CommentGroupgo/ast:Specgo/token:Posgo/token:Token 0�~ 0BW��BW=$pkg.FuncDecl=$newType(0,"Struct","ast.FuncDecl","FuncDecl","go/ast",function(Doc_,Recv_,Name_,Type_,Body_){this.$val=this;this.Doc=Doc_!==undefined?Doc_:($ptrType(R)).nil;this.Recv=Recv_!==undefined?Recv_:($ptrType(V)).nil;this.Name=Name_!==undefined?Name_:($ptrType(X)).nil;this.Type=Type_!==undefined?Type_:($ptrType(AP)).nil;this.Body=Body_!==undefined?Body_:($ptrType(BH)).nil;});�s($ptrType(BW)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1],["declNode","declNode","go/ast",$funcType([],[],false),-1]];BW.init([["Doc","Doc","",($ptrType(R)),""],["Recv","Recv","",($ptrType(V)),""],["Name","Name","",($ptrType(X)),""],["Type","Type","",($ptrType(AP)),""],["Body","Body","",($ptrType(BH)),""]]);0
FuncDecl0fgo/ast:BlockStmtgo/ast:CommentGroupgo/ast:FieldListgo/ast:FuncTypego/ast:Identgo/token:Pos 0�� 0BX��BX=$pkg.File=$newType(0,"Struct","ast.File","File","go/ast",function(Doc_,Package_,Name_,Decls_,Scope_,Imports_,Unresolved_,Comments_){this.$val=this;this.Doc=Doc_!==undefined?Doc_:($ptrType(R)).nil;this.Package=Package_!==undefined?Package_:0;this.Name=Name_!==undefined?Name_:($ptrType(X)).nil;this.Decls=Decls_!==undefined?Decls_:($sliceType(P)).nil;this.Scope=Scope_!==undefined?Scope_:($ptrType(DX)).nil;this.Imports=Imports_!==undefined?Imports_:($sliceType(($ptrType(BR)))).nil;this.Unresolved=Unresolved_!==undefined?Unresolved_:($sliceType(($ptrType(X)))).nil;this.Comments=Comments_!==undefined?Comments_:($sliceType(($ptrType(R)))).nil;});��($ptrType(BX)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1]];BX.init([["Doc","Doc","",($ptrType(R)),""],["Package","Package","",A.Pos,""],["Name","Name","",($ptrType(X)),""],["Decls","Decls","",($sliceType(P)),""],["Scope","Scope","",($ptrType(DX)),""],["Imports","Imports","",($sliceType(($ptrType(BR)))),""],["Unresolved","Unresolved","",($sliceType(($ptrType(X)))),""],["Comments","Comments","",($sliceType(($ptrType(R)))),""]]);0File0_go/ast:CommentGroupgo/ast:Declgo/ast:Identgo/ast:ImportSpecgo/ast:Scopego/token:Pos 0�� 0BY�7BY=$pkg.Package=$newType(0,"Struct","ast.Package","Package","go/ast",function(Name_,Scope_,Imports_,Files_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Scope=Scope_!==undefined?Scope_:($ptrType(DX)).nil;this.Imports=Imports_!==undefined?Imports_:false;this.Files=Files_!==undefined?Files_:false;});�C($ptrType(BY)).methods=[["End","End","",$funcType([],[A.Pos],false),-1],["Pos","Pos","",$funcType([],[A.Pos],false),-1]];BY.init([["Name","Name","",$String,""],["Scope","Scope","",($ptrType(DX)),""],["Imports","Imports","",($mapType($String,($ptrType(DZ)))),""],["Files","Files","",($mapType($String,($ptrType(BX)))),""]]);0	Package08go/ast:File
CommentMap0"go/ast:CommentGroupgo/ast:Node 0�� 0CCTCC=$pkg.byInterval=$newType(12,"Slice","ast.byInterval","byInterval","go/ast",null);�qCC.methods=[["Len","Len","",$funcType([],[$Int],false),-1],["Less","Less","",$funcType([$Int,$Int],[$Bool],false),-1],["Swap","Swap","",$funcType([$Int,$Int],[],false),-1]];($ptrType(CC)).methods=[["Len","Len","",$funcType([],[$Int],false),-1],["Less","Less","",$funcType([$Int,$Int],[$Bool],false),-1],["Swap","Swap","",$funcType([$Int,$Int],[],false),-1]];CC.init(M);0
byInterval0
localError0  0�� 0DT��DT=$pkg.pkgBuilder=$newType(0,"Struct","ast.pkgBuilder","pkgBuilder","go/ast",function(fset_,errors_){this.$val=this;this.fset=fset_!==undefined?fset_:($ptrType(A.FileSet)).nil;this.errors=errors_!==undefined?errors_:L.ErrorList.nil;});��($ptrType(DT)).methods=[["declare","declare","go/ast",$funcType([($ptrType(DX)),($ptrType(DX)),($ptrType(DZ))],[],false),-1],["error","error","go/ast",$funcType([A.Pos,$String],[],false),-1],["errorf","errorf","go/ast",$funcType([A.Pos,$String,($sliceType($emptyInterface))],[],true),-1]];DT.init([["fset","fset","go/ast",($ptrType(A.FileSet)),""],["errors","errors","go/ast",L.ErrorList,""]]);0
pkgBuilder0S
Importer0
b=a.length;  
$while(b>0&&S(a.charCodeAt((b-1>>0)))){  
J  
Jb=b-(1)>>0;    }  
Rreturn a.substring(0,b);    }; 0stripTrailingWhitespace0go/ast:isWhitespace 0��(*go/ast.CommentGroup).Text0 �aR.Ptr.prototype.Text=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  �a=this;  �    if(a===($ptrType(R)).nil){  �return"";    }  �b=($sliceType($String)).make(a.List.$length);  c=a.List;d=0;while(d<c.$length){e=d;f=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  %(e<0||e>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+e]=f.Text;    d++;}  Gg=($sliceType($String)).make(0,10);  �h=b;i=0;while(i<h.$length){j=((i<0||i>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+i]);  
Ellipsis0go/ast:Ellipsis 0��(*go/ast.BasicLit).Pos0 ��Z.Ptr.prototype.Pos=function(){var a;  /Va=this;  /ureturn a.ValuePos;    };Z.prototype.Pos=function(){return this.$val.Pos();}; 0
BasicLit0go/ast:BasicLit 0��(*go/ast.FuncLit).Pos0 ��AA.Ptr.prototype.Pos=function(){var a;  /�a=this;  /�return a.Type.Pos();    };AA.prototype.Pos=function(){return this.$val.Pos();}; 0	FuncLit0go/ast:FuncLit 0�$(*go/ast.CompositeLit).Pos0 ��AB.Ptr.prototype.Pos=function(){var a;  /�a=this;  /�    if(!($interfaceIsEqual(a.Type,$ifaceNil))){  0return a.Type.Pos();    }  0return a.Lbrace;    };AB.prototype.Pos=function(){return this.$val.Pos();}; 0CompositeLit0go/ast:CompositeLit 0��(*go/ast.ParenExpr).Pos0 ��AC.Ptr.prototype.Pos=function(){var a;  03a=this;  0Xreturn a.Lparen;    };AC.prototype.Pos=function(){return this.$val.Pos();}; 0	ParenExpr0go/ast:ParenExpr 0��(*go/ast.SelectorExpr).Pos0 ��AD.Ptr.prototype.Pos=function(){var a;  0pa=this;  0�return a.X.Pos();    };AD.prototype.Pos=function(){return this.$val.Pos();}; 0SelectorExpr0go/ast:SelectorExpr 0��(*go/ast.IndexExpr).Pos0 ��AE.Ptr.prototype.Pos=function(){var a;  0�a=this;  0�return a.X.Pos();    };AE.prototype.Pos=function(){return this.$val.Pos();}; 0	IndexExpr0go/ast:IndexExpr 0��(*go/ast.SliceExpr).Pos0 ��AF.Ptr.prototype.Pos=function(){var a;  0�a=this;  1return a.X.Pos();    };AF.prototype.Pos=function(){return this.$val.Pos();}; 0	SliceExpr0go/ast:SliceExpr 0��(*go/ast.TypeAssertExpr).Pos0 ��AG.Ptr.prototype.Pos=function(){var a;  1*a=this;  1Oreturn a.X.Pos();    };AG.prototype.Pos=function(){return this.$val.Pos();}; 0TypeAssertExpr0go/ast:TypeAssertExpr 0��(*go/ast.CallExpr).Pos0 ��AH.Ptr.prototype.Pos=function(){var a;  1ha=this;  1�return a.Fun.Pos();    };AH.prototype.Pos=function(){return this.$val.Pos();}; 0
CallExpr0go/ast:CallExpr 0��(*go/ast.StarExpr).Pos0 ��AI.Ptr.prototype.Pos=function(){var a;  1�a=this;  1�return a.Star;    };AI.prototype.Pos=function(){return this.$val.Pos();}; 0
StarExpr0go/ast:StarExpr 0��(*go/ast.UnaryExpr).Pos0 ��AJ.Ptr.prototype.Pos=function(){var a;  1�a=this;  2return a.OpPos;    };AJ.prototype.Pos=function(){return this.$val.Pos();}; 0	UnaryExpr0go/ast:UnaryExpr 0��(*go/ast.BinaryExpr).Pos0 ��AK.Ptr.prototype.Pos=function(){var a;  2a=this;  2Dreturn a.X.Pos();    };AK.prototype.Pos=function(){return this.$val.Pos();}; 0
BinaryExpr0go/ast:BinaryExpr 0��(*go/ast.KeyValueExpr).Pos0 ��AL.Ptr.prototype.Pos=function(){var a;  2]a=this;  2�return a.Key.Pos();    };AL.prototype.Pos=function(){return this.$val.Pos();}; 0KeyValueExpr0go/ast:KeyValueExpr 0��(*go/ast.ArrayType).Pos0 ��AN.Ptr.prototype.Pos=function(){var a;  2�a=this;  2�return a.Lbrack;    };AN.prototype.Pos=function(){return this.$val.Pos();}; 0	ArrayType0go/ast:ArrayType 0��(*go/ast.StructType).Pos0 ��AO.Ptr.prototype.Pos=function(){var a;  2�a=this;  2�return a.Struct;    };AO.prototype.Pos=function(){return this.$val.Pos();}; 0
StructType0go/ast:StructType 0�M(*go/ast.FuncType).Pos0 ��AP.Ptr.prototype.Pos=function(){var a;  3a=this;  37    if((new A.Pos(a.Func)).IsValid()||a.Params===($ptrType(V)).nil){  3treturn a.Func;    }  3�return a.Params.Pos();    };AP.prototype.Pos=function(){return this.$val.Pos();}; 0
FuncType01go/ast:FieldListgo/ast:FuncTypego/token:Pos 0��(*go/ast.InterfaceType).Pos0 ��AQ.Ptr.prototype.Pos=function(){var a;  3�a=this;  4 return a.Interface;    };AQ.prototype.Pos=function(){return this.$val.Pos();}; 0
ChanType0go/ast:ChanType 0��(*go/ast.BadExpr).End0 }W.Ptr.prototype.End=function(){var a;  4�a=this;  4�return a.To;    };W.prototype.End=function(){return this.$val.End();}; 0	BadExpr0go/ast:BadExpr 0��(*go/ast.Ident).End0 ��X.Ptr.prototype.End=function(){var a;  4�a=this;  4�return(((a.NamePos>>0)+a.Name.length>>0)>>0);    };X.prototype.End=function(){return this.$val.End();}; 0Ident0go/ast:Ident 0�(*go/ast.Ellipsis).End0 ��Y.Ptr.prototype.End=function(){var a;  5a=this;  57    if(!($interfaceIsEqual(a.Elt,$ifaceNil))){  5Kreturn a.Elt.End();    }  5breturn a.Ellipsis+3>>0;    };Y.prototype.End=function(){return this.$val.End();}; 0
Ellipsis0go/ast:Ellipsis 0��(*go/ast.BasicLit).End0 ��Z.Ptr.prototype.End=function(){var a;  5�a=this;  5�return(((a.ValuePos>>0)+a.Value.length>>0)>>0);    };Z.prototype.End=function(){return this.$val.End();}; 0
BasicLit0go/ast:BasicLit 0��(*go/ast.FuncLit).End0 ��AA.Ptr.prototype.End=function(){var a;  5�a=this;  6return a.Body.End();    };AA.prototype.End=function(){return this.$val.End();}; 0	FuncLit0go/ast:FuncLit 0��(*go/ast.CompositeLit).End0 ��AB.Ptr.prototype.End=function(){var a;  6-a=this;  6Rreturn a.Rbrace+1>>0;    };AB.prototype.End=function(){return this.$val.End();}; 0CompositeLit0go/ast:CompositeLit 0��(*go/ast.ParenExpr).End0 ��AC.Ptr.prototype.End=function(){var a;  6na=this;  6�return a.Rparen+1>>0;    };AC.prototype.End=function(){return this.$val.End();}; 0	ParenExpr0go/ast:ParenExpr 0��(*go/ast.SelectorExpr).End0 ��AD.Ptr.prototype.End=function(){var a;  6�a=this;  6�return a.Sel.End();    };AD.prototype.End=function(){return this.$val.End();}; 0SelectorExpr0go/ast:SelectorExpr 0��(*go/ast.IndexExpr).End0 ��AE.Ptr.prototype.End=function(){var a;  6�a=this;  7return a.Rbrack+1>>0;    };AE.prototype.End=function(){return this.$val.End();}; 0	IndexExpr0go/ast:IndexExpr 0��(*go/ast.SliceExpr).End0 ��AF.Ptr.prototype.End=function(){var a;  70a=this;  7Ureturn a.Rbrack+1>>0;    };AF.prototype.End=function(){return this.$val.End();}; 0	SliceExpr0go/ast:SliceExpr 0��(*go/ast.TypeAssertExpr).End0 ��AG.Ptr.prototype.End=function(){var a;  7qa=this;  7�return a.Rparen+1>>0;    };AG.prototype.End=function(){return this.$val.End();}; 0TypeAssertExpr0go/ast:TypeAssertExpr 0��(*go/ast.CallExpr).End0 ��AH.Ptr.prototype.End=function(){var a;  7�a=this;  7�return a.Rparen+1>>0;    };AH.prototype.End=function(){return this.$val.End();}; 0
CallExpr0go/ast:CallExpr 0��(*go/ast.StarExpr).End0 ��AI.Ptr.prototype.End=function(){var a;  7�a=this;  8return a.X.End();    };AI.prototype.End=function(){return this.$val.End();}; 0
StarExpr0go/ast:StarExpr 0��(*go/ast.UnaryExpr).End0 ��AJ.Ptr.prototype.End=function(){var a;  81a=this;  8Vreturn a.X.End();    };AJ.prototype.End=function(){return this.$val.End();}; 0	UnaryExpr0go/ast:UnaryExpr 0��(*go/ast.BinaryExpr).End0 ��AK.Ptr.prototype.End=function(){var a;  8oa=this;  8�return a.Y.End();    };AK.prototype.End=function(){return this.$val.End();}; 0
BinaryExpr0go/ast:BinaryExpr 0��(*go/ast.KeyValueExpr).End0 ��AL.Ptr.prototype.End=function(){var a;  8�a=this;  8�return a.Value.End();    };AL.prototype.End=function(){return this.$val.End();}; 0KeyValueExpr0go/ast:KeyValueExpr 0��(*go/ast.ArrayType).End0 ��AN.Ptr.prototype.End=function(){var a;  8�a=this;  9return a.Elt.End();    };AN.prototype.End=function(){return this.$val.End();}; 0	ArrayType0go/ast:ArrayType 0��(*go/ast.StructType).End0 ��AO.Ptr.prototype.End=function(){var a;  9/a=this;  9Treturn a.Fields.End();    };AO.prototype.End=function(){return this.$val.End();}; 0
StructType0go/ast:StructType 0�-(*go/ast.FuncType).End0 ��AP.Ptr.prototype.End=function(){var a;  9ra=this;  9�    if(!(a.Results===($ptrType(V)).nil)){  9�return a.Results.End();    }  9�return a.Params.End();    };AP.prototype.End=function(){return this.$val.End();}; 0
FuncType0#go/ast:FieldListgo/ast:FuncType 0��(*go/ast.InterfaceType).End0 ��AQ.Ptr.prototype.End=function(){var a;  9�a=this;  :return a.Methods.End();    };AQ.prototype.End=function(){return this.$val.End();}; 0
ChanType0go/ast:ChanType 0��(*go/ast.BadExpr).exprNode0 iW.Ptr.prototype.exprNode=function(){    };W.prototype.exprNode=function(){return this.$val.exprNode();}; 0BadExprexprNode0go/ast:BadExpr 0��(*go/ast.Ident).exprNode0 iX.Ptr.prototype.exprNode=function(){    };X.prototype.exprNode=function(){return this.$val.exprNode();}; 0IdentexprNode0go/ast:Ident 0��(*go/ast.Ellipsis).exprNode0 iY.Ptr.prototype.exprNode=function(){    };Y.prototype.exprNode=function(){return this.$val.exprNode();}; 0EllipsisexprNode0go/ast:Ellipsis 0��(*go/ast.BasicLit).exprNode0 iZ.Ptr.prototype.exprNode=function(){    };Z.prototype.exprNode=function(){return this.$val.exprNode();}; 0BasicLitexprNode0go/ast:BasicLit 0��(*go/ast.FuncLit).exprNode0 kAA.Ptr.prototype.exprNode=function(){    };AA.prototype.exprNode=function(){return this.$val.exprNode();}; 0FuncLitexprNode0go/ast:FuncLit 0��(*go/ast.CompositeLit).exprNode0 kAB.Ptr.prototype.exprNode=function(){    };AB.prototype.exprNode=function(){return this.$val.exprNode();}; 0CompositeLitexprNode0go/ast:CompositeLit 0��(*go/ast.ParenExpr).exprNode0 kAC.Ptr.prototype.exprNode=function(){    };AC.prototype.exprNode=function(){return this.$val.exprNode();}; 0	ParenExprexprNode0go/ast:ParenExpr 0��(*go/ast.SelectorExpr).exprNode0 kAD.Ptr.prototype.exprNode=function(){    };AD.prototype.exprNode=function(){return this.$val.exprNode();}; 0SelectorExprexprNode0go/ast:SelectorExpr 0��(*go/ast.IndexExpr).exprNode0 kAE.Ptr.prototype.exprNode=function(){    };AE.prototype.exprNode=function(){return this.$val.exprNode();}; 0	IndexExprexprNode0go/ast:IndexExpr 0��(*go/ast.SliceExpr).exprNode0 kAF.Ptr.prototype.exprNode=function(){    };AF.prototype.exprNode=function(){return this.$val.exprNode();}; 0	SliceExprexprNode0go/ast:SliceExpr 0��!(*go/ast.TypeAssertExpr).exprNode0 kAG.Ptr.prototype.exprNode=function(){    };AG.prototype.exprNode=function(){return this.$val.exprNode();}; 0TypeAssertExprexprNode0go/ast:TypeAssertExpr 0��(*go/ast.CallExpr).exprNode0 kAH.Ptr.prototype.exprNode=function(){    };AH.prototype.exprNode=function(){return this.$val.exprNode();}; 0CallExprexprNode0go/ast:CallExpr 0��(*go/ast.StarExpr).exprNode0 kAI.Ptr.prototype.exprNode=function(){    };AI.prototype.exprNode=function(){return this.$val.exprNode();}; 0StarExprexprNode0go/ast:StarExpr 0��(*go/ast.UnaryExpr).exprNode0 kAJ.Ptr.prototype.exprNode=function(){    };AJ.prototype.exprNode=function(){return this.$val.exprNode();}; 0	UnaryExprexprNode0go/ast:UnaryExpr 0��(*go/ast.BinaryExpr).exprNode0 kAK.Ptr.prototype.exprNode=function(){    };AK.prototype.exprNode=function(){return this.$val.exprNode();}; 0
BinaryExprexprNode0go/ast:BinaryExpr 0��(*go/ast.KeyValueExpr).exprNode0 kAL.Ptr.prototype.exprNode=function(){    };AL.prototype.exprNode=function(){return this.$val.exprNode();}; 0KeyValueExprexprNode0go/ast:KeyValueExpr 0��(*go/ast.ArrayType).exprNode0 kAN.Ptr.prototype.exprNode=function(){    };AN.prototype.exprNode=function(){return this.$val.exprNode();}; 0	ArrayTypeexprNode0go/ast:ArrayType 0��(*go/ast.StructType).exprNode0 kAO.Ptr.prototype.exprNode=function(){    };AO.prototype.exprNode=function(){return this.$val.exprNode();}; 0
StructTypeexprNode0go/ast:StructType 0��(*go/ast.FuncType).exprNode0 kAP.Ptr.prototype.exprNode=function(){    };AP.prototype.exprNode=function(){return this.$val.exprNode();}; 0FuncTypeexprNode0go/ast:FuncType 0�� (*go/ast.InterfaceType).exprNode0 kAQ.Ptr.prototype.exprNode=function(){    };AQ.prototype.exprNode=function(){return this.$val.exprNode();}; 0
NewIdent0go/ast:Ident
IsExported02unicode/utf8:DecodeRuneInStringunicode:IsUpper 0��(*go/ast.Ident).IsExported0 ��X.Ptr.prototype.IsExported=function(){var a;  @�a=this;  @�return AU(a.Name);    };X.prototype.IsExported=function(){return this.$val.IsExported();}; 0Ident0!go/ast:Identgo/ast:IsExported 0�(*go/ast.Ident).String0 ��X.Ptr.prototype.String=function(){var a;  Aa=this;  A"    if(!(a===($ptrType(X)).nil)){  A3return a.Name;    }  AFreturn"<nil>";    };X.prototype.String=function(){return this.$val.String();}; 0Ident0go/ast:Ident 0��(*go/ast.BadStmt).Pos0 ��AV.Ptr.prototype.Pos=function(){var a;  TBa=this;  Tgreturn a.From;    };AV.prototype.Pos=function(){return this.$val.Pos();}; 0	BadStmt0go/ast:BadStmt 0��(*go/ast.DeclStmt).Pos0 ��AW.Ptr.prototype.Pos=function(){var a;  T}a=this;  T�return a.Decl.Pos();    };AW.prototype.Pos=function(){return this.$val.Pos();}; 0
DeclStmt0go/ast:DeclStmt 0��(*go/ast.EmptyStmt).Pos0 ��AX.Ptr.prototype.Pos=function(){var a;  T�a=this;  T�return a.Semicolon;    };AX.prototype.Pos=function(){return this.$val.Pos();}; 0	EmptyStmt0go/ast:EmptyStmt 0��(*go/ast.LabeledStmt).Pos0 ��AY.Ptr.prototype.Pos=function(){var a;  T�a=this;  U#return a.Label.Pos();    };AY.prototype.Pos=function(){return this.$val.Pos();}; 0
ExprStmt0go/ast:ExprStmt 0��(*go/ast.SendStmt).Pos0 ��BA.Ptr.prototype.Pos=function(){var a;  U~a=this;  U�return a.Chan.Pos();    };BA.prototype.Pos=function(){return this.$val.Pos();}; 0
SendStmt0go/ast:SendStmt 0��(*go/ast.IncDecStmt).Pos0 ��BB.Ptr.prototype.Pos=function(){var a;  U�a=this;  U�return a.X.Pos();    };BB.prototype.Pos=function(){return this.$val.Pos();}; 0
IncDecStmt0go/ast:IncDecStmt 0�'(*go/ast.AssignStmt).Pos0 ��BC.Ptr.prototype.Pos=function(){var a,b;  U�a=this;  V"return(b=a.Lhs,((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])).Pos();    };BC.prototype.Pos=function(){return this.$val.Pos();}; 0
AssignStmt0go/ast:AssignStmt 0��(*go/ast.GoStmt).Pos0 BD.Ptr.prototype.Pos=function(){var a;  V@a=this;  Vereturn a.Go;    };BD.prototype.Pos=function(){return this.$val.Pos();}; 0GoStmt0
ReturnStmt0go/ast:ReturnStmt 0��(*go/ast.BranchStmt).Pos0 ��BG.Ptr.prototype.Pos=function(){var a;  V�a=this;  Wreturn a.TokPos;    };BG.prototype.Pos=function(){return this.$val.Pos();}; 0
BranchStmt0go/ast:BranchStmt 0��(*go/ast.BlockStmt).Pos0 ��BH.Ptr.prototype.Pos=function(){var a;  W/a=this;  WTreturn a.Lbrace;    };BH.prototype.Pos=function(){return this.$val.Pos();}; 0	BlockStmt0go/ast:BlockStmt 0��(*go/ast.IfStmt).Pos0 BI.Ptr.prototype.Pos=function(){var a;  Wla=this;  W�return a.If;    };BI.prototype.Pos=function(){return this.$val.Pos();}; 0IfStmt0
CaseClause0go/ast:CaseClause 0��(*go/ast.SwitchStmt).Pos0 ��BK.Ptr.prototype.Pos=function(){var a;  W�a=this;  Xreturn a.Switch;    };BK.prototype.Pos=function(){return this.$val.Pos();}; 0
SwitchStmt0go/ast:SwitchStmt 0��(*go/ast.TypeSwitchStmt).Pos0 ��BL.Ptr.prototype.Pos=function(){var a;  Xa=this;  XBreturn a.Switch;    };BL.prototype.Pos=function(){return this.$val.Pos();}; 0TypeSwitchStmt0go/ast:TypeSwitchStmt 0��(*go/ast.CommClause).Pos0 ��BM.Ptr.prototype.Pos=function(){var a;  XZa=this;  Xreturn a.Case;    };BM.prototype.Pos=function(){return this.$val.Pos();}; 0
CommClause0go/ast:CommClause 0��(*go/ast.SelectStmt).Pos0 ��BN.Ptr.prototype.Pos=function(){var a;  X�a=this;  X�return a.Select;    };BN.prototype.Pos=function(){return this.$val.Pos();}; 0
SelectStmt0go/ast:SelectStmt 0��(*go/ast.ForStmt).Pos0 ��BO.Ptr.prototype.Pos=function(){var a;  X�a=this;  X�return a.For;    };BO.prototype.Pos=function(){return this.$val.Pos();}; 0	ForStmt0go/ast:ForStmt 0��(*go/ast.RangeStmt).Pos0 ��BP.Ptr.prototype.Pos=function(){var a;  Ya=this;  Y1return a.For;    };BP.prototype.Pos=function(){return this.$val.Pos();}; 0	RangeStmt0go/ast:RangeStmt 0��(*go/ast.BadStmt).End0 AV.Ptr.prototype.End=function(){var a;  YGa=this;  Yfreturn a.To;    };AV.prototype.End=function(){return this.$val.End();}; 0	BadStmt0go/ast:BadStmt 0��(*go/ast.DeclStmt).End0 ��AW.Ptr.prototype.End=function(){var a;  Yza=this;  Y�return a.Decl.End();    };AW.prototype.End=function(){return this.$val.End();}; 0
DeclStmt0go/ast:DeclStmt 0��(*go/ast.EmptyStmt).End0 ��AX.Ptr.prototype.End=function(){var a;  Y�a=this;  Y�return a.Semicolon+1>>0;    };AX.prototype.End=function(){return this.$val.End();}; 0	EmptyStmt0go/ast:EmptyStmt 0��(*go/ast.LabeledStmt).End0 ��AY.Ptr.prototype.End=function(){var a;  Za=this;  Z&return a.Stmt.End();    };AY.prototype.End=function(){return this.$val.End();}; 0
ExprStmt0go/ast:ExprStmt 0��(*go/ast.SendStmt).End0 ��BA.Ptr.prototype.End=function(){var a;  Z}a=this;  Z�return a.Value.End();    };BA.prototype.End=function(){return this.$val.End();}; 0
SendStmt0go/ast:SendStmt 0��(*go/ast.IncDecStmt).End0 ��BB.Ptr.prototype.End=function(){var a;  Z�a=this;  Z�return a.TokPos+2>>0;    };BB.prototype.End=function(){return this.$val.End();}; 0
IncDecStmt0go/ast:IncDecStmt 0�>(*go/ast.AssignStmt).End0 ��BC.Ptr.prototype.End=function(){var a,b,c;  [
a=this;  [+return(b=a.Rhs,c=a.Rhs.$length-1>>0,((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c])).End();    };BC.prototype.End=function(){return this.$val.End();}; 0
AssignStmt0go/ast:AssignStmt 0��(*go/ast.GoStmt).End0 ��BD.Ptr.prototype.End=function(){var a;  [Ta=this;  [ureturn a.Call.End();    };BD.prototype.End=function(){return this.$val.End();}; 0GoStmt0
ReturnStmt0go/ast:ReturnStmt 0�i(*go/ast.BranchStmt).End0 �BG.Ptr.prototype.End=function(){var a;  \_a=this;  \�    if(!(a.Label===($ptrType(X)).nil)){  \�return a.Label.End();    }  \�return(((a.TokPos>>0)+(new A.Token(a.Tok)).String().length>>0)>>0);    };BG.prototype.End=function(){return this.$val.End();}; 0
BranchStmt01go/ast:BranchStmtgo/ast:Identgo/token:Token 0��(*go/ast.BlockStmt).End0 ��BH.Ptr.prototype.End=function(){var a;  \�a=this;  ]return a.Rbrace+1>>0;    };BH.prototype.End=function(){return this.$val.End();}; 0	BlockStmt0go/ast:BlockStmt 0�(*go/ast.IfStmt).End0 ��BI.Ptr.prototype.End=function(){var a;  ]*a=this;  ]H    if(!($interfaceIsEqual(a.Else,$ifaceNil))){  ]]return a.Else.End();    }  ]ureturn a.Body.End();    };BI.prototype.End=function(){return this.$val.End();}; 0IfStmt0
CaseClause0go/ast:CaseClause 0��(*go/ast.SwitchStmt).End0 ��BK.Ptr.prototype.End=function(){var a;  ^
a=this;  ^/return a.Body.End();    };BK.prototype.End=function(){return this.$val.End();}; 0
SwitchStmt0go/ast:SwitchStmt 0��(*go/ast.TypeSwitchStmt).End0 ��BL.Ptr.prototype.End=function(){var a;  ^Ka=this;  ^preturn a.Body.End();    };BL.prototype.End=function(){return this.$val.End();}; 0TypeSwitchStmt0go/ast:TypeSwitchStmt 0�}(*go/ast.CommClause).End0 �5BM.Ptr.prototype.End=function(){var a,b,c,d;  ^�a=this;  ^�  ^�b=a.Body.$length;    if(b>0){  ^�return(c=a.Body,d=b-1>>0,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d])).End();    }  ^�return a.Colon+1>>0;    };BM.prototype.End=function(){return this.$val.End();}; 0
CommClause0go/ast:CommClause 0��(*go/ast.SelectStmt).End0 ��BN.Ptr.prototype.End=function(){var a;  _a=this;  _&return a.Body.End();    };BN.prototype.End=function(){return this.$val.End();}; 0
SelectStmt0go/ast:SelectStmt 0��(*go/ast.ForStmt).End0 ��BO.Ptr.prototype.End=function(){var a;  _Ba=this;  _creturn a.Body.End();    };BO.prototype.End=function(){return this.$val.End();}; 0	ForStmt0go/ast:ForStmt 0��(*go/ast.RangeStmt).End0 ��BP.Ptr.prototype.End=function(){var a;  _a=this;  _�return a.Body.End();    };BP.prototype.End=function(){return this.$val.End();}; 0	RangeStmt0go/ast:RangeStmt 0��(*go/ast.BadStmt).stmtNode0 kAV.Ptr.prototype.stmtNode=function(){    };AV.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0BadStmtstmtNode0go/ast:BadStmt 0��(*go/ast.DeclStmt).stmtNode0 kAW.Ptr.prototype.stmtNode=function(){    };AW.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0DeclStmtstmtNode0go/ast:DeclStmt 0��(*go/ast.EmptyStmt).stmtNode0 kAX.Ptr.prototype.stmtNode=function(){    };AX.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0	EmptyStmtstmtNode0go/ast:EmptyStmt 0��(*go/ast.LabeledStmt).stmtNode0 kAY.Ptr.prototype.stmtNode=function(){    };AY.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0LabeledStmtstmtNode0go/ast:LabeledStmt 0��(*go/ast.ExprStmt).stmtNode0 kAZ.Ptr.prototype.stmtNode=function(){    };AZ.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0ExprStmtstmtNode0go/ast:ExprStmt 0��(*go/ast.SendStmt).stmtNode0 kBA.Ptr.prototype.stmtNode=function(){    };BA.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0SendStmtstmtNode0go/ast:SendStmt 0��(*go/ast.IncDecStmt).stmtNode0 kBB.Ptr.prototype.stmtNode=function(){    };BB.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0
IncDecStmtstmtNode0go/ast:IncDecStmt 0��(*go/ast.AssignStmt).stmtNode0 kBC.Ptr.prototype.stmtNode=function(){    };BC.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0
AssignStmtstmtNode0go/ast:AssignStmt 0��(*go/ast.GoStmt).stmtNode0 kBD.Ptr.prototype.stmtNode=function(){    };BD.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0GoStmtstmtNode0
ReturnStmtstmtNode0go/ast:ReturnStmt 0��(*go/ast.BranchStmt).stmtNode0 kBG.Ptr.prototype.stmtNode=function(){    };BG.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0
BranchStmtstmtNode0go/ast:BranchStmt 0��(*go/ast.BlockStmt).stmtNode0 kBH.Ptr.prototype.stmtNode=function(){    };BH.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0	BlockStmtstmtNode0go/ast:BlockStmt 0��(*go/ast.IfStmt).stmtNode0 kBI.Ptr.prototype.stmtNode=function(){    };BI.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0IfStmtstmtNode0
CaseClausestmtNode0go/ast:CaseClause 0��(*go/ast.SwitchStmt).stmtNode0 kBK.Ptr.prototype.stmtNode=function(){    };BK.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0
SwitchStmtstmtNode0go/ast:SwitchStmt 0��!(*go/ast.TypeSwitchStmt).stmtNode0 kBL.Ptr.prototype.stmtNode=function(){    };BL.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0TypeSwitchStmtstmtNode0go/ast:TypeSwitchStmt 0��(*go/ast.CommClause).stmtNode0 kBM.Ptr.prototype.stmtNode=function(){    };BM.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0
CommClausestmtNode0go/ast:CommClause 0��(*go/ast.SelectStmt).stmtNode0 kBN.Ptr.prototype.stmtNode=function(){    };BN.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0
SelectStmtstmtNode0go/ast:SelectStmt 0��(*go/ast.ForStmt).stmtNode0 kBO.Ptr.prototype.stmtNode=function(){    };BO.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0ForStmtstmtNode0go/ast:ForStmt 0��(*go/ast.RangeStmt).stmtNode0 kBP.Ptr.prototype.stmtNode=function(){    };BP.prototype.stmtNode=function(){return this.$val.stmtNode();}; 0	RangeStmtstmtNode0go/ast:RangeStmt 0�'(*go/ast.ImportSpec).Pos0 ��BR.Ptr.prototype.Pos=function(){var a;  h�a=this;  i    if(!(a.Name===($ptrType(X)).nil)){  i&return a.Name.Pos();    }  i>return a.Path.Pos();    };BR.prototype.Pos=function(){return this.$val.Pos();}; 0
ImportSpec0!go/ast:Identgo/ast:ImportSpec 0�&(*go/ast.ValueSpec).Pos0 ��BS.Ptr.prototype.Pos=function(){var a,b;  iZa=this;  izreturn(b=a.Names,((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])).Pos();    };BS.prototype.Pos=function(){return this.$val.Pos();}; 0	ValueSpec0go/ast:ValueSpec 0��(*go/ast.TypeSpec).Pos0 ��BT.Ptr.prototype.Pos=function(){var a;  i�a=this;  i�return a.Name.Pos();    };BT.prototype.Pos=function(){return this.$val.Pos();}; 0
TypeSpec0go/ast:TypeSpec 0�	(*go/ast.ImportSpec).End0 ��BR.Ptr.prototype.End=function(){var a;  i�a=this;  i�    if(!((a.EndPos===0))){  jreturn a.EndPos;    }  j"return a.Path.End();    };BR.prototype.End=function(){return this.$val.End();}; 0
ImportSpec0go/ast:ImportSpec 0�F(*go/ast.ValueSpec).End0 �BS.Ptr.prototype.End=function(){var a,b,c,d,e,f;  j?a=this;  j`  jcb=a.Values.$length;    if(b>0){  j�return(c=a.Values,d=b-1>>0,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d])).End();    }  j�    if(!($interfaceIsEqual(a.Type,$ifaceNil))){  j�return a.Type.End();    }  j�return(e=a.Names,f=a.Names.$length-1>>0,((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f])).End();    };BS.prototype.End=function(){return this.$val.End();}; 0	ValueSpec0go/ast:ValueSpec 0��(*go/ast.TypeSpec).End0 ��BT.Ptr.prototype.End=function(){var a;  j�a=this;  kreturn a.Type.End();    };BT.prototype.End=function(){return this.$val.End();}; 0
TypeSpec0go/ast:TypeSpec 0��(*go/ast.ImportSpec).specNode0 kBR.Ptr.prototype.specNode=function(){    };BR.prototype.specNode=function(){return this.$val.specNode();}; 0
ImportSpecspecNode0go/ast:ImportSpec 0��(*go/ast.ValueSpec).specNode0 kBS.Ptr.prototype.specNode=function(){    };BS.prototype.specNode=function(){return this.$val.specNode();}; 0	ValueSpecspecNode0go/ast:ValueSpec 0��(*go/ast.TypeSpec).specNode0 kBT.Ptr.prototype.specNode=function(){    };BT.prototype.specNode=function(){return this.$val.specNode();}; 0TypeSpecspecNode0go/ast:TypeSpec 0��(*go/ast.BadDecl).Pos0 ��BU.Ptr.prototype.Pos=function(){var a;  q�a=this;  q�return a.From;    };BU.prototype.Pos=function(){return this.$val.Pos();}; 0	BadDecl0go/ast:BadDecl 0��(*go/ast.GenDecl).Pos0 ��BV.Ptr.prototype.Pos=function(){var a;  q�a=this;  q�return a.TokPos;    };BV.prototype.Pos=function(){return this.$val.Pos();}; 0	GenDecl0go/ast:GenDecl 0��(*go/ast.FuncDecl).Pos0 ��BW.Ptr.prototype.Pos=function(){var a;  q�a=this;  rreturn a.Type.Pos();    };BW.prototype.Pos=function(){return this.$val.Pos();}; 0
FuncDecl0go/ast:FuncDecl 0��(*go/ast.BadDecl).End0 BU.Ptr.prototype.End=function(){var a;  r4a=this;  rRreturn a.To;    };BU.prototype.End=function(){return this.$val.End();}; 0	BadDecl0go/ast:BadDecl 0�}(*go/ast.GenDecl).End0 �0BV.Ptr.prototype.End=function(){var a,b;  rfa=this;  r�    if((new A.Pos(a.Rparen)).IsValid()){  r�return a.Rparen+1>>0;    }  r�return(b=a.Specs,((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])).End();    };BV.prototype.End=function(){return this.$val.End();}; 0	GenDecl0go/ast:GenDeclgo/token:Pos 0�&(*go/ast.FuncDecl).End0 ��BW.Ptr.prototype.End=function(){var a;  r�a=this;  r�    if(!(a.Body===($ptrType(BH)).nil)){  sreturn a.Body.End();    }  s$return a.Type.End();    };BW.prototype.End=function(){return this.$val.End();}; 0
FuncDecl0#go/ast:BlockStmtgo/ast:FuncDecl 0��(*go/ast.BadDecl).declNode0 kBU.Ptr.prototype.declNode=function(){    };BU.prototype.declNode=function(){return this.$val.declNode();}; 0BadDecldeclNode0go/ast:BadDecl 0��(*go/ast.GenDecl).declNode0 kBV.Ptr.prototype.declNode=function(){    };BV.prototype.declNode=function(){return this.$val.declNode();}; 0GenDecldeclNode0go/ast:GenDecl 0��(*go/ast.FuncDecl).declNode0 kBW.Ptr.prototype.declNode=function(){    };BW.prototype.declNode=function(){return this.$val.declNode();}; 0FuncDecldeclNode0go/ast:FuncDecl 0��(*go/ast.File).Pos0 ��BX.Ptr.prototype.Pos=function(){var a;  w<a=this;  wWreturn a.Package;    };BX.prototype.Pos=function(){return this.$val.Pos();}; 0File0
CommentMap
addComment0(go/ast:CommentGroupgo/ast:CommentMap 0��(go/ast.byInterval).Len0 ��CC.prototype.Len=function(){var a;  ~Va=this;  ~preturn a.$length;    };$ptrType(CC).prototype.Len=function(){return this.$get().Len();}; 0
byInterval0go/ast:byInterval 0�i(go/ast.byInterval).Less0 �!CC.prototype.Less=function(a,b){var c,d,e,f,g;  ~�c=this;  ~�d=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Pos();e=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Pos();f=d;g=e;  ~�return f<g||(f===g)&&((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).End()>((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).End();    };$ptrType(CC).prototype.Less=function(a,b){return this.$get().Less(a,b);}; 0
byInterval0go/ast:byInterval 0�+(go/ast.byInterval).Swap0 ��CC.prototype.Swap=function(a,b){var c,d,e;  c=this;  *d=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]);e=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]);(a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]=d;(b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]=e;    };$ptrType(CC).prototype.Swap=function(a,b){return this.$get().Swap(a,b);}; 0
byInterval0go/ast:byInterval 0��go/ast.nodeList0CD�CD=function(a){var b;  �  �b=($sliceType(M)).nil;  �EK(a,(function(c){var d;  �d=c;  �if(d===$ifaceNil||$assertType(d,($ptrType(R)),true)[1]||$assertType(d,($ptrType(Q)),true)[1]){  �4return false;    }  �Gb=$append(b,c);  �`return true;    }));  �{return b;    }; 0
nodeList0Bgo/ast:Commentgo/ast:CommentGroupgo/ast:Inspectgo/ast:Node 0��(*go/ast.commentListReader).eol0 ��CE.Ptr.prototype.eol=function(){var a;  ��a=this;  ��return a.index>=a.list.$length;    };CE.prototype.eol=function(){return this.$val.eol();}; 0commentListReadereol0go/ast:commentListReader 0�+ (*go/ast.commentListReader).next0 ��CE.Ptr.prototype.next=function(){var a,b,c;  �a=this;  �4    if(!a.eol()){  �Da.comment=(b=a.list,c=a.index,((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]));  �b$copy(a.pos,a.fset.Position(a.comment.Pos()),A.Position);  ��$copy(a.end,a.fset.Position(a.comment.End()),A.Position);  ��  ��a.index=a.index+(1)>>0;    }    };CE.prototype.next=function(){return this.$val.next();}; 0commentListReadernext09go/ast:commentListReader
go/ast:eolgo/token:Position 0��(*go/ast.nodeStack).push0 x$ptrType(CF).prototype.push=function(a){var b;  ��b=this;  ��b.pop(a.Pos());  ��b.$set($append((b.$get()),a));    }; 0	nodeStackpush0go/ast:nodeStack
go/ast:pop 0�(*go/ast.nodeStack).pop0 ��$ptrType(CF).prototype.pop=function(a){var b=$ifaceNil,c,d,e,f,g,h;  ��c=this;  ��d=c.$get().$length;  ��while(d>0&&(e=c.$get(),f=d-1>>0,((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f])).End()<=a){  �
b=(g=c.$get(),h=d-1>>0,((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]));  �  �d=d-(1)>>0;    }  �$c.$set($subslice((c.$get()),0,d));  �4    b=b;return b;    }; 0	nodeStackpop0go/ast:nodeStack 0�	�go/ast.NewCommentMap0CG�+CG=$pkg.NewCommentMap=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  ��    if(c.$length===0){  ��return false;    }  ��d=new $Map();  � e=($sliceType(($ptrType(R)))).make(c.$length);  �-$copySlice(e,c);  �dCA(e);  �wf=new CE.Ptr(a,e,0,($ptrType(R)).nil,new A.Position.Ptr(),new A.Position.Ptr());  ��f.next();  ��g=CD(b);  �g=$append(g,$ifaceNil);  �e  �mh=$ifaceNil;  ��i=new A.Position.Ptr();$copy(i,new A.Position.Ptr(),A.Position);  ��j=$ifaceNil;  �k=new A.Position.Ptr();$copy(k,new A.Position.Ptr(),A.Position);  �,l=CF.nil;  �^m=g;n=0;while(n<m.$length){o=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]);  �z  �~p=new A.Position.Ptr();$copy(p,new A.Position.Ptr(),A.Position);  ��    if(!($interfaceIsEqual(o,$ifaceNil))){  ��$copy(p,a.Position(o.Pos()),A.Position);    }else{  �T  �pp.Offset=1073741824;  ��p.Line=1073741824;    }  ��while(f.end.Offset<=p.Offset){  �  �q=new($ptrType(CF))(function(){return l;},function($v){l=$v;}).pop(f.comment.Pos());    if(!($interfaceIsEqual(q,$ifaceNil))){  �Nj=q;  �[$copy(k,a.Position(j.End()),A.Position);    }  �r  �vr=$ifaceNil;  ��  ��if(!($interfaceIsEqual(j,$ifaceNil))&&((k.Line===f.pos.Line)||((k.Line+1>>0)===f.pos.Line)&&(f.end.Line+1>>0)<p.Line)){  �r=j;      �$}else if(!($interfaceIsEqual(h,$ifaceNil))&&((i.Line===f.pos.Line)||((i.Line+1>>0)===f.pos.Line)&&(f.end.Line+1>>0)<p.Line||$interfaceIsEqual(o,$ifaceNil))){  �r=h;    }else{  �o    if($interfaceIsEqual(o,$ifaceNil)){  ��$panic(new $String("internal error: no comments should be associated with sentinel"));    }  �8r=o;    }  �J(new CB(d)).addComment(r,f.comment);  �o    if(f.eol()){  ��return d;    }  ��f.next();    }  ��h=o;  ��$copy(i,a.Position(h.End()),A.Position);  �%s=o;  �9if($assertType(s,($ptrType(BX)),true)[1]||$assertType(s,($ptrType(U)),true)[1]||$assertType(s,P,true)[1]||$assertType(s,BQ,true)[1]||$assertType(s,O,true)[1]){  �bnew($ptrType(CF))(function(){return l;},function($v){l=$v;}).push(o);    }    n++;}  �yreturn d;    }; 0
go/ast:eolgo/ast:nextgo/ast:nodeListgo/ast:nodeStack
go/ast:popgo/ast:pushgo/ast:sortCommentsgo/token:FileSetgo/token:Position 0�M(go/ast.CommentMap).Update0 ��CB.prototype.Update=function(a,b){var c,d,e,f,g;  �Gc=this.$val!==undefined?this.$val:this;  �v  �ye=(d=c[a.$key()],d!==undefined?d.v:($sliceType(($ptrType(R)))).nil);    if(e.$length>0){  ��delete c[a.$key()];  ��f=b;(c||$throwRuntimeError("assignment to entry in nil map"))[f.$key()]={k:f,v:$appendSlice((g=c[b.$key()],g!==undefined?g.v:($sliceType(($ptrType(R)))).nil),e)};    }  ��return b;    };$ptrType(CB).prototype.Update=function(a,b){return new CB(this.$get()).Update(a,b);}; 0
CommentMap0(go/ast:CommentGroupgo/ast:CommentMap 0�6(go/ast.CommentMap).Filter0 ��CB.prototype.Filter=function(a){var b,c;  ��b=this.$val!==undefined?this.$val:this;  ��c=new $Map();  ��EK(a,(function(d){var e,f,g;  ��  ��f=(e=b[d.$key()],e!==undefined?e.v:($sliceType(($ptrType(R)))).nil);    if(f.$length>0){  �g=d;(c||$throwRuntimeError("assignment to entry in nil map"))[g.$key()]={k:g,v:f};    }  �-return true;    }));  �>return c;    };$ptrType(CB).prototype.Filter=function(a){return new CB(this.$get()).Filter(a);}; 0
CommentMap08go/ast:CommentGroupgo/ast:CommentMapgo/ast:Inspect 0�(go/ast.CommentMap).Comments0 ��CB.prototype.Comments=function(){var a,b,c,d,e,f,g;  ��a=this.$val!==undefined?this.$val:this;  ��b=($sliceType(($ptrType(R)))).make(0,$keys(a).length);  �c=a;d=0;e=$keys(c);while(d<e.length){f=c[e[d]];        if(f===undefined){    d++;continue;    }g=f.v;  �9b=$appendSlice(b,g);    d++;}  �WCA(b);  �kreturn b;    };$ptrType(CB).prototype.Comments=function(){return new CB(this.$get()).Comments();}; 0
CommentMap0=go/ast:CommentGroupgo/ast:CommentMapgo/ast:sortComments 0��go/ast.summary0CH�cCH=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;  ��  ��  ��b=new E.Buffer.Ptr();$copy(b,new E.Buffer.Ptr(),E.Buffer);  ��  ��c=a;d=0;loop:while(d<c.$length){e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  ��f=e.List;g=0;while(g<f.$length){h=((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g]);  ��    if(b.Len()>=40){  ��break loop;    }  �b.WriteString(h.Text);    g++;}    d++;}  �D    if(b.Len()>40){  �^b.Truncate(37);  �yb.WriteString("...");    }  ��i=b.Bytes();  ��j=i;k=0;while(k<j.$length){l=k;m=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  ��n=m;  ��if(n===9||n===10||n===13){  �(l<0||l>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+l]=32;    }    k++;}  �-return $bytesToString(i);    }; 0	summary0bytes:Buffer 0��(go/ast.CommentMap).String0 �QCB.prototype.String=function(){var a,b,c,d,e,f,g,h,i,j,k,l;  �Ka=this.$val!==undefined?this.$val:this;  �o  �sb=new E.Buffer.Ptr();$copy(b,new E.Buffer.Ptr(),E.Buffer);  ��F.Fprintln(b,new($sliceType($emptyInterface))([new $String("CommentMap {")]));  ��c=a;d=0;e=$keys(c);while(d<e.length){f=c[e[d]];        if(f===undefined){    d++;continue;    }g=f.k;h=f.v;  �
CommentMap0gbytes:Bufferfmt:Fprintffmt:Fprintlnfmt:Sprintfgo/ast:CommentMapgo/ast:Identgo/ast:summary 0ogo/ast.exportFilter0CI(CI=function(a){  ��return AU(a);    }; 0exportFilter0go/ast:IsExported 0��go/ast.FileExports0CJACJ=$pkg.FileExports=function(a){  ��return CW(a,CI,true);    }; 0
    if(c){  �CQ(i.Type,b,c);    }  �E(f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]=i;  �T  �Tf=f+(1)>>0;    }    h++;}  �`    if(f<e.$length){  �ud=true;    }  ��a.List=$subslice(e,0,f);  ��return d;    }; 0filterFieldList0]go/ast:FieldListgo/ast:Identgo/ast:fieldNamego/ast:filterIdentListgo/ast:filterType 0��go/ast.filterParamList0CP�7CP=function(a,b,c){var d,e,f,g;  ��    if(a===($ptrType(V)).nil){  �return false;    }  �#  �'d=false;  �/e=a.List;f=0;while(f<e.$length){g=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  �Q    if(CQ(g.Type,b,c)){  �|d=true;    }    f++;}  ��return d;    }; 0filterParamList0%go/ast:FieldListgo/ast:filterType 0��go/ast.filterType0CQ��CQ=function(a,b,c){var d,e,f,g,h,i;  ��e=a;  ��if($assertType(e,($ptrType(X)),true)[1]){d=e.$val;  ��return b(d.Name);      �
filterType0��go/ast:ArrayTypego/ast:ChanTypego/ast:FuncTypego/ast:Identgo/ast:InterfaceTypego/ast:MapTypego/ast:ParenExprgo/ast:StructTypego/ast:filterFieldListgo/ast:filterParamList 0�Jgo/ast.filterSpec0CR��CR=function(a,b,c){var d,e;  ��e=a;  �if($assertType(e,($ptrType(BS)),true)[1]){d=e.$val;  �d.Names=CM(d.Names,b);  �<    if(d.Names.$length>0){  �U    if(c){  �eCQ(d.Type,b,c);    }  ��return true;    }      ��}else if($assertType(e,($ptrType(BT)),true)[1]){d=e.$val;  ��    if(b(d.Name.Name)){  ��    if(c){  ��CQ(d.Type,b,c);    }  ��return true;    }  �
filterSpec0Ngo/ast:TypeSpecgo/ast:ValueSpecgo/ast:filterIdentListgo/ast:filterType 0��go/ast.filterSpecList0CS�ZCS=function(a,b,c){var d,e,f,g;  �Pd=0;  �Xe=a;f=0;while(f<e.$length){g=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  �s    if(CR(g,b,c)){  ��(d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]=g;  ��  ��d=d+(1)>>0;    }    f++;}  ��return $subslice(a,0,d);    }; 0filterSpecList0go/ast:filterSpec 0��go/ast.FilterDecl0CTBCT=$pkg.FilterDecl=function(a,b){  �4return CU(a,b,false);    }; 0
FilterDecl0go/ast:filterDecl 0�~go/ast.filterDecl0CU�CU=function(a,b,c){var d,e;  ��e=a;  ��if($assertType(e,($ptrType(BV)),true)[1]){d=e.$val;  ��d.Specs=CS(d.Specs,b,c);  ��return d.Specs.$length>0;      �}else if($assertType(e,($ptrType(BW)),true)[1]){d=e.$val;  �return b(d.Name.Name);    }  �3return false;    }; 0
filterDecl08go/ast:FuncDeclgo/ast:GenDeclgo/ast:filterSpecList 0��go/ast.FilterFile0CVBCV=$pkg.FilterFile=function(a,b){  �Rreturn CW(a,b,false);    }; 0
FilterFile0go/ast:filterFile 0��go/ast.filterFile0CW��CW=function(a,b,c){var d,e,f,g,h;  ��d=0;  ��e=a.Decls;f=0;while(f<e.$length){g=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  ��    if(CU(g,b,c)){  ��(h=a.Decls,(d<0||d>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+d]=g);  �
filterFile0go/ast:filterDecl 0��go/ast.FilterPackage0CXECX=$pkg.FilterPackage=function(a,b){  ��return CY(a,b,false);    }; 0
importPath0$go/ast:ImportSpecstrconv:Unquote 0��go/ast.importName0DF��DF=function(a){var b;  ��b=$assertType(a,($ptrType(BR))).Name;  �    if(b===($ptrType(X)).nil){  �%return"";    }  �3return b.Name;    }; 0
importName0!go/ast:Identgo/ast:ImportSpec 0��go/ast.importComment0DG��DG=function(a){var b;  �ib=$assertType(a,($ptrType(BR))).Comment;  Շ    if(b===($ptrType(R)).nil){  ՗return"";    }  եreturn b.Text();    }; 0
collapse0Ngo/ast:CommentGroupgo/ast:ImportSpecgo/ast:importNamego/ast:importPath 0�
pkgBuildererror0<go/ast:pkgBuildergo/scanner:ErrorListgo/token:Position 0�(*go/ast.pkgBuilder).errorf0 ��DT.Ptr.prototype.errorf=function(a,b,c){var d;  ��d=this;  �Cd.error(a,F.Sprintf(b,c));    };DT.prototype.errorf=function(a,b,c){return this.$val.errorf(a,b,c);}; 0
pkgBuildererrorf0.fmt:Sprintfgo/ast:errorgo/ast:pkgBuilder 0�#(*go/ast.pkgBuilder).declare0 ��DT.Ptr.prototype.declare=function(a,b,c){var d,e,f,g,h;  �wd=this;  ��e=a.Insert(c);  ��    if(e===($ptrType(DZ)).nil&&!(b===($ptrType(DX)).nil)){  �0e=b.Lookup(c.Name);    }  �T    if(!(e===($ptrType(DZ)).nil)){  �ff="";  �w  �zg=e.Pos();    if((new A.Pos(g)).IsValid()){  ��f=F.Sprintf("\n\tprevious declaration at %s",new($sliceType($emptyInterface))([(h=d.fset.Position(g),new h.constructor.Struct(h))]));    }  ��d.error(c.Pos(),F.Sprintf("%s redeclared in this block%s",new($sliceType($emptyInterface))([new $String(c.Name),new $String(f)])));    }    };DT.prototype.declare=function(a,b,c){return this.$val.declare(a,b,c);}; 0
pkgBuilderdeclare0Yfmt:Sprintf
�go/ast.NewPackage0DW�	�DW=$pkg.NewPackage=function(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at; : >e=new DT.Ptr();$copy(e,new DT.Ptr(),DT); Le.fset=a; wf=""; �g=DY(d); �h=b;i=0;j=$keys(h);while(i<j.length){k=h[j[i]];        if(k===undefined){    i++;continue;    }l=k.v; � �m=l.Name.Name; if(f===""){ f=m;     .}else if(!(m===f)){ Ge.errorf(l.Package,"package %s; expected %s",new($sliceType($emptyInterface))([new $String(m),new $String(f)])); �i++;continue;    } �n=l.Scope.Objects;o=0;p=$keys(n);while(o<p.length){q=n[p[o]];        if(q===undefined){    o++;continue;    }r=q.v; e.declare(g,($ptrType(DX)).nil,r);    o++;}    i++;} }s=new $Map(); �t=b;u=0;v=$keys(t);while(u<v.length){w=t[v[u]];        if(w===undefined){    u++;continue;    }x=w.v; ]    if(!(x.Name.Name===f)){ u++;continue;    } �y=false; �z=DY(g); �aa=x.Imports;ab=0;while(ab<aa.$length){ac=((ab<0||ab>=aa.$length)?$throwRuntimeError("index out of range"):aa.$array[aa.$offset+ab]);      if(c===$throwNilPointerError){ 9y=true; Qab++;continue;    } bad=H.Unquote(ac.Path.Value);ae=ad[0]; �af=c(s,ae);ag=af[0];ah=af[1]; �    if(!($interfaceIsEqual(ah,$ifaceNil))){ �e.errorf(ac.Path.Pos(),"could not import %s (%s)",new($sliceType($emptyInterface))([new $String(ae),ah])); y=true; )ab++;continue;    } 	#ai=ag.Name; 	7    if(!(ac.Name===($ptrType(X)).nil)){ 	Qai=ac.Name.Name;    } 	�    if(ai==="."){ 	�aj=$assertType(ag.Data,($ptrType(DX))).Objects;ak=0;al=$keys(aj);while(ak<al.length){am=aj[al[ak]];        if(am===undefined){    ak++;continue;    }an=am.v; 
e.declare(z,g,an);    ak++;}        }else if(!(ai==="_")){ ao=EA(1,ai); ,ao.Decl=ac; @ao.Data=ag.Data; Xe.declare(z,g,ao);    }    ab++;} �    if(y){ �g.Outer=($ptrType(DX)).nil;    } �ap=0; �aq=x.Unresolved;ar=0;while(ar<aq.$length){as=((ar<0||ar>=aq.$length)?$throwRuntimeError("index out of range"):aq.$array[aq.$offset+ar]); �    if(!DU(z,as)){ 
NewPackage0��go/ast:Ident
NewScope0go/ast:Scope 0�(*go/ast.Scope).Lookup0 ��DX.Ptr.prototype.Lookup=function(a){var b,c; Vb=this; return(c=b.Objects[a],c!==undefined?c.v:($ptrType(DZ)).nil);    };DX.prototype.Lookup=function(a){return this.$val.Lookup(a);}; 0Scope0
EI(a,e);    d++;}    }; 0walkExprList0
EI(a,c.Params);    } *"    if(!(c.Results===($ptrType(V)).nil)){ *;EI(a,c.Results);    }     *T}else if($assertType(d,($ptrType(AQ)),true)[1]){c=d.$val; *kEI(a,c.Methods);     *�}else if($assertType(d,($ptrType(AR)),true)[1]){c=d.$val; *�EI(a,c.Key); *�EI(a,c.Value);     *�}else if($assertType(d,($ptrType(AS)),true)[1]){c=d.$val; *�EI(a,c.Value);     *�}else if($assertType(d,($ptrType(AV)),true)[1]){c=d.$val;     +
fmt:Printfgo/ast:ArrayTypego/ast:AssignStmtgo/ast:BadDeclgo/ast:BadExprgo/ast:BadStmtgo/ast:BasicLitgo/ast:BinaryExprgo/ast:BlockStmtgo/ast:BranchStmtgo/ast:CallExprgo/ast:CaseClausego/ast:ChanTypego/ast:CommClausego/ast:Commentgo/ast:CommentGroupgo/ast:CompositeLitgo/ast:DeclStmtgo/ast:DeferStmtgo/ast:Ellipsisgo/ast:EmptyStmtgo/ast:ExprStmtgo/ast:Fieldgo/ast:FieldListgo/ast:Filego/ast:ForStmtgo/ast:FuncDeclgo/ast:FuncLitgo/ast:FuncTypego/ast:GenDecl
 �