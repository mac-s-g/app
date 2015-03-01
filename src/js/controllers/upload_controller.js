(function () {
    var app = angular.module('App.controllers.Upload', []);
    app.controller('UploadController', ['$scope', function($scope) {
        this.messaging_campaigns = [
            {id : 'Messaging 1'},
            {id : 'Messaging 2'},
            {id : 'Messaging 3'}
         ];

        this.lead = {};

        this.uploadLead = function () {
            console.log(this.lead);
        }
    }]);
})();