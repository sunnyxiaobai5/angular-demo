'use strict';

angular.module('clapse').controller('DemoDebounceController', ['$scope', '$timeout', function($scope, $timeout) {
    var timeout;

    $scope.noDebounce = function() {
        console.log($scope.name1);
        $scope.newName1 = $scope.name1;
    };


    $scope.$watch("name2", function(newVal) {
        if (newVal) {
            if (timeout) {
                $timeout.cancel(timeout);
            }

            timeout = $timeout(function() {
                console.log($scope.name2);
                $scope.newName2 = $scope.name2;
            }, 500);
        }
    });
}]);
