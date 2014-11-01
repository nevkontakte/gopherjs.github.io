0���
crypto/rsa�K�package rsa
import crypto "crypto"
import subtle "crypto/subtle"
import errors "errors"
import io "io"
import big "math/big"
import bytes "bytes"
import hash "hash"
import rand "crypto/rand"
type @"".CRTValue struct { @"".Exp *@"math/big".Int; @"".Coeff *@"math/big".Int; @"".R *@"math/big".Int }
func @"".DecryptOAEP(@"".hash @"hash".Hash, @"".random @"io".Reader, @"".priv *@"".PrivateKey, @"".ciphertext []byte, @"".label []byte) (@"".msg []byte, @"".err error)
func @"".DecryptPKCS1v15(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".ciphertext []byte) (@"".out []byte, @"".err error)
func @"".DecryptPKCS1v15SessionKey(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".ciphertext []byte, @"".key []byte) (@"".err error)
func @"".EncryptOAEP(@"".hash @"hash".Hash, @"".random @"io".Reader, @"".pub *@"".PublicKey, @"".msg []byte, @"".label []byte) (@"".out []byte, @"".err error)
func @"".EncryptPKCS1v15(@"".rand @"io".Reader, @"".pub *@"".PublicKey, @"".msg []byte) (@"".out []byte, @"".err error)
var @"".ErrDecryption error
var @"".ErrMessageTooLong error
var @"".ErrVerification error
func @"".GenerateKey(@"".random @"io".Reader, @"".bits int) (@"".priv *@"".PrivateKey, @"".err error)
func @"".GenerateMultiPrimeKey(@"".random @"io".Reader, @"".nprimes int, @"".bits int) (@"".priv *@"".PrivateKey, @"".err error)
type @"".PSSOptions struct { @"".SaltLength int }
func (? *@"".PSSOptions) @"".saltLength() (? int)
const @"".PSSSaltLengthAuto = 0x0
const @"".PSSSaltLengthEqualsHash = -0x1
type @"".PrecomputedValues struct { @"".Dp *@"math/big".Int; @"".Dq *@"math/big".Int; @"".Qinv *@"math/big".Int; @"".CRTValues []@"".CRTValue }
type @"".PrivateKey struct { ? @"".PublicKey; @"".D *@"math/big".Int; @"".Primes []*@"math/big".Int; @"".Precomputed @"".PrecomputedValues }
func (? *@"".PrivateKey) @"".Precompute() ()
func (? *@"".PrivateKey) @"".Validate() (? error)
type @"".PublicKey struct { @"".N *@"math/big".Int; @"".E int }
func @"".SignPKCS1v15(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".hash @"crypto".Hash, @"".hashed []byte) (@"".s []byte, @"".err error)
func @"".SignPSS(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".hash @"crypto".Hash, @"".hashed []byte, @"".opts *@"".PSSOptions) (@"".s []byte, @"".err error)
func @"".VerifyPKCS1v15(@"".pub *@"".PublicKey, @"".hash @"crypto".Hash, @"".hashed []byte, @"".sig []byte) (@"".err error)
func @"".VerifyPSS(@"".pub *@"".PublicKey, @"".hash @"crypto".Hash, @"".hashed []byte, @"".sig []byte, @"".opts *@"".PSSOptions) (? error)
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
import fmt "fmt"
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
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"crypto".Hash uint
func (? @"crypto".Hash) @"crypto".Available() (? bool)
func (? @"crypto".Hash) @"crypto".New() (? @"hash".Hash)
func (? @"crypto".Hash) @"crypto".Size() (? int)
func (? *@"crypto".Hash) @"crypto".Available() (? bool)
func (? *@"crypto".Hash) @"crypto".New() (? @"hash".Hash)
func (? *@"crypto".Hash) @"crypto".Size() (? int)
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
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
$$
0�github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8byteshashmathstrconvcryptobufio
crypto/aesreflectencoding/binarysyscallstringstimeosfmt	math/randmath/bigcrypto/rand0o0cryptoA0
bytesF0	hashG0crypto/randH0��>0�_ 0V��V=$pkg.PSSOptions=$newType(0,"Struct","rsa.PSSOptions","PSSOptions","crypto/rsa",function(SaltLength_){this.$val=this;this.SaltLength=SaltLength_!==undefined?SaltLength_:0;});��($ptrType(V)).methods=[["saltLength","saltLength","crypto/rsa",$funcType([],[$Int],false),-1]];V.init([["SaltLength","SaltLength","",$Int,""]]);0
PSSOptions0  0�* 0AB��AB=$pkg.PublicKey=$newType(0,"Struct","rsa.PublicKey","PublicKey","crypto/rsa",function(N_,E_){this.$val=this;this.N=N_!==undefined?N_:($ptrType(E.Int)).nil;this.E=E_!==undefined?E_:0;});BAB.init([["N","N","",($ptrType(E.Int)),""],["E","E","",$Int,""]]);0	PublicKey0math/big:Int 0�( 0AG��AG=$pkg.PrivateKey=$newType(0,"Struct","rsa.PrivateKey","PrivateKey","crypto/rsa",function(PublicKey_,D_,Primes_,Precomputed_){this.$val=this;this.PublicKey=PublicKey_!==undefined?PublicKey_:new AB.Ptr();this.D=D_!==undefined?D_:($ptrType(E.Int)).nil;this.Primes=Primes_!==undefined?Primes_:($sliceType(($ptrType(E.Int)))).nil;this.Precomputed=Precomputed_!==undefined?Precomputed_:new AH.Ptr();});�5($ptrType(AG)).methods=[["Precompute","Precompute","",$funcType([],[],false),-1],["Validate","Validate","",$funcType([],[$error],false),-1]];AG.init([["PublicKey","","",AB,""],["D","D","",($ptrType(E.Int)),""],["Primes","Primes","",($sliceType(($ptrType(E.Int)))),""],["Precomputed","Precomputed","",AH,""]]);0
PrivateKey0Bcrypto/rsa:PrecomputedValuescrypto/rsa:PublicKeymath/big:Int 0�v 0AH�~AH=$pkg.PrecomputedValues=$newType(0,"Struct","rsa.PrecomputedValues","PrecomputedValues","crypto/rsa",function(Dp_,Dq_,Qinv_,CRTValues_){this.$val=this;this.Dp=Dp_!==undefined?Dp_:($ptrType(E.Int)).nil;this.Dq=Dq_!==undefined?Dq_:($ptrType(E.Int)).nil;this.Qinv=Qinv_!==undefined?Qinv_:($ptrType(E.Int)).nil;this.CRTValues=CRTValues_!==undefined?CRTValues_:($sliceType(AI)).nil;});��AH.init([["Dp","Dp","",($ptrType(E.Int)),""],["Dq","Dq","",($ptrType(E.Int)),""],["Qinv","Qinv","",($ptrType(E.Int)),""],["CRTValues","CRTValues","",($sliceType(AI)),""]]);0PrecomputedValues0#crypto/rsa:CRTValuemath/big:Int 0�� 0AI�AI=$pkg.CRTValue=$newType(0,"Struct","rsa.CRTValue","CRTValue","crypto/rsa",function(Exp_,Coeff_,R_){this.$val=this;this.Exp=Exp_!==undefined?Exp_:($ptrType(E.Int)).nil;this.Coeff=Coeff_!==undefined?Coeff_:($ptrType(E.Int)).nil;this.R=R_!==undefined?R_:($ptrType(E.Int)).nil;});}AI.init([["Exp","Exp","",($ptrType(E.Int)),""],["Coeff","Coeff","",($ptrType(E.Int)),""],["R","R","",($ptrType(E.Int)),""]]);0
CRTValue0math/big:Int 0  0N  0hashPrefixes0  0 0Z  0	bigZero0  0 0AA  0bigOne0  0% 0AC  0errPublicModulus0  0+ 0AD  0errPublicExponentSmall0  0+ 0AE  0errPublicExponentLarge0  0" 0   0ErrMessageTooLong0  0 0   0
errors:New 0u 0  7    AD=C.New("crypto/rsa: public exponent too small");0 0/!crypto/rsa:errPublicExponentSmall
errors:New 0u 0  7    AE=C.New("crypto/rsa: public exponent too large");0 0/!crypto/rsa:errPublicExponentLarge
errors:New 0�� 0  Z    $pkg.ErrMessageTooLong=C.New("crypto/rsa: message too long for RSA public key size");0 0*crypto/rsa:ErrMessageTooLong
errors:New 0s 0  >    $pkg.ErrDecryption=C.New("crypto/rsa: decryption error");0 0&crypto/rsa:ErrDecryption
errors:New 0y 0  B    $pkg.ErrVerification=C.New("crypto/rsa: verification error");0 0(crypto/rsa:ErrVerification
errors:New 0��crypto/rsa.EncryptPKCS1v150I��I=$pkg.EncryptPKCS1v15=function(c,d,e){var f=($sliceType($Uint8)).nil,g=$ifaceNil,h,i,j,k,l,m,n,o,p,q,r,s,t;  �  �h=AF(d);    if(!($interfaceIsEqual(h,$ifaceNil))){  �    i=($sliceType($Uint8)).nil;j=h;f=i;g=j;return[f,g];    }  
�  
�h=AF(d.PublicKey);    if(!($interfaceIsEqual(h,$ifaceNil))){      g=h;return g;    }  j=(i=((d.PublicKey.N.BitLen()+7>>0))/8,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"));  3    if((j-(((f.$length+3>>0)+8>>0))>>0)<0){  O    g=$pkg.ErrDecryption;return g;    }  ik=L(c,d,e);l=k[0];m=k[1];n=k[2];g=k[3];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �return g;    }  �    if(!((m.$length===j))){  8    g=$pkg.ErrDecryption;return g;    }  Rl=l&(B.ConstantTimeEq(((m.$length-n>>0)>>0),(f.$length>>0)));  �B.ConstantTimeCopy(l,f,$subslice(m,(m.$length-f.$length>>0)));  �return g;    }; 0DecryptPKCS1v15SessionKey0��crypto/rsa:ErrDecryptioncrypto/rsa:checkPubcrypto/rsa:decryptPKCS1v15crypto/subtle:ConstantTimeCopycrypto/subtle:ConstantTimeEq 0�^crypto/rsa.decryptPKCS1v150L�fL=function(c,d,e){var f=0,g=($sliceType($Uint8)).nil,h=0,i=$ifaceNil,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;  !k=(j=((d.PublicKey.N.BitLen()+7>>0))/8,(j===j&&j!==1/0&&j!==-1/0)?j>>0:$throwRuntimeError("integer divide by zero"));  A    if(k<11){  Oi=$pkg.ErrDecryption;  ereturn[f,g,h,i];    }  ql=new E.Int.Ptr().SetBytes(e);  �m=AQ(c,d,l);n=m[0];i=m[1];  �    if(!($interfaceIsEqual(i,$ifaceNil))){  �return[f,g,h,i];    }  �g=AS(n.Bytes(),k);  �o=B.ConstantTimeByteEq(((0<0||0>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+0]),0);  -p=B.ConstantTimeByteEq(((1<0||1>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+1]),2);  Sq=1;  j  nr=2;while(r<g.$length){  �s=B.ConstantTimeByteEq(((r<0||r>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+r]),0);  �h=B.ConstantTimeSelect(q&s,r,h);  q=B.ConstantTimeSelect(s,0,q);      �  �r=r+(1)>>0;}  �t=B.ConstantTimeLessOrEq(10,h);  �f=((o&p)&(((~q>>0)&1)))&t;  +h=B.ConstantTimeSelect(f,h+1>>0,0);  a    u=f;v=g;w=h;x=$ifaceNil;f=u;g=v;h=w;i=x;return[f,g,h,i];    }; 0decryptPKCS1v150��crypto/rsa:ErrDecryptioncrypto/rsa:decryptcrypto/rsa:leftPad crypto/subtle:ConstantTimeByteEq"crypto/subtle:ConstantTimeLessOrEq crypto/subtle:ConstantTimeSelectmath/big:Int 0��crypto/rsa.nonZeroRandomBytes0M��M=function(c,d){var e=$ifaceNil,f,g,h,i,j;  f=D.ReadFull(d,c);e=f[1];  *    if(!($interfaceIsEqual(e,$ifaceNil))){  <return e;    }  H  Lg=0;while(g<c.$length){  hwhile(((g<0||g>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+g])===0){  {h=D.ReadFull(d,$subslice(c,g,(g+1>>0)));e=h[1];  �    if(!($interfaceIsEqual(e,$ifaceNil))){  �return e;    }  i=c;j=g;(j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]=(((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j])^(66))<<24>>>24;    }      `  `g=g+(1)>>0;}  1return e;    }; 0nonZeroRandomBytes0
errors:New 0�+crypto/rsa.copyWithLeftPad0R��R=function(c,d){var e,f;  %!e=c.$length-d.$length>>0;  %J  %Nf=0;while(f<e){  %s(f<0||f>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+f]=0;      %k  %kf=f+(1)>>0;}  %�$copySlice($subslice(c,e),d);    }; 0copyWithLeftPad0  0��crypto/rsa.emsaPSSEncode0S�}S=function(c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;  '�g=f.Size();  '�h=e.$length;  '�j=(i=((d+7>>0))/8,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"));  (�    if(!((c.$length===g))){  (�return[($sliceType($Uint8)).nil,C.New("crypto/rsa: input must be hashed message")];    }  )�    if(j<((g+h>>0)+2>>0)){  )�return[($sliceType($Uint8)).nil,C.New("crypto/rsa: encoding error")];    }  )�k=($sliceType($Uint8)).make(j);  )�l=$subslice(k,0,(((((j-h>>0)-g>>0)-2>>0)+1>>0)+h>>0));  *m=$subslice(k,(((((j-h>>0)-g>>0)-2>>0)+1>>0)+h>>0),(j-1>>0));  +�  +�n=($arrayType($Uint8,8)).zero();$copy(n,($arrayType($Uint8,8)).zero(),($arrayType($Uint8,8)));  +�f.Write(new($sliceType($Uint8))(n));  +�f.Write(c);  +�f.Write(e);  +�m=f.Sum($subslice(m,0,0));  ,
f.Reset();  ,�(o=((j-h>>0)-g>>0)-2>>0,(o<0||o>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+o]=1);  -$copySlice($subslice(l,(((j-h>>0)-g>>0)-1>>0)),e);  -�AM(l,f,m);  .p=l;q=0;(q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]=(((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q])&((((r=((((((8>>>16<<16)*j>>0)+(8<<16>>>16)*j)>>0)-d>>0)>>>0),r<32?(255>>>r):0)<<24>>>24))))>>>0;  .d(s=j-1>>0,(s<0||s>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+s]=188);  .�return[k,$ifaceNil];    }; 0
errors:New 0�	�crypto/rsa.emsaPSSVerify0T�	T=function(c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  /�h=g.Size();  /�    if(!((h===c.$length))){  0return $pkg.ErrVerification;    }  0aj=(i=((e+7>>0))/8,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"));  0|    if(j<((h+f>>0)+2>>0)){  0�return $pkg.ErrVerification;    }  1&    if(!(((k=d.$length-1>>0,((k<0||k>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+k]))===188))){  1Creturn $pkg.ErrVerification;    }  1�l=$subslice(d,0,((j-h>>0)-1>>0));  1�m=$subslice(d,((j-h>>0)-1>>0),(d.$length-1>>0));  2�    if(!((((((0<0||0>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+0])&(((n=((8-((((((8>>>16<<16)*j>>0)+(8<<16>>>16)*j)>>0)-e>>0))>>0)>>>0),n<32?(255<<n):0)<<24>>>24)))>>>0)===0))){  2�return $pkg.ErrVerification;    }  3QAM(l,g,m);  3�o=l;p=0;(p<0||p>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+p]=(((p<0||p>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+p])&((((q=((((((8>>>16<<16)*j>>0)+(8<<16>>>16)*j)>>0)-e>>0)>>>0),q<32?(255>>>q):0)<<24>>>24))))>>>0;  3�    if(f===0){  4  4"  4&f=j-((h+2>>0))>>0;FindSaltLength:while(f>=0){  4Xr=(s=((j-h>>0)-f>>0)-2>>0,((s<0||s>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+s]));  4zif(r===1){  4�break FindSaltLength;      4�}else if(r===0){  4�  4L  4Lf=f-(1)>>0;continue;    }else{  4�return $pkg.ErrVerification;    }      4L  4Lf=f-(1)>>0;}  4�    if(f<0){  4�return $pkg.ErrVerification;    }    }else{  6%t=$subslice(l,0,(((j-h>>0)-f>>0)-2>>0));u=0;while(u<t.$length){v=((u<0||u>=t.$length)?$throwRuntimeError("index out of range"):t.$array[t.$offset+u]);  6S    if(!((v===0))){  6freturn $pkg.ErrVerification;    }    u++;}  6�    if(!(((w=((j-h>>0)-f>>0)-2>>0,((w<0||w>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+w]))===1))){  6�return $pkg.ErrVerification;    }    }  6�x=$subslice(l,(l.$length-f>>0));  8  8y=($arrayType($Uint8,8)).zero();$copy(y,($arrayType($Uint8,8)).zero(),($arrayType($Uint8,8)));  8g.Write(new($sliceType($Uint8))(y));  83g.Write(c);  8Fg.Write(x);  8Yz=g.Sum(($sliceType($Uint8)).nil);  8�    if(!F.Equal(z,m)){  8�return $pkg.ErrVerification;    }  8�return $ifaceNil;    }; 0
c=this;  >0    if(c===($ptrType(V)).nil){  >Creturn 0;    }  >`return c.SaltLength;    };V.prototype.saltLength=function(){return this.$val.saltLength();}; 0
PSSOptions
saltLength0crypto/rsa:PSSOptions 0��crypto/rsa.SignPSS0W�%W=$pkg.SignPSS=function(c,d,e,f,g){var h=($sliceType($Uint8)).nil,i=$ifaceNil,j,k,l,m,n,o;  ?�j=g.saltLength();  @k=j;  @ if(k===0){  @:j=((l=((d.PublicKey.N.BitLen()+7>>0))/8,(l===l&&l!==1/0&&l!==-1/0)?l>>0:$throwRuntimeError("integer divide by zero"))-2>>0)-(new A.Hash(e)).Size()>>0;      @p}else if(k===-1){  @�j=(new A.Hash(e)).Size();    }  @�m=($sliceType($Uint8)).make(j);  @�  @�n=D.ReadFull(c,m);i=n[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  Areturn[h,i];    }  A    o=U(c,d,e,f,m);h=o[0];i=o[1];return[h,i];    }; 0	SignPSS0Mcrypto/rsa:saltLengthcrypto/rsa:signPSSWithSaltcrypto:Hashio:ReadFull 0��crypto/rsa.VerifyPSS0XRX=$pkg.VerifyPSS=function(c,d,e,f,g){  B�return Y(c,d,e,f,g.saltLength());    }; 0	VerifyPSS0-crypto/rsa:saltLengthcrypto/rsa:verifyPSS 0�:crypto/rsa.verifyPSS0Y��Y=function(c,d,e,f,g){var h,i,j,k,l,m,n,o;  C�h=c.N.BitLen();  C�    if(!((f.$length===(i=((h+7>>0))/8,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"))))){  C�return $pkg.ErrVerification;    }  Dj=new E.Int.Ptr().SetBytes(f);  D%k=AN(new E.Int.Ptr(),c,j);  DIl=h-1>>0;  D^n=(m=((l+7>>0))/8,(m===m&&m!==1/0&&m!==-1/0)?m>>0:$throwRuntimeError("integer divide by zero"));  Dy    if(n<k.Bytes().$length){  D�return $pkg.ErrVerification;    }  D�o=($sliceType($Uint8)).make(n);  D�R(o,k.Bytes());  D�    if(g===-1){  Eg=(new A.Hash(d)).Size();    }  E1return T(e,o,l,g,(new A.Hash(d)).New());    }; 0	verifyPSS0��crypto/rsa:ErrVerificationcrypto/rsa:copyWithLeftPadcrypto/rsa:emsaPSSVerifycrypto/rsa:encryptcrypto:Hashmath/big:Int 0�hcrypto/rsa.checkPub0AF��AF=function(c){  I�    if(c.N===($ptrType(E.Int)).nil){  I�return AC;    }  I�    if(c.E<2){  I�return AD;    }  I�    if(c.E>2147483647){  J
return AE;    }  J,return $ifaceNil;    }; 0
checkPub0q!crypto/rsa:errPublicExponentLarge!crypto/rsa:errPublicExponentSmallcrypto/rsa:errPublicModulusmath/big:Int 0� !(*crypto/rsa.PrivateKey).Validate0 ��AG.Ptr.prototype.Validate=function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  Nxc=this;  N�  N�d=AF(c.PublicKey);    if(!($interfaceIsEqual(d,$ifaceNil))){  N�return d;    }  O�e=c.Primes;f=0;while(f<e.$length){g=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  P    if(!g.ProbablyPrime(20)){  P7return C.New("crypto/rsa: prime factor is composite");    }    f++;}  P�h=new E.Int.Ptr().Set(AA);  P�i=c.Primes;j=0;while(j<i.$length){k=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);  P�h.Mul(h,k);    j++;}  Q    if(!((h.Cmp(c.PublicKey.N)===0))){  Q$return C.New("crypto/rsa: invalid modulus");    }  R�l=new E.Int.Ptr();  R�m=new E.Int.Ptr().SetInt64(new $Int64(0,c.PublicKey.E));  R�m.Mul(m,c.D);  Sn=c.Primes;o=0;while(o<n.$length){p=((o<0||o>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+o]);  S)q=new E.Int.Ptr().Sub(p,AA);  SVl.Mod(m,q);  St    if(!((l.Cmp(AA)===0))){  S�return C.New("crypto/rsa: invalid exponents");    }    o++;}  S�return $ifaceNil;    };AG.prototype.Validate=function(){return this.$val.Validate();}; 0
PrivateKey0Ycrypto/rsa:PrivateKeycrypto/rsa:bigOnecrypto/rsa:checkPub
errors:Newmath/big:Int 0��crypto/rsa.GenerateKey0AJ��AJ=$pkg.GenerateKey=function(c,d){var e=($ptrType(AG)).nil,f=$ifaceNil,g;  T�    g=AK(c,2,d);e=g[0];f=g[1];return[e,f];    }; 0
    p=($ptrType(AG)).nil;q=g;f=p;g=q;return[f,g];    }  ["k=k-(((m<0||m>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+m]).BitLen())>>0;      Z�  Z�m=m+(1)>>0;}  [tr=j;s=0;while(s<r.$length){t=s;u=((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]);  [�  [�v=0;while(v<t){  [�    if(u.Cmp(((v<0||v>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+v]))===0){  [�continue NextSetOfPrimes;    }      [�  [�v=v+(1)>>0;}    s++;}  \w=new E.Int.Ptr().Set(AA);  \"x=new E.Int.Ptr().Set(AA);  \Hy=new E.Int.Ptr();  \bz=j;aa=0;while(aa<z.$length){ab=((aa<0||aa>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+aa]);  \�w.Mul(w,ab);  \�y.Sub(ab,AA);  \�x.Mul(x,y);    aa++;}  \�    if(!((w.BitLen()===e))){  ]�continue NextSetOfPrimes;    }  ]�ac=new E.Int.Ptr();  ]�f.D=new E.Int.Ptr();  ]�ad=new E.Int.Ptr();  ^ae=E.NewInt(new $Int64(0,f.PublicKey.E));  ^"ac.GCD(f.D,ad,ae,x);  ^B    if(ac.Cmp(AA)===0){  ^]    if(f.D.Sign()<0){  ^xf.D.Add(f.D,x);    }  ^�f.Primes=j;  ^�f.PublicKey.N=w;  ^�break;    }    }  ^�f.Precompute();  ^�return[f,g];    }; 0GenerateMultiPrimeKey0hcrypto/rand:Primecrypto/rsa:PrivateKeycrypto/rsa:bigOne
errors:Newmath/big:Intmath/big:NewInt 0��crypto/rsa.incCounter0AL��AL=function(c){var d,e,f,g,h,i,j,k;  _H  _K  _Kd=c;e=3;d.nilCheck,(e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e]=(d.nilCheck,((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e]))+(1)<<24>>>24;    if(!(((c.nilCheck,c[3])===0))){  _areturn;    }  _l  _o  _of=c;g=2;f.nilCheck,(g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]=(f.nilCheck,((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]))+(1)<<24>>>24;    if(!(((c.nilCheck,c[2])===0))){  _�return;    }  _�  _�  _�h=c;i=1;h.nilCheck,(i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=(h.nilCheck,((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]))+(1)<<24>>>24;    if(!(((c.nilCheck,c[1])===0))){  _�return;    }  _�  _�j=c;k=0;j.nilCheck,(k<0||k>=j.length)?$throwRuntimeError("index out of range"):j[k]=(j.nilCheck,((k<0||k>=j.length)?$throwRuntimeError("index out of range"):j[k]))+(1)<<24>>>24;    }; 0
incCounter0  0�crypto/rsa.mgf1XOR0AM��AM=function(c,d,e){var f,g,h,i,j,k;  `c  `gf=($arrayType($Uint8,4)).zero();$copy(f,($arrayType($Uint8,4)).zero(),($arrayType($Uint8,4)));  `x  `|g=($sliceType($Uint8)).nil;  `�h=0;  `�while(h<c.$length){  `�d.Write(e);  `�d.Write($subslice(new($sliceType($Uint8))(f),0,4));  `�g=d.Sum($subslice(g,0,0));  `�d.Reset();  a
modInverse0!crypto/rsa:bigOnemath/big:Int 0��#(*crypto/rsa.PrivateKey).Precompute0 �VAG.Ptr.prototype.Precompute=function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;  k�c=this;  k�    if(!(c.Precomputed.Dp===($ptrType(E.Int)).nil)){  k�return;    }  k�c.Precomputed.Dp=new E.Int.Ptr().Sub((d=c.Primes,((0<0||0>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+0])),AA);  lc.Precomputed.Dp.Mod(c.D,c.Precomputed.Dp);  lSc.Precomputed.Dq=new E.Int.Ptr().Sub((e=c.Primes,((1<0||1>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+1])),AA);  l�c.Precomputed.Dq.Mod(c.D,c.Precomputed.Dq);  l�c.Precomputed.Qinv=new E.Int.Ptr().ModInverse((f=c.Primes,((1<0||1>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+1])),(g=c.Primes,((0<0||0>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+0])));  mj=new E.Int.Ptr().Mul((h=c.Primes,((0<0||0>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+0])),(i=c.Primes,((1<0||1>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+1])));  mSc.Precomputed.CRTValues=($sliceType(AI)).make((c.Primes.$length-2>>0));  m�  m�k=2;while(k<c.Primes.$length){  m�m=(l=c.Primes,((k<0||k>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+k]));  m�p=(n=c.Precomputed.CRTValues,o=k-2>>0,((o<0||o>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+o]));  np.Exp=new E.Int.Ptr().Sub(m,AA);  n7p.Exp.Mod(c.D,p.Exp);  n]p.R=new E.Int.Ptr().Set(j);  n~p.Coeff=new E.Int.Ptr().ModInverse(j,m);  n�j.Mul(j,m);      m�  m�k=k+(1)>>0;}    };AG.prototype.Precompute=function(){return this.$val.Precompute();}; 0
PrivateKey0Mcrypto/rsa:CRTValuecrypto/rsa:PrivateKeycrypto/rsa:bigOnemath/big:Int 0�	Ncrypto/rsa.decrypt0AQ��AQ=function(c,d,e){var f=($ptrType(E.Int)).nil,g=$ifaceNil,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab;  o�    if(e.Cmp(d.PublicKey.N)>0){  o�g=$pkg.ErrDecryption;  preturn[f,g];    }  p  ph=($ptrType(E.Int)).nil;  p    if(!($interfaceIsEqual(c,$ifaceNil))){  q,  q0i=($ptrType(E.Int)).nil;  q>while(true){  qGj=H.Int(c,d.PublicKey.N);i=j[0];g=j[1];  ql    if(!($interfaceIsEqual(g,$ifaceNil))){  q�return[f,g];    }  q�    if(i.Cmp(Z)===0){  q�i=AA;    }  q�  q�k=false;  q�l=AP(i,d.PublicKey.N);h=l[0];k=l[1];  q�    if(k){  q�break;    }    }  r
 