(function () {
    var app = angular.module('App.controllers.Leads', []);
    app.controller('LeadsController', ['$http', '$scope', function($http, $scope) {
    	$scope.response = {};
        $scope.tabs = [];

        // HTTP GET leads
		$http.get("http://54.69.7.81/taylor/html/app_api/methods/get/leads/?user_id=1")
    		.success(function (data, status, headers, config) {
                // JSON decode response
    			var response = angular.fromJson(data);

    			console.log(response);
    			// Good response
                if (response.status) {
    				$scope.response.message = response.message;
    				$scope.response.status = response.status;
    				$scope.response.data = response.data;
    			} else {
                    // Bad response
    				console.log('FATAL ERROR');
    			}
    		})
    		.error(function (data, status, headers, config) {
    			console.log('FATAL ERROR');
    		});

    }]);
})();