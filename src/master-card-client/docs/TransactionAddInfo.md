# MastercardProcessingCoreApi.TransactionAddInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addInfo** | **String** | Additional transaction data (TAG&#x3D;VALUE; format)  | [optional] 
**attributes1** | **String** | Transaction attributes. Attributes which determine the value of &#x60;transactionCondition&#x60; field.  | [optional] 
**attributes2** | **String** | Secondary transaction attributes.  | [optional] 
**transactionCondition** | **String** | Transaction conditions. The transaction condition value is specified at financial document (transaction) record creation. MP&#39;s CMS creates the value based on the transaction message received from the device. The type of transaction condition depends on the executed transaction type. Transaction conditions define the document processing method.  | [optional] 


