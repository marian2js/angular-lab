'use strict';

angular.module('labApp')
  .controller('RepoCtrl', function RepoCtrl ($scope, $routeParams, RepositoryFactory, $q) {
    $scope.repo = {};

    var loadData = function (owner, name) {
      $scope.setLoading('repo', true);
      var defer = $q.defer();
      RepositoryFactory.get(owner, name)
        .then(function (repo) {
          $scope.repo = repo;
          defer.resolve(repo);
          $scope.setLoading('repo', false);
        }, function (err) {
          $scope.setError(err);
          defer.reject(err);
        });
      return defer.promise;
    };

    var loadLastYearCommits = function (repo) {
      $scope.setLoading('lastYearActivity', true);
      RepositoryFactory.getStatsCommitActivity(repo)
        .then(function (activity) {
          $scope.lastYearActivity = [];
          for (var i = 0; i < activity.length; i++) {
            $scope.lastYearActivity.push(activity[i].total);
          }
          $scope.setLoading('lastYearActivity', false);
        });
    };

    var loadCodeFrequency = function (repo) {
      $scope.setLoading('codeFrequency', true);
      RepositoryFactory.getStatsCodeFrequency(repo)
        .then(function (frequency) {
          console.log(frequency);
          $scope.codeFrequency = [];
          console.log('Frequency length: ' + frequency.length);
          for (var i = 0; i < frequency.length; i++) {
            var newLines = frequency[i][1],
                removedLines = frequency[i][2],
                total = newLines + removedLines;
            $scope.codeFrequency.push(total > 0 ? total : 0);
          }
          console.log($scope.codeFrequency);
          $scope.setLoading('codeFrequency', false);
        });
    };

    $scope.initRepo = function () {
      // Load repository data
      loadData($routeParams.owner, $routeParams.name)
        .then(function (repo) {
          loadLastYearCommits(repo);
          loadCodeFrequency(repo);
        })
    };
  });
