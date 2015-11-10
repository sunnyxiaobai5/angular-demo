'use strict';

angular.module('demo',[]).run(function ($rootScope, $templateCache) {

    $templateCache.put('hello.html','<div>hello 指令模板：使用templateCache方式</div>');

}).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when("/demo", "/demo/index");
    $urlRouterProvider.when("/demo/", "/demo/index");

    $stateProvider
        .state('demo', {
            'abstract': true,
            // parent: 'site',  
            url: '/demo',
            views: {
                'navbar@': {
                    templateUrl: 'tpls/components/navbar/navbar-demo.html',
                    controller: 'NavbarController'
                },
                'footer@': {
                    templateUrl: 'tpls/components/footer/footer.html'
                }
            }
        })
        .state('demo.index', {
            //parent: 'demo',
            url: '/index',
            views: {
                '@': {
                    templateUrl: 'tpls/home/index.html'
                }
            },
            data: {
                pageTitle: "你好"
            }
        })
        .state('demo.services', {
            //parent: 'student',
            url: '/services',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-services.html'
                }
            }
        })
        .state('demo.filters', {
            //parent: 'student',
            url: '/filters',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-filters.html'
                }
            }
        })
        .state('demo.config', {
            //parent: 'student',
            url: '/config',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-config.html'
                }
            }
        });
});	