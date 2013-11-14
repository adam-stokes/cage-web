'use strict';

var cagewebControllers = angular.module('cagewebControllers', []);

cagewebControllers.controller('IndexCtrl', ['$scope', '$http',
    function($scope, $http) {
        // hardcoded path to my local cmf server returning json of activities
        $http.get('http://storage.bigboi.lvh.me/entity/activity').
        success(function(data, status, headers, config) {
            $scope.activity = data;
            console.log($scope.activity);
        });
    }
]);
