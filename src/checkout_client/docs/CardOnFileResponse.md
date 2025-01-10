# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CardOnFileResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCardId** | **String** | Merchant Card ID returned by SRCI. | 
**correlationId** | **String** | Correlation ID for this transaction. If available within the present checkout session (e.g. received in an earlier API response during the present session), then it must be provided, otherwise a new checkout session will be initiated. | 
**maskedCard** | [**CardOnFileMaskedCard**](CardOnFileMaskedCard.md) |  | [optional] 


