(function () {
    var app = angular.module('App.controllers.Upload', []);
    app.controller('UploadController', ['$scope', function($scope) {
        $scope.response = '';
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

        $scope.uploadLead = function () {
            $scope.submitted = true;
            if
        };

        this.postLead = function () {
            var lead =
        };
    }]);
})();