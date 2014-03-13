'use strict';

var IndexPage = require('./IndexPage');
var GitHubPage = require('./GitHubPage');

describe('Index page', function() {
  var index = new IndexPage();
  var github = new GitHubPage();

  beforeEach(function () {
    index.get();
  });

  it('should display the correct title', function() {
    expect(index.getTitle()).toBe('GitHub Stars');
  });

  it('should log in a valid user', function () {
    index.clickLoginButton();
    github.completeLogin();
    github.completePassword();
    github.clickSubmit();
    expect(index.getUrl()).toContain('?code=');
    browser.sleep(5000);
    expect(index.getUserName()).toBe(github.getUser().name);
  });
});