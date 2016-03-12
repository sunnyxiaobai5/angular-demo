'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('demo.directives', {
            url: '/directives',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-directives.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('demo.directives.hello', {
            url: '/hello',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-hello.demo.html'
                }
            },
            data: {
                pageTitle: "good"
            }
        })
        .state('demo.directives.transclude', {
            url: '/transclude',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-transclude.demo.html'
                }
            }
        })
        .state('demo.directives.link', {
            url: '/link',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-link.demo.html'
                }
            }
        })
        .state('demo.directives.nested', {
            url: '/nested',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-nested.demo.html'
                }
            }
        })
        .state('demo.directives.isolateScope', {
            url: '/isolateScope',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-isolateScope.demo.html'
                }
            }
        })
        .state('demo.directives.accordion', {
            url: '/accordion',
            views: {
                '': {
                    templateUrl: 'demo/directives/demo-accordion.demo.html'
                }
            }
        });
});