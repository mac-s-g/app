(function () {
    var app = angular.module('App', [
      'ngRoute',
      'mobile-angular-ui',
      'App.directives.loadingSpinner',
      'angular-carousel',
      'ui.bootstrap',
      'mwl.calendar',
      'App.controllers.Main',
      'App.controllers.Alerts',
      'App.controllers.Calendar',
      'App.controllers.Leads',
      'App.controllers.Settings',
      'App.controllers.Performance',
      'App.controllers.Upload',
    ]);

    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl:'home.html',
            reloadOnSearch: false,
            css: 'css/home.css'
        });
        $routeProvider.when('/alerts', {
            templateUrl:'alerts.html',
            reloadOnSearch: false,
            css: 'css/alerts.css'
        });
        $routeProvider.when('/leads', {
            templateUrl:'leads.html',
            reloadOnSearch: false,
            css: 'css/leads.css'
        });
        $routeProvider.when('/performance', {
            templateUrl:'performance.html',
            reloadOnSearch: false,
            css: 'css/performance.css'
        });
        $routeProvider.when('/upload', {
            templateUrl:'upload.html',
            reloadOnSearch: false,
            css: 'css/upload.css'
        });
        $routeProvider.when('/settings', {
            templateUrl:'settings.html',
            reloadOnSearch: false,
            css: 'css/settings.css'
        });
        $routeProvider.when('/calendar', {
            templateUrl:'calendar.html',
            reloadOnSearch: false,
            css: 'css/calendar.css'
        });
    });

})();