angular.module('demo').directive('demoAccordion', [function(){
    // Runs during compile
    return {
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<div class="css-accordion" ng-transclude></div>',
        replace: true,
        transclude: true,
        controller: function($scope, $element, $attrs, $transclude) {
            var collapses = [];
            // 添加Collapse到Accordion中
            this.addCollapse = function(collapse){
                collapses.push(collapse);
            };

            //获取当前激活的Collapse
            this.getActive=function(collapse){
                angular.forEach(collapses,function(item){
                    if(item != collapse){
                        item.show = false;
                    }
                });
            };
        }
    };
}]);
angular.module('demo').directive('demoCollapse', [function(){
    // Runs during compile
    return {
        scope: {
            title: '='
        }, 
        require: '^?demoAccordion', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<div class="css-collapse"><div ng-click="toggle()" class="css-title">{{title}}</div><div class="css-text" ng-show="show" ng-transclude></div></div>',
        replace: true,
        transclude: true,
        link: function($scope, iElm, iAttrs, controller) {
            $scope.show = false;
            controller.addCollapse($scope);
            $scope.toggle = function(){
                $scope.show = !$scope.show;
                controller.getActive($scope);
            };
        }
    };
}]);
angular.module('demo').controller('DemoAccordionController', ['$scope',function($scope){
    $scope.collapses = [
        {
            title:'collapse1',
            text:'text1'
        },
        {
            title:'collapse2',
            text:'text2'
        },
        {
            title:'collapse3',
            text:'text3'
        },
        {
            title:'collapse4',
            text:'text4'
        }
    ];
}]);