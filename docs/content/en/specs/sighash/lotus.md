---
title: "SigHash Lotus"
menuTitle: "SigHash Lotus"
category: "Signature Hashes"
position: 3.1
---

The Lotus blockchain includes a new Signature Hash format (in addition to supporting BIP143 and Legacy signature hashes). It is loosely based on BIP341 signature hashes from Bitcoin Core, but includes several modifications to make it more useful in smart contracts on the lotus blockchain. This format solves several security issues which were discovered with BIP143, and additionally is targetted at TapRoot-style contracts.

## Serialization

1. sigHashType (4 byte)
2. input_hash (32 bytes): SHA256d of:
    1. spend type (1 byte)
    2. prevout (36 bytes)
    3. nSequence (4 bytes)
    4. spent_output (8 bytes + N) serialized as CTxOut
3. If script spend path:
    1.  codesep_pos (4 bytes): the opcode position of the last executed OP_CODESEPARATOR before the currently executed signature opcode, with the value in little endian (or 0xffffffff if none executed). The first opcode in a script has a position of 0. A multi-byte push opcode is counted as one opcode, regardless of the size of data being pushed. Opcodes in parsed but unexecuted branches count towards this value as well.
    2. exec_script_hash (32 bytes): tapleaf_hash for Taproot, otherwise SHA256d of full scriptCode
4. If not ANYONECANPAY:
    1. input_index (4 bytes): index of this input in the transaction input vector. Index of the first input is 0.
    2. spent_outputs_merkle_root (32 bytes): Merkle root using SHA256d of the spent outputs in serialized CTxOut format (amount + scriptPubKey)
    3. amount_inputs_sum (8 bytes): The total of all input amounts added up
5. If SIGHASH_ALL:
    1.  amount_outputs_sum (8 bytes): The total of all output amounts added up
6. nVersion (4 bytes)
7. If not ANYONECANPAY:
    1. inputs_merkle_root (32 bytes): Merkle root using SHA256d of (prevout || nSequence) for all inputs
    2. inputs_tree_height (1 byte): Tree height of the merkle root of the inputs
8. If SIGHASH_SINGLE:
    1. SHA256d of the corresponding output in CTxOut format (32 bytes)
9. If SIGHASH_ALL:
    1. outputs_merkle_root (32 byets): Merkle root using SHA256d of all outputs in serialized CTxOut format
    2. outputs_tree_height (1 bytes): Tree height of merkle roof of the inputs (1 bytes)
10. nLockTime (4 bytes)


## Advantages

1. For a given sighash type, the preimage is always fixed length. This makes slicing using OP_SPLIT very simple, no OP_SIZE needed
2. If a part of the preimage is not needed, it is simply cut out, reducing the preimage size, making contracts more efficient.
3. Outputs are SHA256'd first and then concatenated, then SHA256'd again. This means we can inspect outputs by index: We take the concatenated hashes, and then split at i\*32, then `32 OP_SPLIT` again. This gives us the hash at the output i.
4. Same for inputs.
5. We get all individual amounts for each input, addressable by index. This allows to assert another input has a specific amount.
6. We get the scriptPubKeys for each input, addressable by index. This allows to assert another input is a specific smart contract, which would allow communication between smart contracts:
    1. For instance, a looping contract can be refilled by sending to a special P2SH, which states that it can only be spent if an input is present with the looping contract's scriptPubKey.
    2. It also allows something like OP_EVAL; a contract can assert a given scriptPubKey is being spent, this way it knows the constraints set in that scriptPubKey must hold for the entire transaction. These inputs could have dust amount and just exist for the sake of verifying constraints. This effectively makes the opcode limit unbounded; as long as the transaction ends up being below 100kB in size.
7. It contains the input_index, so contracts can enforce conditions relative to each other, e.g. "The input before me has to have an amount of 10'000 sats"
8. It contains amount_inputs_sum, which is handy for contracts with a lot of inputs. E.g., a Flipstarter can be done quite easily this way where people simply send to a P2SH address (without having to have an EC plugin) and the contract verifies amount_inputs_sum >= target amount.
9. It contains amount_outputs_sum, which, coupled with amount_inputs_sum allows e.g. calculating the tx fee.
10. codesep_pos is now simply an integer, which avoids quadratic hashing, see https://gist.github.com/markblundeberg/c2c88d25d5f34213830e48d459cbfb44
