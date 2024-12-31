/**
 * Mastercard Processing Core API
 * OpenAPI Specification for MP (Mastercard Processing) **Core**.  This documentation describes what functionalities are exposed by the MP's CMS (Card Management System) and are available to be used by the Issuer. The Issuer is the primary actor who executes the operations. Whenever the Issuer wishes to onboard its customers to the card program, they may use API to:  * create and manage **client**  * create and manage **contracts**, there are two types of contracts in the MP's CMS:    * **account contract**    * **card contract**  Later, during the card lifecycle, the Issuer can also manage other objects related to the client and the contract (account or card):  * manage **card plastic**  * create, manage and retrieve **additional addresses** (for the client and the contract)  * manage and retrieve **classifiers** (for the client and the contract)  * manage and retrieve **custom data** (for the client and the contract)  * manage and retrieve **parameters** (for the contract)  * set or retrieve **service limit tariff** (for the contract)  * post or retrieve **transactions** (for the contract)  * manage and retrieve **usage limits** (for the contract)  *** API uses RESTful protocol via HTTP to execute POST, PUT, GET and PATCH operations sent to given endpoints, e.g. `/clients`.  API uses JSON Web Encryption compact serialization for payload encryption for all API operations. *** External documentation:   * [ISO 4217 - Currency Codes](https://www.iso.org/iso-4217-currency-codes.html)   * [ISO 3166 - Country Codes](https://www.iso.org/iso-3166-country-codes.html)   * [Internet Engineering Task Force (IETF) BCP 47 standard](https://tools.ietf.org/html/bcp47#appendix-A)   * [JSON Web Encryption](https://developer.mastercard.com/platform/documentation/security-and-authentication/securing-sensitive-data-using-payload-encryption/#jwe-encryption)   * [Internet Engineering Task Force (IETF) RFC7232](https://datatracker.ietf.org/doc/html/rfc7232)   * [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386) *** 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ContractSummary model module.
 * @module model/ContractSummary
 * @version 1.0.0
 */
