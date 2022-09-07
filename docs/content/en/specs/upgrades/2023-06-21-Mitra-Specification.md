# Mitra Specification

## Motivation
There are various problem with the current transaction format:
1. Verifying a tx requires fetching the UTXO from the DB first, creating a bottleneck
2. Transactions are malleable (not anymore on Lotus)
3. SLP tokens have limited use for smart contracts
4. SLP tokens are not scalable

Ideally, we want transactions to be validated using a "2PC" architecture as laid out by Project Hamilton, and also previously by individuals like Amaury Sechet. See https://dci.mit.edu/s/HamiltonWhitepaper-2022-02-02-FINAL2.pdf.

Mitra solves all four issues:
1. Inputs contains outputs (CTxOut), so transaction signature verification can happen completely seperately from double-spend verification.
2. Mitra seperates "txid" and "txhash", such that txs are no longer malleable.
3. Mitra allows for inductive tokens, which can be used as inputs to smart contracts.
4. Inductive tokens can be validated using a 2PC architecture.

## Summary
In short, Mitra adds the following things:
1. **Preambles**: Scripts that put additional constraints onto a transaction (e.g. if input token sum >= output token sum)
2. **Preamble merkle roots**: Every input has to specify the merkle root of the preambles of the transaction it's spending outputs from
3. **Outputs in inputs**: Every input has to specify the output it's spending, such that transaction signatures can be validated in isolation
4. **Carryover**: Each output has a carryover, which is arbitrary data, which will have to be specified the same way when spending it. This simplifies induction proofs.
5. **Loop opcodes**: `OP_LOOP` and `OP_ENDLOOP` opcodes are added (essentially do-while loops).
6. **Loop counts**: Each input and preamble specifies the number of iterations each loop will have, this way we can meter the computational cost of validating a script without executing it
7. **Introspection opcodes**: 13 opcodes (e.g. `OP_NUMINPUTS` or `OP_PICKINPUTOUTPOINT`) for getting specific data from the current transaction
8. **New txid**: A new txid prevents external malleation of transactions
9. **New sighash**: A new sighash which contains the new fields in a nice-to-process format

## Prototype implementation
A prototype implementation for the Lotus (XPI) blockchain can be found here: https://github.com/LogosFoundation/lotusd/tree/mitra

## Transaction format
Types use the correspondent type in C++.

