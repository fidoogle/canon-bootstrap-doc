'use strict';

angular.module('cbApp')
  .controller('ApplayoutCtrl', function ($scope, nav, subnav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[2].title;
    $scope.subtitle = nav.topnav[2].subtitle;
    $scope.subnav = subnav.getSubnav(2); //nav.topnav[2].subnav;
  });
