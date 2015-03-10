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
        '$rootScope',
        function(SharedState, $route, $scope, $location, $timeout, $rootScope) {
            var that = this;
            this.current_page = '';
            this.fade_in = false;
            this.fade_out = false;

            // Loading flag and event listeners
            $scope.viewLoading = false;
            $scope.$on('Load', function () {
                $scope.viewLoading = true;
            });
            $scope.$on('Unload', function () {
                $scope.viewLoading = false;
            });

            // Set default location
            $location.path('/');

            // Declare all other ng-click locations
            $scope.showHome = function() {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != '') {
                    fadeToPage('');
                }
            }
            $scope.showAlerts = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'alerts') {
                    fadeToPage('alerts');
                }
            }
            $scope.showLeads = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'leads') {
                    fadeToPage('leads');
                }
            }
            $scope.showPerformance = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'performance') {
                    fadeToPage('performance');
                }
            }
            $scope.showUpload = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'upload') {
                    fadeToPage('upload');
                }
            }
            $scope.showSettings = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'settings') {
                    fadeToPage('settings');
                }
            }
            $scope.showCalendar = function () {
                SharedState.turnOff('uiSidebarLeft');
                if (this.current_page != 'calendar') {
                    fadeToPage('calendar');
                }
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
                this.current_page = path;
                that.fade_out = false;
                that.fade_in = true;
            }
        }]);
})();
