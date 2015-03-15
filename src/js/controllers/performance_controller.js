(function () {
    var app = angular.module('App.controllers.Performance', []);
    app.controller('PerformanceController', ['$scope', function($scope) {

        //get chart params
        this.chart_params = getChartData();
        //draw charts
        this.charts = drawCharts(this.chart_params);
        //make charts available in directive
        app.charts = this.charts;

        function getChartData() {
          //chartist data object for each chart
          var charts = [
            {
              id: 'chart-1',
              type: 'line',
              description: 'This is the very best description I could think of for chart one.',
              options: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                  [5, 5, 7, 6.5, 8],
                  [4.5, 6, 4.5, 4, 5.5],
                  [2.5, 3.5, 6, 5, 4]
                ],
                fullWidth: true,
                fullHeight: true,
              },
            },
            {
              id: 'chart-2',
              type: 'bar',
              description: 'This is another chart description.  I wasn\'t any more creative for chart two.',
              options: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                  [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                  [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
                ],
                seriesBarDistance: 10,
                fullWidth: true,
                fullHeight: true,
              },
            },
            {
              id: 'chart-3',
              type: 'line',
              description: 'This is the very best description I could think of for chart three.',
              options: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                  [12, 9, 7, 8, 5],
                  [2, 1, 3.5, 7, 3],
                  [1, 3, 4, 5, 6]
                ],
                fullWidth: true,
                fullHeight: true,
              },
            },
          ];

          return charts;
        }

        function drawCharts(charts) {
          var chart;
          drawn = [];
          for (var i = 0; i < charts.length; i++) {
            chart = charts[i];
            switch(chart.type) {
              case 'line':
                chart = new Chartist.Line('#' + chart.id, chart.options);
                break;
              case 'bar':
                chart = new Chartist.Bar('#' + chart.id, chart.options);
                break;
              default:
                console.log('unknown chart type');
            }
            drawn.push(chart);
          }
          //return array of drawn objects
          return drawn;
        }

    }]);

    //this directive is responsible for redraw on fullscreen icon click
    app.directive('reDraw', function() {
        var that = this;
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    for (var i = 0; i < app.charts.length; i++) {
                      app.charts[i].update();
                    }
                });
            }
        };
    });
})();