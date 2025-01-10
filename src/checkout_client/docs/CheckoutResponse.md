# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantTransactionId** | **String** | Merchant Checkout Transaction Identifier which is returned in the checkoutResponse to either checkoutWithCard or checkoutWithNewCard JavaScript methods and links the client-side JavaScript calls and server-side API calls for a specific transaction. Optional for Subsequent Payment or Subsequent Split Shipment. | 
**encryptedPayload** | [**CheckoutEncryptedPayload**](CheckoutEncryptedPayload.md) |  | 
**correlationId** | **String** | Correlation ID for this transaction. If available within the present checkout session (e.g. received in an earlier API response during the present session), then it must be provided, otherwise a new checkout session will be initiated. | 
**merchantCardId** | **String** | Merchant card identifer. | [optional] 
**assuranceData** | [**AssuranceData**](AssuranceData.md) |  | [optional] 
**maskedCard** | [**CheckoutMaskedCard**](CheckoutMaskedCard.md) |  | [optional] 
**maskedConsumer** | [**CheckoutMaskedConsumer**](CheckoutMaskedConsumer.md) |  | [optional] 


