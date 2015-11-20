'use strict';
angular.module('clapse').controller('DemoCheckboxController', ['$scope', function ($scope) {
    $scope.infoList = [
        {id: 1, name: "name1", time: "2012-03-11"},
        {id: 2, name: "name2", time: "2012-04-13"},
        {id: 4, name: "name4", time: "2012-01-12"},
        {id: 3, name: "name3", time: "2012-08-11"}
    ];

    //全选标志
    $scope.isSelectAll = false;

    //排序字段
    $scope.sortFiled = null;

    //是否升序
    $scope.reverse = null;

    /**
     * 全选
     */
    $scope.checkAll = function () {
        angular.forEach($scope.infoList, function (item) {
            item.selected = $scope.isSelectAll;
        })
    };

    /**
     * 单选
     */
    $scope.checkOne = function () {
        $scope.isSelectAll = $scope.infoList.filter(function (item) {
            return !item.selected
        }).length == 0;

        console.log($scope.isSelectAll)
    };
}]);

