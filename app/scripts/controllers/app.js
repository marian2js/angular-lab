'use strict';

angular.module('labApp')
  .controller('AppCtrl', function ($scope, GitHubService) {

    /**
     * Process the User Login
     */
    $scope.login = function () {
      window.location = GitHubService.getLoginUrl();
    };

    /**
     * Process the User Logout
     */
    $scope.logout = function () {
      GitHubService.logout();
      window.location = '/';
    };

    /**
     * Check if the user is logged
     *
     * @returns {boolean}
     */
    $scope.isLogged = function () {
      return GitHubService.isLogged();
    };
  });
