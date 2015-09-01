'use strict';

angular.module("clapse").controller("HomeController", ["$scope", function ($scope) {
    $scope.infoList = [
        {id: 1, name: "name1", time: "2012-03-11"},
        {id: 2, name: "name2", time: "2012-04-13"},
        {id: 3, name: "name3", time: "2012-01-12"},
        {id: 5, name: "name12", time: "2012-08-11"},
        {id: 4, name: "name4", time: "2012-12-11"},
        {id: 6, name: "name5", time: "2012-05-13"},
        {id: 7, name: "name8", time: "2012-04-13"},
        {id: 8, name: "name7", time: "2012-03-11"}

    ];


    $scope.order = "id";

    $scope.selectAllFlag = false;

    $scope.reverse = function () {
        $scope.order = "time";
    };


    $scope.sortFiled = '';

    $scope.sort = false;


    $scope.allChecked = function () {
        angular.forEach($scope.infoList, function (item) {
            item.selected = $scope.selectAllFlag;
        })
    };

    $scope.checkOne = function () {
        for (var i = 0; i < $scope.infoList.length; i++) {
            if (!$scope.infoList[i].selected) {
                $scope.selectAllFlag = false;
                return;
            }
        }
        $scope.selectAllFlag = true;
    };

    $scope.$watch("selectAllFlag", function () {
        
    });

}]);
