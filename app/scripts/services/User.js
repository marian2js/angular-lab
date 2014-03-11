'use strict';

angular.module('labApp')
  .factory('UserFactory', function UserFactory (LogService, GitHubService, Restangular, $http, $q) {
    var entity = 'user',
        restOptions = {},
        accessToken;

    var self = {
      /**
       *
       * @param {boolean} noCheck
       * @returns {Promise}
       */
      get: function (noCheck) {
        var code = GitHubService.getTemporalCode();
        if (!noCheck && code) {
          return createAccessToken(code)
            .then(function () {
              return this.get(true);
            }.bind(this));
        }

        if (this.isLogged()) {
          LogService.log('Requesting user data');
          return Restangular.one(entity).get(restOptions);
        }

        // If the user is not correctly logged
        var defer = $q.defer();
        defer.reject(null);
        return defer.promise;
      },

      /**
       *
       * @returns {Promise}
       */
      getStarred: function () {
        LogService.log('Requesting starred repositories');
        return Restangular.one(entity).getList('starred', restOptions);
      },

      /**
       *
       * @returns {Promise}
       */
      deleteStarred: function (owner, name) {
        LogService.log('Removing starred repository');
        return Restangular
          .one(entity)
          .one('starred')
          .one(owner)
          .one(name)
          .remove(restOptions);
      },

      /**
       *
       * @returns {boolean}
       */
      isLogged: function () {
        return !!this.getAccessToken();
      },

      /**
       *
       * @returns {string}
       */
      getAccessToken: function () {
        if (typeof Storage !== 'undefined') {
          accessToken = localStorage.accessToken;
          restOptions.access_token = accessToken;
        }
        return accessToken;
      },

      /**
       *
       * @param {string} token
       */
      setAccessToken: function (token) {
        accessToken = token;
        restOptions.access_token = token;
        if (typeof Storage !== 'undefined') {
          localStorage.accessToken = token;
        }
      },

      getRestOptions: function () {
        return restOptions;
      },

      removeAccessToken: function () {
        accessToken = undefined;
        if (typeof Storage !== 'undefined') {
          delete localStorage.accessToken;
        }
      }
    };

    var createAccessToken = function (code) {
      var defer = $q.defer();
      var accessTokenUrl = 'http://localhost:3000/login/oauth/access_token?code=' + code;

      LogService.log('Requesting an access token for the current user');

      $http.post(accessTokenUrl)
        .success(function (data, status, headers, config) {
          var token = data.split('access_token=')[1];
          if (token) {
            token = token.split('&')[0];
            self.setAccessToken(token);

            LogService.log('Access token is: ' + token);

            defer.resolve(token);
          }
          defer.reject(data);
        }.bind(this)).error(function (data) {
          defer.reject(data);
        });

      return defer.promise;
    };

    return self;
  });