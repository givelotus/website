---
title: "Opcodes"
linkTitle: "Opcodes"
weight: 60
---

# Basic Script

Differences from Bitcoin:

* Opcode Limit: 400 opcodes
* Integer operators operate on 64 bit ones-complement signed integers.

## Bitwise Operators

### OP_XOR

```
a b OP_XOR -> c
```

Same specification as Bitcoin Cash with the requirement that the operands be the same size removed.

### OP_AND

```
a b OP_AND -> c
```

Same specification as Bitcoin Cash with the requirement that the operands be the same size removed.

### OP_NUM2BIN

```
a b OP_NUM2BIN -> c
```

Same specification as Bitcoin Cash with the requirement that the BIN size must be less than or equal to 68 bytes.

### OP_RAWBITSHIFT

```
a b OP_RAWBITSHIFT -> c
```

Pops the top two stack elements. Shifts the top stack element left by `b` bits. `b` may be negative. Overflows, drop excess bits.

### OP_MULPOW2

```
a b OP_MULPOW2 -> c
```

Pops the top two stack elements. Multiplies `a` by `2^b`. `b` may be negative. Overflows result in a script error.

