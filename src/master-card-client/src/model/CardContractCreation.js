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
import CardContractData from './CardContractData';
import CustomDataTag from './CustomDataTag';

/**
 * The CardContractCreation model module.
 * @module model/CardContractCreation
 * @version 1.0.0
 */
class CardContractCreation {
    /**
     * Constructs a new <code>CardContractCreation</code>.
     * @alias module:model/CardContractCreation
     * @param accountContractId {Number} Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (`POST /accounts`). 
     * @param cardContract {module:model/CardContractData} 
     */
    constructor(accountContractId, cardContract) { 
        
        CardContractCreation.initialize(this, accountContractId, cardContract);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountContractId, cardContract) { 
        obj['accountContractId'] = accountContractId;
        obj['cardContract'] = cardContract;
    }

    /**
     * Constructs a <code>CardContractCreation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardContractCreation} obj Optional instance to populate.
     * @return {module:model/CardContractCreation} The populated <code>CardContractCreation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardContractCreation();

            if (data.hasOwnProperty('accountContractId')) {
                obj['accountContractId'] = ApiClient.convertToType(data['accountContractId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('cardContract')) {
                obj['cardContract'] = CardContractData.constructFromObject(data['cardContract']);
            }
            if (data.hasOwnProperty('cardContractCustomData')) {
                obj['cardContractCustomData'] = ApiClient.convertToType(data['cardContractCustomData'], [CustomDataTag]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CardContractCreation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CardContractCreation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CardContractCreation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `cardContract`
        if (data['cardContract']) { // data not null
          CardContractData.validateJSON(data['cardContract']);
        }
        if (data['cardContractCustomData']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cardContractCustomData'])) {
                throw new Error("Expected the field `cardContractCustomData` to be an array in the JSON data but got " + data['cardContractCustomData']);
            }
            // validate the optional field `cardContractCustomData` (array)
            for (const item of data['cardContractCustomData']) {
                CustomDataTag.validateJSON(item);
            };
        }

        return true;
    }


}

CardContractCreation.RequiredProperties = ["accountContractId", "cardContract"];

/**
 * Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (`POST /accounts`). 
 * @member {Number} accountContractId
 */
CardContractCreation.prototype['accountContractId'] = undefined;

/**
 * A unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation is completed successfully and is returned in a client creation response (`POST /clients`). 
 * @member {Number} clientId
 */
CardContractCreation.prototype['clientId'] = undefined;

/**
 * @member {module:model/CardContractData} cardContract
 */
CardContractCreation.prototype['cardContract'] = undefined;

/**
 * Contract custom data allow the Issuer to pass specific contract tags during the creation request. The tags may represent Issuer-specific field names and values, not available as separate, dedicated fields. The Issuer can specify a tag name and its value.  Custom data tags are stored in fixed containers (four containers are available) in a TAG=VALUE; format (for example: CATEGORY=A;GROUP=G1;).  Each container has a length of 255 characters. 
 * @member {Array.<module:model/CustomDataTag>} cardContractCustomData
 */
CardContractCreation.prototype['cardContractCustomData'] = undefined;






export default CardContractCreation;

