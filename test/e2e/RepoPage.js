'use strict';

function RepoPage () {
  var repoName = browser.element(by.binding('repo.name'));
  var lastYearCommitsChart = browser.element(by.tagName('svg'));

  /**
   * Open Repo page
   */
  this.get = function (repoOwner, repoName) {
    browser.ignoreSynchronization = true;
    browser.get('/#/repo/' + repoOwner + '/' + repoName);
  };

  /**
   * Returns the repository name
   *
   * @returns {string}
   */
  this.getRepoName = function () {
    return repoName.getText();
  };

  /**
   * Returns the last year commits chart
   *
   * @returns {*}
   */
  this.getLastYearCommitsChart = function () {
    return lastYearCommitsChart;
  };
}

module.exports = RepoPage;