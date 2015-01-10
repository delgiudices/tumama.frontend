'use strict';

/**
 * @ngdoc directive
 * @name fullappfrontendApp.directive:appList
 * @description
 * # appList
 */
angular.module('fullappfrontendApp')
  .directive('appList', function () {
    return {
      templateUrl: 'views/appList.html',
      restrict: 'E',
      scope : {
          data : '=data'
      }
    };
  });
