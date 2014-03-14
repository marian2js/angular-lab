'use strict';

angular.module('labApp')
  .service('StorageService', function StorageService () {
    var data = {};

    /**
     * Returns the value for a key stored
     *
     * @param {string} key
     * @returns {*}
     */
    this.get = function (key) {
      if (data[key]) {
        return data[key];
      }
      if (typeof Storage !== 'undefined') {
        return JSON.parse(localStorage.getItem(key));
      }
      return null;
    };

    /**
     * Store a key-value par
     *
     * @param {string} key
     * @param value
     */
    this.set = function (key, value) {
      data[key] = value;
      if (typeof Storage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    };

    /**
     * Remove a stored value by key
     *
     * @param {string} key
     */
    this.remove = function (key) {
      delete data[key];
      if (typeof Storage !== 'undefined') {
        localStorage.removeItem(key);
      }
    };

    /**
     * Check if a key is stored
     *
     * @param {string} key
     * @returns {boolean}
     */
    this.contains = function (key) {
      if (data[key]) {
        return true;
      }
      if (typeof Storage !== 'undefined') {
        return !!localStorage.getItem(key);
      }
      return false;
    };

    /**
     * Clear all the data
     */
    this.clear = function () {
      data = {};
      if (typeof Storage !== 'undefined') {
        localStorage.clear();
      }
    };

  });