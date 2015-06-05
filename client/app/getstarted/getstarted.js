'use strict';

angular.module('firstApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('getstarted', {
        url: '/getstarted',
        templateUrl: 'app/getstarted/getstarted.html',
        controller: 'GetstartedCtrl'
      });
  });