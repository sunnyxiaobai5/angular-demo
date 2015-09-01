'use strict';

angular.module('clapse', ['ui.router','demo']).run(function ($rootScope, $state, $templateCache) {

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

    $stateProvider
        //.state('demo', {
        //    'abstract': true,
        //    parent: 'site', //若没有parent，即为顶级路由，parent template是index.html
        //    url: '/demo',
        //    template: '<h1>My Contacts</h1>',                    //直接指定模板
        //    templateUrl: 'tpls/components/navbar/navbar.html',   //指定模板url
        //    templateUrl: function($stateParams){                 //也可以是返回url的函数，不能注入
        //        return 'tpls/index.tpl.html';
        //        // return '/partials/contacts.' + $stateParams.filterBy + '.html';  //官网示例
        //    },
        //    // templateProvider的方式必须返回Html模板，可注入服务
        //    templateProvider: function ($timeout, $stateParams, $state) {
        //        return $timeout(function () {
        //            console.log($state.current.url)
        //            return '<h1>' + $state.current.url + '</h1>'
        //            // return '<h1>' + $stateParams.contactId + '</h1>'
        //        }, 100);
        //    },
        //    //The controller will not be instantiated if template is not defined.
        //    controller: function(){console.log('controller execute')},
        //    controller: 'DemoController as demo',
        //    controllerAs: 'DemoController',
        //    // controllerProvider的方式动态返回一个controller function或string
        //    controllerProvider: function ($stateParams) {
        //        var ctrlName = $stateParams.type + "Controller";
        //        return ctrlName;
        //    },
        //    data: {
        //        roles: []
        //    },
        //    views: {
        //        'navbar@': {
        //            templateUrl: 'tpls/components/navbar/navbar.html',
        //            controller: 'NavbarController'
        //        },
        //        '': {
        //            templateUrl: 'tpls/index.tpl.html',
        //            controller: 'HomeController'
        //        },
        //        'footer@': {
        //            templateUrl: 'tpls/components/footer/footer.html',
        //            controller: 'HomeController'
        //        }
        //    },
        //    resolve: {
        //        mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
        //           $translatePartialLoader.addPart('main');
        //           return $translate.refresh();
        //        }]
        //    }
        //})
        // .state('site', {
        //     'abstract': true,
        //     views: {
        //         'navbar@': {
        //             templateUrl: 'tpls/components/navbar/navbar.html',
        //             controller: 'NavbarController'
        //         }
        //     }
        //     resolve: {
        //        authorize: ['Auth',
        //           function (Auth) {
        //               return Auth.authorize();
        //           }
        //        ],
        //        translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
        //           $translatePartialLoader.addPart('global');
        //           $translatePartialLoader.addPart('language');
        //        }]
        //     }
        // })
});