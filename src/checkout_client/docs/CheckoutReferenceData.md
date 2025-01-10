# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutReferenceData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCardId** | **String** | Optionally carries the Card Identifier returned by Save Card on File endpoint. When provided here, Mastercard&#39;s SRCI system will use the associated Card to perform a checkout and return the transaction credentials for the same:  * For Subsequent Payment, this will be the value returned by SaveCOF operation. * For Subsequent Split Shipment, this will be the value returned by a previous POST: checkout/transaction/credentials) operation.  | [optional] 
**merchantTransactionId** | **String** | Optionally carries the Merchant Checkout Transaction Identifier which is returned in the checkoutResponse to either checkoutWithCard or checkoutWithNewCard JavaScript methods and links the client-side JavaScript calls and server-side API calls for a specific transaction. Optional for Subsequent Payment or Subsequent Split Shipment.  | [optional] 
**encryptedCard** | [**PlainCard**](PlainCard.md) |  | [optional] 


