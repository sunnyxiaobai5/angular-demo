$scope.dataToSubmit={};

//SpringMVC controller参数需加上@RequestBody注解

//使用JSON.Stringify方式序列化，通过ng-repeat产生的$$hashKey将导致400错误
var req = {
    headers: {
        'Content-Type': 'application/json'
    }
};
$http.post("/url/...",JSON.Stringify($scope.dataToSubmit),req).success(function(){

});

//直接通过$http提交
var req = {
    method: 'POST',
    url: 'http://example.com',
    headers: {
        'Content-Type': 'application/json'
    },
    data: $scope.dataToSubmit,
    //data: angular.toJson($scope.dataTosubmit)
};

$http(req).success(function(){

});

var req = {
    headers: {
        'Content-Type': 'application/json'
    }
};

JSON.Stringify

$http.post("/url/...",angular.toJson($scope.dataToSubmit),req).success(function(){

});