'use strict';

var cageweb = angular.module('cageweb', [
    'ngRoute',
    'cagewebControllers'
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
