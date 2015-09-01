'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when("/teacher", "/teacher/index");

    $stateProvider
        .state('teacher', {
            'abstract': true,
            url: '/teacher',
            views: {
                'navbar@': {
                    templateUrl: 'tpls/components/navbar/navbar-teacher.html',
                    controller: 'NavbarController'
                },
                'footer@': {
                    templateUrl: 'tpls/components/footer/footer.html'
                }
            }
        })
        .state('teacher.index', {
            //parent: 'teacher',
            url: '/index',
            views: {
                '@': {
                    templateUrl: 'tpls/teacher/index.html'
                }
            }
        })
});