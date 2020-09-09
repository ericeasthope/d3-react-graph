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
  }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvR3JhcGgudHN4Il0sIm5hbWVzIjpbIkdyYXBoIiwiY2hpbGRyZW4iLCJub2RlcyIsImVkZ2VzIiwiZm9yY2VzIiwic2ltdWxhdGlvbiIsImdyYXBoIiwibm9kZSIsImVkZ2UiLCJkZXN0cm95ZXIiLCJjdXJyZW50IiwiX3NpbXVsYXRpb24iLCJfZGVzdHJveWVyIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiZm9yY2UiLCJsaW5rcyIsIm9uIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwibiIsInRpY2siLCJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQWdCQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE0RDtBQUFBLE1BQXpEQyxRQUF5RCxRQUF6REEsUUFBeUQ7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLE1BQWpDQyxNQUFpQyxRQUFqQ0EsTUFBaUM7QUFDeEU7QUFDQSxNQUFNQyxVQUFVLEdBQUcsbUJBQU8sSUFBUCxDQUFuQixDQUZ3RSxDQUl4RTs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsbUJBQU8sSUFBUCxDQUFkLENBTHdFLENBT3hFOztBQUNBLE1BQU1DLElBQUksR0FBRyxtQkFBTyxJQUFQLENBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsbUJBQU8sSUFBUCxDQUFiO0FBRUEsd0JBQVUsWUFBTTtBQUNkLFFBQUlDLFNBQUo7O0FBRUEsUUFBSUgsS0FBSyxDQUFDSSxPQUFWLEVBQW1CO0FBQUEsZ0NBQ21CLCtCQUNsQ1IsS0FEa0MsRUFFbENDLEtBRmtDLEVBR2xDQyxNQUhrQyxDQURuQjtBQUFBLFVBQ1RPLFdBRFMsdUJBQ1RBLFdBRFM7QUFBQSxVQUNJQyxVQURKLHVCQUNJQSxVQURKOztBQU1qQlAsTUFBQUEsVUFBVSxDQUFDSyxPQUFYLEdBQXFCQyxXQUFyQjtBQUNBRixNQUFBQSxTQUFTLEdBQUdHLFVBQVo7QUFFQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFVBQVUsQ0FBQ0ssT0FBdkI7QUFFQSx1Q0FBcUJLLGtCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJoQixRQUF2QixDQUFyQjtBQUNEOztBQUVELFdBQU9RLFNBQVA7QUFDRCxHQWxCRCxFQWtCRyxFQWxCSDtBQW9CQSx3QkFBVSxZQUFNO0FBQ2RKLElBQUFBLFVBQVUsQ0FBQ0ssT0FBWCxDQUFtQlIsS0FBbkIsQ0FBeUJBLEtBQXpCO0FBQ0FLLElBQUFBLElBQUksQ0FBQ0csT0FBTCxHQUFlLG9DQUF3QlQsUUFBeEIsRUFBa0NDLEtBQWxDLENBQWY7QUFFQUcsSUFBQUEsVUFBVSxDQUFDSyxPQUFYLENBQW1CUSxLQUFuQixDQUF5QixNQUF6QixFQUFpQ0MsS0FBakMsQ0FBdUNoQixLQUF2QztBQUNBSyxJQUFBQSxJQUFJLENBQUNFLE9BQUwsR0FBZSxvQ0FBd0JULFFBQXhCLEVBQWtDRSxLQUFsQyxDQUFmO0FBRUFFLElBQUFBLFVBQVUsQ0FBQ0ssT0FBWCxDQUFtQlUsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsWUFBTTtBQUNsQ0MsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNmLElBQUksQ0FBQ0csT0FBbkIsRUFBNEJhLEdBQTVCLENBQWdDLFVBQUNDLENBQUQ7QUFBQSxlQUM5QkEsQ0FBQyxDQUFDQyxJQUFGLEdBQVNELENBQUMsQ0FBQ0MsSUFBRixFQUFULEdBQW9CLElBRFU7QUFBQSxPQUFoQztBQUdBSixNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2QsSUFBSSxDQUFDRSxPQUFuQixFQUE0QmEsR0FBNUIsQ0FBZ0MsVUFBQ0csQ0FBRDtBQUFBLGVBQzlCQSxDQUFDLENBQUNELElBQUYsR0FBU0MsQ0FBQyxDQUFDRCxJQUFGLEVBQVQsR0FBb0IsSUFEVTtBQUFBLE9BQWhDO0FBR0QsS0FQRDtBQVFELEdBZkQsRUFlRyxDQUFDdkIsS0FBRCxFQUFRQyxLQUFSLENBZkgsRUEvQndFLENBZ0R4RTtBQUNBOztBQUVBLHNCQUNFO0FBQUcsSUFBQSxHQUFHLEVBQUVHO0FBQVIsa0JBQ0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLElBREYsZUFFRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsSUFGRixDQURGO0FBTUQsQ0F6REQ7O2VBMkRlTixLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9HcmFwaC50c3hcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRDNOb2RlLCBEM0VkZ2UgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQge1xuICBydW5Gb3JjZVNpbXVsYXRpb24sXG4gIGV4ZWN1dGVDb25maWd1cmFibGVzLFxuICBleGVjdXRlTm9kZWxpa2VDaGlsZHJlbixcbiAgZXhlY3V0ZUVkZ2VsaWtlQ2hpbGRyZW4sXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQ7XG4gIG5vZGVzOiBEM05vZGVbXTtcbiAgZWRnZXM6IEQzRWRnZVtdO1xuICBmb3JjZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgfTtcbn1cblxuY29uc3QgR3JhcGggPSAoeyBjaGlsZHJlbiwgbm9kZXMsIGVkZ2VzLCBmb3JjZXMgfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIC8vIEluaXRpYWxpemUgcmVmZXJlbmNlIHRvIEQzIGZvcmNlIHNpbXVsYXRpb25cbiAgY29uc3Qgc2ltdWxhdGlvbiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBJbml0aWFsaXplIHJlZmVyZW5jZSB0byBncmFwaCBTVkcgY29udGFpbmVyXG4gIGNvbnN0IGdyYXBoID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIEluaXRpYWxpemUgcmVmZW5jZXMgdG8gZ3JhcGggbm9kZSBhbmQgZWRnZSBEMyBzZWxlY3RvcnNcbiAgY29uc3Qgbm9kZSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZWRnZSA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkZXN0cm95ZXI6IHZvaWQgfCAoKCkgPT4gdm9pZCk7XG5cbiAgICBpZiAoZ3JhcGguY3VycmVudCkge1xuICAgICAgY29uc3QgeyBfc2ltdWxhdGlvbiwgX2Rlc3Ryb3llciB9ID0gcnVuRm9yY2VTaW11bGF0aW9uKFxuICAgICAgICBub2RlcyxcbiAgICAgICAgZWRnZXMsXG4gICAgICAgIGZvcmNlcyxcbiAgICAgICk7XG4gICAgICBzaW11bGF0aW9uLmN1cnJlbnQgPSBfc2ltdWxhdGlvbjtcbiAgICAgIGRlc3Ryb3llciA9IF9kZXN0cm95ZXI7XG5cbiAgICAgIGNvbnNvbGUubG9nKHNpbXVsYXRpb24uY3VycmVudCk7XG5cbiAgICAgIGV4ZWN1dGVDb25maWd1cmFibGVzKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pIGFzIEpTWC5FbGVtZW50W10pO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0cm95ZXI7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNpbXVsYXRpb24uY3VycmVudC5ub2Rlcyhub2Rlcyk7XG4gICAgbm9kZS5jdXJyZW50ID0gZXhlY3V0ZU5vZGVsaWtlQ2hpbGRyZW4oY2hpbGRyZW4sIG5vZGVzKTtcblxuICAgIHNpbXVsYXRpb24uY3VycmVudC5mb3JjZSgnbGluaycpLmxpbmtzKGVkZ2VzKTtcbiAgICBlZGdlLmN1cnJlbnQgPSBleGVjdXRlRWRnZWxpa2VDaGlsZHJlbihjaGlsZHJlbiwgZWRnZXMpO1xuXG4gICAgc2ltdWxhdGlvbi5jdXJyZW50Lm9uKCd0aWNrJywgKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhub2RlLmN1cnJlbnQpLm1hcCgobjogeyBuYW1lOiBzdHJpbmc7IHRpY2s6ICgpID0+IHZvaWQgfSkgPT5cbiAgICAgICAgbi50aWNrID8gbi50aWNrKCkgOiBudWxsLFxuICAgICAgKTtcbiAgICAgIE9iamVjdC52YWx1ZXMoZWRnZS5jdXJyZW50KS5tYXAoKGw6IHsgbmFtZTogc3RyaW5nOyB0aWNrOiAoKSA9PiB2b2lkIH0pID0+XG4gICAgICAgIGwudGljayA/IGwudGljaygpIDogbnVsbCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH0sIFtub2RlcywgZWRnZXNdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge30sIFtlZGdlc10pO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge30sIFtmb3JjZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxnIHJlZj17Z3JhcGh9PlxuICAgICAgPGcgY2xhc3NOYW1lPVwiZWRnZXNcIiAvPlxuICAgICAgPGcgY2xhc3NOYW1lPVwibm9kZXNcIiAvPlxuICAgIDwvZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl19