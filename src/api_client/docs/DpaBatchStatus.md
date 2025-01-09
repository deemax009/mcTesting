# MastercardCheckoutSolutionsMerchantRegistrationApi.DpaBatchStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | This field allows the Integrator to assign an internal reference to a batch request so that it can be used for internal tracking purposes. | [optional] 
**batchId** | **String** | A unique identifier associated with the submitted Digital Payment Application (DPA) batch. The Batch ID can be used to retrieve the status of the batch by calling GET DPA status endpoint. | [optional] 
**batchStatus** | **String** | Describes the outcome of the submitted Digital Payment Application (DPA) batch. Possible outcomes include:  * COMPLETED_SUCCESSFULLY - Batch was completed successfully and all DPAs included in the batch are ready to transact.  * COMPLETED_WITH_ERRORS - Batch was completed successfully, but some DPAs included in the batch aren&#39;t ready to transact.  * FAILED -  Batch failed to load.  * IN_PROGRESS - Batch processing in progress.  For a full breakdown of all DPA outcomes in a batch, refer to the items.  | [optional] 
**batchStartTime** | **String** | Start time of batch request | [optional] 
**batchEndTime** | **String** | End time of batch request | [optional] 
**errorMessage** | **String** | Provides additional information when batchStatus yields a FAILED status. | [optional] 
**items** | [**[BatchStatusItems]**](BatchStatusItems.md) | An array of status objects that describes the outcome of each Digital Payment Application (DPA) item in a batch request.  Note: DPA item order may differ from original submission.\&quot;  | [optional] 



## Enum: BatchStatusEnum


* `COMPLETED_SUCCESSFULLY` (value: `"COMPLETED_SUCCESSFULLY"`)

* `COMPLETED_WITH_ERRORS` (value: `"COMPLETED_WITH_ERRORS"`)

* `FAILED` (value: `"FAILED"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)




