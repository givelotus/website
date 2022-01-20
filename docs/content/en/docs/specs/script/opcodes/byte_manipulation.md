---
title: Byte Manipulation
date: 2019-05-29
activation: 1589544000
category: Script
version: 0.2
author: Tobias Ruck, Steve Shadders, Daniel Connolly
---

## Splice operations

### OP_CAT

    Opcode (decimal): 126
    Opcode (hex): 0x7e

Concatenates two operands.

    x1 x2 OP_CAT -> out

Examples:
* `{Ox11} {0x22, 0x33} OP_CAT -> 0x112233`

The operator must fail if `len(out) > MAX_SCRIPT_ELEMENT_SIZE`. The operation cannot output elements that violate the constraint on the element size.

Note that the concatenation of a zero length operand is valid.

Impact of successful execution:
* stack memory use is constant
* number of elements on stack is reduced by one

The limit on the length of the output prevents the memory exhaustion attack and results in the operation having less
impact on stack size than existing OP_DUP operators.

Unit tests:
1. `maxlen_x y OP_CAT -> failure`. Concatenating any operand except an empty vector, including a single byte value
   (e.g. `OP_1`), onto a maximum sized array causes failure
3. `large_x large_y OP_CAT -> failure`. Concatenating two operands, where the total length is greater than
   `MAX_SCRIPT_ELEMENT_SIZE`, causes failure
4. `OP_0 OP_0 OP_CAT -> OP_0`. Concatenating two empty arrays results in an empty array
5. `x OP_0 OP_CAT -> x`. Concatenating an empty array onto any operand results in the operand, including when
   `len(x) = MAX_SCRIPT_ELEMENT_SIZE`
6. `OP_0 x OP_CAT -> x`. Concatenating any operand onto an empty array results in the operand, including when
   `len(x) = MAX_SCRIPT_ELEMENT_SIZE`
7. `x y OP_CAT -> concat(x,y)`. Concatenating two operands generates the correct result

### OP_SPLIT

*`OP_SPLIT` replaces `OP_SUBSTR` and uses it's opcode.*

    Opcode (decimal): 127
    Opcode (hex): 0x7f


Split the operand at the given position.  This operation is the exact inverse of OP_CAT

    x n OP_SPLIT -> x1 x2

    where n is interpreted as a numeric value

Examples:
* `{0x00, 0x11, 0x22} 0 OP_SPLIT -> OP_0 {0x00, 0x11, 0x22}`
* `{0x00, 0x11, 0x22} 1 OP_SPLIT -> {0x00} {0x11, 0x22}`
* `{0x00, 0x11, 0x22} 2 OP_SPLIT -> {0x00, 0x11} {0x22}`
* `{0x00, 0x11, 0x22} 3 OP_SPLIT -> {0x00, 0x11, 0x22} OP_0`

Notes:
* this operator has been introduced as a replacement for the previous `OP_SUBSTR`, `OP_LEFT`and `OP_RIGHT`. All three operators can be
simulated with varying combinations of `OP_SPLIT`, `OP_SWAP` and `OP_DROP`.  This is in keeping with the minimalist philosophy where a single
primitive can be used to simulate multiple more complex operations.
* `x` is split at position `n`, where `n` is the number of bytes from the beginning
* `x1` will be the first `n` bytes of `x` and `x2` will be the remaining bytes
* if `n == 0`, then `x1` is the empty array and `x2 == x`
* if `n == len(x)` then `x1 == x` and `x2` is the empty array.
* if `n > len(x)`, then the operator must fail.
* `x n OP_SPLIT OP_CAT -> x`, for all `x` and for all `0 <= n <= len(x)`

The operator must fail if:
* `!isnum(n)`. Fail if `n` is not a numeric value.
* `n < 0`. Fail if `n` is negative.
* `n > len(x)`. Fail if `n` is too high.

Impact of successful execution:
* stack memory use is constant (slight reduction by `len(n)`)
* number of elements on stack is constant

Unit tests:
* `OP_0 0 OP_SPLIT -> OP_0 OP_0`. Execution of OP_SPLIT on empty array results in two empty arrays.
* `x 0 OP_SPLIT -> OP_0 x`
* `x len(x) OP_SPLIT -> x OP_0`
* `x (len(x) + 1) OP_SPLIT -> FAIL`
* include successful unit tests

## Bitwise logic

