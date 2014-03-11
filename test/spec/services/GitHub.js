'use strict';

describe('Service: GitHub', function () {

  // load the controller's module
  beforeEach(module('labApp'));

  var GitHubService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_GitHubService_) {
    GitHubService = _GitHubService_;
  }));

  it('should have an getTemporalCode function', function () {
    expect(angular.isFunction(GitHubService.getTemporalCode)).toBe(true);
  });

  describe('getLoginUrl()', function () {
    it('should return login url for GitHub', function () {
      expect(angular.isFunction(GitHubService.getLoginUrl)).toBe(true);
      var expectedUrl = 'https://github.com/login/oauth/authorize?client_id=bd6c9941dd390ba5d8aa&scope=user,repo';
      expect(GitHubService.getLoginUrl()).toBe(expectedUrl);
    });
  });
});
