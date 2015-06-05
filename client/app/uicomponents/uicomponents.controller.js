'use strict';

angular.module('firstApp')
  .controller('UicomponentsCtrl', function ($scope, nav) {
    $scope.message = 'Hello';
    $scope.title = nav.topnav[4].title;
    $scope.subtitle = nav.topnav[4].subtitle;
    $scope.subnav = nav.topnav[4].subnav;
  });
