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
 * The OnlinePinAttemptsClearanceForClient model module.
 * @module model/OnlinePinAttemptsClearanceForClient
 * @version 1.0.0
 */
class OnlinePinAttemptsClearanceForClient {
    /**
     * Constructs a new <code>OnlinePinAttemptsClearanceForClient</code>.
     * @alias module:model/OnlinePinAttemptsClearanceForClient
     * @param clearAttemptsOnClientCards {Boolean} This field must be always `true`. Flag determines if the reset of PIN attempts will happen only on the client or also on all client cards. 
     */
    constructor(clearAttemptsOnClientCards) { 
        
        OnlinePinAttemptsClearanceForClient.initialize(this, clearAttemptsOnClientCards);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clearAttemptsOnClientCards) { 
        obj['clearAttemptsOnClientCards'] = clearAttemptsOnClientCards;
    }

    /**
     * Constructs a <code>OnlinePinAttemptsClearanceForClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnlinePinAttemptsClearanceForClient} obj Optional instance to populate.
     * @return {module:model/OnlinePinAttemptsClearanceForClient} The populated <code>OnlinePinAttemptsClearanceForClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnlinePinAttemptsClearanceForClient();

            if (data.hasOwnProperty('clearAttemptsOnClientCards')) {
                obj['clearAttemptsOnClientCards'] = ApiClient.convertToType(data['clearAttemptsOnClientCards'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OnlinePinAttemptsClearanceForClient</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OnlinePinAttemptsClearanceForClient</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OnlinePinAttemptsClearanceForClient.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

OnlinePinAttemptsClearanceForClient.RequiredProperties = ["clearAttemptsOnClientCards"];

/**
 * This field must be always `true`. Flag determines if the reset of PIN attempts will happen only on the client or also on all client cards. 
 * @member {Boolean} clearAttemptsOnClientCards
 */
OnlinePinAttemptsClearanceForClient.prototype['clearAttemptsOnClientCards'] = undefined;






export default OnlinePinAttemptsClearanceForClient;

