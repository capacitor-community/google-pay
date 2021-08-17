---
title: GooglePayTransactionInfo
---

An object that describes a transaction, including its status, price, and locale.

## Properties

### countryCode

- Type: `string`

The ISO 3166-1 alpha-2 country code where the transaction is processed.

### currencyCode

- Type: `string`

The ISO 4217 alphabetic currency code.

### totalPrice

- Type: `string`

The total monetary value of the transaction with an optional decimal precision of two places.

The format should follow the regex format: ^[0-9]+(\.[0-9][0-9])?$

### totalPriceStatus

- Type: `FINAL`

The status of the transaction's price.

#### Default

        
 `FINAL`
