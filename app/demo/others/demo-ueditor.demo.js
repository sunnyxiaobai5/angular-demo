'use strict';

angular.module('clapse').controller('DemoUeditorController', ['$scope', function ($scope) {
    var editor;
    $scope.ueReady = function (editorInstance) {
        editor = editorInstance;
    };

    $scope.getContent = function () {
        alert("通过编辑器实例获取到的信息：" + editor.getContent());
        console.log(editor)
    };
}]);

