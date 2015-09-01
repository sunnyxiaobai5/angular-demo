'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.when("/student", "/student/index");

    $stateProvider
        .state('student', {
            'abstract': true,
            url: '/student',
            views: {
                'navbar@': {
                    templateUrl: 'tpls/components/navbar/navbar-student.html',
                    controller: 'NavbarController'
                },
                'footer@': {
                    templateUrl: 'tpls/components/footer/footer.html'
                }
            }
        })
        .state('student.index', {
            //parent: 'student',
            url: '/index',
            views: {
                '@': {
                    templateUrl: 'tpls/student/index.html'
                }
            }
        })
});