(function () {
	var app = angular.module('App', [
	  'ngRoute',
	  'mobile-angular-ui',
	  'App.controllers.Main'
	]);

	app.config(function($routeProvider) {
	  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
	  $routeProvider.when('/alerts', {templateUrl:'alerts.html',  reloadOnSearch: false});
	  $routeProvider.when('/leads', {templateUrl:'leads.html',  reloadOnSearch: false});
	  $routeProvider.when('/stats', {templateUrl:'stats.html',  reloadOnSearch: false});
	  $routeProvider.when('/upload', {templateUrl:'upload.html',  reloadOnSearch: false});
	  $routeProvider.when('/settings', {templateUrl:'settings.html',  reloadOnSearch: false});
	  $routeProvider.when('/calender', {templateUrl:'calender.html',  reloadOnSearch: false});
	}); 	
})();