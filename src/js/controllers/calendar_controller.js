(function () {
    var app = angular.module('App.controllers.Calendar', []);
    app.controller('CalendarController', ['$scope', 'CalendarEvents', function ($scope, CalendarEvents) {
        var now = moment();

        $scope.events = CalendarEvents.getEvents();

        $scope.calendarView = "month";
        $scope.calendarDay = now.toDate();

        //set angular-bootstrap calendar to today
        this.setCalendarToToday = function() {
            $scope.calendarDay = now.toDate();
        };
    }]);
})();

