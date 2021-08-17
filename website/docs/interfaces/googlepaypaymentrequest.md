---
title: GooglePayPaymentRequest
---

An object describing the payment request, including information about the allowed payment methods, transaction, and the merchant.

## Properties

### allowedPaymentMethods

- Type: [GooglePayPaymentMethod](./googlepaypaymentmethod)

An array that contains the payment methods supported by Google Pay and your website.

### merchantInfo

- Type: [GooglePayMerchantInfo](./googlepaymerchantinfo)

An object that provides information about the merchant requesting payment data.

### transactionInfo

- Type: [GooglePayTransactionInfo](./googlepaytransactioninfo)

An object that describes the current transaction.
