'use strict';

angular.module('labApp')
  .controller('MainCtrl', function MainCtrl ($scope, UserFactory, RepositoryFactory, LogService) {
    $scope.repositories = [];
    $scope.order = 'name';
    $scope.reverse = false;

    /**
     * Load the stats for a repo
     *
     * @param repo
     */
    var loadStats = function (repo) {
      LogService.log('Loading stats for: ' + repo.name);
      RepositoryFactory.getStatsContributors(repo)
        .then(function (contributors) {
          repo.contributors = contributors;

          // the GitHub limit for request is 100 contributors
          repo.contributors.full = repo.contributors.length === 100;
        }, function (err) {
          $scope.setError(err);
        });
    };

    $scope.loadRepositories = function () {
      if (!$scope.isLogged()) {
        return;
      }
      $scope.setLoading('repos', true);
      UserFactory.getStarred()
        .then(function (repos) {
          LogService.log('Fetched ' + repos.length + ' repositories');
          $scope.repositories = repos;
          $scope.setLoading('repos', false);

          // Load stats for each repo
          for (var i = 0; i < repos.length; i++) {
            loadStats(repos[i]);
          }
        }, function (err) {
          $scope.setError(err);
        });
    };

    $scope.setOrder = function (order) {
      if ($scope.order !== order) {
        $scope.reverse = false;
        $scope.order = order;
      }
      else {
        $scope.reverse = !$scope.reverse;
      }
    };
    
    $scope.unstar = function (repo) {
      for (var i = 0; i < $scope.repositories.length; i++) {
        if ($scope.repositories[i].id === repo.id) {
          $scope.repositories.splice(i, 1);
        }
      }
      UserFactory.deleteStarred(repo.owner.login, repo.name);
    };
  });
