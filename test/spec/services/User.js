'use strict';

describe('Factory: User', function () {
  var fakeAccessToken = 'This_is_a_fake_access_token';
  var getUrl = 'http://localhost:3000/api/user?access_token=' + fakeAccessToken;
  var getStarred = 'http://localhost:3000/api/user/starred?access_token=' + fakeAccessToken;

  var UserFactory,
    httpBackend;

  // load the controller's module
  beforeEach(module('labApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_UserFactory_, $httpBackend) {
    UserFactory = _UserFactory_;
    httpBackend = $httpBackend;

    // Crate all the mock data to respond each request
    $httpBackend.when('GET', getUrl).respond(mockUser);
    $httpBackend.when('GET', getStarred).respond(mockStarred);
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('get()', function () {
    it('should log in an user', function () {
      expect(UserFactory.isLogged()).toBe(false);

      // Set the fake access token to the user
      UserFactory.setAccessToken(fakeAccessToken);

      // Now the user must be logged in
      expect(UserFactory.isLogged()).toBe(true);

      // Try to get the user info
      UserFactory.get(true).then(function (user) {
        expect(user).toBeDefined();
        expect(user.login).toBe(mockUser.login);
      }, function (err) {
        // Force to fail
        expect(true).toBeFalsy();
      });

      // Load the mock data
      httpBackend.expectGET(getUrl);
      httpBackend.flush();
    });
  });

  describe('getStarred()', function () {
    it('should return the starred repos of the current user', function () {
      expect(UserFactory.isLogged()).toBe(true);

      UserFactory.getStarred().then(function (repos) {
        expect(repos).toBeDefined();
        expect(repos.length).toBe(2);
        expect(repos[0].name).toBe('angular.js');
        expect(repos[1].name).toBe('rode');
      }, function (err) {
        // Force to fail
        expect(true).toBeFalsy();
      });

      // Load the mock data
      httpBackend.expectGET(getStarred);
      httpBackend.flush();
    });
  })
});
