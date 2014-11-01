0���reflect�Opackage reflect
import js "github.com/gopherjs/gopherjs/js"
import runtime "runtime"
import strconv "strconv"
import sync "sync"
import math "math"
func @"".Append(@"".s @"".Value, @"".x ...@"".Value) (? @"".Value)
func @"".AppendSlice(@"".s @"".Value, @"".t @"".Value) (? @"".Value)
const @"".Array @"".Kind = 0x11
const @"".Bool @"".Kind = 0x1
const @"".BothDir @"".ChanDir = 0x3
const @"".Chan @"".Kind = 0x12
type @"".ChanDir int
func (? @"".ChanDir) @"".String() (? string)
func (? *@"".ChanDir) @"".String() (? string)
func @"".ChanOf(@"".dir @"".ChanDir, @"".t @"".Type) (? @"".Type)
const @"".Complex128 @"".Kind = 0x10
const @"".Complex64 @"".Kind = 0xf
func @"".Copy(@"".dst @"".Value, @"".src @"".Value) (? int)
func @"".DeepEqual(@"".a1 interface {  }, @"".a2 interface {  }) (? bool)
const @"".Float32 @"".Kind = 0xd
const @"".Float64 @"".Kind = 0xe
const @"".Func @"".Kind = 0x13
func @"".Indirect(@"".v @"".Value) (? @"".Value)
const @"".Int @"".Kind = 0x2
const @"".Int16 @"".Kind = 0x4
const @"".Int32 @"".Kind = 0x5
const @"".Int64 @"".Kind = 0x6
const @"".Int8 @"".Kind = 0x3
const @"".Interface @"".Kind = 0x14
const @"".Invalid @"".Kind = 0x0
type @"".Kind uint
func (? @"".Kind) @"".String() (? string)
func (? *@"".Kind) @"".String() (? string)
func @"".MakeChan(@"".typ @"".Type, @"".buffer int) (? @"".Value)
func @"".MakeFunc(@"".typ @"".Type, @"".fn func (@"".args []@"".Value) (@"".results []@"".Value)) (? @"".Value)
func @"".MakeMap(@"".typ @"".Type) (? @"".Value)
func @"".MakeSlice(@"".typ @"".Type, @"".len int, @"".cap int) (? @"".Value)
const @"".Map @"".Kind = 0x15
func @"".MapOf(@"".key @"".Type, @"".elem @"".Type) (? @"".Type)
type @"".Method struct { @"".Name string; @"".PkgPath string; @"".Type @"".Type; @"".Func @"".Value; @"".Index int }
func @"".New(@"".typ @"".Type) (? @"".Value)
func @"".NewAt(@"".typ @"".Type, @"".p @"unsafe".Pointer) (? @"".Value)
const @"".Ptr @"".Kind = 0x16
func @"".PtrTo(@"".t @"".Type) (? @"".Type)
const @"".RecvDir @"".ChanDir = 0x1
func @"".Select(@"".cases []@"".SelectCase) (@"".chosen int, @"".recv @"".Value, @"".recvOK bool)
type @"".SelectCase struct { @"".Dir @"".SelectDir; @"".Chan @"".Value; @"".Send @"".Value }
const @"".SelectDefault @"".SelectDir = 0x3
type @"".SelectDir int
const @"".SelectRecv @"".SelectDir = 0x2
const @"".SelectSend @"".SelectDir = 0x1
const @"".SendDir @"".ChanDir = 0x2
const @"".Slice @"".Kind = 0x17
type @"".SliceHeader struct { @"".Data uintptr; @"".Len int; @"".Cap int }
func @"".SliceOf(@"".t @"".Type) (? @"".Type)
const @"".String @"".Kind = 0x18
type @"".StringHeader struct { @"".Data uintptr; @"".Len int }
const @"".Struct @"".Kind = 0x19
type @"".StructField struct { @"".Name string; @"".PkgPath string; @"".Type @"".Type; @"".Tag @"".StructTag; @"".Offset uintptr; @"".Index []int; @"".Anonymous bool }
type @"".StructTag string
func (? @"".StructTag) @"".Get(@"".key string) (? string)
func (? *@"".StructTag) @"".Get(@"".key string) (? string)
type @"".Type interface { @"".Align() (? int); @"".AssignableTo(@"".u @"".Type) (? bool); @"".Bits() (? int); @"".ChanDir() (? @"".ChanDir); @"".ConvertibleTo(@"".u @"".Type) (? bool); @"".Elem() (? @"".Type); @"".Field(@"".i int) (? @"".StructField); @"".FieldAlign() (? int); @"".FieldByIndex(@"".index []int) (? @"".StructField); @"".FieldByName(@"".name string) (? @"".StructField, ? bool); @"".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"".StructField, ? bool); @"".Implements(@"".u @"".Type) (? bool); @"".In(@"".i int) (? @"".Type); @"".IsVariadic() (? bool); @"".Key() (? @"".Type); @"".Kind() (? @"".Kind); @"".Len() (? int); @"".Method(? int) (? @"".Method); @"".MethodByName(? string) (? @"".Method, ? bool); @"".Name() (? string); @"".NumField() (? int); @"".NumIn() (? int); @"".NumMethod() (? int); @"".NumOut() (? int); @"".Out(@"".i int) (? @"".Type); @"".PkgPath() (? string); @"".Size() (? uintptr); @"".String() (? string); @"".common() (? *@"".rtype); @"".uncommon() (? *@"".uncommonType) }
func @"".TypeOf(@"".i interface {  }) (? @"".Type)
const @"".Uint @"".Kind = 0x7
const @"".Uint16 @"".Kind = 0x9
const @"".Uint32 @"".Kind = 0xa
const @"".Uint64 @"".Kind = 0xb
const @"".Uint8 @"".Kind = 0x8
const @"".Uintptr @"".Kind = 0xc
const @"".UnsafePointer @"".Kind = 0x1a
type @"".Value struct { @"".typ *@"".rtype; @"".ptr @"unsafe".Pointer; @"".scalar uintptr; ? @"".flag }
func (? @"".Value) @"".Addr() (? @"".Value)
func (? @"".Value) @"".Bool() (? bool)
func (? @"".Value) @"".Bytes() (? []byte)
func (? @"".Value) @"".Call(@"".in []@"".Value) (? []@"".Value)
func (? @"".Value) @"".CallSlice(@"".in []@"".Value) (? []@"".Value)
func (? @"".Value) @"".CanAddr() (? bool)
func (? @"".Value) @"".CanInterface() (? bool)
func (? @"".Value) @"".CanSet() (? bool)
func (? @"".Value) @"".Cap() (? int)
func (? @"".Value) @"".Close() ()
func (? @"".Value) @"".Complex() (? complex128)
func (? @"".Value) @"".Convert(@"".t @"".Type) (? @"".Value)
func (? @"".Value) @"".Elem() (? @"".Value)
func (? @"".Value) @"".Field(@"".i int) (? @"".Value)
func (? @"".Value) @"".FieldByIndex(@"".index []int) (? @"".Value)
func (? @"".Value) @"".FieldByName(@"".name string) (? @"".Value)
func (? @"".Value) @"".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"".Value)
func (? @"".Value) @"".Float() (? float64)
func (? @"".Value) @"".Index(@"".i int) (? @"".Value)
func (? @"".Value) @"".Int() (? int64)
func (? @"".Value) @"".Interface() (@"".i interface {  })
func (? @"".Value) @"".InterfaceData() (? [2]uintptr)
func (? @"".Value) @"".IsNil() (? bool)
func (? @"".Value) @"".IsValid() (? bool)
func (? @"".Value) @"".Kind() (? @"".Kind)
func (? @"".Value) @"".Len() (? int)
func (? @"".Value) @"".MapIndex(@"".key @"".Value) (? @"".Value)
func (? @"".Value) @"".MapKeys() (? []@"".Value)
func (? @"".Value) @"".Method(@"".i int) (? @"".Value)
func (? @"".Value) @"".MethodByName(@"".name string) (? @"".Value)
func (? @"".Value) @"".NumField() (? int)
func (? @"".Value) @"".NumMethod() (? int)
func (? @"".Value) @"".OverflowComplex(@"".x complex128) (? bool)
func (? @"".Value) @"".OverflowFloat(@"".x float64) (? bool)
func (? @"".Value) @"".OverflowInt(@"".x int64) (? bool)
func (? @"".Value) @"".OverflowUint(@"".x uint64) (? bool)
func (? @"".Value) @"".Pointer() (? uintptr)
func (? @"".Value) @"".Recv() (@"".x @"".Value, @"".ok bool)
func (? @"".Value) @"".Send(@"".x @"".Value) ()
func (? @"".Value) @"".Set(@"".x @"".Value) ()
func (? @"".Value) @"".SetBool(@"".x bool) ()
func (? @"".Value) @"".SetBytes(@"".x []byte) ()
func (? @"".Value) @"".SetCap(@"".n int) ()
func (? @"".Value) @"".SetComplex(@"".x complex128) ()
func (? @"".Value) @"".SetFloat(@"".x float64) ()
func (? @"".Value) @"".SetInt(@"".x int64) ()
func (? @"".Value) @"".SetLen(@"".n int) ()
func (? @"".Value) @"".SetMapIndex(@"".key @"".Value, @"".val @"".Value) ()
func (? @"".Value) @"".SetPointer(@"".x @"unsafe".Pointer) ()
func (? @"".Value) @"".SetString(@"".x string) ()
func (? @"".Value) @"".SetUint(@"".x uint64) ()
func (? @"".Value) @"".Slice(@"".i int, @"".j int) (? @"".Value)
func (? @"".Value) @"".Slice3(@"".i int, @"".j int, @"".k int) (? @"".Value)
func (? @"".Value) @"".String() (? string)
func (? @"".Value) @"".TryRecv() (@"".x @"".Value, @"".ok bool)
func (? @"".Value) @"".TrySend(@"".x @"".Value) (? bool)
func (? @"".Value) @"".Type() (? @"".Type)
func (? @"".Value) @"".Uint() (? uint64)
func (? @"".Value) @"".UnsafeAddr() (? uintptr)
func (? @"".Value) @"".assignTo(@"".context string, @"".dst *@"".rtype, @"".target *interface {  }) (? @"".Value)
func (? @"".Value) @"".call(@"".op string, @"".in []@"".Value) (? []@"".Value)
func (? @"".Value) @"".iword() (? @"".iword)
func (? @"".Value) @"".pointer() (? @"unsafe".Pointer)
func (? @"".Value) @"".recv(@"".nb bool) (@"".val @"".Value, @"".ok bool)
func (? @"".Value) @"".runes() (? []rune)
func (? @"".Value) @"".send(@"".x @"".Value, @"".nb bool) (@"".selected bool)
func (? @"".Value) @"".setRunes(@"".x []rune) ()
func (? *@"".Value) @"".Addr() (? @"".Value)
func (? *@"".Value) @"".Bool() (? bool)
func (? *@"".Value) @"".Bytes() (? []byte)
func (? *@"".Value) @"".Call(@"".in []@"".Value) (? []@"".Value)
func (? *@"".Value) @"".CallSlice(@"".in []@"".Value) (? []@"".Value)
func (? *@"".Value) @"".CanAddr() (? bool)
func (? *@"".Value) @"".CanInterface() (? bool)
func (? *@"".Value) @"".CanSet() (? bool)
func (? *@"".Value) @"".Cap() (? int)
func (? *@"".Value) @"".Close() ()
func (? *@"".Value) @"".Complex() (? complex128)
func (? *@"".Value) @"".Convert(@"".t @"".Type) (? @"".Value)
func (? *@"".Value) @"".Elem() (? @"".Value)
func (? *@"".Value) @"".Field(@"".i int) (? @"".Value)
func (? *@"".Value) @"".FieldByIndex(@"".index []int) (? @"".Value)
func (? *@"".Value) @"".FieldByName(@"".name string) (? @"".Value)
func (? *@"".Value) @"".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"".Value)
func (? *@"".Value) @"".Float() (? float64)
func (? *@"".Value) @"".Index(@"".i int) (? @"".Value)
func (? *@"".Value) @"".Int() (? int64)
func (? *@"".Value) @"".Interface() (@"".i interface {  })
func (? *@"".Value) @"".InterfaceData() (? [2]uintptr)
func (? *@"".Value) @"".IsNil() (? bool)
func (? *@"".Value) @"".IsValid() (? bool)
func (? *@"".Value) @"".Kind() (? @"".Kind)
func (? *@"".Value) @"".Len() (? int)
func (? *@"".Value) @"".MapIndex(@"".key @"".Value) (? @"".Value)
func (? *@"".Value) @"".MapKeys() (? []@"".Value)
func (? *@"".Value) @"".Method(@"".i int) (? @"".Value)
func (? *@"".Value) @"".MethodByName(@"".name string) (? @"".Value)
func (? *@"".Value) @"".NumField() (? int)
func (? *@"".Value) @"".NumMethod() (? int)
func (? *@"".Value) @"".OverflowComplex(@"".x complex128) (? bool)
func (? *@"".Value) @"".OverflowFloat(@"".x float64) (? bool)
func (? *@"".Value) @"".OverflowInt(@"".x int64) (? bool)
func (? *@"".Value) @"".OverflowUint(@"".x uint64) (? bool)
func (? *@"".Value) @"".Pointer() (? uintptr)
func (? *@"".Value) @"".Recv() (@"".x @"".Value, @"".ok bool)
func (? *@"".Value) @"".Send(@"".x @"".Value) ()
func (? *@"".Value) @"".Set(@"".x @"".Value) ()
func (? *@"".Value) @"".SetBool(@"".x bool) ()
func (? *@"".Value) @"".SetBytes(@"".x []byte) ()
func (? *@"".Value) @"".SetCap(@"".n int) ()
func (? *@"".Value) @"".SetComplex(@"".x complex128) ()
func (? *@"".Value) @"".SetFloat(@"".x float64) ()
func (? *@"".Value) @"".SetInt(@"".x int64) ()
func (? *@"".Value) @"".SetLen(@"".n int) ()
func (? *@"".Value) @"".SetMapIndex(@"".key @"".Value, @"".val @"".Value) ()
func (? *@"".Value) @"".SetPointer(@"".x @"unsafe".Pointer) ()
func (? *@"".Value) @"".SetString(@"".x string) ()
func (? *@"".Value) @"".SetUint(@"".x uint64) ()
func (? *@"".Value) @"".Slice(@"".i int, @"".j int) (? @"".Value)
func (? *@"".Value) @"".Slice3(@"".i int, @"".j int, @"".k int) (? @"".Value)
func (? *@"".Value) @"".String() (? string)
func (? *@"".Value) @"".TryRecv() (@"".x @"".Value, @"".ok bool)
func (? *@"".Value) @"".TrySend(@"".x @"".Value) (? bool)
func (? *@"".Value) @"".Type() (? @"".Type)
func (? *@"".Value) @"".Uint() (? uint64)
func (? *@"".Value) @"".UnsafeAddr() (? uintptr)
func (? *@"".Value) @"".assignTo(@"".context string, @"".dst *@"".rtype, @"".target *interface {  }) (? @"".Value)
func (? *@"".Value) @"".call(@"".op string, @"".in []@"".Value) (? []@"".Value)
func (? *@"".Value) @"".iword() (? @"".iword)
func (? *@"".Value) @"".pointer() (? @"unsafe".Pointer)
func (? *@"".Value) @"".recv(@"".nb bool) (@"".val @"".Value, @"".ok bool)
func (? *@"".Value) @"".runes() (? []rune)
func (? *@"".Value) @"".send(@"".x @"".Value, @"".nb bool) (@"".selected bool)
func (? *@"".Value) @"".setRunes(@"".x []rune) ()
type @"".ValueError struct { @"".Method string; @"".Kind @"".Kind }
func (? *@"".ValueError) @"".Error() (? string)
func @"".ValueOf(@"".i interface {  }) (? @"".Value)
func @"".Zero(@"".typ @"".Type) (? @"".Value)
type @"".arrayType struct { ? @"".rtype "reflect:\"array\""; @"".elem *@"".rtype; @"".slice *@"".rtype; @"".len uintptr }
type @"".badGC struct { @"".width uintptr; @"".end uintptr }
type @"".cacheKey struct { @"".kind @"".Kind; @"".t1 *@"".rtype; @"".t2 *@"".rtype; @"".extra uintptr }
type @"".chanGC struct { @"".width uintptr; @"".op uintptr; @"".off uintptr; @"".typ *@"".rtype; @"".end uintptr }
type @"".chanType struct { ? @"".rtype "reflect:\"chan\""; @"".elem *@"".rtype; @"".dir uintptr }
type @"".emptyInterface struct { @"".typ *@"".rtype; @"".word @"".iword }
type @"".fieldScan struct { @"".typ *@"".structType; @"".index []int }
type @"".flag uintptr
func (? @"".flag) @"".kind() (? @"".Kind)
func (? @"".flag) @"".mustBe(@"".expected @"".Kind) ()
func (? @"".flag) @"".mustBeAssignable() ()
func (? @"".flag) @"".mustBeExported() ()
func (? *@"".flag) @"".kind() (? @"".Kind)
func (? *@"".flag) @"".mustBe(@"".expected @"".Kind) ()
func (? *@"".flag) @"".mustBeAssignable() ()
func (? *@"".flag) @"".mustBeExported() ()
type @"".funcType struct { ? @"".rtype "reflect:\"func\""; @"".dotdotdot bool; @"".in []*@"".rtype; @"".out []*@"".rtype }
type @"".imethod struct { @"".name *string; @"".pkgPath *string; @"".typ *@"".rtype }
type @"".interfaceType struct { ? @"".rtype "reflect:\"interface\""; @"".methods []@"".imethod }
func (? *@"".interfaceType) @"".Method(@"".i int) (@"".m @"".Method)
func (? *@"".interfaceType) @"".MethodByName(@"".name string) (@"".m @"".Method, @"".ok bool)
func (? *@"".interfaceType) @"".NumMethod() (? int)
type @"".iword @"unsafe".Pointer
type @"".layoutKey struct { @"".t *@"".rtype; @"".rcvr *@"".rtype }
type @"".layoutType struct { @"".t *@"".rtype; @"".argSize uintptr; @"".retOffset uintptr }
type @"".makeFuncImpl struct { @"".code uintptr; @"".typ *@"".funcType; @"".fn func (? []@"".Value) (? []@"".Value) }
type @"".mapIter struct { @"".t @"".Type; @"".m @"github.com/gopherjs/gopherjs/js".Object; @"".keys @"github.com/gopherjs/gopherjs/js".Object; @"".i int }
type @"".mapType struct { ? @"".rtype "reflect:\"map\""; @"".key *@"".rtype; @"".elem *@"".rtype; @"".bucket *@"".rtype; @"".hmap *@"".rtype }
type @"".method struct { @"".name *string; @"".pkgPath *string; @"".mtyp *@"".rtype; @"".typ *@"".rtype; @"".ifn @"unsafe".Pointer; @"".tfn @"unsafe".Pointer }
type @"".methodValue struct { @"".fn uintptr; @"".method int; @"".rcvr @"".Value }
type @"".nonEmptyInterface struct { @"".itab *struct { @"".ityp *@"".rtype; @"".typ *@"".rtype; @"".link @"unsafe".Pointer; @"".bad int32; @"".unused int32; @"".fun [100000]@"unsafe".Pointer }; @"".word @"".iword }
type @"".ptrDataGC struct { @"".width uintptr; @"".op uintptr; @"".off uintptr; @"".end uintptr }
type @"".ptrGC struct { @"".width uintptr; @"".op uintptr; @"".off uintptr; @"".elemgc @"unsafe".Pointer; @"".end uintptr }
type @"".ptrType struct { ? @"".rtype "reflect:\"ptr\""; @"".elem *@"".rtype }
type @"".rtype struct { @"".size uintptr; @"".hash uint32; _ uint8; @"".align uint8; @"".fieldAlign uint8; @"".kind uint8; @"".alg *uintptr; @"".gc @"unsafe".Pointer; @"".string *string; ? *@"".uncommonType; @"".ptrToThis *@"".rtype; @"".zero @"unsafe".Pointer }
func (? *@"".rtype) @"".Align() (? int)
func (? *@"".rtype) @"".AssignableTo(@"".u @"".Type) (? bool)
func (? *@"".rtype) @"".Bits() (? int)
func (? *@"".rtype) @"".ChanDir() (? @"".ChanDir)
func (? *@"".rtype) @"".ConvertibleTo(@"".u @"".Type) (? bool)
func (? *@"".rtype) @"".Elem() (? @"".Type)
func (? *@"".rtype) @"".Field(@"".i int) (? @"".StructField)
func (? *@"".rtype) @"".FieldAlign() (? int)
func (? *@"".rtype) @"".FieldByIndex(@"".index []int) (? @"".StructField)
func (? *@"".rtype) @"".FieldByName(@"".name string) (? @"".StructField, ? bool)
func (? *@"".rtype) @"".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"".StructField, ? bool)
func (? *@"".rtype) @"".Implements(@"".u @"".Type) (? bool)
func (? *@"".rtype) @"".In(@"".i int) (? @"".Type)
func (? *@"".rtype) @"".IsVariadic() (? bool)
func (? *@"".rtype) @"".Key() (? @"".Type)
func (? *@"".rtype) @"".Kind() (? @"".Kind)
func (? *@"".rtype) @"".Len() (? int)
func (? *@"".rtype) @"".Method(@"".i int) (@"".m @"".Method)
func (? *@"".rtype) @"".MethodByName(@"".name string) (@"".m @"".Method, @"".ok bool)
func (? *@"".rtype) @"".Name() (? string)
func (? *@"".rtype) @"".NumField() (? int)
func (? *@"".rtype) @"".NumIn() (? int)
func (? *@"".rtype) @"".NumMethod() (? int)
func (? *@"".rtype) @"".NumOut() (? int)
func (? *@"".rtype) @"".Out(@"".i int) (? @"".Type)
func (? *@"".rtype) @"".PkgPath() (? string)
func (? *@"".rtype) @"".Size() (? uintptr)
func (? *@"".rtype) @"".String() (? string)
func (? *@"".rtype) @"".common() (? *@"".rtype)
func (? *@"".rtype) @"".pointers() (? bool)
func (? *@"".rtype) @"".ptrTo() (? *@"".rtype)
type @"".runtimeSelect struct { @"".dir uintptr; @"".typ *@"".rtype; @"".ch @"unsafe".Pointer; @"".val @"unsafe".Pointer }
type @"".sliceEmptyGC struct { @"".width uintptr; @"".op uintptr; @"".off uintptr; @"".end uintptr }
type @"".sliceGC struct { @"".width uintptr; @"".op uintptr; @"".off uintptr; @"".elemgc @"unsafe".Pointer; @"".end uintptr }
type @"".sliceHeader struct { @"".Data @"unsafe".Pointer; @"".Len int; @"".Cap int }
type @"".sliceType struct { ? @"".rtype "reflect:\"slice\""; @"".elem *@"".rtype }
type @"".stringHeader struct { @"".Data @"unsafe".Pointer; @"".Len int }
type @"".structField struct { @"".name *string; @"".pkgPath *string; @"".typ *@"".rtype; @"".tag *string; @"".offset uintptr }
type @"".structType struct { ? @"".rtype "reflect:\"struct\""; @"".fields []@"".structField }
func (? *@"".structType) @"".Field(@"".i int) (@"".f @"".StructField)
func (? *@"".structType) @"".FieldByIndex(@"".index []int) (@"".f @"".StructField)
func (? *@"".structType) @"".FieldByName(@"".name string) (@"".f @"".StructField, @"".present bool)
func (? *@"".structType) @"".FieldByNameFunc(@"".match func (? string) (? bool)) (@"".result @"".StructField, @"".ok bool)
type @"".uncommonType struct { @"".name *string; @"".pkgPath *string; @"".methods []@"".method }
func (? *@"".uncommonType) @"".Method(@"".i int) (@"".m @"".Method)
func (? *@"".uncommonType) @"".MethodByName(@"".name string) (@"".m @"".Method, @"".ok bool)
func (? *@"".uncommonType) @"".Name() (? string)
func (? *@"".uncommonType) @"".NumMethod() (? int)
func (? *@"".uncommonType) @"".PkgPath() (? string)
func (? *@"".uncommonType) @"".uncommon() (? *@"".uncommonType)
type @"".visit struct { @"".a1 uintptr; @"".a2 uintptr; @"".typ @"".Type }
type @"github.com/gopherjs/gopherjs/js".Object interface { @"github.com/gopherjs/gopherjs/js".Bool() (? bool); @"github.com/gopherjs/gopherjs/js".Call(@"github.com/gopherjs/gopherjs/js".name string, @"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Delete(@"github.com/gopherjs/gopherjs/js".key string) (); @"github.com/gopherjs/gopherjs/js".Float() (? float64); @"github.com/gopherjs/gopherjs/js".Get(@"github.com/gopherjs/gopherjs/js".key string) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Index(@"github.com/gopherjs/gopherjs/js".i int) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Int() (? int); @"github.com/gopherjs/gopherjs/js".Int64() (? int64); @"github.com/gopherjs/gopherjs/js".Interface() (? interface {  }); @"github.com/gopherjs/gopherjs/js".Invoke(@"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".IsNull() (? bool); @"github.com/gopherjs/gopherjs/js".IsUndefined() (? bool); @"github.com/gopherjs/gopherjs/js".Length() (? int); @"github.com/gopherjs/gopherjs/js".New(@"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Set(@"github.com/gopherjs/gopherjs/js".key string, @"github.com/gopherjs/gopherjs/js".value interface {  }) (); @"github.com/gopherjs/gopherjs/js".SetIndex(@"github.com/gopherjs/gopherjs/js".i int, @"github.com/gopherjs/gopherjs/js".value interface {  }) (); @"github.com/gopherjs/gopherjs/js".Str() (? string); @"github.com/gopherjs/gopherjs/js".Uint64() (? uint64); @"github.com/gopherjs/gopherjs/js".Unsafe() (? uintptr) }
$$
0bgithub.com/gopherjs/gopherjs/jsruntimematherrorsunicode/utf8strconvsync/atomicsync0X0$github.com/gopherjs/gopherjs/jsA0runtimeB0strconvC0	syncD0	mathE0���0�� 0AF�AF=$pkg.mapIter=$newType(0,"Struct","reflect.mapIter","mapIter","reflect",function(t_,m_,keys_,i_){this.$val=this;this.t=t_!==undefined?t_:$ifaceNil;this.m=m_!==undefined?m_:$ifaceNil;this.keys=keys_!==undefined?keys_:$ifaceNil;this.i=i_!==undefined?i_:0;});��AF.init([["t","t","reflect",AZ,""],["m","m","reflect",A.Object,""],["keys","keys","reflect",A.Object,""],["i","i","reflect",$Int,""]]);0	mapIter06&github.com/gopherjs/gopherjs/js:Objectreflect:Type 0�h 0AT��AT=$pkg.visit=$newType(0,"Struct","reflect.visit","visit","reflect",function(a1_,a2_,typ_){this.$val=this;this.a1=a1_!==undefined?a1_:0;this.a2=a2_!==undefined?a2_:0;this.typ=typ_!==undefined?typ_:$ifaceNil;});mAT.init([["a1","a1","reflect",$Uintptr,""],["a2","a2","reflect",$Uintptr,""],["typ","typ","reflect",AZ,""]]);0visit0reflect:Type 0�� 0AV�AV=$pkg.makeFuncImpl=$newType(0,"Struct","reflect.makeFuncImpl","makeFuncImpl","reflect",function(code_,typ_,fn_){this.$val=this;this.code=code_!==undefined?code_:0;this.typ=typ_!==undefined?typ_:($ptrType(BH)).nil;this.fn=fn_!==undefined?fn_:$throwNilPointerError;});��AV.init([["code","code","reflect",$Uintptr,""],["typ","typ","reflect",($ptrType(BH)),""],["fn","fn","reflect",($funcType([($sliceType(CX))],[($sliceType(CX))],false)),""]]);0makeFuncImpl0!
BB.methods=[["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),9]];($ptrType(BB)).methods=[["Align","Align","",$funcType([],[$Int],false),-1],["AssignableTo","AssignableTo","",$funcType([AZ],[$Bool],false),-1],["Bits","Bits","",$funcType([],[$Int],false),-1],["ChanDir","ChanDir","",$funcType([],[BE],false),-1],["ConvertibleTo","ConvertibleTo","",$funcType([AZ],[$Bool],false),-1],["Elem","Elem","",$funcType([],[AZ],false),-1],["Field","Field","",$funcType([$Int],[BR],false),-1],["FieldAlign","FieldAlign","",$funcType([],[$Int],false),-1],["FieldByIndex","FieldByIndex","",$funcType([($sliceType($Int))],[BR],false),-1],["FieldByName","FieldByName","",$funcType([$String],[BR,$Bool],false),-1],["FieldByNameFunc","FieldByNameFunc","",$funcType([($funcType([$String],[$Bool],false))],[BR,$Bool],false),-1],["Implements","Implements","",$funcType([AZ],[$Bool],false),-1],["In","In","",$funcType([$Int],[AZ],false),-1],["IsVariadic","IsVariadic","",$funcType([],[$Bool],false),-1],["Key","Key","",$funcType([],[AZ],false),-1],["Kind","Kind","",$funcType([],[BA],false),-1],["Len","Len","",$funcType([],[$Int],false),-1],["Method","Method","",$funcType([$Int],[BP],false),-1],["MethodByName","MethodByName","",$funcType([$String],[BP,$Bool],false),-1],["Name","Name","",$funcType([],[$String],false),-1],["NumField","NumField","",$funcType([],[$Int],false),-1],["NumIn","NumIn","",$funcType([],[$Int],false),-1],["NumMethod","NumMethod","",$funcType([],[$Int],false),-1],["NumOut","NumOut","",$funcType([],[$Int],false),-1],["Out","Out","",$funcType([$Int],[AZ],false),-1],["PkgPath","PkgPath","",$funcType([],[$String],false),-1],["Size","Size","",$funcType([],[$Uintptr],false),-1],["String","String","",$funcType([],[$String],false),-1],["common","common","reflect",$funcType([],[($ptrType(BB))],false),-1],["pointers","pointers","reflect",$funcType([],[$Bool],false),-1],["ptrTo","ptrTo","reflect",$funcType([],[($ptrType(BB))],false),-1],["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),9]];BB.init([["size","size","reflect",$Uintptr,""],["hash","hash","reflect",$Uint32,""],["_$2","_","reflect",$Uint8,""],["align","align","reflect",$Uint8,""],["fieldAlign","fieldAlign","reflect",$Uint8,""],["kind","kind","reflect",$Uint8,""],["alg","alg","reflect",($ptrType($Uintptr)),""],["gc","gc","reflect",$UnsafePointer,""],["string","string","reflect",($ptrType($String)),""],["uncommonType","","reflect",($ptrType(BD)),""],["ptrToThis","ptrToThis","reflect",($ptrType(BB)),""],["zero","zero","reflect",$UnsafePointer,""]]);0rtype0hreflect:ChanDirreflect:Kindreflect:Methodreflect:StructFieldreflect:Typereflect:uncommonType 0�� 0BC��BC=$pkg.method=$newType(0,"Struct","reflect.method","method","reflect",function(name_,pkgPath_,mtyp_,typ_,ifn_,tfn_){this.$val=this;this.name=name_!==undefined?name_:($ptrType($String)).nil;this.pkgPath=pkgPath_!==undefined?pkgPath_:($ptrType($String)).nil;this.mtyp=mtyp_!==undefined?mtyp_:($ptrType(BB)).nil;this.typ=typ_!==undefined?typ_:($ptrType(BB)).nil;this.ifn=ifn_!==undefined?ifn_:0;this.tfn=tfn_!==undefined?tfn_:0;});�BC.init([["name","name","reflect",($ptrType($String)),""],["pkgPath","pkgPath","reflect",($ptrType($String)),""],["mtyp","mtyp","reflect",($ptrType(BB)),""],["typ","typ","reflect",($ptrType(BB)),""],["ifn","ifn","reflect",$UnsafePointer,""],["tfn","tfn","reflect",$UnsafePointer,""]]);0method0
j 0BF�EBF=$pkg.arrayType=$newType(0,"Struct","reflect.arrayType","arrayType","reflect",function(rtype_,elem_,slice_,len_){this.$val=this;this.rtype=rtype_!==undefined?rtype_:new BB.Ptr();this.elem=elem_!==undefined?elem_:($ptrType(BB)).nil;this.slice=slice_!==undefined?slice_:($ptrType(BB)).nil;this.len=len_!==undefined?len_:0;});��BF.methods=[["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),0]];($ptrType(BF)).methods=[["Align","Align","",$funcType([],[$Int],false),0],["AssignableTo","AssignableTo","",$funcType([AZ],[$Bool],false),0],["Bits","Bits","",$funcType([],[$Int],false),0],["ChanDir","ChanDir","",$funcType([],[BE],false),0],["ConvertibleTo","ConvertibleTo","",$funcType([AZ],[$Bool],false),0],["Elem","Elem","",$funcType([],[AZ],false),0],["Field","Field","",$funcType([$Int],[BR],false),0],["FieldAlign","FieldAlign","",$funcType([],[$Int],false),0],["FieldByIndex","FieldByIndex","",$funcType([($sliceType($Int))],[BR],false),0],["FieldByName","FieldByName","",$funcType([$String],[BR,$Bool],false),0],["FieldByNameFunc","FieldByNameFunc","",$funcType([($funcType([$String],[$Bool],false))],[BR,$Bool],false),0],["Implements","Implements","",$funcType([AZ],[$Bool],false),0],["In","In","",$funcType([$Int],[AZ],false),0],["IsVariadic","IsVariadic","",$funcType([],[$Bool],false),0],["Key","Key","",$funcType([],[AZ],false),0],["Kind","Kind","",$funcType([],[BA],false),0],["Len","Len","",$funcType([],[$Int],false),0],["Method","Method","",$funcType([$Int],[BP],false),0],["MethodByName","MethodByName","",$funcType([$String],[BP,$Bool],false),0],["Name","Name","",$funcType([],[$String],false),0],["NumField","NumField","",$funcType([],[$Int],false),0],["NumIn","NumIn","",$funcType([],[$Int],false),0],["NumMethod","NumMethod","",$funcType([],[$Int],false),0],["NumOut","NumOut","",$funcType([],[$Int],false),0],["Out","Out","",$funcType([$Int],[AZ],false),0],["PkgPath","PkgPath","",$funcType([],[$String],false),0],["Size","Size","",$funcType([],[$Uintptr],false),0],["String","String","",$funcType([],[$String],false),0],["common","common","reflect",$funcType([],[($ptrType(BB))],false),0],["pointers","pointers","reflect",$funcType([],[$Bool],false),0],["ptrTo","ptrTo","reflect",$funcType([],[($ptrType(BB))],false),0],["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),0]];BF.init([["rtype","","reflect",BB,"reflect:\"array\""],["elem","elem","reflect",($ptrType(BB)),""],["slice","slice","reflect",($ptrType(BB)),""],["len","len","reflect",$Uintptr,""]]);0	arrayType0wreflect:ChanDirreflect:Kindreflect:Methodreflect:StructFieldreflect:Type
chanType0wreflect:ChanDirreflect:Kindreflect:Methodreflect:StructFieldreflect:Type
� 0BH�rBH=$pkg.funcType=$newType(0,"Struct","reflect.funcType","funcType","reflect",function(rtype_,dotdotdot_,in$2_,out_){this.$val=this;this.rtype=rtype_!==undefined?rtype_:new BB.Ptr();this.dotdotdot=dotdotdot_!==undefined?dotdotdot_:false;this.in$2=in$2_!==undefined?in$2_:($sliceType(($ptrType(BB)))).nil;this.out=out_!==undefined?out_:($sliceType(($ptrType(BB)))).nil;});��BH.methods=[["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),0]];($ptrType(BH)).methods=[["Align","Align","",$funcType([],[$Int],false),0],["AssignableTo","AssignableTo","",$funcType([AZ],[$Bool],false),0],["Bits","Bits","",$funcType([],[$Int],false),0],["ChanDir","ChanDir","",$funcType([],[BE],false),0],["ConvertibleTo","ConvertibleTo","",$funcType([AZ],[$Bool],false),0],["Elem","Elem","",$funcType([],[AZ],false),0],["Field","Field","",$funcType([$Int],[BR],false),0],["FieldAlign","FieldAlign","",$funcType([],[$Int],false),0],["FieldByIndex","FieldByIndex","",$funcType([($sliceType($Int))],[BR],false),0],["FieldByName","FieldByName","",$funcType([$String],[BR,$Bool],false),0],["FieldByNameFunc","FieldByNameFunc","",$funcType([($funcType([$String],[$Bool],false))],[BR,$Bool],false),0],["Implements","Implements","",$funcType([AZ],[$Bool],false),0],["In","In","",$funcType([$Int],[AZ],false),0],["IsVariadic","IsVariadic","",$funcType([],[$Bool],false),0],["Key","Key","",$funcType([],[AZ],false),0],["Kind","Kind","",$funcType([],[BA],false),0],["Len","Len","",$funcType([],[$Int],false),0],["Method","Method","",$funcType([$Int],[BP],false),0],["MethodByName","MethodByName","",$funcType([$String],[BP,$Bool],false),0],["Name","Name","",$funcType([],[$String],false),0],["NumField","NumField","",$funcType([],[$Int],false),0],["NumIn","NumIn","",$funcType([],[$Int],false),0],["NumMethod","NumMethod","",$funcType([],[$Int],false),0],["NumOut","NumOut","",$funcType([],[$Int],false),0],["Out","Out","",$funcType([$Int],[AZ],false),0],["PkgPath","PkgPath","",$funcType([],[$String],false),0],["Size","Size","",$funcType([],[$Uintptr],false),0],["String","String","",$funcType([],[$String],false),0],["common","common","reflect",$funcType([],[($ptrType(BB))],false),0],["pointers","pointers","reflect",$funcType([],[$Bool],false),0],["ptrTo","ptrTo","reflect",$funcType([],[($ptrType(BB))],false),0],["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),0]];BH.init([["rtype","","reflect",BB,"reflect:\"func\""],["dotdotdot","dotdotdot","reflect",$Bool,""],["in$2","in","reflect",($sliceType(($ptrType(BB)))),""],["out","out","reflect",($sliceType(($ptrType(BB)))),""]]);0
funcType0wreflect:ChanDirreflect:Kindreflect:Methodreflect:StructFieldreflect:Type
� 0BK��BK=$pkg.mapType=$newType(0,"Struct","reflect.mapType","mapType","reflect",function(rtype_,key_,elem_,bucket_,hmap_){this.$val=this;this.rtype=rtype_!==undefined?rtype_:new BB.Ptr();this.key=key_!==undefined?key_:($ptrType(BB)).nil;this.elem=elem_!==undefined?elem_:($ptrType(BB)).nil;this.bucket=bucket_!==undefined?bucket_:($ptrType(BB)).nil;this.hmap=hmap_!==undefined?hmap_:($ptrType(BB)).nil;});��BK.methods=[["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),0]];($ptrType(BK)).methods=[["Align","Align","",$funcType([],[$Int],false),0],["AssignableTo","AssignableTo","",$funcType([AZ],[$Bool],false),0],["Bits","Bits","",$funcType([],[$Int],false),0],["ChanDir","ChanDir","",$funcType([],[BE],false),0],["ConvertibleTo","ConvertibleTo","",$funcType([AZ],[$Bool],false),0],["Elem","Elem","",$funcType([],[AZ],false),0],["Field","Field","",$funcType([$Int],[BR],false),0],["FieldAlign","FieldAlign","",$funcType([],[$Int],false),0],["FieldByIndex","FieldByIndex","",$funcType([($sliceType($Int))],[BR],false),0],["FieldByName","FieldByName","",$funcType([$String],[BR,$Bool],false),0],["FieldByNameFunc","FieldByNameFunc","",$funcType([($funcType([$String],[$Bool],false))],[BR,$Bool],false),0],["Implements","Implements","",$funcType([AZ],[$Bool],false),0],["In","In","",$funcType([$Int],[AZ],false),0],["IsVariadic","IsVariadic","",$funcType([],[$Bool],false),0],["Key","Key","",$funcType([],[AZ],false),0],["Kind","Kind","",$funcType([],[BA],false),0],["Len","Len","",$funcType([],[$Int],false),0],["Method","Method","",$funcType([$Int],[BP],false),0],["MethodByName","MethodByName","",$funcType([$String],[BP,$Bool],false),0],["Name","Name","",$funcType([],[$String],false),0],["NumField","NumField","",$funcType([],[$Int],false),0],["NumIn","NumIn","",$funcType([],[$Int],false),0],["NumMethod","NumMethod","",$funcType([],[$Int],false),0],["NumOut","NumOut","",$funcType([],[$Int],false),0],["Out","Out","",$funcType([$Int],[AZ],false),0],["PkgPath","PkgPath","",$funcType([],[$String],false),0],["Size","Size","",$funcType([],[$Uintptr],false),0],["String","String","",$funcType([],[$String],false),0],["common","common","reflect",$funcType([],[($ptrType(BB))],false),0],["pointers","pointers","reflect",$funcType([],[$Bool],false),0],["ptrTo","ptrTo","reflect",$funcType([],[($ptrType(BB))],false),0],["uncommon","uncommon","reflect",$funcType([],[($ptrType(BD))],false),0]];BK.init([["rtype","","reflect",BB,"reflect:\"map\""],["key","key","reflect",($ptrType(BB)),""],["elem","elem","reflect",($ptrType(BB)),""],["bucket","bucket","reflect",($ptrType(BB)),""],["hmap","hmap","reflect",($ptrType(BB)),""]]);0	mapType0wreflect:ChanDirreflect:Kindreflect:Methodreflect:StructFieldreflect:Type
structType0��reflect:ChanDirreflect:Kindreflect:Methodreflect:StructFieldreflect:Type
cacheKey0reflect:Kind
layoutType0
ValueError0reflect:Kind 0k 0DCQDC=$pkg.iword=$newType(4,"UnsafePointer","reflect.iword","iword","reflect",null); 0iword0  0�s 0DE��DE=$pkg.emptyInterface=$newType(0,"Struct","reflect.emptyInterface","emptyInterface","reflect",function(typ_,word_){this.$val=this;this.typ=typ_!==undefined?typ_:($ptrType(BB)).nil;this.word=word_!==undefined?word_:0;});UDE.init([["typ","typ","reflect",($ptrType(BB)),""],["word","word","reflect",DC,""]]);0emptyInterface0
SelectCase0"reflect:SelectDir
cG=function(){var ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au;   �ae=(function(ae){    });   �ae((af=new BB.Ptr(0,0,0,0,0,0,($ptrType($Uintptr)).nil,0,($ptrType($String)).nil,($ptrType(BD)).nil,($ptrType(BB)).nil,0),new af.constructor.Struct(af)));   �ae((ag=new BD.Ptr(($ptrType($String)).nil,($ptrType($String)).nil,($sliceType(BC)).nil),new ag.constructor.Struct(ag)));   �ae((ah=new BC.Ptr(($ptrType($String)).nil,($ptrType($String)).nil,($ptrType(BB)).nil,($ptrType(BB)).nil,0,0),new ah.constructor.Struct(ah)));  ae((ai=new BF.Ptr(new BB.Ptr(),($ptrType(BB)).nil,($ptrType(BB)).nil,0),new ai.constructor.Struct(ai)));  ae((aj=new BG.Ptr(new BB.Ptr(),($ptrType(BB)).nil,0),new aj.constructor.Struct(aj)));  &ae((ak=new BH.Ptr(new BB.Ptr(),false,($sliceType(($ptrType(BB)))).nil,($sliceType(($ptrType(BB)))).nil),new ak.constructor.Struct(ak)));  8ae((al=new BJ.Ptr(new BB.Ptr(),($sliceType(BI)).nil),new al.constructor.Struct(al)));  Oae((am=new BK.Ptr(new BB.Ptr(),($ptrType(BB)).nil,($ptrType(BB)).nil,($ptrType(BB)).nil,($ptrType(BB)).nil),new am.constructor.Struct(am)));  `ae((an=new BL.Ptr(new BB.Ptr(),($ptrType(BB)).nil),new an.constructor.Struct(an)));  qae((ao=new BM.Ptr(new BB.Ptr(),($ptrType(BB)).nil),new ao.constructor.Struct(ao)));  �ae((ap=new BO.Ptr(new BB.Ptr(),($sliceType(BN)).nil),new ap.constructor.Struct(ap)));  �ae((aq=new BI.Ptr(($ptrType($String)).nil,($ptrType($String)).nil,($ptrType(BB)).nil),new aq.constructor.Struct(aq)));  �ae((ar=new BN.Ptr(($ptrType($String)).nil,($ptrType($String)).nil,($ptrType(BB)).nil,($ptrType($String)).nil,0),new ar.constructor.Struct(ar)));  �as=$pkg;  �as.kinds=$externalize((at=new $Map(),au="Bool",at[au]={k:au,v:1},au="Int",at[au]={k:au,v:2},au="Int8",at[au]={k:au,v:3},au="Int16",at[au]={k:au,v:4},au="Int32",at[au]={k:au,v:5},au="Int64",at[au]={k:au,v:6},au="Uint",at[au]={k:au,v:7},au="Uint8",at[au]={k:au,v:8},au="Uint16",at[au]={k:au,v:9},au="Uint32",at[au]={k:au,v:10},au="Uint64",at[au]={k:au,v:11},au="Uintptr",at[au]={k:au,v:12},au="Float32",at[au]={k:au,v:13},au="Float64",at[au]={k:au,v:14},au="Complex64",at[au]={k:au,v:15},au="Complex128",at[au]={k:au,v:16},au="Array",at[au]={k:au,v:17},au="Chan",at[au]={k:au,v:18},au="Func",at[au]={k:au,v:19},au="Interface",at[au]={k:au,v:20},au="Map",at[au]={k:au,v:21},au="Ptr",at[au]={k:au,v:22},au="Slice",at[au]={k:au,v:23},au="String",at[au]={k:au,v:24},au="Struct",at[au]={k:au,v:25},au="UnsafePointer",at[au]={k:au,v:26},at),($mapType($String,BA)));  �as.RecvDir=1;  �as.SendDir=2;  �as.BothDir=3;  $reflect=as;  4F=true;  HDQ=$assertType(O(new $Uint8(0)),($ptrType(BB)));    };	    G();0 0�8reflect:Kindreflect:TypeOfreflect:arrayTypereflect:chanTypereflect:funcTypereflect:imethodreflect:initializedreflect:interfaceTypereflect:mapTypereflect:methodreflect:ptrType
copyStruct0reflect:jsType 0�reflect.makeValue0L��L=function(ae,af,ag){var ah;  Hah=ae.common();  Z    if((ae.Kind()===17)||(ae.Kind()===25)||ah.pointers()){  �return new CX.Ptr(ah,af,0,(ag|((ae.Kind()>>>0)<<4>>>0))>>>0);    }  �    if(ae.Size()>4||(ae.Kind()===24)){  	"return new CX.Ptr(ah,$newDataPointer(af,H(ah.ptrTo())),0,(((ag|((ae.Kind()>>>0)<<4>>>0))>>>0)|2)>>>0);    }  	�return new CX.Ptr(ah,0,af,(ag|((ae.Kind()>>>0)<<4>>>0))>>>0);    }; 0	makeValue0P
O    if(!((ae.Kind()===23))){  
j$panic(new $String("reflect.MakeSlice of non-slice type"));    }  
�    if(af<0){  
�$panic(new $String("reflect.MakeSlice: negative len"));    }  
�    if(ag<0){  
�$panic(new $String("reflect.MakeSlice: negative cap"));    }      if(af>ag){  $$panic(new $String("reflect.MakeSlice: len > cap"));    }  Oreturn L(ae,H(ae).make(af,ag,$externalize((function(){  �return H(ae.Elem()).zero();    }),($funcType([],[A.Object],false)))),0);    }; 0	MakeSlice0K&github.com/gopherjs/gopherjs/js:Objectreflect:jsTypereflect:makeValue 0��reflect.jsObject0NmN=function(){  �return I($packages[$externalize("github.com/gopherjs/gopherjs/js",$String)].Object);    }; 0
jsObject0reflect:reflectType 0��reflect.TypeOf0O�jO=$pkg.TypeOf=function(ae){var af;  p    if(!F){  �return new BB.Ptr(0,0,0,0,0,0,($ptrType($Uintptr)).nil,0,($ptrType($String)).nil,($ptrType(BD)).nil,($ptrType(BB)).nil,0);    }  �    if($interfaceIsEqual(ae,$ifaceNil)){  �return $ifaceNil;    }  �af=ae.constructor;  
unsafe_New0reflect:jsType
MakeFunc0A
loadScalar0  0��reflect.makechan0AAGAA=function(ae,af){var ag=0;  \    ag=new(H(ae))();return ag;    }; 0
makechan0reflect:jsType 0nreflect.makemap0ABCAB=function(ae){var af=0;  �    af=new($Map)();return af;    }; 0	makemap0  0�ereflect.mapaccess0AC�AC=function(ae,af,ag){var ah,ai;  ?ah=ag.$get();  i    if(!(ah.$key===undefined)){  �ah=ah.$key();    }  �ai=af[$externalize($internalize(ah,$String),$String)];  �    if(ai===undefined){  �return 0;    }  �return $newDataPointer(ai.v,H(BY(ae.Elem())));    }; 0	mapaccess0
mapiterkey0
ifaceE2I0  0[reflect.methodName0AP*AP=function(){  /�return"?FIXME?";    }; 0
methodName0  0��reflect.makeMethodValue0AQ�AQ=function(ae,af){var ag,ah,ai,aj;  0    if(((af.flag&8)>>>0)===0){  0*$panic(new $String("reflect: internal error: invalid use of makePartialFunc"));    }  0pag=AM(ae,$clone(af,CX),(af.flag>>0)>>9>>0);ah=ag[2];  0�ai=af.iword();  0�    if(J(af.typ)){  0�ai=new(H(af.typ))(ai);    }  1aj=(function(){  1-return ah.apply(ai,$externalize(new($sliceType(A.Object))($global.Array.prototype.slice.call(arguments,[])),($sliceType(A.Object))));    });  1preturn new CX.Ptr(af.Type().common(),aj,0,(((af.flag&1)>>>0)|304)>>>0);    }; 0makeMethodValue0��&github.com/gopherjs/gopherjs/js:Object
ay=0;while(ay<av){  >"ba=new CX.Ptr();$copy(ba,(az=am+ay>>0,((az<0||az>=af.$length)?$throwRuntimeError("index out of range"):af.$array[af.$offset+az])),CX);  >2  >5bb=ba.Type();    if(!bb.AssignableTo(ax)){  >b$panic(new $String("reflect: cannot use "+bb.String()+" as type "+ax.String()+" in "+ae));    }  >�aw.Index(ay).Set($clone(ba,CX));      >  >ay=ay+(1)>>0;}  >�bc=af;  >�af=($sliceType(CX)).make((am+1>>0));  ?$copySlice($subslice(af,0,am),bc);  ?$copy(((am<0||am>=af.$length)?$throwRuntimeError("index out of range"):af.$array[af.$offset+am]),aw,CX);    }  ?1bd=af.$length;  ?A    if(!((bd===ah.NumIn()))){  ?Y$panic(new $String("reflect.Value.Call: wrong argument count"));    }  ?�be=ah.NumOut();  ?�bf=new($global.Array)(ah.NumIn());  ?�bg=af;bh=0;while(bh<bg.$length){bi=bh;bj=new CX.Ptr();$copy(bj,((bh<0||bh>=bg.$length)?$throwRuntimeError("index out of range"):bg.$array[bg.$offset+bh]),CX);  ?�bf[bi]=bj.assignTo("reflect.Value.Call",ah.In(bi).common(),($ptrType($emptyInterface)).nil).iword();    bh++;}  @cbk=ai.apply(aj,bf);  @�bl=be;  @�if(bl===0){  @�return($sliceType(CX)).nil;      @�}else if(bl===1){  @�return new($sliceType(CX))([$clone(L(ah.Out(0),bk,0),CX)]);    }else{  Abm=($sliceType(CX)).make(be);  A-bn=bm;bo=0;while(bo<bn.$length){bp=bo;  AE$copy(((bp<0||bp>=bm.$length)?$throwRuntimeError("index out of range"):bm.$array[bm.$offset+bp]),L(ah.Out(bp),bk[bp],0),CX);    bo++;}  A}return bm;    }    };CX.prototype.call=function(ae,af){return this.$val.call(ae,af);}; 0
ah=new(H(af.typ))(ag.$array);  W:ah.$offset=ag.$offset;  Weah.$length=ae;  W�ah.$capacity=ag.$capacity;  W�af.ptr.$set(ah);    };CX.prototype.SetLen=function(ae){return this.$val.SetLen(ae);}; 0Value0W
�AU=function(ae,af,ag,ah){var ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba;  n    if(!ae.IsValid()||!af.IsValid()){  n:return ae.IsValid()===af.IsValid();    }  nb    if(!($interfaceIsEqual(ae.Type(),af.Type()))){  n�return false;    }  n�ai=(function(ai){var aj;  n�aj=ai;  n�if(aj===17||aj===21||aj===23||aj===25){  oreturn true;    }  o1return false;    });  oC    if(ae.CanAddr()&&af.CanAddr()&&ai(ae.Kind())){  ozaj=ae.UnsafeAddr();  o�ak=af.UnsafeAddr();  o�    if(aj>ak){  pal=ak;am=aj;aj=al;ak=am;    }  p]    if(aj===ak){  ptreturn true;    }  p�an=ae.Type();  p�ao=new AT.Ptr(aj,ak,an);  p�    if((ap=ag[(new AT(ao)).$key()],ap!==undefined?ap.v:false)){  p�return true;    }  qaq=$clone(ao,AT);(ag||$throwRuntimeError("assignment to entry in nil map"))[(new AT(aq)).$key()]={k:aq,v:true};    }  q)ar=ae.Kind();  q=if(ar===17){  qK  qOas=0;while(as<ae.Len()){  qn    if(!AU($clone(ae.Index(as),CX),$clone(af.Index(as),CX),ag,ah+1>>0)){  q�return false;    }      qe  qeas=as+(1)>>0;}  q�return true;      q�}else if(ar===23){  q�    if(!(ae.IsNil()===af.IsNil())){  rreturn false;    }  r    if(!((ae.Len()===af.Len()))){  r7return false;    }  rJ    if(ae.Pointer()===af.Pointer()){  roreturn true;    }  r�  r�at=0;while(at<ae.Len()){  r�    if(!AU($clone(ae.Index(at),CX),$clone(af.Index(at),CX),ag,ah+1>>0)){  r�return false;    }      r�  r�at=at+(1)>>0;}  sreturn true;      s}else if(ar===20){  s     if(ae.IsNil()||af.IsNil()){  sAreturn ae.IsNil()===af.IsNil();    }  sgreturn AU($clone(ae.Elem(),CX),$clone(af.Elem(),CX),ag,ah+1>>0);      s�}else if(ar===22){  s�return AU($clone(ae.Elem(),CX),$clone(af.Elem(),CX),ag,ah+1>>0);      s�}else if(ar===25){  t   tau=0;av=ae.NumField();aw=au;ax=av;while(aw<ax){  t.    if(!AU($clone(ae.Field(aw),CX),$clone(af.Field(aw),CX),ag,ah+1>>0)){  tsreturn false;    }      t%  t%aw=aw+(1)>>0;}  t�return true;      t�}else if(ar===21){  t�    if(!(ae.IsNil()===af.IsNil())){  t�return false;    }  t�    if(!((ae.Len()===af.Len()))){  t�return false;    }  u    if(ae.Pointer()===af.Pointer()){  u-return true;    }  u?ay=ae.MapKeys();az=0;while(az<ay.$length){ba=new CX.Ptr();$copy(ba,((az<0||az>=ay.$length)?$throwRuntimeError("index out of range"):ay.$array[ay.$offset+az]),CX);  uc    if(!AU($clone(ae.MapIndex($clone(ba,CX)),CX),$clone(af.MapIndex($clone(ba,CX)),CX),ag,ah+1>>0)){  u�return false;    }    az++;}  u�return true;      u�}else if(ar===19){  u�    if(ae.IsNil()&&af.IsNil()){  vreturn true;    }  v3return false;    }else{  vjreturn $interfaceIsEqual(AN($clone(ae,CX),false),AN($clone(af,CX),false));    }    }; 0deepValueEqual06
ae=this.$val!==undefined?this.$val:this;  �(af=ae;  �4if(af===2){  �Dreturn"chan<-";      �U}else if(af===1){  �ereturn"<-chan";      �v}else if(af===3){  Ԇreturn"chan";    }  Ԙreturn"ChanDir"+C.Itoa((ae>>0));    };$ptrType(BE).prototype.String=function(){return new BE(this.$get()).String();}; 0	ChanDir0reflect:ChanDirstrconv:Itoa 0�(*reflect.interfaceType).Method0 �	BJ.Ptr.prototype.Method=function(ae){var af=new BP.Ptr(),ag,ah,ai;  �ag=this;  �3    if(ae<0||ae>=ag.methods.$length){  �Wreturn af;    }  �bai=(ah=ag.methods,((ae<0||ae>=ah.$length)?$throwRuntimeError("index out of range"):ah.$array[ah.$offset+ae]));  �vaf.Name=ai.name.$get();  Ո    if(!($pointerIsEqual(ai.pkgPath,($ptrType($String)).nil))){  ՠaf.PkgPath=ai.pkgPath.$get();    }  ջaf.Type=CS(ai.typ);  ��af.Index=ae;  ��return af;    };BJ.prototype.Method=function(ae){return this.$val.Method(ae);}; 0
    if(ah===($ptrType(BJ)).nil){  �return[af,ag];    }  �%  �)ai=($ptrType(BI)).nil;  �5aj=ah.methods;ak=0;while(ak<aj.$length){al=ak;  �Rai=(am=ah.methods,((al<0||al>=am.$length)?$throwRuntimeError("index out of range"):am.$array[am.$offset+al]));  �f    if(ai.name.$get()===ae){  �~    an=new BP.Ptr();$copy(an,ah.Method(al),BP);ao=true;$copy(af,an,BP);ag=ao;return[af,ag];    }    ak++;}  ןreturn[af,ag];    };BJ.prototype.MethodByName=function(ae){return this.$val.MethodByName(ae);}; 0
af=af.substring(ag);  �    if(af===""){  �,break;    }  �wag=0;  �while(ag<af.length&&!((af.charCodeAt(ag)===32))&&!((af.charCodeAt(ag)===58))&&!((af.charCodeAt(ag)===34))){  ��  ��ag=ag+(1)>>0;    }  ��    if((ag+1>>0)>=af.length||!((af.charCodeAt(ag)===58))||!((af.charCodeAt((ag+1>>0))===34))){  �break;    }  �ah=af.substring(0,ag);  �4af=af.substring((ag+1>>0));  �mag=1;  �uwhile(ag<af.length&&!((af.charCodeAt(ag)===34))){  ޜ    if(af.charCodeAt(ag)===92){  ޴  ޴ag=ag+(1)>>0;    }  ��  ��ag=ag+(1)>>0;    }  ��    if(ag>=af.length){  ��break;    }  ��ai=af.substring(0,(ag+1>>0));  �
af=af.substring((ag+1>>0));  �    if(ae===ah){  �1aj=C.Unquote(ai);ak=aj[0];  �Xreturn ak;    }    }  �mreturn"";    };$ptrType(BS).prototype.Get=function(ae){return new BS(this.$get()).Get(ae);}; 0	StructTag0$reflect:StructTagstrconv:Unquote 0��(*reflect.structType).Field0 �`BO.Ptr.prototype.Field=function(ae){var af=new BR.Ptr(),ag,ah,ai,aj;  ߨag=this;  ��    if(ae<0||ae>=ag.fields.$length){  ��return af;    }  �ai=(ah=ag.fields,((ae<0||ae>=ah.$length)?$throwRuntimeError("index out of range"):ah.$array[ah.$offset+ae]));  �af.Type=CS(ai.typ);  �0    if(!($pointerIsEqual(ai.name,($ptrType($String)).nil))){  �Eaf.Name=ai.name.$get();    }else{  �baj=af.Type;  �p    if(aj.Kind()===22){  ��aj=aj.Elem();    }  ��af.Name=aj.Name();  �af.Anonymous=true;    }  ��    if(!($pointerIsEqual(ai.pkgPath,($ptrType($String)).nil))){  ��af.PkgPath=ai.pkgPath.$get();    }  ��    if(!($pointerIsEqual(ai.tag,($ptrType($String)).nil))){  �
structType09reflect:StructFieldreflect:structTypereflect:toType 0��"(*reflect.structType).FieldByIndex0 �BO.Ptr.prototype.FieldByIndex=function(ae){var af=new BR.Ptr(),ag,ah,ai,aj,ak,al;  �ag=this;  ��af.Type=CS(ag.rtype);  �ah=ae;ai=0;while(ai<ah.$length){aj=ai;ak=((ai<0||ai>=ah.$length)?$throwRuntimeError("index out of range"):ah.$array[ah.$offset+ai]);  �    if(aj>0){  �-al=af.Type;  �=    if((al.Kind()===22)&&(al.Elem().Kind()===25)){  �ual=al.Elem();    }  �af.Type=al;    }  �$copy(af,af.Type.Field(ak),BR);    ai++;}  �return af;    };BO.prototype.FieldByIndex=function(ae){return this.$val.FieldByIndex(ae);}; 0
structType09reflect:StructFieldreflect:structTypereflect:toType 0�
O%(*reflect.structType).FieldByNameFunc0 �	�BO.Ptr.prototype.FieldByNameFunc=function(ae){var af=new BR.Ptr(),ag=false,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;  ��ah=this;  �/ai=new($sliceType(BT))([]);  �Iaj=new($sliceType(BT))([new BT.Ptr(ah,($sliceType($Int)).nil)]);  ��  ��ak=false;  �ial=(am=new $Map(),am);  �while(aj.$length>0){  �ao=aj;ap=$subslice(ai,0,0);ai=ao;aj=ap;  ��aq=ak;  ��ak=false;  �,ar=ai;as=0;while(as<ar.$length){at=new BT.Ptr();$copy(at,((as<0||as>=ar.$length)?$throwRuntimeError("index out of range"):ar.$array[ar.$offset+as]),BT);  �Nau=at.typ;  �_    if((av=al[au.$key()],av!==undefined?av.v:false)){  �-as++;continue;    }  �>aw=au;(al||$throwRuntimeError("assignment to entry in nil map"))[aw.$key()]={k:aw,v:true};  �Sax=au.fields;ay=0;while(ay<ax.$length){az=ay;  �qbb=(ba=au.fields,((az<0||az>=ba.$length)?$throwRuntimeError("index out of range"):ba.$array[ba.$offset+az]));  �  �bc="";  ��  ��bd=($ptrType(BB)).nil;  ��    if(!($pointerIsEqual(bb.name,($ptrType($String)).nil))){  ��bc=bb.name.$get();    }else{  �Xbd=bb.typ;  �j    if(bd.Kind()===22){  �bd=bd.Elem().common();    }  �bc=bd.Name();    }  ��    if(ae(bc)){  �    if((be=aq[au.$key()],be!==undefined?be.v:0)>1||ag){  �s    bf=new BR.Ptr("","",$ifaceNil,"",0,($sliceType($Int)).nil,false);bg=false;$copy(af,bf,BR);ag=bg;return[af,ag];    }  �$copy(af,au.Field(az),BR);  �af.Index=($sliceType($Int)).nil;  ��af.Index=$appendSlice(af.Index,at.index);  �af.Index=$append(af.Index,az);  �0ag=true;  �?ay++;continue;    }  �    if(ag||bd===($ptrType(BB)).nil||!((bd.Kind()===25))){  �Lay++;continue;    }  �_bh=bd.structType;  �    if((bi=ak[bh.$key()],bi!==undefined?bi.v:0)>0){  �bj=bh;(ak||$throwRuntimeError("assignment to entry in nil map"))[bj.$key()]={k:bj,v:2};  ��ay++;continue;    }  ��    if(ak===false){  �ak=(bk=new $Map(),bk);    }  �Abm=bh;(ak||$throwRuntimeError("assignment to entry in nil map"))[bm.$key()]={k:bm,v:1};  �Y    if((bn=aq[au.$key()],bn!==undefined?bn.v:0)>1){  �pbo=bh;(ak||$throwRuntimeError("assignment to entry in nil map"))[bo.$key()]={k:bo,v:2};    }  �  �bp=($sliceType($Int)).nil;  ��bp=$appendSlice(bp,at.index);  ��bp=$append(bp,az);  �	aj=$append(aj,new BT.Ptr(bh,bp));    ay++;}    as++;}  �@    if(ag){  �Kbreak;    }    }  �Yreturn[af,ag];    };BO.prototype.FieldByNameFunc=function(ae){return this.$val.FieldByNameFunc(ae);}; 0
structType0[reflect:StructFieldreflect:commonreflect:fieldScan
structType0)reflect:StructFieldreflect:structType 0��
return false;    } 
ap=0; 
' 
+aq=0;while(aq<ao.methods.$length){ 
Oas=(ar=ag.methods,((ap<0||ap>=ar.$length)?$throwRuntimeError("index out of range"):ar.$array[ar.$offset+ap])); 
eau=(at=ao.methods,((aq<0||aq>=at.$length)?$throwRuntimeError("index out of range"):at.$array[at.$offset+aq])); 
{    if($pointerIsEqual(au.name,as.name)&&$pointerIsEqual(au.pkgPath,as.pkgPath)&&au.mtyp===as.typ){ 
� 
� 
�ap=ap+(1)>>0;    if(ap>=ag.methods.$length){ 
�return true;    }    }     
G 
Gaq=aq+(1)>>0;} return false;    }; 0
implements0(reflect:uncommonreflect:uncommonType 0�+reflect.directlyAssignable0CB��CB=function(ae,af){ �    if(ae===af){ �return true;    } 
cacheGet06reflect:cacheKeyreflect:lookupCache
cachePut0'reflect:cacheKeyreflect:lookupCache 0yreflect.ismapkey0CLLCL=function(){$panic("Native function not implemented: reflect.ismapkey");}; 0
ismapkey0  0��reflect.bucketOf0CM�{CM=function(ae,af){var ag,ah,ai,aj,ak,al,am; 1     if(ae.size>128){ 1ae=$assertType(BY(ae),($ptrType(BB)));    } 1?    if(af.size>128){ 1^af=$assertType(BY(af),($ptrType(BB)));    } 1~ag=4; 1�ah=($sliceType($Uintptr)).make(1); 2ai=8; 2]ah=$append(ah,1,ai,0); 2�ai=ai+(ag)>>>0; 2� 2�    if(((ae.kind&128)>>>0)===0){ 3 ah=$append(ah,3,ai,8,ae.size); 3cah=CN(ah,ae); 3�ah=$append(ah,4);    } 3�ai=ai+((aj=ae.size,(((8>>>16<<16)*aj>>>0)+(8<<16>>>16)*aj)>>>0))>>>0; 3�    if(((af.kind&128)>>>0)===0){ 3�ah=$append(ah,3,ai,8,af.size); 4?ah=CN(ah,af); 4`ah=$append(ah,4);    } 4�ai=ai+((ak=af.size,(((8>>>16<<16)*ak>>>0)+(8<<16>>>16)*ak)>>>0))>>>0; 4�ah=$append(ah,0); 4�(0<0||0>=ah.$length)?$throwRuntimeError("index out of range"):ah.$array[ah.$offset+0]=ai; 4�(3<0||3>=ah.$length)?$throwRuntimeError("index out of range"):ah.$array[ah.$offset+3]=$sliceToArray(ah); 5al=new BB.Ptr(); 5!al.size=ai; 52al.gc=$sliceToArray(ah); 5Qam="bucket("+ae.string.$get()+","+af.string.$get()+")"; 5�al.string=new($ptrType($String))(function(){return am;},function($v){am=$v;}); 5�return al;    }; 0
bucketOf07
�reflect.funcLayout0CW�
	CW=function(ae,af){var ag=($ptrType(BB)).nil,ah=0,ai=0,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi; Om    if(!((ae.Kind()===19))){ O�$panic(new $String("reflect: funcLayout of non-func type"));    } O�    if(!(af===($ptrType(BB)).nil)&&(af.Kind()===20)){ O�$panic(new $String("reflect: funcLayout with interface receiver "+af.String()));    } P0aj=new CT.Ptr(ae,af); PICV.RWMutex.RLock(); P^ Paal=new CU.Ptr();$copy(al,(ak=CV.m[(new CT(aj)).$key()],ak!==undefined?ak.v:new CU.Ptr()),CU);    if(!(al.t===($ptrType(BB)).nil)){ P�CV.RWMutex.RUnlock(); P�    am=al.t;an=al.argSize;ao=al.retOffset;ag=am;ah=an;ai=ao;return[ag,ah,ai];    } P�CV.RWMutex.RUnlock(); P�CV.RWMutex.Lock(); P� P�aq=new CU.Ptr();$copy(aq,(ap=CV.m[(new CT(aj)).$key()],ap!==undefined?ap.v:new CU.Ptr()),CU);    if(!(aq.t===($ptrType(BB)).nil)){ QCV.RWMutex.Unlock(); Q1    ar=aq.t;as=aq.argSize;at=aq.retOffset;ag=ar;ah=as;ai=at;return[ag,ah,ai];    } QYau=ae.funcType; Q�av=($sliceType($Uintptr)).make(1); Q�aw=0; R    if(!(af===($ptrType(BB)).nil)){ R�    if(af.size>4){ R�av=$append(av,1,aw,af.gc);        }else if(af.pointers()){ S�av=CN(av,af);    } S�aw=aw+(4)>>>0;    } S�ax=au.in$2;ay=0;while(ay<ax.$length){az=((ay<0||ay>=ax.$length)?$throwRuntimeError("index out of range"):ax.$array[ax.$offset+ay]); Taw=DN(aw,(az.align>>>0)); T/    if(az.pointers()){ TFav=$append(av,11,aw,az.size,az.gc);    } T�aw=aw+(az.size)>>>0;    ay++;} T�ah=aw; T� T�aw=DN(aw,4); Uai=aw; U+ba=au.out;bb=0;while(bb<ba.$length){bc=((bb<0||bb>=ba.$length)?$throwRuntimeError("index out of range"):ba.$array[ba.$offset+bb]); UJaw=DN(aw,(bc.align>>>0)); Uw    if(bc.pointers()){ U�av=$append(av,11,aw,bc.size,bc.gc);    } U�aw=aw+(bc.size)>>>0;    bb++;} U�av=$append(av,0); V(0<0||0>=av.$length)?$throwRuntimeError("index out of range"):av.$array[av.$offset+0]=aw; V>bd=new BB.Ptr(); VObd.size=aw; V`bd.gc=$sliceToArray(av); V V�be=""; V�    if(!(af===($ptrType(BB)).nil)){ V�be="methodargs("+af.string.$get()+")("+ae.string.$get()+")";    }else{ V�be="funcargs("+ae.string.$get()+")";    } Wbd.string=new($ptrType($String))(function(){return be;},function($v){be=$v;}); W@    if(CV.m===false){ W\CV.m=new $Map();    } W�bf=$clone(aj,CT);(CV.m||$throwRuntimeError("assignment to entry in nil map"))[(new CT(bf)).$key()]={k:bf,v:new CU.Ptr(bd,ah,ai)}; W�CV.RWMutex.Unlock(); X    bg=bd;bh=ah;bi=ai;ag=bg;ah=bh;ai=bi;return[ag,ah,ai];    }; 0
funcLayout0��
ValueError0"reflect:Kindreflect:ValueError 0��reflect.storeScalar0DD�sDD=function(ae,af,ag){var ah; wOah=ag; w�if(ah===0){     w�}else if(ah===1){ w�ae.$set(af);     x}else if(ah===2){ xae.$set(af);     x;}else if(ah===3){ xE$copy(ae,af,($arrayType($Uint8,3)));     xw}else if(ah===4){ x�ae.$set(af);     x�}else if(ah===5){ x�$copy(ae,af,($arrayType($Uint8,5)));     x�}else if(ah===6){ x�$copy(ae,af,($arrayType($Uint8,6)));     y)}else if(ah===7){ y3$copy(ae,af,($arrayType($Uint8,7)));     ye}else if(ah===8){ yoae.$set(af);    }else{ wf$panic(new $String("reflect: internal error: storeScalar of "+C.Itoa((ag>>0))+"-byte value"));    }    }; 0
callMethod0��
funcName0!runtime:Funcruntime:FuncForPC 0�j(reflect.Value).Complex0 ��CX.Ptr.prototype.Complex=function(){var ae,af,ag,ah,ai; �:ae=new CX.Ptr();$copy(ae,this,CX); �[af=(new CY(ae.flag)).kind(); �jag=af; �vif(ag===15){ ��    if(!((((ae.flag&2)>>>0)===0))){ ��return(ah=ae.ptr.$get(),new $Complex128(ah.$real,ah.$imag));    } ��return(ai=ae.scalar,new $Complex128(ai.$real,ai.$imag));     �}else if(ag===16){ �dreturn ae.ptr.$get();    } ��$panic(new DB.Ptr("reflect.Value.Complex",af));    };CX.prototype.Complex=function(){return this.$val.Complex();}; 0Value0?
af.ptr.$set(ae);    }else{ *$panic(new DB.Ptr("reflect.Value.SetInt",ag));    }    };CX.prototype.SetInt=function(ae){return this.$val.SetInt(ae);}; 0Value0Y
return;    } (new CY(af.flag)).mustBeExported(); +$copy(af,af.assignTo("reflect.Value.SetMapIndex",ah.elem,($ptrType($emptyInterface)).nil),CX); j naj=0; �    if(!((((af.flag&2)>>>0)===0))){ �aj=af.ptr;        }else if(af.typ.pointers()){ �aj=new($ptrType($UnsafePointer))(function(){return this.$target.ptr;},function($v){this.$target.ptr=$v;},af);    }else{ �aj=new($ptrType($Uintptr))(function(){return this.$target.scalar;},function($v){this.$target.scalar=$v;},af);    } AD(ag.typ,ag.pointer(),ai,aj);    };CX.prototype.SetMapIndex=function(ae,af){return this.$val.SetMapIndex(ae,af);}; 0Value0��
MakeChan0@
Indirect0  0�kreflect.New0EJ��EJ=$pkg.New=function(ae){var af,ag; b�    if($interfaceIsEqual(ae,$ifaceNil)){ b�$panic(new $String("reflect: New(nil)"));    } caf=V($assertType(ae,($ptrType(BB)))); c<ag=352; c^return new CX.Ptr(ae.common().ptrTo(),af,0,ag);    }; 0New0Q
makeString0reflect:New
cvtFloat0reflect:makeFloat 0��reflect.cvtComplex0EYJEY=function(ae,af){ �Xreturn EN((ae.flag&1)>>>0,ae.Complex(),af);    }; 0
cvtComplex0reflect:makeComplex 0��reflect.cvtIntString0EZXEZ=function(ae,af){ ��return EO((ae.flag&1)>>>0,$encodeRune(ae.Int().$low),af);    }; 0cvtIntString0reflect:makeString 0��reflect.cvtUintString0FAYFA=function(ae,af){ �[return EO((ae.flag&1)>>>0,$encodeRune(ae.Uint().$low),af);    }; 0
chanrecv0  0yreflect.chansend0FLLFL=function(){$panic("Native function not implemented: reflect.chansend");}; 0
chansend0  0mreflect.call0FMHFM=function(){$panic("Native function not implemented: reflect.call");}; 0call0  0wreflect.escapes0FN=FN=function(ae){ ��    if(FO.b){ ��FO.x=ae;    }    }; 0	escapes0
 