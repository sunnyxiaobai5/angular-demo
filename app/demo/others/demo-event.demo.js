'use strict';

angular.module('clapse').controller('DemoEventController', ['$scope', function ($scope) {

    $scope.broadcastVal = 0;
    $scope.emitVal = 0;

    $scope.broadcast = function () {
        $scope.$broadcast('broadcast');
    };

    $scope.emit = function () {
        $scope.$emit('emit');
    };

    $scope.$on('broadcast', function (event, data) {
        $scope.broadcastVal++;
    });

    $scope.$on('emit', function (event, data) {
        $scope.emitVal++;
    });
}]);

