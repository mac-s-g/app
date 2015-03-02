(function () {
    var app = angular.module('App.controllers.Upload', []);
    app.controller('UploadController', ['$scope', function($scope) {
        $scope.lead = {};

        $scope.messaging_campaigns = [
            {id :'Select One'},
            {id : 'Campaign 1'},
            {id : 'Campaign 2'},
            {id : 'Campaign 3'}
        ];
        $scope.lead.messaging_campaign = $scope.messaging_campaigns[0];
        $scope.resetLead = function () {
            $scope.lead = {};
        };

        $scope.uploadLead = function () {
            console.log($scope.lead);
        };

    }]);
})();