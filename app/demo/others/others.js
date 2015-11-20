'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('demo.others', {
            //parent: 'home',
            url: '/others',
            views: {
                '@': {
                    templateUrl: 'tpls/components/sidebar/sidebar-others.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('demo.others.debounce', {
            //parent: 'home',
            url: '/debounce',
            views: {
                '': {
                    templateUrl: 'demo/others/demo-debounce.demo.html',
                    controller: 'DemoDebounceController'
                }
            }
        })
        .state('demo.others.checkbox', {
            //parent: 'home',
            url: '/checkbox',
            views: {
                '': {
                    templateUrl: 'demo/others/demo-checkbox.demo.html',
                    controller: 'DemoCheckboxController'
                }
            }
        }).state('demo.others.ueditor', {
            //parent: 'home',
            url: '/ueditor',
            views: {
                '': {
                    templateUrl: 'demo/others/demo-ueditor.demo.html',
                    controller: 'DemoUeditorController'
                }
            }
        });
});