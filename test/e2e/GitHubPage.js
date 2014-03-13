'use strict';

/**
 * GitHub Page Object
 *
 * @constructor
 */
function GitHubPage () {
  var fakeUser = {
    username: 'fakeuser123',
    password: 'fakepass987',
    name: 'Fake User 123'
  };
  var loginField = browser.element(by.id('login_field'));
  var passwordField = browser.element(by.id('password'));
  var submitButton = browser.element(by.name('commit'));

  /**
   * Returns data of the fake user
   *
   * @returns {*}
   */
  this.getUser = function () {
    return fakeUser;
  };

  /**
   * Insert username in GitHub
   */
  this.completeLogin = function () {
    loginField.sendKeys(fakeUser.username);
  };

  /**
   * Insert password in GitHub
   */
  this.completePassword = function () {
    passwordField.sendKeys(fakeUser.password);
  };

  /**
   * Submit the form
   */
  this.clickSubmit = function () {
    submitButton.click();
  };
}

module.exports = GitHubPage;