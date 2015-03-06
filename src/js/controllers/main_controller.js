// default main controller code
(function () {
    var app = angular.module(
        'App.controllers.Main', []
    );

    app.controller(
        'MainController',
        [
        'SharedState',
        '$route',
        '$scope',
        '$location',
        '$timeout',
        function(SharedState, $route, $scope, $location, $timeout) {
            var that = this;
            this.fade_in = false;
            this.fade_out = false;

            // Set default location
            $location.path('/');

            // Declare all other ng-click locations
            $scope.showHome = function() {
                console.log($location.url());
                SharedState.turnOff('uiSidebarLeft');
                fadeToPage('');
            }
            $scope.showAlerts = function () {
                console.log($location.url());

                SharedState.turnOff('uiSidebarLeft');
                fadeToPage('alerts');
            }
            $scope.showLeads = function () {
                console.log($location.url());

                SharedState.turnOff('uiSidebarLeft');
                fadeToPage('leads');
            }
            $scope.showPerformance = function () {
                console.log($location.url());

                SharedState.turnOff('uiSidebarLeft');
                fadeToPage('performance');
            }
            $scope.showUpload = function () {
                console.log($location.url());

                SharedState.turnOff('uiSidebarLeft');
                fadeToPage('upload');
            }
            $scope.showSettings = function () {
                console.log($location.url());

                SharedState.turnOff('uiSidebarLeft');
                fadeToPage('settings');
            }
            $scope.showCalendar = function () {
                console.log($location.url());
                
                SharedState.turnOff('uiSidebarLeft');
                fadeToPage('calendar');
            }

            // Declare page fading
            function fadeToPage(path)
            {
                that.fade_in = false;
                that.fade_out = true;
                //0.2s fade fade out
                $timeout(function(){
                    changePage(path);

                },200);
            }

            // Change path method
            function changePage(path)
            {
                $location.path('/' + path);
                that.fade_out = false;
                that.fade_in = true;
            }
        }]);
})();
