(function () {
    var app = angular.module('App.controllers.Alerts', []);
    app.controller('AlertsController', ['$http', function($http) {
    	var that = this;
    	this.response = '';

		$http.get("http://54.69.7.81/taylor/html/app_api/methods/Get/")
    		.success(function(response) {that.response = response;});

    }]); 
})();