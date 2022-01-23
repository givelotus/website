---
title: "Address Format"
category: General
position: 2.1
---

## Rationale

Currently, Bitcoin Cash, and Bitcoin ABC, from which Lotus is dervived, use the cashaddr address format. However, Lotus needs a new address type for taproot outputs. This requires substantial changes to the cashaddr parsing libraries and specification as well as wallets. To use `cashaddr` as a basis for supporting taproot, there would be a need to fork the libraries and modify the cashaddr specification. Additionally, cashaddr has the following weaknesses:

1. It requires base32 encoding which is not readily available as a library in many languages.
2. It requires a custom BCH checksum, which is complex and requires custom implementations along side the address parser
3. The checksum is not done on the raw string address. Thus, it requires parsing the address, recombining the portions that are included in the checksum, and producing the checksum or verifying it. This means the checksum verification code must be entangled with the parsing code.
4. The payload includes a version byte which is encodes a size as well as a type.
    * This results in potentially nonsensical combinations such as P2SH with size 32 instead of 20. If this were supported in the future, wallets would need to implement this as a separate type of output. This causes implementations to branch on both the size and the type in order to determine the output time.
    * The sizes available per the specification only support certain commitment sizes. For a taproot address w/ commitment 65 bytes is needed which is not supported.
5. Because the prefix is optional - but also included in the checksum - it requires wallets to provide a default prefix that must change based on the network it is running on. This conflates the token type with the network and requires a mapping table for different networks of the same coin. (e.g. `bchtest` vs `bitcoincash` vs `ecash`). It also means that a general address translator for converting a testnet address to a mainnet address must guess the network and try repeated

Due to the following weaknesses above, and the need to fork the libraries and modify the cashaddr specification. The type byte would need to be modified to support additional sizes, as well as implementing a new address type in Lotus-supporting wallets. Additionally, if new address types were added, all wallets would need to be updated to support it.

Thus, we propose an entirely new format. This format should meet the following requirements.

1. Able to be double-clicked and copied.
2. Uses commonly available language primitives to obviate needing to implement complicated checksum algorithms
3. Should be unspecific to token being addressed.
4. Validity of the token prefix and the network are offloaded to the user of libraries which called the parser.
5. Forward compatibility of new address formats with legacy wallets.

By creating an address specification that meets the above requirements, developers can easily implement it in any language they are working with. The address format is also forward-compatible so that wallets would not necessarily need to be updated in the future to support new address types.

## Proposed Format

`[payto:]<token identifier><network byte><Base58(payload||weak hash)>[?query string]`

### Payto (Optional)

This field is entirely optional and is suggested to be similar to `mailto:` It can be used optionally to provide a way to automatically launch a wallet using a link. Please note, this would mean that only one application could register for these payment links, and they would either need to support all tokens or delegate to another app. This cannot be specified here in a forward-thinking way, and the solution is left to the time when the need arises.

### Token identifier

Token identifier must be all lowercase word characters [a-z0-9]. For lotus this would generally be `lotus`

### Network byte

A single byte identifier used to verify the intended network for the transaction. It must be in the set of characters: \[_A-Z\]. Currently the specified networks are:

1. `_` - mainnet
2. `T` - testnet
3. `R` - regtest

### Payload

This can be any string of bytes relevant to the chain being worked with. Other layers can be built on top of a basic address parser with handles this payload based on token type. For Lotus, the first byte is a address type, and then another subsequent payload. The address type right now is always `0` and indicates the rest of the address is a fully encoded valid scriptPubKey. Currently valid standard scriptPubKeys are:

1. BIP016 P2SH: `OP_HASH160 <20-byte-hash-value> OP_EQUAL`
2. P2PKH: `OP_DUP OP_HASH160 <20-byte-hash-value> OP_EQUALVERIFY OP_CHECKSIG`
3. Taproot: `OP_SCRIPTTYPE OP_1 <33 byte pubkey [|| 32 byte SHA256 commitment]>`

### Weak hash

The checksum consists of the first four bytes (weak SHA256) of the SHA256 hash of the other portions of the address:

`<token identifier><network byte><payload>`

Unlike Cashaddr, this checksum does not provide any error correction via a BCH code. However, the BCH code specified for cashaddr is specific to that address format and requires re-implementation in every language. This can be non-trivial to do in languages which do not easily support the required integer and bitwise operations.

However, in most cases users are copying and pasting addresses, and this address format is optimized for that use case. BCH error-correcting checksums allow for correcting mistaken characters. However, it is discouraged for wallets to provide anything but a notification of which characters were entered incorrectly. This would only happen when the address is hand-typed from another device. In these cases, inter-device address transmission happens via a QR code. The specification for QR codes and associated libraries include their own BCH checksum to ensure the ability fo fix misreads.

### Query string (Optional)

This is an optional portion of the address. Any parameters supported by wallets in the future can be added. However, some parameters should be implemented by all wallets. At this time they are

1. amount - The number of atomic units of the token to send.

## Example:

The following is an example of how an an address would look for lotus.

`payto:lotus_42U4tGcVko7D139rAPvusmZ65QSvx2MwHbtY`

## Conclusion

This format is easily selectable, improving usability. It's more compact than cashaddrs due to returning to base58. It also provides an encoding and an integrity check which uses primitives available readily in most languages. Additionally, because the payload is the precise UTXO, it does not require primitive wallets to be updated to support new address formats.
