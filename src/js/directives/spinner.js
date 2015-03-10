(function(){
    var app = angular.module('App.directives.loadingSpinner', []);
    app.directive('loadingSpinner', function() {
        'use strict';

        return {
          restrict: 'A',
          replace: true,
          transclude: true,
          // scope: {
          //   datasource: '=viewLoading'
          // },
          templateUrl: 'loading.html',
          link: function(scope, element, attrs) {
            angular.element(document).ready(function () {
                var spinner = new Spinner().spin();
                // His
                // var loadingContainer = element.find('.loading-spinner-container')[0];

                // Mine
                var loadingContainer = document.getElementsByClassName("loading-spinner-container")[0];

                loadingContainer.appendChild(spinner.el);
            });
          }
        };
    });
})();