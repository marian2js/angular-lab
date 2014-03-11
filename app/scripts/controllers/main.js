'use strict';

angular.module('labApp')
  .controller('MainCtrl', function MainCtrl ($scope, UserFactory) {
    $scope.repositories = [];

    $scope.loadRepositories = function () {
      if (!$scope.isLogged()) {
        return;
      }
      $scope.setLoading('repos', true);
      UserFactory.getStarred()
        .then(function (repos) {
          $scope.repositories = repos;
          $scope.setLoading('repos', false);
        });
    };
  });
