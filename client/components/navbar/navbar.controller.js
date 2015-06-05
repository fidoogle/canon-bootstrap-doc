'use strict';

angular.module('firstApp')
  .controller('NavbarCtrl', function ($scope, $location, nav) {
    $scope.menu = nav.topnav;

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });