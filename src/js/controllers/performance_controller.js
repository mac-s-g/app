(function () {
    var app = angular.module('App.controllers.Performance', []);
    app.controller('PerformanceController', ['$scope', function($scope) {

        // angular.element(document).ready(function(){
            // new Chartist.Line('.ct-chart1', {
            //   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            //   series: [
            //     [12, 9, 7, 8, 5],
            //     [2, 1, 3.5, 7, 3],
            //     [1, 3, 4, 5, 6]
            //   ]
            // });
        // });

        //chart 1
        new Chartist.Line('#chart-1', {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
          ]
        });


        //chart 2
        var data = {
          labels: ['Bananas', 'Apples', 'Grapes'],
          series: [20, 15, 40]
        };

        var options = {
          labelInterpolationFnc: function(value) {
            return value[0]
          }
        };

        var responsiveOptions = [
          ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
              return value;
            }
          }],
          ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
          }]
        ];

        new Chartist.Pie('#chart-2', data, options, responsiveOptions);

        //chart 3
        var chart = new Chartist.Line('#chart-3', {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          series: [
            [1, 5, 2, 5, 4, 3],
            [2, 3, 4, 8, 1, 2],
            [5, 4, 3, 2, 1, 0.5]
          ]
        }, {
          low: 0,
          showArea: true,
          showPoint: false,
          fullWidth: true
        });

        chart.on('draw', function(data) {
          if(data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 2000 * data.index,
                dur: 2000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          }
        });

        //chart 4
        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
          ]
        };

        var options = {
          seriesBarDistance: 10
        };

        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Bar('#chart-4', data, options, responsiveOptions);

    }]);


})();