(function () {
    var app = angular.module('App.controllers.Alerts', []);
    app.controller('AlertsController', ['$http', '$modal', '$scope', function ($http, $modal, $scope) {
    	var self = this;
    	$scope.tabs = [];
    	this.selected_lead = {};
    	this.leads = [];

        var modalInstance = $modal.open({
            templateUrl: 'alertModal.html',
            controller: 'AlertModalController as modalCtrl',
            resolve: {
                lead: function () {
                    return 'A LEAD OBJECT';
                }
            }
        });

  //       $scope.$emit('Load');
		// $http.get("http://54.69.7.81/taylor/html/app_api/methods/get/leads/?user_id=1")
  //   		.success(function (data, status, headers, config) {
  //               // JSON decode response
  //               $scope.$emit('Unload');
  //   			var response = angular.fromJson(data);

  //   			// Good response
  //               if (response.status) {
  //   				$scope.leads = response.data;
  //   			}
  //   		});
    }]);
})();