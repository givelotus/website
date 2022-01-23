---
title: "Transaction IDs"
linkTitle: "Transaction IDs"
category: General
position: 2.5
---

The Lotus Tansaction ID is calculated differently than for BTC, BCH, or eCash.
It includes what was a planned feature on Bitcoin Cash called "MalFix" or
malleability fix for short. This basically means that the "Script Signature" is
not covered by the transaction ID hash.

The purpose of this is to prevent the transaction ID from being mutable due to
the fact that ScriptSig data is not covered by transaction signatures and may be
modified by third parties. This is similar in intent to Segregated Witness, but
is done for all transactions rather than only SegWit transactions.

This is resiable for two reasons:

1. It allows the implementation of the lightning network
2. Prevents third parties from executing malleability attacks which can cause
   transaction chains to become invalidated.

Instead of simply excluding the ScriptSigs from the calculation, the Lotus
transaction ID is merklelized in order to allow more powerful scripting
abilities such as miner-verified tokens. It additionally corresponds to the
format of the Lotus Taproot Signature format. This allows a script to easily
calculate it's own TxID for covenant verifications.

# Format


| Size | Name | Meaning |
|------|------|---------|
| 4 bytes | nVersion | Transaction version |
| 32 bytes | nInRoot | Merkle root of the transaction inputs without the scriptSig included |
| 1 byte | nInHeight | Height of the input merkle root  |
| 32 bytes | nOutRoot | Merkle root of the transaction out |
| 1 byte | nOutHeight | Height of the outputs merkle root  |
| 4 bytes | nLockTime | Transaction locktime |

# C++ Example

```C++
uint256 TxInputsMerkleRoot(const std::vector<CTxIn> &vin, size_t &num_layers) {
    std::vector<uint256> leaves;
    leaves.resize(vin.size());
    for (size_t i = 0; i < vin.size(); i++) {
        CHashWriter leaf_hash(SER_GETHASH, 0);
        leaf_hash << vin[i].prevout;
        leaf_hash << vin[i].nSequence;
        leaves[i] = leaf_hash.GetHash();
    }
    return ComputeMerkleRoot(std::move(leaves), num_layers);
}

uint256 TxOutputsMerkleRoot(const std::vector<CTxOut> &vout,
                            size_t &num_layers) {
    std::vector<uint256> leaves;
    leaves.resize(vout.size());
    for (size_t i = 0; i < vout.size(); i++) {
        leaves[i] = SerializeHash(vout[i]);
    }
    return ComputeMerkleRoot(std::move(leaves), num_layers);
}

static uint256 ComputeTxId(int32_t nVersion, const std::vector<CTxIn> &vin,
                           const std::vector<CTxOut> &vout,
                           uint32_t nLockTime) {
    CHashWriter txid(SER_GETHASH, 0);
    size_t height;
    txid << nVersion;
    txid << TxInputsMerkleRoot(vin, height);
    txid << uint8_t(height);
    txid << TxOutputsMerkleRoot(vout, height);
    txid << uint8_t(height);
    txid << nLockTime;
    return txid.GetHash();
}
```

