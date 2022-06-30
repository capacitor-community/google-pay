---
title: GooglePayPaymentRequest
---

An object describing the payment request, including information about the allowed payment methods, transaction, and the merchant.

## Properties

### allowedPaymentMethods

- Type: [GooglePayPaymentMethod](./googlepaypaymentmethod)

An array that contains the payment methods supported by Google Pay and your website.

### emailRequired

Set to true to request an email address.

### merchantInfo

- Type: [GooglePayMerchantInfo](./googlepaymerchantinfo)

An object that provides information about the merchant requesting payment data.

### shippingAddressParameters

If shippingAddressRequired is set to true, specify shipping address restrictions.

### shippingAddressRequired

Set to true to request a full shipping address.

### shippingOptionParameters

Set default options.

### shippingOptionRequired

Set to true when the SHIPPING_OPTION callback intent is used. This field is required if you implement support for Authorize Payments or Dynamic Price Updates.

For more details see: [GooglePayShippingOptionParameters](./googlepayshippingoptionparameters)

### transactionInfo

- Type: [GooglePayTransactionInfo](./googlepaytransactioninfo)

An object that describes the current transaction.
