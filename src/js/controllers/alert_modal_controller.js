(function () {
	var app = angular.module('App.controllers.AlertModal', []);

    app.controller('AlertModalController', ['$modalInstance', '$scope', 'CalendarEvents', 'lead', function ($modalInstance, $scope, CalendarEvents, lead) {
        $scope.opened = false;

        $scope.datePickerPopup = {
        	datepickerAppendToBody: true
        };

		$scope.datePickerOptions = {
			formatYear: 'yy',
			startingDay: 1,
			datepickerAppendToBody: true
		};

		$scope.today = function() {
			$scope.dt = new Date();
		};
		$scope.today();

		$scope.disabled = function(date, mode) {
			return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		};

		$scope.toggleMin = function() {
			$scope.minDate = $scope.minDate ? null : new Date();
		};
		$scope.toggleMin();

        this.addEvent = function ($event) {
        	console.log('Adding Event');
        	$event.preventDefault();
		    $event.stopPropagation();

		    $scope.opened = true;
        	// var e = {};
        	// CalendarEvents.addEvent(e);
        };

        this.ok = function () {
            $modalInstance.close();
        };
    }]);
})();
