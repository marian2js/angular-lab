'use strict';

var IndexPage = require('./IndexPage');
var GitHubPage = require('./GitHubPage');

describe('Index page', function() {
  var index = new IndexPage();
  var github = new GitHubPage();

  beforeEach(function () {
    index.get();
  });

  describe('Index for guests', function () {
    it('should display the correct title', function() {
      expect(index.getTitle()).toBe('GitHub Stars');
    });
  });

  describe('Index for logged users', function () {
    /**
     * Login on GitHub and wait for the responses
     */
    beforeEach(function () {
      index.clickLoginButton();
      github.login();
      browser.sleep(5000);
    });

    /**
     * Check if the user is correctly loggin on the page after loggin with GitHub
     */
    it('should log in a valid user', function () {
      expect(index.getUrl()).toContain('?code=');
      expect(index.getUserName()).toBe(github.getUser().name);
    });

    /**
     * Check if the number of repositories of the user is displayed correctly
     */
    it('should display the number of repositories correctly', function () {
      expect(index.getRepositoriesLength()).toBe(github.getUser().repositories.length.toString());
    });

    /**
     * Check if there are a row for each repository
     */
    it('should display all the repositories', function () {
      // should be 2 repositories
      index.getRepos().then(function(rows) {
        expect(rows.length).toBe(github.getUser().repositories.length);
      });
    });

    /**
     * Check if the filter is working correctly
     */
    it('should filter repositories by name', function () {
      index.search('angular');

      // only one repository match with "angular"
      index.getRepos().then(function(rows) {
        expect(rows.length).toBe(1);
      });
    });

    /**
     * Check if the order by name is working correctly
     */
    it('should order repositories by name', function () {
      // Order by name desc
      index.clickRepositoryTitle();

      // Now the first repo should be "Protractor"
      index.getRepos().then(function(rows) {
        rows[0].getText().then(function (text) {
          expect(text).toContain('protractor');
        });
      });
    });
  });
});