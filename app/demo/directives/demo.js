angular.module('demo',[]).run(function ($rootScope, $templateCache) {

    $templateCache.put('hello.html','<div>hello 指令模板：使用templateCache方式</div>');

    $rootScope.back = function () {
        if (!$state.get($rootScope.previousStateName)) {
            $state.go('home');
        } else {
            $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
        }
    };
})