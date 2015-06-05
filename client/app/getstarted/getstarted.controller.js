'use strict';

angular.module('firstApp')
  .controller('GetstartedCtrl', function ($scope, nav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[1].title;
    $scope.subtitle = nav.topnav[1].subtitle;
  });
