/**
 * Checkout, Save Card On File, Delete Saved Card On File And Confirmations API
 *  Click to Pay checkout used by Merchants to receive payload data from the Click to Pay System and send the results of transaction authorisation back to the Click to Pay System. Endpoints are available to retrieve payload data and send the outcome of a payment or checkout. 
 *
 * The version of the OpenAPI document: 1.3.2
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CardOnFileRequest from '../model/CardOnFileRequest';
import CardOnFileResponse from '../model/CardOnFileResponse';
import Errors from '../model/Errors';

/**
* CardOnFile service.
* @module api/CardOnFileApi
* @version 1.3.2
*/
export default class CardOnFileApi {

    /**
    * Constructs a new CardOnFileApi. 
    * @alias module:api/CardOnFileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteCOF operation.
     * @callback module:api/CardOnFileApi~deleteCOFCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a previously saved card on file.
     * The Delete Card on File operation will delete the card with the specified Merchant card identifier. The Merchant card identifier may be associated with a Recurring payment or a Split shipment. The parameters passed in the HTTP request header must be in an encoded format to be valid for HTTP transmission.
     * @param {String} merchantCardId Merchant Card ID for a consumer. This is returned by Save Card on File endpoint.
     * @param {String} xOpenapiClientid Open API key to make the server to server call to Mastercard SRCI. This ID is provided to the client during the onboarding process to make OAuth1.0 based signed requests. The value MUST match the Click to Pay Client ID present in the request body.
     * @param {String} srcDpaId Identifies the connecting client. This will be the DPA ID of the v2 merchant.
     * @param {Object} opts Optional parameters
     * @param {String} [xSrcTraceId] Trace Id of the present checkout session. If present, can be used to trace the calls within a checkout session.
     * @param {String} [correlationId] Unique identifier generated by an SRC System. If an srcCorrelationId is generated and returned to a participant, it must be included in all subsequent messages sent to the SRC System within the same transaction context.
     * @param {String} [merchantAccountId] Merchant issued Account ID for a consumer. It serves as an integration check. It will be validated against, if `merchantCardId` was generated with an `merchantAccountId` in SaveCOF operation.
     * @param {module:api/CardOnFileApi~deleteCOFCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCOF(merchantCardId, xOpenapiClientid, srcDpaId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'merchantCardId' is set
      if (merchantCardId === undefined || merchantCardId === null) {
        throw new Error("Missing the required parameter 'merchantCardId' when calling deleteCOF");
      }
      // verify the required parameter 'xOpenapiClientid' is set
      if (xOpenapiClientid === undefined || xOpenapiClientid === null) {
        throw new Error("Missing the required parameter 'xOpenapiClientid' when calling deleteCOF");
      }
      // verify the required parameter 'srcDpaId' is set
      if (srcDpaId === undefined || srcDpaId === null) {
        throw new Error("Missing the required parameter 'srcDpaId' when calling deleteCOF");
      }

      let pathParams = {
        'merchantCardId': merchantCardId
      };
      let queryParams = {
        'srcDpaId': srcDpaId,
        'correlationId': opts['correlationId'],
        'merchantAccountId': opts['merchantAccountId']
      };
      let headerParams = {
        'X-Openapi-Clientid': xOpenapiClientid,
        'X-Src-Trace-Id': opts['xSrcTraceId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/merchantCards/{merchantCardId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveCOF operation.
     * @callback module:api/CardOnFileApi~saveCOFCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CardOnFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves a Card on File (COF)
     * Tokenize consumer’s card to return merchantCardId using FPAN (outside checkout). Merchants can then store the merchantCardId and card details, and use them on a subsequent transactions.
     * @param {String} xOpenapiClientid Open API key to make the server to server call to Mastercard SRCI. This ID is provided to the client during the onboarding process to make OAuth1.0 based signed requests. The value MUST match the Click to Pay Client ID present in the request body.
     * @param {module:model/CardOnFileRequest} cardOnFileRequest 
     * @param {Object} opts Optional parameters
     * @param {String} [xSrcCxFlowId] The X-Src-Cx-Flow-Id helps in routing and session affinity. Usage of X-Src-Cx-Flow-Id in requests ensures requests by the same client are directed to the same server. When you make your initial API call, use the X-Src-Cx-Flow-Id, returned in one of the client-side calls checkoutWithNewCard() or checkoutWitCard(). If you do not send X-Src-Cx-Flow-Id in your request or if the field is empty, the Click to Pay system generates one and responds with the X-Src-Cx-Flow-Id in the header. The X-Src-Cx-Flow-Id returned in the response must be used in subsequent calls to ensure that these calls are directed to the same server that returned the initial response. Failure to do so will result in call failures.
     * @param {String} [xSrcTraceId] Trace Id of the present checkout session. If present, can be used to trace the calls within a checkout session.
     * @param {module:api/CardOnFileApi~saveCOFCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CardOnFileResponse}
     */
    saveCOF(xOpenapiClientid, cardOnFileRequest, opts, callback) {
      opts = opts || {};
      let postBody = cardOnFileRequest;
      // verify the required parameter 'xOpenapiClientid' is set
      if (xOpenapiClientid === undefined || xOpenapiClientid === null) {
        throw new Error("Missing the required parameter 'xOpenapiClientid' when calling saveCOF");
      }
      // verify the required parameter 'cardOnFileRequest' is set
      if (cardOnFileRequest === undefined || cardOnFileRequest === null) {
        throw new Error("Missing the required parameter 'cardOnFileRequest' when calling saveCOF");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Openapi-Clientid': xOpenapiClientid,
        'X-Src-Cx-Flow-Id': opts['xSrcCxFlowId'],
        'X-Src-Trace-Id': opts['xSrcTraceId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CardOnFileResponse;
      return this.apiClient.callApi(
        '/merchantCards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
