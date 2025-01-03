# MastercardProcessingCoreApi.CardContractSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountContractId** | **Number** | Unique technical identifier for an account contract generated by the MP&#39;s CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (&#x60;POST /accounts&#x60;).  | 
**accountContractNumber** | **String** | Account contract identifier generated by the Issuer&#39;s CBS system (Core Banking System). The identifier is stored in the MP&#39;s CMS system so that the Issuer can distinguish between their accounts.  &#x60;accountContractNumber&#x60; should be prefixed with a unique Issuer designation, for example \&quot;ABC_\&quot;, as it must be unique in the MP&#39;s CMS.  Note: The Issuer designation \&quot;ABC_\&quot; is configured in the MP&#39;s CMS and the Issuer is allowed to use only the value agreed with the MP.  | [optional] 
**baseCardContractStatusData** | [**BaseCardContractStatusData**](BaseCardContractStatusData.md) |  | [optional] 
**blockedAmount** | **Number** | Contract&#39;s own blocked amount, which has not been unblocked yet - not including blocked amount on additional cards.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**cardContractId** | **Number** | Unique technical card contract identifier generated by the MP&#39;s CMS. The identifier is generated when card contract creation finishes successfully and is returned in a card contract creation response (&#x60;POST /cards&#x60;).  | 
**cardContractName** | **String** | Card contract name. Free text field.  | [optional] 
**cardContractNumber** | **String** | The card contract number represents a Primary Account Number (PAN). A PAN usually consists of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within the payment organization (Mastercard, VISA)   * The following nine digits are the contract identification number, which can be generated randomly   * The last digit is a Luhn check digit.  The card contract number can be returned:   * unmasked - with a full PAN visible   * masked - with a full PAN masked according to the defined mask (a mask pattern is agreed with the Issuer and configured in the MP API)  | 
**cardholderId** | **Number** | Unique technical client identifier, generated by the MP&#39;s CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (&#x60;POST /clients&#x60;). When a client is assigned to a card contract in the card contract creation request, they become a cardholder and are authorized to perform transactions using the card.  | 
**cardholderShortName** | **String** | Client (cardholder) short name.  | [optional] 
**cbsNumber** | **String** | Contract identifier (for an account contract or a card contract) generated on the Issuer&#39;s side and passed to the MP&#39;s CMS in the contract creation request. (&#x60;POST /accounts&#x60; or &#x60;POST /cards&#x60;).  | [optional] 
**creditLimit** | **Number** | Usually field presents the contract&#39;s credit limit available for a specific contract itself.  Only in specific product configuration (&#39;SeeMain&#39; authorization scenario configured in the CMS), the field will show credit limit of the parent contract.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**currency** | **String** | Card contract currency (format according to ISO 4217, alphanumeric code).  | [optional] 
**currencyNumericCode** | **String** | Card contract currency (format according to ISO 4217, numeric code).  | [optional] 
**dateOpen** | **Date** | Date of the contract record creation in the MP&#39;s CMS (YYYY-MM-DD format).  | [optional] 
**liabilityCategory** | **String** | Type of relation with an upper-level Liability contract (if any).  | **Possible values**  | **Description**     | |--------------------- |-------------------- | | A                    | Only Check Balance  | | N                    | Affiliated          | | R                    | Reporting           | | Y                    | Full Liability      |  | [optional] 
**mainProductCode** | **String** | Main Product Code.  | [optional] 
**parentProductCode** | **String** | Product code of the parent contract.  | [optional] 
**productCode** | **String** | Product code defines the configuration used for the contract creation (account or card). Product code is linked in the MP&#39;s CMS to certain parameters which define how a contract will be used (for example if it is a card contract or an account contract, a debit or a credit contract, etc.).  *Disclaimer: &#x60;productCode&#x60; is configured in the MP&#39;s CMS and the Issuer is allowed to use only the value configured by the MP (the Issuer cannot use their own value).*  In the standard product card &#x60;productCode&#x60; can be found in the Parametrization Workbook (PPW) in the *CD.1.4.005*.  | [optional] 
**productName** | **String** | Name of the product code used to create contract.  | [optional] 


