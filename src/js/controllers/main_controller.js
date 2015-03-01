// default main controller code
(function () {
    var app = angular.module(
        'App.controllers.Main', []
    );

    app.controller(
        'MainController',
        [
            '$scope',
            '$location',
            '$timeout',
            function($scope, $location, $timeout) {
        var that = this;
        this.fade_in = false;
        this.fade_out = false;

        // Set default location
        $location.path('/');

        // Declare all other ng-click locations
        $scope.showAlerts = function () {
            fadeToPage('alerts');
        }
        $scope.showLeads = function () {
            fadeToPage('leads');
        }
        $scope.showStats = function () {
            fadeToPage('stats');
        }
        $scope.showUpload = function () {
            fadeToPage('upload');
        }
        $scope.showSettings = function () {
            fadeToPage('settings');
        }
        $scope.showCalender = function () {
            fadeToPage('calendar');
        }


        function fadeToPage(path) {
            console.log('change page to ' + path);
            that.fade_in = false;
            that.fade_out = true;
            //0.2s fade fade out
            $timeout(function(){
                changePage(path);

            },500);
        }

        function changePage(path)
        {
            $location.path('/' + path);
            console.log('changed to ' + path);
            that.fade_out = false;
            that.fade_in = true;
        }
    }]);
})();
