'use strict';

var cagewebControllers = angular.module('cagewebControllers', []);

cagewebControllers.controller('IndexCtrl', ['$scope', '$http',
  function($scope, $http) {
      $http.get('http://localhost:9000/entity/page?callback').
	  success(function(data, status, headers, config) {
	      $scope.pages = data;
	      console.log($scope.pages);
	  });
}]);
