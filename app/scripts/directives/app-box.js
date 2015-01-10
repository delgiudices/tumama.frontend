'use strict';

/**
 * @ngdoc directive
 * @name fullappfrontendApp.directive:appBox
 * @description
 * # appBox
 */
angular.module('fullappfrontendApp')
  .directive('appBox', function () {
    return {
      templateUrl: 'views/appBox.html',
      restrict: 'E'
   };
  });
