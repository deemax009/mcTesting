# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CardOnFileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantTransactionId** | **String** | Merchant Checkout Transaction Identifier which is returned in the checkoutResponse to either checkoutWithCard or checkoutWithNewCard JavaScript methods and links the client-side JavaScript calls and server-side API calls for a specific transaction. Optional for Subsequent Payment or Subsequent Split Shipment. | [optional] 
**srcDpaId** | **String** | Client ID. This will be the DPA ID of the v2 merchant. | 
**correlationId** | **String** | Correlation Id. Must be passed when merchantTransactionId is passed. | [optional] 
**merchantAccountId** | **String** | Merchant issued Account ID for a consumer. If provided, it serves as an integration check. | [optional] 
**accountReference** | [**AccountReference**](AccountReference.md) |  | [optional] 


