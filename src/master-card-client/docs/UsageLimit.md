# MastercardProcessingCoreApi.UsageLimit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activityPeriodStartDate** | **Date** | Effective date and time of the usage limit (YYYY-MM-DDThh:mm:ssZ format).  | [optional] 
**activityPeriodEndDate** | **Date** | Expiration date and time of the usage limit (YYYY-MM-DDThh:mm:ssZ format). Date must be greater or equal to &#x60;activityPeriodStartDateDate&#x60;.  | [optional] 
**addInfo** | **String** | Additional Information (TAG&#x3D;VALUE; format).  | [optional] 
**currency** | **String** | The currency of the maximum total amount of all transactions (&#x60;maxAmount&#x60;) and of a single transaction (&#x60;maxSingleAmount&#x60;) (format according to ISO 4217, alphanumeric code).  | [optional] 
**currencyNumericCode** | **String** | The currency of the maximum total amount of all transactions (&#x60;maxAmount&#x60;) and of a single transaction (&#x60;maxSingleAmount&#x60;) (format according to ISO 4217, numeric code).  | [optional] 
**currentUsage** | [**CurrentUsage**](CurrentUsage.md) |  | [optional] 
**maxAmount** | **Number** | Maximum transaction amount permitted for the specific limit period. Zero amount indicates no restrictions.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**maxNumber** | **Number** | Maximum number of transactions permitted for the specific limit period.  | [optional] 
**maxPercent** | **Number** | This field (if it is filled in) is used in calculating threshold values for the amount or number of transactions, depending on the value of the Algorithm field. For example, for algorithms related to calculating the average or total value for the amount of transactions, the limit is calculated as a set percentage of the average or total calculated amount of transactions. If the algorithm is related to calculating the average or total number of transactions, a set percentage is applied to the calculated number of transactions. For the &#39;Fixed&#39; algorithm, a percentage is only applied to the &#x60;maxAmount&#x60; amount. I.e. if this field is filled in, the value received with it redefines the value of the &#x60;maxAmount&#x60; or &#x60;maxNumber&#x60; field (depending on the algorithm). For a specific balance type, this field determines the maximum permissible total transaction amount for a set period, as a percentage of the available funds (amount available) of the corresponding balance type. If the balance type for a limiter is not specified, the maximum permissible transaction amount is calculated as a percentage of the contract credit limit.  A null value in this field means that no limits are set.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator.  | [optional] 
**maxSingleAmount** | **Number** | Maximum amount permitted for one transaction. Zero amount indicates no restrictions.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**status** | **String** | Usage limit status.  | **Possible values**  | |--------------------- | | Active               | | Closed               | | Temporarily Active   | | Temporarily Closed   | | Expired              | | Template Closed      | | Service Deactivated  | | Redefined            |  | 
**usageLimitCode** | **String** | The code of usage limit configured in the MP&#39;s CMS. Usage limit code defines the type of usage limit.  | 


