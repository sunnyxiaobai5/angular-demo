'use strict'

/**
* elapse.ui Module
*
* Description
*/
angular.module('elapse.ui', []).directive('uiDatagrid', ['$http',function($http){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '<div>你好</div>',
		templateUrl: '../../tpls/directives/ui-datagrid.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

			$scope.options={};

			$scope.options.columns=[
				{'field':'id','displayName':'id'},
				{'field':'name','displayName':'<b style="color:#888888">姓名</b>'},
				{'field':'age','displayName':'年龄'}
			];

			$scope.rowList=[
				{'id':1,'name':'name1',age:54},
				{'id':2,'name':'name2',age:56},
				{'id':4,'name':'name4',age:67},
				{'id':3,'name':'name3',age:51},
				{'id':5,'name':'name5',age:48}		
			];

			$scope.options.topActions=[
				{name:'导出'},
				{name:'打印'},
				{name:'删除'},
				{name:'审核'}
			];

			$scope.options.bottomActions=[
				{name:'导出'},
				{name:'打印'},
				{name:'删除'}
			];
		}
	};
}]).filter('to_trusted', ['$sce', function ($sce) {
	return function (text) {
		console.log(text)
		console.log(typeof text)
		if(typeof text=='string')
	    	return $sce.trustAsHtml(text);
	    else 
	    	return text;
	};
}]);