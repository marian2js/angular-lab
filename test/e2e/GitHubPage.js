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
    name: 'Fake User 123',
    repositories: [
      'angular.js',
      'protractor'
    ]
  };
  var loginField = browser.element(by.id('login_field'));
  var passwordField = browser.element(by.id('password'));
  var submitButton = browser.element(by.name('commit'));
  var isLogged = false;

  /**
   * Returns data of the fake user
   *
   * @returns {*}
   */
  this.getUser = function () {
    return fakeUser;
  };

  /**
   * Login into GitHub
   */
  this.login = function () {
    if (isLogged) {
      return;
    }
    loginField.sendKeys(fakeUser.username);
    passwordField.sendKeys(fakeUser.password);
    submitButton.click();
    isLogged = true;
  };
}

module.exports = GitHubPage;