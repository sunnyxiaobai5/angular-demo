'use strict'

angular.module('demo').directive('demoNested', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
			//////// controller中通常暴露方法供外部调用

			$scope.dataList = [];

			this.addDate1 = function(data){
				$scope.dataList.push(data);
			};

			this.addDate2 = function(data){
				$scope.dataList.push(data);
			};

			this.addDate3 = function(data){
				$scope.dataList.push(data);
			};
		},
		// require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			//////// link中通常处理指令内部的事务

			iElm.addClass('btn btn-success');

			iElm.bind('click',function(){
				console.log($scope.dataList);
			});
		}
	};
}]);
angular.module('demo').directive('demoSubNestedOne', [function(){
	return {
		// If an array is used, the injected argument will be an array in corresponding order. 
		//////// 依赖于另外一个指令并且将它的controller注入到link的第4个函数，参数是一个string或者array string
		//////// 没有前缀 - 在当前element上查找controller
		//////// ? - 尝试查找依赖的controller，若未找到，传null
		//////// ^ - 在当前元素(element)及其父级element上查找依赖的controller
		//////// ^^ - 在父级element上查找依赖的controller
		//////// ?^ - 尝试在当前element及其父级element上查找依赖的controller，若未找到，传null
		//////// ?^^ - 尝试在父级element上查找依赖的controller，若未找到，传null

		//////// 说明当前指令依赖于demoNested指令
		//////// 会将demoNested中的controller自动注入到link第4个参数中
		//////// 当前指令可以调用demoNested controller中暴露出的方法
		require: '^demoNested', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, iElm, iAttrs, controller) {
			console.log('子directive中获取到的父directive中的controller');
			console.log(controller)
			controller.addDate1('demoSubNestedOne:addDate1添加的数据');
		}
	};
}]);
angular.module('demo').directive('demoSubNestedTwo', [function(){
	return {
		require: '^demoNested', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, iElm, iAttrs, controller) {
			controller.addDate2({'name':'demoSubNestedTwo:addDate2添加的数据'});
		}
	};
}]);
angular.module('demo').directive('demoSubNestedThree', [function(){
	return {
		require: '^demoNested', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, iElm, iAttrs, controller) {
			controller.addDate3(['demoSubNestedThree:addDate3添加的数据']);
		}
	};
}]);