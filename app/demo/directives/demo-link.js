'use strict';

angular.module('clapse').directive('demoLink', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			iElm.bind('click',function(event){
				//通过link函数中scope直接调用
				console.log("directive link函数中通过scope调用：")
				scope.customFunction();

				console.log('directive link函数中通过scope访问：'+scope.customVariable);
				// console.log(customVariable)
				
				//execute an expression
				// $scope.$apply('customFunction()');

				// console.log(iAttrs.customeventmethod)	//customEventMethod= 后面的值
				//注：这种方式，指令中customEventMethod会被转换为小写
				scope.$apply(iAttrs.customeventmethod);

				//////// $apply()函数伪代码，expr：string/function(),将被执行
				// function $apply(expr) {
				// 	try {
				// 			return $eval(expr);
				// 	}
				// 	catch (e) {
				// 			$exceptionHandler(e);
				// 	}
				// 	finally {
				// 			$root.$digest();
				//   	}
				// }

			});
		}
	};
}]);
angular.module('clapse').controller('DemoLinkDemoController1', ['$scope', function($scope){
	$scope.customVariable = 'Controller1 中的变量';

	$scope.customFunction1 = function(){
		alert('通过directive属性传递：Controller1 中customFunction1函数执行');
	}

	$scope.customFunction = function(){
		console.log('Controller1 $scope中customFunction函数执行');
	}
}]);
angular.module('clapse').controller('DemoLinkDemoController2', ['$scope', function($scope){
	$scope.customVariable = 'Controller2 中的变量';

	$scope.customFunction2 = function(){
		alert('通过directive属性传递：Controller2 中customFunction2函数执行');
	}

	$scope.customFunction = function(){
		console.log('Controller2 $scope中customFunction函数执行');
	}
}]);