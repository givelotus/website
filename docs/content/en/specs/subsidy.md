---
title: "Block Reward"
menuTitle: "Block Reward"
category: General
position: 2.4
---

Coin issuance in Lotus is adjusted compared to bitcoin in the following ways:
* The [issuance](#issuance) of Coinbase rewards will are `260 * (1 + log2(difficulty))` Lotus (megasats).
* Half of transaction fees are burned.
* Half of remaining block reward (subsidy + fees) will be distributed to miners,
  and the other half will goto thirteen selected projects. Currently, the
  mechanism of project selection is determined by the node development team, but
  will evolve later based on community desires.
## Issuance

Coinbase rewards will be changed to be `260 * (log2(difficulty) + 1)` megasats
using a fixed-point logarithm with precision `2**16`.

### Rationale

This allows for some inflation based on the difficulty target of the chain. The
difficulty itself is a function of token value, and mining electrical
efficiency. Increases in mining efficiency, historically have been exponential,
by taking the log of the difficulty, efficiency increases are linearized and
represent a fixed multiple of the base 260 megasats. Over time, the base reward
will become an insignificant amount of the total coins in circulation making
lotus inflationary, but at an ever decreasing percentage.

However, the reward will also adjust on short timescales to changes in price.
The impact of this is that there is some effect on token supply in order to
suppress volatility. The intent is to make the token more useful, while still
providing limited supply.

### Algorithm

The algorithm is based on nBits which is a compressed floating-point
representation of the target. In C++ the algorithm uses fixed-point integer math
and is as follows:

```C++
Amount GetBlockSubsidy(uint32_t nBits,
                       const Consensus::Params &consensusParams) {
    static constexpr int64_t SUBSIDY_INT = SUBSIDY / SATOSHI;
    static constexpr int64_t PRECISION_BITS = 16;
    static constexpr int64_t LOG_MAX_TARGET = 224;
    const int32_t exp = nBits >> 24;
    const uint32_t mantissa = (nBits & 0x007fffff);

    const int64_t logMantissaFixedPoint =
        Log2FixedPoint(mantissa, PRECISION_BITS);
    const int64_t aUncorrectedLogMantissa =
        (SUBSIDY_INT * logMantissaFixedPoint) >> PRECISION_BITS;
    const int64_t aLogMantissa = aUncorrectedLogMantissa + SUBSIDY_INT * PRECISION_BITS;
    const int64_t aLogExponent = SUBSIDY_INT * (8 * (exp - 3));
    const int64_t aLogTarget = aLogMantissa + aLogExponent;
    int64_t blockSubsidy = SUBSIDY_INT * LOG_MAX_TARGET - aLogTarget;
    blockSubsidy += SUBSIDY_INT;
    return blockSubsidy * SATOSHI;
}
```

Where `Log2FixedPoint` is implemented as follows:

```C++
int32_t Log2FixedPoint(uint32_t x, const size_t precision) {
    int32_t b = 1U << (precision - 1);
    int32_t y = 0;

    assert(precision >= 1 && precision <= 31);

    if (x == 0) {
        return std::numeric_limits<int32_t>::min(); // negative infinity
    }

    while (x < 1U << precision) {
        x <<= 1;
        y -= 1U << precision;
    }

    while (x >= 2U << precision) {
        x >>= 1;
        y += 1U << precision;
    }

    uint64_t z = x;

    for (size_t i = 0; i < precision; i++) {
        z = (z * z) >> precision;
        if (z >= 2U << precision) {
            z >>= 1;
            y += b;
        }
        b >>= 1;
    }

    return y;
}
```
