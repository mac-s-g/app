(function () {
    var app = angular.module('App.controllers.Leads', []);
    app.controller('LeadsController', ['$http', '$scope', function($http, $scope) {
        var that = this;
    	$scope.response = {};
        $scope.tabs = {};
        $scope.query = {}
        $scope.queryBy = '$'

        $scope.toTimestamp = function(date) {
            var new_date = new Date(date);
            return new_date;
        };

        $scope.toggleOpen = function(id) {
            $scope.tabs[id] = !$scope.tabs[id];
            for (var i in $scope.tabs) {
                if ($scope.tabs[i] != 'undefined' && i != id) {
                    $scope.tabs[i] = false;
                }
            }
        };

        // HTTP GET leads
        $scope.$emit('Load');
		$http.get("http://54.69.7.81/taylor/html/app_api/methods/get/leads/?user_id=1")
    		.success(function (data, status, headers, config) {
                // JSON decode response
                $scope.$emit('Unload');
    			var response = angular.fromJson(data);

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