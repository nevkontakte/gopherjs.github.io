0��'regexp�Lwpackage regexp
import testing "testing"
import io "io"
import syntax "regexp/syntax"
import bytes "bytes"
import sort "sort"
import unicode "unicode"
import strconv "strconv"
import strings "strings"
import sync "sync"
import utf8 "unicode/utf8"
func @"".Compile(@"".expr string) (? *@"".Regexp, ? error)
func @"".CompilePOSIX(@"".expr string) (? *@"".Regexp, ? error)
func @"".Match(@"".pattern string, @"".b []byte) (@"".matched bool, @"".err error)
func @"".MatchReader(@"".pattern string, @"".r @"io".RuneReader) (@"".matched bool, @"".err error)
func @"".MatchString(@"".pattern string, @"".s string) (@"".matched bool, @"".err error)
func @"".MustCompile(@"".str string) (? *@"".Regexp)
func @"".MustCompilePOSIX(@"".str string) (? *@"".Regexp)
func @"".QuoteMeta(@"".s string) (? string)
type @"".Regexp struct { @"".expr string; @"".prog *@"regexp/syntax".Prog; @"".onepass *@"".onePassProg; @"".prefix string; @"".prefixBytes []byte; @"".prefixComplete bool; @"".prefixRune rune; @"".prefixEnd uint32; @"".cond @"regexp/syntax".EmptyOp; @"".numSubexp int; @"".subexpNames []string; @"".longest bool; @"".mu @"sync".Mutex; @"".machine []*@"".machine }
func (? *@"".Regexp) @"".Expand(@"".dst []byte, @"".template []byte, @"".src []byte, @"".match []int) (? []byte)
func (? *@"".Regexp) @"".ExpandString(@"".dst []byte, @"".template string, @"".src string, @"".match []int) (? []byte)
func (? *@"".Regexp) @"".Find(@"".b []byte) (? []byte)
func (? *@"".Regexp) @"".FindAll(@"".b []byte, @"".n int) (? [][]byte)
func (? *@"".Regexp) @"".FindAllIndex(@"".b []byte, @"".n int) (? [][]int)
func (? *@"".Regexp) @"".FindAllString(@"".s string, @"".n int) (? []string)
func (? *@"".Regexp) @"".FindAllStringIndex(@"".s string, @"".n int) (? [][]int)
func (? *@"".Regexp) @"".FindAllStringSubmatch(@"".s string, @"".n int) (? [][]string)
func (? *@"".Regexp) @"".FindAllStringSubmatchIndex(@"".s string, @"".n int) (? [][]int)
func (? *@"".Regexp) @"".FindAllSubmatch(@"".b []byte, @"".n int) (? [][][]byte)
func (? *@"".Regexp) @"".FindAllSubmatchIndex(@"".b []byte, @"".n int) (? [][]int)
func (? *@"".Regexp) @"".FindIndex(@"".b []byte) (@"".loc []int)
func (? *@"".Regexp) @"".FindReaderIndex(@"".r @"io".RuneReader) (@"".loc []int)
func (? *@"".Regexp) @"".FindReaderSubmatchIndex(@"".r @"io".RuneReader) (? []int)
func (? *@"".Regexp) @"".FindString(@"".s string) (? string)
func (? *@"".Regexp) @"".FindStringIndex(@"".s string) (@"".loc []int)
func (? *@"".Regexp) @"".FindStringSubmatch(@"".s string) (? []string)
func (? *@"".Regexp) @"".FindStringSubmatchIndex(@"".s string) (? []int)
func (? *@"".Regexp) @"".FindSubmatch(@"".b []byte) (? [][]byte)
func (? *@"".Regexp) @"".FindSubmatchIndex(@"".b []byte) (? []int)
func (? *@"".Regexp) @"".LiteralPrefix() (@"".prefix string, @"".complete bool)
func (? *@"".Regexp) @"".Longest() ()
func (? *@"".Regexp) @"".Match(@"".b []byte) (? bool)
func (? *@"".Regexp) @"".MatchReader(@"".r @"io".RuneReader) (? bool)
func (? *@"".Regexp) @"".MatchString(@"".s string) (? bool)
func (? *@"".Regexp) @"".NumSubexp() (? int)
func (? *@"".Regexp) @"".ReplaceAll(@"".src []byte, @"".repl []byte) (? []byte)
func (? *@"".Regexp) @"".ReplaceAllFunc(@"".src []byte, @"".repl func (? []byte) (? []byte)) (? []byte)
func (? *@"".Regexp) @"".ReplaceAllLiteral(@"".src []byte, @"".repl []byte) (? []byte)
func (? *@"".Regexp) @"".ReplaceAllLiteralString(@"".src string, @"".repl string) (? string)
func (? *@"".Regexp) @"".ReplaceAllString(@"".src string, @"".repl string) (? string)
func (? *@"".Regexp) @"".ReplaceAllStringFunc(@"".src string, @"".repl func (? string) (? string)) (? string)
func (? *@"".Regexp) @"".Split(@"".s string, @"".n int) (? []string)
func (? *@"".Regexp) @"".String() (? string)
func (? *@"".Regexp) @"".SubexpNames() (? []string)
func (? *@"".Regexp) @"".allMatches(@"".s string, @"".b []byte, @"".n int, @"".deliver func (? []int) ()) ()
func (? *@"".Regexp) @"".doExecute(@"".r @"io".RuneReader, @"".b []byte, @"".s string, @"".pos int, @"".ncap int) (? []int)
func (? *@"".Regexp) @"".expand(@"".dst []byte, @"".template string, @"".bsrc []byte, @"".src string, @"".match []int) (? []byte)
func (? *@"".Regexp) @"".get() (? *@"".machine)
func (? *@"".Regexp) @"".pad(@"".a []int) (? []int)
func (? *@"".Regexp) @"".put(@"".z *@"".machine) ()
func (? *@"".Regexp) @"".replaceAll(@"".bsrc []byte, @"".src string, @"".nmatch int, @"".repl func (@"".dst []byte, @"".m []int) (? []byte)) (? []byte)
func @"".TestOnePassCutoff(@"".t *@"testing".T) ()
type @"".entry struct { @"".pc uint32; @"".t *@"".thread }
type @"".input interface { @"".canCheckPrefix() (? bool); @"".context(@"".pos int) (? @"regexp/syntax".EmptyOp); @"".hasPrefix(@"".re *@"".Regexp) (? bool); @"".index(@"".re *@"".Regexp, @"".pos int) (? int); @"".step(@"".pos int) (@"".r rune, @"".width int) }
type @"".inputBytes struct { @"".str []byte }
func (? *@"".inputBytes) @"".canCheckPrefix() (? bool)
func (? *@"".inputBytes) @"".context(@"".pos int) (? @"regexp/syntax".EmptyOp)
func (? *@"".inputBytes) @"".hasPrefix(@"".re *@"".Regexp) (? bool)
func (? *@"".inputBytes) @"".index(@"".re *@"".Regexp, @"".pos int) (? int)
func (? *@"".inputBytes) @"".step(@"".pos int) (? rune, ? int)
type @"".inputReader struct { @"".r @"io".RuneReader; @"".atEOT bool; @"".pos int }
func (? *@"".inputReader) @"".canCheckPrefix() (? bool)
func (? *@"".inputReader) @"".context(@"".pos int) (? @"regexp/syntax".EmptyOp)
func (? *@"".inputReader) @"".hasPrefix(@"".re *@"".Regexp) (? bool)
func (? *@"".inputReader) @"".index(@"".re *@"".Regexp, @"".pos int) (? int)
func (? *@"".inputReader) @"".step(@"".pos int) (? rune, ? int)
type @"".inputString struct { @"".str string }
func (? *@"".inputString) @"".canCheckPrefix() (? bool)
func (? *@"".inputString) @"".context(@"".pos int) (? @"regexp/syntax".EmptyOp)
func (? *@"".inputString) @"".hasPrefix(@"".re *@"".Regexp) (? bool)
func (? *@"".inputString) @"".index(@"".re *@"".Regexp, @"".pos int) (? int)
func (? *@"".inputString) @"".step(@"".pos int) (? rune, ? int)
type @"".machine struct { @"".re *@"".Regexp; @"".p *@"regexp/syntax".Prog; @"".op *@"".onePassProg; @"".q0 @"".queue; @"".q1 @"".queue; @"".pool []*@"".thread; @"".matched bool; @"".matchcap []int; @"".inputBytes @"".inputBytes; @"".inputString @"".inputString; @"".inputReader @"".inputReader }
func (? *@"".machine) @"".add(@"".q *@"".queue, @"".pc uint32, @"".pos int, @"".cap []int, @"".cond @"regexp/syntax".EmptyOp, @"".t *@"".thread) (? *@"".thread)
func (? *@"".machine) @"".alloc(@"".i *@"regexp/syntax".Inst) (? *@"".thread)
func (? *@"".machine) @"".clear(@"".q *@"".queue) ()
func (? *@"".machine) @"".free(@"".t *@"".thread) ()
func (? *@"".machine) @"".init(@"".ncap int) ()
func (? *@"".machine) @"".match(@"".i @"".input, @"".pos int) (? bool)
func (? *@"".machine) @"".newInputBytes(@"".b []byte) (? @"".input)
func (? *@"".machine) @"".newInputReader(@"".r @"io".RuneReader) (? @"".input)
func (? *@"".machine) @"".newInputString(@"".s string) (? @"".input)
func (? *@"".machine) @"".onepass(@"".i @"".input, @"".pos int) (? bool)
func (? *@"".machine) @"".step(@"".runq *@"".queue, @"".nextq *@"".queue, @"".pos int, @"".nextPos int, @"".c rune, @"".nextCond @"regexp/syntax".EmptyOp) ()
type @"".onePassInst struct { ? @"regexp/syntax".Inst; @"".Next []uint32 }
type @"".onePassProg struct { @"".Inst []@"".onePassInst; @"".Start int; @"".NumCap int }
type @"".queue struct { @"".sparse []uint32; @"".dense []@"".entry }
type @"".queueOnePass struct { @"".sparse []uint32; @"".dense []uint32; @"".size uint32; @"".nextIndex uint32 }
func (? *@"".queueOnePass) @"".clear() ()
func (? *@"".queueOnePass) @"".contains(@"".u uint32) (? bool)
func (? *@"".queueOnePass) @"".empty() (? bool)
func (? *@"".queueOnePass) @"".insert(@"".u uint32) ()
func (? *@"".queueOnePass) @"".insertNew(@"".u uint32) ()
func (? *@"".queueOnePass) @"".next() (@"".n uint32)
func (? *@"".queueOnePass) @"".reset() ()
type @"".runeSlice []rune
func (? @"".runeSlice) @"".Len() (? int)
func (? @"".runeSlice) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".runeSlice) @"".Sort() ()
func (? @"".runeSlice) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".runeSlice) @"".Len() (? int)
func (? *@"".runeSlice) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".runeSlice) @"".Sort() ()
func (? *@"".runeSlice) @"".Swap(@"".i int, @"".j int) ()
type @"".thread struct { @"".inst *@"regexp/syntax".Inst; @"".cap []int }
type @"io".RuneReader interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error) }
type @"regexp/syntax".Prog struct { @"regexp/syntax".Inst []@"regexp/syntax".Inst; @"regexp/syntax".Start int; @"regexp/syntax".NumCap int }
func (? *@"regexp/syntax".Prog) @"regexp/syntax".Prefix() (@"regexp/syntax".prefix string, @"regexp/syntax".complete bool)
func (? *@"regexp/syntax".Prog) @"regexp/syntax".StartCond() (? @"regexp/syntax".EmptyOp)
func (? *@"regexp/syntax".Prog) @"regexp/syntax".String() (? string)
func (? *@"regexp/syntax".Prog) @"regexp/syntax".skipNop(@"regexp/syntax".pc uint32) (? *@"regexp/syntax".Inst, ? uint32)
type @"regexp/syntax".EmptyOp uint8
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"testing".T struct { ? @"testing".common; @"testing".name string; @"testing".startParallel chan bool }
func (? *@"testing".T) @"testing".Parallel() ()
func (? *@"testing".T) @"testing".report() ()
type @"regexp/syntax".Inst struct { @"regexp/syntax".Op @"regexp/syntax".InstOp; @"regexp/syntax".Out uint32; @"regexp/syntax".Arg uint32; @"regexp/syntax".Rune []rune }
func (? *@"regexp/syntax".Inst) @"regexp/syntax".MatchEmptyWidth(@"regexp/syntax".before rune, @"regexp/syntax".after rune) (? bool)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".MatchRune(@"regexp/syntax".r rune) (? bool)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".MatchRunePos(@"regexp/syntax".r rune) (? int)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".String() (? string)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".op() (? @"regexp/syntax".InstOp)
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
type @"regexp/syntax".InstOp uint8
func (? @"regexp/syntax".InstOp) @"regexp/syntax".String() (? string)
func (? *@"regexp/syntax".InstOp) @"regexp/syntax".String() (? string)
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
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
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
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
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytessortmathstrconvstrings
bytesD0	sortE0unicodeF0strconvG0stringsH0	syncI0unicode/utf8J0�\$0�} 0L��L=$pkg.queue=$newType(0,"Struct","regexp.queue","queue","regexp",function(sparse_,dense_){this.$val=this;this.sparse=sparse_!==undefined?sparse_:($sliceType($Uint32)).nil;this.dense=dense_!==undefined?dense_:($sliceType(M)).nil;});nL.init([["sparse","sparse","regexp",($sliceType($Uint32)),""],["dense","dense","regexp",($sliceType(M)),""]]);0queue0regexp:entry 0�$ 0M��M=$pkg.entry=$newType(0,"Struct","regexp.entry","entry","regexp",function(pc_,t_){this.$val=this;this.pc=pc_!==undefined?pc_:0;this.t=t_!==undefined?t_:($ptrType(N)).nil;});NM.init([["pc","pc","regexp",$Uint32,""],["t","t","regexp",($ptrType(N)),""]]);0entry0
sync:Mutex 0�� 0ATKAT=$pkg.input=$newType(8,"Interface","regexp.input","input","regexp",null);�lAT.init([["canCheckPrefix","canCheckPrefix","regexp",$funcType([],[$Bool],false)],["context","context","regexp",$funcType([$Int],[C.EmptyOp],false)],["hasPrefix","hasPrefix","regexp",$funcType([($ptrType(AM))],[$Bool],false)],["index","index","regexp",$funcType([($ptrType(AM)),$Int],[$Int],false)],["step","step","regexp",$funcType([$Int],[$Int32,$Int],false)]]);0input0&regexp/syntax:EmptyOp
inputBytes0&regexp/syntax:EmptyOp
notOnePass0  0 0AL  0debug0  0! 0BA  0specialBytes0  0? 0  "    Q=($sliceType($Int)).make(0);0 0regexp:empty 0I 0  #    Y=new($sliceType($Int32))([]);0noRune0
notOnePass0'regexp:notOnePassregexp:onePassProg 02 0      AL=false;0debug0regexp:debug 0u 0  C    BA=new($sliceType($Uint8))($stringToBytes("\\.+*?()|[]{}^$"));0specialBytes0regexp:specialBytes 0��regexp.TestOnePassCutoff0KeK=$pkg.TestOnePassCutoff=function(a){   ^a.common.Skip(new($sliceType($emptyInterface))([]));    }; 0TestOnePassCutoff0  0�(*regexp.machine).newInputBytes0 ��O.Ptr.prototype.newInputBytes=function(a){var b;  lb=this;  �b.inputBytes.str=a;  �return b.inputBytes;    };O.prototype.newInputBytes=function(a){return this.$val.newInputBytes(a);}; 0machine
b=this;  
H  
Lc=($ptrType(N)).nil;  
W  
Zd=b.pool.$length;    if(d>0){  
vc=(e=b.pool,f=d-1>>0,((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]));  
�b.pool=$subslice(b.pool,0,(d-1>>0));    }else{  
�c=new N.Ptr();  
�c.cap=($sliceType($Int)).make(b.matchcap.$length,b.matchcap.$capacity);    }  
�c.inst=a;  return c;    };O.prototype.alloc=function(a){return this.$val.alloc(a);}; 0machinealloc0regexp:machine
regexp:addregexp:canCheckPrefixregexp:clearregexp:contextregexp:indexregexp:machineregexp:stepregexp:step
regexp:addregexp:entryregexp:machine
V(*regexp.machine).add0 �	�O.Ptr.prototype.add=function(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  `g=this;  �    if(b===0){  �return f;    }  �  �i=(h=a.sparse,((b<0||b>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+b]));    if(i<(a.dense.$length>>>0)&&((j=a.dense,((i<0||i>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+i])).pc===b)){  *return f;    }  8k=a.dense.$length;  Ka.dense=$subslice(a.dense,0,(k+1>>0));  dm=(l=a.dense,((k<0||k>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+k]));  vm.t=($ptrType(N)).nil;  �m.pc=b;  �(n=a.sparse,(b<0||b>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+b]=(k>>>0));  �p=(o=g.p.Inst,((b<0||b>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+b]));  �q=p.Op;  �if(q===5){      
�O.Ptr.prototype.onepass=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah;  �c=this;  �d=c.re.cond;       if(d===255){   <return false;    }   Mc.matched=false;   `e=c.matchcap;f=0;while(f<e.$length){g=f;   ~(h=c.matchcap,(g<0||g>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+g]=-1);    f++;}   �i=-1;j=-1;k=i;l=j;   �m=0;n=0;o=m;p=n;   �q=a.step(b);k=q[0];o=q[1];   �    if(!((k===-1))){   �r=a.step(b+o>>0);l=r[0];p=r[1];    }  !  !"s=0;  !7    if(b===0){  !Gs=C.EmptyOpContext(-1,k);    }else{  !ws=a.context(b);    }  !�t=c.op.Start;  !�v=new S.Ptr();$copy(v,(u=c.op.Inst,((t<0||t>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+t])),S);  !�    if((b===0)&&(((v.Inst.Arg<<24>>>24)&~s)===0)&&c.re.prefix.length>0&&a.canCheckPrefix()){  "�    if(a.hasPrefix(c.re)){  "�b=b+(c.re.prefix.length)>>0;  "�w=a.step(b);k=w[0];o=w[1];  "�x=a.step(b+o>>0);l=x[0];p=x[1];  #s=a.context(b);  #t=(c.re.prefixEnd>>0);    }else{  #Creturn c.matched;    }    }  #\while(true){  #d$copy(v,(y=c.op.Inst,((t<0||t>=y.$length)?$throwRuntimeError("index out of range"):y.$array[y.$offset+t])),S);  #{t=(v.Inst.Out>>0);  #�z=v.Inst.Op;  #�if(z===4){  #�c.matched=true;  #�    if(c.matchcap.$length>0){  $(aa=c.matchcap,(0<0||0>=aa.$length)?$throwRuntimeError("index out of range"):aa.$array[aa.$offset+0]=0);  $$(ab=c.matchcap,(1<0||1>=ab.$length)?$throwRuntimeError("index out of range"):ab.$array[ab.$offset+1]=b);    }  $@return c.matched;      $S}else if(z===7){  $l    if(!v.Inst.MatchRune(k)){  $�return c.matched;    }      $�}else if(z===8){  $�    if(!((k===(ac=v.Inst.Rune,((0<0||0>=ac.$length)?$throwRuntimeError("index out of range"):ac.$array[ac.$offset+0]))))){  $�return c.matched;    }      $�}else if(z===9){      %}else if(z===10){  %7    if(k===10){  %Jreturn c.matched;    }      %�}else if(z===0||z===1){  %�t=(U(v,k)>>0);  %�continue;      & }else if(z===5){  &return c.matched;      &,}else if(z===6){  &Dcontinue;      &O}else if(z===3){  &n    if(!((((v.Inst.Arg<<24>>>24)&~s)===0))){  &�return c.matched;    }  &�continue;      &�}else if(z===2){  &�    if((v.Inst.Arg>>0)<c.matchcap.$length){  '(ad=c.matchcap,ae=v.Inst.Arg,(ae<0||ae>=ad.$length)?$throwRuntimeError("index out of range"):ad.$array[ad.$offset+ae]=b);    }  ''continue;    }else{  #�$panic(new $String("bad inst"));    }  '6    if(o===0){  'Ibreak;    }  'Us=C.EmptyOpContext(k,l);  '{b=b+(o)>>0;  '�af=l;ag=p;k=af;o=ag;  '�    if(!((k===-1))){  '�ah=a.step(b+o>>0);l=ah[0];p=ah[1];    }    }  '�return c.matched;    };O.prototype.onepass=function(a,b){return this.$val.onepass(a,b);}; 0machineonepass0��regexp/syntax:EmptyOpContextregexp:canCheckPrefixregexp:contextregexp:hasPrefixregexp:machineregexp:onePassInstregexp:onePassNextregexp:step 0�(*regexp.Regexp).doExecute0 �AM.Ptr.prototype.doExecute=function(a,b,c,d,e){var f,g,h,i;  )f=this;  )^g=f.get();  )m  )qh=$ifaceNil;  )z    if(!($interfaceIsEqual(a,$ifaceNil))){  )�h=g.newInputReader(a);        }else if(!(b===($sliceType($Uint8)).nil)){  )�h=g.newInputBytes(b);    }else{  )�h=g.newInputString(c);    }  )�    if(!(g.op===AJ)){  *    if(!g.onepass(h,d)){  *.f.put(g);  *;return($sliceType($Int)).nil;    }    }else{  *Vg.init(e);  *e    if(!g.match(h,d)){  *~f.put(g);  *�return($sliceType($Int)).nil;    }    }  *�    if(e===0){  *�f.put(g);  *�return Q;    }  *�i=($sliceType($Int)).make(g.matchcap.$length);  +$copySlice(i,g.matchcap);  +f.put(g);  +(return i;    };AM.prototype.doExecute=function(a,b,c,d,e){return this.$val.doExecute(a,b,c,d,e);}; 0Regexp	doExecute0��
regexp:getregexp:initregexp:matchregexp:newInputBytesregexp:newInputReaderregexp:newInputStringregexp:notOnePassregexp:onepass
regexp:put 0�regexp.onePassPrefix0T��T=function(a){var b="",c=false,d=0,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;  0wg=(e=a.Inst,f=a.Start,((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]));  0�    if(!((g.Op===3))||(((((g.Arg<<24>>>24))&4)>>>0)===0)){  0�    h="";i=g.Op===4;j=(a.Start>>>0);b=h;c=i;d=j;return[b,c,d];    }  1"d=g.Out;  1.g=(k=a.Inst,((d<0||d>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+d]));  1?while(g.Op===6){  1^d=g.Out;  1kg=(l=a.Inst,((d<0||d>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+d]));    }  1�    if(!((V(g)===7))||!((g.Rune.$length===1))){  1�    m="";n=g.Op===4;o=(a.Start>>>0);b=m;c=n;d=o;return[b,c,d];    }  2E  2Ip=new D.Buffer.Ptr();$copy(p,new D.Buffer.Ptr(),D.Buffer);  2[while((V(g)===7)&&(g.Rune.$length===1)&&((((g.Arg<<16>>>16)&1)>>>0)===0)){  2�p.WriteRune((q=g.Rune,((0<0||0>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+0])));  2�r=g.Out;s=(t=a.Inst,u=g.Out,((u<0||u>=t.$length)?$throwRuntimeError("index out of range"):t.$array[t.$offset+u]));d=r;g=s;    }  2�    v=p.String();w=(g.Op===3)&&!((((((g.Arg<<24>>>24))&4)>>>0)===0));x=d;b=v;c=w;d=x;return[b,c,d];    }; 0
regexp:iop 0�;regexp.onePassNext0U�U=function(a,b){var c,d;  5
regexp.iop0VmV=function(a){var b,c;  5�b=a.Op;  5�c=b;  5�if(c===8||c===9||c===10){  6b=7;    }  63return b;    }; 0iop0  0��(*regexp.queueOnePass).empty0 ��W.Ptr.prototype.empty=function(){var a;  6�a=this;  7return a.nextIndex>=a.size;    };W.prototype.empty=function(){return this.$val.empty();}; 0queueOnePassempty0regexp:queueOnePass 0�z(*regexp.queueOnePass).next0 �%W.Ptr.prototype.next=function(){var a=0,b,c,d;  71b=this;  7Wa=(c=b.dense,d=b.nextIndex,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]));  7q  7qb.nextIndex=b.nextIndex+(1)>>>0;  7�return a;    };W.prototype.next=function(){return this.$val.next();}; 0queueOnePassnext0regexp:queueOnePass 0��(*regexp.queueOnePass).clear0 ��W.Ptr.prototype.clear=function(){var a;  7�a=this;  7�a.size=0;  7�a.nextIndex=0;    };W.prototype.clear=function(){return this.$val.clear();}; 0queueOnePassclear0regexp:queueOnePass 0��(*regexp.queueOnePass).reset0 ��W.Ptr.prototype.reset=function(){var a;  7�a=this;  7�a.nextIndex=0;    };W.prototype.reset=function(){return this.$val.reset();}; 0queueOnePassreset0regexp:queueOnePass 0�c(*regexp.queueOnePass).contains0 �W.Ptr.prototype.contains=function(a){var b,c,d,e,f;  8b=this;  82    if(a>=(b.sparse.$length>>>0)){  8Treturn false;    }  8ereturn(c=b.sparse,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]))<b.size&&((d=b.dense,e=(f=b.sparse,((a<0||a>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+a])),((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]))===a);    };W.prototype.contains=function(a){return this.$val.contains(a);}; 0queueOnePasscontains0regexp:queueOnePass 0�*(*regexp.queueOnePass).insert0 ��W.Ptr.prototype.insert=function(a){var b;  8�b=this;  8�    if(!b.contains(a)){  8�b.insertNew(a);    }    };W.prototype.insert=function(a){return this.$val.insert(a);}; 0queueOnePassinsert08regexp:containsregexp:insertNewregexp:queueOnePass 0� (*regexp.queueOnePass).insertNew0 ��W.Ptr.prototype.insertNew=function(a){var b,c,d,e;  8�b=this;  9%    if(a>=(b.sparse.$length>>>0)){  9Greturn;    }  9R(c=b.sparse,(a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]=b.size);  9h(d=b.dense,e=b.size,(e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]=a);  9}  9}b.size=b.size+(1)>>>0;    };W.prototype.insertNew=function(a){return this.$val.insertNew(a);}; 0queueOnePass	insertNew0regexp:queueOnePass 0��regexp.newQueue0X��X=function(a){var b=($ptrType(W)).nil;  9�    b=new W.Ptr(($sliceType($Uint32)).make(a),($sliceType($Uint32)).make(a),0,0);return b;    }; 0
newQueue0regexp:queueOnePass 0��regexp.mergeRuneSets0AA��AA=function(a,b,c,d){var $deferred=[],$err=null,e,f,g,h,i,j,k,l,m,n,o,p,q;try{$deferFrames.push($deferred);  <le=a.$get().$length;  <�f=b.$get().$length;  <�    if(!(((e&1)===0))||!(((f&1)===0))){  <�$panic(new $String("mergeRuneSets odd length []rune"));    }  =   =g=0;h=0;i=g;j=h;  =k=($sliceType($Int32)).make(0);  =2l=($sliceType($Uint32)).make(0);  =Mm=true;  =Y$deferred.push([(function(){  =j    if(!m){  =vk=($sliceType($Int32)).nil;  =�l=($sliceType($Uint32)).nil;    }    }),[]]);  =�n=-1;  =�o=(function(o,p,q){var r,s,t,u,v,w,x;  =�    if(n>0&&(r=p.$get(),s=o.$get(),((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]))<=((n<0||n>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+n])){  >return false;    }  >0k=$append(k,(t=p.$get(),u=o.$get(),((u<0||u>=t.$length)?$throwRuntimeError("index out of range"):t.$array[t.$offset+u])),(v=p.$get(),w=o.$get()+1>>0,((w<0||w>=v.$length)?$throwRuntimeError("index out of range"):v.$array[v.$offset+w])));  >xx=o;x.$set(x.$get()+(2)>>0);  >�n=n+(2)>>0;  >�l=$append(l,q);  >�return true;    });  >�while(i<e||j<f){  >�  >�if(j>=f){  ?m=o(new($ptrType($Int))(function(){return i;},function($v){i=$v;}),a,c);      ?+}else if(i>=e){  ?Bm=o(new($ptrType($Int))(function(){return j;},function($v){j=$v;}),b,d);      ?j}else if((p=b.$get(),((j<0||j>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+j]))<(q=a.$get(),((i<0||i>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+i]))){  ?�m=o(new($ptrType($Int))(function(){return j;},function($v){j=$v;}),b,d);    }else{  ?�m=o(new($ptrType($Int))(function(){return i;},function($v){i=$v;}),a,c);    }  ?�    if(!m){  @return[Y,Z];    }    }  @ return[k,l];    }catch(err){$err=err;return[($sliceType($Int32)).nil,($sliceType($Uint32)).nil];}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}; 0
c=this;  J-return((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a])<((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]);    };$ptrType(AD).prototype.Less=function(a,b){return this.$get().Less(a,b);}; 0	runeSlice0regexp:runeSlice 0�((regexp.runeSlice).Swap0 ��AD.prototype.Swap=function(a,b){var c,d,e;  JHc=this;  Jkd=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]);e=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]);(a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]=d;(b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]=e;    };$ptrType(AD).prototype.Swap=function(a,b){return this.$get().Swap(a,b);}; 0	runeSlice0regexp:runeSlice 0��(regexp.runeSlice).Sort0 ��AD.prototype.Sort=function(){var a;  J�a=this;  J�E.Sort(a);    };$ptrType(AD).prototype.Sort=function(){return this.$get().Sort();}; 0	runeSlice0regexp:runeSlice	sort:Sort 0�"�regexp.makeOnePass0AG�!{AG=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;  M%    if(a.Inst.$length>=1000){  M@return AJ;    }  MW  M_b=X(a.Inst.$length);  M�c=X(a.Inst.$length);  M�d=$throwNilPointerError;  M�e=$throwNilPointerError;  N
f=($sliceType(($sliceType($Int32)))).make(a.Inst.$length);  N9d=(function(g,h){var i,j,k;  Nf    if(h.contains(g)){  N}return;    }  N�j=new S.Ptr();$copy(j,(i=a.Inst,((g<0||g>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+g])),S);  N�k=j.Inst.Op;  N�if(k===0||k===1){  N�h.insert(j.Inst.Out);  N�d(j.Inst.Out,h);  Oh.insert(j.Inst.Arg);      O }else if(k===4||k===5){    }else{  OVh.insert(j.Inst.Out);    }    });  O�e=(function(g,h){var i=false,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf;  Pi=true;  P(k=(j=a.Inst,((g<0||g>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+g]));  P>    if(c.contains(g)){  P^return i;    }  Pkc.insert(g);  P�l=k.Inst.Op;  P�switch(0){default:if(l===0||l===1){  P�i=e(k.Inst.Out,h)&&e(k.Inst.Arg,h);  Qn=(m=h[k.Inst.Out],m!==undefined?m.v:false);  Q7p=(o=h[k.Inst.Arg],o!==undefined?o.v:false);  QR    if(n&&p){  Qpi=false;  Qbreak;    }  Q�    if(p){  Q�q=k.Inst.Arg;r=k.Inst.Out;k.Inst.Out=q;k.Inst.Arg=r;  Q�s=p;t=n;n=s;p=t;    }  R!    if(n){  R3u=g;(h||$throwRuntimeError("assignment to entry in nil map"))[u]={k:u,v:true};  RDk.Inst.Op=1;    }  R�v=AA(new($ptrType(($sliceType($Int32))))(function(){return(x=k.Inst.Out,((x<0||x>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+x]));},function($v){(w=k.Inst.Out,(w<0||w>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+w]=$v);},f),new($ptrType(($sliceType($Int32))))(function(){return(z=k.Inst.Arg,((z<0||z>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+z]));},function($v){(y=k.Inst.Arg,(y<0||y>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+y]=$v);},f),k.Inst.Out,k.Inst.Arg);(g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g]=v[0];k.Next=v[1];  S#    if(k.Next.$length>0&&((aa=k.Next,((0<0||0>=aa.$length)?$throwRuntimeError("index out of range"):aa.$array[aa.$offset+0]))===4294967295)){  S^i=false;  Smbreak;    }      Sz}else if(l===2||l===6){  S�i=e(k.Inst.Out,h);  S�ab=g;(h||$throwRuntimeError("assignment to entry in nil map"))[ab]={k:ab,v:(ac=h[k.Inst.Out],ac!==undefined?ac.v:false)};  T
sync:Mutexunicode/utf8:DecodeRuneInString 0�(*regexp.Regexp).get0 ��AM.Ptr.prototype.get=function(){var a,b,c,d,e,f;  �]a=this;  �{a.mu.Lock();  ��  ��b=a.machine.$length;    if(b>0){  ��e=(c=a.machine,d=b-1>>0,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]));  ��a.machine=$subslice(a.machine,0,(b-1>>0));  ��a.mu.Unlock();  ��return e;    }  �a.mu.Unlock();  �f=P(a.prog,a.onepass);  �8f.re=a;  �Creturn f;    };AM.prototype.get=function(){return this.$val.get();}; 0
inputBytesstep0,regexp:inputBytesunicode/utf8:DecodeRune 0�#(*regexp.inputBytes).canCheckPrefix0 ��AV.Ptr.prototype.canCheckPrefix=function(){var a;  ��a=this;  � return true;    };AV.prototype.canCheckPrefix=function(){return this.$val.canCheckPrefix();}; 0
inputBytescanCheckPrefix0regexp:inputBytes 0�(*regexp.inputBytes).hasPrefix0 ��AV.Ptr.prototype.hasPrefix=function(a){var b;  �5b=this;  �breturn D.HasPrefix(b.str,a.prefixBytes);    };AV.prototype.hasPrefix=function(a){return this.$val.hasPrefix(a);}; 0
inputBytes	hasPrefix0$bytes:HasPrefixregexp:inputBytes 0�(*regexp.inputBytes).index0 ��AV.Ptr.prototype.index=function(a,b){var c;  ��c=this;  ��return D.Index($subslice(c.str,b),a.prefixBytes);    };AV.prototype.index=function(a,b){return this.$val.index(a,b);}; 0
inputBytesindex0 bytes:Indexregexp:inputBytes 0�(*regexp.inputBytes).context0 �tAV.Ptr.prototype.context=function(a){var b,c,d,e,f,g,h;  �b=this;  �5c=-1;d=-1;e=c;f=d;  �U    if(a>0&&a<=b.str.$length){  �yg=J.DecodeLastRune($subslice(b.str,0,a));e=g[0];    }  ��    if(a<b.str.$length){  ��h=J.DecodeRune($subslice(b.str,a));f=h[0];    }  ��return C.EmptyOpContext(e,f);    };AV.prototype.context=function(a){return this.$val.context(a);}; 0
inputBytescontext0gregexp/syntax:EmptyOpContextregexp:inputBytesunicode/utf8:DecodeLastRuneunicode/utf8:DecodeRune 0��(*regexp.inputReader).step0 �iAW.Ptr.prototype.step=function(a){var b,c,d,e,f;  ��b=this;  ��    if(!b.atEOT&&!((a===b.pos))){  ��return[-1,0];    }  ��c=b.r.ReadRune();d=c[0];e=c[1];f=c[2];  �    if(!($interfaceIsEqual(f,$ifaceNil))){  �b.atEOT=true;  �'return[-1,0];    }  �?b.pos=b.pos+(e)>>0;  �Kreturn[d,e];    };AW.prototype.step=function(a){return this.$val.step(a);}; 0inputReaderstep0regexp:inputReader 0�$(*regexp.inputReader).canCheckPrefix0 ��AW.Ptr.prototype.canCheckPrefix=function(){var a;  �`a=this;  ��return false;    };AW.prototype.canCheckPrefix=function(){return this.$val.canCheckPrefix();}; 0inputReadercanCheckPrefix0regexp:inputReader 0��(*regexp.inputReader).hasPrefix0 ��AW.Ptr.prototype.hasPrefix=function(a){var b;  ��b=this;  ��return false;    };AW.prototype.hasPrefix=function(a){return this.$val.hasPrefix(a);}; 0inputReader	hasPrefix0regexp:inputReader 0��(*regexp.inputReader).index0 ��AW.Ptr.prototype.index=function(a,b){var c;  ��c=this;  �return-1;    };AW.prototype.index=function(a,b){return this.$val.index(a,b);}; 0inputReaderindex0regexp:inputReader 0��(*regexp.inputReader).context0 ��AW.Ptr.prototype.context=function(a){var b;  �(b=this;  �[return 0;    };AW.prototype.context=function(a){return this.$val.context(a);}; 0inputReadercontext0regexp:inputReader 0�(*regexp.Regexp).LiteralPrefix0 ��AM.Ptr.prototype.LiteralPrefix=function(){var a="",b=false,c,d,e;  �1c=this;  �o    d=c.prefix;e=c.prefixComplete;a=d;b=e;return[a,b];    };AM.prototype.LiteralPrefix=function(){return this.$val.LiteralPrefix();}; 0Regexp0
replaceAll0[
  �g=0;h=0;i=-1;j=g;k=h;l=i;while(k<c&&j<=f){  �Im=e.doExecute($ifaceNil,b,a,j,e.prog.NumCap);  ��    if(m.$length===0){  ��break;    }  ��n=true;  ��    if(((1<0||1>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+1])===j){  ��    if(((0<0||0>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+0])===l){  �sn=false;    }  ��  ��o=0;  ��    if(b===($sliceType($Uint8)).nil){  ��p=J.DecodeRuneInString(a.substring(j,f));o=p[1];    }else{  �q=J.DecodeRune($subslice(b,j,f));o=q[1];    }  �2    if(o>0){  �Ej=j+(o)>>0;    }else{  �bj=f+1>>0;    }    }else{  ��j=((1<0||1>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+1]);    }  ��l=((1<0||1>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+1]);  ��    if(n){  ��d(e.pad(m));  ��  ��k=k+(1)>>0;    }    }    };AM.prototype.allMatches=function(a,b,c,d){return this.$val.allMatches(a,b,c,d);}; 0Regexp
allMatches0g
regexp:padunicode/utf8:DecodeRuneunicode/utf8:DecodeRuneInString 0�(*regexp.Regexp).Find0 ��AM.Ptr.prototype.Find=function(a){var b,c;  ��b=this;  ��c=b.doExecute($ifaceNil,a,"",0,2);  ��    if(c===($sliceType($Int)).nil){  ��return($sliceType($Uint8)).nil;    }  ��return $subslice(a,((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0]),((1<0||1>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+1]));    };AM.prototype.Find=function(a){return this.$val.Find(a);}; 0Regexp0!
(*regexp.Regexp).Expand0 ��AM.Ptr.prototype.Expand=function(a,b,c,d){var e;  �ve=this;  ��return e.expand(a,$bytesToString(b),c,"",d);    };AM.prototype.Expand=function(a,b,c,d){return this.$val.Expand(a,b,c,d);}; 0Regexp0
�AM.Ptr.prototype.expand=function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  �Mf=this;  ɭwhile(b.length>0){  ��g=H.Index(b,"$");  ��    if(g<0){  ��break;    }  �a=$appendSlice(a,new($sliceType($Uint8))($stringToBytes(b.substring(0,g))));  �*b=b.substring(g);  �D    if(b.length>1&&(b.charCodeAt(1)===36)){  ʉa=$append(a,36);  ʣb=b.substring(2);  ʾcontinue;    }  ��h=BD(b);i=h[0];j=h[1];k=h[2];l=h[3];  ��    if(!l){  �*a=$append(a,36);  �Db=b.substring(1);  �_continue;    }  �nb=k;  ˀ    if(j>=0){  ˑ    if((((((2>>>16<<16)*j>>0)+(2<<16>>>16)*j)>>0)+1>>0)<e.$length&&(m=(((2>>>16<<16)*j>>0)+(2<<16>>>16)*j)>>0,((m<0||m>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+m]))>=0){  ��    if(!(c===($sliceType($Uint8)).nil)){  ��a=$appendSlice(a,$subslice(c,(n=(((2>>>16<<16)*j>>0)+(2<<16>>>16)*j)>>0,((n<0||n>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+n])),(o=((((2>>>16<<16)*j>>0)+(2<<16>>>16)*j)>>0)+1>>0,((o<0||o>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+o]))));    }else{  �$a=$appendSlice(a,new($sliceType($Uint8))($stringToBytes(d.substring((p=(((2>>>16<<16)*j>>0)+(2<<16>>>16)*j)>>0,((p<0||p>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+p])),(q=((((2>>>16<<16)*j>>0)+(2<<16>>>16)*j)>>0)+1>>0,((q<0||q>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+q]))))));    }    }    }else{  �tr=f.subexpNames;s=0;while(s<r.$length){t=s;u=((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]);  ̟    if(i===u&&(((((2>>>16<<16)*t>>0)+(2<<16>>>16)*t)>>0)+1>>0)<e.$length&&(v=(((2>>>16<<16)*t>>0)+(2<<16>>>16)*t)>>0,((v<0||v>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+v]))>=0){  ��    if(!(c===($sliceType($Uint8)).nil)){  ��a=$appendSlice(a,$subslice(c,(w=(((2>>>16<<16)*t>>0)+(2<<16>>>16)*t)>>0,((w<0||w>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+w])),(x=((((2>>>16<<16)*t>>0)+(2<<16>>>16)*t)>>0)+1>>0,((x<0||x>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+x]))));    }else{  �?a=$appendSlice(a,new($sliceType($Uint8))($stringToBytes(d.substring((y=(((2>>>16<<16)*t>>0)+(2<<16>>>16)*t)>>0,((y<0||y>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+y])),(z=((((2>>>16<<16)*t>>0)+(2<<16>>>16)*t)>>0)+1>>0,((z<0||z>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+z]))))));    }  �~break;    }    s++;}    }    }  ͗a=$appendSlice(a,new($sliceType($Uint8))($stringToBytes(b)));  ͷreturn a;    };AM.prototype.expand=function(a,b,c,d,e){return this.$val.expand(a,b,c,d,e);}; 0Regexpexpand0.
regexp:pad 0�U#(*regexp.Regexp).FindStringSubmatch0 ��AM.Ptr.prototype.FindStringSubmatch=function(a){var b,c,d,e,f,g,h,i,j;  ԃb=this;  Ըc=b.doExecute($ifaceNil,($sliceType($Uint8)).nil,a,0,b.prog.NumCap);  ��    if(c===($sliceType($Int)).nil){  ��return($sliceType($String)).nil;    }  �
d=($sliceType($String)).make((1+b.numSubexp>>0));  �1e=d;f=0;while(f<e.$length){g=f;  �H    if(((((2>>>16<<16)*g>>0)+(2<<16>>>16)*g)>>0)<c.$length&&(h=(((2>>>16<<16)*g>>0)+(2<<16>>>16)*g)>>0,((h<0||h>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+h]))>=0){  �l(g<0||g>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+g]=a.substring((i=(((2>>>16<<16)*g>>0)+(2<<16>>>16)*g)>>0,((i<0||i>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+i])),(j=((((2>>>16<<16)*g>>0)+(2<<16>>>16)*g)>>0)+1>>0,((j<0||j>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+j])));    }    f++;}  Րreturn d;    };AM.prototype.FindStringSubmatch=function(a){return this.$val.FindStringSubmatch(a);}; 0Regexp0!
regexp:pad 0�h((*regexp.Regexp).FindReaderSubmatchIndex0 ��AM.Ptr.prototype.FindReaderSubmatchIndex=function(a){var b;  ئb=this;  ��return b.pad(b.doExecute(a,($sliceType($Uint8)).nil,"",0,b.prog.NumCap));    };AM.prototype.FindReaderSubmatchIndex=function(a){return this.$val.FindReaderSubmatchIndex(a);}; 0Regexp0-
regexp:pad 0��(*regexp.Regexp).FindAll0 �BAM.Ptr.prototype.FindAll=function(a,b){var c,d;  �Sc=this;  ڄ    if(b<0){  ڑb=a.$length+1>>0;    }  ڤd=($sliceType(($sliceType($Uint8)))).make(0,10);  ��c.allMatches("",a,b,(function(e){  ��d=$append(d,$subslice(a,((0<0||0>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+0]),((1<0||1>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+1])));    }));  �-    if(d.$length===0){  �Ereturn($sliceType(($sliceType($Uint8)))).nil;    }  �Treturn d;    };AM.prototype.FindAll=function(a,b){return this.$val.FindAll(a,b);}; 0Regexp0"
 