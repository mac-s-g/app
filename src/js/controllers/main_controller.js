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
            this.current_page = 'home';
            this.fade_in = false;
            this.fade_out = false;

            // Set default location
            $location.path('/');

            // Declare all other ng-click locations
            $scope.showHome = function() {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'home') {
                    fadeToPage('');
                }
                this.current_page = 'home';
            }
            $scope.showAlerts = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'alerts') {
                    fadeToPage('alerts');
                }
                this.current_page = 'alerts';
            }
            $scope.showLeads = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'leads') {
                    fadeToPage('leads');
                }
                this.current_page = 'leads';
            }
            $scope.showPerformance = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'performance') {
                    fadeToPage('performance');
                }
                this.current_page = 'performance';
            }
            $scope.showUpload = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'upload') {
                    fadeToPage('upload');
                }
                this.current_page = 'upload';
            }
            $scope.showSettings = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'settings') {
                    fadeToPage('settings');
                }
                this.current_page = 'settings';
            }
            $scope.showCalendar = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'calendar') {
                    fadeToPage('calendar');
                }
                this.current_page = 'calendar';
            }

            // Declare page fading
            function fadeToPage(path) {
                that.fade_in = false;
                that.fade_out = true;
                //0.2s fade fade out
                $timeout(function(){
                    changePage(path);
                }, 200);
            }

            // Change path method
            function changePage(path) {
                $location.path('/' + path);
                that.fade_out = false;
                that.fade_in = true;
            }
        }]);
})();
