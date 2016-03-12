'use strict';

angular.module("clapse").controller("NavbarController", ["$scope", function ($scope) {

	$scope.siteName='AngularJS';

	$scope.siteDefs=[
		{
			'state':'home.index',
			'displayName':'Home',
			'icon':'glyphicon glyphicon-home'
		},
		{
			'state':'demo.index',
			'displayName':'Demo',
			'icon':'glyphicon glyphicon-apple'
		}
	];

	$scope.navDefs=[
		{
			'state':'.directives',
			'displayName':'Directives Demo'
		},
		{
			'state':'.services',
			'displayName':'Services Demo'
		},
		{
			'state':'.filters',
			'displayName':'Filters Demo'
		},
		{
			'state':'.config',
			'displayName':'Config Demo'
		},
		{
			'state':'.others',
			'displayName':'Others'
		}
	]
}]);
