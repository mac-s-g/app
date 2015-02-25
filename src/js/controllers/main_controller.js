// default main controller code
angular.module('App.controllers.Main', [])

.controller('MainController', function($scope){

});


//------------------------------------------------------------------------------------
//main controller code for weather app
//http://mobileangularui.com/blog/your-first-phonegap-app-with-mobile-angular-ui/
//------------------------------------------------------------------------------------

angular.module('App.controllers.Main', [
// angular.module('WeatherApp.controllers.Main', [
  'WeatherApp.services.Geolocation',
  'WeatherApp.services.Forecast'
  ])

.controller('MainController', function($scope, getCurrentPosition, getWeather){
  getCurrentPosition(function(position){
    getWeather(
      position.coords.latitude,
      position.coords.longitude,
      function(location, weather){
        $scope.location = location;
        $scope.weather = weather;
      });
  });
});