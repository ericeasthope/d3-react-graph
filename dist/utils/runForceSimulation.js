"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var d3 = _interopRequireWildcard(require("d3"));

var _getForces = _interopRequireDefault(require("./getForces"));

// components/utils/runForceSimulation.ts
var runForceSimulation = function runForceSimulation(nodes, edges, forces) {
  // Map edge and node array content to objects
  // const l = edges.map((d: D3Edge) => Object.assign({}, d));
  // const n = nodes.map((d: D3Node) => Object.assign({}, d, { selected: false }));
  // Initialize a Barnes-Hut force simulation
  var simulation = d3.forceSimulation(nodes); // For all forces, add each force to `simulation`

  if (forces) (0, _getForces["default"])(forces).map(function (f) {
    return simulation.force.apply(simulation, (0, _toConsumableArray2["default"])(f));
  }); // Configure the force simulation

  simulation.force('link', d3.forceLink(edges).id(function (d) {
    return d.id;
  }));
  return {
    _simulation: simulation,
    _destroyer: function _destroyer() {
      simulation.stop();
      console.log('Simulation stopped.');
    }
  };
};

var _default = runForceSimulation;
/*
  .alphaDecay(1e-3)
  .velocityDecay(4e-1)
  .numDimensions(dimensions)
  .force(
    'collide',
    d3.forceCollide().radius((d) => (d.r ? d.r : 8)),
  );
*/

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvcnVuRm9yY2VTaW11bGF0aW9uLnRzIl0sIm5hbWVzIjpbInJ1bkZvcmNlU2ltdWxhdGlvbiIsIm5vZGVzIiwiZWRnZXMiLCJmb3JjZXMiLCJzaW11bGF0aW9uIiwiZDMiLCJmb3JjZVNpbXVsYXRpb24iLCJtYXAiLCJmIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJpZCIsImQiLCJfc2ltdWxhdGlvbiIsIl9kZXN0cm95ZXIiLCJzdG9wIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUpBO0FBTUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUN6QkMsS0FEeUIsRUFFekJDLEtBRnlCLEVBR3pCQyxNQUh5QixFQU1rRDtBQUMzRTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxlQUFILENBQW1CTCxLQUFuQixDQUFuQixDQU4yRSxDQVEzRTs7QUFDQSxNQUFJRSxNQUFKLEVBQVksMkJBQVVBLE1BQVYsRUFBa0JJLEdBQWxCLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxXQUFPSixVQUFVLENBQUNLLEtBQVgsT0FBQUwsVUFBVSxzQ0FBVUksQ0FBVixFQUFqQjtBQUFBLEdBQXRCLEVBVCtELENBVzNFOztBQUNBSixFQUFBQSxVQUFVLENBQUNLLEtBQVgsQ0FDRSxNQURGLEVBRUVKLEVBQUUsQ0FBQ0ssU0FBSCxDQUFhUixLQUFiLEVBQW9CUyxFQUFwQixDQUF1QixVQUFDQyxDQUFEO0FBQUEsV0FBZUEsQ0FBQyxDQUFDRCxFQUFqQjtBQUFBLEdBQXZCLENBRkY7QUFLQSxTQUFPO0FBQ0xFLElBQUFBLFdBQVcsRUFBRVQsVUFEUjtBQUVMVSxJQUFBQSxVQUFVLEVBQUUsc0JBQU07QUFDaEJWLE1BQUFBLFVBQVUsQ0FBQ1csSUFBWDtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNEO0FBTEksR0FBUDtBQU9ELENBOUJEOztlQWdDZWpCLGtCO0FBRWYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL3V0aWxzL3J1bkZvcmNlU2ltdWxhdGlvbi50c1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBEM05vZGUsIEQzRWRnZSB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCBnZXRGb3JjZXMgZnJvbSAnLi9nZXRGb3JjZXMnO1xuXG5jb25zdCBydW5Gb3JjZVNpbXVsYXRpb24gPSAoXG4gIG5vZGVzOiBEM05vZGVbXSxcbiAgZWRnZXM6IEQzRWRnZVtdLFxuICBmb3JjZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgfSxcbik6IHsgX3NpbXVsYXRpb246IGQzLlNpbXVsYXRpb248RDNOb2RlLCBEM0VkZ2U+OyBfZGVzdHJveWVyOiAoKSA9PiB2b2lkIH0gPT4ge1xuICAvLyBNYXAgZWRnZSBhbmQgbm9kZSBhcnJheSBjb250ZW50IHRvIG9iamVjdHNcbiAgLy8gY29uc3QgbCA9IGVkZ2VzLm1hcCgoZDogRDNFZGdlKSA9PiBPYmplY3QuYXNzaWduKHt9LCBkKSk7XG4gIC8vIGNvbnN0IG4gPSBub2Rlcy5tYXAoKGQ6IEQzTm9kZSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgZCwgeyBzZWxlY3RlZDogZmFsc2UgfSkpO1xuXG4gIC8vIEluaXRpYWxpemUgYSBCYXJuZXMtSHV0IGZvcmNlIHNpbXVsYXRpb25cbiAgY29uc3Qgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbihub2Rlcyk7XG5cbiAgLy8gRm9yIGFsbCBmb3JjZXMsIGFkZCBlYWNoIGZvcmNlIHRvIGBzaW11bGF0aW9uYFxuICBpZiAoZm9yY2VzKSBnZXRGb3JjZXMoZm9yY2VzKS5tYXAoKGYpID0+IHNpbXVsYXRpb24uZm9yY2UoLi4uZikpO1xuXG4gIC8vIENvbmZpZ3VyZSB0aGUgZm9yY2Ugc2ltdWxhdGlvblxuICBzaW11bGF0aW9uLmZvcmNlKFxuICAgICdsaW5rJyxcbiAgICBkMy5mb3JjZUxpbmsoZWRnZXMpLmlkKChkOiBEM05vZGUpID0+IGQuaWQgYXMgc3RyaW5nKSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIF9zaW11bGF0aW9uOiBzaW11bGF0aW9uLFxuICAgIF9kZXN0cm95ZXI6ICgpID0+IHtcbiAgICAgIHNpbXVsYXRpb24uc3RvcCgpO1xuICAgICAgY29uc29sZS5sb2coJ1NpbXVsYXRpb24gc3RvcHBlZC4nKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcnVuRm9yY2VTaW11bGF0aW9uO1xuXG4vKlxuICAuYWxwaGFEZWNheSgxZS0zKVxuICAudmVsb2NpdHlEZWNheSg0ZS0xKVxuICAubnVtRGltZW5zaW9ucyhkaW1lbnNpb25zKVxuICAuZm9yY2UoXG4gICAgJ2NvbGxpZGUnLFxuICAgIGQzLmZvcmNlQ29sbGlkZSgpLnJhZGl1cygoZCkgPT4gKGQuciA/IGQuciA6IDgpKSxcbiAgKTtcbiovXG4iXX0=