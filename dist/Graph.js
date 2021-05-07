"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var __jsx = _react["default"].createElement;

var Graph = function Graph(_ref) {
  var children = _ref.children,
      nodes = _ref.nodes,
      edges = _ref.edges,
      forces = _ref.forces;
  // Initialize reference to D3 force simulation
  var simulation = (0, _react.useRef)(null); // Initialize reference to graph SVG container

  var graph = (0, _react.useRef)(null); // Initialize refences to graph node and edge D3 selectors

  var node = (0, _react.useRef)(null);
  var edge = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var destroyer;

    if (graph.current) {
      var _runForceSimulation = (0, _utils.runForceSimulation)(nodes, edges, forces),
          _simulation = _runForceSimulation._simulation,
          _destroyer = _runForceSimulation._destroyer;

      simulation.current = _simulation;
      destroyer = _destroyer;
      console.log(simulation.current);
      (0, _utils.executeConfigurables)(_react["default"].Children.toArray(children));
    }

    return destroyer;
  }, [forces]);
  (0, _react.useEffect)(function () {
    simulation.current.nodes(nodes);
    node.current = (0, _utils.executeNodelikeChildren)(children, nodes);
    simulation.current.force('link').links(edges);
    edge.current = (0, _utils.executeEdgelikeChildren)(children, edges);
    simulation.current.on('tick', function () {
      Object.values(node.current).map(function (n) {
        return n.tick ? n.tick() : null;
      });
      Object.values(edge.current).map(function (l) {
        return l.tick ? l.tick() : null;
      });
    });
  }, [nodes, edges]); // useEffect(() => {}, [edges]);
  // useEffect(() => {}, [forces]);

  return /*#__PURE__*/_react["default"].createElement("g", {
    ref: graph
  }, /*#__PURE__*/_react["default"].createElement("g", {
    className: "edges"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    className: "nodes"
  }));
};

