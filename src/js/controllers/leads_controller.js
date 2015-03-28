(function () {
    var app = angular.module('App.controllers.Leads', []);
    app.controller('LeadsController', ['$http', '$scope', function($http, $scope) {
    	$scope.leads = [];
        $scope.tabs = [];
        $scope.query = {};
        $scope.queryBy = '$';

        $scope.toggleOpen = function(id) {
            for (var i in $scope.tabs) {
                if ($scope.tabs[i] != 'undefined' && i != id) {
                    $scope.tabs[i] = false;
                }
            }
            $scope.tabs[id] = !$scope.tabs[id];
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
    				$scope.leads = response.data;
    			}
    		});
    }]);
})();