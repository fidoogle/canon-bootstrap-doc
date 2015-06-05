'use strict';

angular.module('firstApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('uxpatterns', {
        url: '/uxpatterns',
        templateUrl: 'app/uxpatterns/uxpatterns.html',
        controller: 'UxpatternsCtrl'
      });
  });