The bitwise logic operators expect 'byte sequence' operands. The operands must be the same length.
* In the case of 'byte sequence' operands `OP_CAT` can be used to pad a shorter byte sequence to an appropriate length.
* In the case of 'byte sequence' operands where the length of operands is not known until runtime a sequence of 0x00 bytes
  (for use with `OP_CAT`) can be produced using `OP_0 n OP_NUM2BIN`
* In the case of numeric value operands `x n OP_NUM2BIN` can be used to pad a numeric value to length `n` whilst preserving
  the sign bit.

### OP_AND

    Opcode (decimal): 132
    Opcode (hex): 0x84

Boolean *and* between each bit in the operands.

	x1 x2 OP_AND -> out

Notes:
* where `len(x1) == 0` and `len(x2) == 0` the output will be an empty array.

The operator must fail if:
1. `len(x1) != len(x2)`. The two operands must be the same size.

Impact of successful execution:
* stack memory use reduced by `len(x1)`
* number of elements on stack is reduced by one

Unit tests:

1. `x1 x2 OP_AND -> failure`, where `len(x1) != len(x2)`. The two operands must be the same size.
2. `x1 x2 OP_AND -> x1 & x2`. Check valid results.

### OP_OR

    Opcode (decimal): 133
    Opcode (hex): 0x85

Boolean *or* between each bit in the operands.

	x1 x2 OP_OR -> out

The operator must fail if:
1. `len(x1) != len(x2)`. The two operands must be the same size.

Impact of successful execution:
* stack memory use reduced by `len(x1)`
* number of elements on stack is reduced by one

Unit tests:
1. `x1 x2 OP_OR -> failure`, where `len(x1) != len(x2)`. The two operands must be the same size.
2. `x1 x2 OP_OR -> x1 | x2`. Check valid results.

### OP_XOR

    Opcode (decimal): 134
    Opcode (hex): 0x86

Boolean *xor* between each bit in the operands.

	x1 x2 OP_XOR -> out

The operator must fail if:
1. `len(x1) != len(x2)`. The two operands must be the same size.

Impact of successful execution:
* stack memory use reduced by `len(x1)`
* number of elements on stack is reduced by one

Unit tests:
1. `x1 x2 OP_XOR -> failure`, where `len(x1) != len(x2)`. The two operands must be the same size.
2. `x1 x2 OP_XOR -> x1 xor x2`. Check valid results.

## Arithmetic

#### Note about canonical form and floor division

