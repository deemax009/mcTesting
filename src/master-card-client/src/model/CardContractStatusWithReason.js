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
 * The CardContractStatusWithReason model module.
 * @module model/CardContractStatusWithReason
 * @version 1.0.0
 */
class CardContractStatusWithReason {
    /**
     * Constructs a new <code>CardContractStatusWithReason</code>.
     * @alias module:model/CardContractStatusWithReason
     * @param statusCode {String} Card status code. The codes are configured in the MP's CMS for each Issuer.  | **Possible values**  | **Description**                                                                   | |--------------------- |---------------------------------------------------------------------------------- | | 00                   | Card is active and ready for use                                                  | | 04                   | Used for cards blocked due to Issuer's reasons (permanent status)                 | | 05                   | Card does not honour (temporary status)                                           | | 41                   | Card was lost (permanent status)                                                  | | 43                   | Card was stolen (permanent status)                                                | | 57                   | Card was deactivated on Issuer's request (permanent status)                       | | 59                   | Suspected fraud (temporary status). Usually set on Issuer's request               |   *Disclaimer: Please contact the MP representative in case other status codes are necessary.* 
     */
    constructor(statusCode) { 
        
        CardContractStatusWithReason.initialize(this, statusCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, statusCode) { 
        obj['statusCode'] = statusCode;
    }

    /**
     * Constructs a <code>CardContractStatusWithReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardContractStatusWithReason} obj Optional instance to populate.
     * @return {module:model/CardContractStatusWithReason} The populated <code>CardContractStatusWithReason</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardContractStatusWithReason();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CardContractStatusWithReason</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CardContractStatusWithReason</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CardContractStatusWithReason.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['statusCode'] && !(typeof data['statusCode'] === 'string' || data['statusCode'] instanceof String)) {
            throw new Error("Expected the field `statusCode` to be a primitive type in the JSON string but got " + data['statusCode']);
        }

        return true;
    }


}

CardContractStatusWithReason.RequiredProperties = ["statusCode"];

/**
 * Free text describing the reason for status change. 
 * @member {String} reason
 */
CardContractStatusWithReason.prototype['reason'] = undefined;

/**
 * Card status code. The codes are configured in the MP's CMS for each Issuer.  | **Possible values**  | **Description**                                                                   | |--------------------- |---------------------------------------------------------------------------------- | | 00                   | Card is active and ready for use                                                  | | 04                   | Used for cards blocked due to Issuer's reasons (permanent status)                 | | 05                   | Card does not honour (temporary status)                                           | | 41                   | Card was lost (permanent status)                                                  | | 43                   | Card was stolen (permanent status)                                                | | 57                   | Card was deactivated on Issuer's request (permanent status)                       | | 59                   | Suspected fraud (temporary status). Usually set on Issuer's request               |   *Disclaimer: Please contact the MP representative in case other status codes are necessary.* 
 * @member {String} statusCode
 */
CardContractStatusWithReason.prototype['statusCode'] = undefined;






export default CardContractStatusWithReason;
