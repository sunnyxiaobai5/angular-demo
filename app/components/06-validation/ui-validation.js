'use strict';

uiModule.directive('uiValidation', [function () {
    return {
        scope: {
            uiValidation: '='
            //options: '='
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
            var can = true;
            $(window).scroll(function () {
                if (can && $(document).scrollTop() + $(window).height() >= $(document).height()) {
                    console.log(window.location.href);
                    scope.uiValidation.callback();
                    can = false;
                    setTimeout(function () {
                        can = true;
                    }, 5000);
                }
            });
            var config = scope.uiValidation;

            //element.attr('data-title', config.title + config.content);
            //
            //ngModel.$render = function () {
            //    element.html(ngModel.$viewValue || '');
            //};
            //
            //ngModel.$parsers.push(function (viewValue) {
            //        if (config.required && !viewValue) {
            //            ngModel.$setValidity('required', false);
            //            element.attr('data-title', config.title + '不能为空！');
            //            element.tooltip('show');
            //            return viewValue;
            //        } else {
            //            ngModel.$setValidity('required', true);
            //        }
            //        if (config.type === 'number') {
            //            if (!parseInt(viewValue)) {
            //                ngModel.$setValidity('number', false);
            //                element.attr('data-title', config.title + '必须是数字！');
            //                element.tooltip('show');
            //                return viewValue;
            //            } else {
            //                ngModel.$setValidity('number', true);
            //            }
            //            if (config.min && parseInt(viewValue) < config.min) {
            //                ngModel.$setValidity('min', false);
            //                element.attr('data-title', config.title + '不能小于' + config.min + '！');
            //                element.tooltip('show');
            //                return config.min;
            //            } else {
            //                ngModel.$setValidity('min', true);
            //            }
            //            if (config.max && parseInt(viewValue) > config.max) {
            //                ngModel.$setValidity('max', false);
            //                element.attr('data-title', config.title + '不能大于' + config.max + '！');
            //                element.tooltip('show');
            //                return config.max;
            //            } else {
            //                ngModel.$setValidity('max', true);
            //            }
            //        }
            //        element.tooltip('destroy');
            //        return viewValue;
            //    }
            //);
            //
            ////element.on('change blur keyup', validate);
            //
            //function validate() {
            //    scope.$apply(function () {
            //        ngModel.$validate();
            //        if (attrs.ngInvalid)
            //            element.tooltip('show');
            //    });
            //}
        }
    };
}]);
