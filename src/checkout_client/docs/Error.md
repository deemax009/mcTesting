# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the ReasonCode field with additional details. | [optional] 
**reasonCode** | **String** | Error reason. One of the following:  Reason | Description --- | --- INVALID_ARGUMENT | A provided argument was invalid. NOT_FOUND | The requested data was not found. PERMISSION_DENIED | The request was denied access to the system. INTERNAL | An internal server error occurred. UNAUTHENTICATED | The request is unauthenticated. UNAVAILABLE | The requested resource is unavailable. A unique constant identifying the error case encountered during transaction processing.  | [optional] 
**recoverable** | **Boolean** | Indicates whether this error will always be returned for this request, or retrying could change the outcome. | [optional] 
**source** | **String** | The parameter that generated this error. | [optional] 
**details** | [**Details**](Details.md) |  | [optional] 


