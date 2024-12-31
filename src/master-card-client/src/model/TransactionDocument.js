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
import TransactionAddInfo from './TransactionAddInfo';
import TransactionBaseInfo from './TransactionBaseInfo';
import TransactionIdentifiers from './TransactionIdentifiers';
import TransactionMerchantInfo from './TransactionMerchantInfo';
import TransactionTypeInfo from './TransactionTypeInfo';
import TransactionValues from './TransactionValues';

/**
 * The TransactionDocument model module.
 * @module model/TransactionDocument
 * @version 1.0.0
 */
class TransactionDocument {
    /**
     * Constructs a new <code>TransactionDocument</code>.
     * @alias module:model/TransactionDocument
     * @param transactionBaseInfo {module:model/TransactionBaseInfo} 
     * @param transactionTypeInfo {module:model/TransactionTypeInfo} 
     * @param transactionIdentifiers {module:model/TransactionIdentifiers} 
     */
    constructor(transactionBaseInfo, transactionTypeInfo, transactionIdentifiers) { 
        
        TransactionDocument.initialize(this, transactionBaseInfo, transactionTypeInfo, transactionIdentifiers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionBaseInfo, transactionTypeInfo, transactionIdentifiers) { 
        obj['transactionBaseInfo'] = transactionBaseInfo;
        obj['transactionTypeInfo'] = transactionTypeInfo;
        obj['transactionIdentifiers'] = transactionIdentifiers;
    }

    /**
     * Constructs a <code>TransactionDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDocument} obj Optional instance to populate.
     * @return {module:model/TransactionDocument} The populated <code>TransactionDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDocument();

            if (data.hasOwnProperty('transactionBaseInfo')) {
                obj['transactionBaseInfo'] = TransactionBaseInfo.constructFromObject(data['transactionBaseInfo']);
            }
            if (data.hasOwnProperty('transactionTypeInfo')) {
                obj['transactionTypeInfo'] = TransactionTypeInfo.constructFromObject(data['transactionTypeInfo']);
            }
            if (data.hasOwnProperty('transactionIdentifiers')) {
                obj['transactionIdentifiers'] = TransactionIdentifiers.constructFromObject(data['transactionIdentifiers']);
            }
            if (data.hasOwnProperty('transactionAddInfo')) {
                obj['transactionAddInfo'] = TransactionAddInfo.constructFromObject(data['transactionAddInfo']);
            }
            if (data.hasOwnProperty('transactionMerchantInfo')) {
                obj['transactionMerchantInfo'] = TransactionMerchantInfo.constructFromObject(data['transactionMerchantInfo']);
            }
            if (data.hasOwnProperty('transactionValues')) {
                obj['transactionValues'] = TransactionValues.constructFromObject(data['transactionValues']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDocument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDocument</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDocument.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `transactionBaseInfo`
        if (data['transactionBaseInfo']) { // data not null
          TransactionBaseInfo.validateJSON(data['transactionBaseInfo']);
        }
        // validate the optional field `transactionTypeInfo`
        if (data['transactionTypeInfo']) { // data not null
          TransactionTypeInfo.validateJSON(data['transactionTypeInfo']);
        }
        // validate the optional field `transactionIdentifiers`
        if (data['transactionIdentifiers']) { // data not null
          TransactionIdentifiers.validateJSON(data['transactionIdentifiers']);
        }
        // validate the optional field `transactionAddInfo`
        if (data['transactionAddInfo']) { // data not null
          TransactionAddInfo.validateJSON(data['transactionAddInfo']);
        }
        // validate the optional field `transactionMerchantInfo`
        if (data['transactionMerchantInfo']) { // data not null
          TransactionMerchantInfo.validateJSON(data['transactionMerchantInfo']);
        }
        // validate the optional field `transactionValues`
        if (data['transactionValues']) { // data not null
          TransactionValues.validateJSON(data['transactionValues']);
        }

        return true;
    }


}

TransactionDocument.RequiredProperties = ["transactionBaseInfo", "transactionTypeInfo", "transactionIdentifiers"];

/**
 * @member {module:model/TransactionBaseInfo} transactionBaseInfo
 */
TransactionDocument.prototype['transactionBaseInfo'] = undefined;

/**
 * @member {module:model/TransactionTypeInfo} transactionTypeInfo
 */
TransactionDocument.prototype['transactionTypeInfo'] = undefined;

/**
 * @member {module:model/TransactionIdentifiers} transactionIdentifiers
 */
TransactionDocument.prototype['transactionIdentifiers'] = undefined;

/**
 * @member {module:model/TransactionAddInfo} transactionAddInfo
 */
TransactionDocument.prototype['transactionAddInfo'] = undefined;

/**
 * @member {module:model/TransactionMerchantInfo} transactionMerchantInfo
 */
TransactionDocument.prototype['transactionMerchantInfo'] = undefined;

/**
 * @member {module:model/TransactionValues} transactionValues
 */
TransactionDocument.prototype['transactionValues'] = undefined;






export default TransactionDocument;

