'use strict';

uiModule.directive('uiValidation', [function () {
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            uiValidation: '='
        }, // {} = isolate, true = child, false/undefined = no change
        require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        // controller: function($scope, $element, $attrs, $transclude) {},
        link: function (scope, element, attrs, ngModel) {
            var config = scope.uiValidation;

            element.attr('title', config.title + config.content);

            ngModel.$render = function () {
                element.html(ngModel.$viewValue || '');
            };

            ngModel.$parsers.push(
                function (viewValue) {
                    console.log('required');
                    if (config.required && !viewValue) {
                        ngModel.$setValidity('required', false);
                        element.tooltip('show');
                    } else {
                        ngModel.$setValidity('required', true);
                        element.tooltip('destroy');
                        return true;
                    }
                },
                function (viewValue) {
                    console.log('number');
                    if (config.type === 'number') {
                        if (/\D/.test(viewValue)) {
                            ngModel.$setValidity('number', false);
                            element.tooltip('show');
                            //ngModel.$setViewValue(attrs.min);
                        } else {
                            ngModel.$setValidity('number', true);
                            element.tooltip('destroy');
                            return true
                        }
                    }
                });


            //element.on('change blur keyup', validate);

            function validate() {
                scope.$apply(function () {
                    ngModel.$validate();
                });
            }
        }
    };
}]);
