'use strict';

angular.module('firstApp')
  .controller('ApplayoutCtrl', function ($scope, nav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[2].title;
    $scope.subtitle = nav.topnav[2].subtitle;
    $scope.subnav = nav.topnav[2].subnav;
  });
