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
 * The AccountContractStatusData model module.
 * @module model/AccountContractStatusData
 * @version 1.0.0
 */
class AccountContractStatusData {
    /**
     * Constructs a new <code>AccountContractStatusData</code>.
     * @alias module:model/AccountContractStatusData
     */
    constructor() { 
        
        AccountContractStatusData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountContractStatusData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountContractStatusData} obj Optional instance to populate.
     * @return {module:model/AccountContractStatusData} The populated <code>AccountContractStatusData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountContractStatusData();

            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'String');
            }
            if (data.hasOwnProperty('statusName')) {
                obj['statusName'] = ApiClient.convertToType(data['statusName'], 'String');
            }
            if (data.hasOwnProperty('externalStatusCode')) {
                obj['externalStatusCode'] = ApiClient.convertToType(data['externalStatusCode'], 'String');
            }
            if (data.hasOwnProperty('externalStatusName')) {
                obj['externalStatusName'] = ApiClient.convertToType(data['externalStatusName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountContractStatusData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountContractStatusData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['statusCode'] && !(typeof data['statusCode'] === 'string' || data['statusCode'] instanceof String)) {
            throw new Error("Expected the field `statusCode` to be a primitive type in the JSON string but got " + data['statusCode']);
        }
        // ensure the json data is a string
        if (data['statusName'] && !(typeof data['statusName'] === 'string' || data['statusName'] instanceof String)) {
            throw new Error("Expected the field `statusName` to be a primitive type in the JSON string but got " + data['statusName']);
        }
        // ensure the json data is a string
        if (data['externalStatusCode'] && !(typeof data['externalStatusCode'] === 'string' || data['externalStatusCode'] instanceof String)) {
            throw new Error("Expected the field `externalStatusCode` to be a primitive type in the JSON string but got " + data['externalStatusCode']);
        }
        // ensure the json data is a string
        if (data['externalStatusName'] && !(typeof data['externalStatusName'] === 'string' || data['externalStatusName'] instanceof String)) {
            throw new Error("Expected the field `externalStatusName` to be a primitive type in the JSON string but got " + data['externalStatusName']);
        }

        return true;
    }


}



/**
 * Account contract status. The full list will be defined by the Issuer and MP during the onboarding process as they must be configured in the CMS.  The generic solution allows the following account contract statuses: | **Possible values**  | **Description**                                                                      | |--------------------- |------------------------------------------------------------------------------------- | | 00                   | Account contract is active and ready for use                                         | | 00c                  | Account contract closure procedure was initiated and is ongoing (transition period)  | | 14                   | Final stats of account contract's lifecycle. Set automatically by the CMS            |  *Disclaimer: please contact the MP representative should other codes be necessary.* 
 * @member {String} statusCode
 */
AccountContractStatusData.prototype['statusCode'] = undefined;

/**
 * Account contract status name. Name assigned in the CMS system to the `statusCode`. 
 * @member {String} statusName
 */
AccountContractStatusData.prototype['statusName'] = undefined;

/**
 * Contract status code agreed with the Issuer according to the external system requirements. The MP's CMS configuration allows many external status codes to be assigned to the same `statusCode`. 
 * @member {String} externalStatusCode
 */
AccountContractStatusData.prototype['externalStatusCode'] = undefined;

/**
 * External status name. 
 * @member {String} externalStatusName
 */
AccountContractStatusData.prototype['externalStatusName'] = undefined;






export default AccountContractStatusData;

