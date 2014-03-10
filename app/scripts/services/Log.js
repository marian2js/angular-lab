'use strict';

angular.module('labApp')
  .service('LogService', function LogService ($log) {
    this.log = $log.log;
    this.info = $log.info;
    this.warn = $log.warn;
    this.error = $log.error;
    this.debug = $log.debug;
  });