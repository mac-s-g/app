(function () {
    var app = angular.module('App.controllers.Upload', []);
    app.controller('UploadController', function() {
        this.uploadLead = function () {
            console.log('SUBMIT');
        }
    });
})();