(function () {
    var app = angular.module('App', [
      'ngRoute',
      'mobile-angular-ui',
      'App.controllers.Main'
    ]);

    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl:'home.html',
            reloadOnSearch: false,
            css: 'css/home_partial.css'
        });
            $routeProvider.when('/alerts', {
            templateUrl:'alerts.html',
            reloadOnSearch: false,
            css: 'css/alerts_partial.css'
        });
        $routeProvider.when('/leads', {
            templateUrl:'leads.html',
            reloadOnSearch: false,
            css: 'css/leads_partial.css'
        });
        $routeProvider.when('/stats', {
            templateUrl:'stats.html',
            reloadOnSearch: false,
            css: 'css/stats_partial.css'
        });
        $routeProvider.when('/upload', {
            templateUrl:'upload.html',
            reloadOnSearch: false,
            css: 'css/upload_partial.css'
        });
        $routeProvider.when('/settings', {
            templateUrl:'settings.html',
            reloadOnSearch: false,
            css: 'css/settings_partial.css'
        });
        $routeProvider.when('/calender', {
            templateUrl:'calender.html',
            reloadOnSearch: false,
            css: 'css/calendar_partial.css'
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