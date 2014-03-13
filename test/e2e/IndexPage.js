'use strict';

/**
 * Index Page Object
 *
 * @constructor
 */
function IndexPage () {
  var body = browser.element(by.tagName('body'));
  var loginButton = browser.element(by.id('loginButton'));
  var userName = element(by.binding('user.name'));
  var repositoriesLength = element(by.binding('repositories.length'));

  /**
   * Open Index page
   */
  this.get = function () {
    browser.ignoreSynchronization = true;
    browser.get('/#');
  };

  /**
   * Returns Page Body
   *
   * @returns {string}
   */
  this.getBody = function () {
    return body.getText();
  };

  /**
   * Returns page title
   *
   * @returns {string}
   */
  this.getTitle = function () {
    return browser.getTitle();
  };

  /**
   * Returns current page url
   *
   * @returns {string}
   */
  this.getUrl = function () {
    return browser.getCurrentUrl();
  };

  /**
   * Click on login button
   */
  this.clickLoginButton = function () {
    loginButton.click();
  };

  /**
   * Returns the name of the current user
   *
   * @returns {string}
   */
  this.getUserName = function () {
    return userName.getText();
  };

  /**
   * Returns the total of repositories
   *
   * @returns {string}
   */
  this.getRepositoriesLength = function () {
    return repositoriesLength.getText();
  };
}

module.exports = IndexPage;