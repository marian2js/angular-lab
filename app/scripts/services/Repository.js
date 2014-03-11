'use strict';

angular.module('labApp')
  .factory('RepositoryFactory', function RepositoryFactory (LogService, UserFactory, Restangular, $http, $q) {
    var entity = 'repos';

    return {
      /**
       * Get list of contributors
       * [GET] /repos/:owner/:repo/stats/contributors
       *
       * @param repo
       */
      getStatsContributors: function (repo) {
        return Restangular
          .one(entity)
          .one(repo.owner.login)
          .one(repo.name)
          .one('stats')
          .getList('contributors')
      }
    };
  });