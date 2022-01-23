---
title: "Taproot"
linkTitle: "Taproot"
category: Script
weight: 4.1
---

Taproot implementation is compatible with BIP341. However, the output to use taproot consists of a matched pattern of the form:

```
OP_SCRIPTTYPE OP_1 <33-byte commitment [ || 32 byte commitment]>
```

The 33 byte commitment is pubkey of the same form as the BIP341 specification. However, BIP341 uses a commitment to the x value of the pubkey only.

The optional 32 byte commitment is pushed onto the script stack immediately before executing the taproot spend paths.