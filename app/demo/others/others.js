'use strict';

angular.module('clapse').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('demo.others', {
            url: '/others',
            views: {
                '@': {
                    templateUrl: 'components/03-sidebar/sidebar-others.html'
                }
            }
        })
        .state('demo.others.debounce', {
            url: '/debounce',
            views: {
                '': {
                    templateUrl: 'demo/others/demo-debounce.demo.html',
                    controller: 'DemoDebounceController'
                }
            }
        })
        .state('demo.others.checkbox', {
            url: '/checkbox',
            views: {
                '': {
                    templateUrl: 'demo/others/demo-checkbox.demo.html',
                    controller: 'DemoCheckboxController'
                }
            }
        }).state('demo.others.ueditor', {
            url: '/ueditor',
            views: {
                '': {
                    templateUrl: 'demo/others/demo-ueditor.demo.html',
                    controller: 'DemoUeditorController'
                }
            }
        }).state('demo.others.event', {
            url: '/event',
            views: {
                '': {
                    templateUrl: 'demo/others/demo-event.demo.html'
                }
            }
        });
});