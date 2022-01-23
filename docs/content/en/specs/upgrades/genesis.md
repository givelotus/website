---
title: Genesis
linkTitle: Genesis
category: Upgrades
position: 8.0
---

## Summary of Changes

Lotus will be based on the Bitcoin ABC codebase and specifications, with the following changes upon initial launch.

* New Genesis Block
* Removal of all fork activation code
* Reset difficulty to 1
* New Netmagic and Diskmagic Values
* [Extended Header Format]({{< ref "../blockheader" >}})
* Blocktime to 2 minutes
* [New address format]({{< ref "../addresses" >}})
* [Economic adjustments]({{< ref "../subsidy" >}})
  * The issuance of Coinbase rewards will be changed to be `260 * log2(difficulty)` megasats.
    * Half will go to miners
    * Half will go to servicing the blockchain and users through a selection of various projects which support the
      public good.
  * Half of fees will be burned, the 25% will go to miners and another 25% will go selected projects.
* Enforce all standardness rules as consensus
* [MalFix]({{< ref "../txid.md" >}})
* [Script changes]({{< ref "../script" >}}):
  * Increase opcode limit to 400 opcodes
  * [Relax OP_XOR and OP_AND operand size constraints]({{< ref "../script/opcodes/bitwise" >}})
  * [Add OP_RAWBITSHIFT]({{< ref "../script/opcodes/bitwise" >}}#op_rawbitshift)
  * [Add OP_MULPOW2]({{< ref "../script/opcodes/arithmetic" >}})
  * Limit NUM2BIN to 68 bytes
  * Increase integer sizes from 32 bits to 64 bit ones-complement signed integers
  * Disable all unusable opcodes and reserve them for future hardforks
  * [Add Taproot support]({{< ref "../script/taproot" >}})
  * [SigHash Lotus]({{< ref "../sighash/lotus" >}})

## Genesis Block

A new genesis block will be used. Lotus is not a fork of the blockchain, but is using the Bitcoin codebase.

## Difficulty Reset

Due to starting fresh, the difficulty will be reset to a target of 1 initially similar to the original Bitcoin launch.

## Removal of Activation

Due to the fresh start of the blockchain, all activation code for previous soft and hardforks have been removed. These features
will be available from launch.

## Magic Values

The diskmagic, and netmagic will be changed to the following values:

* Diskmagic: `ldsk` with most-significant-bit set.
* Netmagic: `lgos` with most-significant-bit set.

## Economic adjustments

The block reward will be 260 megasats per block + half fees. The other half of fees will be discarded. Additionally, this reward will be split between miners and developers evenly. The development reward will be shared between a variety of projects and determined every 6 months by the Logos foundation.

## Blocktimes

The target blocktime will be reduced from 10 minutes to 2 minutes. This allows faster confirmations, and has been requested for for Bitcoin ABC for a long time. Additionally, it reduces block variance significantly.

## Enforce all standardness rules as consensus

Currently, Bitcoin variants have relaxed constraints on what is acceptable in a block versus standardness checks. Lotus now enforces all standardness checks on new blocks as well.
