'use strict';

angular.module('labApp')
  .controller('AppCtrl', function AppCtrl ($scope, GitHubService, UserFactory) {
    $scope.loading = {};

    /**
     * Initialize the controller
     * 
     * Check if the user is just logged in
     */
    $scope.init = function () {
      UserFactory.get()
        .then(function (user) {
          $scope.user = user;
          console.log(user);
        });
    };

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
      UserFactory.removeAccessToken();
    };

    /**
     * Check if the user is logged
     *
     * @returns {boolean}
     */
    $scope.isLogged = function () {
      return UserFactory.isLogged();
    };

    /**
     *
     * @param {string} key
     * @param {boolean} status
     */
    $scope.setLoading = function (key, status) {
      $scope.loading[key] = status;
    };

    $scope.setError = function (error) {
      $scope.error = error;
    };
  });