var _default = Graph;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvR3JhcGgudHN4Il0sIm5hbWVzIjpbIkdyYXBoIiwiY2hpbGRyZW4iLCJub2RlcyIsImVkZ2VzIiwiZm9yY2VzIiwic2ltdWxhdGlvbiIsImdyYXBoIiwibm9kZSIsImVkZ2UiLCJkZXN0cm95ZXIiLCJjdXJyZW50IiwiX3NpbXVsYXRpb24iLCJfZGVzdHJveWVyIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiZm9yY2UiLCJsaW5rcyIsIm9uIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwibiIsInRpY2siLCJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQWdCQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE0RDtBQUFBLE1BQXpEQyxRQUF5RCxRQUF6REEsUUFBeUQ7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLE1BQWpDQyxNQUFpQyxRQUFqQ0EsTUFBaUM7QUFDeEU7QUFDQSxNQUFNQyxVQUFVLEdBQUcsbUJBQU8sSUFBUCxDQUFuQixDQUZ3RSxDQUl4RTs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsbUJBQU8sSUFBUCxDQUFkLENBTHdFLENBT3hFOztBQUNBLE1BQU1DLElBQUksR0FBRyxtQkFBTyxJQUFQLENBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsbUJBQU8sSUFBUCxDQUFiO0FBRUEsd0JBQVUsWUFBTTtBQUNkLFFBQUlDLFNBQUo7O0FBRUEsUUFBSUgsS0FBSyxDQUFDSSxPQUFWLEVBQW1CO0FBQUEsZ0NBQ21CLCtCQUNsQ1IsS0FEa0MsRUFFbENDLEtBRmtDLEVBR2xDQyxNQUhrQyxDQURuQjtBQUFBLFVBQ1RPLFdBRFMsdUJBQ1RBLFdBRFM7QUFBQSxVQUNJQyxVQURKLHVCQUNJQSxVQURKOztBQU1qQlAsTUFBQUEsVUFBVSxDQUFDSyxPQUFYLEdBQXFCQyxXQUFyQjtBQUNBRixNQUFBQSxTQUFTLEdBQUdHLFVBQVo7QUFFQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFVBQVUsQ0FBQ0ssT0FBdkI7QUFFQSx1Q0FBcUJLLGtCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJoQixRQUF2QixDQUFyQjtBQUNEOztBQUVELFdBQU9RLFNBQVA7QUFDRCxHQWxCRCxFQWtCRyxDQUFDTCxNQUFELENBbEJIO0FBb0JBLHdCQUFVLFlBQU07QUFDZEMsSUFBQUEsVUFBVSxDQUFDSyxPQUFYLENBQW1CUixLQUFuQixDQUF5QkEsS0FBekI7QUFDQUssSUFBQUEsSUFBSSxDQUFDRyxPQUFMLEdBQWUsb0NBQXdCVCxRQUF4QixFQUFrQ0MsS0FBbEMsQ0FBZjtBQUVBRyxJQUFBQSxVQUFVLENBQUNLLE9BQVgsQ0FBbUJRLEtBQW5CLENBQXlCLE1BQXpCLEVBQWlDQyxLQUFqQyxDQUF1Q2hCLEtBQXZDO0FBQ0FLLElBQUFBLElBQUksQ0FBQ0UsT0FBTCxHQUFlLG9DQUF3QlQsUUFBeEIsRUFBa0NFLEtBQWxDLENBQWY7QUFFQUUsSUFBQUEsVUFBVSxDQUFDSyxPQUFYLENBQW1CVSxFQUFuQixDQUFzQixNQUF0QixFQUE4QixZQUFNO0FBQ2xDQyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2YsSUFBSSxDQUFDRyxPQUFuQixFQUE0QmEsR0FBNUIsQ0FBZ0MsVUFBQ0MsQ0FBRDtBQUFBLGVBQzlCQSxDQUFDLENBQUNDLElBQUYsR0FBU0QsQ0FBQyxDQUFDQyxJQUFGLEVBQVQsR0FBb0IsSUFEVTtBQUFBLE9BQWhDO0FBR0FKLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZCxJQUFJLENBQUNFLE9BQW5CLEVBQTRCYSxHQUE1QixDQUFnQyxVQUFDRyxDQUFEO0FBQUEsZUFDOUJBLENBQUMsQ0FBQ0QsSUFBRixHQUFTQyxDQUFDLENBQUNELElBQUYsRUFBVCxHQUFvQixJQURVO0FBQUEsT0FBaEM7QUFHRCxLQVBEO0FBUUQsR0FmRCxFQWVHLENBQUN2QixLQUFELEVBQVFDLEtBQVIsQ0FmSCxFQS9Cd0UsQ0FnRHhFO0FBQ0E7O0FBRUEsc0JBQ0U7QUFBRyxJQUFBLEdBQUcsRUFBRUc7QUFBUixrQkFDRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsSUFERixlQUVFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixJQUZGLENBREY7QUFNRCxDQXpERDs7ZUEyRGVOLEsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0dyYXBoLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEM05vZGUsIEQzRWRnZSB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7XG4gIHJ1bkZvcmNlU2ltdWxhdGlvbixcbiAgZXhlY3V0ZUNvbmZpZ3VyYWJsZXMsXG4gIGV4ZWN1dGVOb2RlbGlrZUNoaWxkcmVuLFxuICBleGVjdXRlRWRnZWxpa2VDaGlsZHJlbixcbn0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbiAgbm9kZXM6IEQzTm9kZVtdO1xuICBlZGdlczogRDNFZGdlW107XG4gIGZvcmNlczoge1xuICAgIFtrZXk6IHN0cmluZ106IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICB9O1xufVxuXG5jb25zdCBHcmFwaCA9ICh7IGNoaWxkcmVuLCBub2RlcywgZWRnZXMsIGZvcmNlcyB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSByZWZlcmVuY2UgdG8gRDMgZm9yY2Ugc2ltdWxhdGlvblxuICBjb25zdCBzaW11bGF0aW9uID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIEluaXRpYWxpemUgcmVmZXJlbmNlIHRvIGdyYXBoIFNWRyBjb250YWluZXJcbiAgY29uc3QgZ3JhcGggPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSByZWZlbmNlcyB0byBncmFwaCBub2RlIGFuZCBlZGdlIEQzIHNlbGVjdG9yc1xuICBjb25zdCBub2RlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBlZGdlID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRlc3Ryb3llcjogdm9pZCB8ICgoKSA9PiB2b2lkKTtcblxuICAgIGlmIChncmFwaC5jdXJyZW50KSB7XG4gICAgICBjb25zdCB7IF9zaW11bGF0aW9uLCBfZGVzdHJveWVyIH0gPSBydW5Gb3JjZVNpbXVsYXRpb24oXG4gICAgICAgIG5vZGVzLFxuICAgICAgICBlZGdlcyxcbiAgICAgICAgZm9yY2VzLFxuICAgICAgKTtcbiAgICAgIHNpbXVsYXRpb24uY3VycmVudCA9IF9zaW11bGF0aW9uO1xuICAgICAgZGVzdHJveWVyID0gX2Rlc3Ryb3llcjtcblxuICAgICAgY29uc29sZS5sb2coc2ltdWxhdGlvbi5jdXJyZW50KTtcblxuICAgICAgZXhlY3V0ZUNvbmZpZ3VyYWJsZXMoUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikgYXMgSlNYLkVsZW1lbnRbXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Ryb3llcjtcbiAgfSwgW2ZvcmNlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2ltdWxhdGlvbi5jdXJyZW50Lm5vZGVzKG5vZGVzKTtcbiAgICBub2RlLmN1cnJlbnQgPSBleGVjdXRlTm9kZWxpa2VDaGlsZHJlbihjaGlsZHJlbiwgbm9kZXMpO1xuXG4gICAgc2ltdWxhdGlvbi5jdXJyZW50LmZvcmNlKCdsaW5rJykubGlua3MoZWRnZXMpO1xuICAgIGVkZ2UuY3VycmVudCA9IGV4ZWN1dGVFZGdlbGlrZUNoaWxkcmVuKGNoaWxkcmVuLCBlZGdlcyk7XG5cbiAgICBzaW11bGF0aW9uLmN1cnJlbnQub24oJ3RpY2snLCAoKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKG5vZGUuY3VycmVudCkubWFwKChuOiB7IG5hbWU6IHN0cmluZzsgdGljazogKCkgPT4gdm9pZCB9KSA9PlxuICAgICAgICBuLnRpY2sgPyBuLnRpY2soKSA6IG51bGwsXG4gICAgICApO1xuICAgICAgT2JqZWN0LnZhbHVlcyhlZGdlLmN1cnJlbnQpLm1hcCgobDogeyBuYW1lOiBzdHJpbmc7IHRpY2s6ICgpID0+IHZvaWQgfSkgPT5cbiAgICAgICAgbC50aWNrID8gbC50aWNrKCkgOiBudWxsLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfSwgW25vZGVzLCBlZGdlc10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2VkZ2VzXSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2ZvcmNlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGcgcmVmPXtncmFwaH0+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJlZGdlc1wiIC8+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJub2Rlc1wiIC8+XG4gICAgPC9nPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXX0=