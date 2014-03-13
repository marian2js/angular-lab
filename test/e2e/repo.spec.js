'use strict';

var RepoPage = require('./RepoPage');

describe('Repo page', function () {
  var repo = new RepoPage();
  var repoOwner = 'angular';
  var repoName = 'angular.js';

  /**
   * Load the angular repository page
   */
  beforeEach(function () {
    repo.get(repoOwner, repoName);
    browser.sleep(5000);
  });

  /**
   * Check if the title is displayed correctly, it must be "angular.js"
   */
  it('should display the title correctly', function () {
    expect(repo.getRepoName()).toBe(repoName);
  });

  /**
   * Check if the chart is displayed correctly
   */
  it('should display "Last year of commit activity per week" chart', function () {
    expect(repo.getLastYearCommitsChart().isDisplayed()).toBe(true);
  });
});