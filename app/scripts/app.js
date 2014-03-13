'use strict';

angular.module('labApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'pascalprecht.translate'
])
  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setDefaultHttpFields({ cache: true });
  })
  .config(function ($routeProvider) {
    var templateUrl = function templateUrl (name) {
      return 'views/' + name + '.html';
    };

    $routeProvider
      .when('/', {
        templateUrl: templateUrl('main'),
        controller: 'MainCtrl'
      })
      .when('/repo/:owner/:name', {
        templateUrl: templateUrl('repo'),
        controller: 'RepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
