'use strict';

angular.module('labApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
])
  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000/api');
    RestangularProvider.setDefaultHttpFields({ cache: true });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
