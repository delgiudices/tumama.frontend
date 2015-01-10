'use strict';

/**
 * @ngdoc service
 * @name fullappfrontendApp.Post
 * @description
 * # Post
 * Factory in the fullappfrontendApp.
 */
angular.module('fullappfrontendApp')
  .factory('Post', function ($resource) {
    // Service logic
    // ...
    var Post = $resource('http://162.243.37.151:1337/posts?hot=true');

    // Public API here
    return Post

  });
