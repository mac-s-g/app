// default main controller code
(function () {
    var app = angular.module('App.controllers.Main', []);

    app.controller('MainController', ['$scope', '$location', function($scope, $location) {
        $scope.showAlerts = function () {
            $location.path('/alerts');
        }
        $scope.showLeads = function () {
            $location.path('/leads');
        }
        $scope.showStats = function () {
            $location.path('/stats');
        }
        $scope.showUpload = function () {
            $location.path('/upload');
        }
        $scope.showSettings = function () {
            $location.path('/settings');
        }
        $scope.showCalender = function () {
            $location.path('/calender');            
        }
    }]); 
})();
