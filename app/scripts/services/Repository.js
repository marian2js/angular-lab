'use strict';

angular.module('labApp')
  .factory('RepositoryFactory', function RepositoryFactory (LogService, UserFactory, Restangular) {
    var entity = 'repos';

    return {
      get: function (owner, name) {
        LogService.log('Getting repo: ' + owner + '/' + name);
        return Restangular
          .one(entity)
          .one(owner, name)
          .get();
      },

      /**
       * Returns the list of contributors
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
      },

      /**
       * Returns the last year of commit activity grouped by week
       * [GET] /repos/:owner/:repo/stats/commit_activity
       *
       * @param repo
       * @returns {Promise}
       */
      getStatsCommitActivity: function (repo) {
        LogService.log('Getting last year commit activity');
        return Restangular
          .one(entity)
          .one(repo.owner.login)
          .one(repo.name)
          .one('stats')
          .getList('commit_activity')
      },

      /**
       * Returns a weekly aggregate of the number of additions and deletions pushed to a repository
       * [GET] /repos/:owner/:repo/stats/code_frequency
       *
       * @param repo
       * @returns {Promise}
       */
      getStatsCodeFrequency: function (repo) {
        LogService.log('Getting code frequency');
        return Restangular
          .one(entity)
          .one(repo.owner.login)
          .one(repo.name)
          .one('stats')
          .getList('code_frequency')
      }
    };
  });