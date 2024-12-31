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
import TransactionCustomData from './TransactionCustomData';

/**
 * The TransactionContractCredit model module.
 * @module model/TransactionContractCredit
 * @version 1.0.0
 */
class TransactionContractCredit {
    /**
     * Constructs a new <code>TransactionContractCredit</code>.
     * @alias module:model/TransactionContractCredit
     * @param amount {Number} Transaction amount.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
     * @param currency {String} Transaction currency (format according to ISO 4217, alphanumeric code). 
     * @param description {String} Transaction description. In the CMS system stored and exported as merchant name. 
     * @param transactionTypeCode {String} Transaction type code which can be used must be configured in the MP's CMS. 
     */
    constructor(amount, currency, description, transactionTypeCode) { 
        
        TransactionContractCredit.initialize(this, amount, currency, description, transactionTypeCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currency, description, transactionTypeCode) { 
        obj['amount'] = amount;
        obj['currency'] = currency;
        obj['description'] = description;
        obj['transactionTypeCode'] = transactionTypeCode;
    }

    /**
     * Constructs a <code>TransactionContractCredit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionContractCredit} obj Optional instance to populate.
     * @return {module:model/TransactionContractCredit} The populated <code>TransactionContractCredit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionContractCredit();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('customData')) {
                obj['customData'] = ApiClient.convertToType(data['customData'], [TransactionCustomData]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('feeCode')) {
                obj['feeCode'] = ApiClient.convertToType(data['feeCode'], 'String');
            }
            if (data.hasOwnProperty('postingDate')) {
                obj['postingDate'] = ApiClient.convertToType(data['postingDate'], 'Date');
            }
            if (data.hasOwnProperty('transactionTypeCode')) {
                obj['transactionTypeCode'] = ApiClient.convertToType(data['transactionTypeCode'], 'String');
            }
            if (data.hasOwnProperty('transactionTypeExtension')) {
                obj['transactionTypeExtension'] = ApiClient.convertToType(data['transactionTypeExtension'], 'String');
            }
            if (data.hasOwnProperty('uniqueReferenceNumber')) {
                obj['uniqueReferenceNumber'] = ApiClient.convertToType(data['uniqueReferenceNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionContractCredit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionContractCredit</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionContractCredit.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
                TransactionCustomData.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['feeCode'] && !(typeof data['feeCode'] === 'string' || data['feeCode'] instanceof String)) {
            throw new Error("Expected the field `feeCode` to be a primitive type in the JSON string but got " + data['feeCode']);
        }
        // ensure the json data is a string
        if (data['transactionTypeCode'] && !(typeof data['transactionTypeCode'] === 'string' || data['transactionTypeCode'] instanceof String)) {
            throw new Error("Expected the field `transactionTypeCode` to be a primitive type in the JSON string but got " + data['transactionTypeCode']);
        }
        // ensure the json data is a string
        if (data['transactionTypeExtension'] && !(typeof data['transactionTypeExtension'] === 'string' || data['transactionTypeExtension'] instanceof String)) {
            throw new Error("Expected the field `transactionTypeExtension` to be a primitive type in the JSON string but got " + data['transactionTypeExtension']);
        }
        // ensure the json data is a string
        if (data['uniqueReferenceNumber'] && !(typeof data['uniqueReferenceNumber'] === 'string' || data['uniqueReferenceNumber'] instanceof String)) {
            throw new Error("Expected the field `uniqueReferenceNumber` to be a primitive type in the JSON string but got " + data['uniqueReferenceNumber']);
        }

        return true;
    }


}

TransactionContractCredit.RequiredProperties = ["amount", "currency", "description", "transactionTypeCode"];

/**
 * Transaction amount.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} amount
 */
TransactionContractCredit.prototype['amount'] = undefined;

/**
 * Transaction currency (format according to ISO 4217, alphanumeric code). 
 * @member {String} currency
 */
TransactionContractCredit.prototype['currency'] = undefined;

/**
 * The Field allows passing additional information to the created transaction record. Should be sent as: TAG_01=TAG_01_VALUE;TAG_02=TAG_02_VALUE;  Max length of tag name: 32, max length of tag value: 32. Total max length: 255 The tag name and the tag value should not contain characters ['=', ';', ' ']. 
 * @member {Array.<module:model/TransactionCustomData>} customData
 */
TransactionContractCredit.prototype['customData'] = undefined;

/**
 * Transaction description. In the CMS system stored and exported as merchant name. 
 * @member {String} description
 */
TransactionContractCredit.prototype['description'] = undefined;

/**
 * Fee code of the fee which should be applied for transaction.  *Disclaimer: Fee code which can be used must be configured in the MP's CMS.* 
 * @member {String} feeCode
 */
TransactionContractCredit.prototype['feeCode'] = undefined;

/**
 * Transaction posting date (YYYY-MM-DD format). If not filled the sysdate will be placed in the field. 
 * @member {Date} postingDate
 */
TransactionContractCredit.prototype['postingDate'] = undefined;

/**
 * Transaction type code which can be used must be configured in the MP's CMS. 
 * @member {String} transactionTypeCode
 */
TransactionContractCredit.prototype['transactionTypeCode'] = undefined;

/**
 * Transaction type extensions make it possible to more exactly determine the service that should be used to process a transaction. Transaction type extension is defined on transaction type configuration. 
 * @member {String} transactionTypeExtension
 */
TransactionContractCredit.prototype['transactionTypeExtension'] = undefined;

/**
 * Unique reference number for the transaction. If filled system will check the uniqueness of this value. It will not be possible to create two records with the same value. Exported as SRN (Source Reference Number). 
 * @member {String} uniqueReferenceNumber
 */
TransactionContractCredit.prototype['uniqueReferenceNumber'] = undefined;






export default TransactionContractCredit;

