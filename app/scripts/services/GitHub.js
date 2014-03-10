'use strict';

angular.module('labApp')
  .service('GitHubService', function GitHubService () {
    var oauthUrl = 'https://github.com/login/oauth/authorize',
        client_id = 'bd6c9941dd390ba5d8aa',
        scopes = 'user,repo',
        logout = false;

    /**
     * Returns the GitHub access token from url query param or local storage
     * If the user is not logged with GitHub returns null
     *
     * @returns {string}
     */
    var getAccessToken = function () {
      var accessToken = null;

      // Check if the user is just logged out
      if (logout) {
        return null;
      }

      if (location.search) {
        accessToken = location.search.split('code=')[1];
        if (accessToken) {
          accessToken = accessToken.split('&')[0];
        }
      }

      // If the browser support localStorage, store the access token
      if (typeof Storage !== 'undefined') {
        if (accessToken) {
          localStorage.accessToken = accessToken;
        }
        else {
          accessToken = localStorage.accessToken;
        }
      }
      return accessToken;
    };

    /**
     * Returns the GitHub login url
     *
     * @returns {string}
     */
    this.getLoginUrl = function () {
      return oauthUrl + '?client_id=' + client_id + '&scope=' + scopes;
    };

    /**
     * Remove the GitHub access token
     */
    this.logout = function () {
      delete localStorage.accessToken;
      logout = true;
    };

    /**
     * Check if the user is logged on GitHub
     *
     * @returns {boolean}
     */
    this.isLogged = function () {
      return !!getAccessToken();
    };
  });