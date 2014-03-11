'use strict';

describe('Factory: Repository', function () {
  var repoOwner = 'angular';
  var repoName = 'angular.js';
  var getUrl = 'http://localhost:3000/api/repos/' + repoOwner + '/' + repoName;
  var getStatsContributors = 'http://localhost:3000/api/repos/' + repoOwner + '/' + repoName + '/stats/contributors';
  var getStatsCommitActivity = 'http://localhost:3000/api/repos/' + repoOwner + '/' + repoName + '/stats/commit_activity';
  var getStatsCodeFrequency = 'http://localhost:3000/api/repos/' + repoOwner + '/' + repoName + '/stats/code_frequency';

  var RepositoryFactory,
      httpBackend,
      repo;

  // load the controller's module
  beforeEach(module('labApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_RepositoryFactory_, $httpBackend) {
    RepositoryFactory = _RepositoryFactory_;
    httpBackend = $httpBackend;

    // Crate all the mock data to respond each request
    $httpBackend.when('GET', getUrl).respond(mockRepository);
    $httpBackend.when('GET', getStatsContributors).respond(mockContributors);
    $httpBackend.when('GET', getStatsCommitActivity).respond(mockCommitActivity);
    $httpBackend.when('GET', getStatsCodeFrequency).respond(mockCodeFrequency);
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('get()', function () {
    it('should fetch repository data', function () {
      RepositoryFactory.get(repoOwner, repoName).then(function (_repo) {
        repo = _repo;
        expect(repo).toBeDefined();
        expect(repo.id).toBe(mockRepository.id);
      }, function (err) {
        // Force to fail
        expect(true).toBeFalsy();
      });

      // Load the mock data
      httpBackend.expectGET(getUrl);
      httpBackend.flush();
    });
  });

  describe('getStatsContributors()', function () {
    it('should return contributors of the repo', function () {
      RepositoryFactory.getStatsContributors(repo).then(function (contributors) {
        expect(contributors).toBeDefined();
      }, function (err) {
        // Force to fail
        expect(true).toBeFalsy();
      });

      // Load the mock data
      httpBackend.expectGET(getStatsContributors);
      httpBackend.flush();
    });
  });

  describe('getStatsCommitActivity()', function () {
    it('should return commit activity of the repo', function () {
      RepositoryFactory.getStatsCommitActivity(repo).then(function (activity) {
        expect(activity).toBeDefined();

      }, function (err) {
        // Force to fail
        expect(true).toBeFalsy();
      });

      // Load the mock data
      httpBackend.expectGET(getStatsCommitActivity);
      httpBackend.flush();
    });
  });

  describe('getStatsCodeFrequency()', function () {
    it('should return code frequency of the repo', function () {
      RepositoryFactory.getStatsCodeFrequency(repo).then(function (frequency) {
        expect(frequency).toBeDefined();
      }, function (err) {
        // Force to fail
        expect(true).toBeFalsy();
      });

      // Load the mock data
      httpBackend.expectGET(getStatsCodeFrequency);
      httpBackend.flush();
    });
  });
});
