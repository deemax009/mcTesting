# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.ConfirmationData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkoutEventType** | **String** | Event type associated with the checkout. Valid values are: 01 - Authorise 02 - Capture 03 - Refund 04 - Cancel 05 - Fraud 06 - Chargeback 07 - Other  | [optional] 
**checkoutEventStatus** | **String** | Status of the event associated with the checkout. Valid values are:    * 01 - Created   * 02 - Confirmed   * 03 - Cancelled   * 04 - Fraud Cancelled   * 05 - Others   * 06-50 - Reserved for EMVCo future use   * 51-99 - Click to Pay System specific statuses  | [optional] 
**confirmationStatus** | **String** | Status of the event as provided by the SRC Initiator in the Confirmation message. Valid values are:    * 01 - Success   * 02 - Failure   * 03 - Other  | [optional] 
**confirmationReason** | **String** | Description of the reason for the event associated with the order. | [optional] 
**confirmationTimestamp** | **String** | Date and time (UTC) corresponding to the completion of confirmation event initiated by the SRC Initiator. UTC ISO 8601 format. | [optional] 
**networkAuthorizationCode** | **String** | Authorization code associated with an approved transaction. | [optional] 
**networkTransactionIdentifier** | **String** | The unique authorization related tracing value assigned by a Payment Network and provided in an authorization response. Required only when checkoutEventType&#x3D;01. If checkoutEventType&#x3D;01 and the value of networkTransactionIdentifier is unknown, please pass UNAVLB.     | [optional] 
**paymentNetworkReference** | **String** | Transaction identifier as provided by a Payment Network after authorisation has been complete. | [optional] 
**transactionAmount** | [**TransactionAmount**](TransactionAmount.md) |  | [optional] 


