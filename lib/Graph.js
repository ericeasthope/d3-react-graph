"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvR3JhcGgudHN4Il0sIm5hbWVzIjpbIkdyYXBoIiwiY2hpbGRyZW4iLCJub2RlcyIsImxpbmtzIiwic2ltdWxhdGlvbiIsImdyYXBoIiwibm9kZSIsImxpbmsiLCJkZXN0cm95ZXIiLCJjdXJyZW50IiwiX3NpbXVsYXRpb24iLCJfZGVzdHJveWVyIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiZXhlY3V0ZU5vZGVsaWtlQ2hpbGRyZW4iLCJmb3JjZSIsImV4ZWN1dGVMaW5rbGlrZUNoaWxkcmVuIiwib24iLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJuIiwidGljayIsImwiLCJjIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBR0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FRSztBQUFBLE1BUGpCQyxRQU9pQixRQVBqQkEsUUFPaUI7QUFBQSxNQU5qQkMsS0FNaUIsUUFOakJBLEtBTWlCO0FBQUEsTUFMakJDLEtBS2lCLFFBTGpCQSxLQUtpQjtBQUNqQixNQUFNQyxVQUFVLEdBQUcsbUJBQU8sSUFBUCxDQUFuQixDQURpQixDQUdqQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsbUJBQU8sSUFBUCxDQUFkLENBSmlCLENBTWpCOztBQUNBLE1BQU1DLElBQUksR0FBRyxtQkFBTyxJQUFQLENBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsbUJBQU8sSUFBUCxDQUFiO0FBRUEsd0JBQVUsWUFBTTtBQUNkLFFBQUlDLFNBQUo7O0FBRUEsUUFBSUgsS0FBSyxDQUFDSSxPQUFWLEVBQW1CO0FBQUEsZ0NBQ21CLCtCQUFtQlAsS0FBbkIsRUFBMEJDLEtBQTFCLENBRG5CO0FBQUEsVUFDVE8sV0FEUyx1QkFDVEEsV0FEUztBQUFBLFVBQ0lD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LG9CQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJmLFFBQXZCLEVBQWlDc0IsR0FBakMsQ0FBcUMsVUFBQ0ksQ0FBRCxFQUFPO0FBQzFDO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLElBQVAsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUJmLHdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJXLENBQUMsQ0FBQ0csS0FBRixDQUFRN0IsUUFBL0IsRUFBeUNzQixHQUF6QyxDQUE2QyxVQUFDRyxDQUFELEVBQU87QUFDbEQ7QUFDQSxZQUFNSyxLQUFLLEdBQUdMLENBQUMsQ0FBQ0UsSUFBRixpQ0FBWUYsQ0FBQyxDQUFDSSxLQUFkO0FBQXFCM0IsVUFBQUEsS0FBSyxFQUFFQTtBQUE1QixXQUFkLENBRmtELENBSWxEOztBQUNBSSxRQUFBQSxJQUFJLENBQUN3QixLQUFLLENBQUNGLElBQVAsQ0FBSixHQUFtQjtBQUNqQkosVUFBQUEsSUFBSSxFQUFFTSxLQUFLLENBQUNOO0FBREssU0FBbkI7QUFHRCxPQVJEO0FBU0Q7QUFDRixHQWJEOztBQWVBLFNBQU9sQixJQUFQO0FBQ0QsQ0FuQkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0dyYXBoLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IEQzVHlwZXMgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyBydW5Gb3JjZVNpbXVsYXRpb24sIGV4ZWN1dGVDb25maWd1cmFibGVzIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG5pbnRlcmZhY2UgUHJvcHMge1xuICBub2RlczogQXJyYXk8eyBpZDogc3RyaW5nOyBncm91cDogbnVtYmVyIHwgc3RyaW5nIH0+O1xuICBsaW5rczogQXJyYXk8eyBzb3VyY2U6IG51bWJlciB8IHN0cmluZzsgdGFyZ2V0OiBudW1iZXIgfCBzdHJpbmcgfT47XG4gIGRpbWVuc2lvbnM/OiBudW1iZXI7XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIHpvb21hYmxlPzogYm9vbGVhbjtcbiAgcGFubmFibGU/OiBib29sZWFuO1xuICBhbHBoYURlY2F5PzogbnVtYmVyO1xuICB2ZWxvY2l0eURlY2F5PzogbnVtYmVyO1xuICBvbk5vZGVNb3VzZW91dD86ICgpID0+IHZvaWQ7XG4gIG9uTm9kZU1vdXNlb3Zlcj86ICgpID0+IHZvaWQ7XG4gIG9uTm9kZUNsaWNrPzogKCkgPT4gdm9pZDtcblxuICAvLyBmb3JjZXM6IEFycmF5O1xuICAvLyBmb3JjZVg6IHsgb3JpZ2luOiBzdHJpbmc7IHN0cmVuZ3RoOiBudW1iZXIgfTtcbiAgLy8gZm9yY2VZOiB7IG9yaWdpbjogc3RyaW5nOyBzdHJlbmd0aDogbnVtYmVyIH07XG4gIC8vIGZvcmNlWjogeyBvcmlnaW46IHN0cmluZzsgc3RyZW5ndGg6IG51bWJlciB9O1xufVxuXG5zaW11bGF0aW9uLFxuaGVpZ2h0LFxuLy8gbm9kZXMgPSBbXSxcbmxpbmtzID0gW10sXG5kaW1lbnNpb25zID0gMixcbmRyYWdnYWJsZSA9IGZhbHNlLFxuem9vbWFibGUgPSBmYWxzZSxcbnBhbm5hYmxlID0gZmFsc2UsXG5hbHBoYURlY2F5ID0gMWUtMixcbnZlbG9jaXR5RGVjYXkgPSA0ZS0xLFxub25Ob2RlTW91c2VvdmVyLFxub25Ob2RlTW91c2VvdXQsXG5vbk5vZGVDbGljayxcbiovXG5cbmNvbnN0IEdyYXBoID0gKHtcbiAgY2hpbGRyZW4sXG4gIG5vZGVzLFxuICBsaW5rcyxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbm9kZXM6IEQzTm9kZVtdO1xuICBsaW5rczogRDNMaW5rW107XG59KTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBzaW11bGF0aW9uID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIEluaXRpYWxpemUgcmVmZXJlbmNlIHRvIGdyYXBoIFNWRyBjb250YWluZXJcbiAgY29uc3QgZ3JhcGggPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSByZWZlbmNlcyB0byBncmFwaCBub2RlIGFuZCBsaW5rIEQzIHNlbGVjdG9yc1xuICBjb25zdCBub2RlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsaW5rID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRlc3Ryb3llcjogdm9pZCB8ICgoKSA9PiB2b2lkKTtcblxuICAgIGlmIChncmFwaC5jdXJyZW50KSB7XG4gICAgICBjb25zdCB7IF9zaW11bGF0aW9uLCBfZGVzdHJveWVyIH0gPSBydW5Gb3JjZVNpbXVsYXRpb24obm9kZXMsIGxpbmtzKTtcbiAgICAgIHNpbXVsYXRpb24uY3VycmVudCA9IF9zaW11bGF0aW9uO1xuICAgICAgZGVzdHJveWVyID0gX2Rlc3Ryb3llcjtcblxuICAgICAgY29uc29sZS5sb2coc2ltdWxhdGlvbi5jdXJyZW50KTtcblxuICAgICAgZXhlY3V0ZUNvbmZpZ3VyYWJsZXMoUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2ltdWxhdGlvbi5jdXJyZW50Lm5vZGVzKG5vZGVzKTtcbiAgICBub2RlLmN1cnJlbnQgPSBleGVjdXRlTm9kZWxpa2VDaGlsZHJlbihjaGlsZHJlbiwgbm9kZXMpO1xuXG4gICAgc2ltdWxhdGlvbi5jdXJyZW50LmZvcmNlKCdsaW5rJykubGlua3MobGlua3MpO1xuICAgIGxpbmsuY3VycmVudCA9IGV4ZWN1dGVMaW5rbGlrZUNoaWxkcmVuKGNoaWxkcmVuLCBsaW5rcyk7XG5cbiAgICBzaW11bGF0aW9uLmN1cnJlbnQub24oJ3RpY2snLCAoKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKG5vZGUuY3VycmVudCkubWFwKChuKSA9PiAobi50aWNrID8gbi50aWNrKCkgOiBudWxsKSk7XG4gICAgICBPYmplY3QudmFsdWVzKGxpbmsuY3VycmVudCkubWFwKChsKSA9PiAobC50aWNrID8gbC50aWNrKCkgOiBudWxsKSk7XG4gICAgfSk7XG4gIH0sIFtub2RlcywgbGlua3NdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge30sIFtsaW5rc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGcgcmVmPXtncmFwaH0+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJsaW5rc1wiIC8+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJub2Rlc1wiIC8+XG4gICAgPC9nPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG5cbmNvbnN0IGV4ZWN1dGVOb2RlbGlrZUNoaWxkcmVuID0gKGNoaWxkcmVuLCBub2RlcykgPT4ge1xuICBjb25zdCBub2RlID0ge307XG5cbiAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubWFwKChjKSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIGEgbm9kZS1saWtlIGNvbXBvbmVudFxuICAgIGlmIChjLnR5cGUubmFtZSA9PT0gJ05vZGUnKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGMucHJvcHMuY2hpbGRyZW4pLm1hcCgobikgPT4ge1xuICAgICAgICAvLyBFeGVjdXRlIHRoZSBub2RlLWxpa2UgY29tcG9uZW50IGFzIHRob3VnaCBpdCB3ZXJlIGEgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgY2hpbGQgPSBuLnR5cGUoeyAuLi5uLnByb3BzLCBub2Rlczogbm9kZXMgfSk7XG5cbiAgICAgICAgLy8gS2VlcCB0aGUgbm9kZS1saWtlIGNvbXBvbmVudCdzIHRpY2sgZnVuY3Rpb25cbiAgICAgICAgbm9kZVtjaGlsZC5uYW1lXSA9IHtcbiAgICAgICAgICB0aWNrOiBjaGlsZC50aWNrLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNvbnN0IGV4ZWN1dGVMaW5rbGlrZUNoaWxkcmVuID0gKGNoaWxkcmVuLCBsaW5rcykgPT4ge1xuICBjb25zdCBsaW5rID0ge307XG5cbiAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubWFwKChjKSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIGEgbGluay1saWtlIGNvbXBvbmVudFxuICAgIGlmIChjLnR5cGUubmFtZSA9PT0gJ0xpbmsnKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGMucHJvcHMuY2hpbGRyZW4pLm1hcCgobCkgPT4ge1xuICAgICAgICAvLyBFeGVjdXRlIHRoZSBsaW5rLWxpa2UgY29tcG9uZW50IGFzIHRob3VnaCBpdCB3ZXJlIGEgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgY2hpbGQgPSBsLnR5cGUoeyAuLi5sLnByb3BzLCBsaW5rczogbGlua3MgfSk7XG5cbiAgICAgICAgLy8gS2VlcCB0aGUgbGluay1saWtlIGNvbXBvbmVudCdzIHRpY2sgZnVuY3Rpb25cbiAgICAgICAgbGlua1tjaGlsZC5uYW1lXSA9IHtcbiAgICAgICAgICB0aWNrOiBjaGlsZC50aWNrLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGluaztcbn07XG4iXX0=