# MastercardProcessingCoreApi.ContractTariff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applyMode** | **String** | Apply mode.  | **Possible values**  | **Description**  | |--------------------- |----------------- | | D                    | Skip             | | N                    | Inactive         | | Y                    | From tariff      |  | [optional] 
**activeTariffDataId** | **Number** | Tariff data identifier.  | [optional] 
**baseAmount** | **Number** | Additional minimum allowed amount, e.g. minimum loan payment.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**contractId** | **Number** | Contract technical identifier.  | [optional] 
**currency** | **String** | Currency of the fee (format according to ISO 4217, alphanumeric code).  | [optional] 
**currencyNumericCode** | **String** | Currency of the fee (format according to ISO 4217, numeric code).  | [optional] 
**domainFrom** | **String** | Tariff domain organization.  | **Possible values**  |     **Description**     | |:-------------------: |:----------------------: | |          F           |  Financial Institution  | |          A           |      Account Scheme     | |          S           |       Service Pack      | |          P           |         Product         | |          T           |     Product Template    | |          O           |         Personal        | |          E           |          Event          | |          G           |          Group          | |          C           |       Counterparty      | |          M           |         Grouped         |  | [optional] 
**domainLevel** | **Number** | Tariff domain level in tariff hierarchy.  | [optional] 
**domainName** | **String** | Tariff domain name.  | [optional] 
**duePeriod** | **Number** | Due period value.  | [optional] 
**feeRateValue** | **Number** | Additional interest rate, e.g. fee rate charged on revenue from account interest.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**fxRateType** | **String** | Type of currency exchange rate.  | **Possible values**  | **Description**  | |--------------------- |----------------- | | B                    | Buy/Sell         | | M                    | Middle           |  | [optional] 
**generalLedgerNumber** | **String** | Account number in the general ledger, used for synthetic accounting.  | [optional] 
**generalLedgerNumberName** | **String** | General ledger number name.  | [optional] 
**globalTariffId** | **Number** | Global tariff identifier.  | [optional] 
**gracePeriod** | **Number** | The time interval used, for example, to specify a time shift for merchant reimbursement or to specify a loan grace period.  | [optional] 
**minCount** | **Number** | Minimum allowed counter value.  | [optional] 
**maxCount** | **Number** | Maximum allowed counter value.  | [optional] 
**maxAmount** | **Number** | Maximum allowed amount, e.g. maximum fee or maximum transaction amount.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**minAmount** | **Number** | Minimum allowed amount, e.g. minimum fee or minimum transaction amount.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**personalisationType** | **String** | Personalisation type.  | **Possible values**  |      **Description**       | |:-------------------: |:-------------------------: | |          G           |           Global           | |          P           |          Personal          | |          D           |        Personalised        | |          T           | Personal (Template Based)  | |          L           |          Template          |  | [optional] 
**personalTariffId** | **Number** | Personal tariff identifier.  | [optional] 
**rateValue** | **Number** | The interest rate on an account or fee rate.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**singleAmount** | **Number** | Additional allowed amount, e.g. maximum payment in installment schedule.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**startDate** | **Date** | Date from which tariff data is active (YYYY-MM-DD format).  | [optional] 
**tariffCode** | **String** | Tariff code.  | [optional] 
**tariffDomainId** | **Number** | Tariff domain identifier.  | [optional] 
**tariffDomainCode** | **String** | Tariff domain code.  | [optional] 
**tariffId** | **Number** | Tariff identifier.  | [optional] 
**tariffName** | **String** | Tariff name.  | [optional] 
**tariffRole** | **String** | Tariff role.  | **Possible values**  | **Description**             | |--------------------- |---------------------------- | | SERVICE              |  Service                    | | SERVICE_LIMIT        |  Service Limit              | | SERVICE_VD           |  Service Value Days         | | INTEREST             |  Interest                   | | AGEING               |  Ageing                     | | USAGE                |  Usage                      | | INTEREST_TAX         |  Interest Tax               | | BILLING              |  Billing Scheme             | | GL                   |  General Ledger Numeration  | | INST_FEE             |  Installment Fee            | | INSTALLMENT          |  Installment Scheme         | | THRESHOLD            |  Threshold                  | | TECHNICAL            |  Technical                  | | FX                   |  Conversion                 | | REDEFINITION         |  Redefinition               |  | [optional] 
**tariffStartDate** | **Date** | Date from which tariff data is active (YYYY-MM-DD format).  | [optional] 
**tariffTypeCode** | **String** | Tariff type code.  | [optional] 
**tariffTypeName** | **String** | Tariff type name.  | [optional] 
**tariffValue** | **String** | Tariff value.  | [optional] 
**volumeBased** | **String** | A flag that indicates whether the tariff is volume-based.  | **Possible values**  | |--------------------- | | N                    | | Y                    |  | [optional] 


