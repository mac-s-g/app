(function () {
    var app = angular.module('App.controllers.Settings', []);
    app.controller('SettingsController', ['$scope', function($scope) {
    	$scope.user = {
    		first_name: 'Taylor',
    		last_name: 'Birkeland',
    		username: 'tabirkeland',
    		send_alerts: true,
    		active: true,
    		calendering: true
    	};

    	$scope.submitSettings = function (valid) {
    		console.log($scope.user);
    	};
    }]); 
})();