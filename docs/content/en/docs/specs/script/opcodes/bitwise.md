---
title: "Bitwise Logic"
linkTitle: "Bitwise"
category: Script
weight: 20
---

The bitwise logic operators expect 'byte sequence' stack elements.

## OP_AND

    Opcode (decimal): 132
    Opcode (hex): 0x84

Boolean *and* between each bit in the operands.

	x1 x2 OP_AND -> out

Notes:
* where `len(x1) == 0` and `len(x2) == 0` the output will be an empty array.

Impact of successful execution:
* stack memory use reduced by `len(x1)`
* number of elements on stack is reduced by one

Unit tests:

2. `x1 x2 OP_AND -> x1 & x2`. Check valid results.

## OP_OR

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
2. `x1 x2 OP_OR -> x1 | x2`. Check valid results.

## OP_XOR

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


### OP_RAWBITSHIFT

```
a b OP_RAWBITSHIFT -> c
```

Pops the top two stack elements. Shifts the top stack element left by `b` bits. `b` may be negative. Overflows, drop excess bits.
