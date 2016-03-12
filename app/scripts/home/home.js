'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/home", "/home/index");
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            abstract: true,
            url: '/home',
            data: {
                roles: []
            },
            views: {
                'navbar@': {
                    templateUrl: 'components/01-navbar/navbar-home.html',
                    controller: 'NavbarController'
                },
                'footer@': {
                    templateUrl: 'components/02-footer/footer.html'
                }
            },
            resolve: {
                //mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                //    $translatePartialLoader.addPart('main');
                //    return $translate.refresh();
                //}]
            }
        })
        .state('home.index', {
            url: '/index',
            views: {
                '@': {
                    templateUrl: 'scripts/home/index.html',
                    controller: 'HomeController'
                }
            }
        })

        .state('home.directives', {
            url: '/directives',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-directives.html'
                }
            }
        })
        .state('home.services', {
            url: '/services',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-services.html'
                }
            }
        })
        .state('home.filters', {
            url: '/filters',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-filters.html'
                }
            }
        })
        .state('home.config', {
            url: '/config',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-config.html'
                }
            }
        })
        .state('home.others', {
            url: '/others',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-others.html'
                }
            }
        });
});