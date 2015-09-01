'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/home", "/home/index");
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            'abstract': true,
            // parent: 'site',  
            url: '/home',
            data: {
                roles: []
            },
            views: {
                'navbar@': {
                    templateUrl: 'tpls/components/navbar/navbar-home.html',
                    controller: 'NavbarController'
                },
                'footer@': {
                    templateUrl: 'tpls/components/footer/footer.html'
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
            //parent: 'home',
            url: '/index',
            views: {
                '@': {
                    templateUrl: 'tpls/home/index.html',
                    controller: 'HomeController'
                }
            }
        })

        .state('home.directives', {
            //parent: 'home',
            url: '/directives',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-directives.html'
                }
            }
        })
        .state('home.services', {
            //parent: 'student',
            url: '/services',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-services.html'
                }
            }
        })
        .state('home.filters', {
            //parent: 'student',
            url: '/filters',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-filters.html'
                }
            }
        })
        .state('home.config', {
            //parent: 'student',
            url: '/config',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-config.html'
                }
            }
        })
        .state('home.others', {
            //parent: 'student',
            url: '/others',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-others.html'
                }
            }
        });
});