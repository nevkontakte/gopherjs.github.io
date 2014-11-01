0���net/http��package http
import bufio "bufio"
import bytes "bytes"
import errors "errors"
import fmt "fmt"
import io "io"
import base64 "encoding/base64"
import ioutil "io/ioutil"
import log "log"
import url "net/url"
import strings "strings"
import sync "sync"
import time "time"
import net "net"
import strconv "strconv"
import mime "mime"
import multipart "mime/multipart"
import textproto "net/textproto"
import os "os"
import path "path"
import filepath "path/filepath"
import sort "sort"
import tls "crypto/tls"
import runtime "runtime"
import atomic "sync/atomic"
import binary "encoding/binary"
import gzip "compress/gzip"
func @"".CanonicalHeaderKey(@"".s string) (? string)
type @"".Client struct { @"".Transport @"".RoundTripper; @"".CheckRedirect func (@"".req *@"".Request, @"".via []*@"".Request) (? error); @"".Jar @"".CookieJar; @"".Timeout @"time".Duration }
func (? *@"".Client) @"".Do(@"".req *@"".Request) (@"".resp *@"".Response, @"".err error)
func (? *@"".Client) @"".Get(@"".url string) (@"".resp *@"".Response, @"".err error)
func (? *@"".Client) @"".Head(@"".url string) (@"".resp *@"".Response, @"".err error)
func (? *@"".Client) @"".Post(@"".url string, @"".bodyType string, @"".body @"io".Reader) (@"".resp *@"".Response, @"".err error)
func (? *@"".Client) @"".PostForm(@"".url string, @"".data @"net/url".Values) (@"".resp *@"".Response, @"".err error)
func (? *@"".Client) @"".doFollowingRedirects(@"".ireq *@"".Request, @"".shouldRedirect func (? int) (? bool)) (@"".resp *@"".Response, @"".err error)
func (? *@"".Client) @"".send(@"".req *@"".Request) (? *@"".Response, ? error)
func (? *@"".Client) @"".transport() (? @"".RoundTripper)
type @"".CloseNotifier interface { @"".CloseNotify() (? <-chan bool) }
type @"".ConnState int
func (? @"".ConnState) @"".String() (? string)
func (? *@"".ConnState) @"".String() (? string)
type @"".Cookie struct { @"".Name string; @"".Value string; @"".Path string; @"".Domain string; @"".Expires @"time".Time; @"".RawExpires string; @"".MaxAge int; @"".Secure bool; @"".HttpOnly bool; @"".Raw string; @"".Unparsed []string }
func (? *@"".Cookie) @"".String() (? string)
type @"".CookieJar interface { @"".Cookies(@"".u *@"net/url".URL) (? []*@"".Cookie); @"".SetCookies(@"".u *@"net/url".URL, @"".cookies []*@"".Cookie) () }
var @"".DefaultClient *@"".Client
const @"".DefaultMaxHeaderBytes = 0x100000
const @"".DefaultMaxIdleConnsPerHost = 0x2
var @"".DefaultServeMux *@"".ServeMux
var @"".DefaultTransport @"".RoundTripper
func @"".DetectContentType(@"".data []byte) (? string)
type @"".Dir string
func (? @"".Dir) @"".Open(@"".name string) (? @"".File, ? error)
func (? *@"".Dir) @"".Open(@"".name string) (? @"".File, ? error)
var @"".ErrBodyNotAllowed error
var @"".ErrBodyReadAfterClose error
var @"".ErrContentLength error
var @"".ErrHandlerTimeout error
var @"".ErrHeaderTooLong *@"".ProtocolError
var @"".ErrHijacked error
var @"".ErrLineTooLong error
var @"".ErrMissingBoundary *@"".ProtocolError
var @"".ErrMissingContentLength *@"".ProtocolError
var @"".ErrMissingFile error
var @"".ErrNoCookie error
var @"".ErrNoLocation error
var @"".ErrNotMultipart *@"".ProtocolError
var @"".ErrNotSupported *@"".ProtocolError
var @"".ErrShortBody *@"".ProtocolError
var @"".ErrUnexpectedTrailer *@"".ProtocolError
var @"".ErrWriteAfterFlush error
func @"".Error(@"".w @"".ResponseWriter, @"".error string, @"".code int) ()
type @"".File interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"".Readdir(@"".count int) (? []@"os".FileInfo, ? error); @"".Seek(@"".offset int64, @"".whence int) (? int64, ? error); @"".Stat() (? @"os".FileInfo, ? error) }
func @"".FileServer(@"".root @"".FileSystem) (? @"".Handler)
type @"".FileSystem interface { @"".Open(@"".name string) (? @"".File, ? error) }
type @"".Flusher interface { @"".Flush() () }
func @"".Get(@"".url string) (@"".resp *@"".Response, @"".err error)
func @"".Handle(@"".pattern string, @"".handler @"".Handler) ()
func @"".HandleFunc(@"".pattern string, @"".handler func (? @"".ResponseWriter, ? *@"".Request) ()) ()
type @"".Handler interface { @"".ServeHTTP(? @"".ResponseWriter, ? *@"".Request) () }
type @"".HandlerFunc func (? @"".ResponseWriter, ? *@"".Request) ()
func (? @"".HandlerFunc) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
func (? *@"".HandlerFunc) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
func @"".Head(@"".url string) (@"".resp *@"".Response, @"".err error)
type @"".Header map[string][]string
func (? @"".Header) @"".Add(@"".key string, @"".value string) ()
func (? @"".Header) @"".Del(@"".key string) ()
func (? @"".Header) @"".Get(@"".key string) (? string)
func (? @"".Header) @"".Set(@"".key string, @"".value string) ()
func (? @"".Header) @"".Write(@"".w @"io".Writer) (? error)
func (? @"".Header) @"".WriteSubset(@"".w @"io".Writer, @"".exclude map[string]bool) (? error)
func (? @"".Header) @"".clone() (? @"".Header)
func (? @"".Header) @"".get(@"".key string) (? string)
func (? @"".Header) @"".sortedKeyValues(@"".exclude map[string]bool) (@"".kvs []@"".keyValues, @"".hs *@"".headerSorter)
func (? *@"".Header) @"".Add(@"".key string, @"".value string) ()
func (? *@"".Header) @"".Del(@"".key string) ()
func (? *@"".Header) @"".Get(@"".key string) (? string)
func (? *@"".Header) @"".Set(@"".key string, @"".value string) ()
func (? *@"".Header) @"".Write(@"".w @"io".Writer) (? error)
func (? *@"".Header) @"".WriteSubset(@"".w @"io".Writer, @"".exclude map[string]bool) (? error)
func (? *@"".Header) @"".clone() (? @"".Header)
func (? *@"".Header) @"".get(@"".key string) (? string)
func (? *@"".Header) @"".sortedKeyValues(@"".exclude map[string]bool) (@"".kvs []@"".keyValues, @"".hs *@"".headerSorter)
type @"".Hijacker interface { @"".Hijack() (? @"net".Conn, ? *@"bufio".ReadWriter, ? error) }
func @"".ListenAndServe(@"".addr string, @"".handler @"".Handler) (? error)
func @"".ListenAndServeTLS(@"".addr string, @"".certFile string, @"".keyFile string, @"".handler @"".Handler) (? error)
func @"".MaxBytesReader(@"".w @"".ResponseWriter, @"".r @"io".ReadCloser, @"".n int64) (? @"io".ReadCloser)
func @"".NewFileTransport(@"".fs @"".FileSystem) (? @"".RoundTripper)
func @"".NewRequest(@"".method string, @"".urlStr string, @"".body @"io".Reader) (? *@"".Request, ? error)
func @"".NewServeMux() (? *@"".ServeMux)
func @"".NotFound(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
func @"".NotFoundHandler() (? @"".Handler)
func @"".ParseHTTPVersion(@"".vers string) (@"".major int, @"".minor int, @"".ok bool)
func @"".ParseTime(@"".text string) (@"".t @"time".Time, @"".err error)
func @"".Post(@"".url string, @"".bodyType string, @"".body @"io".Reader) (@"".resp *@"".Response, @"".err error)
func @"".PostForm(@"".url string, @"".data @"net/url".Values) (@"".resp *@"".Response, @"".err error)
type @"".ProtocolError struct { @"".ErrorString string }
func (? *@"".ProtocolError) @"".Error() (? string)
func @"".ProxyFromEnvironment(@"".req *@"".Request) (? *@"net/url".URL, ? error)
func @"".ProxyURL(@"".fixedURL *@"net/url".URL) (? func (? *@"".Request) (? *@"net/url".URL, ? error))
func @"".ReadRequest(@"".b *@"bufio".Reader) (@"".req *@"".Request, @"".err error)
func @"".ReadResponse(@"".r *@"bufio".Reader, @"".req *@"".Request) (? *@"".Response, ? error)
func @"".Redirect(@"".w @"".ResponseWriter, @"".r *@"".Request, @"".urlStr string, @"".code int) ()
func @"".RedirectHandler(@"".url string, @"".code int) (? @"".Handler)
type @"".Request struct { @"".Method string; @"".URL *@"net/url".URL; @"".Proto string; @"".ProtoMajor int; @"".ProtoMinor int; @"".Header @"".Header; @"".Body @"io".ReadCloser; @"".ContentLength int64; @"".TransferEncoding []string; @"".Close bool; @"".Host string; @"".Form @"net/url".Values; @"".PostForm @"net/url".Values; @"".MultipartForm *@"mime/multipart".Form; @"".Trailer @"".Header; @"".RemoteAddr string; @"".RequestURI string; @"".TLS *@"crypto/tls".ConnectionState }
func (? *@"".Request) @"".AddCookie(@"".c *@"".Cookie) ()
func (? *@"".Request) @"".Cookie(@"".name string) (? *@"".Cookie, ? error)
func (? *@"".Request) @"".Cookies() (? []*@"".Cookie)
func (? *@"".Request) @"".FormFile(@"".key string) (? @"mime/multipart".File, ? *@"mime/multipart".FileHeader, ? error)
func (? *@"".Request) @"".FormValue(@"".key string) (? string)
func (? *@"".Request) @"".MultipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"".Request) @"".ParseForm() (? error)
func (? *@"".Request) @"".ParseMultipartForm(@"".maxMemory int64) (? error)
func (? *@"".Request) @"".PostFormValue(@"".key string) (? string)
func (? *@"".Request) @"".ProtoAtLeast(@"".major int, @"".minor int) (? bool)
func (? *@"".Request) @"".Referer() (? string)
func (? *@"".Request) @"".SetBasicAuth(@"".username string, @"".password string) ()
func (? *@"".Request) @"".UserAgent() (? string)
func (? *@"".Request) @"".Write(@"".w @"io".Writer) (? error)
func (? *@"".Request) @"".WriteProxy(@"".w @"io".Writer) (? error)
func (? *@"".Request) @"".closeBody() ()
func (? *@"".Request) @"".expectsContinue() (? bool)
func (? *@"".Request) @"".multipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"".Request) @"".wantsClose() (? bool)
func (? *@"".Request) @"".wantsHttp10KeepAlive() (? bool)
func (? *@"".Request) @"".write(@"".w @"io".Writer, @"".usingProxy bool, @"".extraHeaders @"".Header) (? error)
type @"".Response struct { @"".Status string; @"".StatusCode int; @"".Proto string; @"".ProtoMajor int; @"".ProtoMinor int; @"".Header @"".Header; @"".Body @"io".ReadCloser; @"".ContentLength int64; @"".TransferEncoding []string; @"".Close bool; @"".Trailer @"".Header; @"".Request *@"".Request; @"".TLS *@"crypto/tls".ConnectionState }
func (? *@"".Response) @"".Cookies() (? []*@"".Cookie)
func (? *@"".Response) @"".Location() (? *@"net/url".URL, ? error)
func (? *@"".Response) @"".ProtoAtLeast(@"".major int, @"".minor int) (? bool)
func (? *@"".Response) @"".Write(@"".w @"io".Writer) (? error)
type @"".ResponseWriter interface { @"".Header() (? @"".Header); @"".Write(? []byte) (? int, ? error); @"".WriteHeader(? int) () }
type @"".RoundTripper interface { @"".RoundTrip(? *@"".Request) (? *@"".Response, ? error) }
func @"".Serve(@"".l @"net".Listener, @"".handler @"".Handler) (? error)
func @"".ServeContent(@"".w @"".ResponseWriter, @"".req *@"".Request, @"".name string, @"".modtime @"time".Time, @"".content @"io".ReadSeeker) ()
func @"".ServeFile(@"".w @"".ResponseWriter, @"".r *@"".Request, @"".name string) ()
type @"".ServeMux struct { @"".mu @"sync".RWMutex; @"".m map[string]@"".muxEntry; @"".hosts bool }
func (? *@"".ServeMux) @"".Handle(@"".pattern string, @"".handler @"".Handler) ()
func (? *@"".ServeMux) @"".HandleFunc(@"".pattern string, @"".handler func (? @"".ResponseWriter, ? *@"".Request) ()) ()
func (? *@"".ServeMux) @"".Handler(@"".r *@"".Request) (@"".h @"".Handler, @"".pattern string)
func (? *@"".ServeMux) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
func (? *@"".ServeMux) @"".handler(@"".host string, @"".path string) (@"".h @"".Handler, @"".pattern string)
func (? *@"".ServeMux) @"".match(@"".path string) (@"".h @"".Handler, @"".pattern string)
type @"".Server struct { @"".Addr string; @"".Handler @"".Handler; @"".ReadTimeout @"time".Duration; @"".WriteTimeout @"time".Duration; @"".MaxHeaderBytes int; @"".TLSConfig *@"crypto/tls".Config; @"".TLSNextProto map[string]func (? *@"".Server, ? *@"crypto/tls".Conn, ? @"".Handler) (); @"".ConnState func (? @"net".Conn, ? @"".ConnState) (); @"".ErrorLog *@"log".Logger; @"".disableKeepAlives int32 }
func (? *@"".Server) @"".ListenAndServe() (? error)
func (? *@"".Server) @"".ListenAndServeTLS(@"".certFile string, @"".keyFile string) (? error)
func (? *@"".Server) @"".Serve(@"".l @"net".Listener) (? error)
func (? *@"".Server) @"".SetKeepAlivesEnabled(@"".v bool) ()
func (? *@"".Server) @"".doKeepAlives() (? bool)
func (? *@"".Server) @"".initialLimitedReaderSize() (? int64)
func (? *@"".Server) @"".logf(@"".format string, @"".args ...interface {  }) ()
func (? *@"".Server) @"".maxHeaderBytes() (? int)
func (? *@"".Server) @"".newConn(@"".rwc @"net".Conn) (@"".c *@"".conn, @"".err error)
func @"".SetCookie(@"".w @"".ResponseWriter, @"".cookie *@"".Cookie) ()
const @"".StateActive @"".ConnState = 0x1
const @"".StateClosed @"".ConnState = 0x4
const @"".StateHijacked @"".ConnState = 0x3
const @"".StateIdle @"".ConnState = 0x2
const @"".StateNew @"".ConnState = 0x0
const @"".StatusAccepted = 0xca
const @"".StatusBadGateway = 0x1f6
const @"".StatusBadRequest = 0x190
const @"".StatusConflict = 0x199
const @"".StatusContinue = 0x64
const @"".StatusCreated = 0xc9
const @"".StatusExpectationFailed = 0x1a1
const @"".StatusForbidden = 0x193
const @"".StatusFound = 0x12e
const @"".StatusGatewayTimeout = 0x1f8
const @"".StatusGone = 0x19a
const @"".StatusHTTPVersionNotSupported = 0x1f9
const @"".StatusInternalServerError = 0x1f4
const @"".StatusLengthRequired = 0x19b
const @"".StatusMethodNotAllowed = 0x195
const @"".StatusMovedPermanently = 0x12d
const @"".StatusMultipleChoices = 0x12c
const @"".StatusNoContent = 0xcc
const @"".StatusNonAuthoritativeInfo = 0xcb
const @"".StatusNotAcceptable = 0x196
const @"".StatusNotFound = 0x194
const @"".StatusNotImplemented = 0x1f5
const @"".StatusNotModified = 0x130
const @"".StatusOK = 0xc8
const @"".StatusPartialContent = 0xce
const @"".StatusPaymentRequired = 0x192
const @"".StatusPreconditionFailed = 0x19c
const @"".StatusProxyAuthRequired = 0x197
const @"".StatusRequestEntityTooLarge = 0x19d
const @"".StatusRequestTimeout = 0x198
const @"".StatusRequestURITooLong = 0x19e
const @"".StatusRequestedRangeNotSatisfiable = 0x1a0
const @"".StatusResetContent = 0xcd
const @"".StatusSeeOther = 0x12f
const @"".StatusServiceUnavailable = 0x1f7
const @"".StatusSwitchingProtocols = 0x65
const @"".StatusTeapot = 0x1a2
const @"".StatusTemporaryRedirect = 0x133
func @"".StatusText(@"".code int) (? string)
const @"".StatusUnauthorized = 0x191
const @"".StatusUnsupportedMediaType = 0x19f
const @"".StatusUseProxy = 0x131
func @"".StripPrefix(@"".prefix string, @"".h @"".Handler) (? @"".Handler)
const @"".TimeFormat = "Mon, 02 Jan 2006 15:04:05 GMT"
func @"".TimeoutHandler(@"".h @"".Handler, @"".dt @"time".Duration, @"".msg string) (? @"".Handler)
type @"".Transport struct { @"".idleMu @"sync".Mutex; @"".idleConn map[@"".connectMethodKey][]*@"".persistConn; @"".idleConnCh map[@"".connectMethodKey]chan *@"".persistConn; @"".reqMu @"sync".Mutex; @"".reqCanceler map[*@"".Request]func () (); @"".altMu @"sync".RWMutex; @"".altProto map[string]@"".RoundTripper; @"".Proxy func (? *@"".Request) (? *@"net/url".URL, ? error); @"".Dial func (@"".network string, @"".addr string) (? @"net".Conn, ? error); @"".TLSClientConfig *@"crypto/tls".Config; @"".TLSHandshakeTimeout @"time".Duration; @"".DisableKeepAlives bool; @"".DisableCompression bool; @"".MaxIdleConnsPerHost int; @"".ResponseHeaderTimeout @"time".Duration }
func (? *@"".Transport) @"".CancelRequest(@"".req *@"".Request) ()
func (? *@"".Transport) @"".CloseIdleConnections() ()
func (? *@"".Transport) @"".RegisterProtocol(@"".scheme string, @"".rt @"".RoundTripper) ()
func (? *@"".Transport) @"".RoundTrip(@"".req *@"".Request) (@"".resp *@"".Response, @"".err error)
func (? *@"".Transport) @"".connectMethodForRequest(@"".treq *@"".transportRequest) (@"".cm @"".connectMethod, @"".err error)
func (? *@"".Transport) @"".dial(@"".network string, @"".addr string) (@"".c @"net".Conn, @"".err error)
func (? *@"".Transport) @"".dialConn(@"".cm @"".connectMethod) (? *@"".persistConn, ? error)
func (? *@"".Transport) @"".getConn(@"".req *@"".Request, @"".cm @"".connectMethod) (? *@"".persistConn, ? error)
func (? *@"".Transport) @"".getIdleConn(@"".cm @"".connectMethod) (@"".pconn *@"".persistConn)
func (? *@"".Transport) @"".getIdleConnCh(@"".cm @"".connectMethod) (? chan *@"".persistConn)
func (? *@"".Transport) @"".putIdleConn(@"".pconn *@"".persistConn) (? bool)
func (? *@"".Transport) @"".setReqCanceler(@"".r *@"".Request, @"".fn func () ()) ()
type @"".badStringError struct { @"".what string; @"".str string }
func (? *@"".badStringError) @"".Error() (? string)
type @"".body struct { @"".src @"io".Reader; @"".hdr interface {  }; @"".r *@"bufio".Reader; @"".closing bool; @"".mu @"sync".Mutex; @"".closed bool }
func (? *@"".body) @"".Close() (? error)
func (? *@"".body) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".body) @"".readLocked(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".body) @"".readTrailer() (? error)
type @"".bodyEOFSignal struct { @"".body @"io".ReadCloser; @"".mu @"sync".Mutex; @"".closed bool; @"".rerr error; @"".fn func (? error) (); @"".earlyCloseFn func () (? error) }
func (? *@"".bodyEOFSignal) @"".Close() (? error)
func (? *@"".bodyEOFSignal) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".bodyEOFSignal) @"".condfn(@"".err error) ()
type @"".bodyLocked struct { @"".b *@"".body }
func (? @"".bodyLocked) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".bodyLocked) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".cancelTimerBody struct { @"".t *@"time".Timer; @"".rc @"io".ReadCloser }
func (? *@"".cancelTimerBody) @"".Close() (? error)
func (? *@"".cancelTimerBody) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".chunkWriter struct { @"".res *@"".response; @"".header @"".Header; @"".wroteHeader bool; @"".chunking bool }
func (? *@"".chunkWriter) @"".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".chunkWriter) @"".close() ()
func (? *@"".chunkWriter) @"".flush() ()
func (? *@"".chunkWriter) @"".writeHeader(@"".p []byte) ()
type @"".chunkedReader struct { @"".r *@"bufio".Reader; @"".n uint64; @"".err error; @"".buf [2]byte }
func (? *@"".chunkedReader) @"".Read(@"".b []uint8) (@"".n int, @"".err error)
func (? *@"".chunkedReader) @"".beginChunk() ()
func (? *@"".chunkedReader) @"".chunkHeaderAvailable() (? bool)
type @"".chunkedWriter struct { @"".Wire @"io".Writer }
func (? *@"".chunkedWriter) @"".Close() (? error)
func (? *@"".chunkedWriter) @"".Write(@"".data []byte) (@"".n int, @"".err error)
type @"".conn struct { @"".remoteAddr string; @"".server *@"".Server; @"".rwc @"net".Conn; @"".sr @"".liveSwitchReader; @"".lr *@"io".LimitedReader; @"".buf *@"bufio".ReadWriter; @"".tlsState *@"crypto/tls".ConnectionState; @"".mu @"sync".Mutex; @"".clientGone bool; @"".closeNotifyc chan bool; @"".hijackedv bool }
func (? *@"".conn) @"".close() ()
func (? *@"".conn) @"".closeNotify() (? <-chan bool)
func (? *@"".conn) @"".closeWriteAndWait() ()
func (? *@"".conn) @"".finalFlush() ()
func (? *@"".conn) @"".hijack() (@"".rwc @"net".Conn, @"".buf *@"bufio".ReadWriter, @"".err error)
func (? *@"".conn) @"".hijacked() (? bool)
func (? *@"".conn) @"".noteClientGone() ()
func (? *@"".conn) @"".readRequest() (@"".w *@"".response, @"".err error)
func (? *@"".conn) @"".serve() ()
func (? *@"".conn) @"".setState(@"".nc @"net".Conn, @"".state @"".ConnState) ()
type @"".connectMethod struct { @"".proxyURL *@"net/url".URL; @"".targetScheme string; @"".targetAddr string }
func (? *@"".connectMethod) @"".addr() (? string)
func (? *@"".connectMethod) @"".key() (? @"".connectMethodKey)
func (? *@"".connectMethod) @"".proxyAuth() (? string)
func (? *@"".connectMethod) @"".tlsHost() (? string)
type @"".connectMethodKey struct { @"".proxy string; @"".scheme string; @"".addr string }
func (? @"".connectMethodKey) @"".String() (? string)
func (? *@"".connectMethodKey) @"".String() (? string)
type @"".countingWriter int64
func (? *@"".countingWriter) @"".Write(@"".p []byte) (@"".n int, @"".err error)
type @"".envOnce struct { @"".names []string; @"".once @"sync".Once; @"".val string }
func (? *@"".envOnce) @"".Get() (? string)
func (? *@"".envOnce) @"".init() ()
func (? *@"".envOnce) @"".reset() ()
type @"".eofReaderWithWriteTo struct {  }
func (? @"".eofReaderWithWriteTo) @"".Read(? []byte) (? int, ? error)
func (? @"".eofReaderWithWriteTo) @"".WriteTo(? @"io".Writer) (? int64, ? error)
func (? *@"".eofReaderWithWriteTo) @"".Read(? []byte) (? int, ? error)
func (? *@"".eofReaderWithWriteTo) @"".WriteTo(? @"io".Writer) (? int64, ? error)
type @"".errorReader struct { @"".err error }
func (? *@"".errorReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".exactSig struct { @"".sig []byte; @"".ct string }
func (? *@"".exactSig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
type @"".expectContinueReader struct { @"".resp *@"".response; @"".readCloser @"io".ReadCloser; @"".closed bool }
func (? *@"".expectContinueReader) @"".Close() (? error)
func (? *@"".expectContinueReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".extraHeader struct { @"".contentType string; @"".connection string; @"".transferEncoding string; @"".date []byte; @"".contentLength []byte }
func (? @"".extraHeader) @"".Write(@"".w *@"bufio".Writer) ()
func (? *@"".extraHeader) @"".Write(@"".w *@"bufio".Writer) ()
type @"".fileHandler struct { @"".root @"".FileSystem }
func (? *@"".fileHandler) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
type @"".fileTransport struct { @"".fh @"".fileHandler }
func (? @"".fileTransport) @"".RoundTrip(@"".req *@"".Request) (@"".resp *@"".Response, @"".err error)
func (? *@"".fileTransport) @"".RoundTrip(@"".req *@"".Request) (@"".resp *@"".Response, @"".err error)
type @"".globalOptionsHandler struct {  }
func (? @"".globalOptionsHandler) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
func (? *@"".globalOptionsHandler) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
type @"".gzipReader struct { @"".body @"io".ReadCloser; @"".zr @"io".Reader }
func (? *@"".gzipReader) @"".Close() (? error)
func (? *@"".gzipReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".headerSorter struct { @"".kvs []@"".keyValues }
func (? *@"".headerSorter) @"".Len() (? int)
func (? *@"".headerSorter) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".headerSorter) @"".Swap(@"".i int, @"".j int) ()
type @"".htmlSig []byte
func (? @"".htmlSig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
func (? *@"".htmlSig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
type @"".httpError struct { @"".err string; @"".timeout bool }
func (? *@"".httpError) @"".Error() (? string)
func (? *@"".httpError) @"".Temporary() (? bool)
func (? *@"".httpError) @"".Timeout() (? bool)
type @"".httpRange struct { @"".start int64; @"".length int64 }
func (? @"".httpRange) @"".contentRange(@"".size int64) (? string)
func (? @"".httpRange) @"".mimeHeader(@"".contentType string, @"".size int64) (? @"net/textproto".MIMEHeader)
func (? *@"".httpRange) @"".contentRange(@"".size int64) (? string)
func (? *@"".httpRange) @"".mimeHeader(@"".contentType string, @"".size int64) (? @"net/textproto".MIMEHeader)
type @"".initNPNRequest struct { @"".c *@"crypto/tls".Conn; @"".h @"".serverHandler }
func (? @"".initNPNRequest) @"".ServeHTTP(@"".rw @"".ResponseWriter, @"".req *@"".Request) ()
func (? *@"".initNPNRequest) @"".ServeHTTP(@"".rw @"".ResponseWriter, @"".req *@"".Request) ()
type @"".keyValues struct { @"".key string; @"".values []string }
type @"".liveSwitchReader struct { ? @"sync".Mutex; @"".r @"io".Reader }
func (? *@"".liveSwitchReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".loggingConn struct { @"".name string; ? @"net".Conn }
func (? *@"".loggingConn) @"".Close() (@"".err error)
func (? *@"".loggingConn) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".loggingConn) @"".Write(@"".p []byte) (@"".n int, @"".err error)
type @"".maskedSig struct { @"".mask []byte; @"".pat []byte; @"".skipWS bool; @"".ct string }
func (? *@"".maskedSig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
type @"".maxBytesReader struct { @"".w @"".ResponseWriter; @"".r @"io".ReadCloser; @"".n int64; @"".stopped bool }
func (? *@"".maxBytesReader) @"".Close() (? error)
func (? *@"".maxBytesReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".mp4Sig int
func (? @"".mp4Sig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
func (? *@"".mp4Sig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
type @"".muxEntry struct { @"".explicit bool; @"".h @"".Handler; @"".pattern string }
type @"".noteEOFReader struct { @"".r @"io".Reader; @"".sawEOF *bool }
func (? @"".noteEOFReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".noteEOFReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".persistConn struct { @"".t *@"".Transport; @"".cacheKey @"".connectMethodKey; @"".conn @"net".Conn; @"".tlsState *@"crypto/tls".ConnectionState; @"".br *@"bufio".Reader; @"".sawEOF bool; @"".bw *@"bufio".Writer; @"".reqch chan @"".requestAndChan; @"".writech chan @"".writeRequest; @"".closech chan struct {  }; @"".isProxy bool; @"".writeErrCh chan error; @"".lk @"sync".Mutex; @"".numExpectedResponses int; @"".closed bool; @"".broken bool; @"".mutateHeaderFunc func (? @"".Header) () }
func (? *@"".persistConn) @"".cancelRequest() ()
func (? *@"".persistConn) @"".close() ()
func (? *@"".persistConn) @"".closeLocked() ()
func (? *@"".persistConn) @"".isBroken() (? bool)
func (? *@"".persistConn) @"".markBroken() ()
func (? *@"".persistConn) @"".readLoop() ()
func (? *@"".persistConn) @"".roundTrip(@"".req *@"".transportRequest) (@"".resp *@"".Response, @"".err error)
func (? *@"".persistConn) @"".writeLoop() ()
func (? *@"".persistConn) @"".wroteRequest() (? bool)
type @"".populateResponse struct { @"".res *@"".Response; @"".ch chan *@"".Response; @"".wroteHeader bool; @"".hasContent bool; @"".sentResponse bool; @"".pw *@"io".PipeWriter }
func (? *@"".populateResponse) @"".Header() (? @"".Header)
func (? *@"".populateResponse) @"".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".populateResponse) @"".WriteHeader(@"".code int) ()
func (? *@"".populateResponse) @"".finish() ()
func (? *@"".populateResponse) @"".sendResponse() ()
type @"".readClose struct { ? @"io".Reader; ? @"io".Closer }
type @"".readerAndCloser struct { ? @"io".Reader; ? @"io".Closer }
type @"".redirectHandler struct { @"".url string; @"".code int }
func (? *@"".redirectHandler) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
type @"".requestAndChan struct { @"".req *@"".Request; @"".ch chan @"".responseAndError; @"".addedGzip bool }
type @"".response struct { @"".conn *@"".conn; @"".req *@"".Request; @"".wroteHeader bool; @"".wroteContinue bool; @"".w *@"bufio".Writer; @"".cw @"".chunkWriter; @"".sw *@"".switchWriter; @"".handlerHeader @"".Header; @"".calledHeader bool; @"".written int64; @"".contentLength int64; @"".status int; @"".closeAfterReply bool; @"".requestBodyLimitHit bool; @"".handlerDone bool; @"".dateBuf [29]byte; @"".clenBuf [10]byte }
func (? *@"".response) @"".CloseNotify() (? <-chan bool)
func (? *@"".response) @"".Flush() ()
func (? *@"".response) @"".Header() (? @"".Header)
func (? *@"".response) @"".Hijack() (@"".rwc @"net".Conn, @"".buf *@"bufio".ReadWriter, @"".err error)
func (? *@"".response) @"".ReadFrom(@"".src @"io".Reader) (@"".n int64, @"".err error)
func (? *@"".response) @"".Write(@"".data []byte) (@"".n int, @"".err error)
func (? *@"".response) @"".WriteHeader(@"".code int) ()
func (? *@"".response) @"".WriteString(@"".data string) (@"".n int, @"".err error)
func (? *@"".response) @"".bodyAllowed() (? bool)
func (? *@"".response) @"".finishRequest() ()
func (? *@"".response) @"".needsSniff() (? bool)
func (? *@"".response) @"".requestTooLarge() ()
func (? *@"".response) @"".sendExpectationFailed() ()
func (? *@"".response) @"".write(@"".lenData int, @"".dataB []byte, @"".dataS string) (@"".n int, @"".err error)
type @"".responseAndError struct { @"".res *@"".Response; @"".err error }
type @"".serverHandler struct { @"".srv *@"".Server }
func (? @"".serverHandler) @"".ServeHTTP(@"".rw @"".ResponseWriter, @"".req *@"".Request) ()
func (? *@"".serverHandler) @"".ServeHTTP(@"".rw @"".ResponseWriter, @"".req *@"".Request) ()
type @"".sniffSig interface { @"".match(@"".data []byte, @"".firstNonWS int) (? string) }
type @"".stringWriter struct { @"".w @"io".Writer }
func (? @"".stringWriter) @"".WriteString(@"".s string) (@"".n int, @"".err error)
func (? *@"".stringWriter) @"".WriteString(@"".s string) (@"".n int, @"".err error)
type @"".switchReader struct { ? @"io".Reader }
type @"".switchWriter struct { ? @"io".Writer }
type @"".tcpKeepAliveListener struct { ? *@"net".TCPListener }
func (? @"".tcpKeepAliveListener) @"".Accept() (@"".c @"net".Conn, @"".err error)
func (? *@"".tcpKeepAliveListener) @"".Accept() (@"".c @"net".Conn, @"".err error)
type @"".textSig int
func (? @"".textSig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
func (? *@"".textSig) @"".match(@"".data []byte, @"".firstNonWS int) (? string)
type @"".timeoutHandler struct { @"".handler @"".Handler; @"".timeout func () (? <-chan @"time".Time); @"".body string }
func (? *@"".timeoutHandler) @"".ServeHTTP(@"".w @"".ResponseWriter, @"".r *@"".Request) ()
func (? *@"".timeoutHandler) @"".errorBody() (? string)
type @"".timeoutWriter struct { @"".w @"".ResponseWriter; @"".mu @"sync".Mutex; @"".timedOut bool; @"".wroteHeader bool }
func (? *@"".timeoutWriter) @"".Header() (? @"".Header)
func (? *@"".timeoutWriter) @"".Write(@"".p []byte) (? int, ? error)
func (? *@"".timeoutWriter) @"".WriteHeader(@"".code int) ()
type @"".tlsHandshakeTimeoutError struct {  }
func (? @"".tlsHandshakeTimeoutError) @"".Error() (? string)
func (? @"".tlsHandshakeTimeoutError) @"".Temporary() (? bool)
func (? @"".tlsHandshakeTimeoutError) @"".Timeout() (? bool)
func (? *@"".tlsHandshakeTimeoutError) @"".Error() (? string)
func (? *@"".tlsHandshakeTimeoutError) @"".Temporary() (? bool)
func (? *@"".tlsHandshakeTimeoutError) @"".Timeout() (? bool)
type @"".transferReader struct { @"".Header @"".Header; @"".StatusCode int; @"".RequestMethod string; @"".ProtoMajor int; @"".ProtoMinor int; @"".Body @"io".ReadCloser; @"".ContentLength int64; @"".TransferEncoding []string; @"".Close bool; @"".Trailer @"".Header }
type @"".transferWriter struct { @"".Method string; @"".Body @"io".Reader; @"".BodyCloser @"io".Closer; @"".ResponseToHEAD bool; @"".ContentLength int64; @"".Close bool; @"".TransferEncoding []string; @"".Trailer @"".Header }
func (? *@"".transferWriter) @"".WriteBody(@"".w @"io".Writer) (? error)
func (? *@"".transferWriter) @"".WriteHeader(@"".w @"io".Writer) (? error)
func (? *@"".transferWriter) @"".shouldSendContentLength() (? bool)
type @"".transportRequest struct { ? *@"".Request; @"".extra @"".Header }
func (? *@"".transportRequest) @"".extraHeaders() (? @"".Header)
type @"".writeRequest struct { @"".req *@"".transportRequest; @"".ch chan<- error }
type @"".writeStringer interface { @"".WriteString(? string) (? int, ? error) }
type @"".writerOnly struct { ? @"io".Writer }
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
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
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
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"net/url".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"net/url".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"bufio".ReadWriter struct { ? *@"bufio".Reader; ? *@"bufio".Writer }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"bufio".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"bufio".p []byte) (@"bufio".n int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"bufio".c byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"bufio".line []byte, @"bufio".isPrefix bool, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"bufio".r rune, @"bufio".size int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"bufio".delim byte) (@"bufio".line string, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"bufio".w @"io".Writer) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"bufio".buf []byte, @"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"bufio".w @"io".Writer) (? int64, ? error)
type @"mime/multipart".Form struct { @"mime/multipart".Value map[string][]string; @"mime/multipart".File map[string][]*@"mime/multipart".FileHeader }
func (? *@"mime/multipart".Form) @"mime/multipart".RemoveAll() (? error)
import x509 "crypto/x509"
type @"crypto/tls".ConnectionState struct { @"crypto/tls".Version uint16; @"crypto/tls".HandshakeComplete bool; @"crypto/tls".DidResume bool; @"crypto/tls".CipherSuite uint16; @"crypto/tls".NegotiatedProtocol string; @"crypto/tls".NegotiatedProtocolIsMutual bool; @"crypto/tls".ServerName string; @"crypto/tls".PeerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".VerifiedChains [][]*@"crypto/x509".Certificate }
type @"mime/multipart".File interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadAt(@"io".p []byte, @"io".off int64) (@"io".n int, @"io".err error); @"io".Seek(@"io".offset int64, @"io".whence int) (? int64, ? error) }
type @"mime/multipart".FileHeader struct { @"mime/multipart".Filename string; @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".content []byte; @"mime/multipart".tmpfile string }
func (? *@"mime/multipart".FileHeader) @"mime/multipart".Open() (? @"mime/multipart".File, ? error)
type @"mime/multipart".Reader struct { @"mime/multipart".bufReader *@"bufio".Reader; @"mime/multipart".currentPart *@"mime/multipart".Part; @"mime/multipart".partsRead int; @"mime/multipart".nl []byte; @"mime/multipart".nlDashBoundary []byte; @"mime/multipart".dashBoundaryDash []byte; @"mime/multipart".dashBoundary []byte }
func (? *@"mime/multipart".Reader) @"mime/multipart".NextPart() (? *@"mime/multipart".Part, ? error)
func (? *@"mime/multipart".Reader) @"mime/multipart".ReadForm(@"mime/multipart".maxMemory int64) (@"mime/multipart".f *@"mime/multipart".Form, @"mime/multipart".err error)
func (? *@"mime/multipart".Reader) @"mime/multipart".isBoundaryDelimiterLine(@"mime/multipart".line []byte) (@"mime/multipart".ret bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".isFinalBoundary(@"mime/multipart".line []byte) (? bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".peekBufferIsEmptyPart(@"mime/multipart".peek []byte) (? bool)
type @"net".Listener interface { @"net".Accept() (@"net".c @"net".Conn, @"net".err error); @"net".Addr() (? @"net".Addr); @"net".Close() (? error) }
type @"io".ReadSeeker interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".Seek(@"io".offset int64, @"io".whence int) (? int64, ? error) }
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
type @"crypto/tls".Config struct { @"crypto/tls".Rand @"io".Reader; @"crypto/tls".Time func () (? @"time".Time); @"crypto/tls".Certificates []@"crypto/tls".Certificate; @"crypto/tls".NameToCertificate map[string]*@"crypto/tls".Certificate; @"crypto/tls".RootCAs *@"crypto/x509".CertPool; @"crypto/tls".NextProtos []string; @"crypto/tls".ServerName string; @"crypto/tls".ClientAuth @"crypto/tls".ClientAuthType; @"crypto/tls".ClientCAs *@"crypto/x509".CertPool; @"crypto/tls".InsecureSkipVerify bool; @"crypto/tls".CipherSuites []uint16; @"crypto/tls".PreferServerCipherSuites bool; @"crypto/tls".SessionTicketsDisabled bool; @"crypto/tls".SessionTicketKey [32]byte; @"crypto/tls".ClientSessionCache @"crypto/tls".ClientSessionCache; @"crypto/tls".MinVersion uint16; @"crypto/tls".MaxVersion uint16; @"crypto/tls".CurvePreferences []@"crypto/tls".CurveID; @"crypto/tls".serverInitOnce @"sync".Once }
func (? *@"crypto/tls".Config) @"crypto/tls".BuildNameToCertificate() ()
func (? *@"crypto/tls".Config) @"crypto/tls".cipherSuites() (? []uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".curvePreferences() (? []@"crypto/tls".CurveID)
func (? *@"crypto/tls".Config) @"crypto/tls".getCertificateForName(@"crypto/tls".name string) (? *@"crypto/tls".Certificate)
func (? *@"crypto/tls".Config) @"crypto/tls".maxVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".minVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".mutualVersion(@"crypto/tls".vers uint16) (? uint16, ? bool)
func (? *@"crypto/tls".Config) @"crypto/tls".rand() (? @"io".Reader)
func (? *@"crypto/tls".Config) @"crypto/tls".serverInit() ()
func (? *@"crypto/tls".Config) @"crypto/tls".time() (? @"time".Time)
type @"crypto/tls".Conn struct { @"crypto/tls".conn @"net".Conn; @"crypto/tls".isClient bool; @"crypto/tls".handshakeMutex @"sync".Mutex; @"crypto/tls".handshakeErr error; @"crypto/tls".vers uint16; @"crypto/tls".haveVers bool; @"crypto/tls".config *@"crypto/tls".Config; @"crypto/tls".handshakeComplete bool; @"crypto/tls".didResume bool; @"crypto/tls".cipherSuite uint16; @"crypto/tls".ocspResponse []byte; @"crypto/tls".peerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".verifiedChains [][]*@"crypto/x509".Certificate; @"crypto/tls".serverName string; @"crypto/tls".clientProtocol string; @"crypto/tls".clientProtocolFallback bool; @"crypto/tls".in @"crypto/tls".halfConn; @"crypto/tls".out @"crypto/tls".halfConn; @"crypto/tls".rawInput *@"crypto/tls".block; @"crypto/tls".input *@"crypto/tls".block; @"crypto/tls".hand @"bytes".Buffer; @"crypto/tls".tmp [16]byte }
func (? *@"crypto/tls".Conn) @"crypto/tls".Close() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".ConnectionState() (? @"crypto/tls".ConnectionState)
func (? *@"crypto/tls".Conn) @"crypto/tls".Handshake() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".LocalAddr() (? @"net".Addr)
func (? *@"crypto/tls".Conn) @"crypto/tls".OCSPResponse() (? []byte)
func (? *@"crypto/tls".Conn) @"crypto/tls".Read(@"crypto/tls".b []byte) (@"crypto/tls".n int, @"crypto/tls".err error)
func (? *@"crypto/tls".Conn) @"crypto/tls".RemoteAddr() (? @"net".Addr)
func (? *@"crypto/tls".Conn) @"crypto/tls".SetDeadline(@"crypto/tls".t @"time".Time) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".SetReadDeadline(@"crypto/tls".t @"time".Time) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".SetWriteDeadline(@"crypto/tls".t @"time".Time) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".VerifyHostname(@"crypto/tls".host string) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".Write(@"crypto/tls".b []byte) (? int, ? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".clientHandshake() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".decryptTicket(@"crypto/tls".encrypted []byte) (? *@"crypto/tls".sessionState, ? bool)
func (? *@"crypto/tls".Conn) @"crypto/tls".encryptTicket(@"crypto/tls".state *@"crypto/tls".sessionState) (? []byte, ? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".readHandshake() (? interface {  }, ? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".readRecord(@"crypto/tls".want @"crypto/tls".recordType) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".sendAlert(@"crypto/tls".err @"crypto/tls".alert) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".sendAlertLocked(@"crypto/tls".err @"crypto/tls".alert) (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".serverHandshake() (? error)
func (? *@"crypto/tls".Conn) @"crypto/tls".tryCipherSuite(@"crypto/tls".id uint16, @"crypto/tls".supportedCipherSuites []uint16, @"crypto/tls".version uint16, @"crypto/tls".ellipticOk bool, @"crypto/tls".ecdsaOk bool) (? *@"crypto/tls".cipherSuite)
func (? *@"crypto/tls".Conn) @"crypto/tls".writeRecord(@"crypto/tls".typ @"crypto/tls".recordType, @"crypto/tls".data []byte) (@"crypto/tls".n int, @"crypto/tls".err error)
type @"log".Logger struct { @"log".mu @"sync".Mutex; @"log".prefix string; @"log".flag int; @"log".out @"io".Writer; @"log".buf []byte }
func (? *@"log".Logger) @"log".Fatal(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalf(@"log".format string, @"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Fatalln(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Flags() (? int)
func (? *@"log".Logger) @"log".Output(@"log".calldepth int, @"log".s string) (? error)
func (? *@"log".Logger) @"log".Panic(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicf(@"log".format string, @"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Panicln(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Prefix() (? string)
func (? *@"log".Logger) @"log".Print(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Printf(@"log".format string, @"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".Println(@"log".v ...interface {  }) ()
func (? *@"log".Logger) @"log".SetFlags(@"log".flag int) ()
func (? *@"log".Logger) @"log".SetPrefix(@"log".prefix string) ()
func (? *@"log".Logger) @"log".formatHeader(@"log".buf *[]byte, @"log".t @"time".Time, @"log".file string, @"log".line int) ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"time".Timer struct { @"time".C <-chan @"time".Time; @"time".r @"time".runtimeTimer }
func (? *@"time".Timer) @"time".Reset(@"time".d @"time".Duration) (? bool)
func (? *@"time".Timer) @"time".Stop() (? bool)
type @"io".LimitedReader struct { @"io".R @"io".Reader; @"io".N int64 }
func (? *@"io".LimitedReader) @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error)
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"sync".f func () ()) ()
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"bufio".r @"io".Reader) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"bufio".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"bufio".p []byte) (@"bufio".nn int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"bufio".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"bufio".r rune) (@"bufio".size int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"bufio".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"io".PipeWriter struct { @"io".p *@"io".pipe }
func (? *@"io".PipeWriter) @"io".Close() (? error)
func (? *@"io".PipeWriter) @"io".CloseWithError(@"io".err error) (? error)
func (? *@"io".PipeWriter) @"io".Write(@"io".data []byte) (@"io".n int, @"io".err error)
type @"io".Closer interface { @"io".Close() (? error) }
type @"net".TCPListener struct { @"net".fd *@"net".netFD }
func (? *@"net".TCPListener) @"net".Accept() (? @"net".Conn, ? error)
func (? *@"net".TCPListener) @"net".AcceptTCP() (? *@"net".TCPConn, ? error)
func (? *@"net".TCPListener) @"net".Addr() (? @"net".Addr)
func (? *@"net".TCPListener) @"net".Close() (? error)
func (? *@"net".TCPListener) @"net".File() (@"net".f *@"os".File, @"net".err error)
func (? *@"net".TCPListener) @"net".SetDeadline(@"net".t @"time".Time) (? error)
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
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
import big "math/big"
import pkix "crypto/x509/pkix"
import asn1 "encoding/asn1"
type @"crypto/x509".Certificate struct { @"crypto/x509".Raw []byte; @"crypto/x509".RawTBSCertificate []byte; @"crypto/x509".RawSubjectPublicKeyInfo []byte; @"crypto/x509".RawSubject []byte; @"crypto/x509".RawIssuer []byte; @"crypto/x509".Signature []byte; @"crypto/x509".SignatureAlgorithm @"crypto/x509".SignatureAlgorithm; @"crypto/x509".PublicKeyAlgorithm @"crypto/x509".PublicKeyAlgorithm; @"crypto/x509".PublicKey interface {  }; @"crypto/x509".Version int; @"crypto/x509".SerialNumber *@"math/big".Int; @"crypto/x509".Issuer @"crypto/x509/pkix".Name; @"crypto/x509".Subject @"crypto/x509/pkix".Name; @"crypto/x509".NotBefore @"time".Time; @"crypto/x509".NotAfter @"time".Time; @"crypto/x509".KeyUsage @"crypto/x509".KeyUsage; @"crypto/x509".Extensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtraExtensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtKeyUsage []@"crypto/x509".ExtKeyUsage; @"crypto/x509".UnknownExtKeyUsage []@"encoding/asn1".ObjectIdentifier; @"crypto/x509".BasicConstraintsValid bool; @"crypto/x509".IsCA bool; @"crypto/x509".MaxPathLen int; @"crypto/x509".SubjectKeyId []byte; @"crypto/x509".AuthorityKeyId []byte; @"crypto/x509".OCSPServer []string; @"crypto/x509".IssuingCertificateURL []string; @"crypto/x509".DNSNames []string; @"crypto/x509".EmailAddresses []string; @"crypto/x509".IPAddresses []@"net".IP; @"crypto/x509".PermittedDNSDomainsCritical bool; @"crypto/x509".PermittedDNSDomains []string; @"crypto/x509".CRLDistributionPoints []string; @"crypto/x509".PolicyIdentifiers []@"encoding/asn1".ObjectIdentifier }
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckCRLSignature(@"crypto/x509".crl *@"crypto/x509/pkix".CertificateList) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignature(@"crypto/x509".algo @"crypto/x509".SignatureAlgorithm, @"crypto/x509".signed []byte, @"crypto/x509".signature []byte) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignatureFrom(@"crypto/x509".parent *@"crypto/x509".Certificate) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CreateCRL(@"crypto/x509".rand @"io".Reader, @"crypto/x509".priv interface {  }, @"crypto/x509".revokedCerts []@"crypto/x509/pkix".RevokedCertificate, @"crypto/x509".now @"time".Time, @"crypto/x509".expiry @"time".Time) (@"crypto/x509".crlBytes []byte, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Equal(@"crypto/x509".other *@"crypto/x509".Certificate) (? bool)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Verify(@"crypto/x509".opts @"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".VerifyHostname(@"crypto/x509".h string) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".buildChains(@"crypto/x509".cache map[int][][]*@"crypto/x509".Certificate, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".isValid(@"crypto/x509".certType int, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".systemVerify(@"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"mime/multipart".Part struct { @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".buffer *@"bytes".Buffer; @"mime/multipart".mr *@"mime/multipart".Reader; @"mime/multipart".bytesRead int; @"mime/multipart".disposition string; @"mime/multipart".dispositionParams map[string]string; @"mime/multipart".r @"io".Reader }
func (? *@"mime/multipart".Part) @"mime/multipart".Close() (? error)
func (? *@"mime/multipart".Part) @"mime/multipart".FileName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".FormName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".Read(@"mime/multipart".d []byte) (@"mime/multipart".n int, @"mime/multipart".err error)
func (? *@"mime/multipart".Part) @"mime/multipart".parseContentDisposition() ()
func (? *@"mime/multipart".Part) @"mime/multipart".populateHeaders() (? error)
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
import crypto "crypto"
type @"crypto/tls".Certificate struct { @"crypto/tls".Certificate [][]byte; @"crypto/tls".PrivateKey @"crypto".PrivateKey; @"crypto/tls".OCSPStaple []byte; @"crypto/tls".Leaf *@"crypto/x509".Certificate }
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"crypto/tls".ClientAuthType int
type @"crypto/tls".ClientSessionCache interface { @"crypto/tls".Get(@"crypto/tls".sessionKey string) (@"crypto/tls".session *@"crypto/tls".ClientSessionState, @"crypto/tls".ok bool); @"crypto/tls".Put(@"crypto/tls".sessionKey string, @"crypto/tls".cs *@"crypto/tls".ClientSessionState) () }
type @"crypto/tls".CurveID uint16
type @"crypto/tls".halfConn struct { ? @"sync".Mutex; @"crypto/tls".err error; @"crypto/tls".version uint16; @"crypto/tls".cipher interface {  }; @"crypto/tls".mac @"crypto/tls".macFunction; @"crypto/tls".seq [8]byte; @"crypto/tls".bfree *@"crypto/tls".block; @"crypto/tls".nextCipher interface {  }; @"crypto/tls".nextMac @"crypto/tls".macFunction; @"crypto/tls".inDigestBuf []byte; @"crypto/tls".outDigestBuf []byte }
func (? *@"crypto/tls".halfConn) @"crypto/tls".changeCipherSpec() (? error)
func (? *@"crypto/tls".halfConn) @"crypto/tls".decrypt(@"crypto/tls".b *@"crypto/tls".block) (@"crypto/tls".ok bool, @"crypto/tls".prefixLen int, @"crypto/tls".alertValue @"crypto/tls".alert)
func (? *@"crypto/tls".halfConn) @"crypto/tls".encrypt(@"crypto/tls".b *@"crypto/tls".block, @"crypto/tls".explicitIVLen int) (? bool, ? @"crypto/tls".alert)
func (? *@"crypto/tls".halfConn) @"crypto/tls".error() (? error)
func (? *@"crypto/tls".halfConn) @"crypto/tls".freeBlock(@"crypto/tls".b *@"crypto/tls".block) ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".incSeq() ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".newBlock() (? *@"crypto/tls".block)
func (? *@"crypto/tls".halfConn) @"crypto/tls".prepareCipherSpec(@"crypto/tls".version uint16, @"crypto/tls".cipher interface {  }, @"crypto/tls".mac @"crypto/tls".macFunction) ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".resetSeq() ()
func (? *@"crypto/tls".halfConn) @"crypto/tls".setErrorLocked(@"crypto/tls".err error) (? error)
func (? *@"crypto/tls".halfConn) @"crypto/tls".splitBlock(@"crypto/tls".b *@"crypto/tls".block, @"crypto/tls".n int) (? *@"crypto/tls".block, ? *@"crypto/tls".block)
type @"crypto/tls".block struct { @"crypto/tls".data []byte; @"crypto/tls".off int; @"crypto/tls".link *@"crypto/tls".block }
func (? *@"crypto/tls".block) @"crypto/tls".Read(@"crypto/tls".p []byte) (@"crypto/tls".n int, @"crypto/tls".err error)
func (? *@"crypto/tls".block) @"crypto/tls".readFromUntil(@"crypto/tls".r @"io".Reader, @"crypto/tls".n int) (? error)
func (? *@"crypto/tls".block) @"crypto/tls".reserve(@"crypto/tls".n int) ()
func (? *@"crypto/tls".block) @"crypto/tls".resize(@"crypto/tls".n int) ()
type @"bytes".Buffer struct { @"bytes".buf []byte; @"bytes".off int; @"bytes".runeBytes [4]byte; @"bytes".bootstrap [64]byte; @"bytes".lastRead @"bytes".readOp }
func (? *@"bytes".Buffer) @"bytes".Bytes() (? []byte)
func (? *@"bytes".Buffer) @"bytes".Grow(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".Len() (? int)
func (? *@"bytes".Buffer) @"bytes".Next(@"bytes".n int) (? []byte)
func (? *@"bytes".Buffer) @"bytes".Read(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadByte() (@"bytes".c byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadBytes(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadFrom(@"bytes".r @"io".Reader) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadRune() (@"bytes".r rune, @"bytes".size int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadString(@"bytes".delim byte) (@"bytes".line string, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".Reset() ()
func (? *@"bytes".Buffer) @"bytes".String() (? string)
func (? *@"bytes".Buffer) @"bytes".Truncate(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".UnreadByte() (? error)
func (? *@"bytes".Buffer) @"bytes".UnreadRune() (? error)
func (? *@"bytes".Buffer) @"bytes".Write(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteByte(@"bytes".c byte) (? error)
func (? *@"bytes".Buffer) @"bytes".WriteRune(@"bytes".r rune) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteString(@"bytes".s string) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteTo(@"bytes".w @"io".Writer) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".grow(@"bytes".n int) (? int)
func (? *@"bytes".Buffer) @"bytes".readSlice(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
type @"crypto/tls".sessionState struct { @"crypto/tls".vers uint16; @"crypto/tls".cipherSuite uint16; @"crypto/tls".masterSecret []byte; @"crypto/tls".certificates [][]byte }
func (? *@"crypto/tls".sessionState) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".sessionState) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".sessionState) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".recordType uint8
type @"crypto/tls".alert uint8
func (? @"crypto/tls".alert) @"crypto/tls".Error() (? string)
func (? @"crypto/tls".alert) @"crypto/tls".String() (? string)
func (? *@"crypto/tls".alert) @"crypto/tls".Error() (? string)
func (? *@"crypto/tls".alert) @"crypto/tls".String() (? string)
import cipher "crypto/cipher"
type @"crypto/tls".cipherSuite struct { @"crypto/tls".id uint16; @"crypto/tls".keyLen int; @"crypto/tls".macLen int; @"crypto/tls".ivLen int; @"crypto/tls".ka func (@"crypto/tls".version uint16) (? @"crypto/tls".keyAgreement); @"crypto/tls".flags int; @"crypto/tls".cipher func (@"crypto/tls".key []byte, @"crypto/tls".iv []byte, @"crypto/tls".isRead bool) (? interface {  }); @"crypto/tls".mac func (@"crypto/tls".version uint16, @"crypto/tls".macKey []byte) (? @"crypto/tls".macFunction); @"crypto/tls".aead func (@"crypto/tls".key []byte, @"crypto/tls".fixedNonce []byte) (? @"crypto/cipher".AEAD) }
import js "github.com/gopherjs/gopherjs/js"
type @"time".runtimeTimer struct { @"time".i int32; @"time".when int64; @"time".period int64; @"time".f func (? int64, ? interface {  }) (); @"time".arg interface {  }; @"time".timeout @"github.com/gopherjs/gopherjs/js".Object; @"time".active bool }
type @"io".pipe struct { @"io".rl @"sync".Mutex; @"io".wl @"sync".Mutex; @"io".l @"sync".Mutex; @"io".data []byte; @"io".rwait @"sync".Cond; @"io".wwait @"sync".Cond; @"io".rerr error; @"io".werr error }
func (? *@"io".pipe) @"io".rclose(@"io".err error) ()
func (? *@"io".pipe) @"io".read(@"io".b []byte) (@"io".n int, @"io".err error)
func (? *@"io".pipe) @"io".wclose(@"io".err error) ()
func (? *@"io".pipe) @"io".write(@"io".b []byte) (@"io".n int, @"io".err error)
type @"net".netFD struct { @"net".fdmu @"net".fdMutex; @"net".sysfd int; @"net".family int; @"net".sotype int; @"net".isConnected bool; @"net".net string; @"net".laddr @"net".Addr; @"net".raddr @"net".Addr; @"net".pd @"net".pollDesc }
func (? *@"net".netFD) @"net".Close() (? error)
func (? *@"net".netFD) @"net".Read(@"net".p []byte) (@"net".n int, @"net".err error)
func (? *@"net".netFD) @"net".Write(@"net".p []byte) (@"net".nn int, @"net".err error)
import syscall "syscall"
func (? *@"net".netFD) @"net".accept(@"net".toAddr func (? @"syscall".Sockaddr) (? @"net".Addr)) (@"net".netfd *@"net".netFD, @"net".err error)
func (? *@"net".netFD) @"net".closeRead() (? error)
func (? *@"net".netFD) @"net".closeWrite() (? error)
func (? *@"net".netFD) @"net".connect(@"net".la @"syscall".Sockaddr, @"net".ra @"syscall".Sockaddr, @"net".deadline @"time".Time) (? error)
func (? *@"net".netFD) @"net".decref() ()
func (? *@"net".netFD) @"net".destroy() ()
func (? *@"net".netFD) @"net".dial(@"net".laddr @"net".sockaddr, @"net".raddr @"net".sockaddr, @"net".deadline @"time".Time, @"net".toAddr func (? @"syscall".Sockaddr) (? @"net".Addr)) (? error)
func (? *@"net".netFD) @"net".dup() (@"net".f *@"os".File, @"net".err error)
func (? *@"net".netFD) @"net".incref() (? error)
func (? *@"net".netFD) @"net".init() (? error)
func (? *@"net".netFD) @"net".listenDatagram(@"net".laddr @"net".sockaddr, @"net".toAddr func (? @"syscall".Sockaddr) (? @"net".Addr)) (? error)
func (? *@"net".netFD) @"net".listenStream(@"net".laddr @"net".sockaddr, @"net".backlog int, @"net".toAddr func (? @"syscall".Sockaddr) (? @"net".Addr)) (? error)
func (? *@"net".netFD) @"net".name() (? string)
func (? *@"net".netFD) @"net".readFrom(@"net".p []byte) (@"net".n int, @"net".sa @"syscall".Sockaddr, @"net".err error)
func (? *@"net".netFD) @"net".readLock() (? error)
func (? *@"net".netFD) @"net".readMsg(@"net".p []byte, @"net".oob []byte) (@"net".n int, @"net".oobn int, @"net".flags int, @"net".sa @"syscall".Sockaddr, @"net".err error)
func (? *@"net".netFD) @"net".readUnlock() ()
func (? *@"net".netFD) @"net".setAddr(@"net".laddr @"net".Addr, @"net".raddr @"net".Addr) ()
func (? *@"net".netFD) @"net".setDeadline(@"net".t @"time".Time) (? error)
func (? *@"net".netFD) @"net".setReadDeadline(@"net".t @"time".Time) (? error)
func (? *@"net".netFD) @"net".setWriteDeadline(@"net".t @"time".Time) (? error)
func (? *@"net".netFD) @"net".shutdown(@"net".how int) (? error)
func (? *@"net".netFD) @"net".writeLock() (? error)
func (? *@"net".netFD) @"net".writeMsg(@"net".p []byte, @"net".oob []byte, @"net".sa @"syscall".Sockaddr) (@"net".n int, @"net".oobn int, @"net".err error)
func (? *@"net".netFD) @"net".writeTo(@"net".p []byte, @"net".sa @"syscall".Sockaddr) (@"net".n int, @"net".err error)
func (? *@"net".netFD) @"net".writeUnlock() ()
type @"net".TCPConn struct { ? @"net".conn }
func (? *@"net".TCPConn) @"net".CloseRead() (? error)
func (? *@"net".TCPConn) @"net".CloseWrite() (? error)
func (? *@"net".TCPConn) @"net".ReadFrom(@"net".r @"io".Reader) (? int64, ? error)
func (? *@"net".TCPConn) @"net".SetKeepAlive(@"net".keepalive bool) (? error)
func (? *@"net".TCPConn) @"net".SetKeepAlivePeriod(@"net".d @"time".Duration) (? error)
func (? *@"net".TCPConn) @"net".SetLinger(@"net".sec int) (? error)
func (? *@"net".TCPConn) @"net".SetNoDelay(@"net".noDelay bool) (? error)
type @"os".File struct { ? *@"os".file }
func (? *@"os".File) @"os".Chdir() (? error)
func (? *@"os".File) @"os".Chmod(@"os".mode @"os".FileMode) (? error)
func (? *@"os".File) @"os".Chown(@"os".uid int, @"os".gid int) (? error)
func (? *@"os".File) @"os".Close() (? error)
func (? *@"os".File) @"os".Fd() (? uintptr)
func (? *@"os".File) @"os".Name() (? string)
func (? *@"os".File) @"os".Read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".ReadAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".Readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".Seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".Stat() (@"os".fi @"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Sync() (@"os".err error)
func (? *@"os".File) @"os".Truncate(@"os".size int64) (? error)
func (? *@"os".File) @"os".Write(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteString(@"os".s string) (@"os".ret int, @"os".err error)
func (? *@"os".File) @"os".pread(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".pwrite(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".write(@"os".b []byte) (@"os".n int, @"os".err error)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"math/big".n int64, @"math/big".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"math/big".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"math/big".y *@"math/big".Int) (@"math/big".r int)
func (? *@"math/big".Int) @"math/big".Div(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Format(@"math/big".s @"fmt".State, @"math/big".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"math/big".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"math/big".text []byte, @"math/big".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"math/big".g *@"math/big".Int, @"math/big".p *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"math/big".a int64, @"math/big".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"math/big".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"math/big".rnd *@"math/rand".Rand, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"math/big".s @"fmt".ScanState, @"math/big".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"math/big".x *@"math/big".Int, @"math/big".i int, @"math/big".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"math/big".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"math/big".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"math/big".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"math/big".s string, @"math/big".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"math/big".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? *@"math/big".Int, ? int, ? error)
type @"crypto/x509/pkix".Name struct { @"crypto/x509/pkix".Country []string; @"crypto/x509/pkix".Organization []string; @"crypto/x509/pkix".OrganizationalUnit []string; @"crypto/x509/pkix".Locality []string; @"crypto/x509/pkix".Province []string; @"crypto/x509/pkix".StreetAddress []string; @"crypto/x509/pkix".PostalCode []string; @"crypto/x509/pkix".SerialNumber string; @"crypto/x509/pkix".CommonName string; @"crypto/x509/pkix".Names []@"crypto/x509/pkix".AttributeTypeAndValue }
func (? @"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".FillFromRDNSequence(@"crypto/x509/pkix".rdns *@"crypto/x509/pkix".RDNSequence) ()
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
type @"crypto/x509".KeyUsage int
type @"crypto/x509/pkix".Extension struct { @"crypto/x509/pkix".Id @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Critical bool "asn1:\"optional\""; @"crypto/x509/pkix".Value []byte }
type @"crypto/x509".ExtKeyUsage int
type @"encoding/asn1".ObjectIdentifier []int
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
type @"net".IP []byte
func (? @"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? @"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? @"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? @"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? @"net".IP) @"net".IsLoopback() (? bool)
func (? @"net".IP) @"net".IsMulticast() (? bool)
func (? @"net".IP) @"net".IsUnspecified() (? bool)
func (? @"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? @"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? @"net".IP) @"net".String() (? string)
func (? @"net".IP) @"net".To16() (? @"net".IP)
func (? @"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? *@"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? *@"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? *@"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? *@"net".IP) @"net".IsLoopback() (? bool)
func (? *@"net".IP) @"net".IsMulticast() (? bool)
func (? *@"net".IP) @"net".IsUnspecified() (? bool)
func (? *@"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? *@"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? *@"net".IP) @"net".String() (? string)
func (? *@"net".IP) @"net".To16() (? @"net".IP)
func (? *@"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".UnmarshalText(@"net".text []byte) (? error)
type @"crypto/x509/pkix".CertificateList struct { @"crypto/x509/pkix".TBSCertList @"crypto/x509/pkix".TBSCertificateList; @"crypto/x509/pkix".SignatureAlgorithm @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".SignatureValue @"encoding/asn1".BitString }
func (? *@"crypto/x509/pkix".CertificateList) @"crypto/x509/pkix".HasExpired(@"crypto/x509/pkix".now @"time".Time) (? bool)
type @"crypto/x509/pkix".RevokedCertificate struct { @"crypto/x509/pkix".SerialNumber *@"math/big".Int; @"crypto/x509/pkix".RevocationTime @"time".Time; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"optional\"" }
type @"crypto/x509".VerifyOptions struct { @"crypto/x509".DNSName string; @"crypto/x509".Intermediates *@"crypto/x509".CertPool; @"crypto/x509".Roots *@"crypto/x509".CertPool; @"crypto/x509".CurrentTime @"time".Time; @"crypto/x509".KeyUsages []@"crypto/x509".ExtKeyUsage }
type @"crypto".PrivateKey interface {  }
type @"crypto/tls".ClientSessionState struct { @"crypto/tls".sessionTicket []uint8; @"crypto/tls".vers uint16; @"crypto/tls".cipherSuite uint16; @"crypto/tls".masterSecret []byte; @"crypto/tls".serverCertificates []*@"crypto/x509".Certificate }
type @"crypto/tls".macFunction interface { @"crypto/tls".MAC(@"crypto/tls".digestBuf []byte, @"crypto/tls".seq []byte, @"crypto/tls".header []byte, @"crypto/tls".data []byte) (? []byte); @"crypto/tls".Size() (? int) }
type @"bytes".readOp int
type @"crypto/tls".keyAgreement interface { @"crypto/tls".generateClientKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".clientHelloMsg, ? *@"crypto/x509".Certificate) (? []byte, ? *@"crypto/tls".clientKeyExchangeMsg, ? error); @"crypto/tls".generateServerKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".Certificate, ? *@"crypto/tls".clientHelloMsg, ? *@"crypto/tls".serverHelloMsg) (? *@"crypto/tls".serverKeyExchangeMsg, ? error); @"crypto/tls".processClientKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".Certificate, ? *@"crypto/tls".clientKeyExchangeMsg, ? uint16) (? []byte, ? error); @"crypto/tls".processServerKeyExchange(? *@"crypto/tls".Config, ? *@"crypto/tls".clientHelloMsg, ? *@"crypto/tls".serverHelloMsg, ? *@"crypto/x509".Certificate, ? *@"crypto/tls".serverKeyExchangeMsg) (? error) }
type @"crypto/cipher".AEAD interface { @"crypto/cipher".NonceSize() (? int); @"crypto/cipher".Open(@"crypto/cipher".dst []byte, @"crypto/cipher".nonce []byte, @"crypto/cipher".ciphertext []byte, @"crypto/cipher".data []byte) (? []byte, ? error); @"crypto/cipher".Overhead() (? int); @"crypto/cipher".Seal(@"crypto/cipher".dst []byte, @"crypto/cipher".nonce []byte, @"crypto/cipher".plaintext []byte, @"crypto/cipher".data []byte) (? []byte) }
type @"github.com/gopherjs/gopherjs/js".Object interface { @"github.com/gopherjs/gopherjs/js".Bool() (? bool); @"github.com/gopherjs/gopherjs/js".Call(@"github.com/gopherjs/gopherjs/js".name string, @"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Delete(@"github.com/gopherjs/gopherjs/js".key string) (); @"github.com/gopherjs/gopherjs/js".Float() (? float64); @"github.com/gopherjs/gopherjs/js".Get(@"github.com/gopherjs/gopherjs/js".key string) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Index(@"github.com/gopherjs/gopherjs/js".i int) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Int() (? int); @"github.com/gopherjs/gopherjs/js".Int64() (? int64); @"github.com/gopherjs/gopherjs/js".Interface() (? interface {  }); @"github.com/gopherjs/gopherjs/js".Invoke(@"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".IsNull() (? bool); @"github.com/gopherjs/gopherjs/js".IsUndefined() (? bool); @"github.com/gopherjs/gopherjs/js".Length() (? int); @"github.com/gopherjs/gopherjs/js".New(@"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Set(@"github.com/gopherjs/gopherjs/js".key string, @"github.com/gopherjs/gopherjs/js".value interface {  }) (); @"github.com/gopherjs/gopherjs/js".SetIndex(@"github.com/gopherjs/gopherjs/js".i int, @"github.com/gopherjs/gopherjs/js".value interface {  }) (); @"github.com/gopherjs/gopherjs/js".Str() (? string); @"github.com/gopherjs/gopherjs/js".Uint64() (? uint64); @"github.com/gopherjs/gopherjs/js".Unsafe() (? uintptr) }
type @"sync".Cond struct { @"sync".L @"sync".Locker; @"sync".sema @"sync".syncSema; @"sync".waiters uint32; @"sync".checker @"sync".copyChecker }
func (? *@"sync".Cond) @"sync".Broadcast() ()
func (? *@"sync".Cond) @"sync".Signal() ()
func (? *@"sync".Cond) @"sync".Wait() ()
func (? *@"sync".Cond) @"sync".signalImpl(@"sync".all bool) ()
type @"net".fdMutex struct { @"net".state uint64; @"net".rsema uint32; @"net".wsema uint32 }
func (? *@"net".fdMutex) @"net".Decref() (? bool)
func (? *@"net".fdMutex) @"net".Incref() (? bool)
func (? *@"net".fdMutex) @"net".IncrefAndClose() (? bool)
func (? *@"net".fdMutex) @"net".RWLock(@"net".read bool) (? bool)
func (? *@"net".fdMutex) @"net".RWUnlock(@"net".read bool) (? bool)
type @"net".pollDesc struct { @"net".runtimeCtx uintptr }
func (? *@"net".pollDesc) @"net".Close() ()
func (? *@"net".pollDesc) @"net".Evict() (? bool)
func (? *@"net".pollDesc) @"net".Init(@"net".fd *@"net".netFD) (? error)
func (? *@"net".pollDesc) @"net".Lock() ()
func (? *@"net".pollDesc) @"net".Prepare(@"net".mode int) (? error)
func (? *@"net".pollDesc) @"net".PrepareRead() (? error)
func (? *@"net".pollDesc) @"net".PrepareWrite() (? error)
func (? *@"net".pollDesc) @"net".Unlock() ()
func (? *@"net".pollDesc) @"net".Wait(@"net".mode int) (? error)
func (? *@"net".pollDesc) @"net".WaitCanceled(@"net".mode int) ()
func (? *@"net".pollDesc) @"net".WaitCanceledRead() ()
func (? *@"net".pollDesc) @"net".WaitCanceledWrite() ()
func (? *@"net".pollDesc) @"net".WaitRead() (? error)
func (? *@"net".pollDesc) @"net".WaitWrite() (? error)
func (? *@"net".pollDesc) @"net".Wakeup() ()
type @"syscall".Sockaddr interface { @"syscall".sockaddr() (@"syscall".ptr @"unsafe".Pointer, @"syscall".len @"syscall"._Socklen, @"syscall".err error) }
type @"net".sockaddr interface { @"net".Network() (? string); @"net".String() (? string); @"net".family() (? int); @"net".isWildcard() (? bool); @"net".sockaddr(@"net".family int) (? @"syscall".Sockaddr, ? error); @"net".toAddr() (? @"net".Addr) }
type @"net".conn struct { @"net".fd *@"net".netFD }
func (? *@"net".conn) @"net".Close() (? error)
func (? *@"net".conn) @"net".File() (@"net".f *@"os".File, @"net".err error)
func (? *@"net".conn) @"net".LocalAddr() (? @"net".Addr)
func (? *@"net".conn) @"net".Read(@"net".b []byte) (? int, ? error)
func (? *@"net".conn) @"net".RemoteAddr() (? @"net".Addr)
func (? *@"net".conn) @"net".SetDeadline(@"net".t @"time".Time) (? error)
func (? *@"net".conn) @"net".SetReadBuffer(@"net".bytes int) (? error)
func (? *@"net".conn) @"net".SetReadDeadline(@"net".t @"time".Time) (? error)
func (? *@"net".conn) @"net".SetWriteBuffer(@"net".bytes int) (? error)
func (? *@"net".conn) @"net".SetWriteDeadline(@"net".t @"time".Time) (? error)
func (? *@"net".conn) @"net".Write(@"net".b []byte) (? int, ? error)
func (? *@"net".conn) @"net".ok() (? bool)
type @"os".file struct { @"os".fd int; @"os".name string; @"os".dirinfo *@"os".dirInfo; @"os".nepipe int32 }
func (? *@"os".file) @"os".close() (? error)
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"fmt".c int) (? bool); @"fmt".Precision() (@"fmt".prec int, @"fmt".ok bool); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool); @"fmt".Write(@"fmt".b []byte) (@"fmt".ret int, @"fmt".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"math/rand".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"math/rand".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"math/rand".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"math/rand".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"math/rand".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"fmt".buf []byte) (@"fmt".n int, @"fmt".err error); @"fmt".ReadRune() (@"fmt".r rune, @"fmt".size int, @"fmt".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"fmt".skipSpace bool, @"fmt".f func (? rune) (? bool)) (@"fmt".token []byte, @"fmt".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error); @"io".UnreadRune() (? error) }
type @"crypto/x509/pkix".AttributeTypeAndValue struct { @"crypto/x509/pkix".Type @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Value interface {  } }
type @"crypto/x509/pkix".RDNSequence []@"crypto/x509/pkix".RelativeDistinguishedNameSET
type @"net".IPMask []byte
func (? @"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? @"net".IPMask) @"net".String() (? string)
func (? *@"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? *@"net".IPMask) @"net".String() (? string)
type @"crypto/x509/pkix".TBSCertificateList struct { @"crypto/x509/pkix".Raw @"encoding/asn1".RawContent; @"crypto/x509/pkix".Version int "asn1:\"optional,default:2\""; @"crypto/x509/pkix".Signature @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".Issuer @"crypto/x509/pkix".RDNSequence; @"crypto/x509/pkix".ThisUpdate @"time".Time; @"crypto/x509/pkix".NextUpdate @"time".Time; @"crypto/x509/pkix".RevokedCertificates []@"crypto/x509/pkix".RevokedCertificate "asn1:\"optional\""; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"tag:0,optional,explicit\"" }
type @"crypto/x509/pkix".AlgorithmIdentifier struct { @"crypto/x509/pkix".Algorithm @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Parameters @"encoding/asn1".RawValue "asn1:\"optional\"" }
type @"encoding/asn1".BitString struct { @"encoding/asn1".Bytes []byte; @"encoding/asn1".BitLength int }
func (? @"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? @"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
type @"crypto/tls".clientHelloMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".vers uint16; @"crypto/tls".random []byte; @"crypto/tls".sessionId []byte; @"crypto/tls".cipherSuites []uint16; @"crypto/tls".compressionMethods []uint8; @"crypto/tls".nextProtoNeg bool; @"crypto/tls".serverName string; @"crypto/tls".ocspStapling bool; @"crypto/tls".supportedCurves []@"crypto/tls".CurveID; @"crypto/tls".supportedPoints []uint8; @"crypto/tls".ticketSupported bool; @"crypto/tls".sessionTicket []uint8; @"crypto/tls".signatureAndHashes []@"crypto/tls".signatureAndHash; @"crypto/tls".secureRenegotiation bool }
func (? *@"crypto/tls".clientHelloMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".clientHelloMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".clientHelloMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".clientKeyExchangeMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".ciphertext []byte }
func (? *@"crypto/tls".clientKeyExchangeMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".clientKeyExchangeMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".clientKeyExchangeMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".serverHelloMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".vers uint16; @"crypto/tls".random []byte; @"crypto/tls".sessionId []byte; @"crypto/tls".cipherSuite uint16; @"crypto/tls".compressionMethod uint8; @"crypto/tls".nextProtoNeg bool; @"crypto/tls".nextProtos []string; @"crypto/tls".ocspStapling bool; @"crypto/tls".ticketSupported bool; @"crypto/tls".secureRenegotiation bool }
func (? *@"crypto/tls".serverHelloMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".serverHelloMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".serverHelloMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"crypto/tls".serverKeyExchangeMsg struct { @"crypto/tls".raw []byte; @"crypto/tls".key []byte }
func (? *@"crypto/tls".serverKeyExchangeMsg) @"crypto/tls".equal(@"crypto/tls".i interface {  }) (? bool)
func (? *@"crypto/tls".serverKeyExchangeMsg) @"crypto/tls".marshal() (? []byte)
func (? *@"crypto/tls".serverKeyExchangeMsg) @"crypto/tls".unmarshal(@"crypto/tls".data []byte) (? bool)
type @"sync".syncSema [3]uintptr
type @"sync".copyChecker uintptr
func (? *@"sync".copyChecker) @"sync".check() ()
type @"syscall"._Socklen uint32
type @"os".dirInfo struct { @"os".buf []byte; @"os".nbuf int; @"os".bufp int }
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
type @"crypto/tls".signatureAndHash struct { @"crypto/tls".hash uint8; @"crypto/tls".signature uint8 }
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesbufiomathsyscallstringstimeosstrconvreflectfmtsortcompress/flatehash
hash/crc32
crypto/aesencoding/binary
crypto/des	math/randmath/bigcrypto/ellipticcrypto/ecdsacrypto/hmac
crypto/md5crypto/rand
crypto/rc4
crypto/rsacrypto/sha1
crypto/dsa
crypto/tlslogmime
bufioA0
bytesB0errorsC0fmtD0ioE0encoding/base64F0	io/ioutilG0logH0net/urlI0stringsJ0	syncK0	timeL0netM0strconvN0	mimeO0mime/multipartP0
crypto/tlsV0runtimeW0sync/atomicX0encoding/binaryY0
time:Timer 0�� 0AW��AW=$pkg.Cookie=$newType(0,"Struct","http.Cookie","Cookie","net/http",function(Name_,Value_,Path_,Domain_,Expires_,RawExpires_,MaxAge_,Secure_,HttpOnly_,Raw_,Unparsed_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Value=Value_!==undefined?Value_:"";this.Path=Path_!==undefined?Path_:"";this.Domain=Domain_!==undefined?Domain_:"";this.Expires=Expires_!==undefined?Expires_:new L.Time.Ptr();this.RawExpires=RawExpires_!==undefined?RawExpires_:"";this.MaxAge=MaxAge_!==undefined?MaxAge_:0;this.Secure=Secure_!==undefined?Secure_:false;this.HttpOnly=HttpOnly_!==undefined?HttpOnly_:false;this.Raw=Raw_!==undefined?Raw_:"";this.Unparsed=Unparsed_!==undefined?Unparsed_:($sliceType($String)).nil;});��($ptrType(AW)).methods=[["String","String","",$funcType([],[$String],false),-1]];AW.init([["Name","Name","",$String,""],["Value","Value","",$String,""],["Path","Path","",$String,""],["Domain","Domain","",$String,""],["Expires","Expires","",L.Time,""],["RawExpires","RawExpires","",$String,""],["MaxAge","MaxAge","",$Int,""],["Secure","Secure","",$Bool,""],["HttpOnly","HttpOnly","",$Bool,""],["Raw","Raw","",$String,""],["Unparsed","Unparsed","",($sliceType($String)),""]]);0Cookie0	time:Time 0� 0BL��BL=$pkg.fileTransport=$newType(0,"Struct","http.fileTransport","fileTransport","net/http",function(fh_){this.$val=this;this.fh=fh_!==undefined?fh_:new CB.Ptr();});�BL.methods=[["RoundTrip","RoundTrip","",$funcType([($ptrType(DC))],[($ptrType(DR)),$error],false),-1]];($ptrType(BL)).methods=[["RoundTrip","RoundTrip","",$funcType([($ptrType(DC))],[($ptrType(DR)),$error],false),-1]];BL.init([["fh","fh","net/http",CB,""]]);0
 0BPBBP=$pkg.Dir=$newType(8,"String","http.Dir","Dir","net/http",null);��BP.methods=[["Open","Open","",$funcType([$String],[BR,$error],false),-1]];($ptrType(BP)).methods=[["Open","Open","",$funcType([$String],[BR,$error],false),-1]];0Dir0
FileSystem0
Response0wcrypto/tls:ConnectionState
Hijacker0bufio:ReadWriternet:Conn 0�� 0DYcDY=$pkg.CloseNotifier=$newType(8,"Interface","http.CloseNotifier","CloseNotifier","net/http",null);`DY.init([["CloseNotify","CloseNotify","",$funcType([],[($chanType($Bool,false,true))],false)]]);0
sync:Mutex 0�� 0EA��EA=$pkg.switchReader=$newType(0,"Struct","http.switchReader","switchReader","net/http",function(Reader_){this.$val=this;this.Reader=Reader_!==undefined?Reader_:$ifaceNil;});��EA.methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0]];($ptrType(EA)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0]];EA.init([["Reader","","",E.Reader,""]]);0switchReader0	io:Reader 0�� 0EB��EB=$pkg.switchWriter=$newType(0,"Struct","http.switchWriter","switchWriter","net/http",function(Writer_){this.$val=this;this.Writer=Writer_!==undefined?Writer_:$ifaceNil;});��EB.methods=[["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0]];($ptrType(EB)).methods=[["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0]];EB.init([["Writer","","",E.Writer,""]]);0switchWriter0	io:Writer 0�* 0EC��EC=$pkg.liveSwitchReader=$newType(0,"Struct","http.liveSwitchReader","liveSwitchReader","net/http",function(Mutex_,r_){this.$val=this;this.Mutex=Mutex_!==undefined?Mutex_:new K.Mutex.Ptr();this.r=r_!==undefined?r_:$ifaceNil;});�($ptrType(EC)).methods=[["Lock","Lock","",$funcType([],[],false),0],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["Unlock","Unlock","",$funcType([],[],false),0]];EC.init([["Mutex","","",K.Mutex,""],["r","r","net/http",E.Reader,""]]);0liveSwitchReader0	io:Reader
sync:Mutex 0�� 0ED�eED=$pkg.chunkWriter=$newType(0,"Struct","http.chunkWriter","chunkWriter","net/http",function(res_,header_,wroteHeader_,chunking_){this.$val=this;this.res=res_!==undefined?res_:($ptrType(EG)).nil;this.header=header_!==undefined?header_:false;this.wroteHeader=wroteHeader_!==undefined?wroteHeader_:false;this.chunking=chunking_!==undefined?chunking_:false;});��($ptrType(ED)).methods=[["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["close","close","net/http",$funcType([],[],false),-1],["flush","flush","net/http",$funcType([],[],false),-1],["writeHeader","writeHeader","net/http",$funcType([($sliceType($Uint8))],[],false),-1]];ED.init([["res","res","net/http",($ptrType(EG)),""],["header","header","net/http",CJ,""],["wroteHeader","wroteHeader","net/http",$Bool,""],["chunking","chunking","net/http",$Bool,""]]);0
response0��bufio:ReadWriterbufio:Writer	io:Readernet/http:Headernet/http:Requestnet/http:chunkWriter
writerOnly0	io:Writer 0�� 0ER�FER=$pkg.expectContinueReader=$newType(0,"Struct","http.expectContinueReader","expectContinueReader","net/http",function(resp_,readCloser_,closed_){this.$val=this;this.resp=resp_!==undefined?resp_:($ptrType(EG)).nil;this.readCloser=readCloser_!==undefined?readCloser_:$ifaceNil;this.closed=closed_!==undefined?closed_:false;});�1($ptrType(ER)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];ER.init([["resp","resp","net/http",($ptrType(EG)),""],["readCloser","readCloser","net/http",E.ReadCloser,""],["closed","closed","net/http",$Bool,""]]);0expectContinueReader0"
ServeMux0^net/http:Handlernet/http:Requestnet/http:ResponseWriternet/http:muxEntrysync:RWMutex 0�� 0FN�FN=$pkg.muxEntry=$newType(0,"Struct","http.muxEntry","muxEntry","net/http",function(explicit_,h_,pattern_){this.$val=this;this.explicit=explicit_!==undefined?explicit_:false;this.h=h_!==undefined?h_:$ifaceNil;this.pattern=pattern_!==undefined?pattern_:"";});~FN.init([["explicit","explicit","net/http",$Bool,""],["h","h","net/http",DU,""],["pattern","pattern","net/http",$String,""]]);0
muxEntry0net/http:Handler 0�	M 0FU�tFU=$pkg.Server=$newType(0,"Struct","http.Server","Server","net/http",function(Addr_,Handler_,ReadTimeout_,WriteTimeout_,MaxHeaderBytes_,TLSConfig_,TLSNextProto_,ConnState_,ErrorLog_,disableKeepAlives_){this.$val=this;this.Addr=Addr_!==undefined?Addr_:"";this.Handler=Handler_!==undefined?Handler_:$ifaceNil;this.ReadTimeout=ReadTimeout_!==undefined?ReadTimeout_:new L.Duration(0,0);this.WriteTimeout=WriteTimeout_!==undefined?WriteTimeout_:new L.Duration(0,0);this.MaxHeaderBytes=MaxHeaderBytes_!==undefined?MaxHeaderBytes_:0;this.TLSConfig=TLSConfig_!==undefined?TLSConfig_:($ptrType(V.Config)).nil;this.TLSNextProto=TLSNextProto_!==undefined?TLSNextProto_:false;this.ConnState=ConnState_!==undefined?ConnState_:$throwNilPointerError;this.ErrorLog=ErrorLog_!==undefined?ErrorLog_:($ptrType(H.Logger)).nil;this.disableKeepAlives=disableKeepAlives_!==undefined?disableKeepAlives_:0;});�-($ptrType(FU)).methods=[["ListenAndServe","ListenAndServe","",$funcType([],[$error],false),-1],["ListenAndServeTLS","ListenAndServeTLS","",$funcType([$String,$String],[$error],false),-1],["Serve","Serve","",$funcType([M.Listener],[$error],false),-1],["SetKeepAlivesEnabled","SetKeepAlivesEnabled","",$funcType([$Bool],[],false),-1],["doKeepAlives","doKeepAlives","net/http",$funcType([],[$Bool],false),-1],["initialLimitedReaderSize","initialLimitedReaderSize","net/http",$funcType([],[$Int64],false),-1],["logf","logf","net/http",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["maxHeaderBytes","maxHeaderBytes","net/http",$funcType([],[$Int],false),-1],["newConn","newConn","net/http",$funcType([M.Conn],[($ptrType(DZ)),$error],false),-1]];FU.init([["Addr","Addr","",$String,""],["Handler","Handler","",DU,""],["ReadTimeout","ReadTimeout","",L.Duration,""],["WriteTimeout","WriteTimeout","",L.Duration,""],["MaxHeaderBytes","MaxHeaderBytes","",$Int,""],["TLSConfig","TLSConfig","",($ptrType(V.Config)),""],["TLSNextProto","TLSNextProto","",($mapType($String,($funcType([($ptrType(FU)),($ptrType(V.Conn)),DU],[],false)))),""],["ConnState","ConnState","",($funcType([M.Conn,FV],[],false)),""],["ErrorLog","ErrorLog","",($ptrType(H.Logger)),""],["disableKeepAlives","disableKeepAlives","net/http",$Int32,""]]);0Server0��crypto/tls:Configcrypto/tls:Conn
log:Loggernet/http:ConnStatenet/http:Handler
sync:Mutex 0�� 0GD��GD=$pkg.tcpKeepAliveListener=$newType(0,"Struct","http.tcpKeepAliveListener","tcpKeepAliveListener","net/http",function(TCPListener_){this.$val=this;this.TCPListener=TCPListener_!==undefined?TCPListener_:($ptrType(M.TCPListener)).nil;});�fGD.methods=[["Accept","Accept","",$funcType([],[M.Conn,$error],false),-1],["AcceptTCP","AcceptTCP","",$funcType([],[($ptrType(M.TCPConn)),$error],false),0],["Addr","Addr","",$funcType([],[M.Addr],false),0],["Close","Close","",$funcType([],[$error],false),0],["File","File","",$funcType([],[($ptrType(R.File)),$error],false),0],["SetDeadline","SetDeadline","",$funcType([L.Time],[$error],false),0]];($ptrType(GD)).methods=[["Accept","Accept","",$funcType([],[M.Conn,$error],false),-1],["AcceptTCP","AcceptTCP","",$funcType([],[($ptrType(M.TCPConn)),$error],false),0],["Addr","Addr","",$funcType([],[M.Addr],false),0],["Close","Close","",$funcType([],[$error],false),0],["File","File","",$funcType([],[($ptrType(R.File)),$error],false),0],["SetDeadline","SetDeadline","",$funcType([L.Time],[$error],false),0]];GD.init([["TCPListener","","",($ptrType(M.TCPListener)),""]]);0tcpKeepAliveListener0Fnet:Addrnet:Connnet:TCPConnnet:TCPListeneros:File	time:Time 0�� 0GE��GE=$pkg.globalOptionsHandler=$newType(0,"Struct","http.globalOptionsHandler","globalOptionsHandler","net/http",function(){this.$val=this;});��GE.methods=[["ServeHTTP","ServeHTTP","",$funcType([DV,($ptrType(DC))],[],false),-1]];($ptrType(GE)).methods=[["ServeHTTP","ServeHTTP","",$funcType([DV,($ptrType(DC))],[],false),-1]];GE.init([]);0globalOptionsHandler0+net/http:Requestnet/http:ResponseWriter 0� 0GF��GF=$pkg.eofReaderWithWriteTo=$newType(0,"Struct","http.eofReaderWithWriteTo","eofReaderWithWriteTo","net/http",function(){this.$val=this;});�ZGF.methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["WriteTo","WriteTo","",$funcType([E.Writer],[$Int64,$error],false),-1]];($ptrType(GF)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["WriteTo","WriteTo","",$funcType([E.Writer],[$Int64,$error],false),-1]];GF.init([]);0eofReaderWithWriteTo0	io:Writer 0�V 0GH��GH=$pkg.initNPNRequest=$newType(0,"Struct","http.initNPNRequest","initNPNRequest","net/http",function(c_,h_){this.$val=this;this.c=c_!==undefined?c_:($ptrType(V.Conn)).nil;this.h=h_!==undefined?h_:new FX.Ptr();});�GH.methods=[["ServeHTTP","ServeHTTP","",$funcType([DV,($ptrType(DC))],[],false),-1]];($ptrType(GH)).methods=[["ServeHTTP","ServeHTTP","",$funcType([DV,($ptrType(DC))],[],false),-1]];GH.init([["c","c","net/http",($ptrType(V.Conn)),""],["h","h","net/http",FX,""]]);0initNPNRequest0Tcrypto/tls:Connnet/http:Requestnet/http:ResponseWriternet/http:serverHandler 0�
 0GI��GI=$pkg.loggingConn=$newType(0,"Struct","http.loggingConn","loggingConn","net/http",function(name_,Conn_){this.$val=this;this.name=name_!==undefined?name_:"";this.Conn=Conn_!==undefined?Conn_:$ifaceNil;});��GI.methods=[["LocalAddr","LocalAddr","",$funcType([],[M.Addr],false),1],["RemoteAddr","RemoteAddr","",$funcType([],[M.Addr],false),1],["SetDeadline","SetDeadline","",$funcType([L.Time],[$error],false),1],["SetReadDeadline","SetReadDeadline","",$funcType([L.Time],[$error],false),1],["SetWriteDeadline","SetWriteDeadline","",$funcType([L.Time],[$error],false),1]];($ptrType(GI)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["LocalAddr","LocalAddr","",$funcType([],[M.Addr],false),1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["RemoteAddr","RemoteAddr","",$funcType([],[M.Addr],false),1],["SetDeadline","SetDeadline","",$funcType([L.Time],[$error],false),1],["SetReadDeadline","SetReadDeadline","",$funcType([L.Time],[$error],false),1],["SetWriteDeadline","SetWriteDeadline","",$funcType([L.Time],[$error],false),1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];GI.init([["name","name","net/http",$String,""],["Conn","","",M.Conn,""]]);0
sniffSig0  0�� 0GQ��GQ=$pkg.exactSig=$newType(0,"Struct","http.exactSig","exactSig","net/http",function(sig_,ct_){this.$val=this;this.sig=sig_!==undefined?sig_:($sliceType($Uint8)).nil;this.ct=ct_!==undefined?ct_:"";});��($ptrType(GQ)).methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];GQ.init([["sig","sig","net/http",($sliceType($Uint8)),""],["ct","ct","net/http",$String,""]]);0
exactSig0  0�� 0GR�AGR=$pkg.maskedSig=$newType(0,"Struct","http.maskedSig","maskedSig","net/http",function(mask_,pat_,skipWS_,ct_){this.$val=this;this.mask=mask_!==undefined?mask_:($sliceType($Uint8)).nil;this.pat=pat_!==undefined?pat_:($sliceType($Uint8)).nil;this.skipWS=skipWS_!==undefined?skipWS_:false;this.ct=ct_!==undefined?ct_:"";});�)($ptrType(GR)).methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];GR.init([["mask","mask","net/http",($sliceType($Uint8)),""],["pat","pat","net/http",($sliceType($Uint8)),""],["skipWS","skipWS","net/http",$Bool,""],["ct","ct","net/http",$String,""]]);0	maskedSig0  0�O 0GSNGS=$pkg.htmlSig=$newType(12,"Slice","http.htmlSig","htmlSig","net/http",null);��GS.methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];($ptrType(GS)).methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];GS.init($Uint8);0	htmlSig0  0�8 0GTHGT=$pkg.mp4Sig=$newType(4,"Int","http.mp4Sig","mp4Sig","net/http",null);��GT.methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];($ptrType(GT)).methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];0mp4Sig0  0�< 0GUKGU=$pkg.textSig=$newType(4,"Int","http.textSig","textSig","net/http",null);��GU.methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];($ptrType(GU)).methods=[["match","match","net/http",$funcType([($sliceType($Uint8)),$Int],[$String],false),-1]];0	textSig0  0�S 0GX��GX=$pkg.errorReader=$newType(0,"Struct","http.errorReader","errorReader","net/http",function(err_){this.$val=this;this.err=err_!==undefined?err_:$ifaceNil;});��($ptrType(GX)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];GX.init([["err","err","net/http",$error,""]]);0
sync:Mutex 0�� 0HT��HT=$pkg.bodyLocked=$newType(0,"Struct","http.bodyLocked","bodyLocked","net/http",function(b_){this.$val=this;this.b=b_!==undefined?b_:($ptrType(HN)).nil;});��HT.methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];($ptrType(HT)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];HT.init([["b","b","net/http",($ptrType(HN)),""]]);0
bodyLocked0
sync:Mutexsync:RWMutex
IB=$pkg.envOnce=$newType(0,"Struct","http.envOnce","envOnce","net/http",function(names_,once_,val_){this.$val=this;this.names=names_!==undefined?names_:($sliceType($String)).nil;this.once=once_!==undefined?once_:new K.Once.Ptr();this.val=val_!==undefined?val_:"";});�A($ptrType(IB)).methods=[["Get","Get","",$funcType([],[$String],false),-1],["init","init","net/http",$funcType([],[],false),-1],["reset","reset","net/http",$funcType([],[],false),-1]];IB.init([["names","names","net/http",($sliceType($String)),""],["once","once","net/http",K.Once,""],["val","val","net/http",$String,""]]);0	envOnce0	sync:Once 0�] 0ID�RID=$pkg.connectMethod=$newType(0,"Struct","http.connectMethod","connectMethod","net/http",function(proxyURL_,targetScheme_,targetAddr_){this.$val=this;this.proxyURL=proxyURL_!==undefined?proxyURL_:($ptrType(I.URL)).nil;this.targetScheme=targetScheme_!==undefined?targetScheme_:"";this.targetAddr=targetAddr_!==undefined?targetAddr_:"";});��($ptrType(ID)).methods=[["addr","addr","net/http",$funcType([],[$String],false),-1],["key","key","net/http",$funcType([],[IE],false),-1],["proxyAuth","proxyAuth","net/http",$funcType([],[$String],false),-1],["tlsHost","tlsHost","net/http",$funcType([],[$String],false),-1]];ID.init([["proxyURL","proxyURL","net/http",($ptrType(I.URL)),""],["targetScheme","targetScheme","net/http",$String,""],["targetAddr","targetAddr","net/http",$String,""]]);0
sync:Mutex 0�v 0II��II=$pkg.responseAndError=$newType(0,"Struct","http.responseAndError","responseAndError","net/http",function(res_,err_){this.$val=this;this.res=res_!==undefined?res_:($ptrType(DR)).nil;this.err=err_!==undefined?err_:$ifaceNil;});YII.init([["res","res","net/http",($ptrType(DR)),""],["err","err","net/http",$error,""]]);0responseAndError0net/http:Response 0� 0IJ�2IJ=$pkg.requestAndChan=$newType(0,"Struct","http.requestAndChan","requestAndChan","net/http",function(req_,ch_,addedGzip_){this.$val=this;this.req=req_!==undefined?req_:($ptrType(DC)).nil;this.ch=ch_!==undefined?ch_:($chanType(II,false,false)).nil;this.addedGzip=addedGzip_!==undefined?addedGzip_:false;});��IJ.init([["req","req","net/http",($ptrType(DC)),""],["ch","ch","net/http",($chanType(II,false,false)),""],["addedGzip","addedGzip","net/http",$Bool,""]]);0requestAndChan0-net/http:Requestnet/http:responseAndError 0�� 0IK��IK=$pkg.writeRequest=$newType(0,"Struct","http.writeRequest","writeRequest","net/http",function(req_,ch_){this.$val=this;this.req=req_!==undefined?req_:($ptrType(HY)).nil;this.ch=ch_!==undefined?ch_:($chanType($error,true,false)).nil;});oIK.init([["req","req","net/http",($ptrType(HY)),""],["ch","ch","net/http",($chanType($error,true,false)),""]]);0writeRequest0net/http:transportRequest 0� 0IL��IL=$pkg.httpError=$newType(0,"Struct","http.httpError","httpError","net/http",function(err_,timeout_){this.$val=this;this.err=err_!==undefined?err_:"";this.timeout=timeout_!==undefined?timeout_:false;});�($ptrType(IL)).methods=[["Error","Error","",$funcType([],[$String],false),-1],["Temporary","Temporary","",$funcType([],[$Bool],false),-1],["Timeout","Timeout","",$funcType([],[$Bool],false),-1]];IL.init([["err","err","net/http",$String,""],["timeout","timeout","net/http",$Bool,""]]);0	httpError0  0� 0IQ��IQ=$pkg.bodyEOFSignal=$newType(0,"Struct","http.bodyEOFSignal","bodyEOFSignal","net/http",function(body_,mu_,closed_,rerr_,fn_,earlyCloseFn_){this.$val=this;this.body=body_!==undefined?body_:$ifaceNil;this.mu=mu_!==undefined?mu_:new K.Mutex.Ptr();this.closed=closed_!==undefined?closed_:false;this.rerr=rerr_!==undefined?rerr_:$ifaceNil;this.fn=fn_!==undefined?fn_:$throwNilPointerError;this.earlyCloseFn=earlyCloseFn_!==undefined?earlyCloseFn_:$throwNilPointerError;});�($ptrType(IQ)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["condfn","condfn","net/http",$funcType([$error],[],false),-1]];IQ.init([["body","body","net/http",E.ReadCloser,""],["mu","mu","net/http",K.Mutex,""],["closed","closed","net/http",$Bool,""],["rerr","rerr","net/http",$error,""],["fn","fn","net/http",($funcType([$error],[],false)),""],["earlyCloseFn","earlyCloseFn","net/http",($funcType([],[$error],false)),""]]);0
sync:Mutex 0�� 0IR��IR=$pkg.gzipReader=$newType(0,"Struct","http.gzipReader","gzipReader","net/http",function(body_,zr_){this.$val=this;this.body=body_!==undefined?body_:$ifaceNil;this.zr=zr_!==undefined?zr_:$ifaceNil;});��($ptrType(IR)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];IR.init([["body","body","net/http",E.ReadCloser,""],["zr","zr","net/http",E.Reader,""]]);0
gzipReader0
colonSpace0  0] 0EJ EJ=new K.Pool.Ptr();0bufioReaderPool0%net/http:bufioReaderPool	sync:Pool 0a 0EK EK=new K.Pool.Ptr();0bufioWriter2kPool0'net/http:bufioWriter2kPool	sync:Pool 0a 0EL EL=new K.Pool.Ptr();0bufioWriter4kPool0'net/http:bufioWriter4kPool	sync:Pool 0  0ET  0
headerDate0  0U 0EY EY=new K.RWMutex.Ptr();0
statusMu0!net/http:statusMusync:RWMutex 0  0EZ  0
uniqNameMu0!net/http:uniqNameMu
sync:Mutex 0! 0GK  0uniqNameNext0  0$ 0GP  0sniffSignatures0  0 0GV  0
statusText0  0) 0HD  0suppressedHeaders3040  0, 0HE  0suppressedHeadersNoBody0  0& 0   0ErrBodyReadAfterClose0  0 0HO  0
singleCRLF0  0 0HP  0
doubleCRLF0  0" 0HR  0
noProxyEnv0  0a 0IG IG=$throwNilPointerError;0remoteSideClosedFunc0net/http:remoteSideClosedFunc 0 0IM  0
errTimeout0  0 0IN  0	errClosed0  0 0IO  0	portMap0  0k 0  7    $pkg.ErrLineTooLong=C.New("header line too long");0 0%
errors:Newnet/http:ErrLineTooLong 0�� 0  b    $pkg.DefaultClient=new AI.Ptr($ifaceNil,$throwNilPointerError,$ifaceNil,new L.Duration(0,0));0
errors:Newnet/http:errSeeker 0@ 0      CI=false;0
errors:Newnet/http:ErrMissingFile 0�� 0  9    $pkg.ErrHeaderTooLong=new CZ.Ptr("header too long");0ErrHeaderTooLong03net/http:ErrHeaderTooLongnet/http:ProtocolError 0�� 0  ;    $pkg.ErrShortBody=new CZ.Ptr("entity body too short");0ErrShortBody0/net/http:ErrShortBodynet/http:ProtocolError 0�� 0  >    $pkg.ErrNotSupported=new CZ.Ptr("feature not supported");0ErrNotSupported02net/http:ErrNotSupportednet/http:ProtocolError 0�� 0  ^    $pkg.ErrUnexpectedTrailer=new CZ.Ptr("trailer header without chunked transfer encoding");0ErrUnexpectedTrailer07net/http:ErrUnexpectedTrailernet/http:ProtocolError 0�� 0  W    $pkg.ErrMissingContentLength=new CZ.Ptr("missing ContentLength in HEAD response");0ErrMissingContentLength0: net/http:ErrMissingContentLengthnet/http:ProtocolError 0�� 0  W    $pkg.ErrNotMultipart=new CZ.Ptr("request Content-Type isn't multipart/form-data");0ErrNotMultipart02net/http:ErrNotMultipartnet/http:ProtocolError 0�� 0  W    $pkg.ErrMissingBoundary=new CZ.Ptr("no multipart boundary param in Content-Type");0ErrMissingBoundary05net/http:ErrMissingBoundarynet/http:ProtocolError 0�
errors:Newnet/http:ErrNoCookie 0n 0  .    DD=new P.Form.Ptr(new $Map(),new $Map());0 01mime/multipart:Formnet/http:multipartByReader 0�� 0cd ��    DQ=(c=new $Map(),d="Content-Length",c[d]={k:d,v:true},d="Transfer-Encoding",c[d]={k:d,v:true},d="Trailer",c[d]={k:d,v:true},c);0respExcludeHeader0net/http:respExcludeHeader 0y 0  F    $pkg.ErrNoLocation=C.New("http: no Location header in response");0 0$
errors:Newnet/http:ErrNoLocation 0| 0  D    $pkg.ErrWriteAfterFlush=C.New("Conn.Write called after Flush");0 0)
errors:Newnet/http:ErrWriteAfterFlush 0�� 0  f    $pkg.ErrBodyNotAllowed=C.New("http: request method or response status code does not allow body");0 0(
errors:Newnet/http:ErrBodyNotAllowed 0g 0  6    $pkg.ErrHijacked=C.New("Conn has been hijacked");0 0"
errors:Newnet/http:ErrHijacked 0�� 0  [    $pkg.ErrContentLength=C.New("Conn.Write wrote more than the declared Content-Length");0 0'
errors:Newnet/http:ErrContentLength 0\ 0  8    EE=new($sliceType($Uint8))($stringToBytes("\r\n"));0crlf0
colonSpace0net/http:colonSpace 0�� 0  ��    CK=new($sliceType($String))(["Mon, 02 Jan 2006 15:04:05 GMT","Monday, 02-Jan-06 15:04:05 MST","Mon Jan _2 15:04:05 2006"]);0
errors:Newnet/http:errTooLarge 0� 0  ��    EV=new($sliceType(($sliceType($Uint8))))([new($sliceType($Uint8))($stringToBytes("Content-Type")),new($sliceType($Uint8))($stringToBytes("Connection")),new($sliceType($Uint8))($stringToBytes("Transfer-Encoding"))]);0extraHeaderKeys0net/http:extraHeaderKeys 0�� 0  D    EW=new($sliceType($Uint8))($stringToBytes("Content-Length: "));0headerContentLength0net/http:headerContentLength 0j 0  :    EX=new($sliceType($Uint8))($stringToBytes("Date: "));0
headerDate0net/http:headerDate 08 0      EZ=new $Map();0 0net/http:statusLines 0�� 0  n    FI=J.NewReplacer(new($sliceType($String))(["&","&amp;","<","&lt;",">","&gt;","\"","&#34;","'","&#39;"]));0 0,net/http:htmlReplacerstrings:NewReplacer 0^ 0      $pkg.DefaultServeMux=FO();0 00net/http:DefaultServeMuxnet/http:NewServeMux 0�� 0ef ��    FW=(e=new $Map(),f=0,e[f]={k:f,v:"new"},f=1,e[f]={k:f,v:"active"},f=2,e[f]={k:f,v:"idle"},f=3,e[f]={k:f,v:"hijacked"},f=4,e[f]={k:f,v:"closed"},e);0	stateName0net/http:stateName 0r 0  ;    $pkg.ErrHandlerTimeout=C.New("http: Handler timeout");0 0(
errors:Newnet/http:ErrHandlerTimeout 0�� 0  ��    GG=new($structType([["eofReaderWithWriteTo","","net/http",GF,""],["Closer","","",E.Closer,""]])).Ptr(new GF.Ptr(),G.NopCloser($ifaceNil));0 0Sio/ioutil:NopCloser	io:Closernet/http:eofReadernet/http:eofReaderWithWriteTo 0 0      0_0  09 0      GK=new $Map();0 0net/http:uniqNameNext 0�D 0  �
�    GP=new($sliceType(GO))([new GS($stringToBytes("<!DOCTYPE HTML")),new GS($stringToBytes("<HTML")),new GS($stringToBytes("<HEAD")),new GS($stringToBytes("<SCRIPT")),new GS($stringToBytes("<IFRAME")),new GS($stringToBytes("<H1")),new GS($stringToBytes("<DIV")),new GS($stringToBytes("<FONT")),new GS($stringToBytes("<TABLE")),new GS($stringToBytes("<A")),new GS($stringToBytes("<STYLE")),new GS($stringToBytes("<TITLE")),new GS($stringToBytes("<B")),new GS($stringToBytes("<BODY")),new GS($stringToBytes("<BR")),new GS($stringToBytes("<P")),new GS($stringToBytes("<!--")),new GR.Ptr(new($sliceType($Uint8))($stringToBytes("\xFF\xFF\xFF\xFF\xFF")),new($sliceType($Uint8))($stringToBytes("<?xml")),true,"text/xml; charset=utf-8"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("%PDF-")),"application/pdf"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("%!PS-Adobe-")),"application/postscript"),new GR.Ptr(new($sliceType($Uint8))($stringToBytes("\xFF\xFF\x00\x00")),new($sliceType($Uint8))($stringToBytes("\xFE\xFF\x00\x00")),false,"text/plain; charset=utf-16be"),new GR.Ptr(new($sliceType($Uint8))($stringToBytes("\xFF\xFF\x00\x00")),new($sliceType($Uint8))($stringToBytes("\xFF\xFE\x00\x00")),false,"text/plain; charset=utf-16le"),new GR.Ptr(new($sliceType($Uint8))($stringToBytes("\xFF\xFF\xFF\x00")),new($sliceType($Uint8))($stringToBytes("\xEF\xBB\xBF\x00")),false,"text/plain; charset=utf-8"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("GIF87a")),"image/gif"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("GIF89a")),"image/gif"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("\x89PNG\r\n\x1A\n")),"image/png"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("\xFF\xD8\xFF")),"image/jpeg"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("BM")),"image/bmp"),new GR.Ptr(new($sliceType($Uint8))($stringToBytes("\xFF\xFF\xFF\xFF\x00\x00\x00\x00\xFF\xFF\xFF\xFF\xFF\xFF")),new($sliceType($Uint8))($stringToBytes("RIFF\x00\x00\x00\x00WEBPVP")),false,"image/webp"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("\x00\x00\x01\x00")),"image/vnd.microsoft.icon"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("OggS\x00")),"application/ogg"),new GR.Ptr(new($sliceType($Uint8))($stringToBytes("\xFF\xFF\xFF\xFF\x00\x00\x00\x00\xFF\xFF\xFF\xFF")),new($sliceType($Uint8))($stringToBytes("RIFF\x00\x00\x00\x00WAVE")),false,"audio/wave"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("\x1AE\xDF\xA3")),"video/webm"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("Rar \x1A\x07\x00")),"application/x-rar-compressed"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("PK\x03\x04")),"application/zip"),new GQ.Ptr(new($sliceType($Uint8))($stringToBytes("\x1F\x8B\b")),"application/x-gzip"),new GU(0)]);0sniffSignatures0xnet/http:exactSignet/http:htmlSignet/http:maskedSignet/http:sniffSignet/http:sniffSignaturesnet/http:textSig 0�� 0gh ��    GV=(g=new $Map(),h=100,g[h]={k:h,v:"Continue"},h=101,g[h]={k:h,v:"Switching Protocols"},h=200,g[h]={k:h,v:"OK"},h=201,g[h]={k:h,v:"Created"},h=202,g[h]={k:h,v:"Accepted"},h=203,g[h]={k:h,v:"Non-Authoritative Information"},h=204,g[h]={k:h,v:"No Content"},h=205,g[h]={k:h,v:"Reset Content"},h=206,g[h]={k:h,v:"Partial Content"},h=300,g[h]={k:h,v:"Multiple Choices"},h=301,g[h]={k:h,v:"Moved Permanently"},h=302,g[h]={k:h,v:"Found"},h=303,g[h]={k:h,v:"See Other"},h=304,g[h]={k:h,v:"Not Modified"},h=305,g[h]={k:h,v:"Use Proxy"},h=307,g[h]={k:h,v:"Temporary Redirect"},h=400,g[h]={k:h,v:"Bad Request"},h=401,g[h]={k:h,v:"Unauthorized"},h=402,g[h]={k:h,v:"Payment Required"},h=403,g[h]={k:h,v:"Forbidden"},h=404,g[h]={k:h,v:"Not Found"},h=405,g[h]={k:h,v:"Method Not Allowed"},h=406,g[h]={k:h,v:"Not Acceptable"},h=407,g[h]={k:h,v:"Proxy Authentication Required"},h=408,g[h]={k:h,v:"Request Timeout"},h=409,g[h]={k:h,v:"Conflict"},h=410,g[h]={k:h,v:"Gone"},h=411,g[h]={k:h,v:"Length Required"},h=412,g[h]={k:h,v:"Precondition Failed"},h=413,g[h]={k:h,v:"Request Entity Too Large"},h=414,g[h]={k:h,v:"Request URI Too Long"},h=415,g[h]={k:h,v:"Unsupported Media Type"},h=416,g[h]={k:h,v:"Requested Range Not Satisfiable"},h=417,g[h]={k:h,v:"Expectation Failed"},h=418,g[h]={k:h,v:"I'm a teapot"},h=500,g[h]={k:h,v:"Internal Server Error"},h=501,g[h]={k:h,v:"Not Implemented"},h=502,g[h]={k:h,v:"Bad Gateway"},h=503,g[h]={k:h,v:"Service Unavailable"},h=504,g[h]={k:h,v:"Gateway Timeout"},h=505,g[h]={k:h,v:"HTTP Version Not Supported"},h=428,g[h]={k:h,v:"Precondition Required"},h=429,g[h]={k:h,v:"Too Many Requests"},h=431,g[h]={k:h,v:"Request Header Fields Too Large"},h=511,g[h]={k:h,v:"Network Authentication Required"},g);0
statusText0net/http:statusText 0�� 0  X    HD=new($sliceType($String))(["Content-Type","Content-Length","Transfer-Encoding"]);0suppressedHeaders3040net/http:suppressedHeaders304 0�� 0  I    HE=new($sliceType($String))(["Content-Length","Transfer-Encoding"]);0suppressedHeadersNoBody0" net/http:suppressedHeadersNoBody 0�� 0  K    $pkg.ErrBodyReadAfterClose=C.New("http: invalid Read on closed Body");0 0,
errors:Newnet/http:ErrBodyReadAfterClose 0h 0  8    HO=new($sliceType($Uint8))($stringToBytes("\r\n"));0
singleCRLF0net/http:singleCRLF 0l 0  <    HP=new($sliceType($Uint8))($stringToBytes("\r\n\r\n"));0
doubleCRLF0net/http:doubleCRLF 0i 0  6    HR=C.New("http: unexpected EOF reading trailer");0 0$
errors:Newnet/http:errTrailerEOF 0�� 0  ^    HZ=new IB.Ptr(new($sliceType($String))(["HTTP_PROXY","http_proxy"]),new K.Once.Ptr(),"");0httpProxyEnv04net/http:envOncenet/http:httpProxyEnv	sync:Once 0�� 0  Z    IA=new IB.Ptr(new($sliceType($String))(["NO_PROXY","no_proxy"]),new K.Once.Ptr(),"");0
noProxyEnv02net/http:envOncenet/http:noProxyEnv	sync:Once 0�� 0  G    IM=new IL.Ptr("net/http: timeout awaiting response headers",true);0
errTimeout0)net/http:errTimeoutnet/http:httpError 0�� 0  T    IN=new IL.Ptr("net/http: transport closed before response was received",false);0	errClosed0(net/http:errClosednet/http:httpError 0�� 0ij Q    IO=(i=new $Map(),j="http",i[j]={k:j,v:"80"},j="https",i[j]={k:j,v:"443"},i);0	portMap0net/http:portMap 0� 0  �T    $pkg.DefaultTransport=new HV.Ptr(new K.Mutex.Ptr(),false,false,new K.Mutex.Ptr(),false,new K.RWMutex.Ptr(),false,HW,$methodVal((new M.Dialer.Ptr(new L.Duration(6,4230196224),new L.Time.Ptr(),$ifaceNil,false,new L.Duration(6,4230196224))),"Dial"),($ptrType(V.Config)).nil,new L.Duration(2,1410065408),false,false,0,new L.Duration(0,0));0DefaultTransport0��crypto/tls:Confignet/http:DefaultTransportnet/http:ProxyFromEnvironmentnet/http:Transport
net:Dialer
sync:Mutexsync:RWMutex
beginChunk0Jio:EOFnet/http:chunkedReadernet/http:parseHexUintnet/http:readLine 0��.(*net/http.chunkedReader).chunkHeaderAvailable0 �"AB.Ptr.prototype.chunkHeaderAvailable=function(){var k,l,m,n;  fk=this;  �l=k.r.Buffered();  �    if(l>0){  �m=k.r.Peek(l);n=m[0];  �return B.IndexByte(n,10)>=0;    }  return false;    };AB.prototype.chunkHeaderAvailable=function(){return this.$val.chunkHeaderAvailable();}; 0%
errors:Newio:ReadFullnet/http:beginChunknet/http:chunkHeaderAvailablenet/http:chunkedReader 0��net/http.readLine0AC�)AC=function(k){var l=($sliceType($Uint8)).nil,m=$ifaceNil,n,o,p,q,r,s,t;  
9  
<n=k.ReadSlice(10);l=n[0];m=n[1];    if(!($interfaceIsEqual(m,$ifaceNil))){  
�    if($interfaceIsEqual(m,E.EOF)){  
�m=E.ErrUnexpectedEOF;        }else if($interfaceIsEqual(m,A.ErrBufferFull)){  (m=$pkg.ErrLineTooLong;    }  C    o=($sliceType($Uint8)).nil;p=m;l=o;m=p;return[l,m];    }  W    if(l.$length>=4096){  v    q=($sliceType($Uint8)).nil;r=$pkg.ErrLineTooLong;l=q;m=r;return[l,m];    }  �    s=AD(l);t=$ifaceNil;l=s;m=t;return[l,m];    }; 0
readLine0lbufio:ErrBufferFullio:EOFio:ErrUnexpectedEOFnet/http:ErrLineTooLongnet/http:trimTrailingWhitespace 0�>net/http.trimTrailingWhitespace0AD��AD=function(k){var l;  �while(k.$length>0&&AE((l=k.$length-1>>0,((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l])))){  k=$subslice(k,0,(k.$length-1>>0));    }  3return k;    }; 0trimTrailingWhitespace0net/http:isASCIISpace 0}net/http.isASCIISpace0AEGAE=function(k){  areturn(k===32)||(k===9)||(k===10)||(k===13);    }; 0isASCIISpace0  0��net/http.newChunkedWriter0AF0AF=function(k){  �return new AG.Ptr(k);    }; 0newChunkedWriter0net/http:chunkedWriter 0�(*net/http.chunkedWriter).Write0 ��AG.Ptr.prototype.Write=function(k){var l=0,m=$ifaceNil,n,o,p,q,r,s,t,u;  �n=this;      if(k.$length===0){      o=0;p=$ifaceNil;l=o;m=p;return[l,m];    }  .  1q=D.Fprintf(n.Wire,"%x\r\n",new($sliceType($emptyInterface))([new $Int(k.$length)]));m=q[1];    if(!($interfaceIsEqual(m,$ifaceNil))){  t    r=0;s=m;l=r;m=s;return[l,m];    }  �  �t=n.Wire.Write(k);l=t[0];m=t[1];    if(!($interfaceIsEqual(m,$ifaceNil))){  �return[l,m];    }  �    if(!((l===k.$length))){  �m=E.ErrShortWrite;  �return[l,m];    }  �u=E.WriteString(n.Wire,"\r\n");m=u[1];  &return[l,m];    };AG.prototype.Write=function(k){return this.$val.Write(k);}; 0
errors:New 0��net/http.hasPort0AKHAK=function(k){  "2return J.LastIndex(k,":")>J.LastIndex(k,"]");    }; 0	hasPort0strings:LastIndex 0��(*net/http.Client).send0 ��AI.Ptr.prototype.send=function(k){var l,m,n,o,p,q,r,s;  #Kl=this;  #    if(!($interfaceIsEqual(l.Jar,$ifaceNil))){  #�m=l.Jar.Cookies(k.URL);n=0;while(n<m.$length){o=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]);  #�k.AddCookie(o);    n++;}    }  #�p=AM(k,l.transport());q=p[0];r=p[1];  $    if(!($interfaceIsEqual(r,$ifaceNil))){  $return[($ptrType(DR)).nil,r];    }  $1    if(!($interfaceIsEqual(l.Jar,$ifaceNil))){  $E  $Hs=q.Cookies();    if(s.$length>0){  $ol.Jar.SetCookies(k.URL,s);    }    }  $�return[q,r];    };AI.prototype.send=function(k){return this.$val.send(k);}; 0Clientsend0Gnet/http:Clientnet/http:Response
errors:New
log:Printfnet/http:Headernet/http:Responsenet/http:basicAuthnet/http:closeBodynet/url:URLnet/url:Userinfo 0��net/http.basicAuth0AN��AN=function(k,l){var m;  .�m=k+":"+l;  / return F.StdEncoding.EncodeToString(new($sliceType($Uint8))($stringToBytes(m)));    }; 0	basicAuth0encoding/base64:StdEncoding 0��net/http.shouldRedirectGet0AOzAO=function(k){var l;  /�l=k;  0if(l===301||l===302||l===303||l===307){  0`return true;    }  0preturn false;    }; 0shouldRedirectGet0  0��net/http.shouldRedirectPost0APhAP=function(k){var l;  1l=k;  13if(l===302||l===303){  1Wreturn true;    }  1greturn false;    }; 0shouldRedirectPost0  0��net/http.Get0AQ��AQ=$pkg.Get=function(k){var l=($ptrType(DR)).nil,m=$ifaceNil,n;  3�    n=$pkg.DefaultClient.Get(k);l=n[0];m=n[1];return[l,m];    }; 0Get0+net/http:DefaultClientnet/http:Response 0�(*net/http.Client).Get0 �wAI.Ptr.prototype.Get=function(k){var l=($ptrType(DR)).nil,m=$ifaceNil,n,o,p,q,r,s;  6Yn=this;  6�o=DG("GET",k,$ifaceNil);p=o[0];m=o[1];  6�    if(!($interfaceIsEqual(m,$ifaceNil))){  6�    q=($ptrType(DR)).nil;r=m;l=q;m=r;return[l,m];    }  6�    s=n.doFollowingRedirects(p,AO);l=s[0];m=s[1];return[l,m];    };AI.prototype.Get=function(k){return this.$val.Get(k);}; 0Client0tnet/http:Clientnet/http:NewRequestnet/http:Responsenet/http:doFollowingRedirectsnet/http:shouldRedirectGet 0��'(*net/http.Client).doFollowingRedirects0 ��AI.Ptr.prototype.doFollowingRedirects=function(k,l){var m=($ptrType(DR)).nil,n=$ifaceNil,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av;  7!o=this;  7�  7�p=($ptrType(I.URL)).nil;  7�q=o.CheckRedirect;  7�    if(q===$throwNilPointerError){  7�q=AR;    }  8  8r=($sliceType(($ptrType(DC)))).nil;  8#    if(k.URL===($ptrType(I.URL)).nil){  8:k.closeBody();  8M    s=($ptrType(DR)).nil;t=C.New("http: nil Request.URL");m=s;n=t;return[m,n];    }  8�  8�u=new K.Mutex.Ptr();$copy(u,new K.Mutex.Ptr(),K.Mutex);  8�v=k;  8�  8�w=($ptrType(L.Timer)).nil;  8�    if((x=o.Timeout,(x.$high>0||(x.$high===0&&x.$low>0)))){  8�y=$newType(8,"Interface","http.canceler","canceler","net/http",null);y.init([["CancelRequest","CancelRequest","",$funcType([($ptrType(DC))],[],false)]]);  9z=$assertType(o.transport(),y,true);aa=z[0];ab=z[1];  9@    if(!ab){  9L    ac=($ptrType(DR)).nil;ad=D.Errorf("net/http: Client Transport of type %T doesn't support CancelRequest; Timeout not supported",new($sliceType($emptyInterface))([o.transport()]));m=ac;n=ad;return[m,n];    }  9�w=L.AfterFunc(o.Timeout,(function(){var $deferred=[],$err=null;try{$deferFrames.push($deferred);  :u.Lock();  :$deferred.push([$methodVal(u,"Unlock"),[]]);  :,aa.CancelRequest(v);    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}));    }  :Lae="";  :�af=false;  :�  :�ag=0;while(true){  :�    if(!((ag===0))){  :�ah=new DC.Ptr();  ;ah.Method=k.Method;  ;"    if(k.Method==="POST"||k.Method==="PUT"){  ;Yah.Method="GET";    }  ;uah.Header=new $Map();  ;�ai=p.Parse(ae);ah.URL=ai[0];n=ai[1];  ;�    if(!($interfaceIsEqual(n,$ifaceNil))){  ;�break;    }  ;�    if(r.$length>0){  <ak=(aj=r.$length-1>>0,((aj<0||aj>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+aj]));  </    if(!(ak.URL.Scheme==="https")){  <W(new CJ(ah.Header)).Set("Referer",ak.URL.String());    }  <�n=q(ah,r);  <�    if(!($interfaceIsEqual(n,$ifaceNil))){  <�af=true;  <�break;    }    }  <�u.Lock();  =v=ah;  =u.Unlock();    }  =0ae=v.URL.String();  =L  =Oal=o.send(v);m=al[0];n=al[1];    if(!($interfaceIsEqual(n,$ifaceNil))){  =xbreak;    }  =�    if(l(m.StatusCode)){  >I  >m    if((am=m.ContentLength,(am.$high===-1&&am.$low===4294967295))||(an=m.ContentLength,(an.$high<0||(an.$high===0&&an.$low<=2048)))){  >�E.CopyN(G.Discard,m.Body,new $Int64(0,2048));    }  >�m.Body.Close();  ?  ?ae=(new CJ(m.Header)).Get("Location");    if(ae===""){  ?Hn=C.New(D.Sprintf("%d response missing Location header",new($sliceType($emptyInterface))([new $Int(m.StatusCode)])));  ?�break;    }  ?�p=v.URL;  ?�r=$append(r,v);  ?�  :�  :�ag=ag+(1)>>0;continue;    }  ?�    if(!(w===($ptrType(L.Timer)).nil)){  @ m.Body=new AV.Ptr(w,m.Body);    }  @5    ao=m;ap=$ifaceNil;m=ao;n=ap;return[m,n];    }  @Kaq=k.Method;  @bar=new I.Error.Ptr(aq.substring(0,1)+J.ToLower(aq.substring(1)),ae,n);  @�    if(af){  A�    as=m;at=ar;m=as;n=at;return[m,n];    }  A�    if(!(m===($ptrType(DR)).nil)){  A�m.Body.Close();    }  A�    au=($ptrType(DR)).nil;av=ar;m=au;n=av;return[m,n];    };AI.prototype.doFollowingRedirects=function(k,l){return this.$val.doFollowingRedirects(k,l);}; 0ClientdoFollowingRedirects0�N
errors:New
fmt:Errorffmt:Sprintfio/ioutil:Discardio:CopyNnet/http:Clientnet/http:Headernet/http:Requestnet/http:Responsenet/http:cancelTimerBodynet/http:closeBodynet/http:defaultCheckRedirect
sync:Mutextime:AfterFunc
time:Timer 0��net/http.defaultCheckRedirect0AR��AR=function(k,l){  B    if(l.$length>=10){  B0return C.New("stopped after 10 redirects");    }  Bdreturn $ifaceNil;    }; 0defaultCheckRedirect0
errors:New 0��
PostForm0+net/http:DefaultClientnet/http:Response 0��(*net/http.Client).PostForm0 �%AI.Ptr.prototype.PostForm=function(k,l){var m=($ptrType(DR)).nil,n=$ifaceNil,o,p;  G�o=this;  HL    p=o.Post(k,"application/x-www-form-urlencoded",J.NewReader((new I.Values(l)).Encode()));m=p[0];n=p[1];return[m,n];    };AI.prototype.PostForm=function(k,l){return this.$val.PostForm(k,l);}; 0Client0Gnet/http:Clientnet/http:Responsenet/url:Valuesstrings:NewReader 0��
time:Parse	time:Time 0��net/http.SetCookie0AY^AY=$pkg.SetCookie=function(k,l){  Y(new CJ(k.Header())).Add("Set-Cookie",l.String());    }; 0	SetCookie0net/http:Header 0��(*net/http.Cookie).String0 ��AW.Ptr.prototype.String=function(){var k,l,m,n;  Y�k=this;  Z	  Z
log:Printfnet/http:Cookienet/http:sanitizeCookieNamenet/http:sanitizeCookiePathnet/http:sanitizeCookieValuenet/http:validCookieDomain 0��net/http.readCookies0AZ�AZ=function(k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af;  ^�m=new($sliceType(($ptrType(AW))))([]);  ^�n=(o=k["Cookie"],o!==undefined?[o.v,true]:[($sliceType($String)).nil,false]);p=n[0];q=n[1];  ^�    if(!q){  _
return m;    }  _r=p;s=0;while(s<r.$length){t=((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]);  _=u=J.Split(J.TrimSpace(t),";");  _t    if((u.$length===1)&&((0<0||0>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+0])===""){  _�s++;continue;    }  _�v=0;  _�  _�w=0;while(w<u.$length){  _�(w<0||w>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+w]=J.TrimSpace(((w<0||w>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+w]));  `(    if(((w<0||w>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+w]).length===0){  `D  _�  _�w=w+(1)>>0;continue;    }  `Ux=((w<0||w>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+w]);y="";z=x;aa=y;  `r  `uab=J.Index(z,"=");    if(ab>=0){  `�ac=z.substring(0,ab);ad=z.substring((ab+1>>0));z=ac;aa=ad;    }  `�    if(!BK(z)){  `�  _�  _�w=w+(1)>>0;continue;    }  `�    if(!(l==="")&&!(l===z)){  a%  _�  _�w=w+(1)>>0;continue;    }  a6ae=BJ(aa);aa=ae[0];af=ae[1];  a_    if(!af){  aq  _�  _�w=w+(1)>>0;continue;    }  a�m=$append(m,new AW.Ptr(z,aa,"","",new L.Time.Ptr(),"",0,false,false,"",($sliceType($String)).nil));  a�  a�v=v+(1)>>0;      _�  _�w=w+(1)>>0;}    s++;}  a�return m;    }; 0
return false;    }  f  fn=n+(1)>>0;      f+}else if(p===46){  fh    if((l===46)||(l===45)){  f�return false;    }  f�    if(n>63||(n===0)){  f�return false;    }  f�n=0;    }else{  d�return false;    }  f�l=p;      d�  d�o=o+(1)>>0;}  f�    if((l===45)||n>63){  greturn false;    }  g0return m;    }; 0isCookieDomainName0  0��net/http.sanitizeCookieName0BD0BD=function(k){  g�return BC.Replace(k);    }; 0sanitizeCookieName0net/http:cookieNameSanitizer 0��net/http.sanitizeCookieValue0BE�BE=function(k){  j!k=BI("Cookie.Value",BF,k);  j^    if(k.length===0){  jqreturn k;    }  j~    if((k.charCodeAt(0)===32)||(k.charCodeAt(0)===44)||(k.charCodeAt((k.length-1>>0))===32)||(k.charCodeAt((k.length-1>>0))===44)){  j�return"\""+k+"\"";    }  j�return k;    }; 0sanitizeCookieValue08net/http:sanitizeOrWarnnet/http:validCookieValueByte 0��net/http.validCookieValueByte0BFVBF=function(k){  kreturn 32<=k&&k<127&&!((k===34))&&!((k===59))&&!((k===92));    }; 0validCookieValueByte0  0��net/http.sanitizeCookiePath0BG9BG=function(k){  k�return BI("Cookie.Path",BH,k);    }; 0sanitizeCookiePath07net/http:sanitizeOrWarnnet/http:validCookiePathByte 0��net/http.validCookiePathByte0BH<BH=function(k){  lTreturn 32<=k&&k<127&&!((k===59));    }; 0validCookiePathByte0  0��net/http.sanitizeOrWarn0BI�BBI=function(k,l,m){var n,o,p,q,r;  l�n=true;  l�  l�o=0;while(o<m.length){  l�    if(l(m.charCodeAt(o))){  m  l�  l�o=o+(1)>>0;continue;    }  m H.Printf("net/http: invalid byte %q in %s; dropping invalid bytes",new($sliceType($emptyInterface))([new $Uint8(m.charCodeAt(o)),new $String(k)]));  myn=false;  m�break;    }  m�    if(n){  m�return m;    }  m�p=($sliceType($Uint8)).make(0,m.length);  m�  m�q=0;while(q<m.length){  m�  m�r=m.charCodeAt(q);    if(l(r)){  np=$append(p,r);    }      m�  m�q=q+(1)>>0;}  n return $bytesToString(p);    }; 0sanitizeOrWarn0
log:Printf 0��net/http.parseCookieValue0BJ�-BJ=function(k){var l;  n�    if(k.length>1&&(k.charCodeAt(0)===34)&&(k.charCodeAt((k.length-1>>0))===34)){  n�k=k.substring(1,(k.length-1>>0));    }  n�  n�l=0;while(l<k.length){  o    if(!BF(k.charCodeAt(l))){  o1return["",false];    }      o  ol=l+(1)>>0;}  oJreturn[k,true];    }; 0parseCookieValue0net/http:validCookieValueByte 0��net/http.isCookieNameValid0BK6BK=function(k){  o�return J.IndexFunc(k,CY)<0;    }; 0isCookieNameValid0(net/http:isNotTokenstrings:IndexFunc 0��net/http.NewFileTransport0BMwBM=$pkg.NewFileTransport=function(k){var l;  |	return(l=new BL.Ptr(new CB.Ptr(k)),new l.constructor.Struct(l));    }; 0NewFileTransport0.net/http:fileHandlernet/http:fileTransport 0��"(net/http.fileTransport).RoundTrip0 �BL.Ptr.prototype.RoundTrip=function(k,$b){var $this=this,$args=arguments,l=($ptrType(DR)).nil,m=$ifaceNil,$r,$s=0,n,o,p,q,r,s,t;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  |8n=new BL.Ptr();$copy(n,$this,BL);  }�o=BN();p=o[0];q=o[1];  }�$go((function($b){var $this=this,$args=arguments,$r,$s=0;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  ~
n.fh.ServeHTTP(p,k);  ~$$r=p.finish(true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}),[]);  ~6    s=$recv(q,true);$s=1;case 1:if(s&&s.$blocking){s=s();}r=s[0];t=$ifaceNil;l=r;m=t;return[l,m];    case-1:}return;}};$f.$blocking=true;return $f;};BL.prototype.RoundTrip=function(k,$b){return this.$val.RoundTrip(k,$b);}; 0
errors:Newnet/http:Diros:Openpath/filepath:FromSlashpath/filepath:Join
path:Cleanstrings:Containsstrings:IndexRune 0��net/http.dirList0BS�BS=function(k,l){var m,n,o,p,q,r,s,t;  �l(new CJ(k.Header())).Set("Content-Type","text/html; charset=utf-8");  ��D.Fprintf(k,"<pre>\n",new($sliceType($emptyInterface))([]));  ��while(true){  ��m=l.Readdir(100);n=m[0];o=m[1];  ��    if(!($interfaceIsEqual(o,$ifaceNil))||(n.$length===0)){  �break;    }  �p=n;q=0;while(q<p.$length){r=((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]);  �6s=r.Name();  �J    if(r.IsDir()){  �]s=s+("/");    }  �t=new I.URL.Ptr("","",($ptrType(I.Userinfo)).nil,"",s,"","");  �.D.Fprintf(k,"<a href=\"%s\">%s</a>\n",new($sliceType($emptyInterface))([new $String(t.String()),new $String(FI.Replace(s))]));    q++;}    }  ��D.Fprintf(k,"</pre>\n",new($sliceType($emptyInterface))([]));    }; 0	dirList0Tfmt:Fprintfnet/http:Headernet/http:htmlReplacernet/url:URLnet/url:Userinfo 0�net/http.ServeContent0BT��BT=$pkg.ServeContent=function(k,l,m,n,o){var p;  ��p=(function(){var p,q,r,s;  ��p=o.Seek(new $Int64(0,0),2);q=p[0];r=p[1];  ��    if(!($interfaceIsEqual(r,$ifaceNil))){  ��return[new $Int64(0,0),BU];    }  �s=o.Seek(new $Int64(0,0),0);r=s[1];  �9    if(!($interfaceIsEqual(r,$ifaceNil))){  �Lreturn[new $Int64(0,0),BU];    }  �freturn[q,$ifaceNil];    });  �{BV(k,l,m,$clone(n,L.Time),p,o);    }; 0ServeContent06net/http:errSeekernet/http:serveContent	time:Time 0�unet/http.serveContent0BV�
time:Parse	time:Time 0�net/http.checkETag0BX��BX=function(k,l){var m="",n=false,o,p,q,r,s,t,u,v,w,x,y,z;  �o=(new CJ(k.Header())).get("Etag");  �8m=(new CJ(l.Header)).get("Range");  ��  ��p=(new CJ(l.Header)).get("If-Range");    if(!(p==="")&&!(p===o)){  ��m="";    }  ��  ��q=(new CJ(l.Header)).get("If-None-Match");    if(!(q==="")){  �    if(o===""){  �+    r=m;s=false;m=r;n=s;return[m,n];    }  �k    if(!(l.Method==="GET")&&!(l.Method==="HEAD")){  ��    t=m;u=false;m=t;n=u;return[m,n];    }  �Z    if(q===o||q==="*"){  �|v=k.Header();  ��delete v["Content-Type"];  ��delete v["Content-Length"];  ��k.WriteHeader(304);  ��    w="";x=true;m=w;n=x;return[m,n];    }    }  �    y=m;z=false;m=y;n=z;return[m,n];    }; 0	checkETag0net/http:Headernet/http:get 0�*net/http.serveFile0BY�^BY=function(k,l,m,n,o){var $deferred=[],$err=null,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad;try{$deferFrames.push($deferred);  ��  �o    if(J.HasSuffix(l.URL.Path,"/index.html")){  ��BZ(k,l,"./");  ��return;    }  ��p=m.Open(n);q=p[0];r=p[1];  ��    if(!($interfaceIsEqual(r,$ifaceNil))){  �FE(k,l);  �"return;    }  �-$deferred.push([$methodVal(q,"Close"),[]]);  �?s=q.Stat();t=s[0];u=s[1];  �T    if(!($interfaceIsEqual(u,$ifaceNil))){  ��FE(k,l);  ��return;    }  ��    if(o){  �v=l.URL.Path;  �'    if(t.IsDir()){  �9    if(!((v.charCodeAt((v.length-1>>0))===47))){  �YBZ(k,l,S.Base(v)+"/");  ��return;    }    }else{  ��    if(v.charCodeAt((v.length-1>>0))===47){  ��BZ(k,l,"../"+S.Base(v));  ��return;    }    }    }  �;    if(t.IsDir()){  �Lw=n+"/index.html";  �hx=m.Open(w);y=x[0];z=x[1];  ��    if($interfaceIsEqual(z,$ifaceNil)){  ��$deferred.push([$methodVal(y,"Close"),[]]);  ��aa=y.Stat();ab=aa[0];ac=aa[1];  ��    if($interfaceIsEqual(ac,$ifaceNil)){  ��n=w;  ��t=ab;  ��q=y;    }    }    }  �C    if(t.IsDir()){  �T    if(BW(k,l,$clone(t.ModTime(),L.Time))){  ��return;    }  ��BS(k,q);  ��return;    }  ��ad=(function(){  ��return[t.Size(),$ifaceNil];    });  �BV(k,l,t.Name(),$clone(t.ModTime(),L.Time),ad,q);    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}; 0	serveFile0��net/http:NotFoundnet/http:checkLastModifiednet/http:dirListnet/http:localRedirectnet/http:serveContent	path:Basestrings:HasSuffix	time:Time 0��net/http.localRedirect0BZ��BZ=function(k,l,m){var n;  �  �n=l.URL.RawQuery;    if(!(n==="")){  �8m=m+("?"+n);    }  �O(new CJ(k.Header())).Set("Location",m);  �tk.WriteHeader(301);    }; 0
FileServer0net/http:fileHandler 0��!(*net/http.fileHandler).ServeHTTP0 �CB.Ptr.prototype.ServeHTTP=function(k,l){var m,n;  ��m=this;  �6n=l.URL.Path;  �K    if(!J.HasPrefix(n,"/")){  �qn="/"+n;  ��l.URL.Path=n;    }  ��BY(k,l,m.root,S.Clean(n),true);    };CB.prototype.ServeHTTP=function(k,l){return this.$val.ServeHTTP(k,l);}; 0
path:Cleanstrings:HasPrefix 0��!(net/http.httpRange).contentRange0 �eCD.Ptr.prototype.contentRange=function(k){var l,m,n,o;  �Hl=new CD.Ptr();$copy(l,this,CD);  �xreturn D.Sprintf("bytes %d-%d/%d",new($sliceType($emptyInterface))([l.start,(m=(n=l.start,o=l.length,new $Int64(n.$high+o.$high,n.$low+o.$low)),new $Int64(m.$high-0,m.$low-1)),k]));    };CD.prototype.contentRange=function(k){return this.$val.contentRange(k);}; 0	httpRangecontentRange0!fmt:Sprintfnet/http:httpRange 0��(net/http.httpRange).mimeHeader0 �NCD.Ptr.prototype.mimeHeader=function(k,l){var m,n,o;  ��m=new CD.Ptr();$copy(m,this,CD);  �return(n=new $Map(),o="Content-Range",n[o]={k:o,v:new($sliceType($String))([m.contentRange(l)])},o="Content-Type",n[o]={k:o,v:new($sliceType($String))([k])},n);    };CD.prototype.mimeHeader=function(k,l){return this.$val.mimeHeader(k,l);}; 0	httpRange
mimeHeader0+net/http:contentRangenet/http:httpRange 0��net/http.parseRange0CE��CE=function(k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj;  �    if(k===""){  �return[($sliceType(CD)).nil,$ifaceNil];    }  �<  �P    if(!J.HasPrefix(k,"bytes=")){  �preturn[($sliceType(CD)).nil,C.New("invalid range")];    }  ��  ��m=($sliceType(CD)).nil;  ��n=J.Split(k.substring(6),",");o=0;while(o<n.$length){p=((o<0||o>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+o]);  ��p=J.TrimSpace(p);  �    if(p===""){  �o++;continue;    }  �'q=J.Index(p,"-");  �E    if(q<0){  �Sreturn[($sliceType(CD)).nil,C.New("invalid range")];    }  ��r=J.TrimSpace(p.substring(0,q));s=J.TrimSpace(p.substring((q+1>>0)));t=r;u=s;  ��  ��v=new CD.Ptr();$copy(v,new CD.Ptr(),CD);  ��    if(t===""){  �Sw=N.ParseInt(u,10,64);x=w[0];y=w[1];  �~    if(!($interfaceIsEqual(y,$ifaceNil))){  ��return[($sliceType(CD)).nil,C.New("invalid range")];    }  ��    if((x.$high>l.$high||(x.$high===l.$high&&x.$low>l.$low))){  ��x=l;    }  ��v.start=new $Int64(l.$high-x.$high,l.$low-x.$low);  ��v.length=(z=v.start,new $Int64(l.$high-z.$high,l.$low-z.$low));    }else{  �#aa=N.ParseInt(t,10,64);ab=aa[0];ac=aa[1];  �P    if(!($interfaceIsEqual(ac,$ifaceNil))||(ab.$high>l.$high||(ab.$high===l.$high&&ab.$low>l.$low))||(ab.$high<0||(ab.$high===0&&ab.$low<0))){  �yreturn[($sliceType(CD)).nil,C.New("invalid range")];    }  ��v.start=ab;  ��    if(u===""){  �v.length=(ad=v.start,new $Int64(l.$high-ad.$high,l.$low-ad.$low));    }else{  �6ae=N.ParseInt(u,10,64);af=ae[0];ag=ae[1];  �b    if(!($interfaceIsEqual(ag,$ifaceNil))||(ah=v.start,(ah.$high>af.$high||(ah.$high===af.$high&&ah.$low>af.$low)))){  ��return[($sliceType(CD)).nil,C.New("invalid range")];    }  ��    if((af.$high>l.$high||(af.$high===l.$high&&af.$low>=l.$low))){  ��af=new $Int64(l.$high-0,l.$low-1);    }  ��v.length=(ai=(aj=v.start,new $Int64(af.$high-aj.$high,af.$low-aj.$low)),new $Int64(ai.$high+0,ai.$low+1));    }    }  �	m=$append(m,v);    o++;}  �(return[m,$ifaceNil];    }; 0
parseRange0v
errors:Newnet/http:httpRangestrconv:ParseIntstrings:HasPrefix
time:Parse	time:Time 0�i#(net/http.stringWriter).WriteString0 �CO.Ptr.prototype.WriteString=function(k){var l=0,m=$ifaceNil,n,o;  �7n=new CO.Ptr();$copy(n,this,CO);  �s    o=n.w.Write(new($sliceType($Uint8))($stringToBytes(k)));l=o[0];m=o[1];return[l,m];    };CO.prototype.WriteString=function(k){return this.$val.WriteString(k);}; 0stringWriter0net/http:stringWriter 0��(*net/http.headerSorter).Len0 ��CQ.Ptr.prototype.Len=function(){var k;  ̳k=this;  ��return k.kvs.$length;    };CQ.prototype.Len=function(){return this.$val.Len();}; 0headerSorter0net/http:headerSorter 0��(*net/http.headerSorter).Swap0 �UCQ.Ptr.prototype.Swap=function(k,l){var m,n,o,p,q,r,s;  ��m=this;  �n=new CP.Ptr();$copy(n,(o=m.kvs,((l<0||l>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+l])),CP);p=new CP.Ptr();$copy(p,(q=m.kvs,((k<0||k>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+k])),CP);$copy((r=m.kvs,((k<0||k>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+k])),n,CP);$copy((s=m.kvs,((l<0||l>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+l])),p,CP);    };CQ.prototype.Swap=function(k,l){return this.$val.Swap(k,l);}; 0headerSorter0+net/http:headerSorternet/http:keyValues 0��(*net/http.headerSorter).Less0 �OCQ.Ptr.prototype.Less=function(k,l){var m,n,o;  �Km=this;  �rreturn(n=m.kvs,((k<0||k>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+k])).key<(o=m.kvs,((l<0||l>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+l])).key;    };CQ.prototype.Less=function(k,l){return this.$val.Less(k,l);}; 0headerSorter0net/http:headerSorter 0�x!(net/http.Header).sortedKeyValues0 ��CJ.prototype.sortedKeyValues=function(k){var l=($sliceType(CP)).nil,m=($ptrType(CQ)).nil,n,o,p,q,r,s,t,u,v,w;  Πn=this.$val!==undefined?this.$val:this;  ��m=$assertType(CR.Get(),($ptrType(CQ)));  �'    if(m.kvs.$capacity<$keys(n).length){  �Cm.kvs=($sliceType(CP)).make(0,$keys(n).length);    }  �ml=$subslice(m.kvs,0,0);  �o=n;p=0;q=$keys(o);while(p<q.length){r=o[q[p]];        if(r===undefined){    p++;continue;    }s=r.k;t=r.v;  Ϙ    if(!(u=k[s],u!==undefined?u.v:false)){  Ϭl=$append(l,new CP.Ptr(s,t));    }    p++;}  ��m.kvs=l;  ��U.Sort(m);  ��    v=l;w=m;l=v;m=w;return[l,m];    };$ptrType(CJ).prototype.sortedKeyValues=function(k){return new CJ(this.$get()).sortedKeyValues(k);}; 0HeadersortedKeyValues0bnet/http:Headernet/http:headerSorternet/http:headerSorterPoolnet/http:keyValues	sort:Sort 0�$(net/http.Header).WriteSubset0 �+CJ.prototype.WriteSubset=function(k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae;  Їm=this.$val!==undefined?this.$val:this;  ��n=$assertType(k,CN,true);o=n[0];p=n[1];  ��    if(!p){  ��o=(q=new CO.Ptr(k),new q.constructor.Struct(q));    }  �
    if(m>0&&!CU(k.charCodeAt((m-1>>0)))){  �6  �D  �Dm=m+(1)>>0;continue;    }  �{  �~o=m+l.length>>0;    if(!((o===k.length))&&!CU(k.charCodeAt(o))){  ��  �D  �Dm=m+(1)>>0;continue;    }  ��    if(J.EqualFold(k.substring(m,(m+l.length>>0)),l)){  �return true;    }      �D  �Dm=m+(1)>>0;}  �'return false;    }; 0
hasToken0-net/http:isTokenBoundarystrings:EqualFold 0ynet/http.isTokenBoundary0CU=CU=function(k){  �\return(k===32)||(k===44)||(k===9);    }; 0isTokenBoundary0  0��net/http.isToken0CX��CX=function(k){var l;  �l=(k>>0);  � return l<127&&((l<0||l>=CW.length)?$throwRuntimeError("index out of range"):CW[l]);    }; 0	isToken0net/http:isTokenTable 0lnet/http.isNotToken0CY(CY=function(k){  �sreturn!CX(k);    }; 0
isNotToken0net/http:isToken 0��(*net/http.ProtocolError).Error0 ��CZ.Ptr.prototype.Error=function(){var k;  �k=this;  ��return k.ErrorString;    };CZ.prototype.Error=function(){return this.$val.Error();}; 0
zk=this; 
�    if(k.MultipartForm===DD){ 
�return[($ptrType(P.Reader)).nil,C.New("http: MultipartReader called twice")];    } #    if(!(k.MultipartForm===($ptrType(P.Form)).nil)){ Areturn[($ptrType(P.Reader)).nil,C.New("http: multipart handled by ParseMultipartForm")];    } �k.MultipartForm=DD; �return k.multipartReader();    };DC.prototype.MultipartReader=function(){return this.$val.MultipartReader();}; 0	Request0��
errors:Newmime/multipart:Formmime/multipart:Readernet/http:Requestnet/http:multipartByReadernet/http:multipartReader 0��#(*net/http.Request).multipartReader0 ��DC.Ptr.prototype.multipartReader=function(){var k,l,m,n,o,p,q,r,s,t; �k=this; l=(new CJ(k.Header)).Get("Content-Type"); 5    if(l===""){ Dreturn[($ptrType(P.Reader)).nil,$pkg.ErrNotMultipart];    } dm=O.ParseMediaType(l);n=m[0];o=m[1];p=m[2]; �    if(!($interfaceIsEqual(p,$ifaceNil))||!(n==="multipart/form-data")){ �return[($ptrType(P.Reader)).nil,$pkg.ErrNotMultipart];    } �q=(r=o["boundary"],r!==undefined?[r.v,true]:["",false]);s=q[0];t=q[1]; 
errors:Newfmt:Fprintf
NewRequest0��bytes:Bufferbytes:Readercrypto/tls:ConnectionStateio/ioutil:NopCloser
errors:Newnet/http:maxBytesReadernet/http:requestTooLargenet/http:response 0�� (*net/http.maxBytesReader).Close0 ��DN.Ptr.prototype.Close=function(){var k; 1zk=this; 1�return k.r.Close();    };DN.prototype.Close=function(){return this.$val.Close();}; 0maxBytesReader0net/http:maxBytesReader 0��net/http.copyValues0DO�MDO=function(k,l){var m,n,o,p,q,r,s,t,u; 1�m=l;n=0;o=$keys(m);while(n<o.length){p=m[o[n]];        if(p===undefined){    n++;continue;    }q=p.k;r=p.v; 1�s=r;t=0;while(t<s.$length){u=((t<0||t>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+t]); 2(new I.Values(k)).Add(q,u);    t++;}    n++;}    }; 0
copyValues0net/url:Values 0��net/http.parsePostForm0DP�2DP=function(k){var l=false,m=$ifaceNil,n,o,p,q,r,s,t,u,v,w,x; 2n    if($interfaceIsEqual(k.Body,$ifaceNil)){ 2�m=C.New("missing form body"); 2�return[l,m];    } 2�n=(new CJ(k.Header)).Get("Content-Type"); 37    if(n===""){ 3Gn="application/octet-stream";    } 3ko=O.ParseMediaType(n);n=o[0];m=o[2]; 3� 3�switch(0){default:if(n==="application/x-www-form-urlencoded"){ 3� 3�p=k.Body; 3�q=new $Int64(2147483647,4294967295); 4 4r=$assertType(k.Body,($ptrType(DN)),true);s=r[1];    if(!s){ 4>q=new $Int64(0,10485760); 4zp=E.LimitReader(k.Body,new $Int64(q.$high+0,q.$low+1));    } 4�t=G.ReadAll(p);u=t[0];v=t[1]; 4�    if(!($interfaceIsEqual(v,$ifaceNil))){ 4�    if($interfaceIsEqual(m,$ifaceNil)){ 4�m=v;    } 5break;    } 5    if((w=new $Int64(0,u.$length),(w.$high>q.$high||(w.$high===q.$high&&w.$low>q.$low)))){ 55m=C.New("http: POST too large"); 5areturn[l,m];    } 5nx=I.ParseQuery($bytesToString(u));l=x[0];v=x[1]; 5�    if($interfaceIsEqual(m,$ifaceNil)){ 5�m=v;    }    }} 7return[l,m];    }; 0
errors:Newio/ioutil:ReadAllio:LimitReadermime:ParseMediaTypenet/http:Headernet/http:maxBytesReadernet/url:ParseQuery 0��(*net/http.Request).ParseForm0 �TDC.Ptr.prototype.ParseForm=function(){var k,l,m,n,o,p; 8�k=this; 9 9l=$ifaceNil; 9$    if(k.PostForm===false){ 9=    if(k.Method==="POST"||k.Method==="PUT"||k.Method==="PATCH"){ 9�m=DP(k);k.PostForm=m[0];l=m[1];    } 9�    if(k.PostForm===false){ 9�k.PostForm=new $Map();    }    } 9�    if(k.Form===false){ :    if($keys(k.PostForm).length>0){ :k.Form=new $Map(); :;DO(k.Form,k.PostForm);    } :` :dn=false; :{    if(!(k.URL===($ptrType(I.URL)).nil)){ :� :�o=$ifaceNil; :�p=I.ParseQuery(k.URL.RawQuery);n=p[0];o=p[1]; :�    if($interfaceIsEqual(l,$ifaceNil)){ :�l=o;    }    } :�    if(n===false){ ;n=new $Map();    } ;3    if(k.Form===false){ ;Ik.Form=n;    }else{ ;jDO(k.Form,n);    }    } ;�return l;    };DC.prototype.ParseForm=function(){return this.$val.ParseForm();}; 0	Request0`net/http:Requestnet/http:copyValuesnet/http:parsePostFormnet/url:ParseQuerynet/url:URL 0��&(*net/http.Request).ParseMultipartForm0 �DC.Ptr.prototype.ParseMultipartForm=function(k){var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z; =l=this; =L    if(l.MultipartForm===DD){ =xreturn C.New("http: multipart handled by MultipartReader");    } =�    if(l.Form===false){ =�m=l.ParseForm(); =�    if(!($interfaceIsEqual(m,$ifaceNil))){ =�return m;    }    } >    if(!(l.MultipartForm===($ptrType(P.Form)).nil)){ >,return $ifaceNil;    } ><n=l.multipartReader();o=n[0];p=n[1]; >\    if(!($interfaceIsEqual(p,$ifaceNil))){ >nreturn p;    } >~q=o.ReadForm(k);r=q[0];p=q[1]; >�    if(!($interfaceIsEqual(p,$ifaceNil))){ >�return p;    } >�s=r.Value;t=0;u=$keys(s);while(t<u.length){v=s[u[t]];        if(v===undefined){    t++;continue;    }w=v.k;x=v.v; >�y=w;(l.Form||$throwRuntimeError("assignment to entry in nil map"))[y]={k:y,v:$appendSlice((z=l.Form[w],z!==undefined?z.v:($sliceType($String)).nil),x)};    t++;} ?l.MultipartForm=r; ?return $ifaceNil;    };DC.prototype.ParseMultipartForm=function(k){return this.$val.ParseMultipartForm(k);}; 0	Request0i
errors:Newmime/multipart:Formnet/http:Requestnet/http:multipartByReadernet/http:multipartReader 0��(*net/http.Request).FormValue0 ��DC.Ptr.prototype.FormValue=function(k){var l,m,n; @Hl=this; @t    if(l.Form===false){ @�l.ParseMultipartForm(new $Int64(0,33554432));    } @� @�n=(m=l.Form[k],m!==undefined?m.v:($sliceType($String)).nil);    if(n.$length>0){ @�return((0<0||0>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+0]);    } @�return"";    };DC.prototype.FormValue=function(k){return this.$val.FormValue(k);}; 0	Request0net/http:Request 0�!(*net/http.Request).PostFormValue0 ��DC.Ptr.prototype.PostFormValue=function(k){var l,m,n; A�l=this; A�    if(l.PostForm===false){ Bl.ParseMultipartForm(new $Int64(0,33554432));    } B? BBn=(m=l.PostForm[k],m!==undefined?m.v:($sliceType($String)).nil);    if(n.$length>0){ Bireturn((0<0||0>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+0]);    } Bzreturn"";    };DC.prototype.PostFormValue=function(k){return this.$val.PostFormValue(k);}; 0	Request0net/http:Request 0��(*net/http.Request).FormFile0 ��DC.Ptr.prototype.FormFile=function(k){var l,m,n,o,p,q,r; Cl=this; C_    if(l.MultipartForm===DD){ C�return[$ifaceNil,($ptrType(P.FileHeader)).nil,C.New("http: multipart handled by MultipartReader")];    } C�    if(l.MultipartForm===($ptrType(P.Form)).nil){ C�m=l.ParseMultipartForm(new $Int64(0,33554432)); D'    if(!($interfaceIsEqual(m,$ifaceNil))){ D:return[$ifaceNil,($ptrType(P.FileHeader)).nil,m];    }    } DW    if(!(l.MultipartForm===($ptrType(P.Form)).nil)&&!(l.MultipartForm.File===false)){ D� D�o=(n=l.MultipartForm.File[k],n!==undefined?n.v:($sliceType(($ptrType(P.FileHeader)))).nil);    if(o.$length>0){ D�p=((0<0||0>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+0]).Open();q=p[0];r=p[1]; D�return[q,((0<0||0>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+0]),r];    }    } Ereturn[$ifaceNil,($ptrType(P.FileHeader)).nil,$pkg.ErrMissingFile];    };DC.prototype.FormFile=function(k){return this.$val.FormFile(k);}; 0	Request0��
errors:Newmime/multipart:FileHeadermime/multipart:Formnet/http:ErrMissingFilenet/http:Requestnet/http:multipartByReader 0�c#(*net/http.Request).expectsContinue0 ��DC.Ptr.prototype.expectsContinue=function(){var k; E-k=this; ESreturn CT((new CJ(k.Header)).get("Expect"),"100-continue");    };DC.prototype.expectsContinue=function(){return this.$val.expectsContinue();}; 0RequestexpectsContinue0Dnet/http:Headernet/http:Requestnet/http:getnet/http:hasToken 0��((*net/http.Request).wantsHttp10KeepAlive0 �6DC.Ptr.prototype.wantsHttp10KeepAlive=function(){var k; E�k=this; E�    if(!((k.ProtoMajor===1))||!((k.ProtoMinor===0))){ E�return false;    } E�return CT((new CJ(k.Header)).get("Connection"),"keep-alive");    };DC.prototype.wantsHttp10KeepAlive=function(){return this.$val.wantsHttp10KeepAlive();}; 0RequestwantsHttp10KeepAlive0Dnet/http:Headernet/http:Requestnet/http:getnet/http:hasToken 0�G(*net/http.Request).wantsClose0 ��DC.Ptr.prototype.wantsClose=function(){var k; FAk=this; Fbreturn CT((new CJ(k.Header)).get("Connection"),"close");    };DC.prototype.wantsClose=function(){return this.$val.wantsClose();}; 0Request
wantsClose0Dnet/http:Headernet/http:Requestnet/http:getnet/http:hasToken 0�"(*net/http.Request).closeBody0 ��DC.Ptr.prototype.closeBody=function(){var k; F�k=this; F�    if(!($interfaceIsEqual(k.Body,$ifaceNil))){ F�k.Body.Close();    }    };DC.prototype.closeBody=function(){return this.$val.closeBody();}; 0Request	closeBody0net/http:Request 0��(*net/http.Response).Cookies0 ��DR.Ptr.prototype.Cookies=function(){var k; Q�k=this; Q�return AX(k.Header);    };DR.prototype.Cookies=function(){return this.$val.Cookies();}; 0
Response0,net/http:Responsenet/http:readSetCookies 0�6(*net/http.Response).Location0 ��DR.Ptr.prototype.Location=function(){var k,l; Sk=this; S>l=(new CJ(k.Header)).Get("Location"); S^    if(l===""){ Snreturn[($ptrType(I.URL)).nil,$pkg.ErrNoLocation];    } S�    if(!(k.Request===($ptrType(DC)).nil)&&!(k.Request.URL===($ptrType(I.URL)).nil)){ S�return k.Request.URL.Parse(l);    } S�return I.Parse(l);    };DR.prototype.Location=function(){return this.$val.Location();}; 0
Response0jnet/http:ErrNoLocationnet/http:Headernet/http:Requestnet/http:Response
DT=function(k){var l,m,n,o,p,q,r,s; Zn Zql=(m=k["Pragma"],m!==undefined?[m.v,true]:[($sliceType($String)).nil,false]);n=l[0];o=l[1];    if(o&&n.$length>0&&((0<0||0>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+0])==="no-cache"){ Z� Z�p=(q=k["Cache-Control"],q!==undefined?[q.v,true]:[($sliceType($String)).nil,false]);r=p[1];    if(!r){ Z�s="Cache-Control";(k||$throwRuntimeError("assignment to entry in nil map"))[s]={k:s,v:new($sliceType($String))(["no-cache"])};    }    }    }; 0fixPragmaCacheControl0  0� !(*net/http.Response).ProtoAtLeast0 ��DR.Ptr.prototype.ProtoAtLeast=function(k,l){var m; [�m=this; [�return m.ProtoMajor>k||(m.ProtoMajor===k)&&m.ProtoMinor>=l;    };DR.prototype.ProtoAtLeast=function(k,l){return this.$val.ProtoAtLeast(k,l);}; 0
Response0net/http:Response 0�
�(*net/http.Response).Write0 �	5DR.Ptr.prototype.Write=function(k){var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an; ]�l=this; ]�m=l.Status; ]�    if(m===""){ ]� ]�n=false; ^o=(p=GV[l.StatusCode],p!==undefined?[p.v,true]:["",false]);m=o[0];n=o[1]; ^'    if(!n){ ^3m="status code "+N.Itoa(l.StatusCode);    }    } ^nq=N.Itoa(l.ProtoMajor);r=N.Itoa(l.ProtoMinor);s=q;t=r; ^�u=N.Itoa(l.StatusCode)+" "; ^�m=J.TrimPrefix(m,u); _ _ v=E.WriteString(k,"HTTP/"+s+"."+t+" "+u+m+"\r\n");w=v[1];    if(!($interfaceIsEqual(w,$ifaceNil))){ _�return w;    } _�x=new DR.Ptr(); _�$copy(x,l,DR); _�    if((y=x.ContentLength,(y.$high===0&&y.$low===0))&&!($interfaceIsEqual(x.Body,$ifaceNil))){ `D `Hz=($arrayType($Uint8,1)).zero();$copy(z,($arrayType($Uint8,1)).zero(),($arrayType($Uint8,1))); `Vaa=x.Body.Read(new($sliceType($Uint8))(z));ab=aa[0];ac=aa[1]; `w    if(!($interfaceIsEqual(ac,$ifaceNil))&&!($interfaceIsEqual(ac,E.EOF))){ `�return ac;    } `�    if(ab===0){ a!x.Body=GG;    }else{ aCx.ContentLength=new $Int64(-1,4294967295); a\x.Body=(ad=new($structType([["Reader","","",E.Reader,""],["Closer","","",E.Closer,""]])).Ptr(E.MultiReader(new($sliceType(E.Reader))([B.NewReader($subslice(new($sliceType($Uint8))(z),0,1)),l.Body])),l.Body),new ad.constructor.Struct(ad));    }    } b�    if((ae=x.ContentLength,(ae.$high===-1&&ae.$low===4294967295))&&!x.Close&&x.ProtoAtLeast(1,1)&&!HH(x.TransferEncoding)){ cx.Close=true;    } cWaf=GZ(x);ag=af[0];ah=af[1]; cy    if(!($interfaceIsEqual(ah,$ifaceNil))){ c�return ah;    } c�ah=ag.WriteHeader(k); c�    if(!($interfaceIsEqual(ah,$ifaceNil))){ c�return ah;    } c�ah=(new CJ(l.Header)).WriteSubset(k,DQ); d    if(!($interfaceIsEqual(ah,$ifaceNil))){ d,return ah;    } d�ai=ag.shouldSendContentLength(); d�    if((aj=x.ContentLength,(aj.$high===0&&aj.$low===0))&&!HH(x.TransferEncoding)&&!ai){ eI eLak=E.WriteString(k,"Content-Length: 0\r\n");al=ak[1];    if(!($interfaceIsEqual(al,$ifaceNil))){ e�return al;    }    } e� e�am=E.WriteString(k,"\r\n");an=am[1];    if(!($interfaceIsEqual(an,$ifaceNil))){ e�return an;    } fah=ag.WriteBody(k); f1    if(!($interfaceIsEqual(ah,$ifaceNil))){ fCreturn ah;    } f_return $ifaceNil;    };DR.prototype.Write=function(k){return this.$val.Write(k);}; 0
Response0�*bytes:NewReader	io:Closerio:EOFio:MultiReader	io:Readerio:WriteStringnet/http:Headernet/http:Responsenet/http:chunkednet/http:eofReadernet/http:newTransferWriternet/http:respExcludeHeader net/http:shouldSendContentLengthnet/http:statusTextstrconv:Itoastrings:TrimPrefix 0��(*net/http.conn).hijacked0 �oDZ.Ptr.prototype.hijacked=function(){var $deferred=[],$err=null,k;try{$deferFrames.push($deferred); v�k=this; wk.mu.Lock(); w$deferred.push([$methodVal(k.mu,"Unlock"),[]]); w-return k.hijackedv;    }catch(err){$err=err;return false;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};DZ.prototype.hijacked=function(){return this.$val.hijacked();}; 0connhijacked0
errors:Newnet/http:ErrHijacked
needsSniff0net/http:response 0�dnet/http.srcIsRegularFile0EI��EI=function(k){var l=false,m=$ifaceNil,n,o,p,q,r,s,t,u,v,w; �io=k; ��if($assertType(o,($ptrType(R.File)),true)[1]){n=o.$val; ��p=n.Stat();q=p[0];r=p[1]; ��    if(!($interfaceIsEqual(r,$ifaceNil))){ ��    s=false;t=r;l=s;m=t;return[l,m];    } ��    u=(new R.FileMode(q.Mode())).IsRegular();v=$ifaceNil;l=u;m=v;return[l,m];     ��}else if($assertType(o,($ptrType(E.LimitedReader)),true)[1]){n=o.$val; �    w=EI(n.R);l=w[0];m=w[1];return[l,m];    }else{n=o; �;return[l,m];    }    }; 0srcIsRegularFile0(io:LimitedReaderos:Fileos:FileMode 0�a(*net/http.response).ReadFrom0 ��EG.Ptr.prototype.ReadFrom=function(k){var l=new $Int64(0,0),m=$ifaceNil,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar; ��n=this; ��o=$assertType(n.conn.rwc,E.ReaderFrom,true);p=o[0];q=o[1]; ��r=EI(k);s=r[0];m=r[1]; ��    if(!($interfaceIsEqual(m,$ifaceNil))){ �    t=new $Int64(0,0);u=m;l=t;m=u;return[l,m];    } �    if(!q||!s){ �/    v=E.Copy((w=new EH.Ptr(n),new w.constructor.Struct(w)),k);l=v[0];m=v[1];return[l,m];    } �k    if(!n.wroteHeader){ ��n.WriteHeader(200);    } ��    if(n.needsSniff()){ ��x=E.Copy((y=new EH.Ptr(n),new y.constructor.Struct(y)),E.LimitReader(k,new $Int64(0,512)));z=x[0];aa=x[1]; ��l=(ab=z,new $Int64(l.$high+ab.$high,l.$low+ab.$low)); �    if(!($interfaceIsEqual(aa,$ifaceNil))){ �    ac=l;ad=aa;l=ac;m=ad;return[l,m];    }    } �+n.w.Flush(); �[n.cw.flush(); ��    if(!n.cw.chunking&&n.bodyAllowed()){ �ae=p.ReadFrom(k);af=ae[0];ag=ae[1]; �3l=(ah=af,new $Int64(l.$high+ah.$high,l.$low+ah.$low)); �=n.written=(ai=n.written,aj=af,new $Int64(ai.$high+aj.$high,ai.$low+aj.$low)); �O    ak=l;al=ag;l=ak;m=al;return[l,m];    } �bam=E.Copy((an=new EH.Ptr(n),new an.constructor.Struct(an)),k);ao=am[0];m=am[1]; ��l=(ap=ao,new $Int64(l.$high+ap.$high,l.$low+ap.$low)); ��    aq=l;ar=m;l=aq;m=ar;return[l,m];    };EG.prototype.ReadFrom=function(k){return this.$val.ReadFrom(k);}; 0
response0��io:Copyio:LimitReader
sync:Mutex 0�net/http.bufioWriterPool0EM��EM=function(k){var l; �l=k; �if(l===2048){ �-return EK;     �H}else if(l===4096){ �Xreturn EL;    } �vreturn($ptrType(K.Pool)).nil;    }; 0bufioWriterPool0Cnet/http:bufioWriter2kPoolnet/http:bufioWriter4kPool	sync:Pool 0�<net/http.newBufioReader0EN��EN=function(k){var l,m; �� ��l=EJ.Get();    if(!($interfaceIsEqual(l,$ifaceNil))){ ��m=$assertType(l,($ptrType(A.Reader))); ��m.Reset(k); �
return m;    } �return A.NewReader(k);    }; 0newBufioReader09bufio:NewReaderbufio:Readernet/http:bufioReaderPool 0��net/http.putBufioReader0EO=EO=function(k){ �^k.Reset($ifaceNil); �mEJ.Put(k);    }; 0putBufioReader0net/http:bufioReaderPool 0��net/http.newBufioWriterSize0EP�EP=function(k,l){var m,n,o; ��m=EM(l); ��    if(!(m===($ptrType(K.Pool)).nil)){ �� ��n=m.Get();    if(!($interfaceIsEqual(n,$ifaceNil))){ �o=$assertType(n,($ptrType(A.Writer))); �7o.Reset(k); �Freturn o;    }    } �Xreturn A.NewWriterSize(k,l);    }; 0newBufioWriterSize0Hbufio:NewWriterSizebufio:Writernet/http:bufioWriterPool	sync:Pool 0��net/http.putBufioWriter0EQ��EQ=function(k){var l; ��k.Reset($ifaceNil); �� ��l=EM(k.Available());    if(!(l===($ptrType(K.Pool)).nil)){ ��l.Put(k);    }    }; 0putBufioWriter0%net/http:bufioWriterPool	sync:Pool 0�A!(*net/http.Server).maxHeaderBytes0 ��FU.Ptr.prototype.maxHeaderBytes=function(){var k; ��k=this; ��    if(k.MaxHeaderBytes>0){ �return k.MaxHeaderBytes;    } �5return 1048576;    };FU.prototype.maxHeaderBytes=function(){return this.$val.maxHeaderBytes();}; 0ServermaxHeaderBytes0net/http:Server 0��+(*net/http.Server).initialLimitedReaderSize0 �FU.Ptr.prototype.initialLimitedReaderSize=function(){var k,l; �[k=this; ��return(l=new $Int64(0,k.maxHeaderBytes()),new $Int64(l.$high+0,l.$low+4096));    };FU.prototype.initialLimitedReaderSize=function(){return this.$val.initialLimitedReaderSize();}; 0"ServerinitialLimitedReaderSize0*net/http:Servernet/http:maxHeaderBytes 0��%(*net/http.expectContinueReader).Read0 ��ER.Ptr.prototype.Read=function(k){var l=0,m=$ifaceNil,n,o,p,q; ��n=this; ��    if(n.closed){ ��    o=0;p=$pkg.ErrBodyReadAfterClose;l=o;m=p;return[l,m];    } �
    if(!n.resp.wroteContinue&&!n.resp.conn.hijacked()){ �Fn.resp.wroteContinue=true; �fn.resp.conn.buf.Writer.WriteString("HTTP/1.1 100 Continue\r\n\r\n"); ��n.resp.conn.buf.Writer.Flush();    } ��    q=n.readCloser.Read(k);l=q[0];m=q[1];return[l,m];    };ER.prototype.Read=function(k){return this.$val.Read(k);}; 0expectContinueReader0Rnet/http:ErrBodyReadAfterClosenet/http:expectContinueReadernet/http:hijacked 0�&(*net/http.expectContinueReader).Close0 ��ER.Ptr.prototype.Close=function(){var k; ��k=this; �k.closed=true; �+return k.readCloser.Close();    };ER.prototype.Close=function(){return this.$val.Close();}; 0expectContinueReader0net/http:expectContinueReader 0��net/http.appendTime0ES�eES=function(k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al; �� �� �$$copy(l,l.UTC(),L.Time); �1m=l.Date();n=m[0];o=m[1];p=m[2]; �Iq=l.Clock();r=q[0];s=q[1];t=q[2]; �bv="SunMonTueWedThuFriSat".substring((u=l.Weekday(),(((3>>>16<<16)*u>>0)+(3<<16>>>16)*u)>>0)); �x="JanFebMarAprMayJunJulAugSepOctNovDec".substring((w=(o-1>>0),(((3>>>16<<16)*w>>0)+(3<<16>>>16)*w)>>0)); ��return $append(k,v.charCodeAt(0),v.charCodeAt(1),v.charCodeAt(2),44,32,((48+(y=p/10,(y===y&&y!==1/0&&y!==-1/0)?y>>0:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),((48+(z=p%10,z===z?z:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),32,x.charCodeAt(0),x.charCodeAt(1),x.charCodeAt(2),32,((48+(aa=n/1000,(aa===aa&&aa!==1/0&&aa!==-1/0)?aa>>0:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),((48+(ab=((ac=n/100,(ac===ac&&ac!==1/0&&ac!==-1/0)?ac>>0:$throwRuntimeError("integer divide by zero")))%10,ab===ab?ab:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),((48+(ad=((ae=n/10,(ae===ae&&ae!==1/0&&ae!==-1/0)?ae>>0:$throwRuntimeError("integer divide by zero")))%10,ad===ad?ad:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),((48+(af=n%10,af===af?af:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),32,((48+(ag=r/10,(ag===ag&&ag!==1/0&&ag!==-1/0)?ag>>0:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),((48+(ah=r%10,ah===ah?ah:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),58,((48+(ai=s/10,(ai===ai&&ai!==1/0&&ai!==-1/0)?ai>>0:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),((48+(aj=s%10,aj===aj?aj:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),58,((48+(ak=t/10,(ak===ak&&ak!==1/0&&ak!==-1/0)?ak>>0:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),((48+(al=t%10,al===al?al:$throwRuntimeError("integer divide by zero"))>>0)<<24>>>24),32,71,77,84);    }; 0
appendTime0	time:Time 0�I(*net/http.conn).readRequest0 ��DZ.Ptr.prototype.readRequest=function(){var k=($ptrType(EG)).nil,l=$ifaceNil,$deferred=[],$err=null,m,n,o,p,q,r,s,t,u,v,w,x,y,z;try{$deferFrames.push($deferred); �cm=this; ��    if(m.hijacked()){ ��    n=($ptrType(EG)).nil;o=$pkg.ErrHijacked;k=n;l=o;return[k,l];    } �� ��p=m.server.ReadTimeout;    if(!((p.$high===0&&p.$low===0))){ ��m.rwc.SetReadDeadline($clone(L.Now().Add(p),L.Time));    } � � q=m.server.WriteTimeout;    if(!((q.$high===0&&q.$low===0))){ �G$deferred.push([(function(){ �Ym.rwc.SetWriteDeadline($clone(L.Now().Add(q),L.Time));    }),[]]);    } ��m.lr.N=m.server.initialLimitedReaderSize(); �� ��r=($ptrType(DC)).nil; �� ��s=DL(m.buf.Reader);r=s[0];l=s[1];    if(!($interfaceIsEqual(l,$ifaceNil))){ �    if((t=m.lr.N,(t.$high===0&&t.$low===0))){ �    u=($ptrType(EG)).nil;v=ET;k=u;l=v;return[k,l];    } �8    w=($ptrType(EG)).nil;x=l;k=w;l=x;return[k,l];    } �Lm.lr.N=new $Int64(2147483647,4294967295); �_r.RemoteAddr=m.remoteAddr; �~r.TLS=m.tlsState; ��k=new EG.Ptr(m,r,false,false,($ptrType(A.Writer)).nil,new ED.Ptr(),($ptrType(EB)).nil,new $Map(),false,new $Int64(0,0),new $Int64(-1,4294967295),0,false,false,false,($arrayType($Uint8,29)).zero(),($arrayType($Uint8,10)).zero()); �k.cw.res=k; �k.w=EP(k.cw,2048); �O    y=k;z=$ifaceNil;k=y;l=z;return[k,l];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[k,l];}};DZ.prototype.readRequest=function(){return this.$val.readRequest();}; 0connreadRequest0�bufio:Writernet/http:ErrHijackednet/http:ReadRequestnet/http:Requestnet/http:chunkWriter
response04net/http:Headernet/http:clonenet/http:response 0�� (*net/http.response).WriteHeader0 � EG.Ptr.prototype.WriteHeader=function(k){var l,m,n,o,p; ��l=this; ��    if(l.conn.hijacked()){ ��l.conn.server.logf("http: response.WriteHeader on hijacked connection",new($sliceType($emptyInterface))([])); �Ireturn;    } �T    if(l.wroteHeader){ �il.conn.server.logf("http: multiple response.WriteHeader calls",new($sliceType($emptyInterface))([])); ��return;    } ��l.wroteHeader=true; ��l.status=k; ��    if(l.calledHeader&&l.cw.header===false){ �
l.cw.header=(new CJ(l.handlerHeader)).clone();    } �5 �8m=(new CJ(l.handlerHeader)).get("Content-Length");    if(!(m==="")){ �rn=N.ParseInt(m,10,64);o=n[0];p=n[1]; ��    if($interfaceIsEqual(p,$ifaceNil)&&(o.$high>0||(o.$high===0&&o.$low>=0))){ ��l.contentLength=o;    }else{ ��l.conn.server.logf("http: invalid Content-Length of %q",new($sliceType($emptyInterface))([new $String(m)])); �(new CJ(l.handlerHeader)).Del("Content-Length");    }    }    };EG.prototype.WriteHeader=function(k){return this.$val.WriteHeader(k);}; 0
response0vnet/http:Headernet/http:clonenet/http:getnet/http:hijacked
    if(u&&(new CJ(p)).get("Connection")==="keep-alive"){ �Im.closeAfterReply=false;    }    } ��w=!((v=m.contentLength,(v.$high===-1&&v.$low===4294967295))); ��    if(m.req.wantsHttp10KeepAlive()&&(o||w)){ �x=(y=p["Connection"],y!==undefined?[y.v,true]:[($sliceType($String)).nil,false]);z=x[1]; �3    if(!z){ �Pt.connection="keep-alive";    }        }else if(!m.req.ProtoAtLeast(1,1)||m.req.wantsClose()){ ��m.closeAfterReply=true;    } ��    if((new CJ(p)).get("Connection")==="close"||!n){ �m.closeAfterReply=true;    } �    if(!((aa=m.req.ContentLength,(aa.$high===0&&aa.$low===0)))&&!m.closeAfterReply){ �Sab=$assertType(m.req.Body,($ptrType(ER)),true);ac=ab[0];ad=ab[1]; ��    if(!ad||ac.resp.wroteContinue){ ��ae=E.CopyN(G.Discard,m.req.Body,new $Int64(0,262145));af=ae[0]; �    if((af.$high>0||(af.$high===0&&af.$low>=262144))){ �*m.requestTooLarge(); �Bs("Connection"); �^t.connection="close";    }else{ ��m.req.Body.Close();    }    }    } ��ag=m.status; ��    if(HC(ag)){ �ah=(ai=p["Content-Type"],ai!==undefined?[ai.v,true]:[($sliceType($String)).nil,false]);aj=ah[1]; �E    if(!aj){ �Wt.contentType=GM(k);    }    }else{ ��ak=HF(ag);al=0;while(al<ak.$length){am=((al<0||al>=ak.$length)?$throwRuntimeError("index out of range"):ak.$array[ak.$offset+al]); ��s(am);    al++;}    } �� ��an=(ao=p["Date"],ao!==undefined?[ao.v,true]:[($sliceType($String)).nil,false]);ap=an[1];    if(!ap){ ��t.date=ES($subslice(new($sliceType($Uint8))(l.res.dateBuf),0,0),$clone(L.Now(),L.Time));    } �>aq=(new CJ(p)).get("Transfer-Encoding"); �ear=!(aq===""); �x    if(w&&ar&&!(aq==="identity")){ �m.conn.server.logf("http: WriteHeader called with both Transfer-Encoding of %q and a Content-Length of %d",new($sliceType($emptyInterface))([new $String(aq),m.contentLength])); s("Content-Length"); µw=false;    } ��    if(m.req.Method==="HEAD"||!HC(ag)){        }else if(ag===204){ �:s("Transfer-Encoding");        }else if(w){ �ns("Transfer-Encoding");        }else if(m.req.ProtoAtLeast(1,1)){ ĺl.chunking=true; ��t.transferEncoding="chunked";    }else{ œm.closeAfterReply=true; Ůs("Transfer-Encoding");    } �,    if(l.chunking){ �?s("Content-Length");    } �_    if(!m.req.ProtoAtLeast(1,0)){ ƀreturn;    } ƌ    if(m.closeAfterReply&&(!n||!CT((new CJ(l.header)).get("Connection"),"close"))){ ��s("Connection"); �
    if(m.req.ProtoAtLeast(1,1)){ �+t.connection="close";    }    } �Sm.conn.buf.Writer.WriteString(FA(m.req,ag)); Ǆ(new CJ(l.header)).WriteSubset(m.conn.buf,r); Ƕt.Write(m.conn.buf.Writer); ��m.conn.buf.Writer.Write(EE);    };ED.prototype.writeHeader=function(k){return this.$val.writeHeader(k);}; 0chunkWriterwriteHeader0��io/ioutil:Discardio:CopyNnet/http:DetectContentTypenet/http:Headernet/http:appendTimenet/http:bodyAllowedForStatusnet/http:chunkWriter
statusLine0Lnet/http:statusLinesnet/http:statusMunet/http:statusTextstrconv:Itoa 0�X (*net/http.response).bodyAllowed0 ��EG.Ptr.prototype.bodyAllowed=function(){var k; ̾k=this; ��    if(!k.wroteHeader){ ��$panic(new $String(""));    } �return HC(k.status);    };EG.prototype.bodyAllowed=function(){return this.$val.bodyAllowed();}; 0responsebodyAllowed02net/http:bodyAllowedForStatusnet/http:response 0�(*net/http.response).Write0 ��EG.Ptr.prototype.Write=function(k){var l=0,m=$ifaceNil,n,o; �n=this; �Q    o=n.write(k.$length,k,"");l=o[0];m=o[1];return[l,m];    };EG.prototype.Write=function(k){return this.$val.Write(k);}; 0
response0#net/http:responsenet/http:write 0�K (*net/http.response).WriteString0 ��EG.Ptr.prototype.WriteString=function(k){var l=0,m=$ifaceNil,n,o; �~n=this; Ӻ    o=n.write(k.length,($sliceType($Uint8)).nil,k);l=o[0];m=o[1];return[l,m];    };EG.prototype.WriteString=function(k){return this.$val.WriteString(k);}; 0
response0#net/http:responsenet/http:write 0�'(*net/http.response).write0 �REG.Ptr.prototype.write=function(k,l,m){var n=0,o=$ifaceNil,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae; �p=this; �`    if(p.conn.hijacked()){ �yp.conn.server.logf("http: response.Write on hijacked connection",new($sliceType($emptyInterface))([])); Խ    q=0;r=$pkg.ErrHijacked;n=q;o=r;return[n,o];    } ��    if(!p.wroteHeader){ ��p.WriteHeader(200);    } �	    if(k===0){ �    s=0;t=$ifaceNil;n=s;o=t;return[n,o];    } �/    if(!p.bodyAllowed()){ �G    u=0;v=$pkg.ErrBodyNotAllowed;n=u;o=v;return[n,o];    } �hp.written=(w=p.written,x=new $Int64(0,k),new $Int64(w.$high+x.$high,w.$low+x.$low)); թ    if(!((y=p.contentLength,(y.$high===-1&&y.$low===4294967295)))&&(z=p.written,aa=p.contentLength,(z.$high>aa.$high||(z.$high===aa.$high&&z.$low>aa.$low)))){ ��    ab=0;ac=$pkg.ErrContentLength;n=ab;o=ac;return[n,o];    } �    if(!(l===($sliceType($Uint8)).nil)){ �    ad=p.w.Write(l);n=ad[0];o=ad[1];return[n,o];    }else{ �<    ae=p.w.WriteString(m);n=ae[0];o=ae[1];return[n,o];    }    };EG.prototype.write=function(k,l,m){return this.$val.write(k,l,m);}; 0responsewrite0��net/http:ErrBodyNotAllowednet/http:ErrContentLengthnet/http:ErrHijackednet/http:bodyAllowednet/http:hijacked
response0#net/http:flushnet/http:response 0��(*net/http.conn).finalFlush0 �-DZ.Ptr.prototype.finalFlush=function(){var k; �k=this; �%    if(!(k.buf===($ptrType(A.ReadWriter)).nil)){ �9k.buf.Writer.Flush(); ٵEO(k.buf.Reader); �@EQ(k.buf.Writer); �`k.buf=($ptrType(A.ReadWriter)).nil;    }    };DZ.prototype.finalFlush=function(){return this.$val.finalFlush();}; 0conn
finalFlush0Sbufio:ReadWriter
time:Sleep�0��net/http.validNPN0FB~FB=function(k){var l; ߀l=k; ߐif(l===""||l==="http/1.1"||l==="http/1.0"){ ߳return false;    } ��return true;    }; 0
validNPN0  0�'(*net/http.conn).setState0 ��DZ.Ptr.prototype.setState=function(k,l){var m,n; ��m=this; � �n=m.server.ConnState;    if(!(n===$throwNilPointerError)){ �;n(k,l);    }    };DZ.prototype.setState=function(k,l){return this.$val.setState(k,l);}; 0connsetState0
response0mbufio:ReadWriterbufio:Writernet/http:flushnet/http:hijacknet/http:putBufioWriternet/http:response 0�
 (*net/http.response).CloseNotify0 ��EG.Ptr.prototype.CloseNotify=function(){var k; ��k=this; � return k.conn.closeNotify();    };EG.prototype.CloseNotify=function(){return this.$val.CloseNotify();}; 0
response0)net/http:closeNotifynet/http:response 0� (net/http.HandlerFunc).ServeHTTP0 ��FC.prototype.ServeHTTP=function(k,l){var m; �?m=this.$val!==undefined?this.$val:this; �ym(k,l);    };$ptrType(FC).prototype.ServeHTTP=function(k,l){return new FC(this.$get()).ServeHTTP(k,l);}; 0
NotFound0net/http:Error 0��net/http.NotFoundHandler0FFAFF=$pkg.NotFoundHandler=function(){ ��return new FC(FE);    }; 0NotFoundHandler0)net/http:HandlerFuncnet/http:NotFound 0��net/http.StripPrefix0FG�FG=$pkg.StripPrefix=function(k,l){ �^    if(k===""){ �rreturn l;    } �return new FC((function(m,n){var o; �� ��o=J.TrimPrefix(n.URL.Path,k);    if(o.length<n.URL.Path.length){ �n.URL.Path=o; �l.ServeHTTP(m,n);    }else{ �9FE(m,n);    }    }));    }; 0
 �
Redirect0��fmt:Fprintlnnet/http:Headernet/http:htmlEscapenet/http:statusText
path:Clean
path:Splitstrings:HasSuffix
htmlEscape0net/http:htmlReplacer 0�%(*net/http.redirectHandler).ServeHTTP0 ��FK.Ptr.prototype.ServeHTTP=function(k,l){var m; �Ym=this; ��FH(k,l,m.url,m.code);    };FK.prototype.ServeHTTP=function(k,l){return this.$val.ServeHTTP(k,l);}; 0redirectHandler0-net/http:Redirectnet/http:redirectHandler 0��net/http.RedirectHandler0FLIFL=$pkg.RedirectHandler=function(k,l){  {return new FK.Ptr(k,l);    }; 0RedirectHandler0net/http:redirectHandler 0��net/http.NewServeMux0FOcFO=$pkg.NewServeMux=function(){ �return new FM.Ptr(new K.RWMutex.Ptr(),new $Map(),false);    }; 0
path:Clean 0�^(*net/http.ServeMux).match0 ��FM.Ptr.prototype.match=function(k){var l=$ifaceNil,m="",n,o,p,q,r,s,t,u; 
\n=this; 
� 
�o=0; 
�p=n.m;q=0;r=$keys(p);while(q<r.length){s=p[r[q]];        if(s===undefined){    q++;continue;    }t=s.k;u=new FN.Ptr();$copy(u,s.v,FN); 
�    if(!FP(t,k)){ 
�q++;continue;    } 
�    if($interfaceIsEqual(l,$ifaceNil)||t.length>o){ o=t.length; l=u.h; 'm=u.pattern;    }    q++;} Creturn[l,m];    };FM.prototype.match=function(k){return this.$val.match(k);}; 0ServeMuxmatch0:net/http:ServeMuxnet/http:muxEntrynet/http:pathMatch 0�o(*net/http.ServeMux).Handler0 ��FM.Ptr.prototype.Handler=function(k){var l=$ifaceNil,m="",n,o,p,q,r,s,t; 
ServeMux0`net/http:RedirectHandlernet/http:ServeMuxnet/http:cleanPathnet/http:handlernet/url:URL 0��(*net/http.ServeMux).handler0 �eFM.Ptr.prototype.handler=function(k,l){var m=$ifaceNil,n="",$deferred=[],$err=null,o,p,q,r,s;try{$deferFrames.push($deferred); �o=this; �o.mu.RLock(); �$deferred.push([$methodVal(o.mu,"RUnlock"),[]]); @    if(o.hosts){ Qp=o.match(k+l);m=p[0];n=p[1];    } y    if($interfaceIsEqual(m,$ifaceNil)){ �q=o.match(l);m=q[0];n=q[1];    } �    if($interfaceIsEqual(m,$ifaceNil)){ �r=FF();s="";m=r;n=s;    } �return[m,n];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[m,n];}};FM.prototype.handler=function(k,l){return this.$val.handler(k,l);}; 0ServeMuxhandler0=net/http:NotFoundHandlernet/http:ServeMuxnet/http:match 0��(*net/http.ServeMux).ServeHTTP0 �eFM.Ptr.prototype.ServeHTTP=function(k,l){var m,n,o; [m=this; �    if(l.RequestURI==="*"){ �    if(l.ProtoAtLeast(1,1)){ �(new CJ(k.Header())).Set("Connection","close");    } �k.WriteHeader(400); return;    } &n=m.Handler(l);o=n[0]; >o.ServeHTTP(k,l);    };FM.prototype.ServeHTTP=function(k,l){return this.$val.ServeHTTP(k,l);}; 0
ServeMux0$net/http:Headernet/http:ServeMux 0�+(*net/http.ServeMux).Handle0 ��FM.Ptr.prototype.Handle=function(k,l){var $deferred=[],$err=null,m,n,o,p,q,r,s;try{$deferFrames.push($deferred); �m=this; m.mu.Lock(); $deferred.push([$methodVal(m.mu,"Unlock"),[]]); ,    if(k===""){ A$panic(new $String("http: invalid pattern "+k));    } o    if($interfaceIsEqual(l,$ifaceNil)){ �$panic(new $String("http: nil handler"));    } �    if((n=m.m[k],n!==undefined?n.v:new FN.Ptr()).explicit){ �$panic(new $String("http: multiple registrations for "+k));    } �o=k;(m.m||$throwRuntimeError("assignment to entry in nil map"))[o]={k:o,v:new FN.Ptr(true,l,k)}; G    if(!((k.charCodeAt(0)===47))){ `m.hosts=true;    } 
ServeMux0Onet/http:RedirectHandlernet/http:ServeMuxnet/http:muxEntry
ServeMux0)net/http:HandlerFuncnet/http:ServeMux 0��net/http.Handle0FRJFR=$pkg.Handle=function(k,l){ w$pkg.DefaultServeMux.Handle(k,l);    }; 0Handle0net/http:DefaultServeMux 0��net/http.HandleFunc0FSRFS=$pkg.HandleFunc=function(k,l){ �$pkg.DefaultServeMux.HandleFunc(k,l);    }; 0
HandleFunc0net/http:DefaultServeMux 0�
log:Loggernet/http:Server
net:Listennet:TCPListener�0��(*net/http.Server).Serve0 ��FU.Ptr.prototype.Serve=function(k,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,l,m,n,o,p,q,r,s,t,u,v,w;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0: +Xl=$this; +�$deferred.push([$methodVal(k,"Close"),[true]]); +� +�m=new L.Duration(0,0); +�case 1:if(!(true)){$s=2;continue;} +�n=k.Accept();o=n[0];p=n[1]; +�    if(!($interfaceIsEqual(p,$ifaceNil))){}else{$s=3;continue;} , ,q=$assertType(p,M.Error,true);r=q[0];s=q[1];    if(s&&r.Temporary()){}else{$s=4;continue;} ,?    if((m.$high===0&&m.$low===0)){ ,Xm=new L.Duration(0,5000000);    }else{ ,�m=$mul64(m,(new L.Duration(0,2)));    } ,� ,�t=new L.Duration(0,1000000000);    if((m.$high>t.$high||(m.$high===t.$high&&m.$low>t.$low))){ ,�m=t;    } ,�l.logf("http: Accept error: %v; retrying in %v",new($sliceType($emptyInterface))([p,m])); -5$r=L.Sleep(m,true);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} -O$s=1;continue;    case 4: -`return p;    case 3: -om=new L.Duration(0,0); -u=l.newConn(o);v=u[0];w=u[1]; -�    if(!($interfaceIsEqual(w,$ifaceNil))){ -�$s=1;continue;    } -�v.setState(v.rwc,0); -�$go($methodVal(v,"serve"),[]);    $s=1;continue;case 2:    case-1:}return;}}catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};FU.prototype.Serve=function(k,$b){return this.$val.Serve(k,$b);}; 0Server0{net/http:Server
time:Sleep�0��(*net/http.Server).doKeepAlives0 �#FU.Ptr.prototype.doKeepAlives=function(){var k; .k=this; .1return X.LoadInt32(new($ptrType($Int32))(function(){return this.$target.disableKeepAlives;},function($v){this.$target.disableKeepAlives=$v;},k))===0;    };FU.prototype.doKeepAlives=function(){return this.$val.doKeepAlives();}; 0ServerdoKeepAlives0(net/http:Serversync/atomic:LoadInt32 0�R'(*net/http.Server).SetKeepAlivesEnabled0 ��FU.Ptr.prototype.SetKeepAlivesEnabled=function(k){var l; /Ul=this; /�    if(k){ /�X.StoreInt32(new($ptrType($Int32))(function(){return this.$target.disableKeepAlives;},function($v){this.$target.disableKeepAlives=$v;},l),0);    }else{ /�X.StoreInt32(new($ptrType($Int32))(function(){return this.$target.disableKeepAlives;},function($v){this.$target.disableKeepAlives=$v;},l),1);    }    };FU.prototype.SetKeepAlivesEnabled=function(k){return this.$val.SetKeepAlivesEnabled(k);}; 0Server0)net/http:Serversync/atomic:StoreInt32 0�O(*net/http.Server).logf0 ��FU.Ptr.prototype.logf=function(k,l){var m; /�m=this; 0.    if(!(m.ErrorLog===($ptrType(H.Logger)).nil)){ 0Gm.ErrorLog.Printf(k,l);    }else{ 0vH.Printf(k,l);    }    };FU.prototype.logf=function(k,l){return this.$val.logf(k,l);}; 0Serverlogf0)
log:Logger
log:Printfnet/http:Server 0�.net/http.ListenAndServe0FY��FY=$pkg.ListenAndServe=function(k,l,$b){var $this=this,$args=arguments,$r,$s=0,m,n;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: 3]m=new FU.Ptr(k,l,new L.Duration(0,0),new L.Duration(0,0),0,($ptrType(V.Config)).nil,false,$throwNilPointerError,($ptrType(H.Logger)).nil,0); 3�n=m.ListenAndServe(true);$s=1;case 1:if(n&&n.$blocking){n=n();}return n;    case-1:}return;}};$f.$blocking=true;return $f;}; 0ListenAndServe0?crypto/tls:Config
log:Loggernet/http:Server
log:Loggernet/http:Server
net:Listennet:TCPListener	sync:Once�0��net/http.TimeoutHandler0GA��GA=$pkg.TimeoutHandler=function(k,l,m){var n; >�n=(function(){ >�return L.After(l);    }); >�return new GB.Ptr(k,n,m);    }; 0TimeoutHandler0%net/http:timeoutHandler
time:After 0�z$(*net/http.timeoutHandler).errorBody0 �GB.Ptr.prototype.errorBody=function(){var k; @k=this; @:    if(!(k.body==="")){ @Nreturn k.body;    } @`return"<html><head><title>Timeout</title></head><body><h1>Timeout</h1></body></html>";    };GB.prototype.errorBody=function(){return this.$val.errorBody();}; 0timeoutHandler	errorBody0net/http:timeoutHandler 0��$(*net/http.timeoutHandler).ServeHTTP0 ��GB.Ptr.prototype.ServeHTTP=function(k,l,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,m,n,o,p,q;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0: @�m=$this; @�n=new($chanType($Bool,false,false))(1); Ao=new GC.Ptr(k,new K.Mutex.Ptr(),false,false); A6$go((function($b){var $this=this,$args=arguments,$r,$s=0;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: ADm.handler.ServeHTTP(o,l); Aa    $r=$send(n,true,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}),[]); Atq=$select([[n],[m.timeout()]],true);$s=1;case 1:if(q&&q.$blocking){q=q();}p=q;    if(p[0]===0){ A�return;        }else if(p[0]===1){ A�o.mu.Lock(); A�$deferred.push([$methodVal(o.mu,"Unlock"),[true]]); A�    if(!o.wroteHeader){ A�o.w.WriteHeader(503); Bo.w.Write(new($sliceType($Uint8))($stringToBytes(m.errorBody())));    } B?o.timedOut=true;    }    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};GB.prototype.ServeHTTP=function(k,l,$b){return this.$val.ServeHTTP(k,l,$b);}; 0timeoutHandler0Qnet/http:errorBodynet/http:timeoutHandlernet/http:timeoutWriter
sync:Mutex�0�� (*net/http.timeoutWriter).Header0 ��GC.Ptr.prototype.Header=function(){var k; B�k=this; B�return k.w.Header();    };GC.prototype.Header=function(){return this.$val.Header();}; 0
log:Printfnet/http:loggingConn 0�(*net/http.loggingConn).Read0 ��GI.Ptr.prototype.Read=function(k){var l=0,m=$ifaceNil,n,o; OKn=this; O�H.Printf("%s.Read(%d) = ....",new($sliceType($emptyInterface))([new $String(n.name),new $Int(k.$length)])); O�o=n.Conn.Read(k);l=o[0];m=o[1]; O�H.Printf("%s.Read(%d) = %d, %v",new($sliceType($emptyInterface))([new $String(n.name),new $Int(k.$length),new $Int(l),m])); Preturn[l,m];    };GI.prototype.Read=function(k){return this.$val.Read(k);}; 0
log:Printfnet/http:loggingConn 0��(*net/http.loggingConn).Close0 �YGI.Ptr.prototype.Close=function(){var k=$ifaceNil,l; Pl=this; P>H.Printf("%s.Close() = ...",new($sliceType($emptyInterface))([new $String(l.name)])); Pfk=l.Conn.Close(); P|H.Printf("%s.Close() = %v",new($sliceType($emptyInterface))([new $String(l.name),k])); P�return k;    };GI.prototype.Close=function(){return this.$val.Close();}; 0
log:Printfnet/http:loggingConn 0�pnet/http.DetectContentType0GM��GM=$pkg.DetectContentType=function(k){var l,m,n,o,p; Sh    if(k.$length>512){ S�k=$subslice(k,0,512);    } S�l=0; S�while(l<k.$length&&GN(((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l]))){     T Tl=l+(1)>>0;} T1m=GP;n=0;while(n<m.$length){o=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]); TY T\p=o.match(k,l);    if(!(p==="")){ T�return p;    }    n++;} T�return"application/octet-stream";    }; 0DetectContentType09
StatusText0net/http:statusText 0�(*net/http.errorReader).Read0 ��GX.Ptr.prototype.Read=function(k){var l=0,m=$ifaceNil,n,o,p; x�n=this; y$    o=0;p=n.err;l=o;m=p;return[l,m];    };GX.prototype.Read=function(k){return this.$val.Read(k);}; 0
GZ=function(k){var l=($ptrType(GY)).nil,m=$ifaceNil,n,o,p,q,r,s,t,u,v,w,x,y,z,aa; {ql=new GY.Ptr("",$ifaceNil,$ifaceNil,false,new $Int64(0,0),false,($sliceType($String)).nil,false); {�n=false; {�p=k; {�if($assertType(p,($ptrType(DC)),true)[1]){o=p.$val; {�    if(!((q=o.ContentLength,(q.$high===0&&q.$low===0)))&&$interfaceIsEqual(o.Body,$ifaceNil)){ |    r=($ptrType(GY)).nil;s=D.Errorf("http: Request.ContentLength=%d with nil Body",new($sliceType($emptyInterface))([o.ContentLength]));l=r;m=s;return[l,m];    } |vl.Method=o.Method; |�l.Body=o.Body; |�l.BodyCloser=o.Body; |�l.ContentLength=o.ContentLength; |�l.Close=o.Close; |�l.TransferEncoding=o.TransferEncoding; }l.Trailer=o.Trailer; }7n=o.ProtoAtLeast(1,1); }_    if(!($interfaceIsEqual(l.Body,$ifaceNil))&&(l.TransferEncoding.$length===0)&&n){ }�    if((t=l.ContentLength,(t.$high===0&&t.$low===0))){ }� ~ u=($arrayType($Uint8,1)).zero();$copy(u,($arrayType($Uint8,1)).zero(),($arrayType($Uint8,1))); ~v=E.ReadFull(l.Body,new($sliceType($Uint8))(u));w=v[0];x=v[1]; ~;    if(!($interfaceIsEqual(x,$ifaceNil))&&!($interfaceIsEqual(x,E.EOF))){ ~cl.ContentLength=new $Int64(-1,4294967295); ~}l.Body=new GX.Ptr(x);        }else if(w===1){ yl.ContentLength=new $Int64(-1,4294967295); �l.Body=E.MultiReader(new($sliceType(E.Reader))([B.NewReader(new($sliceType($Uint8))(u)),l.Body]));    }else{ �l.Body=$ifaceNil; �l.BodyCloser=$ifaceNil;    }    } �1    if((y=l.ContentLength,(y.$high<0||(y.$high===0&&y.$low<0)))){ �Nl.TransferEncoding=new($sliceType($String))(["chunked"]);    }    }     ��}else if($assertType(p,($ptrType(DR)),true)[1]){o=p.$val; ��    if(!(o.Request===($ptrType(DC)).nil)){ ��l.Method=o.Request.Method;    } ��l.Body=o.Body; ��l.BodyCloser=o.Body; ��l.ContentLength=o.ContentLength; �!l.Close=o.Close; �6l.TransferEncoding=o.TransferEncoding; �al.Trailer=o.Trailer; �zn=o.ProtoAtLeast(1,1); ��l.ResponseToHEAD=HA(l.Method);    } �    if(l.ResponseToHEAD){ �l.Body=$ifaceNil; �+    if(HH(l.TransferEncoding)){ �Ol.ContentLength=new $Int64(-1,4294967295);    }    }else{ �t    if(!n||$interfaceIsEqual(l.Body,$ifaceNil)){ ��l.TransferEncoding=($sliceType($String)).nil;    } ��    if(HH(l.TransferEncoding)){ ��l.ContentLength=new $Int64(-1,4294967295);        }else if($interfaceIsEqual(l.Body,$ifaceNil)){ �+l.ContentLength=new $Int64(0,0);    }    } �]    if(!HH(l.TransferEncoding)){ ��l.Trailer=false;    } ��    z=l;aa=$ifaceNil;l=z;m=aa;return[l,m];    }; 0newTransferWriter0��bytes:NewReader
fmt:Errorfio:EOFio:MultiReaderio:ReadFull	io:Readernet/http:Requestnet/http:Responsenet/http:chunkednet/http:errorReadernet/http:noBodyExpectednet/http:transferWriter 0gnet/http.noBodyExpected0HA-HA=function(k){ ��return k==="HEAD";    }; 0noBodyExpected0  0��2(*net/http.transferWriter).shouldSendContentLength0 �GY.Ptr.prototype.shouldSendContentLength=function(){var k,l,m; �k=this; �6    if(HH(k.TransferEncoding)){ �Yreturn false;    } �j    if((l=k.ContentLength,(l.$high>0||(l.$high===0&&l.$low>0)))){ ��return true;    } ��    if(k.Method==="POST"||k.Method==="PUT"){ ��return true;    } �    if((m=k.ContentLength,(m.$high===0&&m.$low===0))&&HI(k.TransferEncoding)){ �Mreturn true;    } �^return false;    };GY.prototype.shouldSendContentLength=function(){return this.$val.shouldSendContentLength();}; 0)transferWritershouldSendContentLength0@net/http:chunkednet/http:isIdentitynet/http:transferWriter 0��&(*net/http.transferWriter).WriteHeader0 ��GY.Ptr.prototype.WriteHeader=function(k){var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac; �tl=this; ��    if(l.Close){ �� ��m=E.WriteString(k,"Connection: close\r\n");n=m[1];    if(!($interfaceIsEqual(n,$ifaceNil))){ �return n;    }    } ��    if(l.shouldSendContentLength()){ �� ��o=E.WriteString(k,"Content-Length: ");p=o[1];    if(!($interfaceIsEqual(p,$ifaceNil))){ �return p;    } �) �,q=E.WriteString(k,N.FormatInt(l.ContentLength,10)+"\r\n");r=q[1];    if(!($interfaceIsEqual(r,$ifaceNil))){ ��return r;    }        }else if(HH(l.TransferEncoding)){ �� ��s=E.WriteString(k,"Transfer-Encoding: chunked\r\n");t=s[1];    if(!($interfaceIsEqual(t,$ifaceNil))){ �return t;    }    } �A    if(!(l.Trailer===false)){ �Yu=($sliceType($String)).make(0,$keys(l.Trailer).length); ��v=l.Trailer;w=0;x=$keys(v);while(w<x.length){y=v[x[w]];        if(y===undefined){    w++;continue;    }z=y.k; ��z=CS(z); ��aa=z; ��if(aa==="Transfer-Encoding"||aa==="Trailer"||aa==="Content-Length"){ �	return new DA.Ptr("invalid Trailer key",z);    } �Bu=$append(u,z);    w++;} �_    if(u.$length>0){ �uU.Strings(u); �� ��ab=E.WriteString(k,"Trailer: "+J.Join(u,",")+"\r\n");ac=ab[1];    if(!($interfaceIsEqual(ac,$ifaceNil))){ �Nreturn ac;    }    }    } �greturn $ifaceNil;    };GY.prototype.WriteHeader=function(k){return this.$val.WriteHeader(k);}; 0transferWriter0��io:WriteStringnet/http:CanonicalHeaderKeynet/http:badStringErrornet/http:chunked net/http:shouldSendContentLengthnet/http:transferWritersort:Stringsstrconv:FormatIntstrings:Join 0��$(*net/http.transferWriter).WriteBody0 ��GY.Ptr.prototype.WriteBody=function(k){var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z; �{l=this; �� ��m=$ifaceNil; �� ��n=new $Int64(0,0); ��    if(!($interfaceIsEqual(l.Body,$ifaceNil))){ ��    if(HH(l.TransferEncoding)){ �p=AF(k); �4q=E.Copy(p,l.Body);m=q[1]; �T    if($interfaceIsEqual(m,$ifaceNil)){ �hm=p.Close();    }        }else if((o=l.ContentLength,(o.$high===-1&&o.$low===4294967295))){ ��r=E.Copy(k,l.Body);n=r[0];m=r[1];    }else{ ��s=E.Copy(k,E.LimitReader(l.Body,l.ContentLength));n=s[0];m=s[1]; �    if(!($interfaceIsEqual(m,$ifaceNil))){ �+return m;    } �> �Bt=new $Int64(0,0); �Ru=E.Copy(G.Discard,l.Body);t=u[0];m=u[1]; ��n=(v=t,new $Int64(n.$high+v.$high,n.$low+v.$low));    } ��    if(!($interfaceIsEqual(m,$ifaceNil))){ ��return m;    } �� ��m=l.BodyCloser.Close();    if(!($interfaceIsEqual(m,$ifaceNil))){ ��return m;    }    } �     if(!l.ResponseToHEAD&&!((w=l.ContentLength,(w.$high===-1&&w.$low===4294967295)))&&!((x=l.ContentLength,(x.$high===n.$high&&x.$low===n.$low)))){ �Nreturn D.Errorf("http: Request.ContentLength=%d with Body length %d",new($sliceType($emptyInterface))([l.ContentLength,n]));    } ��    if(HH(l.TransferEncoding)){ �$    if(!(l.Trailer===false)){ �= �@y=(new CJ(l.Trailer)).Write(k);    if(!($interfaceIsEqual(y,$ifaceNil))){ �lreturn y;    }    } ��z=E.WriteString(k,"\r\n");m=z[1];    } ��return m;    };GY.prototype.WriteBody=function(k){return this.$val.WriteBody(k);}; 0transferWriter0��
fmt:Errorfio/ioutil:Discardio:Copyio:LimitReaderio:WriteStringnet/http:Headernet/http:chunkednet/http:newChunkedWriternet/http:transferWriter 0��net/http.bodyAllowedForStatus0HC��HC=function(k){ �� ��if(k>=100&&k<=199){ ��return false;     ��}else if(k===204){ ��return false;     ��}else if(k===304){ �
�HG=function(k,l){var m=$ifaceNil,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac; �Vn=new HB.Ptr(false,0,"GET",0,0,$ifaceNil,new $Int64(0,0),($sliceType($String)).nil,false,false); ��o=false; ��q=k; ��if($assertType(q,($ptrType(DR)),true)[1]){p=q.$val; ��n.Header=p.Header; ��n.StatusCode=p.StatusCode; �n.ProtoMajor=p.ProtoMajor; �*n.ProtoMinor=p.ProtoMinor; �In.Close=HL(n.ProtoMajor,n.ProtoMinor,n.Header); ��o=true; ��    if(!(p.Request===($ptrType(DC)).nil)){ ��n.RequestMethod=p.Request.Method;    }     ��}else if($assertType(q,($ptrType(DC)),true)[1]){p=q.$val; ��n.Header=p.Header; �n.ProtoMajor=p.ProtoMajor; �%n.ProtoMinor=p.ProtoMinor; ��n.StatusCode=200;    }else{p=q; ��$panic(new $String("unexpected type"));    } �    if((n.ProtoMajor===0)&&(n.ProtoMinor===0)){ �Gr=1;s=1;n.ProtoMajor=r;n.ProtoMinor=s;    } ��t=HJ(n.RequestMethod,n.Header);n.TransferEncoding=t[0];m=t[1]; ��    if(!($interfaceIsEqual(m,$ifaceNil))){ ��    m=m;return m;    } � u=HK(o,n.StatusCode,n.RequestMethod,n.Header,n.TransferEncoding);v=u[0];m=u[1]; �g    if(!($interfaceIsEqual(m,$ifaceNil))){ �y    m=m;return m;    } ��    if(o&&n.RequestMethod==="HEAD"){ �� ��w=HU((new CJ(n.Header)).get("Content-Length"));x=w[0];y=w[1];    if(!($interfaceIsEqual(y,$ifaceNil))){ �    m=y;return m;    }else{ �!n.ContentLength=x;    }    }else{ �En.ContentLength=v;    } �sz=HM(n.Header,n.TransferEncoding);n.Trailer=z[0];m=z[1]; ��    if(!($interfaceIsEqual(m,$ifaceNil))){ ��    m=m;return m;    } ��aa=k; ��if($assertType(aa,($ptrType(DR)),true)[1]){ ��    if((v.$high===-1&&v.$low===4294967295)&&!HH(n.TransferEncoding)&&HC(n.StatusCode)){ �%n.Close=true;    }    } �� ��if(HH(n.TransferEncoding)){ ��    if(HA(n.RequestMethod)){ �"n.Body=GG;    }else{ �Cn.Body=new HN.Ptr(AA(l),k,l,n.Close,new K.Mutex.Ptr(),false);    }     ��}else if((v.$high===0&&v.$low===0)){ ��n.Body=GG;     ��}else if((v.$high>0||(v.$high===0&&v.$low>0))){ ��n.Body=new HN.Ptr(E.LimitReader(l,v),$ifaceNil,($ptrType(A.Reader)).nil,n.Close,new K.Mutex.Ptr(),false);    }else{ �j    if(n.Close){ ��n.Body=new HN.Ptr(l,$ifaceNil,($ptrType(A.Reader)).nil,n.Close,new K.Mutex.Ptr(),false);    }else{ �n.Body=GG;    }    } �0ac=k; �Kif($assertType(ac,($ptrType(DC)),true)[1]){ab=ac.$val; �\ab.Body=n.Body; �oab.ContentLength=n.ContentLength; ��ab.TransferEncoding=n.TransferEncoding; ��ab.Close=n.Close; ��ab.Trailer=n.Trailer;     ��}else if($assertType(ac,($ptrType(DR)),true)[1]){ab=ac.$val; ��ab.Body=n.Body; �ab.ContentLength=n.ContentLength; �6ab.TransferEncoding=n.TransferEncoding; �aab.Close=n.Close; �vab.Trailer=n.Trailer;    } ��    m=$ifaceNil;return m;    }; 0readTransfer0��bufio:Readerio:LimitReadernet/http:Headernet/http:Requestnet/http:Response
sync:Mutex 0��net/http.chunked0HH��HH=function(k){ ��return k.$length>0&&((0<0||0>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+0])==="chunked";    }; 0	chunked0  0��net/http.isIdentity0HI��HI=function(k){ ��return(k.$length===1)&&((0<0||0>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+0])==="identity";    }; 0
isIdentity0  0�%net/http.fixTransferEncoding0HJ��HJ=function(k,l){var m,n,o,p,q,r,s,t,u,v; �"m=(n=l["Transfer-Encoding"],n!==undefined?[n.v,true]:[($sliceType($String)).nil,false]);o=m[0];p=m[1]; �O    if(!p){ �_return[($sliceType($String)).nil,$ifaceNil];    } �tdelete l["Transfer-Encoding"]; ��q=J.Split(((0<0||0>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+0]),","); ��r=($sliceType($String)).make(0,q.$length); ��s=q;t=0;while(t<s.$length){u=((t<0||t>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+t]); ��u=J.ToLower(J.TrimSpace(u)); �[    if(u==="identity"){ �zbreak;    } ��    if(!(u==="chunked")){ ��return[($sliceType($String)).nil,new DA.Ptr("unsupported transfer encoding",u)];    } ��r=$subslice(r,0,(r.$length+1>>0)); �
(v=r.$length-1>>0,(v<0||v>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+v]=u);    t++;} �'    if(r.$length>1){ �:return[($sliceType($String)).nil,new DA.Ptr("too many transfer encodings",J.Join(r,","))];    } ��    if(r.$length>0){ �$delete l["Content-Length"]; �Greturn[r,$ifaceNil];    } �[return[($sliceType($String)).nil,$ifaceNil];    }; 0fixTransferEncoding0Znet/http:badStringErrorstrings:Join
fixTrailer0��net/http:CanonicalHeaderKeynet/http:ErrUnexpectedTrailernet/http:Headernet/http:badStringErrornet/http:chunkednet/http:get
readLocked0Tio:EOFio:ErrUnexpectedEOFio:LimitedReader
errors:Newio:EOFnet/http:Headernet/http:Requestnet/http:Response
bodyLocked0Jnet/http:ErrBodyReadAfterClosenet/http:bodyLockednet/http:readLocked 0��net/http.parseContentLength0HU�`HU=function(k){var l,m,n; ��k=J.TrimSpace(k); ��    if(k===""){ ��return[new $Int64(-1,4294967295),$ifaceNil];    } ��l=N.ParseInt(k,10,64);m=l[0];n=l[1]; �    if(!($interfaceIsEqual(n,$ifaceNil))||(m.$high<0||(m.$high===0&&m.$low<0))){ �#return[new $Int64(0,0),new DA.Ptr("bad Content-Length",k)];    } �[return[m,$ifaceNil];    }; 0parseContentLength0>net/http:badStringErrorstrconv:ParseIntstrings:TrimSpace 0�jnet/http.ProxyFromEnvironment0HW��HW=$pkg.ProxyFromEnvironment=function(k){var l,m,n,o,p,q,r; �~l=HZ.Get(); Л    if(l===""){ Юreturn[($ptrType(I.URL)).nil,$ifaceNil];    } ��    if(!IC(IP(k.URL))){ ��return[($ptrType(I.URL)).nil,$ifaceNil];    } ��m=I.Parse(l);n=m[0];o=m[1]; �"    if(!($interfaceIsEqual(o,$ifaceNil))||!J.HasPrefix(n.Scheme,"http")){ � �p=I.Parse("http://"+l);q=p[0];r=p[1];    if($interfaceIsEqual(r,$ifaceNil)){ �Creturn[q,$ifaceNil];    }    } �`    if(!($interfaceIsEqual(o,$ifaceNil))){ �rreturn[($ptrType(I.URL)).nil,D.Errorf("invalid proxy address %q: %v",new($sliceType($emptyInterface))([new $String(l),o]))];    } ҹreturn[n,$ifaceNil];    }; 0ProxyFromEnvironment0}
fmt:Errorfnet/http:canonicalAddrnet/http:httpProxyEnvnet/http:useProxy
ProxyURL0  0�M)(*net/http.transportRequest).extraHeaders0 ��HY.Ptr.prototype.extraHeaders=function(){var k; Դk=this; ��    if(k.extra===false){ ��k.extra=new $Map();    } �return k.extra;    };HY.prototype.extraHeaders=function(){return this.$val.extraHeaders();}; 0 transportRequestextraHeaders0net/http:transportRequest 0��(*net/http.Transport).RoundTrip0 ��HV.Ptr.prototype.RoundTrip=function(k,$b){var $this=this,$args=arguments,l=($ptrType(DR)).nil,m=$ifaceNil,$r,$s=0,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: ��n=$this; �'    if(k.URL===($ptrType(I.URL)).nil){ �=k.closeBody(); �O    o=($ptrType(DR)).nil;p=C.New("http: nil Request.URL");l=o;m=p;return[l,m];    } փ    if(k.Header===false){ ֜k.closeBody(); ֮    q=($ptrType(DR)).nil;r=C.New("http: nil Request.Header");l=q;m=r;return[l,m];    } ��    if(!(k.URL.Scheme==="http")&&!(k.URL.Scheme==="https")){ �"n.altMu.RLock(); �4 �8s=$ifaceNil; �J    if(!(n.altProto===false)){ �ds=(t=n.altProto[k.URL.Scheme],t!==undefined?t.v:$ifaceNil);    } ׊n.altMu.RUnlock(); מ    if($interfaceIsEqual(s,$ifaceNil)){ װk.closeBody(); ��    u=($ptrType(DR)).nil;v=new DA.Ptr("unsupported protocol scheme",k.URL.Scheme);l=u;m=v;return[l,m];    } �    w=s.RoundTrip(k);l=w[0];m=w[1];return[l,m];    } �1    if(k.URL.Host===""){ �Kk.closeBody(); �]    x=($ptrType(DR)).nil;y=C.New("http: no Host in request URL");l=x;m=y;return[l,m];    } ؘz=new HY.Ptr(k,false); ��aa=n.connectMethodForRequest(z);ab=new ID.Ptr();$copy(ab,aa[0],ID);m=aa[1]; ��    if(!($interfaceIsEqual(m,$ifaceNil))){ ��k.closeBody(); �    ac=($ptrType(DR)).nil;ad=m;l=ac;m=ad;return[l,m];    } ��af=n.getConn(k,$clone(ab,ID),true);$s=1;case 1:if(af&&af.$blocking){af=af();}ae=af;ag=ae[0];m=ae[1]; �    if(!($interfaceIsEqual(m,$ifaceNil))){ �0n.setReqCanceler(k,$throwNilPointerError); �Mk.closeBody(); �_    ah=($ptrType(DR)).nil;ai=m;l=ah;m=ai;return[l,m];    } �t    ak=ag.roundTrip(z,true);$s=2;case 2:if(ak&&ak.$blocking){ak=ak();}aj=ak;l=aj[0];m=aj[1];return[l,m];    case-1:}return;}};$f.$blocking=true;return $f;};HV.prototype.RoundTrip=function(k,$b){return this.$val.RoundTrip(k,$b);}; 0	Transport0�
errors:Newnet/http:Requestnet/http:Responsenet/http:Transportnet/http:badStringErrornet/http:closeBodynet/http:connectMethod net/http:connectMethodForRequestnet/http:getConnnet/http:roundTripnet/http:setReqCancelernet/http:transportRequestnet/url:URL�0�s&(*net/http.Transport).RegisterProtocol0 �HV.Ptr.prototype.RegisterProtocol=function(k,l){var $deferred=[],$err=null,m,n,o,p,q;try{$deferFrames.push($deferred); ��m=this; �    if(k==="http"||k==="https"){ �C$panic(new $String("protocol "+k+" already registered"));    } �{m.altMu.Lock(); ܋$deferred.push([$methodVal(m.altMu,"Unlock"),[]]); ܣ    if(m.altProto===false){ ܼm.altProto=new $Map();    } �� ��n=(o=m.altProto[k],o!==undefined?[o.v,true]:[$ifaceNil,false]);p=n[1];    if(p){ �$panic(new $String("protocol "+k+" already registered"));    } �Rq=k;(m.altProto||$throwRuntimeError("assignment to entry in nil map"))[q]={k:q,v:l};    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};HV.prototype.RegisterProtocol=function(k,l){return this.$val.RegisterProtocol(k,l);}; 0	Transport0net/http:Transport 0��*(*net/http.Transport).CloseIdleConnections0 �'HV.Ptr.prototype.CloseIdleConnections=function(){var k,l,m,n,o,p,q,r,s,t; �Lk=this; �tk.idleMu.Lock(); ޅl=k.idleConn; ޖk.idleConn=false; ިk.idleConnCh=false; ޼k.idleMu.Unlock(); ��m=l;n=0;o=$keys(m);while(n<o.length){p=m[o[n]];        if(p===undefined){    n++;continue;    }q=p.v; ��r=q;s=0;while(s<r.$length){t=((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]); �t.close();    s++;}    n++;}    };HV.prototype.CloseIdleConnections=function(){return this.$val.CloseIdleConnections();}; 0	Transport0$net/http:Transportnet/http:close 0��#(*net/http.Transport).CancelRequest0 �BHV.Ptr.prototype.CancelRequest=function(k){var l,m,n; �vl=this; ߣl.reqMu.Lock(); ߳n=(m=l.reqCanceler[k.$key()],m!==undefined?m.v:$throwNilPointerError); ��l.reqMu.Unlock(); ��    if(!(n===$throwNilPointerError)){ ��n();    }    };HV.prototype.CancelRequest=function(k){return this.$val.CancelRequest(k);}; 0	Transport0net/http:Transport 0��(*net/http.envOnce).Get0 ��IB.Ptr.prototype.Get=function(){var k; �k=this; ��k.once.Do($methodVal(k,"init")); ��return k.val;    };IB.prototype.Get=function(){return this.$val.Get();}; 0	envOnce0!net/http:envOnce
sync:Mutex	sync:Once 0�z-(*net/http.Transport).connectMethodForRequest0 ��HV.Ptr.prototype.connectMethodForRequest=function(k){var l=new ID.Ptr(),m=$ifaceNil,n,o,p,q; ��n=this; �/l.targetScheme=k.Request.URL.Scheme; �Rl.targetAddr=IP(k.Request.URL); �{    if(!(n.Proxy===$throwNilPointerError)){ �o=n.Proxy(k.Request);l.proxyURL=o[0];m=o[1];    } �    p=new ID.Ptr();$copy(p,l,ID);q=$ifaceNil;$copy(l,p,ID);m=q;return[l,m];    };HV.prototype.connectMethodForRequest=function(k){return this.$val.connectMethodForRequest(k);}; 0$	TransportconnectMethodForRequest0Dnet/http:Transportnet/http:canonicalAddrnet/http:connectMethod 0�#(*net/http.connectMethod).proxyAuth0 �sID.Ptr.prototype.proxyAuth=function(){var k,l,m,n,o; �0k=this; �Y    if(k.proxyURL===($ptrType(I.URL)).nil){ �sreturn"";    } � �l=k.proxyURL.User;    if(!(l===($ptrType(I.Userinfo)).nil)){ �m=l.Username(); ��n=l.Password();o=n[0]; ��return"Basic "+AN(m,o);    } �return"";    };ID.prototype.proxyAuth=function(){return this.$val.proxyAuth();}; 0
log:Fatalfnet/http:Transportnet/http:closenet/http:connectMethodKeynet/http:isBrokennet/http:persistConn 0�h#(*net/http.Transport).getIdleConnCh0 ��HV.Ptr.prototype.getIdleConnCh=function(k){var $deferred=[],$err=null,l,m,n,o,p,q,r;try{$deferFrames.push($deferred); �~l=this; ��    if(l.DisableKeepAlives){ ��return($chanType(($ptrType(IF)),false,false)).nil;    } ��m=new IE.Ptr();$copy(m,k.key(),IE); ��l.idleMu.Lock(); �
errors:Newnet/http:Transportnet/http:connectMethodnet/http:dialConnnet/http:getIdleConnnet/http:getIdleConnChnet/http:persistConnnet/http:putIdleConnnet/http:setReqCanceler�0��(*net/http.Transport).dialConn0 �HV.Ptr.prototype.dialConn=function(k,$b){var $this=this,$args=arguments,$r,$s=0,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: ��l=$this; ��n=l.dial("tcp",k.addr(),true);$s=1;case 1:if(n&&n.$blocking){n=n();}m=n;o=m[0];p=m[1]; ��    if(!($interfaceIsEqual(p,$ifaceNil))){ �     if(!(k.proxyURL===($ptrType(I.URL)).nil)){ �p=D.Errorf("http: error connecting to proxy %s: %v",new($sliceType($emptyInterface))([k.proxyURL,p]));    } �nreturn[($ptrType(IF)).nil,p];    } ��q=k.proxyAuth(); ��r=new IF.Ptr(l,$clone(k.key(),IE),o,($ptrType(V.ConnectionState)).nil,($ptrType(A.Reader)).nil,false,($ptrType(A.Writer)).nil,new($chanType(IJ,false,false))(1),new($chanType(IK,false,false))(1),new($chanType(($structType([])),false,false))(0),false,new($chanType($error,false,false))(1),new K.Mutex.Ptr(),0,false,false,$throwNilPointerError); �� ��if(k.proxyURL===($ptrType(I.URL)).nil){}else if(k.targetScheme==="http"){$s=2;continue;}else if(k.targetScheme==="https"){$s=3;continue;}else{$s=4;continue;}     ��$s=4;continue;case 2: ��r.isProxy=true; ��    if(!(q==="")){ �r.mutateHeaderFunc=(function(s){ �<(new CJ(s)).Set("Proxy-Authorization",q);    });    }     �g$s=4;continue;case 3: ��s=new DC.Ptr("CONNECT",new I.URL.Ptr("",k.targetAddr,($ptrType(I.Userinfo)).nil,"","","",""),"",0,0,new $Map(),$ifaceNil,new $Int64(0,0),($sliceType($String)).nil,false,k.targetAddr,false,false,($ptrType(P.Form)).nil,false,"","",($ptrType(V.ConnectionState)).nil); �    if(!(q==="")){ �.(new CJ(s.Header)).Set("Proxy-Authorization",q);    } �es.Write(o); ��t=A.NewReader(o); �u=DS(t,s);v=u[0];w=u[1]; �H    if(!($interfaceIsEqual(w,$ifaceNil))){ �[o.Close(); �kreturn[($ptrType(IF)).nil,w];    } ��    if(!((v.StatusCode===200))){ ��x=J.SplitN(v.Status," ",2); ��o.Close(); ��return[($ptrType(IF)).nil,C.New(((1<0||1>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+1]))];    }    case 4: �    if(k.targetScheme==="https"){}else{$s=5;continue;} �fy=l.TLSClientConfig; ��    if(y===($ptrType(V.Config)).nil||y.ServerName===""){ ��z=k.tlsHost(); ��    if(y===($ptrType(V.Config)).nil){ ��y=new V.Config.Ptr($ifaceNil,$throwNilPointerError,($sliceType(V.Certificate)).nil,false,($ptrType($packages["crypto/x509"].CertPool)).nil,($sliceType($String)).nil,z,0,($ptrType($packages["crypto/x509"].CertPool)).nil,false,($sliceType($Uint16)).nil,false,false,($arrayType($Uint8,32)).zero(),$ifaceNil,0,0,($sliceType(V.CurveID)).nil,new K.Once.Ptr());    }else{ �aa=new V.Config.Ptr();$copy(aa,y,V.Config); �/aa.ServerName=z; �Ky=aa;    }    } �cab=o; �wac=V.Client(ab,y); ��ad=new($chanType($error,false,false))(2); �� ��ae=($ptrType(L.Timer)).nil; �� ��af=l.TLSHandshakeTimeout;    if(!((af.$high===0&&af.$low===0))){}else{$s=6;continue;} �ae=L.AfterFunc(af,(function($b){var $this=this,$args=arguments,$r,$s=0,ag;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: �F    $r=$send(ad,(ag=new IT.Ptr(),new ag.constructor.Struct(ag)),true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}));    case 6: �u$go((function($b){var $this=this,$args=arguments,$r,$s=0,ag;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: ��ag=ac.Handshake(); ��    if(!(ae===($ptrType(L.Timer)).nil)){ ��ae.Stop();    } ��    $r=$send(ad,ag,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}),[]); �� ��ag=$recv(ad,true);$s=7;case 7:if(ag&&ag.$blocking){ag=ag();}ah=ag[0];    if(!($interfaceIsEqual(ah,$ifaceNil))){}else{$s=8;continue;} �ab.Close(); �return[($ptrType(IF)).nil,ah];    case 8: �.    if(!y.InsecureSkipVerify){ �N �Qai=ac.VerifyHostname(y.ServerName);    if(!($interfaceIsEqual(ai,$ifaceNil))){ ��ab.Close(); ��return[($ptrType(IF)).nil,ai];    }    } ��aj=new V.ConnectionState.Ptr();$copy(aj,ac.ConnectionState(),V.ConnectionState); ��r.tlsState=aj; ��r.conn=ac;    case 5: �r.br=A.NewReader((ak=new IU.Ptr(r.conn,new($ptrType($Bool))(function(){return this.$target.sawEOF;},function($v){this.$target.sawEOF=$v;},r)),new ak.constructor.Struct(ak))); �[r.bw=A.NewWriter(r.conn); ��$go($methodVal(r,"readLoop"),[]); ��$go($methodVal(r,"writeLoop"),[]); ��return[r,$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};HV.prototype.dialConn=function(k,$b){return this.$val.dialConn(k,$b);}; 0	TransportdialConn0��bufio:NewReaderbufio:NewWriterbufio:Readerbufio:Writercrypto/tls:Certificatecrypto/tls:Clientcrypto/tls:Configcrypto/tls:ConnectionStatecrypto/tls:CurveIDcrypto/x509:CertPool
errors:New
fmt:Errorfmime/multipart:Formnet/http:Headernet/http:ReadResponsenet/http:Requestnet/http:Transport
sync:Mutex	sync:Oncetime:AfterFunc
time:Timer�0�7net/http.useProxy0IC�^IC=function(k){var l,m,n,o,p,q,r,s;  �    if(k.length===0){  �return true;    }  �l=M.SplitHostPort(k);m=l[0];n=l[2];  �    if(!($interfaceIsEqual(n,$ifaceNil))){  �return false;    }     if(m==="localhost"){ +return false;    } < ?o=M.ParseIP(m);    if(!(o===M.IP.nil)){ f    if(o.IsLoopback()){ ~return false;    }    } �p=IA.Get(); �    if(p==="*"){ �return false;    } �k=J.ToLower(J.TrimSpace(k));     if(AK(k)){ !k=k.substring(0,J.LastIndex(k,":"));    } Qq=J.Split(p,",");r=0;while(r<q.$length){s=((r<0||r>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+r]); �s=J.ToLower(J.TrimSpace(s)); �    if(s.length===0){ �r++;continue;    } �    if(AK(s)){ �s=s.substring(0,J.LastIndex(s,":"));    }     if(k===s){  return false;    } 3    if((s.charCodeAt(0)===46)&&(J.HasSuffix(k,s)||k===s.substring(1))){ �return false;    } �    if(!((s.charCodeAt(0)===46))&&J.HasSuffix(k,s)&&(k.charCodeAt(((k.length-s.length>>0)-1>>0))===46)){ Lreturn false;    }    r++;} areturn true;    }; 0
useProxy0��net/http:hasPortnet/http:noProxyEnvnet:IPnet:ParseIPnet:SplitHostPortstrings:HasSuffixstrings:LastIndex
(k=this; 
Ol=k.targetAddr; 
c    if(AK(l)){ 
ul=l.substring(0,J.LastIndex(l,":"));    } 
�return l;    };ID.prototype.tlsHost=function(){return this.$val.tlsHost();}; 0
log:Printfnet/http:Headernet/http:ReadResponsenet/http:Responsenet/http:bodyEOFSignalnet/http:closenet/http:closeLockednet/http:gzipReadernet/http:persistConnnet/http:putIdleConnnet/http:requestAndChannet/http:responseAndErrornet/http:setReqCancelernet/http:wroteRequest
sync:Mutex�0��!(*net/http.persistConn).writeLoop0 ��IF.Ptr.prototype.writeLoop=function($b){var $this=this,$args=arguments,$r,$s=0,k,l,m,n,o;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: k=$this; /case 1:if(!(true)){$s=2;continue;} 7m=$select([[k.writech],[k.closech]],true);$s=3;case 3:if(m&&m.$blocking){m=m();}l=m;    if(l[0]===0){}else if(l[0]===1){$s=4;continue;}else{$s=5;continue;} Gn=new IK.Ptr();$copy(n,l[1][0],IK); ^    if(k.isBroken()){}else{$s=6;continue;} u    $r=$send(n.ch,C.New("http: can't write HTTP request on broken connection"),true);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} �$s=1;continue;    case 6: �o=n.req.Request.write(k.bw,k.isProxy,n.req.extra);     if($interfaceIsEqual(o,$ifaceNil)){ )o=k.bw.Flush();    } E    if(!($interfaceIsEqual(o,$ifaceNil))){ Yk.markBroken(); mn.req.Request.closeBody();    } �    $r=$send(k.writeErrCh,o,true);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} �    $r=$send(n.ch,o,true);$s=9;case 9:if($r&&$r.$blocking){$r=$r();}        $s=5;continue;case 4:  return;    case 5:    $s=1;continue;case 2:    case-1:}return;}};$f.$blocking=true;return $f;};IF.prototype.writeLoop=function($b){return this.$val.writeLoop($b);}; 0persistConn	writeLoop0��
errors:Newnet/http:closeBodynet/http:isBrokennet/http:markBrokennet/http:persistConnnet/http:writenet/http:writeRequest�0��$(*net/http.persistConn).wroteRequest0 � IF.Ptr.prototype.wroteRequest=function($b){var $this=this,$args=arguments,$r,$s=0,k,l,m,n,o,p;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: �k=$this; �l=$select([[k.writeErrCh],[]]);    if(l[0]===0){}else if(l[0]===1){$s=1;continue;}else{$s=2;continue;} �m=l[1][0];  oreturn $interfaceIsEqual(m,$ifaceNil);        $s=2;continue;case 1: "�o=$select([[k.writeErrCh],[L.After(new L.Duration(0,50000000))]],true);$s=3;case 3:if(o&&o.$blocking){o=o();}n=o;    if(n[0]===0){ "�p=n[1][0]; "�return $interfaceIsEqual(p,$ifaceNil);        }else if(n[0]===1){ #return false;    }    case 2:    case-1:}return;}};$f.$blocking=true;return $f;};IF.prototype.wroteRequest=function($b){return this.$val.wroteRequest($b);}; 0persistConnwroteRequest01net/http:persistConn
time:After
�!(*net/http.persistConn).roundTrip0 �	fIF.Ptr.prototype.roundTrip=function(k,$b){var $this=this,$args=arguments,l=($ptrType(DR)).nil,m=$ifaceNil,$r,$s=0,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0: 'n=$this; 'ln.t.setReqCanceler(k.Request,$methodVal(n,"cancelRequest")); '�n.lk.Lock(); '� '�n.numExpectedResponses=n.numExpectedResponses+(1)>>0; '�o=n.mutateHeaderFunc; '�n.lk.Unlock(); '�    if(!(o===$throwNilPointerError)){ (o(k.extraHeaders());    } (�p=false; )    if(!n.t.DisableCompression&&(new CJ(k.Request.Header)).Get("Accept-Encoding")===""&&!(k.Request.Method==="HEAD")){ *�p=true; *�(new CJ(k.extraHeaders())).Set("Accept-Encoding","gzip");    } +�q=new($chanType($error,false,false))(1); +�    $r=$send(n.writech,new IK.Ptr(k,q),true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} +�r=new($chanType(II,false,false))(1); ,    $r=$send(n.reqch,new IJ.Ptr(k.Request,r,p),true);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} ,T ,Xs=new II.Ptr();$copy(s,new II.Ptr(),II); ,m ,qt=n.closech; ,� ,�u=($chanType(L.Time,false,true)).nil; ,� ,�v=($chanType(L.Time,false,true)).nil; ,� ,�case 3:if(!(true)){$s=4;continue;} ,�x=$select([[q],[t],[u],[v],[r]],true);$s=5;case 5:if(x&&x.$blocking){x=x();}w=x;    if(w[0]===0){ ,�y=w[1][0]; -    if(!($interfaceIsEqual(y,$ifaceNil))){ -$$copy(s,new II.Ptr(($ptrType(DR)).nil,y),II); -Hn.close(); -W$s=4;continue;    } -r -uz=n.t.ResponseHeaderTimeout;    if((z.$high>0||(z.$high===0&&z.$low>0))){ -�v=L.After(z);    }        }else if(w[0]===1){ 0:t=($chanType(($structType([])),false,false)).nil; 0u=L.After(new L.Duration(0,100000000));        }else if(w[0]===2){ 0�$copy(s,new II.Ptr(($ptrType(DR)).nil,IN),II); 1$s=4;continue;        }else if(w[0]===3){ 1Cn.close(); 1Q$copy(s,new II.Ptr(($ptrType(DR)).nil,IM),II); 1{$s=4;continue;        }else if(w[0]===4){ 1�$copy(s,w[1][0],II); 1�$s=4;continue;    }    $s=3;continue;case 4: 1�n.lk.Lock(); 1� 1�n.numExpectedResponses=n.numExpectedResponses-(1)>>0; 1�n.lk.Unlock(); 1�    if(!($interfaceIsEqual(s.err,$ifaceNil))){ 2n.t.setReqCanceler(k.Request,$throwNilPointerError);    } 2:    aa=s.res;ab=s.err;l=aa;m=ab;return[l,m];    case-1:}return;}};$f.$blocking=true;return $f;};IF.prototype.roundTrip=function(k,$b){return this.$val.roundTrip(k,$b);}; 0persistConn	roundTrip0�,net/http:Headernet/http:Responsenet/http:cancelRequestnet/http:closenet/http:errClosednet/http:errTimeoutnet/http:extraHeadersnet/http:persistConnnet/http:requestAndChannet/http:responseAndErrornet/http:setReqCancelernet/http:writeRequest
time:After
markBroken0net/http:persistConn 0��(*net/http.persistConn).close0 �VIF.Ptr.prototype.close=function(){var $deferred=[],$err=null,k;try{$deferFrames.push($deferred); 3lk=this; 3�k.lk.Lock(); 3�$deferred.push([$methodVal(k.lk,"Unlock"),[]]); 3�k.closeLocked();    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};IF.prototype.close=function(){return this.$val.close();}; 0persistConnclose0,net/http:closeLockednet/http:persistConn 0��#(*net/http.persistConn).closeLocked0 �#IF.Ptr.prototype.closeLocked=function(){var k; 3�k=this; 3�k.broken=true; 3�    if(!k.closed){ 4k.conn.Close(); 4k.closed=true; 41$close(k.closech);    } 4Gk.mutateHeaderFunc=$throwNilPointerError;    };IF.prototype.closeLocked=function(){return this.$val.closeLocked();}; 0persistConncloseLocked0net/http:persistConn 0��net/http.canonicalAddr0IP��IP=function(k){var l,m; 5l=k.Host; 5)    if(!AK(l)){ 5?return l+":"+(m=IO[k.Scheme],m!==undefined?m.v:"");    } 5kreturn l;    }; 0
errors:Newnet/http:bodyEOFSignalnet/http:condfn 0��(*net/http.bodyEOFSignal).Close0 �NIQ.Ptr.prototype.Close=function(){var $deferred=[],$err=null,k,l;try{$deferFrames.push($deferred); 9�k=this; 9�k.mu.Lock(); 9�$deferred.push([$methodVal(k.mu,"Unlock"),[]]); 9�    if(k.closed){ :return $ifaceNil;    } :k.closed=true; :1    if(!(k.earlyCloseFn===$throwNilPointerError)&&!($interfaceIsEqual(k.rerr,E.EOF))){ :dreturn k.earlyCloseFn();    } :�l=k.body.Close(); :�k.condfn(l); :�return l;    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};IQ.prototype.Close=function(){return this.$val.Close();}; 0
gzipReader0.compress/gzip:NewReadernet/http:gzipReader 0��(*net/http.gzipReader).Close0 ��IR.Ptr.prototype.Close=function(){var k; =k=this; =#return k.body.Close();    };IR.prototype.Close=function(){return this.$val.Close();}; 0
gzipReader0net/http:gzipReader 0��+(net/http.tlsHandshakeTimeoutError).Timeout0 yIT.Ptr.prototype.Timeout=function(){ =�return true;    };IT.prototype.Timeout=function(){return this.$val.Timeout();}; 0tlsHandshakeTimeoutError0#!net/http:tlsHandshakeTimeoutError 0��-(net/http.tlsHandshakeTimeoutError).Temporary0 IT.Ptr.prototype.Temporary=function(){ >return true;    };IT.prototype.Temporary=function(){return this.$val.Temporary();}; 0tlsHandshakeTimeoutError0#!net/http:tlsHandshakeTimeoutError 0�)(net/http.tlsHandshakeTimeoutError).Error0 ��IT.Ptr.prototype.Error=function(){ >Qreturn"net/http: TLS handshake timeout";    };IT.prototype.Error=function(){return this.$val.Error();}; 0tlsHandshakeTimeoutError0#!net/http:tlsHandshakeTimeoutError 0�v(net/http.noteEOFReader).Read0 �IU.Ptr.prototype.Read=function(k){var l=0,m=$ifaceNil,n,o; >�n=new IU.Ptr();$copy(n,this,IU); >�o=n.r.Read(k);l=o[0];m=o[1]; ?    if($interfaceIsEqual(m,E.EOF)){ ?%n.sawEOF.$set(true);    } ?;return[l,m];    };IU.prototype.Read=function(k){return this.$val.Read(k);}; 0
 