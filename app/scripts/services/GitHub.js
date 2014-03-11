'use strict';

angular.module('labApp')
  .service('GitHubService', function GitHubService () {
    var oauthUrl = 'https://github.com/login/oauth/authorize',
        client_id = 'bd6c9941dd390ba5d8aa',
        scopes = 'user,repo';

    /**
     * Returns the GitHub access token from url query param or local storage
     * If the user is not logged with GitHub returns null
     *
     * @returns {string}
     */
    this.getTemporalCode = function () {
      var code = null;

      if (location.search) {
        code = location.search.split('code=')[1];
        if (code) {
          code = code.split('&')[0];
        }
      }

      return code;
    };

    /**
     * Returns the GitHub login url
     *
     * @returns {string}
     */
    this.getLoginUrl = function () {
      return oauthUrl + '?client_id=' + client_id + '&scope=' + scopes;
    };
  });