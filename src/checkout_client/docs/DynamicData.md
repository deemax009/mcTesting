# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.DynamicData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamicDataValue** | **String** | Value of the dynamic data. String or Array[String] based on scheme. See below.  FPAN Payloads: &lt;table&gt; &lt;tr&gt; &lt;td&gt;Mastercard&lt;/td&gt; &lt;td&gt;Object&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt; &lt;td&gt;VISA&lt;/td&gt; &lt;td&gt;Array&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt; &lt;td&gt;Amex&lt;/td&gt; &lt;td&gt;Object&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt; &lt;td&gt;Discover&lt;/td&gt; &lt;td&gt;Array&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;  Token Payloads: &lt;table&gt; &lt;tr&gt; &lt;td&gt;Mastercard&lt;/td&gt; &lt;td&gt;Object&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt; &lt;td&gt;VISA&lt;/td&gt; &lt;td&gt;Array&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt; &lt;td&gt;Amex&lt;/td&gt; &lt;td&gt;Array&lt;/td&gt; &lt;/tr&gt;&lt;tr&gt; &lt;td&gt;Discover&lt;/td&gt; &lt;td&gt;Array&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;  | [optional] 
**dynamicDataType** | [**DynamicDataType**](DynamicDataType.md) |  | 
**dynamicDataExpiration** | **String** | Expiry period of the dynamic data. Format &#x3D; UTC  | [optional] 


