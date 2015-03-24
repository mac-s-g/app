(function () {
    var app = angular.module('App.controllers.Calendar', []);
    app.controller('CalendarController', ['$scope', function($scope) {
        var now = moment();

        $scope.events = [
          {
            title: 'Lead Followup - Taylor Birkeland', // The title of the event
            type: 'important', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
            starts_at: new Date(2015,2,21,13), // A javascript date object for when the event starts
            ends_at: new Date(2015,2,21,15), // A javascript date object for when the event ends
            editable: true, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
            deletable: true // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
          },
          {
            title: 'Lead Followup - Mac Gainor', // The title of the event
            type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
            starts_at: new Date(2015,2,24,9), // A javascript date object for when the event starts
            ends_at: new Date(2015,2,24,10), // A javascript date object for when the event ends
            editable: true, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
            deletable: true // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
          },
          {
            title: 'Lead Followup - John Sansone', // The title of the event
            type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
            starts_at: new Date(2015,2,24,9), // A javascript date object for when the event starts
            ends_at: new Date(2015,2,24,10), // A javascript date object for when the event ends
            editable: true, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
            deletable: true // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
          }
        ];

        $scope.calendarView = "month";
        $scope.calendarDay = now.toDate();

        //set angular-bootstrap calendar to today
        this.setCalendarToToday = function() {
            $scope.calendarDay = now.toDate();
        }

    }]);
})();

