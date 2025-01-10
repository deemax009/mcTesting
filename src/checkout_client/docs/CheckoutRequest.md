# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**srcDpaId** | **String** | Client ID. This is the DPA ID of the merchant. | 
**merchantAccountId** | **String** | Merchant issued Account ID for a consumer. It serves as an integration check. It must be provided, if Merchant is using a Saved card and had specified the same during the SaveCOF operation. | [optional] 
**correlationId** | **String** | Correlation ID for this transaction. If available within the present checkout session (e.g. received in an earlier API response during the present session), then it must be provided, otherwise a new checkout session will be initiated. | [optional] 
**checkoutType** | [**CheckoutType**](CheckoutType.md) |  | 
**checkoutReference** | [**CheckoutReference**](CheckoutReference.md) |  | 
**dpaTransactionOptions** | [**DpaTransactionOptions**](DpaTransactionOptions.md) |  | [optional] 


