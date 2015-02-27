(function () {
    var app = angular.module('App', [
      'ngRoute',
      'mobile-angular-ui',
      'App.controllers.Main',
      'App.controllers.Alerts',
      'App.controllers.Calender',
      'App.controllers.Leads',
      'App.controllers.Settings',
      'App.controllers.Stats',
      'App.controllers.Upload'
    ]);

    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl:'home.html',
            reloadOnSearch: false
        });
            $routeProvider.when('/alerts', {
            templateUrl:'alerts.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/leads', {
            templateUrl:'leads.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/stats', {
            templateUrl:'stats.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/upload', {
            templateUrl:'upload.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/settings', {
            templateUrl:'settings.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/calender', {
            templateUrl:'calender.html',
            reloadOnSearch: false
        });
    });

    app.directive('head', ['$rootScope','$compile',
        function($rootScope, $compile){
            return {
                restrict: 'E',
                link: function(scope, elem) {
                    var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                    elem.append($compile(html)(scope));
                    scope.routeStyles = {};
                    $rootScope.$on('$routeChangeStart', function (e, next, current) {
                        if(current && current.$$route && current.$$route.css){
                            if(!angular.isArray(current.$$route.css)){
                                current.$$route.css = [current.$$route.css];
                            }
                            angular.forEach(current.$$route.css, function(sheet){
                                delete scope.routeStyles[sheet];
                            });
                        }
                        if(next && next.$$route && next.$$route.css){
                            if(!angular.isArray(next.$$route.css)){
                                next.$$route.css = [next.$$route.css];
                            }
                            angular.forEach(next.$$route.css, function(sheet){
                                scope.routeStyles[sheet] = sheet;
                            });
                        }
                    });
                }
            };
        }
    ]);
})();