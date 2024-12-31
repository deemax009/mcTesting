# MastercardProcessingCoreApi.UsageLimitStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activationDate** | **Date** | Activation date and time of the usage limit (YYYY-MM-DDThh:mm:ssZ format).  | [optional] 
**deactivationDate** | **Date** | Deactivation date and time of the usage limit (YYYY-MM-DDThh:mm:ssZ format).  | [optional] 
**status** | **String** | Status of usage limit. Only two actions on usage limit are possible to be set from the external system - Activation and Suspending   * ACTIVE - will activate the usage limit   * SUSPEND - will suspend the usage limit  | 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `SUSPEND` (value: `"SUSPEND"`)




