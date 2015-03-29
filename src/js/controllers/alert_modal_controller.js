(function () {
	var app = angular.module('App.controllers.AlertModal', []);

    app.controller('AlertModalController', ['$modalInstance', '$scope', 'CalendarEvents', 'lead', function ($modalInstance, $scope, CalendarEvents, lead) {
    	$scope.lead = lead;

    	$scope.dt = false;
        $scope.opened = false;
    	$scope.eventAdded = false;

        // Datepicker popup settings
        $scope.datePickerPopup = {
        	datepickerAppendToBody: true
        };

        // Datepicker options
		$scope.datePickerOptions = {
			formatYear: 'yy',
			startingDay: 1,
			datepickerAppendToBody: true
		};

		$scope.closeConfirm = function () {
			$scope.eventAdded = false;
		};

		// Watch the datetime change when picked
		$scope.$watch(function () {
			return $scope.dt;
		}, function (newVal, oldVal) {
			// Make sure the lead is defined when the modal is opened
			if (!angular.isUndefined($scope.lead.id) && $scope.opened) {
				var e = {
					title: 'Lead Followup - ' + $scope.lead.first_name + ' ' + $scope.lead.last_name, // The title of the event
					type: 'warning', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
					starts_at: $scope.dt, // A javascript date object for when the event starts
					ends_at: $scope.dt, // A javascript date object for when the event ends
					editable: true, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
					deletable: true // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
				};       	
	        	CalendarEvents.addEvent(e).then(function () {
	        		$scope.eventAdded = true;
	        	});	
			}
		});	

		// Define today
		$scope.today = function() {
			$scope.dt = new Date();
		};
		$scope.today();

		// Define datepicker disabled
		$scope.disabled = function(date, mode) {
			return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		};

		// Define the min date
		$scope.toggleMin = function() {
			$scope.minDate = $scope.minDate ? null : new Date();
		};
		$scope.toggleMin();

		// Method for pulling up the datepicker
        this.addEvent = function ($event) {
        	$event.preventDefault();
		    $event.stopPropagation();
		    $scope.opened = true;
        };

        // Method for closing the modal
        this.ok = function (result) {
            $modalInstance.close();
            $scope.$emit('alertClose');
        };
    }]);
})();
