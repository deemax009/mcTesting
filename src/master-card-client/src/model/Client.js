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
import BaseClient from './BaseClient';
import ClientBaseAddressData from './ClientBaseAddressData';
import ClientCompanyData from './ClientCompanyData';
import ClientContactData from './ClientContactData';
import ClientIdentificationData from './ClientIdentificationData';
import ClientPersonalData from './ClientPersonalData';
import EmbossedData from './EmbossedData';

/**
 * The Client model module.
 * @module model/Client
 * @version 1.0.0
 */
class Client {
    /**
     * Constructs a new <code>Client</code>.
     * @alias module:model/Client
     * @implements module:model/BaseClient
     * @param clientId {Number} A unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation is completed successfully and is returned in a client creation response (`POST /clients`). 
     * @param clientNumber {String} Client's identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS so that - apart from the technical identifier `clientId` - the Issuer can distinguish between their customers.  `clientNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
     */
    constructor(clientId, clientNumber) { 
        BaseClient.initialize(this);
        Client.initialize(this, clientId, clientNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId, clientNumber) { 
        obj['clientId'] = clientId;
        obj['clientNumber'] = clientNumber;
    }

    /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Client} obj Optional instance to populate.
     * @return {module:model/Client} The populated <code>Client</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Client();
            BaseClient.constructFromObject(data, obj);

