'use strict';

angular.module('cbApp')
  .controller('MainCtrl', function ($scope, $http, nav) {
    $scope.awesomeThings = [];
    $scope.title = nav.topnav[0].title;
    $scope.subtitle = nav.topnav[0].subtitle;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