Operands for all arithmetic operations are assumed to be numeric values and must be in canonical form.
See [data types](#data-types) for more information.

**Floor division**

Note that when considering integer division and modulo operations with negative operands, the rules applied in the C language and most
languages (with Python being a notable exception) differ from the strict mathematical definition.  Script follows the C language set of
rules.  Namely:
1. Non-integer quotients are rounded towards zero
2. The equation `(a/b)*b + a%b == a` is satisfied by the results
3. From the above equation it follows that: `a%b == a - (a/b)*b`
4. In practice if `a` is negative for the modulo operator the result will be negative or zero.


### OP_DIV

    Opcode (decimal): 150
    Opcode (hex): 0x96

Return the integer quotient of `a` and `b`.  If the result would be a non-integer it is rounded *towards* zero.

    a b OP_DIV -> out

    where a and b are interpreted as numeric values

The operator must fail if:
1. `!isnum(a) || !isnum(b)`. Fail if either operand is not a numeric value.
1. `b == 0`. Fail if `b` is equal to any type of zero.

Impact of successful execution:
* stack memory use reduced
* number of elements on stack is reduced by one

Unit tests:
1. `a b OP_DIV -> failure` where `!isnum(a)` or `!isnum(b)`. Both operands must be numeric values
2. `a 0 OP_DIV -> failure`. Division by positive zero (all sizes), negative zero (all sizes), `OP_0`
3. `27 7 OP_DIV -> 3`, `27 -7 OP_DIV -> -3`, `-27 7 OP_DIV -> -3`, `-27 -7 OP_DIV -> 3`. Check negative operands.
  *Pay attention to sign*.
4. check valid results for operands of different lengths `0..4`

### OP_MOD

    Opcode (decimal): 151
    Opcode (hex): 0x97

Returns the remainder after dividing a by b.  The output will be represented using the least number of bytes required.

	a b OP_MOD -> out

	where a and b are interpreted as numeric values

The operator must fail if:
1. `!isnum(a) || !isnum(b)`. Fail if either operand is not a numeric value.
1. `b == 0`. Fail if `b` is equal to any type of zero.

Impact of successful execution:
* stack memory use reduced (one element removed)
* number of elements on stack is reduced by one

Unit tests:
1. `a b OP_MOD -> failure` where `!isnum(a)` or `!isnum(b)`. Both operands must be numeric values.
2. `a 0 OP_MOD -> failure`. Division by positive zero (all sizes), negative zero (all sizes), `OP_0`
3. `27 7 OP_MOD -> 6`, `27 -7 OP_MOD -> 6`, `-27 7 OP_MOD -> -6`, `-27 -7 OP_MOD -> -6`. Check negative operands.
  *Pay attention to sign*.
4. check valid results for operands of different lengths `0..4` and returning result zero


# OP_NUM2BIN

*`OP_NUM2BIN` replaces `OP_LEFT` and uses it's opcode*

    Opcode (decimal): 128
    Opcode (hex): 0x80

Convert the numeric value into a byte sequence of a certain size, taking account of the sign bit.
The byte sequence produced uses the little-endian encoding.

    a b OP_NUM2BIN -> x

where `a` and `b` are interpreted as numeric values. `a` is the value to be converted to a byte sequence,
it can be up to `MAX_SCRIPT_ELEMENT_SIZE` long and does not need to be minimally encoded.
`b` is the desired size of the result, it must be minimally encoded and <= 4 bytes long. It must be possible for the
value `a` to be encoded in a byte sequence of length `b` without loss of data.


See also `OP_BIN2NUM`.

Examples:
* `2 4 OP_NUM2BIN -> {0x02, 0x00, 0x00, 0x00}`
* `-5 4 OP_NUM2BIN -> {0x05, 0x00, 0x00, 0x80}`

The operator must fail if:
1. `b` is not a minimally encoded numeric value.
2. `b < len(minimal_encoding(a))`. `a` must be able to fit into `b` bytes.
3. `b > MAX_SCRIPT_ELEMENT_SIZE`. The result would be too large.

Impact of successful execution:
* stack memory use will be increased by `b - len(a) - len(b)`, maximum increase is when `b = MAX_SCRIPT_ELEMENT_SIZE`
* number of elements on stack is reduced by one

Unit tests:
1. `a b OP_NUM2BIN -> failure` where `!isnum(b)`. `b` must be a minimally encoded numeric value.
2. `256 1 OP_NUM2BIN -> failure`. Trying to produce a byte sequence which is smaller than the minimum size needed to
   contain the numeric value.
3. `1 (MAX_SCRIPT_ELEMENT_SIZE+1) OP_NUM2BIN -> failure`. Trying to produce an array which is too large.
4. other valid parameters with various results

# OP_BIN2NUM

*`OP_BIN2NUM` replaces `OP_RIGHT` and uses it's opcode*

    Opcode (decimal): 129
    Opcode (hex): 0x81

Convert the byte sequence into a numeric value, including minimal encoding. The byte sequence must encode the value in little-endian encoding.

    a OP_BIN2NUM -> x

See also `OP_NUM2BIN`.

Notes:
* if `a` is any form of zero, including negative zero, then `OP_0` must be the result

Examples:
* `{0x02, 0x00, 0x00, 0x00, 0x00} OP_BIN2NUM -> 2`. `0x0200000000` in little-endian encoding has value 2.
* `{0x05, 0x00, 0x80} OP_BIN2NUM -> -5` - `0x050080` in little-endian encoding has value -5.

The operator must fail if:
1. the numeric value is out of the range of acceptable numeric values (currently size is limited to 4 bytes)

Impact of successful execution:
* stack memory use is equal or less than before. Minimal encoding of the byte sequence can produce a result which is shorter.
* the number of elements on the stack remains constant

Unit tests:
1. `a OP_BIN2NUM -> failure`, when `a` is a byte sequence whose numeric value is too large to fit into the numeric value
    type, for both positive and negative values.
2. `{0x00} OP_BIN2NUM -> OP_0`. Byte sequences, of various lengths, consisting only of zeros should produce an OP_0 (zero
    length array).
3. `{0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00} OP_BIN2NUM -> 1`. A large byte sequence, whose numeric value would fit in the numeric value
    type, is a valid operand.
4. The same test as above, where the length of the input byte sequence is equal to MAX_SCRIPT_ELEMENT_SIZE.
5. `{0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80} OP_BIN2NUM -> -1`. Same as above, for negative values.
6. `{0x80} OP_BIN2NUM -> OP_0`. Negative zero, in a byte sequence, should produce zero.
7. `{0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80} OP_BIN2NUM -> OP_0`. Large negative zero, in a byte sequence, should produce zero.
8. other valid parameters with various results

## Misc Operations

### OP_REVERSEBYTES

OP_REVERSEBYTES reverses the bytes of the top stackitem.

#### Rationale

Bitcoin's protocol almost exclusively uses little-endian encoding [8], and Script provides various tools for using integers encoded in little endian, such as `OP_NUM2BIN` and `OP_BIN2NUM` [11]. Using covenants [2], sophisticated smart contracts can be created, and Script already has a great arsenal of arithmetic operators (opcodes 139 to 165) to enforce e.g. how input and output amounts of transactions have to be related.

However, many protocols do not use little endian encoding, and it is by no means clear that one is superior to the other. Both AMQP [12] and Apache Thrift [13], for instance, use big-endian encoding. The Simple Ledger Protocol (SLP) uses big-endian encoding as well [1]. Bitdb, when using the `hN` elements, returns stack items in a format that can be directly interpreted as base16 big-endian encoded numbers, and to use this feature, it has to be possible to encode values as big-endian.

Further, now that oracles using OP_CHECKDATASIG are possible, likely used to retrieve numeric data, it would be unnecessarily limiting to assume all oracles will use little-endian encoding.

Among the mentioned protocols, SLP tokens are likely the most important ones. Various new use cases combining the power of covenants and looping transactions [5] emerge, among them:

* Decentralized exchanges (such as SLP Agora or SLPDEX) [3] [6] [4]
* Donation mintable tokens
* DAOs, which charge a fee for services and distribute revenue proportional to shares [7]
* Native tokens (not yet possible)

Note that values can be converted to big-endian encoding if the size of the encoding is both fixed and not too large. Currently, Script only supports 32-bit integers, and they can be encoded in big-endian using OP_SPLIT, OP_SWAP and OP_CAT:

```
// initial:    // <value>
// convert to little-endian
PUSH 4         // <value> 4
OP_NUM2BIN     // <value 4-byte little endian>

// split into individual bytes
PUSH 1         // <value 4-byte little endian> 1
OP_SPLIT       // <value 1st byte> <value 2nd-4th byte>
PUSH 1         // <value 1st byte> <value 2nd-4th byte> 1
OP_SPLIT       // <value 1st byte> <value 2nd byte> <value 3rd-4th byte>
PUSH 1         // <value 1st byte> <value 2nd byte> <value 3rd-4th byte> 1
OP_SPLIT       // <value 1st byte> <value 2nd byte> <value 3rd byte> <value 4th byte>

// reverse individual bytes and concat
// results in 4-byte big endian
OP_SWAP        // <value 1st byte> <value 2nd byte> <value 4th byte> <value 3rd byte>
OP_CAT         // <value 1st byte> <value 2nd byte> <value 4th, 3rd byte>
OP_SWAP        // <value 1st byte> <value 4th, 3rd byte> <value 2nd byte>
OP_CAT         // <value 1st byte> <value 4th, 3rd, 2nd byte>
OP_SWAP        // <value 4th, 3rd, 2nd byte> <value 1st byte>
OP_CAT         // <value 4-byte big endian>
```

However, if with OP_REVERSEBYTES, this becomes trivial:

```
// convert to bytes
PUSH 4           // <SLP value> 4
OP_NUM2BIN       // <SLP value 4-byte little endian>
OP_REVERSEBYTES  // <SLP value 4-byte big endian>
```

That's 11 bytes (9 operations and 3 pushdata) saved.

There are multiple reasons why the second version would be preferable:

* Covenants and looping scripts usually take the script code of the preimage [9] as input, which means every operation counts twice: Once for the stack item containing the script code, and once for the P2SH script stack item [10]. For a conversion to 8-byte big-endian, this would save 32 bytes per conversion, and if there's, say, three of those conversions in a script, it would already amount to 96 bytes - a non-trivial number of bytes for a transaction.
* The cognitive load of developing scripts using the larger snippet above is increased unnecessarily. Developing scripts, by hand or by using tools such as macros or Spedn, already puts a lot of cognitive load on developers, and errors can be devastating to the community. A prominent example of such a failure is the contentious hard-fork on the Ethereum blockchain that was caused by a bug in The DAO smart contract.
* The first version assumes that Script uses 32-bit numbers, however, once integers with larger width are implemented, the script gets linearly longer (4 bytes/byte) with each additional byte. For 256-bit numbers, it would require a whopping 124 bytes (93 operations and 31 pushdata) to convert to big-endian. As the opcode limit currently is 201, that wouldn't leave much room for other operations. In contrast, `<N> OP_NUM2BIN OP_REVERSEBYTES` always encodes integers as N-byte big-endian number, with a constant script size independent of N.

Also, suppose an oracle returns an ordered list of 1-byte items (e.g. indices), however, if the script requires the bytes to be in the reversed order, then OP_REVERSEBYTES would allow to do this trivially.

#### A Note On Signs

For unsigned integers, the behavior is always the expected one: the number will be encoded as unsigned big-endian integer. However, as integers in Script are encoded rather curiously, signed integers might result in unexpected behavior:

`-1 4 OP_NUM2BIN OP_REVERSEBYTES -> {0x80, 0x00, 0x00, 0x01}`

Here, the sign bit is the first bit of the resulting stackitem. Usually, negative numbers are encoded in two's complement, and the number should be `{0xff, 0xff, 0xff, 0xff}`. However, as long as developers are aware of this quite Script specific encoding, there's no issue at hand.

#### OP_REVERSEBYTES Specification

This specification uses the same syntax for the stack/stackitems as [11].

#### Semantics

`a OP_REVERSEBYTES -> b`.

OP_REVERSEBYTES fails immediately if the stack is empty.

Otherwise, the top stack item is removed from the stack, and a byte-reversed version is pushed onto the stack.

Examples:

* `{} OP_REVERSEBYTES -> {}`
* `{0x01} OP_REVERSEBYTES -> {0x01}`
* `{0x01, 0x02, 0x03, 0x04} OP_REVERSEBYTES -> {0x04, 0x03, 0x02, 0x01}`

#### Opcode Number

OP_REVERSEBYTES proposes to use the previously unused opcode with number 188 (0xbc in hex encoding), which comes after the most recently added opcode, `OP_CHECKDATASIGVERIFY`.

#### Unit Tests

The following unit tests are used by the ABC implementation of the opcode as of Feb 17th 2020.
- `<item> OP_REVERSEBYTES` fails if 15th May 2020 protocol upgrade is not yet activated.
- `OP_REVERSEBYTES` fails if the stack is empty.
- `{} OP_REVERSEBYTES -> {}`
- `{99} OP_REVERSEBYTES -> {99}`
- `{0xde, 0xad} OP_REVERSEBYTES -> {0xad, 0xde}`
- `{0xde, 0xad, 0xa1} OP_REVERSEBYTES -> {0xa1, 0xad, 0xde}`
- `{0xde, 0xad, 0xbe, 0xef} OP_REVERSEBYTES -> {0xef, 0xbe, 0xad, 0xde}`
- `{0x12, 0x34, 0x56} OP_REVERSEBYTES -> {0x56, 0x34, 0x12}`
- for all n ∈ [0; 520]: `{i mod 256 | i < n} OP_REVERSEBYTES -> {(n - i - 1) mod 256 | i < n}`
- for all n ∈ [0; 520]: `{(if (i < (n + 1) / 2) then (i) else (n - i - 1)) % 256) | i < n} OP_DUP OP_REVERSEBYTES OP_EQUAL -> OP_TRUE`

#### References

[1] SLP Token specification: https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md

[2] Spending constraints with OP_CHECKDATASIG: https://honest.cash/pein_sama/spending-constraints-with-op_checkdatasig-172

[3] SLP Agora: https://github.com/EyeOfPython/slpagora

[4] Sample SLPDEX transaction: https://blockchair.com/bitcoin-cash/transaction/2e69f47a985673c5a645e20ad09025a0892321f096224679657f98e6152c845c

[5] Let's play chess on the BCH Blockchain: https://tobiasruck.com/content/lets-play-chess-on-bch/

[6] SLPDEX (discontinued): slpdex.cash

[7] DAO: https://en.wikipedia.org/wiki/Decentralized_autonomous_organization

[8] Bitcoin protocol documentation, common structures: https://en.bitcoin.it/wiki/Protocol_documentation#Common_structures

[9] BIP143: https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki

[10] BIP16: https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki

[11] May 2018, reenabled opcodes: https://github.com/EyeOfPython/bitcoincash.org/blob/master/spec/may-2018-reenabled-opcodes.md

[12] AMQP specification, page 14: http://www.amqp.org/sites/amqp.org/files/amqp.pdf

[13] Apache Thrift binary protocol: https://github.com/apache/thrift/blob/master/doc/specs/thrift-binary-protocol.md

[14] https://docs.rs/bswap/1.0.0/bswap/

[15] https://www.npmjs.com/package/bswap

[16] https://www.boost.org/doc/libs/1_63_0/libs/endian/doc/conversion.html#endian_reverse
