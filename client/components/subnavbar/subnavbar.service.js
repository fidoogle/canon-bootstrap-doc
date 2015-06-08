'use strict';

angular.module('cbApp').factory('subnav', subnav);
subnav.$inject = ['nav'];

function subnav(nav) {
  var service = {
    getSubnav: getSubnav
  }
  
  return service;

  function getSubnav(pIndex) {
    return nav.topnav[pIndex].subnav;
  }

}