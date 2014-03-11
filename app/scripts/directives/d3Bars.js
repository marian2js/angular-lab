'use strict';

angular.module('labApp')
  .directive('d3Bars', function ($window) {
    return {
      restrict: 'A',
      scope: {
        data: '&',
        width: '@',
        height: '@'
      },
      link: function(scope, elem) {
        var container = d3.select(elem[0]),
            data = scope.data() || [],
            svg = container.append('svg');

        // Browser onresize event
        window.onresize = function() {
          scope.$apply();
        };

        // Watch for resize event
        scope.$watch(function() {
          return angular.element($window)[0].innerWidth;
        }, function() {
          scope.render(svg, data);
        });

        scope.render = function(svg, data) {
          var width = scope.width || container.node().offsetWidth,
              height = scope.height || 400;

          svg = svg
            .attr('width', width)
            .attr('height', height);

          // clear previous renders
          svg.selectAll('*').remove();

          // Scale x depending the value
          var xScale = d3.scale.ordinal()
            .domain(data)
            .rangeBands([0, width], 0.1, 0.3);

          // Scale y proportional to the max value
          var yScale = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, height]);

          svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function (d, i) {
              return xScale(d);
            })
            .attr('y', function (d) {
              return height - yScale(d);
            })
            .attr('width', xScale.rangeBand())
            .attr('height', function (d) {
              return yScale(d);
            });
        }
    }};
  });