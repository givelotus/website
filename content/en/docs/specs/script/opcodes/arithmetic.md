---
title: "Arithmetic"
linkTitle: "Arithmetic"
weight: 10
---

### OP_MULPOW2

```
a b OP_MULPOW2 -> c
```

Pops the top two stack elements. Multiplies `a` by `2^b`. `b` may be negative. Overflows result in a script error.


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
