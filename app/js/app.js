'use strict';

angular.module("clapse", ['ui.router']).run(function($rootScope,$state){
	$rootScope.$on('stateChangeStart', function(event, toState, toStateParams){
		$rootScope.toState = toState;
		$rootScope.toStateParams = toStateParams;
	});

	$rootScope.$on('stateChangeSuccess', function(event, toState, toStateParams, fromState, fromParams){
		$rootScope.previousStateName = fromState.name;
		$rootScope.previousStateParams = fromParams;

		if(toState && toState.data.pageTitle){
			$window.document.title = toState.data.pageTitle;
		}
	});

	$rootScope.back = function(){
		if(!$state.get($rootScope.previousStateParams)){
			$state.go('home');
		}else{
			$state.go($rootScope.previousStateName, $rootScope.previousStateParams);
		}
	};
}).config(function($stateProvider, $urlRouterProvider, $httpProvider){

	$urlRouterProvider.otherwise('/');
	
	$stateProvider.state('site', {
		'abstract': true,
		views: {
			'navbar@': {
				templateUrl: 'scripts/components/navbar/navbar.html',
				controller: 'NavbarController'
			}
		},
		resolve: {
			authorize: ['Auth',
				function (Auth) {
					return Auth.authorize();
				}
	],
			translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
				$translatePartialLoader.addPart('global');
			}]
		}
	});
});
