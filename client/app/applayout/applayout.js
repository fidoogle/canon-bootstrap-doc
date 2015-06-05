'use strict';

angular.module('firstApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('applayout', {
        url: '/applayout',
        templateUrl: 'app/applayout/applayout.html',
        controller: 'ApplayoutCtrl'
      });
  });