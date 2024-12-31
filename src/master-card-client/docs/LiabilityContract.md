# MastercardProcessingCoreApi.LiabilityContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**liabilityCategory** | **String** | Type of link between an upper-level liability account contract and the account contract being created. Usually, the link is created to indicate one corporate headquarter account and many corporate branch accounts.  Possible values are: * Y - Full Liability    * Every corporate branch is independently responsible for the repayment of its loans and loan interest.   * All branches as a whole should not exceed the general corporate credit limit.   * Transactions executed in any corporate branch are regulated by usage limiters set for the entire corporation.   * Product parameters available when opening a corporate client&#39;s contract depend on the product parameters set for the corporate branch.  * N - Affiliated    * Every corporate branch is independently responsible for the repayment of its loans and loan interest.   * All branches as a whole should not exceed the general corporate credit limit.   * Transactions executed in any corporate branch are regulated by usage limiters set for the entire corporation.  * A - Only Check Balance    * Every corporate client has an independent credit limit and is independently responsible for the repayment of their loan and its interest.   * Product parameters available when opening a corporate client&#39;s account depend on the product parameters for the corporate branch.  * R - Reporting   * This link type is used to gather statistical data on account activity within its tree. The data are required for generating \&quot;non-financial\&quot; reports, such as statements on all corporate accounts – without their consolidated totals.  | 
**liabilityContractId** | **String** | Technical identifier of an upper-level liability account contract to which a liability link is set for the account contract being created.  | 



## Enum: LiabilityCategoryEnum


* `Y` (value: `"Y"`)

* `N` (value: `"N"`)

* `A` (value: `"A"`)

* `R` (value: `"R"`)




