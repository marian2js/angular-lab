angular.module('labApp')
  .config(function ($translateProvider) {

    // English translations
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
      repositories_starred: 'repositories starred',
      unstar: 'Unstar',
      login_github_message: 'Login with GitHub to see your starred repos!'
    });

    // Spanish translations
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
      repositories_starred: 'repositorios en favoritos',
      unstar: 'Eliminar',
      login_github_message: 'Entra con GitHub para ver tus repositorios en favoritos'
    });
    $translateProvider.preferredLanguage('en');
  });