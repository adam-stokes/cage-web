'use strict';

var cageweb = angular.module('cageweb', [
    'ngRoute',
    'cagewebFilters', 
    'cagewebControllers',
    'cagewebServices'
]);

cageweb.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
	  when('/', {
	      templateUrl: 'partials/index',
	      controller: 'IndexCtrl'
	  }).
	  otherwise({
	      redirectTo: '/'
	  });
  }]);
