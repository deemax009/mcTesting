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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi);
  }
}(this, function(expect, CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PlainCard();
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

  describe('PlainCard', function() {
    it('should create an instance of PlainCard', function() {
      // uncomment below and update the code to test PlainCard
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PlainCard();
      //expect(instance).to.be.a(CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PlainCard);
    });

    it('should have the property primaryAccountNumber (base name: "primaryAccountNumber")', function() {
      // uncomment below and update the code to test the property primaryAccountNumber
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PlainCard();
      //expect(instance).to.be();
    });

    it('should have the property panExpirationMonth (base name: "panExpirationMonth")', function() {
      // uncomment below and update the code to test the property panExpirationMonth
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PlainCard();
      //expect(instance).to.be();
    });

    it('should have the property panExpirationYear (base name: "panExpirationYear")', function() {
      // uncomment below and update the code to test the property panExpirationYear
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PlainCard();
      //expect(instance).to.be();
    });

    it('should have the property cardSecurityCode (base name: "cardSecurityCode")', function() {
      // uncomment below and update the code to test the property cardSecurityCode
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PlainCard();
      //expect(instance).to.be();
    });

  });

}));
