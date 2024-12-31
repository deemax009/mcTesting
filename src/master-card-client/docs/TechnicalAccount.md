# MastercardProcessingCoreApi.TechnicalAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountTemplateId** | **String** | Identification number of the account template the account is based on.  | [optional] 
**accountTemplateName** | **String** | Alphanumeric description of the account template the account is based on.  | [optional] 
**ageingPriority** | **Number** | Technical account priority, which influences the order of account interest accrual and the order of repayments to loan accounts.  | [optional] 
**ageingTechnicalAccountId** | **String** | Identification number of the technical account to which funds are transferred when due normalization is performed.  | [optional] 
**ageingTechnicalAccountName** | **String** | Alphanumeric description of the technical account to which funds are transferred when due normalization is performed.  | [optional] 
**analyticNumber** | **String** | General ledger account number used for analytic accounting.  | [optional] 
**balance** | **Number** | Current technical account balance.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**billingCycleNumber** | **Number** | Number of billing cycle. Starting from 0. Increased by 1 for every new billing cycle.  | [optional] 
**category** | **String** | Technical account category.  | **Possible values**  |      **Description**       | |:-------------------: |:-------------------------: | |          C           |       Personal Limit       | |          S           |        Shared Limit        | |          D           |           Dispute          | |          I           |        Pay Immediate       | |          P           |         Payment Due        | |          O           |            Other           | |          T           |       Transit To ...       | |          X           |           Primary          | |          p           |  Credit Limit Payment Due  | |          i           |    Credit Limit Overdue    |  | [optional] 
**contractId** | **Number** | Contract record id from the CMS database of contract for which technical account is created.  | [optional] 
**contractNumber** | **String** | Contract number for which technical account is created.  | [optional] 
**currency** | **String** | Technical account currency (format according to ISO 4217, alphanumeric code).  | [optional] 
**currencyNumericCode** | **String** | Technical account currency (format according to ISO 4217, numeric code).  | [optional] 
**dueType** | **String** | Rule for calculating due normalization dates for the technical account.  | **Possible values**  | **Description**   | |--------------------- |------------------ | | S                    |  Sliding          | | s                    |  Sliding + Clear  | | O                    |  Value Date Due   | | E                    |  End Cycle Due    | | C                    |  Contract Due     | | P                    |  Payment Due      | | L                    |  Long Payment Due | | F                    |  Fixed Day Due    | | Q                    |  Quarter          | | N                    |  None             |  | [optional] 
**endDate** | **Date** | Technical cycle end date (YYYY-MM-DD format).  | [optional] 
**inAmountAvailable** | **Boolean** | Shows whether the technical account balance is considered during the amount available calculation.  | [optional] 
**interestFeeRate** | **Number** | Interest fee rate for the technical account.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator.  | [optional] 
**interestRate** | **Number** | Interest rate for the technical account.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator.  | [optional] 
**interestTechnicalAccountId** | **String** | Identification number of the technical account to which interest accrued for the account is transferred.  | [optional] 
**interestTechnicalAccountName** | **String** | Alphanumeric description of the technical account to which interest accrued for the account is transferred.  | [optional] 
**lowerLimit** | **Number** | Minimum technical account balance.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**overLimitTechnicalAccountId** | **String** | Identification number of the technical account to which excessive funds will be transferred if the account balance exceeds the value of the &#x60;upperLimit&#x60; field.  | [optional] 
**overLimitTechnicalAccountName** | **String** | Alphanumeric description of the technical account to which excessive funds will be transferred if the account balance exceeds the value of the &#x60;upperLiimit&#x60; field.  | [optional] 
**ownBlockedAmount** | **Number** | Technical account&#39;s blocked amount not considering blocked amounts of the subcontracts.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**paymentPriority** | **Number** | Technical account priority, which influences the order of account interest accrual and the order of repayments to loan accounts.  | [optional] 
**startBalance** | **Number** | Account balance at the beginning of the billing cycle.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**startDate** | **Date** | Technical cycle start date (YYYY-MM-DD format).  | [optional] 
**syntheticNumber** | **String** | General ledger account number used for synthetic accounting.  | [optional] 
**technicalAccountId** | **Number** | Unique identifier of the technical account record in the database.  | [optional] 
**technicalAccountCode** | **String** | Technical account code.  | [optional] 
**technicalAccountName** | **String** | Technical account name.  | [optional] 
**technicalAccountType** | **String** | Technical account type.  | [optional] 
**totalBlockedAmount** | **Number** | Technical account&#39;s blocked amount considering blocked amounts of the subcontracts.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**upperLimit** | **Number** | Maximum technical account balance.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 


