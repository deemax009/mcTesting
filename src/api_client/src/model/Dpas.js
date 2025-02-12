/**
 * Mastercard Checkout Solutions Merchant Registration API
 * Registration APIs for Mastercard Checkout Solutions to submit new DPA data or check status of an existing uploaded batch
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
import AcquirerData from './AcquirerData';
import DpaData from './DpaData';
import ThreeDSDefaultData from './ThreeDSDefaultData';

/**
 * The Dpas model module.
 * @module model/Dpas
 * @version 1.0.0
 */
class Dpas {
    /**
     * Constructs a new <code>Dpas</code>.
     * @alias module:model/Dpas
     * @param srcDpaId {String}  The registered identifier for the Digital Payment Application (DPA) accessing the service. At least one DPA needs to be registered for each Merchant/Merchant OBO/Sub-Merchant (PF) needed, with additional DPAs being added as required.  Conditional: Required if you are a Merchant directly integrating with Mastercard Checkout Solutions (MCS) APIs, a Payment Service Provider (PSP) integrating On-Behalf-Of (OBO) a Merchant, a Payment Facilitator, or if you are enrolling in the Secure Card on File (SCOF) QR program. 
     */
    constructor(srcDpaId) { 
        
        Dpas.initialize(this, srcDpaId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, srcDpaId) { 
        obj['srcDpaId'] = srcDpaId;
    }

    /**
     * Constructs a <code>Dpas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dpas} obj Optional instance to populate.
     * @return {module:model/Dpas} The populated <code>Dpas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dpas();

            if (data.hasOwnProperty('srcDpaId')) {
                obj['srcDpaId'] = ApiClient.convertToType(data['srcDpaId'], 'String');
            }
            if (data.hasOwnProperty('hasAcquirerRelationship')) {
                obj['hasAcquirerRelationship'] = ApiClient.convertToType(data['hasAcquirerRelationship'], 'String');
            }
            if (data.hasOwnProperty('subMerchantId')) {
                obj['subMerchantId'] = ApiClient.convertToType(data['subMerchantId'], 'String');
            }
            if (data.hasOwnProperty('paymentFacilitatorId')) {
                obj['paymentFacilitatorId'] = ApiClient.convertToType(data['paymentFacilitatorId'], 'String');
            }
            if (data.hasOwnProperty('dpaData')) {
                obj['dpaData'] = DpaData.constructFromObject(data['dpaData']);
            }
            if (data.hasOwnProperty('debitTokenRequested')) {
                obj['debitTokenRequested'] = ApiClient.convertToType(data['debitTokenRequested'], 'Boolean');
            }
            if (data.hasOwnProperty('merchantCategoryCodes')) {
                obj['merchantCategoryCodes'] = ApiClient.convertToType(data['merchantCategoryCodes'], ['String']);
            }
            if (data.hasOwnProperty('threeDSDefaultdata')) {
                obj['threeDSDefaultdata'] = ThreeDSDefaultData.constructFromObject(data['threeDSDefaultdata']);
            }
            if (data.hasOwnProperty('acquirerData')) {
                obj['acquirerData'] = ApiClient.convertToType(data['acquirerData'], [AcquirerData]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Dpas</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Dpas</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Dpas.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['srcDpaId'] && !(typeof data['srcDpaId'] === 'string' || data['srcDpaId'] instanceof String)) {
            throw new Error("Expected the field `srcDpaId` to be a primitive type in the JSON string but got " + data['srcDpaId']);
        }
        // ensure the json data is a string
        if (data['hasAcquirerRelationship'] && !(typeof data['hasAcquirerRelationship'] === 'string' || data['hasAcquirerRelationship'] instanceof String)) {
            throw new Error("Expected the field `hasAcquirerRelationship` to be a primitive type in the JSON string but got " + data['hasAcquirerRelationship']);
        }
        // ensure the json data is a string
        if (data['subMerchantId'] && !(typeof data['subMerchantId'] === 'string' || data['subMerchantId'] instanceof String)) {
            throw new Error("Expected the field `subMerchantId` to be a primitive type in the JSON string but got " + data['subMerchantId']);
        }
        // ensure the json data is a string
        if (data['paymentFacilitatorId'] && !(typeof data['paymentFacilitatorId'] === 'string' || data['paymentFacilitatorId'] instanceof String)) {
            throw new Error("Expected the field `paymentFacilitatorId` to be a primitive type in the JSON string but got " + data['paymentFacilitatorId']);
        }
        // validate the optional field `dpaData`
        if (data['dpaData']) { // data not null
          DpaData.validateJSON(data['dpaData']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['merchantCategoryCodes'])) {
            throw new Error("Expected the field `merchantCategoryCodes` to be an array in the JSON data but got " + data['merchantCategoryCodes']);
        }
        // validate the optional field `threeDSDefaultdata`
        if (data['threeDSDefaultdata']) { // data not null
          ThreeDSDefaultData.validateJSON(data['threeDSDefaultdata']);
        }
        if (data['acquirerData']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['acquirerData'])) {
                throw new Error("Expected the field `acquirerData` to be an array in the JSON data but got " + data['acquirerData']);
            }
            // validate the optional field `acquirerData` (array)
            for (const item of data['acquirerData']) {
                AcquirerData.validateJSON(item);
            };
        }

        return true;
    }


}

Dpas.RequiredProperties = ["srcDpaId"];

/**
 *  The registered identifier for the Digital Payment Application (DPA) accessing the service. At least one DPA needs to be registered for each Merchant/Merchant OBO/Sub-Merchant (PF) needed, with additional DPAs being added as required.  Conditional: Required if you are a Merchant directly integrating with Mastercard Checkout Solutions (MCS) APIs, a Payment Service Provider (PSP) integrating On-Behalf-Of (OBO) a Merchant, a Payment Facilitator, or if you are enrolling in the Secure Card on File (SCOF) QR program. 
 * @member {String} srcDpaId
 */
Dpas.prototype['srcDpaId'] = undefined;

/**
 * Indicates if the Digital Payment Application (DPA) has an Acquirer relationship. This field may be used to improve acceptance rates.
 * @member {module:model/Dpas.HasAcquirerRelationshipEnum} hasAcquirerRelationship
 */
Dpas.prototype['hasAcquirerRelationship'] = undefined;

/**
 * Identifier assigned to a Sub-Merchant by the Payment Facilitator (PF). This field may be used to improve transaction security and acceptance rates.
 * @member {String} subMerchantId
 */
Dpas.prototype['subMerchantId'] = undefined;

/**
 * Payment Facilitator (PF) identifier that may be used to improve transaction security and acceptance rates.
 * @member {String} paymentFacilitatorId
 */
Dpas.prototype['paymentFacilitatorId'] = undefined;

/**
 * @member {module:model/DpaData} dpaData
 */
Dpas.prototype['dpaData'] = undefined;

/**
 * Conditional: Must be set to true when the Digital Payment Application (DPA) processes in the United States (US) under the Click to Pay (C2P) program. 
 * @member {Boolean} debitTokenRequested
 */
Dpas.prototype['debitTokenRequested'] = undefined;

/**
 * Object for the array of Merchant Category Codes (MCC) that the Merchant processes transactions under, and is used for risk-scoring transactions by the issuer. All MCC codes that will be processed by a DPA should be provided here (typically, this will be a single item).  An MCC is a four-character code assigned by Mastercard to the Merchant that indicates the type of business, service, or product provided by the Merchant.  Note: MCC's may be assigned differently across payment networks. To avoid errors, be sure to use your assigned Mastercard MCC. This code is required for 3-D Secure (3DS) and risk profiling. If the Merchant has more than one MCC, the code most relevant to their business should be used. 
 * @member {Array.<String>} merchantCategoryCodes
 */
Dpas.prototype['merchantCategoryCodes'] = undefined;

/**
 * @member {module:model/ThreeDSDefaultData} threeDSDefaultdata
 */
Dpas.prototype['threeDSDefaultdata'] = undefined;

/**
 * @member {Array.<module:model/AcquirerData>} acquirerData
 */
Dpas.prototype['acquirerData'] = undefined;





/**
 * Allowed values for the <code>hasAcquirerRelationship</code> property.
 * @enum {String}
 * @readonly
 */
Dpas['HasAcquirerRelationshipEnum'] = {

    /**
     * value: "Y"
     * @const
     */
    "Y": "Y",

    /**
     * value: "N"
     * @const
     */
    "N": "N"
};



export default Dpas;

