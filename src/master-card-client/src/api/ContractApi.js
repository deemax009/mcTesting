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
import AccountContractIdentifierWithClientIdentifier from '../model/AccountContractIdentifierWithClientIdentifier';
import AuthenticationMethod from '../model/AuthenticationMethod';
import AuthenticationParameterValue from '../model/AuthenticationParameterValue';
import ContractBalances from '../model/ContractBalances';
import ContractFinancial from '../model/ContractFinancial';
import ContractSummaryTree from '../model/ContractSummaryTree';
import ErrorWrapper from '../model/ErrorWrapper';
import Event from '../model/Event';
import TechnicalAccounts from '../model/TechnicalAccounts';

/**
* Contract service.
* @module api/ContractApi
* @version 1.0.0
*/
export default class ContractApi {

    /**
    * Constructs a new ContractApi. 
    * @alias module:api/ContractApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changeContractMainContract operation.
     * @callback module:api/ContractApi~changeContractMainContractCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Relinks a subaccount or card contract to another account contract
     * Operation name: `changeContractMainContract`  Operation is used to associate the subaccount or card contract with a different parent account contract. Optionally operation allows to also associate contract with a different client. 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {module:model/AccountContractIdentifierWithClientIdentifier} accountContractIdentifierWithClientIdentifier 
     * @param {module:api/ContractApi~changeContractMainContractCallback} callback The callback function, accepting three arguments: error, data, response
     */
    changeContractMainContract(contractId, accountContractIdentifierWithClientIdentifier, callback) {
      let postBody = accountContractIdentifierWithClientIdentifier;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling changeContractMainContract");
      }
      // verify the required parameter 'accountContractIdentifierWithClientIdentifier' is set
      if (accountContractIdentifierWithClientIdentifier === undefined || accountContractIdentifierWithClientIdentifier === null) {
        throw new Error("Missing the required parameter 'accountContractIdentifierWithClientIdentifier' when calling changeContractMainContract");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json;charset=utf-8'];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = null;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/main-contract', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuthenticationParameterValue operation.
     * @callback module:api/ContractApi~getAuthenticationParameterValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationParameterValue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the value of a given authentication parameter for a specified contract.
     * Operation name: `getAuthenticationParameterValue`  Operation is used to retrieve the value of a given authentication parameter for a specified contract. 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {String} authenticationParameterName Contract authentication parameter name. 
     * @param {String} authenticationTypeCode Contract authentication type code. 
     * @param {module:api/ContractApi~getAuthenticationParameterValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationParameterValue}
     */
    getAuthenticationParameterValue(contractId, authenticationParameterName, authenticationTypeCode, callback) {
      let postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getAuthenticationParameterValue");
      }
      // verify the required parameter 'authenticationParameterName' is set
      if (authenticationParameterName === undefined || authenticationParameterName === null) {
        throw new Error("Missing the required parameter 'authenticationParameterName' when calling getAuthenticationParameterValue");
      }
      // verify the required parameter 'authenticationTypeCode' is set
      if (authenticationTypeCode === undefined || authenticationTypeCode === null) {
        throw new Error("Missing the required parameter 'authenticationTypeCode' when calling getAuthenticationParameterValue");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
        'authentication_parameter_name': authenticationParameterName,
        'authentication_type_code': authenticationTypeCode
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = AuthenticationParameterValue;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/authentication-parameter-values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContractBalances operation.
     * @callback module:api/ContractApi~getContractBalancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContractBalances} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves information about balances for a specified contract (account contract or card contract)
     * Operation name: `getContractBalances`  Operation is used to retrieve information about chosen contract balances. Operation can be used for (**account contract** or **card contract**).  The response will return information about specified balances.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  Available balances in the standard product:    | `balanceCode`  | **Description**                                                                                                      | **Product applicability**  | |--------------- |--------------------------------------------------------------------------------------------------------------------- |--------------------------- | | AVAILABLE      | Balance type reflecting contract's amount available                                                                  | Credit, Prepaid            | | BLOCKED        | Balance type reflecting amounts blocked after authorization                                                          | Credit, Prepaid            | | CR_LIMIT       | Balance type reflecting contract's credit limit and additional authorization limit                                   | Credit                     | | DEPOSIT        | Balance type reflecting a cardholder current balance                                                                 | Prepaid                    | | DUE            | Balance type calculated in latest cycle as cardholder due amount                                                     | Credit                     | | OUT_BALANCE    | Outstanding balance                                                                                                  | Prepaid                    | | OVL            | Balance type reflecting the difference between a contract's balance (`TOTAL_BALANCE`) and credit limit (`CR_LIMIT`)  | Credit                     | | PAST_DUE       | Sum of all overdue balances (from OVD_1 up to OVD_6)                                                                 | Credit                     | | STMT_BALANCE   | Balance type calculated at end of cycle                                                                              | Credit                     | | TOTAL_BALANCE  | Balance type reflecting contract's balance including balances of liability subcontracts                              | Credit, Prepaid            | | TOTAL_DUE      | SUM of `DUE` and `PAST_DUE` balances. This is the amount presented in the Statement as Minimum to Pay                | Credit                     | 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {Array.<String>} balanceCodes List of balance codes. The response will return information about specified balances.  Note: Response will contain only specified balance codes that does exist in the CMS. If none exists or a list does not contain any value then the response will not return any data (HTTP 200 will be returned with an empty array `[]`).  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.* 
     * @param {module:api/ContractApi~getContractBalancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContractBalances}
     */
    getContractBalances(contractId, balanceCodes, callback) {
      let postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getContractBalances");
      }
      // verify the required parameter 'balanceCodes' is set
      if (balanceCodes === undefined || balanceCodes === null) {
        throw new Error("Missing the required parameter 'balanceCodes' when calling getContractBalances");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
        'balance_codes': this.apiClient.buildCollectionParam(balanceCodes, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = ContractBalances;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/balances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContractFinancials operation.
     * @callback module:api/ContractApi~getContractFinancialsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContractFinancial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves contract's (account contract's or card contract's) financial information
     * Operation name: `getContractFinancials`  Operation is used to retrieve financial information for the contract (**account contract** or **card contract**). 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {module:api/ContractApi~getContractFinancialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContractFinancial}
     */
    getContractFinancials(contractId, callback) {
      let postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getContractFinancials");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = ContractFinancial;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/financials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContractTreeSummary operation.
     * @callback module:api/ContractApi~getContractTreeSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContractSummaryTree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves summary of the contracts for a specified contract (account contract or card contract)
     * Operation name: `getContractTreeSummary`  Operation is used to retrieve summary of the contracts from the tree structure created in the MP's CMS for the specified contract (**account contract** or **card contract**).  The operation returns a summary of the contracts created under the specified contract and upper-level contracts from the tree structure created in the CMS. For example, if there is one account contract (top account contract) with one subaccount under which 3 card contracts have been created, then: * if the operation is used to retrieve tree summary for the top account contract then API returns 5 contracts (top account contract, subaccount contract and all 3 card contracts) * if the operation is used to retrieve tree summary for one of the card contracts then API returns 3 contracts (top account contract, subaccount contract and 1 card contract specified in the request) 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 10)] The number of items you want the list to be limited to. 
     * @param {Number} [offset = 0)] The number of items to offset the start of the list from. 
     * @param {module:api/ContractApi~getContractTreeSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContractSummaryTree}
     */
    getContractTreeSummary(contractId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getContractTreeSummary");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = ContractSummaryTree;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/tree-summaries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTechnicalAccounts operation.
     * @callback module:api/ContractApi~getTechnicalAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TechnicalAccounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves information about technical accounts for a specified contract (account contract or card contract)
     * Operation name: `getTechnicalAccounts`  Operation is used to retrieve information about technical accounts configured for the contract (**account contract** or **card contract**).  Additional filtering can be applied:   * **Technical account code** - to retrieve only selected technical account  Notes:   * If a technical account code is not provided response will contain all technical accounts.   * Technical accounts are created for the contract during 1st transfer of funds from or to a given technical account.    Hence, right after contract creation response will not contain all possible technical accounts for the contract. 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {Object} opts Optional parameters
     * @param {String} [technicalAccountCode] Code of the account, which is related to the given contract. 
     * @param {module:api/ContractApi~getTechnicalAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TechnicalAccounts}
     */
    getTechnicalAccounts(contractId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getTechnicalAccounts");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
        'technical_account_code': opts['technicalAccountCode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = TechnicalAccounts;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/technical-accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openEvent operation.
     * @callback module:api/ContractApi~openEventCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Opens an event for a specified contract (account contract or card contract)
     * Operation name: `openEvent`  Operation is used to open event for a specified contract (**account contract** or **card contract**). 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {module:model/Event} event 
     * @param {Object} opts Optional parameters
     * @param {String} [idempotencyKey] Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again. 
     * @param {module:api/ContractApi~openEventCallback} callback The callback function, accepting three arguments: error, data, response
     */
    openEvent(contractId, event, opts, callback) {
      opts = opts || {};
      let postBody = event;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling openEvent");
      }
      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling openEvent");
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
        '/contracts/{contract_id}/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setAuthenticationMethod operation.
     * @callback module:api/ContractApi~setAuthenticationMethodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets up a contract (account contract or card contract) authentication method.
     * Operation name: `setAuthenticationMethod`  Operation is used to set up a contract (**account contract** or **card contract**) authentication method. 
     * @param {Number} contractId Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
     * @param {module:model/AuthenticationMethod} authenticationMethod 
     * @param {module:api/ContractApi~setAuthenticationMethodCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setAuthenticationMethod(contractId, authenticationMethod, callback) {
      let postBody = authenticationMethod;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling setAuthenticationMethod");
      }
      // verify the required parameter 'authenticationMethod' is set
      if (authenticationMethod === undefined || authenticationMethod === null) {
        throw new Error("Missing the required parameter 'authenticationMethod' when calling setAuthenticationMethod");
      }

      let pathParams = {
        'contract_id': contractId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json;charset=utf-8'];
      let accepts = ['application/json;charset=utf-8'];
      let returnType = null;
      return this.apiClient.callApi(
        '/contracts/{contract_id}/authentication-method', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
