'use strict';

angular.module('labApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'pascalprecht.translate'
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
      .when('/repo/:owner/:name', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  // Translations
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      home: 'Home',
      login: 'Login with GitHub',
      logout: 'Logout',
      welcome: 'Welcome',
      loading: 'Loading...',
      more_info: 'More Info',
      repository: 'Repository',
      watchers: 'Watchers',
      forks: 'Forks',
      contributors: 'Contributors',
      last_year_commits: 'Last year of commit activity per week',
      number_of_additions_deletions: 'Number of additions and deletions per week',
      languages: 'Languages',
      you_have: 'You have',
      repositories_starred: 'repositories starred'
    });
    $translateProvider.translations('es', {
      home: 'Inicio',
      login: 'Entrar con GitHub',
      logout: 'Salir',
      welcome: 'Bienvenido',
      loading: 'Cargando...',
      more_info: 'Mas informacion',
      repository: 'Repositiorios',
      watchers: 'Observadores',
      forks: 'Forks',
      contributors: 'Contribuidores',
      last_year_commits: 'Actividad de commits por semana del ultimo año',
      number_of_additions_deletions: 'Numero de lineas agregadas y eliminadas por semana',
      languages: 'Idiomas',
      you_have: 'Usted tiene',
      repositories_starred: 'repositorios en favoritos'
    });
    $translateProvider.preferredLanguage('en');
  });
