(function(){
    var app = angular.module('App.directives.loadingSpinner', []);
    app.directive('loadingSpinner', function() {
        return {
          restrict: 'A',
          transclude: true,
          templateUrl: 'loading.html',
          compile: function compile(tElement, tAttrs, transclude) {
            angular.element(document).ready(function () {
                var spinner = new Spinner().spin();
                var loadingContainer = document.getElementsByClassName("loading-spinner-container")[0];
                loadingContainer.appendChild(spinner.el);
            });
          }
        };
    });
})();