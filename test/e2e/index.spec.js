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

    it('should log in a valid user', function () {
      expect(index.getUrl()).toContain('?code=');
      expect(index.getUserName()).toBe(github.getUser().name);
    });

    it('should display the number of repositories correctly', function () {
      expect(index.getRepositoriesLength()).toBe(github.getUser().repositories.length.toString());
    });

    it('should display all the repositories', function () {
      browser.findElements(by.tagName('tr')).then(function(rows) {
        expect(rows.length).toBe(github.getUser().repositories.length + 1);
      });
    });
  });
});