'use strict';

var cagewebControllers = angular.module('cagewebControllers', []);

cagewebControllers.controller('IndexCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('http://localhost:9000/entity/activity').
        success(function(data, status, headers, config) {
            $scope.activity = data;
            console.log($scope.activity);
        });
    }
]);
