'use strict';

angular.module('labApp')
  .directive('d3Bars', function ($window) {
    return {
      restrict: 'A',
      scope: {
        data: '&',
        width: '@',
        height: '@',
        colorFrom: '@',
        colorTo: '@',
        showLabels: '@'
      },
      link: function(scope, elem) {
        var container = d3.select(elem[0]),
            data = scope.data() || [],
            svg = container.append('svg'),
            colorFrom = scope.colorFrom || 'green',
            colorTo = scope.colorTo || '#428bca',
            showLabels = scope.showLabels === "true",
            max = d3.max(data);

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

        /**
         * Render the chart
         *
         * @param svg
         * @param {Array} data
         */
        scope.render = function(svg, data) {
          var width = scope.width || container.node().offsetWidth,
              height = scope.height || 400;

          svg = svg
            .attr('width', width)
            .attr('height', height);

          // clear previous renders
          svg.selectAll('*').remove();

          // Scale x according the number of values
          var xScale = d3.scale.ordinal()
            .domain(data)
            .rangeBands([0, width], 0.1, 0);

          // Scale y proportional to the max value
          var yScale = d3.scale.linear()
            .domain([0, max])
            .range([0, height]);

          // Set a scale of colors
          var colorScale = d3.scale.linear()
            .domain([0, max])
            .range([colorFrom, colorTo]);

          svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', xScale)
            .attr('y', function (d) {
              return height - yScale(d);
            })
            .attr('width', xScale.rangeBand())
            .attr('height', yScale)
            .attr('fill', colorScale)

            // Mouse over effect
            .on('mouseover', function () {
              d3.select(this)
                .style('fill', 'blue')
            })
            .on('mouseout', function () {
              d3.select(this)
                .style('fill', colorScale)
            });

          // Add text labels
          if (showLabels) {
            svg.selectAll('text')
              .data(data)
              .enter()
              .append('text')
              .text(function(d) {
                return d;
              })
              .attr('x', xScale)
              .attr('y', function(d) {
                return height - 5;
              });
          }
        };
    }};
  });