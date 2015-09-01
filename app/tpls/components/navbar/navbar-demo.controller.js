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
		},
		{
			'state':'teacher.index',
			'displayName':'Teacher',
			'icon':'glyphicon glyphicon-hourglass'
		},
		{
			'state':'student.index',
			'displayName':'Student',
			'icon':'glyphicon glyphicon-hourglass'
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
		},
	]
}]);
