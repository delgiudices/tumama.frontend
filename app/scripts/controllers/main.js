'use strict';

/**
 * @ngdoc function
 * @name fullappfrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fullappfrontendApp
 */
angular.module('fullappfrontendApp')
  .controller('MainCtrl', function ($scope, Post) {
      $scope.data = Post.query();
 });
