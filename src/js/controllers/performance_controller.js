(function () {
    var app = angular.module('App.controllers.Performance', []);
    app.controller('PerformanceController', ['$scope', function($scope) {

        var that    = this;
        that.charts = getCharts();
        app.charts  = that.charts;
        console.log(app.charts);
        //draw charts
        app.charts  = drawCharts(that.charts);

        function getCharts() {
          //chartist data object for each chart
          console.log('getting charts');
          var charts = [
            {
              'id': 'chart-1',
              'type': 'line',
              'options': {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                  [12, 9, 7, 8, 5],
                  [2, 1, 3.5, 7, 3],
                  [1, 3, 4, 5, 6]
                ],
                fullWidth: true,
                fullHeight: true,
              }
            },
            {
              'id': 'chart-2',
              'type': 'line',
              'options': {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                  [5, 5, 7, 6.5, 8],
                  [4.5, 6, 4.5, 4, 5.5],
                  [2.5, 3.5, 6, 5, 4]
                ],
                fullWidth: true,
                fullHeight: true,
              }
            },
          ];

          return charts;
        }

        function drawCharts(charts) {
          var chart;
          drawn = [];
          console.log('drawing charts');
          for (var i = 0; i < charts.length; i++) {
            chart = charts[i];
            switch(chart.type) {
              case 'line':
                chart = new Chartist.Line('#' + chart.id, chart.options);
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
                console.log(app.charts);
                element.bind('click', function() {
                    for (var i = 0; i < app.charts.length; i++) {
                      app.charts[i].update();
                    }
                });
            }
        };
    });
})();