class ContractSummary {
    /**
     * Constructs a new <code>ContractSummary</code>.
     * @alias module:model/ContractSummary
     * @param contractId {Number} Contract record id from MP's CMS database. 
     */
    constructor(contractId) { 
        
        ContractSummary.initialize(this, contractId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractId) { 
        obj['contractId'] = contractId;
    }

    /**
     * Constructs a <code>ContractSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractSummary} obj Optional instance to populate.
     * @return {module:model/ContractSummary} The populated <code>ContractSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContractSummary();

            if (data.hasOwnProperty('contractCategory')) {
                obj['contractCategory'] = ApiClient.convertToType(data['contractCategory'], 'String');
            }
            if (data.hasOwnProperty('contractId')) {
                obj['contractId'] = ApiClient.convertToType(data['contractId'], 'Number');
            }
            if (data.hasOwnProperty('contractLevel')) {
                obj['contractLevel'] = ApiClient.convertToType(data['contractLevel'], 'String');
            }
            if (data.hasOwnProperty('contractName')) {
                obj['contractName'] = ApiClient.convertToType(data['contractName'], 'String');
            }
            if (data.hasOwnProperty('contractNumber')) {
                obj['contractNumber'] = ApiClient.convertToType(data['contractNumber'], 'String');
            }
            if (data.hasOwnProperty('leaf')) {
                obj['leaf'] = ApiClient.convertToType(data['leaf'], 'String');
            }
            if (data.hasOwnProperty('liabilityCategory')) {
                obj['liabilityCategory'] = ApiClient.convertToType(data['liabilityCategory'], 'String');
            }
            if (data.hasOwnProperty('liabilityContractId')) {
                obj['liabilityContractId'] = ApiClient.convertToType(data['liabilityContractId'], 'Number');
            }
            if (data.hasOwnProperty('liabilityContractNumber')) {
                obj['liabilityContractNumber'] = ApiClient.convertToType(data['liabilityContractNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContractSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContractSummary</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContractSummary.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contractCategory'] && !(typeof data['contractCategory'] === 'string' || data['contractCategory'] instanceof String)) {
            throw new Error("Expected the field `contractCategory` to be a primitive type in the JSON string but got " + data['contractCategory']);
        }
        // ensure the json data is a string
        if (data['contractLevel'] && !(typeof data['contractLevel'] === 'string' || data['contractLevel'] instanceof String)) {
            throw new Error("Expected the field `contractLevel` to be a primitive type in the JSON string but got " + data['contractLevel']);
        }
        // ensure the json data is a string
        if (data['contractName'] && !(typeof data['contractName'] === 'string' || data['contractName'] instanceof String)) {
            throw new Error("Expected the field `contractName` to be a primitive type in the JSON string but got " + data['contractName']);
        }
        // ensure the json data is a string
        if (data['contractNumber'] && !(typeof data['contractNumber'] === 'string' || data['contractNumber'] instanceof String)) {
            throw new Error("Expected the field `contractNumber` to be a primitive type in the JSON string but got " + data['contractNumber']);
        }
        // ensure the json data is a string
        if (data['leaf'] && !(typeof data['leaf'] === 'string' || data['leaf'] instanceof String)) {
            throw new Error("Expected the field `leaf` to be a primitive type in the JSON string but got " + data['leaf']);
        }
        // ensure the json data is a string
        if (data['liabilityCategory'] && !(typeof data['liabilityCategory'] === 'string' || data['liabilityCategory'] instanceof String)) {
            throw new Error("Expected the field `liabilityCategory` to be a primitive type in the JSON string but got " + data['liabilityCategory']);
        }
        // ensure the json data is a string
        if (data['liabilityContractNumber'] && !(typeof data['liabilityContractNumber'] === 'string' || data['liabilityContractNumber'] instanceof String)) {
            throw new Error("Expected the field `liabilityContractNumber` to be a primitive type in the JSON string but got " + data['liabilityContractNumber']);
        }

        return true;
    }


}

ContractSummary.RequiredProperties = ["contractId"];

/**
 * Contract's contract category.  | **Possible values**  | |--------------------- | | Account              | | Card                 | | Device               | 
 * @member {String} contractCategory
 */
ContractSummary.prototype['contractCategory'] = undefined;

/**
 * Contract record id from MP's CMS database. 
 * @member {Number} contractId
 */
ContractSummary.prototype['contractId'] = undefined;

/**
 * Contract's level in contract hierarchy. This field informs about the contract level and about the sequence number of the contract in the level.  For example, if there is one account contract with two card contracts system will assign:   * . - for account contract   * .1. - for 1st card contract   * .2. - for 2nd card contract  If there is one account contract with two subaccount contracts with card contracts created under subaccounts system will assign:   * . - for top account contract   * .1. - for 1st subaccount contract   * .1.1. - for 1st card contract   * .1.2. - for 2nd card contract   * .2. - for 2nd subaccount contract   * .2.1. - for 1st card contract   * .2.2. - for 2nd card contract   * .2.3. - for 3rd card contract 
 * @member {String} contractLevel
 */
ContractSummary.prototype['contractLevel'] = undefined;

/**
 * Contract name. 
 * @member {String} contractName
 */
ContractSummary.prototype['contractName'] = undefined;

/**
 * Contract number (can be masked if PAN present). 
 * @member {String} contractNumber
 */
ContractSummary.prototype['contractNumber'] = undefined;

/**
 * The technical attribute used in the Workbench (CMS GUI) screens.  | **Possible values**  | |--------------------- | | N                    | | Y                    | 
 * @member {String} leaf
 */
ContractSummary.prototype['leaf'] = undefined;

/**
 * Type of link between upper-level liability account contract and account contract being created. Usually, the link is created to indicate one corporate headquarter account and many corporate branches accounts.  Possible values are: * Y - Full Liability    * Every corporate branch is independently responsible for the repayment of its loans and loan interest.   * All branches as a whole should not exceed the general corporate credit limit.   * Transactions executed in any corporate branch are regulated by usage limiters set for the entire corporation.   * Product parameters available when opening a corporate client's contract depend on the product parameters set for the corporate branch.  * N - Affiliated   * Every corporate branch is independently responsible for the repayment of its loans and loan interest.   * All branches as a whole should not exceed the general corporate credit limit.   * Transactions executed in any corporate branch are regulated by usage limiters set for the entire corporation.  * A - Only Check Balance   * Every corporate client has an independent credit limit and is independently responsible for the repayment of his/her loan and its interest.   * Product parameters available when opening a corporate client's accounts depend on the product parameters for the corporate branch.  * R - Reporting   * This link type is used to gather statistical data on account activity within its tree. This data is needed for generating \"non-financial\" reports, such as statements on all corporate accounts – without their consolidated totals. 
 * @member {String} liabilityCategory
 */
ContractSummary.prototype['liabilityCategory'] = undefined;

/**
 * Liability contract record id from the CMS database. 
 * @member {Number} liabilityContractId
 */
ContractSummary.prototype['liabilityContractId'] = undefined;

/**
 * Liability contract number. 
 * @member {String} liabilityContractNumber
 */
ContractSummary.prototype['liabilityContractNumber'] = undefined;






export default ContractSummary;
