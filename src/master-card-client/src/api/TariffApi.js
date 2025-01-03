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


import ApiClient from "../ApiClient";
import ContractTariffs from '../model/ContractTariffs';
import ErrorWrapper from '../model/ErrorWrapper';
import ServiceLimitTariff from '../model/ServiceLimitTariff';

/**
* Tariff service.
* @module api/TariffApi
* @version 1.0.0
*/
export default class TariffApi {

    /**
    * Constructs a new TariffApi. 
    * @alias module:api/TariffApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getContractTariffData operation.
     * @callback module:api/TariffApi~getContractTariffDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContractTariffs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves information about tariff configuration for a contract (account contract or card contract)
     * Operation name: `getContractTariffData`  Operation is used to retrieve information about tariff configuration for a given contract (**account contract** or **card contract**). 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 10)] The number of items you want the list to be limited to. 
     * @param {Number} [offset = 0)] The number of items to offset the start of the list from. 
     * @param {module:model/String} [personalisationType] Personalisation type.  | **Possible values**  |      **Description**       | |:-------------------: |:-------------------------: | |          G           |           Global           | |          P           |          Personal          | |          D           |        Personalised        | |          T           | Personal (Template Based)  | |          L           |          Template          | 
     * @param {String} [tariffCode] Tariff code. 
     * @param {String} [tariffDomainCode] Tariff domain code. 
     * @param {module:model/String} [tariffRole] Tariff role.    | **Possible values**  | **Description**             |   |--------------------- |---------------------------- |   | SERVICE              |  Service                    |   | SERVICE_LIMIT        |  Service Limit              |   | SERVICE_VD           |  Service Value Days         |   | INTEREST             |  Interest                   |   | AGEING               |  Ageing                     |   | USAGE                |  Usage                      |   | INTEREST_TAX         |  Interest Tax               |   | BILLING              |  Billing Scheme             |   | GL                   |  General Ledger Numeration  |   | INST_FEE             |  Installment Fee            |   | INSTALLMENT          |  Installment Scheme         |   | THRESHOLD            |  Threshold                  |   | TECHNICAL            |  Technical                  |   | FX                   |  Conversion                 |   | REDEFINITION         |  Redefinition               | 
     * @param {String} [tariffTypeCode] Tariff type code. 
     * @param {module:api/TariffApi~getContractTariffDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContractTariffs}
     */
    getContractTariffData(contractId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getContractTariffData");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'personalisation_type': opts['personalisationType'],
        'tariff_code': opts['tariffCode'],
        'tariff_domain_code': opts['tariffDomainCode'],
        'tariff_role': opts['tariffRole'],
        'tariff_type_code': opts['tariffTypeCode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = ContractTariffs;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/tariff-data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setServiceLimitTariff operation.
     * @callback module:api/TariffApi~setServiceLimitTariffCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets up an individual service limit tariff for the contract (account contract or card contract)
     * Operation name: `setServiceLimitTariff`  Operation is used to redefine individual Service Limit Tariff for a specified contract (**account contract** or **card contract**).  Service Tariff Role - is used to set up fee calculation rules in Services Service Limit Tariff Role - is used to set up Services for calculating the maximum and minimum transaction amount, or to specify account balance limitations, or to specify limitations related to Events that open or close when the value of a specific balance type changes. 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {module:model/ServiceLimitTariff} serviceLimitTariff 
     * @param {Object} opts Optional parameters
     * @param {String} [idempotencyKey] Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again. 
     * @param {module:api/TariffApi~setServiceLimitTariffCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setServiceLimitTariff(contractId, serviceLimitTariff, opts, callback) {
      opts = opts || {};
      let postBody = serviceLimitTariff;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling setServiceLimitTariff");
      }
      // verify the required parameter 'serviceLimitTariff' is set
      if (serviceLimitTariff === undefined || serviceLimitTariff === null) {
        throw new Error("Missing the required parameter 'serviceLimitTariff' when calling setServiceLimitTariff");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
      };
      let headerParams = {
        'Idempotency-Key': opts['idempotencyKey']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json;charset=utf-8'];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = null;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/service-limit-tariffs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
