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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MastercardCheckoutSolutionsMerchantRegistrationApi);
  }
}(this, function(expect, MastercardCheckoutSolutionsMerchantRegistrationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MastercardCheckoutSolutionsMerchantRegistrationApi.MerchantRegistrationApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MerchantRegistrationApi', function() {
    describe('bulkAddUpdateDpa', function() {
      it('should call bulkAddUpdateDpa successfully', function(done) {
        //uncomment below and update the code to test bulkAddUpdateDpa
        //instance.bulkAddUpdateDpa(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDpaBatchStatus', function() {
      it('should call getDpaBatchStatus successfully', function(done) {
        //uncomment below and update the code to test getDpaBatchStatus
        //instance.getDpaBatchStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
