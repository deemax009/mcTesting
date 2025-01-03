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
import CustomDataTag from './CustomDataTag';

/**
 * The AccountContractData model module.
 * @module model/AccountContractData
 * @version 1.0.0
 */
class AccountContractData {
    /**
     * Constructs a new <code>AccountContractData</code>.
     * Account contract data represents basic account information for any account: is it a top account or a sub-account, a debit or a credit account. 
     * @alias module:model/AccountContractData
     * @param accountContractNumber {String} Account contract identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS system so that the Issuer can distinguish between their accounts.  `accountContractNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
     * @param productCode {String} Product code defines the configuration used for the contract creation (account or card). Product code is linked in the MP's CMS to certain parameters which define how a contract will be used (for example if it is a card contract or an account contract, a debit or a credit contract, etc.).  *Disclaimer: `productCode` is configured in the MP's CMS and the Issuer is allowed to use only the value configured by the MP (the Issuer cannot use their own value).*  In the standard product account `productCode` can be found in the Parametrization Workbook (PPW) in the *CD.1.3.003* and *CD.1.3.004* (in case of pre-embossed issuing mode). 
     */
    constructor(accountContractNumber, productCode) { 
        
        AccountContractData.initialize(this, accountContractNumber, productCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountContractNumber, productCode) { 
        obj['accountContractNumber'] = accountContractNumber;
        obj['productCode'] = productCode;
    }

    /**
     * Constructs a <code>AccountContractData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountContractData} obj Optional instance to populate.
     * @return {module:model/AccountContractData} The populated <code>AccountContractData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountContractData();

            if (data.hasOwnProperty('accountContractName')) {
                obj['accountContractName'] = ApiClient.convertToType(data['accountContractName'], 'String');
            }
            if (data.hasOwnProperty('accountContractNumber')) {
                obj['accountContractNumber'] = ApiClient.convertToType(data['accountContractNumber'], 'String');
            }
            if (data.hasOwnProperty('accountContractSubtypeCode')) {
                obj['accountContractSubtypeCode'] = ApiClient.convertToType(data['accountContractSubtypeCode'], 'String');
            }
            if (data.hasOwnProperty('branchCode')) {
                obj['branchCode'] = ApiClient.convertToType(data['branchCode'], 'String');
            }
            if (data.hasOwnProperty('cbsNumber')) {
                obj['cbsNumber'] = ApiClient.convertToType(data['cbsNumber'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('customData')) {
                obj['customData'] = ApiClient.convertToType(data['customData'], [CustomDataTag]);
            }
            if (data.hasOwnProperty('parentAccountContractId')) {
                obj['parentAccountContractId'] = ApiClient.convertToType(data['parentAccountContractId'], 'Number');
            }
            if (data.hasOwnProperty('productCode')) {
                obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
            }
            if (data.hasOwnProperty('serviceGroupCode')) {
                obj['serviceGroupCode'] = ApiClient.convertToType(data['serviceGroupCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountContractData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountContractData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AccountContractData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accountContractName'] && !(typeof data['accountContractName'] === 'string' || data['accountContractName'] instanceof String)) {
            throw new Error("Expected the field `accountContractName` to be a primitive type in the JSON string but got " + data['accountContractName']);
        }
        // ensure the json data is a string
        if (data['accountContractNumber'] && !(typeof data['accountContractNumber'] === 'string' || data['accountContractNumber'] instanceof String)) {
            throw new Error("Expected the field `accountContractNumber` to be a primitive type in the JSON string but got " + data['accountContractNumber']);
        }
        // ensure the json data is a string
        if (data['accountContractSubtypeCode'] && !(typeof data['accountContractSubtypeCode'] === 'string' || data['accountContractSubtypeCode'] instanceof String)) {
            throw new Error("Expected the field `accountContractSubtypeCode` to be a primitive type in the JSON string but got " + data['accountContractSubtypeCode']);
        }
        // ensure the json data is a string
        if (data['branchCode'] && !(typeof data['branchCode'] === 'string' || data['branchCode'] instanceof String)) {
            throw new Error("Expected the field `branchCode` to be a primitive type in the JSON string but got " + data['branchCode']);
        }
        // ensure the json data is a string
        if (data['cbsNumber'] && !(typeof data['cbsNumber'] === 'string' || data['cbsNumber'] instanceof String)) {
            throw new Error("Expected the field `cbsNumber` to be a primitive type in the JSON string but got " + data['cbsNumber']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        if (data['customData']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['customData'])) {
                throw new Error("Expected the field `customData` to be an array in the JSON data but got " + data['customData']);
            }
            // validate the optional field `customData` (array)
            for (const item of data['customData']) {
                CustomDataTag.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['productCode'] && !(typeof data['productCode'] === 'string' || data['productCode'] instanceof String)) {
            throw new Error("Expected the field `productCode` to be a primitive type in the JSON string but got " + data['productCode']);
        }
        // ensure the json data is a string
        if (data['serviceGroupCode'] && !(typeof data['serviceGroupCode'] === 'string' || data['serviceGroupCode'] instanceof String)) {
            throw new Error("Expected the field `serviceGroupCode` to be a primitive type in the JSON string but got " + data['serviceGroupCode']);
        }

        return true;
    }


}

AccountContractData.RequiredProperties = ["accountContractNumber", "productCode"];

/**
 * Account contract name set by the Issuer. 
 * @member {String} accountContractName
 */
AccountContractData.prototype['accountContractName'] = undefined;

/**
 * Account contract identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS system so that the Issuer can distinguish between their accounts.  `accountContractNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
 * @member {String} accountContractNumber
 */
AccountContractData.prototype['accountContractNumber'] = undefined;

/**
 * The field defines the subtype code of a contract. The value should be set only for products (an account contract or a card contract) for which a subtype definition is allowed.  *Disclaimer: `subtypeCode` is configured in the MP's CMS and the Issuer is allowed to use only the value configured by the MP (the Issuer cannot use their own values).* 
 * @member {String} accountContractSubtypeCode
 */
AccountContractData.prototype['accountContractSubtypeCode'] = undefined;

/**
 * Branch code under which a contract (an account contract or a card contract) has been created on the Issuer's side and which has been passed in a contract creation request. (`POST /accounts` or `POST /cards`). The value can be later used by the Issuer for reporting purposes. 
 * @member {String} branchCode
 */
AccountContractData.prototype['branchCode'] = undefined;

/**
 * Contract identifier (for an account contract or a card contract) generated on the Issuer's side and passed to the MP's CMS in the contract creation request. (`POST /accounts` or `POST /cards`). 
 * @member {String} cbsNumber
 */
AccountContractData.prototype['cbsNumber'] = undefined;

/**
 * A unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation is completed successfully and is returned in a client creation response (`POST /clients`). 
 * @member {Number} clientId
 */
AccountContractData.prototype['clientId'] = undefined;

/**
 * Account currency (format according to ISO 4217, alphanumeric code). 
 * @member {String} currency
 */
AccountContractData.prototype['currency'] = undefined;

/**
 * Contract custom data allow the Issuer to pass specific contract tags during the creation request. The tags may represent Issuer-specific field names and values, not available as separate, dedicated fields. The Issuer can specify a tag name and its value.  Custom data tags are stored in fixed containers (four containers are available) in a TAG=VALUE; format (for example: CATEGORY=A;GROUP=G1;).  Each container has a length of 255 characters. 
 * @member {Array.<module:model/CustomDataTag>} customData
 */
AccountContractData.prototype['customData'] = undefined;

/**
 * Account's unique technical identifier from the MP's CMS database, which represents a parent account. The field is empty when an account is a top account. Non-empty value means the account has been created as a sub-account. 
 * @member {Number} parentAccountContractId
 */
AccountContractData.prototype['parentAccountContractId'] = undefined;

/**
 * Product code defines the configuration used for the contract creation (account or card). Product code is linked in the MP's CMS to certain parameters which define how a contract will be used (for example if it is a card contract or an account contract, a debit or a credit contract, etc.).  *Disclaimer: `productCode` is configured in the MP's CMS and the Issuer is allowed to use only the value configured by the MP (the Issuer cannot use their own value).*  In the standard product account `productCode` can be found in the Parametrization Workbook (PPW) in the *CD.1.3.003* and *CD.1.3.004* (in case of pre-embossed issuing mode). 
 * @member {String} productCode
 */
AccountContractData.prototype['productCode'] = undefined;

/**
 * Service groups are an additional client and contract classifier. For example, according to additional classification, VIP clients can be distinguished as a separate group. Service groups can be used to configure various filters for viewing data or generating reports.  *Disclaimer: Please contact the MP representative should new values be required. Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP's side.* 
 * @member {String} serviceGroupCode
 */
AccountContractData.prototype['serviceGroupCode'] = undefined;






export default AccountContractData;

