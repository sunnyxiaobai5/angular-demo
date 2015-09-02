'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('demo.directives', {
            //parent: 'home',
            url: '/directives',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-directives.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('demo.directives.hello', {
            //parent: 'home',
            url: '/hello',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-hello.demo.html',
                }
            }
        })
        .state('demo.directives.transclude', {
            //parent: 'home',
            url: '/transclude',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-transclude.demo.html',
                }
            }
        })
        .state('demo.directives.link', {
            //parent: 'home',
            url: '/link',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-link.demo.html',
                }
            }
        })
        .state('demo.directives.nested', {
            //parent: 'home',
            url: '/nested',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-nested.demo.html',
                }
            }
        })
        .state('demo.directives.isolateScope', {
            //parent: 'home',
            url: '/isolateScope',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-isolateScope.demo.html',
                }
            }
        });
});