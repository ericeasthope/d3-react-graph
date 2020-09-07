"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("utils");

var __jsx = _react["default"].createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
interface Props {
  nodes: Array<{ id: string; group: number | string }>;
  links: Array<{ source: number | string; target: number | string }>;
  dimensions?: number;
  draggable?: boolean;
  zoomable?: boolean;
  pannable?: boolean;
  alphaDecay?: number;
  velocityDecay?: number;
  onNodeMouseout?: () => void;
  onNodeMouseover?: () => void;
  onNodeClick?: () => void;

  // forces: Array;
  // forceX: { origin: string; strength: number };
  // forceY: { origin: string; strength: number };
  // forceZ: { origin: string; strength: number };
}

simulation,
height,
// nodes = [],
links = [],
dimensions = 2,
draggable = false,
zoomable = false,
pannable = false,
alphaDecay = 1e-2,
velocityDecay = 4e-1,
onNodeMouseover,
onNodeMouseout,
onNodeClick,
*/
var Graph = function Graph(_ref) {
  var children = _ref.children,
      nodes = _ref.nodes,
      links = _ref.links;
  var simulation = (0, _react.useRef)(null); // Initialize reference to graph SVG container

  var graph = (0, _react.useRef)(null); // Initialize refences to graph node and link D3 selectors

  var node = (0, _react.useRef)(null);
  var link = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var destroyer;

    if (graph.current) {
      var _runForceSimulation = (0, _utils.runForceSimulation)(nodes, links),
          _simulation = _runForceSimulation._simulation,
          _destroyer = _runForceSimulation._destroyer;

      simulation.current = _simulation;
      destroyer = _destroyer;
      console.log(simulation.current);
      (0, _utils.executeConfigurables)(_react["default"].Children.toArray(children));
    }
  }, []);
  (0, _react.useEffect)(function () {
    simulation.current.nodes(nodes);
    node.current = executeNodelikeChildren(children, nodes);
    simulation.current.force('link').links(links);
    link.current = executeLinklikeChildren(children, links);
    simulation.current.on('tick', function () {
      Object.values(node.current).map(function (n) {
        return n.tick ? n.tick() : null;
      });
      Object.values(link.current).map(function (l) {
        return l.tick ? l.tick() : null;
      });
    });
  }, [nodes, links]); // useEffect(() => {}, [links]);

  return /*#__PURE__*/_react["default"].createElement("g", {
    ref: graph
  }, /*#__PURE__*/_react["default"].createElement("g", {
    className: "links"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    className: "nodes"
  }));
};

var _default = Graph;
exports["default"] = _default;

var executeNodelikeChildren = function executeNodelikeChildren(children, nodes) {
  var node = {};

  _react["default"].Children.toArray(children).map(function (c) {
    // Check for a node-like component
    if (c.type.name === 'Node') {
      _react["default"].Children.toArray(c.props.children).map(function (n) {
        // Execute the node-like component as though it were a function
        var child = n.type(_objectSpread(_objectSpread({}, n.props), {}, {
          nodes: nodes
        })); // Keep the node-like component's tick function

        node[child.name] = {
          tick: child.tick
        };
      });
    }
  });

  return node;
};

