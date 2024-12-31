# MastercardProcessingCoreApi.ClientModification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalDate01** | **Date** | Additional date to meet the Issuer&#39;s individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format).  | [optional] 
**additionalDate02** | **Date** | Additional date to meet the Issuer&#39;s individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format).  | [optional] 
**clientBaseAddressData** | [**ClientBaseAddressData**](ClientBaseAddressData.md) |  | [optional] 
**clientCompanyData** | [**ClientCompanyData**](ClientCompanyData.md) |  | [optional] 
**clientContactData** | [**ClientContactData**](ClientContactData.md) |  | [optional] 
**clientIdentificationData** | [**ClientIdentificationData**](ClientIdentificationData.md) |  | [optional] 
**clientPersonalData** | [**ClientPersonalData**](ClientPersonalData.md) |  | [optional] 
**clientExpiryDate** | **Date** | Date of client expiration (YYYY-MM-DD format). When the date is met in the MP&#39;s CMS, the Issuer will not be able to create new account contracts or new cards for the client.  | [optional] 
**embossedData** | [**EmbossedData**](EmbossedData.md) |  | [optional] 
**clientCustomData** | [**[CustomDataTag]**](CustomDataTag.md) | Client custom data allow the Issuer to pass specific client tags during the creation request. The tags may represent Issuer-specific field names and values, not available as separate, dedicated fields. The Issuer can specify a tag name and its value.  Custom data tags are stored in fixed containers (four containers are available) in a TAG&#x3D;VALUE; format (for example: CATEGORY&#x3D;A;GROUP&#x3D;G1;).  Each container has a length of 3900 characters.  | [optional] 


