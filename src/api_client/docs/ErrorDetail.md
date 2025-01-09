# MastercardCheckoutSolutionsMerchantRegistrationApi.ErrorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason for receiving an error for the Digital Payment Application (DPA) item. | 
**sourceType** | **String** | Indicates the source type of the Digital Payment Application (DPA) item error. | [optional] 
**message** | **String** | Additional details on the Digital Payment Application (DPA) item error. | [optional] 
**source** | **String** | Indicates the field name for the cause of the Digital Payment Application (DPA) item error. | [optional] 



## Enum: ReasonEnum


* `INVALID_ARGUMENT` (value: `"INVALID_ARGUMENT"`)

* `INVALID_VALUE` (value: `"INVALID_VALUE"`)

* `NOT_FOUND` (value: `"NOT_FOUND"`)

* `DECLINED` (value: `"DECLINED"`)

* `INVALID_STATE` (value: `"INVALID_STATE"`)

* `AUTHENTICATION_FAILED` (value: `"AUTHENTICATION_FAILED"`)

* `INTERNAL_SERVER_ERROR` (value: `"INTERNAL_SERVER_ERROR"`)




