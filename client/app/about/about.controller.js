'use strict';

angular.module('cbApp')
  .controller('AboutCtrl', function ($scope, nav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[5].title;
    $scope.subtitle = nav.topnav[5].subtitle;
  });
