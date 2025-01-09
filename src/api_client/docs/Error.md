# MastercardCheckoutSolutionsMerchantRegistrationApi.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Number** | HTTP status code associated with the Digital Payment Application (DPA) item error. | 
**reason** | **String** | Reason for receiving an error for the Digital Payment Application (DPA) item. | 
**message** | **String** | Additional details on the Digital Payment Application (DPA) item error. | 
**errordetail** | [**[ErrorDetail]**](ErrorDetail.md) | List of errors associated with a failed Digital Payment Application (DPA) item action. | [optional] 



## Enum: ReasonEnum


* `INVALID_ARGUMENT` (value: `"INVALID_ARGUMENT"`)

* `INVALID_VALUE` (value: `"INVALID_VALUE"`)

* `NOT_FOUND` (value: `"NOT_FOUND"`)

* `DECLINED` (value: `"DECLINED"`)

* `INVALID_STATE` (value: `"INVALID_STATE"`)

* `AUTHENTICATION_FAILED` (value: `"AUTHENTICATION_FAILED"`)

* `INTERNAL_SERVER_ERROR` (value: `"INTERNAL_SERVER_ERROR"`)




