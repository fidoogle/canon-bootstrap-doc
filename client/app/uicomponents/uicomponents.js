'use strict';

angular.module('cbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('uicomponents', {
        url: '/uicomponents',
        templateUrl: 'app/uicomponents/uicomponents.html',
        controller: 'UicomponentsCtrl'
      });
  });