            if (data.hasOwnProperty('additionalDate01')) {
                obj['additionalDate01'] = ApiClient.convertToType(data['additionalDate01'], 'Date');
            }
            if (data.hasOwnProperty('additionalDate02')) {
                obj['additionalDate02'] = ApiClient.convertToType(data['additionalDate02'], 'Date');
            }
            if (data.hasOwnProperty('clientBaseAddressData')) {
                obj['clientBaseAddressData'] = ClientBaseAddressData.constructFromObject(data['clientBaseAddressData']);
            }
            if (data.hasOwnProperty('clientCompanyData')) {
                obj['clientCompanyData'] = ClientCompanyData.constructFromObject(data['clientCompanyData']);
            }
            if (data.hasOwnProperty('clientContactData')) {
                obj['clientContactData'] = ClientContactData.constructFromObject(data['clientContactData']);
            }
            if (data.hasOwnProperty('clientIdentificationData')) {
                obj['clientIdentificationData'] = ClientIdentificationData.constructFromObject(data['clientIdentificationData']);
            }
            if (data.hasOwnProperty('clientPersonalData')) {
                obj['clientPersonalData'] = ClientPersonalData.constructFromObject(data['clientPersonalData']);
            }
            if (data.hasOwnProperty('clientExpiryDate')) {
                obj['clientExpiryDate'] = ApiClient.convertToType(data['clientExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('embossedData')) {
                obj['embossedData'] = EmbossedData.constructFromObject(data['embossedData']);
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
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientNumber')) {
                obj['clientNumber'] = ApiClient.convertToType(data['clientNumber'], 'String');
            }
            if (data.hasOwnProperty('clientType')) {
                obj['clientType'] = ApiClient.convertToType(data['clientType'], 'String');
            }
            if (data.hasOwnProperty('dateOpen')) {
                obj['dateOpen'] = ApiClient.convertToType(data['dateOpen'], 'Date');
            }
            if (data.hasOwnProperty('orderDepartment')) {
                obj['orderDepartment'] = ApiClient.convertToType(data['orderDepartment'], 'String');
            }
            if (data.hasOwnProperty('serviceGroupCode')) {
                obj['serviceGroupCode'] = ApiClient.convertToType(data['serviceGroupCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Client</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Client</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Client.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `clientBaseAddressData`
        if (data['clientBaseAddressData']) { // data not null
          ClientBaseAddressData.validateJSON(data['clientBaseAddressData']);
        }
        // validate the optional field `clientCompanyData`
        if (data['clientCompanyData']) { // data not null
          ClientCompanyData.validateJSON(data['clientCompanyData']);
        }
        // validate the optional field `clientContactData`
        if (data['clientContactData']) { // data not null
          ClientContactData.validateJSON(data['clientContactData']);
        }
        // validate the optional field `clientIdentificationData`
        if (data['clientIdentificationData']) { // data not null
          ClientIdentificationData.validateJSON(data['clientIdentificationData']);
        }
        // validate the optional field `clientPersonalData`
        if (data['clientPersonalData']) { // data not null
          ClientPersonalData.validateJSON(data['clientPersonalData']);
        }
        // validate the optional field `embossedData`
        if (data['embossedData']) { // data not null
          EmbossedData.validateJSON(data['embossedData']);
        }
        // ensure the json data is a string
        if (data['amendmentOfficerName'] && !(typeof data['amendmentOfficerName'] === 'string' || data['amendmentOfficerName'] instanceof String)) {
            throw new Error("Expected the field `amendmentOfficerName` to be a primitive type in the JSON string but got " + data['amendmentOfficerName']);
        }
        // ensure the json data is a string
        if (data['clientNumber'] && !(typeof data['clientNumber'] === 'string' || data['clientNumber'] instanceof String)) {
            throw new Error("Expected the field `clientNumber` to be a primitive type in the JSON string but got " + data['clientNumber']);
        }
        // ensure the json data is a string
        if (data['clientType'] && !(typeof data['clientType'] === 'string' || data['clientType'] instanceof String)) {
            throw new Error("Expected the field `clientType` to be a primitive type in the JSON string but got " + data['clientType']);
        }
        // ensure the json data is a string
        if (data['orderDepartment'] && !(typeof data['orderDepartment'] === 'string' || data['orderDepartment'] instanceof String)) {
            throw new Error("Expected the field `orderDepartment` to be a primitive type in the JSON string but got " + data['orderDepartment']);
        }
        // ensure the json data is a string
        if (data['serviceGroupCode'] && !(typeof data['serviceGroupCode'] === 'string' || data['serviceGroupCode'] instanceof String)) {
            throw new Error("Expected the field `serviceGroupCode` to be a primitive type in the JSON string but got " + data['serviceGroupCode']);
        }

        return true;
    }


}

Client.RequiredProperties = ["clientId", "clientNumber"];

/**
 * Additional date to meet the Issuer's individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} additionalDate01
 */
Client.prototype['additionalDate01'] = undefined;

/**
 * Additional date to meet the Issuer's individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} additionalDate02
 */
Client.prototype['additionalDate02'] = undefined;

/**
 * @member {module:model/ClientBaseAddressData} clientBaseAddressData
 */
Client.prototype['clientBaseAddressData'] = undefined;

/**
 * @member {module:model/ClientCompanyData} clientCompanyData
 */
Client.prototype['clientCompanyData'] = undefined;

/**
 * @member {module:model/ClientContactData} clientContactData
 */
Client.prototype['clientContactData'] = undefined;

/**
 * @member {module:model/ClientIdentificationData} clientIdentificationData
 */
Client.prototype['clientIdentificationData'] = undefined;

/**
 * @member {module:model/ClientPersonalData} clientPersonalData
 */
Client.prototype['clientPersonalData'] = undefined;

/**
 * Date of client expiration (YYYY-MM-DD format). When the date is met in the MP's CMS, the Issuer will not be able to create new account contracts or new cards for the client. 
 * @member {Date} clientExpiryDate
 */
Client.prototype['clientExpiryDate'] = undefined;

/**
 * @member {module:model/EmbossedData} embossedData
 */
Client.prototype['embossedData'] = undefined;

/**
 * Date and time of the most recent change to the object (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} amendmentDate
 */
Client.prototype['amendmentDate'] = undefined;

/**
 * Officer ID of the MP's CMS user who made the last change to the object. 
 * @member {Number} amendmentOfficerId
 */
Client.prototype['amendmentOfficerId'] = undefined;

/**
 * Officer name of the MP's CMS user who made the last change to the object. 
 * @member {String} amendmentOfficerName
 */
Client.prototype['amendmentOfficerName'] = undefined;

/**
 * A unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation is completed successfully and is returned in a client creation response (`POST /clients`). 
 * @member {Number} clientId
 */
Client.prototype['clientId'] = undefined;

/**
 * Client's identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS so that - apart from the technical identifier `clientId` - the Issuer can distinguish between their customers.  `clientNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
 * @member {String} clientNumber
 */
Client.prototype['clientNumber'] = undefined;

/**
 * Client type.  | **Possible values**  | **Description**        | |--------------------- |----------------------- | | PNR                  | Private NonResident    | | PR                   | Private Resident       | | CR                   | Corporate Resident     | | CNR                  | Corporate NonResident  |  Notes:   * The field cannot be freely used because the client type has an impact on many CMS internal procedures. The Issuer must always agree with the MP which value should be used (in most cases \"PR\" is the default value)   * Please contact the MP representative should a value different than \"PR\" be needed, as using it requires configuration on the MP's side. 
 * @member {String} clientType
 */
Client.prototype['clientType'] = undefined;

/**
 * Date of the contract record creation in the MP's CMS (YYYY-MM-DD format). 
 * @member {Date} dateOpen
 */
Client.prototype['dateOpen'] = undefined;

/**
 * Department accepting the creation request on the Issuer's side. The value can be later used by the Issuer for reporting purposes.  *Disclaimer: Please contact MP's representative should new values be required.* Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP's side. 
 * @member {String} orderDepartment
 */
Client.prototype['orderDepartment'] = undefined;

/**
 * Service groups are an additional client and contract classifier. For example, according to additional classification, VIP clients can be distinguished as a separate group. Service groups can be used to configure various filters for viewing data or generating reports.  *Disclaimer: Please contact the MP representative should new values be required. Available values will need to be agreed upon by the MP and the Issuer prior to the onboarding process as they need to be configured on the MP's side.* 
 * @member {String} serviceGroupCode
 */
Client.prototype['serviceGroupCode'] = undefined;


// Implement BaseClient interface:
/**
 * Additional date to meet the Issuer's individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} additionalDate01
 */
BaseClient.prototype['additionalDate01'] = undefined;
/**
 * Additional date to meet the Issuer's individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} additionalDate02
 */
BaseClient.prototype['additionalDate02'] = undefined;
/**
 * @member {module:model/ClientBaseAddressData} clientBaseAddressData
 */
BaseClient.prototype['clientBaseAddressData'] = undefined;
/**
 * @member {module:model/ClientCompanyData} clientCompanyData
 */
BaseClient.prototype['clientCompanyData'] = undefined;
/**
 * @member {module:model/ClientContactData} clientContactData
 */
BaseClient.prototype['clientContactData'] = undefined;
/**
 * @member {module:model/ClientIdentificationData} clientIdentificationData
 */
BaseClient.prototype['clientIdentificationData'] = undefined;
/**
 * @member {module:model/ClientPersonalData} clientPersonalData
 */
BaseClient.prototype['clientPersonalData'] = undefined;
/**
 * Date of client expiration (YYYY-MM-DD format). When the date is met in the MP's CMS, the Issuer will not be able to create new account contracts or new cards for the client. 
 * @member {Date} clientExpiryDate
 */
BaseClient.prototype['clientExpiryDate'] = undefined;
/**
 * @member {module:model/EmbossedData} embossedData
 */
BaseClient.prototype['embossedData'] = undefined;




export default Client;

