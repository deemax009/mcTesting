# MastercardProcessingCoreApi.CreditData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingDay** | **String** | The day when a billing cycle for the credit account ends. As a result:  * billing is closed  * interest may be charged for the outstanding balance  * a Minimum To Pay amount is calculated  * a statement is generated  In the generic solution, the possible values are integers between 1 and 31. If value 31 is chosen, &#x60;billingDay&#x60; is set to the end of the month.  | [optional] 
**creditLimitAmount** | **Number** | Information on the amount of granted credit limit assigned to the account. Credit limit must be provided in the account currency.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 


