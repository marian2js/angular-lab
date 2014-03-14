'use strict';

angular.module('labApp')
  .factory('UserFactory', function UserFactory (LogService, GitHubService, StorageService, Restangular, $http, $q, $location) {
    var entity = 'user',
        storeKey = {
          user: 'USER',
          repos: 'REPOS',
          accessToken: 'ACCESS_TOKEN'
        },
        restOptions = {};

    var self = {

      /**
       * Promise the user data
       *
       * @param {boolean} noCheck
       * @returns {Promise}
       */
      get: function (noCheck) {
        var defer = $q.defer(),
            code = GitHubService.getTemporalCode();

        if (!noCheck && code) {
          return createAccessToken(code)
            .then(function () {
              $location.path('/#/');
              return this.get(true);
            }.bind(this));
        }

        if (this.isLogged()) {
          LogService.log('Requesting user data');

          Restangular.one(entity).get(restOptions)
            .then(function (user) {
              StorageService.set(storeKey.user, user);
              defer.resolve(user);
            })
            // if there is an error, but data is cached, resolve with cached data
            .catch(function (err) {
              if (StorageService.contains(storeKey.user)) {
                defer.resolve(StorageService.get(storeKey.user));
              } else {
                defer.reject(err);
              }
            });
        } else {
          defer.reject(null);
        }

        return defer.promise;
      },

      /**
       * Promise the starred repositories
       *
       * @returns {Promise}
       */
      getStarred: function () {
        var defer = $q.defer();

        LogService.log('Requesting starred repositories');

        Restangular.one(entity).getList('starred', restOptions)
          .then(function (repos) {
            StorageService.set(storeKey.repos, repos);
            defer.resolve(repos);
          })
          // if there is an error, but data is cached, resolve with cached data
          .catch(function (err) {
            if (StorageService.contains(storeKey.repos)) {
              defer.resolve(StorageService.get(storeKey.repos));
            } else {
              defer.reject(err);
            }
          });
        return defer.promise;
      },

      /**
       * Unstar a repository
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
       * Check if there is a user logged in
       *
       * @returns {boolean}
       */
      isLogged: function () {
        return !!this.getAccessToken();
      },

      /**
       * Returns the access token of the current user
       *
       * @returns {string}
       */
      getAccessToken: function () {
        var accessToken = StorageService.get(storeKey.accessToken);
        restOptions.access_token = accessToken;
        return accessToken;
      },

      /**
       * Set a new access token
       *
       * @param {string} accessToken
       */
      setAccessToken: function (accessToken) {
        restOptions.access_token = accessToken;
        StorageService.set(storeKey.accessToken, accessToken);
      },

      /**
       * Returns the options to connect the current user with GitHub Api
       *
       * @returns {*}
       */
      getRestOptions: function () {
        return restOptions;
      },

      /**
       * Logout the current user and remove all stored data
       */
      logout: function () {
        StorageService.clear();
      }
    };

    var createAccessToken = function (code) {
      var defer = $q.defer();
      var accessTokenUrl = '/login/oauth/access_token?code=' + code;

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