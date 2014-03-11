'use strict';

angular.module('labApp')
  .controller('AppCtrl', function AppCtrl ($scope, GitHubService, UserFactory, LogService, $translate) {
    $scope.languages = [{
      name: 'English',
      key: 'en'
    }, {
      name: 'Español',
      key: 'es'
    }];
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

    /**
     * Set an error alert
     *
     * @param error
     */
    $scope.setError = function (error) {
      LogService.error(error);
      $scope.error = error;
    };

    $scope.setLanguage = function (key) {
      $translate.use(key);
    };
  });
