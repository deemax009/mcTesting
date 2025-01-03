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
import AccountContractBalances from './AccountContractBalances';
import AccountContractOwner from './AccountContractOwner';
import AccountContractStatusData from './AccountContractStatusData';

/**
 * The AccountContract model module.
 * @module model/AccountContract
 * @version 1.0.0
 */
class AccountContract {
    /**
     * Constructs a new <code>AccountContract</code>.
     * @alias module:model/AccountContract
     * @param accountContractBalances {module:model/AccountContractBalances} 
     * @param accountContractId {Number} Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (`POST /accounts`). 
     * @param accountContractLevel {String} Contract level in the contract hierarchy. This field informs about the contract level and about the sequential number of the contract within that level.  For example, if there is one account with two cards, the system will assign:   * . - for the account contract   * .1. - for the first card contract   * .2. - for the second card contract  If there is one account with two subaccounts with cards created under subaccounts, the system will assign:   * . - for the account   * .1. - for the first subaccount contract   * .1.1. - for the first card contract   * .1.2. - for the second card contract   * .2. - for the second subaccount contract   * .2.1. - for the first card contract   * .2.2. - for the second card contract   * .2.3. - for the third card contract 
     * @param accountContractNumber {String} Account contract identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS system so that the Issuer can distinguish between their accounts.  `accountContractNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
     * @param accountContractOwner {module:model/AccountContractOwner} 
     * @param accountContractStatusData {module:model/AccountContractStatusData} 
     * @param billingAccountContractId {Number} Technical identifier of a billing account (the value is set by the MP's CMS). A billing account contract defines the account used for settlements and the main account in the account hierarchy. 
     * @param billingAccountContractNumber {String} Account contract identifier of a billing account. The value is defined in the Issuer's system and is passed to the MP's CMS during the billing account creation request (`POST /accounts`). 
     * @param dateOpen {Date} Date of the contract record creation in the MP's CMS (YYYY-MM-DD format). 
     * @param productName {String} Name of the product code used to create contract. 
     * @param topAccountContractId {Number} Technical identifier from the MP's CMS which represents the top account contract of a specific account contract.  When an account contract is created as a top account, the value returned is the same as the technical identifier from the MP's CMS of the given account contract. 
     * @param topAccountContractNumber {String} Contract number (set by the Issuer) which represents the top account contract of a specific account contract.  When an account contract is created as a top account, the value returned is the same as the contract name of the given account. 
     */
    constructor(accountContractBalances, accountContractId, accountContractLevel, accountContractNumber, accountContractOwner, accountContractStatusData, billingAccountContractId, billingAccountContractNumber, dateOpen, productName, topAccountContractId, topAccountContractNumber) { 
        
        AccountContract.initialize(this, accountContractBalances, accountContractId, accountContractLevel, accountContractNumber, accountContractOwner, accountContractStatusData, billingAccountContractId, billingAccountContractNumber, dateOpen, productName, topAccountContractId, topAccountContractNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountContractBalances, accountContractId, accountContractLevel, accountContractNumber, accountContractOwner, accountContractStatusData, billingAccountContractId, billingAccountContractNumber, dateOpen, productName, topAccountContractId, topAccountContractNumber) { 
        obj['accountContractBalances'] = accountContractBalances;
        obj['accountContractId'] = accountContractId;
        obj['accountContractLevel'] = accountContractLevel;
        obj['accountContractNumber'] = accountContractNumber;
        obj['accountContractOwner'] = accountContractOwner;
        obj['accountContractStatusData'] = accountContractStatusData;
        obj['billingAccountContractId'] = billingAccountContractId;
        obj['billingAccountContractNumber'] = billingAccountContractNumber;
        obj['dateOpen'] = dateOpen;
        obj['productName'] = productName;
        obj['topAccountContractId'] = topAccountContractId;
        obj['topAccountContractNumber'] = topAccountContractNumber;
    }

    /**
     * Constructs a <code>AccountContract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountContract} obj Optional instance to populate.
     * @return {module:model/AccountContract} The populated <code>AccountContract</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountContract();

            if (data.hasOwnProperty('accountContractBalances')) {
                obj['accountContractBalances'] = AccountContractBalances.constructFromObject(data['accountContractBalances']);
            }
            if (data.hasOwnProperty('accountContractId')) {
                obj['accountContractId'] = ApiClient.convertToType(data['accountContractId'], 'Number');
            }
            if (data.hasOwnProperty('accountContractLevel')) {
                obj['accountContractLevel'] = ApiClient.convertToType(data['accountContractLevel'], 'String');
            }
            if (data.hasOwnProperty('accountContractName')) {
                obj['accountContractName'] = ApiClient.convertToType(data['accountContractName'], 'String');
            }
            if (data.hasOwnProperty('accountContractNumber')) {
                obj['accountContractNumber'] = ApiClient.convertToType(data['accountContractNumber'], 'String');
            }
            if (data.hasOwnProperty('accountContractOwner')) {
                obj['accountContractOwner'] = AccountContractOwner.constructFromObject(data['accountContractOwner']);
            }
            if (data.hasOwnProperty('accountContractStatusData')) {
                obj['accountContractStatusData'] = AccountContractStatusData.constructFromObject(data['accountContractStatusData']);
            }
            if (data.hasOwnProperty('accountContractSubtype')) {
                obj['accountContractSubtype'] = ApiClient.convertToType(data['accountContractSubtype'], 'String');
            }
            if (data.hasOwnProperty('additionalParameters')) {
                obj['additionalParameters'] = ApiClient.convertToType(data['additionalParameters'], 'String');
            }
            if (data.hasOwnProperty('amendmentDate')) {
                obj['amendmentDate'] = ApiClient.convertToType(data['amendmentDate'], 'Date');
            }
            if (data.hasOwnProperty('amendmentOfficerId')) {
                obj['amendmentOfficerId'] = ApiClient.convertToType(data['amendmentOfficerId'], 'Number');
            }
            if (data.hasOwnProperty('amendmentOfficerName')) {
                obj['amendmentOfficerName'] = ApiClient.convertToType(data['amendmentOfficerName'], 'String');
            }
            if (data.hasOwnProperty('billingAccountContractId')) {
                obj['billingAccountContractId'] = ApiClient.convertToType(data['billingAccountContractId'], 'Number');
            }
            if (data.hasOwnProperty('billingAccountContractNumber')) {
                obj['billingAccountContractNumber'] = ApiClient.convertToType(data['billingAccountContractNumber'], 'String');
            }
            if (data.hasOwnProperty('branchCode')) {
                obj['branchCode'] = ApiClient.convertToType(data['branchCode'], 'String');
            }
            if (data.hasOwnProperty('branchName')) {
                obj['branchName'] = ApiClient.convertToType(data['branchName'], 'String');
            }
            if (data.hasOwnProperty('cbsNumber')) {
                obj['cbsNumber'] = ApiClient.convertToType(data['cbsNumber'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currencyNumericCode')) {
                obj['currencyNumericCode'] = ApiClient.convertToType(data['currencyNumericCode'], 'String');
            }
            if (data.hasOwnProperty('dateClose')) {
                obj['dateClose'] = ApiClient.convertToType(data['dateClose'], 'Date');
            }
            if (data.hasOwnProperty('dateOpen')) {
                obj['dateOpen'] = ApiClient.convertToType(data['dateOpen'], 'Date');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('lastBillingDate')) {
                obj['lastBillingDate'] = ApiClient.convertToType(data['lastBillingDate'], 'Date');
            }
            if (data.hasOwnProperty('leaf')) {
                obj['leaf'] = ApiClient.convertToType(data['leaf'], 'String');
            }
            if (data.hasOwnProperty('liabilityAccountContractId')) {
                obj['liabilityAccountContractId'] = ApiClient.convertToType(data['liabilityAccountContractId'], 'Number');
            }
            if (data.hasOwnProperty('liabilityAccountContractNumber')) {
                obj['liabilityAccountContractNumber'] = ApiClient.convertToType(data['liabilityAccountContractNumber'], 'String');
            }
            if (data.hasOwnProperty('liabilityCategory')) {
                obj['liabilityCategory'] = ApiClient.convertToType(data['liabilityCategory'], 'String');
            }
            if (data.hasOwnProperty('mainProductCode')) {
                obj['mainProductCode'] = ApiClient.convertToType(data['mainProductCode'], 'String');
            }
            if (data.hasOwnProperty('nextBillingDate')) {
                obj['nextBillingDate'] = ApiClient.convertToType(data['nextBillingDate'], 'Date');
            }
            if (data.hasOwnProperty('parentAccountContractId')) {
                obj['parentAccountContractId'] = ApiClient.convertToType(data['parentAccountContractId'], 'Number');
            }
            if (data.hasOwnProperty('parentAccountContractNumber')) {
                obj['parentAccountContractNumber'] = ApiClient.convertToType(data['parentAccountContractNumber'], 'String');
            }
            if (data.hasOwnProperty('parentProductCode')) {
                obj['parentProductCode'] = ApiClient.convertToType(data['parentProductCode'], 'String');
            }
            if (data.hasOwnProperty('pastDueDate')) {
                obj['pastDueDate'] = ApiClient.convertToType(data['pastDueDate'], 'Date');
            }
            if (data.hasOwnProperty('pastDueDays')) {
                obj['pastDueDays'] = ApiClient.convertToType(data['pastDueDays'], 'Number');
            }
            if (data.hasOwnProperty('productCode')) {
                obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('serviceGroupCode')) {
                obj['serviceGroupCode'] = ApiClient.convertToType(data['serviceGroupCode'], 'String');
            }
            if (data.hasOwnProperty('serviceGroupName')) {
                obj['serviceGroupName'] = ApiClient.convertToType(data['serviceGroupName'], 'String');
            }
            if (data.hasOwnProperty('topAccountContractId')) {
                obj['topAccountContractId'] = ApiClient.convertToType(data['topAccountContractId'], 'Number');
            }
            if (data.hasOwnProperty('topAccountContractNumber')) {
                obj['topAccountContractNumber'] = ApiClient.convertToType(data['topAccountContractNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountContract</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountContract</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AccountContract.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `accountContractBalances`
        if (data['accountContractBalances']) { // data not null
          AccountContractBalances.validateJSON(data['accountContractBalances']);
        }
        // ensure the json data is a string
        if (data['accountContractLevel'] && !(typeof data['accountContractLevel'] === 'string' || data['accountContractLevel'] instanceof String)) {
            throw new Error("Expected the field `accountContractLevel` to be a primitive type in the JSON string but got " + data['accountContractLevel']);
        }
        // ensure the json data is a string
        if (data['accountContractName'] && !(typeof data['accountContractName'] === 'string' || data['accountContractName'] instanceof String)) {
            throw new Error("Expected the field `accountContractName` to be a primitive type in the JSON string but got " + data['accountContractName']);
        }
        // ensure the json data is a string
        if (data['accountContractNumber'] && !(typeof data['accountContractNumber'] === 'string' || data['accountContractNumber'] instanceof String)) {
            throw new Error("Expected the field `accountContractNumber` to be a primitive type in the JSON string but got " + data['accountContractNumber']);
        }
        // validate the optional field `accountContractOwner`
        if (data['accountContractOwner']) { // data not null
          AccountContractOwner.validateJSON(data['accountContractOwner']);
        }
        // validate the optional field `accountContractStatusData`
        if (data['accountContractStatusData']) { // data not null
          AccountContractStatusData.validateJSON(data['accountContractStatusData']);
        }
        // ensure the json data is a string
        if (data['accountContractSubtype'] && !(typeof data['accountContractSubtype'] === 'string' || data['accountContractSubtype'] instanceof String)) {
            throw new Error("Expected the field `accountContractSubtype` to be a primitive type in the JSON string but got " + data['accountContractSubtype']);
        }
        // ensure the json data is a string
        if (data['additionalParameters'] && !(typeof data['additionalParameters'] === 'string' || data['additionalParameters'] instanceof String)) {
            throw new Error("Expected the field `additionalParameters` to be a primitive type in the JSON string but got " + data['additionalParameters']);
        }
        // ensure the json data is a string
        if (data['amendmentOfficerName'] && !(typeof data['amendmentOfficerName'] === 'string' || data['amendmentOfficerName'] instanceof String)) {
            throw new Error("Expected the field `amendmentOfficerName` to be a primitive type in the JSON string but got " + data['amendmentOfficerName']);
        }
        // ensure the json data is a string
        if (data['billingAccountContractNumber'] && !(typeof data['billingAccountContractNumber'] === 'string' || data['billingAccountContractNumber'] instanceof String)) {
            throw new Error("Expected the field `billingAccountContractNumber` to be a primitive type in the JSON string but got " + data['billingAccountContractNumber']);
        }
        // ensure the json data is a string
        if (data['branchCode'] && !(typeof data['branchCode'] === 'string' || data['branchCode'] instanceof String)) {
            throw new Error("Expected the field `branchCode` to be a primitive type in the JSON string but got " + data['branchCode']);
        }
        // ensure the json data is a string
        if (data['branchName'] && !(typeof data['branchName'] === 'string' || data['branchName'] instanceof String)) {
            throw new Error("Expected the field `branchName` to be a primitive type in the JSON string but got " + data['branchName']);
        }
        // ensure the json data is a string
        if (data['cbsNumber'] && !(typeof data['cbsNumber'] === 'string' || data['cbsNumber'] instanceof String)) {
            throw new Error("Expected the field `cbsNumber` to be a primitive type in the JSON string but got " + data['cbsNumber']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['currencyNumericCode'] && !(typeof data['currencyNumericCode'] === 'string' || data['currencyNumericCode'] instanceof String)) {
            throw new Error("Expected the field `currencyNumericCode` to be a primitive type in the JSON string but got " + data['currencyNumericCode']);
        }
        // ensure the json data is a string
        if (data['leaf'] && !(typeof data['leaf'] === 'string' || data['leaf'] instanceof String)) {
            throw new Error("Expected the field `leaf` to be a primitive type in the JSON string but got " + data['leaf']);
        }
        // ensure the json data is a string
        if (data['liabilityAccountContractNumber'] && !(typeof data['liabilityAccountContractNumber'] === 'string' || data['liabilityAccountContractNumber'] instanceof String)) {
            throw new Error("Expected the field `liabilityAccountContractNumber` to be a primitive type in the JSON string but got " + data['liabilityAccountContractNumber']);
        }
        // ensure the json data is a string
        if (data['liabilityCategory'] && !(typeof data['liabilityCategory'] === 'string' || data['liabilityCategory'] instanceof String)) {
            throw new Error("Expected the field `liabilityCategory` to be a primitive type in the JSON string but got " + data['liabilityCategory']);
        }
        // ensure the json data is a string
        if (data['mainProductCode'] && !(typeof data['mainProductCode'] === 'string' || data['mainProductCode'] instanceof String)) {
            throw new Error("Expected the field `mainProductCode` to be a primitive type in the JSON string but got " + data['mainProductCode']);
        }
        // ensure the json data is a string
        if (data['parentAccountContractNumber'] && !(typeof data['parentAccountContractNumber'] === 'string' || data['parentAccountContractNumber'] instanceof String)) {
            throw new Error("Expected the field `parentAccountContractNumber` to be a primitive type in the JSON string but got " + data['parentAccountContractNumber']);
        }
        // ensure the json data is a string
        if (data['parentProductCode'] && !(typeof data['parentProductCode'] === 'string' || data['parentProductCode'] instanceof String)) {
            throw new Error("Expected the field `parentProductCode` to be a primitive type in the JSON string but got " + data['parentProductCode']);
        }
        // ensure the json data is a string
        if (data['productCode'] && !(typeof data['productCode'] === 'string' || data['productCode'] instanceof String)) {
            throw new Error("Expected the field `productCode` to be a primitive type in the JSON string but got " + data['productCode']);
        }
        // ensure the json data is a string
        if (data['productName'] && !(typeof data['productName'] === 'string' || data['productName'] instanceof String)) {
            throw new Error("Expected the field `productName` to be a primitive type in the JSON string but got " + data['productName']);
        }
        // ensure the json data is a string
        if (data['serviceGroupCode'] && !(typeof data['serviceGroupCode'] === 'string' || data['serviceGroupCode'] instanceof String)) {
            throw new Error("Expected the field `serviceGroupCode` to be a primitive type in the JSON string but got " + data['serviceGroupCode']);
        }
        // ensure the json data is a string
        if (data['serviceGroupName'] && !(typeof data['serviceGroupName'] === 'string' || data['serviceGroupName'] instanceof String)) {
            throw new Error("Expected the field `serviceGroupName` to be a primitive type in the JSON string but got " + data['serviceGroupName']);
        }
        // ensure the json data is a string
        if (data['topAccountContractNumber'] && !(typeof data['topAccountContractNumber'] === 'string' || data['topAccountContractNumber'] instanceof String)) {
            throw new Error("Expected the field `topAccountContractNumber` to be a primitive type in the JSON string but got " + data['topAccountContractNumber']);
        }

        return true;
    }


}

AccountContract.RequiredProperties = ["accountContractBalances", "accountContractId", "accountContractLevel", "accountContractNumber", "accountContractOwner", "accountContractStatusData", "billingAccountContractId", "billingAccountContractNumber", "dateOpen", "productName", "topAccountContractId", "topAccountContractNumber"];

/**
 * @member {module:model/AccountContractBalances} accountContractBalances
 */
AccountContract.prototype['accountContractBalances'] = undefined;

/**
 * Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (`POST /accounts`). 
 * @member {Number} accountContractId
 */
AccountContract.prototype['accountContractId'] = undefined;

/**
 * Contract level in the contract hierarchy. This field informs about the contract level and about the sequential number of the contract within that level.  For example, if there is one account with two cards, the system will assign:   * . - for the account contract   * .1. - for the first card contract   * .2. - for the second card contract  If there is one account with two subaccounts with cards created under subaccounts, the system will assign:   * . - for the account   * .1. - for the first subaccount contract   * .1.1. - for the first card contract   * .1.2. - for the second card contract   * .2. - for the second subaccount contract   * .2.1. - for the first card contract   * .2.2. - for the second card contract   * .2.3. - for the third card contract 
 * @member {String} accountContractLevel
 */
AccountContract.prototype['accountContractLevel'] = undefined;

/**
 * Account contract name set by the Issuer. 
 * @member {String} accountContractName
 */
AccountContract.prototype['accountContractName'] = undefined;

/**
 * Account contract identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS system so that the Issuer can distinguish between their accounts.  `accountContractNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
 * @member {String} accountContractNumber
 */
AccountContract.prototype['accountContractNumber'] = undefined;

/**
 * @member {module:model/AccountContractOwner} accountContractOwner
 */
AccountContract.prototype['accountContractOwner'] = undefined;

/**
 * @member {module:model/AccountContractStatusData} accountContractStatusData
 */
AccountContract.prototype['accountContractStatusData'] = undefined;

/**
 * Name of an account contract's subtype code which has been used during the account creation. The name may be returned even when a subtype code has not been passed by the Issuer in an account creation request. 
 * @member {String} accountContractSubtype
 */
AccountContract.prototype['accountContractSubtype'] = undefined;

/**
 * Additional tagged specified field. 
 * @member {String} additionalParameters
 */
AccountContract.prototype['additionalParameters'] = undefined;

/**
 * Date and time of the most recent change to the object (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} amendmentDate
 */
AccountContract.prototype['amendmentDate'] = undefined;

/**
 * Officer ID of the MP's CMS user who made the last change to the object. 
 * @member {Number} amendmentOfficerId
 */
AccountContract.prototype['amendmentOfficerId'] = undefined;

/**
 * Officer name of the MP's CMS user who made the last change to the object. 
 * @member {String} amendmentOfficerName
 */
AccountContract.prototype['amendmentOfficerName'] = undefined;

/**
 * Technical identifier of a billing account (the value is set by the MP's CMS). A billing account contract defines the account used for settlements and the main account in the account hierarchy. 
 * @member {Number} billingAccountContractId
 */
AccountContract.prototype['billingAccountContractId'] = undefined;

/**
 * Account contract identifier of a billing account. The value is defined in the Issuer's system and is passed to the MP's CMS during the billing account creation request (`POST /accounts`). 
 * @member {String} billingAccountContractNumber
 */
AccountContract.prototype['billingAccountContractNumber'] = undefined;

/**
 * Branch code under which a contract (an account contract or a card contract) has been created on the Issuer's side and which has been passed in a contract creation request. (`POST /accounts` or `POST /cards`). The value can be later used by the Issuer for reporting purposes. 
 * @member {String} branchCode
 */
AccountContract.prototype['branchCode'] = undefined;

/**
 * Branch name (assigned to the branch code). 
 * @member {String} branchName
 */
AccountContract.prototype['branchName'] = undefined;

/**
 * Contract identifier (for an account contract or a card contract) generated on the Issuer's side and passed to the MP's CMS in the contract creation request. (`POST /accounts` or `POST /cards`). 
 * @member {String} cbsNumber
 */
AccountContract.prototype['cbsNumber'] = undefined;

/**
 * Account contract currency (format according to ISO 4217, alphanumeric code). 
 * @member {String} currency
 */
AccountContract.prototype['currency'] = undefined;

/**
 * Account contract currency (format according to ISO 4217, numeric code). 
 * @member {String} currencyNumericCode
 */
AccountContract.prototype['currencyNumericCode'] = undefined;

/**
 * Date of contract closure (YYYY-MM-DD format). 
 * @member {Date} dateClose
 */
AccountContract.prototype['dateClose'] = undefined;

/**
 * Date of the contract record creation in the MP's CMS (YYYY-MM-DD format). 
 * @member {Date} dateOpen
 */
AccountContract.prototype['dateOpen'] = undefined;

/**
 * Payment due date for the billing cycle (YYYY-MM-DD format).  Date by which a cardholder has to repay the **Minimum To Pay** amount to avoid excess charges and delinquency processing. This date is usually printed on the cardholder's statement.  The date is calculated by the MP's CMS when a billing cycle is closed, according to the Issuer-specific configuration. Possible configuration:   * First day of the cycle (no grace days)   * Number of days (X days) after the first day of the cycle. 
 * @member {Date} dueDate
 */
AccountContract.prototype['dueDate'] = undefined;

/**
 * Contract's last billing date (the date when the last cycle was closed) (YYYY-MM-DD format). 
 * @member {Date} lastBillingDate
 */
AccountContract.prototype['lastBillingDate'] = undefined;

/**
 * The technical attribute used in the Workbench (CMS GUI) screens.  | **Possible values**  | |--------------------- | | N                    | | Y                    | 
 * @member {String} leaf
 */
AccountContract.prototype['leaf'] = undefined;

/**
 * Technical identifier (set by the MP's CMS) of a liability account contract linked to a specific account contract. An empty value means that the given account contract has not been created with liability information. 
 * @member {Number} liabilityAccountContractId
 */
AccountContract.prototype['liabilityAccountContractId'] = undefined;

/**
 * Account contract number (set by the Issuer) of a liability account contract linked to a specific account contract.  An empty value means that the given account contract has not been created with liability information. 
 * @member {String} liabilityAccountContractNumber
 */
AccountContract.prototype['liabilityAccountContractNumber'] = undefined;

/**
 * Type of relation with an upper-level Liability contract (if any).  | **Possible values**  | **Description**     | |--------------------- |-------------------- | | A                    | Only Check Balance  | | N                    | Affiliated          | | R                    | Reporting           | | Y                    | Full Liability      | 
 * @member {String} liabilityCategory
 */
AccountContract.prototype['liabilityCategory'] = undefined;

/**
 * Main Product Code. 
 * @member {String} mainProductCode
 */
AccountContract.prototype['mainProductCode'] = undefined;

/**
 * Contract's nearest billing date (in the future) (YYYY-MM-DD format). 
 * @member {Date} nextBillingDate
 */
AccountContract.prototype['nextBillingDate'] = undefined;

/**
 * Account's unique technical identifier from the MP's CMS database, which represents a parent account. The field is empty when an account is a top account. Non-empty value means the account has been created as a sub-account. 
 * @member {Number} parentAccountContractId
 */
AccountContract.prototype['parentAccountContractId'] = undefined;

/**
 * Account contract number (set by the Issuer) which represents a parent account contract. The field is empty in case a specific account contract is a top account contract. A non-empty value means that the given account contract has been created as a sub-account. 
 * @member {String} parentAccountContractNumber
 */
AccountContract.prototype['parentAccountContractNumber'] = undefined;

/**
 * Product code of the parent contract. 
 * @member {String} parentProductCode
 */
AccountContract.prototype['parentProductCode'] = undefined;

/**
 * The date on which the delinquency arose. It is set when funds are transferred from a standard account to a delinquency account.  The field is filled only when a past due balance exists (past due amount is not repaid). The date on which delinquency arises is set in the Past Due Date field when funds are transferred from a standard account to a delinquency account (format: YYYY-MM-DD) 
 * @member {Date} pastDueDate
 */
AccountContract.prototype['pastDueDate'] = undefined;

/**
 * The total number of days is calculated from `pastDueDate`. The field is filled only when a past due balance exists (past due amount is not repaid).  For example, delinquency arose on 01 March. This date is shown in the `pastDueDate` field. On 15 March, the total number of past due days shown in the Past Due Days field is 15 days. 
 * @member {Number} pastDueDays
 */
AccountContract.prototype['pastDueDays'] = undefined;

/**
 * Product code defines the configuration used for the contract creation (account or card). Product code is linked in the MP's CMS to certain parameters which define how a contract will be used (for example if it is a card contract or an account contract, a debit or a credit contract, etc.).  *Disclaimer: `productCode` is configured in the MP's CMS and the Issuer is allowed to use only the value configured by the MP (the Issuer cannot use their own value).*  In the standard product account `productCode` can be found in the Parametrization Workbook (PPW) in the *CD.1.3.003* and *CD.1.3.004* (in case of pre-embossed issuing mode). 
 * @member {String} productCode
 */
AccountContract.prototype['productCode'] = undefined;

/**
 * Name of the product code used to create contract. 
 * @member {String} productName
 */
AccountContract.prototype['productName'] = undefined;

/**
 * Service groups are an additional client and contract classifier. For example, according to additional classification, VIP clients can be distinguished as a separate group. Service groups can be used to configure various filters for viewing data or generating reports.  *Disclaimer: Please contact the MP representative should new values be required. Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP's side.* 
 * @member {String} serviceGroupCode
 */
AccountContract.prototype['serviceGroupCode'] = undefined;

/**
 * Name of a service group code which has been passed by the Issuer in an account creation request. 
 * @member {String} serviceGroupName
 */
AccountContract.prototype['serviceGroupName'] = undefined;

/**
 * Technical identifier from the MP's CMS which represents the top account contract of a specific account contract.  When an account contract is created as a top account, the value returned is the same as the technical identifier from the MP's CMS of the given account contract. 
 * @member {Number} topAccountContractId
 */
AccountContract.prototype['topAccountContractId'] = undefined;

/**
 * Contract number (set by the Issuer) which represents the top account contract of a specific account contract.  When an account contract is created as a top account, the value returned is the same as the contract name of the given account. 
 * @member {String} topAccountContractNumber
 */
AccountContract.prototype['topAccountContractNumber'] = undefined;






export default AccountContract;

