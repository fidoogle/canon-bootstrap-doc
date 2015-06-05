'use strict';

angular.module('firstApp')
  .controller('UxpatternsCtrl', function ($scope, nav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[3].title;
    $scope.subtitle = nav.topnav[3].subtitle;
    $scope.subnav = nav.topnav[3].subnav;
  });
