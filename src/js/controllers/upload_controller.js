(function () {
    var app = angular.module('App.controllers.Upload', []);
    app.controller('UploadController', ['$scope', function($scope) {
        $scope.submitted = false;
        $scope.lead = {};


        var messaging_campaigns = [
            {id :'Select One'},
            {id : 'Campaign 1'},
            {id : 'Campaign 2'},
            {id : 'Campaign 3'}
        ];
        $scope.messaging_campaigns = messaging_campaigns;
        // if (!$scope.submitted) {
            $scope.lead.messaging_campaign = messaging_campaigns[0];
        // }

        // $scope.resetLead = function () {
        //     $scope.lead = {};
        // };

        $scope.uploadLead = function () {
            // $scope.submitted = true;
            // console.log(scope.lead);
        };
    }]);
})();