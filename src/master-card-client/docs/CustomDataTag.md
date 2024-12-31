# MastercardProcessingCoreApi.CustomDataTag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**removeTag** | **Boolean** | Flag informing if the tag should be removed from its container field.  | [optional] 
**tagContainer** | [**TagContainer**](TagContainer.md) |  | 
**tagName** | **String** | Tag name. The Issuer can specify any name representing some meaning to the client/contract object.  The tag name can be set by the Issuer, prior configuration of its name in the MP&#39;s CMS is not necessary.  The tag name should not contain characters [&#39;&#x3D;&#39;, &#39;;&#39;, &#39; &#39;].  | 
**tagValue** | **String** | Tag value. To clear a tag value, an empty value must be sent (&#39;&#39;).  The tag value should not contain characters [&#39;&#x3D;&#39;, &#39;;&#39;]  | [optional] 


