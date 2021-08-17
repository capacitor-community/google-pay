---
title: GooglePayPaymentMethodData
---

A response object that provides data for the selected payment method.

## Properties

### description

- Type: `string`

User-facing message to describe the payment method that funds the transaction.

### info

- Type: `object`

An object that provides information about the selected payment card.

### tokenizationData

- Type: `object`

Payment tokenization data for the selected payment method.

### type

- Type: [GooglePayPaymentMethod.type](./googlepaypaymentmethod#type)

The [GooglePayPaymentMethod.type](./googlepaypaymentmethod#type) that was selected in the Google Pay payment sheet.
