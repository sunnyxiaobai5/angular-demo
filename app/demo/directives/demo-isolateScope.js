'use strict'

angular.module('demo').directive('demoIsolateScope', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// 1、scope隔离作用域
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// 2、@：当前属性作为字符串传递，还可以绑定来自外层scope的值，指令属性值中使用{{}}
		// scope: {
			// variable : '@'
		// },
		// 3、=：与父scope中的数据进行双向绑定
		// scope: {
		// 	variable : '='
		// },
		// 4、&：传递来自父scope中的函数
		scope: {
			method :'&'
		},
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		// 1、2、3
		// template: '<div><input type="text" ng-model="variable"/>{{variable}}</div>',
		// 4
		template: '<div><input type="text" ng-model="variable"/><button ng-click="method({param:variable})">Click Me</button></div>',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// 1、通过link函数的iAttrs获取数据
			// $scope.variable = iAttrs.variable

			// 2、注释掉整个link函数，通过@传递数据

			// 3、通过=与父scope双向绑定

			// 4、通过&绑定父scope中的函数
		}
	};
}]);
angular.module('clapse').controller('DemoIsolateScopeControllerOne', ['$scope', function($scope){
	$scope.customVariable = '此数据通过link函数的iAttrs方式传递1';
}]);
angular.module('clapse').controller('DemoIsolateScopeControllerTwo', ['$scope', function($scope){
	$scope.customVariable = '此数据通过link函数的iAttrs方式传递2';
}]);
angular.module('clapse').controller('DemoIsolateScopeControllerFour', ['$scope', function($scope){
	$scope.customerMethod = function(pa){
		alert("hello:"+pa)
	};
}]);