All vectors `T[]` are prefixed by the number of items using CompactSize (see https://en.bitcoin.it/wiki/Protocol_documentation#Variable_length_integer).

A questionmark after a type indicates an optional field.

### CTransaction

| Field size | Name | Data type          | Description           |
|------------|------|--------------------|--------------------|
| 4     | nVersion | int32_t | The version of the transaction. For Mitra, this will be fixed to a specific version which has to be picked in advance |
| 1+     | preambles | CTxPreamble[] | Preambles of the transaction to allow for inductive proofs. The merkle root of all predicate scripts are part of the UTXO of an output. |
| 1+     | vin | CTxIn[] | Inputs spent by this transaction |
| 1+     | vout | CTxOut[] | Outputs created by this transaction |
| 4     | nLockTime | uint32_t | Lock time before this transaction is deemed invalid (using MTP) |

### CTxPreamble

| Field size | Name | Data type          | Description           |
|------------|------|--------------------|--------------------|
| 1+     | predicateScript | uint8_t[] | Script that puts additional predicates onto the transaction |
| 1+     | witnesses | uint8_t[][] | Witnesses (script inputs) to the preamble |
| 1+     | loopCounts | uint8_t[] | Pre-computed counters for the loops in predicateScript to allow metering without execution |

### CTxIn

| Field size | Name | Data type          | Description           |
|------------|------|--------------------|--------------------|
| 36     | prevout | COutPoint | Txid and output index of the output being spent by this input |
| 4     | nSequence | uint32_t | Sequence number to allow for relative time locks |
| 10+ | output | CTxOut | Output spent by this input |
| 1     | hasPreambleMerkleRoot | uint8_t | 1 if this input has a preambleMerkleRoot, 0 if not |
| 0 or 32 | preambleMerkleRoot | uint256? | Merkle root of the preamble predicateScripts of the transaction of the output being spent |
| 1+ | witnesses | uint8_t[][] | Witnesses (script inputs) to the scriptPubKey "unlocking" the output. Fully replaces the previous scriptSig |
| 1+ | loopCounts | uint8_t[] | Pre-computed counters for the loops in the redeemScript to allow metering without execution |

### CTxOut

| Field size | Name | Data type          | Description           |
|------------|------|--------------------|--------------------|
| 8 | value | uint64_t | Value of the output in satoshis |
| 1+ | scriptPubKey | uint8_t[] | Script locking the output |
| 1+ | carryover | uint8_t[] | Data that has to be "carried over" to the input |

## Loops

TODO: This spec does not define how loopCounts should be handled yet. For now, loops are simply blindly executed until the run into the opcode limit.

Loops require a separate loop stack, which is a stack where each item stores the following data;
| Name | Type | Description |
|------|------|--------------------|
| pc   | CScript::const_iterator | Pointer into the script of the opcode after the OP_LOOP |

Opcodes `OP_LOOP` and `OP_ENDLOOP` are added:
1. `OP_LOOP`:
    1. Push the current program counter (pc, the location of the opcode after the `OP_LOOP`) onto the loop stack. 
2. `OP_ENDLOOP`:
    1. Pop the top element from the (normal) stack = stack item -> Fail if empty
    2. Peek the top element on the loop stack = loop item -> Fail if empty
    3. If the top stack item is 1, set the current program counter pc to the pc of the top loop item. Leave loop item on the loop stack
    4. If the top stack item is 0, remove the top loop item from the stack

## Introspection opcodes

The following new opcodes are added:

| Name               | Code | Type | Description |
|--------------------|------|------|--------------------|
| OP_THISINDEX       | 0xbf | -> int | Push the index of the script's input or preamble that's being executed |
| OP_NUMPREAMBLES    | 0xc0 | -> int | Push the number of preambles in the transaction |
| OP_NUMINPUTS    | 0xc1 | -> int | Push the number of inputs in the transaction |
| OP_NUMOUTPUTS    | 0xc2 | -> int | Push the number of outputs in the transaction |
| OP_PICKPREAMBLEHASH    | 0xc3 | int -> bytes | Push hash of the script of the preamble with the given index |
| OP_PICKINPUTOUTPOINT    | 0xc4 | int -> bytes | Push the outpoint of the input with the given index |
| OP_PICKINPUTVALUE    | 0xc5 |int -> int | Push the value (as integer) of the input with the given index |
| OP_PICKINPUTSCRIPTPUBKEY    | 0xc6 |int -> bytes | Push the scriptPubKey of the input with the given index |
| OP_PICKINPUTCARRYOVER    | 0xc7 |int -> bytes | Push the carryover of the input with the given index |
| OP_PICKINPUTPREAMBLEMERKLEROOT    | 0xc8 |int -> bytes | Push the preamble merkle root of the input with the given index |
| OP_PICKOUTPUTVALUE    | 0xc9 |int -> int | Push the output value of the output with the given index |
| OP_PICKOUTPUTSCRIPTPUBKEY    | 0xca |int -> bytes | Push the scriptPubKey of the output with the given index |
| OP_PICKOUTPUTCARRYOVER    | 0xcb |int -> bytes | Push the carryover of the output with the given index |

## Mitra Token Example
The following preamble predicate script will enforce a simple inductive token system:

One of these conditions has to hold
1. Genesis (self-evident): If the outpoint at index 0 is a specific "hard coded" UTXO, the transaction is valid
2. Otherwise, we have a normal token transfer that cannot create tokens:
    1. Sum over all inputs:
        * If the input has the preambleMerkleRoot equal to the hash of the preamble currently executing:
            * Interpret the carryover of that input as number and add it to the sum of token inputs
    2. Sum over all outputs:
        * Interpret the carryover of the output as number and add it to the sum of token outputs
    3. Verify that sum of token inputs >= sum of token outputs

```python
# Either: Genesis tx, self-evident
OP_IF
    OP_0
    OP_PICKINPUTOUTPOINT
    <outpoint of genesis utxo>
    OP_EQUAL
# Or: Normal send transfer cannot create tokens
OP_ELSE
    OP_THISINDEX
    OP_PICKPREAMBLEHASH
    # Sum inputs that have this preamble's hash as preamble merkle root
    OP_0
    OP_NUMINPUTS
    OP_LOOP
        OP_1SUB
        OP_DUP
        OP_PICKINPUTPREAMBLEMERKLEROOT
        OP_3
        OP_PICK
        OP_EQUAL
        OP_IF
            OP_DUP
            OP_PICKINPUTCARRYOVER
            OP_BIN2NUM
            OP_ROT
            OP_ADD
            OP_SWAP
        OP_ENDIF
        OP_DUP
    OP_ENDLOOP
    OP_DROP
    OP_NIP

    # Sum outputs
    OP_0
    OP_NUMOUTPUTS
    OP_LOOP
        OP_1SUB
        OP_DUP
        OP_PICKOUTPUTCARRYOVER
        OP_BIN2NUM
        OP_ROT
        OP_ADD
        OP_SWAP
        OP_DUP
    OP_ENDLOOP
    OP_DROP

    # Verify inputs >= outputs
    OP_GREATERTHANOREQUAL
OP_ENDIF
```
