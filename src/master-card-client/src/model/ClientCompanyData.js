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
 * The ClientCompanyData model module.
 * @module model/ClientCompanyData
 * @version 1.0.0
 */
class ClientCompanyData {
    /**
     * Constructs a new <code>ClientCompanyData</code>.
     * The client&#39;s company object represents a repository where the Issuer can store information on what company the client belongs to. 
     * @alias module:model/ClientCompanyData
     */
    constructor() { 
        
        ClientCompanyData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientCompanyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientCompanyData} obj Optional instance to populate.
     * @return {module:model/ClientCompanyData} The populated <code>ClientCompanyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientCompanyData();

            if (data.hasOwnProperty('companyDepartment')) {
                obj['companyDepartment'] = ApiClient.convertToType(data['companyDepartment'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('companyTradeName')) {
                obj['companyTradeName'] = ApiClient.convertToType(data['companyTradeName'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClientCompanyData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClientCompanyData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['companyDepartment'] && !(typeof data['companyDepartment'] === 'string' || data['companyDepartment'] instanceof String)) {
            throw new Error("Expected the field `companyDepartment` to be a primitive type in the JSON string but got " + data['companyDepartment']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['companyTradeName'] && !(typeof data['companyTradeName'] === 'string' || data['companyTradeName'] instanceof String)) {
            throw new Error("Expected the field `companyTradeName` to be a primitive type in the JSON string but got " + data['companyTradeName']);
        }
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }

        return true;
    }


}



/**
 * Company department name. 
 * @member {String} companyDepartment
 */
ClientCompanyData.prototype['companyDepartment'] = undefined;

/**
 * Company name. 
 * @member {String} companyName
 */
ClientCompanyData.prototype['companyName'] = undefined;

/**
 * Company trade name. 
 * @member {String} companyTradeName
 */
ClientCompanyData.prototype['companyTradeName'] = undefined;

/**
 * Client's position in their company. 
 * @member {String} position
 */
ClientCompanyData.prototype['position'] = undefined;






export default ClientCompanyData;