var executeLinklikeChildren = function executeLinklikeChildren(children, links) {
  var link = {};

  _react["default"].Children.toArray(children).map(function (c) {
    // Check for a link-like component
    if (c.type.name === 'Link') {
      _react["default"].Children.toArray(c.props.children).map(function (l) {
        // Execute the link-like component as though it were a function
        var child = l.type(_objectSpread(_objectSpread({}, l.props), {}, {
          links: links
        })); // Keep the link-like component's tick function

        link[child.name] = {
          tick: child.tick
        };
      });
    }
  });

  return link;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvR3JhcGgudHN4Il0sIm5hbWVzIjpbIkdyYXBoIiwiY2hpbGRyZW4iLCJub2RlcyIsImxpbmtzIiwic2ltdWxhdGlvbiIsImdyYXBoIiwibm9kZSIsImxpbmsiLCJkZXN0cm95ZXIiLCJjdXJyZW50IiwiX3NpbXVsYXRpb24iLCJfZGVzdHJveWVyIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiZXhlY3V0ZU5vZGVsaWtlQ2hpbGRyZW4iLCJmb3JjZSIsImV4ZWN1dGVMaW5rbGlrZUNoaWxkcmVuIiwib24iLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJuIiwidGljayIsImwiLCJjIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBR0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FRSztBQUFBLE1BUGpCQyxRQU9pQixRQVBqQkEsUUFPaUI7QUFBQSxNQU5qQkMsS0FNaUIsUUFOakJBLEtBTWlCO0FBQUEsTUFMakJDLEtBS2lCLFFBTGpCQSxLQUtpQjtBQUNqQixNQUFNQyxVQUFVLEdBQUcsbUJBQU8sSUFBUCxDQUFuQixDQURpQixDQUdqQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsbUJBQU8sSUFBUCxDQUFkLENBSmlCLENBTWpCOztBQUNBLE1BQU1DLElBQUksR0FBRyxtQkFBTyxJQUFQLENBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsbUJBQU8sSUFBUCxDQUFiO0FBRUEsd0JBQVUsWUFBTTtBQUNkLFFBQUlDLFNBQUo7O0FBRUEsUUFBSUgsS0FBSyxDQUFDSSxPQUFWLEVBQW1CO0FBQUEsZ0NBQ21CLCtCQUFtQlAsS0FBbkIsRUFBMEJDLEtBQTFCLENBRG5CO0FBQUEsVUFDVE8sV0FEUyx1QkFDVEEsV0FEUztBQUFBLFVBQ0lD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LG9CQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJmLFFBQXZCLEVBQWlDc0IsR0FBakMsQ0FBcUMsVUFBQ0ksQ0FBRCxFQUFPO0FBQzFDO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLElBQVAsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUJmLHdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJXLENBQUMsQ0FBQ0csS0FBRixDQUFRN0IsUUFBL0IsRUFBeUNzQixHQUF6QyxDQUE2QyxVQUFDRyxDQUFELEVBQU87QUFDbEQ7QUFDQSxZQUFNSyxLQUFLLEdBQUdMLENBQUMsQ0FBQ0UsSUFBRixpQ0FBWUYsQ0FBQyxDQUFDSSxLQUFkO0FBQXFCM0IsVUFBQUEsS0FBSyxFQUFFQTtBQUE1QixXQUFkLENBRmtELENBSWxEOztBQUNBSSxRQUFBQSxJQUFJLENBQUN3QixLQUFLLENBQUNGLElBQVAsQ0FBSixHQUFtQjtBQUNqQkosVUFBQUEsSUFBSSxFQUFFTSxLQUFLLENBQUNOO0FBREssU0FBbkI7QUFHRCxPQVJEO0FBU0Q7QUFDRixHQWJEOztBQWVBLFNBQU9sQixJQUFQO0FBQ0QsQ0FuQkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0dyYXBoLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IEQzVHlwZXMgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyBydW5Gb3JjZVNpbXVsYXRpb24sIGV4ZWN1dGVDb25maWd1cmFibGVzIH0gZnJvbSAndXRpbHMnO1xuXG4vKlxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbm9kZXM6IEFycmF5PHsgaWQ6IHN0cmluZzsgZ3JvdXA6IG51bWJlciB8IHN0cmluZyB9PjtcbiAgbGlua3M6IEFycmF5PHsgc291cmNlOiBudW1iZXIgfCBzdHJpbmc7IHRhcmdldDogbnVtYmVyIHwgc3RyaW5nIH0+O1xuICBkaW1lbnNpb25zPzogbnVtYmVyO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICB6b29tYWJsZT86IGJvb2xlYW47XG4gIHBhbm5hYmxlPzogYm9vbGVhbjtcbiAgYWxwaGFEZWNheT86IG51bWJlcjtcbiAgdmVsb2NpdHlEZWNheT86IG51bWJlcjtcbiAgb25Ob2RlTW91c2VvdXQ/OiAoKSA9PiB2b2lkO1xuICBvbk5vZGVNb3VzZW92ZXI/OiAoKSA9PiB2b2lkO1xuICBvbk5vZGVDbGljaz86ICgpID0+IHZvaWQ7XG5cbiAgLy8gZm9yY2VzOiBBcnJheTtcbiAgLy8gZm9yY2VYOiB7IG9yaWdpbjogc3RyaW5nOyBzdHJlbmd0aDogbnVtYmVyIH07XG4gIC8vIGZvcmNlWTogeyBvcmlnaW46IHN0cmluZzsgc3RyZW5ndGg6IG51bWJlciB9O1xuICAvLyBmb3JjZVo6IHsgb3JpZ2luOiBzdHJpbmc7IHN0cmVuZ3RoOiBudW1iZXIgfTtcbn1cblxuc2ltdWxhdGlvbixcbmhlaWdodCxcbi8vIG5vZGVzID0gW10sXG5saW5rcyA9IFtdLFxuZGltZW5zaW9ucyA9IDIsXG5kcmFnZ2FibGUgPSBmYWxzZSxcbnpvb21hYmxlID0gZmFsc2UsXG5wYW5uYWJsZSA9IGZhbHNlLFxuYWxwaGFEZWNheSA9IDFlLTIsXG52ZWxvY2l0eURlY2F5ID0gNGUtMSxcbm9uTm9kZU1vdXNlb3Zlcixcbm9uTm9kZU1vdXNlb3V0LFxub25Ob2RlQ2xpY2ssXG4qL1xuXG5jb25zdCBHcmFwaCA9ICh7XG4gIGNoaWxkcmVuLFxuICBub2RlcyxcbiAgbGlua3MsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIG5vZGVzOiBEM05vZGVbXTtcbiAgbGlua3M6IEQzTGlua1tdO1xufSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qgc2ltdWxhdGlvbiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBJbml0aWFsaXplIHJlZmVyZW5jZSB0byBncmFwaCBTVkcgY29udGFpbmVyXG4gIGNvbnN0IGdyYXBoID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIEluaXRpYWxpemUgcmVmZW5jZXMgdG8gZ3JhcGggbm9kZSBhbmQgbGluayBEMyBzZWxlY3RvcnNcbiAgY29uc3Qgbm9kZSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGluayA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkZXN0cm95ZXI6IHZvaWQgfCAoKCkgPT4gdm9pZCk7XG5cbiAgICBpZiAoZ3JhcGguY3VycmVudCkge1xuICAgICAgY29uc3QgeyBfc2ltdWxhdGlvbiwgX2Rlc3Ryb3llciB9ID0gcnVuRm9yY2VTaW11bGF0aW9uKG5vZGVzLCBsaW5rcyk7XG4gICAgICBzaW11bGF0aW9uLmN1cnJlbnQgPSBfc2ltdWxhdGlvbjtcbiAgICAgIGRlc3Ryb3llciA9IF9kZXN0cm95ZXI7XG5cbiAgICAgIGNvbnNvbGUubG9nKHNpbXVsYXRpb24uY3VycmVudCk7XG5cbiAgICAgIGV4ZWN1dGVDb25maWd1cmFibGVzKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNpbXVsYXRpb24uY3VycmVudC5ub2Rlcyhub2Rlcyk7XG4gICAgbm9kZS5jdXJyZW50ID0gZXhlY3V0ZU5vZGVsaWtlQ2hpbGRyZW4oY2hpbGRyZW4sIG5vZGVzKTtcblxuICAgIHNpbXVsYXRpb24uY3VycmVudC5mb3JjZSgnbGluaycpLmxpbmtzKGxpbmtzKTtcbiAgICBsaW5rLmN1cnJlbnQgPSBleGVjdXRlTGlua2xpa2VDaGlsZHJlbihjaGlsZHJlbiwgbGlua3MpO1xuXG4gICAgc2ltdWxhdGlvbi5jdXJyZW50Lm9uKCd0aWNrJywgKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhub2RlLmN1cnJlbnQpLm1hcCgobikgPT4gKG4udGljayA/IG4udGljaygpIDogbnVsbCkpO1xuICAgICAgT2JqZWN0LnZhbHVlcyhsaW5rLmN1cnJlbnQpLm1hcCgobCkgPT4gKGwudGljayA/IGwudGljaygpIDogbnVsbCkpO1xuICAgIH0pO1xuICB9LCBbbm9kZXMsIGxpbmtzXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHt9LCBbbGlua3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxnIHJlZj17Z3JhcGh9PlxuICAgICAgPGcgY2xhc3NOYW1lPVwibGlua3NcIiAvPlxuICAgICAgPGcgY2xhc3NOYW1lPVwibm9kZXNcIiAvPlxuICAgIDwvZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5jb25zdCBleGVjdXRlTm9kZWxpa2VDaGlsZHJlbiA9IChjaGlsZHJlbiwgbm9kZXMpID0+IHtcbiAgY29uc3Qgbm9kZSA9IHt9O1xuXG4gIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLm1hcCgoYykgPT4ge1xuICAgIC8vIENoZWNrIGZvciBhIG5vZGUtbGlrZSBjb21wb25lbnRcbiAgICBpZiAoYy50eXBlLm5hbWUgPT09ICdOb2RlJykge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjLnByb3BzLmNoaWxkcmVuKS5tYXAoKG4pID0+IHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgbm9kZS1saWtlIGNvbXBvbmVudCBhcyB0aG91Z2ggaXQgd2VyZSBhIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGNoaWxkID0gbi50eXBlKHsgLi4ubi5wcm9wcywgbm9kZXM6IG5vZGVzIH0pO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIG5vZGUtbGlrZSBjb21wb25lbnQncyB0aWNrIGZ1bmN0aW9uXG4gICAgICAgIG5vZGVbY2hpbGQubmFtZV0gPSB7XG4gICAgICAgICAgdGljazogY2hpbGQudGljayxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jb25zdCBleGVjdXRlTGlua2xpa2VDaGlsZHJlbiA9IChjaGlsZHJlbiwgbGlua3MpID0+IHtcbiAgY29uc3QgbGluayA9IHt9O1xuXG4gIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLm1hcCgoYykgPT4ge1xuICAgIC8vIENoZWNrIGZvciBhIGxpbmstbGlrZSBjb21wb25lbnRcbiAgICBpZiAoYy50eXBlLm5hbWUgPT09ICdMaW5rJykge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjLnByb3BzLmNoaWxkcmVuKS5tYXAoKGwpID0+IHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgbGluay1saWtlIGNvbXBvbmVudCBhcyB0aG91Z2ggaXQgd2VyZSBhIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGNoaWxkID0gbC50eXBlKHsgLi4ubC5wcm9wcywgbGlua3M6IGxpbmtzIH0pO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIGxpbmstbGlrZSBjb21wb25lbnQncyB0aWNrIGZ1bmN0aW9uXG4gICAgICAgIGxpbmtbY2hpbGQubmFtZV0gPSB7XG4gICAgICAgICAgdGljazogY2hpbGQudGljayxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxpbms7XG59O1xuIl19