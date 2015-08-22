'use strict';

angular.module("clapse", ['ui.router']).run(function ($rootScope, $state) {

    $rootScope.$on('stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.toState = toState;
        $rootScope.toStateParams = toParams;
    });

    $rootScope.$on('stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.previousStateName = fromState.name;
        $rootScope.previousStateParams = fromParams;

        if (toState && toState.data.pageTitle) {
            $window.document.title = toState.data.pageTitle;
        }
    });

    $rootScope.$on('stateNotFound', function (event, unfoundState, fromState, fromParams) {

    });

    $rootScope.$on('stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

    });

    $rootScope.back = function () {
        if (!$state.get($rootScope.previousStateName)) {
            $state.go('home');
        } else {
            $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
        }
    };
}).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    //enable CSRF
    //$httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
    //$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

    //$urlRouterProvider.when("", "/home");
    //$urlRouterProvider.when("/home", "/home/teacher");
    //$urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    templateUrl: 'tpls/components/navbar/navbar.html',
                    controller: 'NavbarController'
                }
            },
            resolve: {
                //authorize: ['Auth',
                //    function (Auth) {
                //        return Auth.authorize();
                //    }
                //],
                //translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                //    $translatePartialLoader.addPart('global');
                //    $translatePartialLoader.addPart('language');
                //}]
            }
        })
        .state('home', {
            parent: 'site',
            url: "/",
            templateUrl: "tpls/components/navbar/navbar.html",
            data: {
                roles: []
            },
            views: {
                'content@': {
                    templateUrl: 'scripts/app/main/main.html',
                    controller: 'MainController'
                }
            },
            resolve: {
                //mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                //    $translatePartialLoader.addPart('main');
                //    return $translate.refresh();
                //}]
            }
        })
        .state('home.teacher', {
            url: "/teacher",
            //templateUrl: "tpls/components/navbar/navbar.htm",
            views: {
                //'navbar@': {
                //    templateUrl: 'tpls/components/navbar/navbar.html',
                //    controller: 'NavbarController'
                //}
            }
        });
});
