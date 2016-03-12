'use strict';

angular.module('demo',[]).run(function ($rootScope, $templateCache) {

    $templateCache.put('hello.html','<div>hello 指令模板：使用templateCache方式</div>');

}).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when("/demo", "/demo/index");
    $urlRouterProvider.when("/demo/", "/demo/index");

    $stateProvider
        .state('demo', {
            abstract: true,
            url: '/demo',
            views: {
                'navbar@': {
                    templateUrl: 'components/01-navbar/navbar-demo.html',
                    controller: 'NavbarController'
                },
                'footer@': {
                    templateUrl: 'components/02-footer/footer.html'
                }
            }
        })
        .state('demo.index', {
            url: '/index',
            views: {
                '@': {
                    templateUrl: 'scripts/home/index.html'
                }
            },
            data: {
                pageTitle: "你好"
            }
        })
        .state('demo.services', {
            url: '/services',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-services.html'
                }
            }
        })
        .state('demo.filters', {
            url: '/filters',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-filters.html'
                }
            }
        })
        .state('demo.config', {
            url: '/config',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-config.html'
                }
            }
        });
});	