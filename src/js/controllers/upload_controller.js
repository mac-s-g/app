(function () {
    var app = angular.module('App.controllers.Upload', []);
    app.controller('UploadController', ['$scope', '$http', function($scope, $http) {
        $scope.response = {};
        $scope.response.status = false;
        $scope.response.message = '';
        $scope.submitted = false;
        $scope.lead = {};

        var messaging_campaigns = [
            {id : 1, name : 'Select One'},
            {id : 2, name : 'Campaign 1'},
            {id : 3, name : 'Campaign 2'},
            {id : 4, name : 'Campaign 3'}
        ];

        $scope.messaging_campaigns = messaging_campaigns;
        if (!$scope.submitted) {
            $scope.lead.messaging_campaign = messaging_campaigns[0];
        }

        $scope.resetLead = function () {
            $scope.lead = {};
        };

        $scope.uploadLead = function (valid) {
            $scope.submitted = true;
            if (valid) {
                $http.post("http://54.69.7.81/taylor/html/app_api/methods/Post/", {lead : $scope.lead})
                    .success(function (data, status, headers, config) {
                        var data = angular.fromJson(data);
                        console.log(data);
                        if (data.status) {
                            $scope.response.status = true;
                            $scope.response.message = data.message;
                            $scope.resetLead();
                        } else {
                            $scope.response.status = false;
                            $scope.response.message = data.message;
                        }
                    })
                    .error(function (data, status, headers, config) {
                        console.log('FATAL ERROR');
                    });
            }
        };

    }]);
})();