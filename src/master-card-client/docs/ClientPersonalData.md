# MastercardProcessingCoreApi.ClientPersonalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birthDate** | **Date** | Date of birth (format: YYYY-MM-DD).  | [optional] 
**birthName** | **String** | Birth name.  | [optional] 
**birthPlace** | **String** | Place of birth.  | [optional] 
**citizenship** | **String** | Client&#39;s citizenship. The allowed format is ISO 3166-1 alfa-3 country code (3-letter country designation).  | [optional] 
**firstName** | **String** | First name.  | [optional] 
**gender** | **String** | Gender.  | **Possible values**  | **Description**  | |--------------------- |----------------- | | F                    | Female           | | M                    | Male             | | N                    | Not specified    |  | [optional] 
**language** | **String** | Language symbol. It follows the Internet Engineering Task Force (IETF) [BCP 47](https://tools.ietf.org/html/bcp47#appendix-A) standard.  *Disclaimer: Please contact the MP representative should the language code be used. Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP&#39;s side and have an impact on different areas of configuration (e.g. statement file generating, workbench screens, etc.).*  | [optional] 
**lastName** | **String** | Last name.  | [optional] 
**maritalStatus** | **String** | Client&#39;s marital status.  | **Possible values**  | **Description**  | |--------------------- |----------------- | | DD                    | Divorced          | | DM                    | Married           | | DS                    | Single            | | DX                    | Miscellaneous     |  *Disclaimer: Please contact the MP representative should other values be required. Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP&#39;s side.*  | [optional] 
**middleName** | **String** | Middle name.  | [optional] 
**secretPhrase** | **String** | Secret phrase can be used by the Issuer to authenticate a client. E.g. mother&#39;s maiden name used for authentication process between the client and the call center.  | [optional] 
**shortName** | **String** | Client&#39;s short name.  | [optional] 
**suffix** | **String** | Client&#39;s name suffix. May be used in formal correspondence with the client. The Issuer can choose any text the client wishes, e.g. PhD, Dr.  *Disclaimer: Please contact the MP representative should the suffix be used. Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP&#39;s side.*  | [optional] 
**title** | **String** | Client&#39;s title.  | **Possible values (default)**  | |------------------------------- | | MR                             | | MRS                            | | MISS                           |  *Disclaimer: Please contact the MP representative should other values be required. Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP&#39;s side.*  | [optional] 


