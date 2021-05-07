"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeEdgelikeChildren = exports.executeNodelikeChildren = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var executeNodelikeChildren = function executeNodelikeChildren(children, nodes) {
  var node = {};

  _react["default"].Children.toArray(children).map(function (c) {
    // Check for a node-like component
    if (c.type.name === 'Node') {
      var blank = c.type(_objectSpread(_objectSpread({}, c.props), {}, {
        nodes: nodes
      }));

      _react["default"].Children.toArray(c.props.children).map(function (n) {
        // Execute the node-like component as though it were a function
        var child = n.type(_objectSpread(_objectSpread({}, n.props), {}, {
          nodes: nodes,
          blank: blank
        })); // Keep the node-like component's tick function

        node[child.name] = {
          tick: child.tick
        };
      });
    }
  });

  return node;
};

exports.executeNodelikeChildren = executeNodelikeChildren;

var executeEdgelikeChildren = function executeEdgelikeChildren(children, edges) {
  var edge = {};

  _react["default"].Children.toArray(children).map(function (c) {
    // Check for a edge-like component
    if (c.type.name === 'Edge') {
      _react["default"].Children.toArray(c.props.children).map(function (l) {
        // Execute the edge-like component as though it were a function
        var child = l.type(_objectSpread(_objectSpread({}, l.props), {}, {
          edges: edges
        })); // Keep the edge-like component's tick function

        edge[child.name] = {
          tick: child.tick
        };
      });
    }
  });

  return edge;
};

exports.executeEdgelikeChildren = executeEdgelikeChildren;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvZXhlY3V0ZUNoaWxkcmVuLnRzIl0sIm5hbWVzIjpbImV4ZWN1dGVOb2RlbGlrZUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJub2RlcyIsIm5vZGUiLCJSZWFjdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsIm1hcCIsImMiLCJ0eXBlIiwibmFtZSIsImJsYW5rIiwicHJvcHMiLCJuIiwiY2hpbGQiLCJ0aWNrIiwiZXhlY3V0ZUVkZ2VsaWtlQ2hpbGRyZW4iLCJlZGdlcyIsImVkZ2UiLCJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFHTyxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQ3JDQyxRQURxQyxFQUVyQ0MsS0FGcUMsRUFVbEM7QUFDSCxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQUMsb0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkwsUUFBdkIsRUFBaUNNLEdBQWpDLENBQXFDLFVBQUNDLENBQUQsRUFBb0I7QUFDdkQ7QUFDQSxRQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsSUFBUCxLQUFnQixNQUFwQixFQUE0QjtBQUMxQixVQUFNQyxLQUFLLEdBQUdILENBQUMsQ0FBQ0MsSUFBRixpQ0FBWUQsQ0FBQyxDQUFDSSxLQUFkO0FBQXFCVixRQUFBQSxLQUFLLEVBQUVBO0FBQTVCLFNBQWQ7O0FBRUFFLHdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJFLENBQUMsQ0FBQ0ksS0FBRixDQUFRWCxRQUEvQixFQUF5Q00sR0FBekMsQ0FBNkMsVUFBQ00sQ0FBRCxFQUFvQjtBQUMvRDtBQUNBLFlBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDSixJQUFGLGlDQUFZSSxDQUFDLENBQUNELEtBQWQ7QUFBcUJWLFVBQUFBLEtBQUssRUFBRUEsS0FBNUI7QUFBbUNTLFVBQUFBLEtBQUssRUFBTEE7QUFBbkMsV0FBZCxDQUYrRCxDQUkvRDs7QUFDQVIsUUFBQUEsSUFBSSxDQUFDVyxLQUFLLENBQUNKLElBQVAsQ0FBSixHQUFtQjtBQUNqQkssVUFBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBREssU0FBbkI7QUFHRCxPQVJEO0FBU0Q7QUFDRixHQWZEOztBQWlCQSxTQUFPWixJQUFQO0FBQ0QsQ0EvQk07Ozs7QUFpQ0EsSUFBTWEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUNyQ2YsUUFEcUMsRUFFckNnQixLQUZxQyxFQVVsQztBQUNILE1BQU1DLElBQUksR0FBRyxFQUFiOztBQUVBZCxvQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCTCxRQUF2QixFQUFpQ00sR0FBakMsQ0FBcUMsVUFBQ0MsQ0FBRCxFQUFvQjtBQUN2RDtBQUNBLFFBQUlBLENBQUMsQ0FBQ0MsSUFBRixDQUFPQyxJQUFQLEtBQWdCLE1BQXBCLEVBQTRCO0FBQzFCTix3QkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCRSxDQUFDLENBQUNJLEtBQUYsQ0FBUVgsUUFBL0IsRUFBeUNNLEdBQXpDLENBQTZDLFVBQUNZLENBQUQsRUFBb0I7QUFDL0Q7QUFDQSxZQUFNTCxLQUFLLEdBQUdLLENBQUMsQ0FBQ1YsSUFBRixpQ0FBWVUsQ0FBQyxDQUFDUCxLQUFkO0FBQXFCSyxVQUFBQSxLQUFLLEVBQUVBO0FBQTVCLFdBQWQsQ0FGK0QsQ0FJL0Q7O0FBQ0FDLFFBQUFBLElBQUksQ0FBQ0osS0FBSyxDQUFDSixJQUFQLENBQUosR0FBbUI7QUFDakJLLFVBQUFBLElBQUksRUFBRUQsS0FBSyxDQUFDQztBQURLLFNBQW5CO0FBR0QsT0FSRDtBQVNEO0FBQ0YsR0FiRDs7QUFlQSxTQUFPRyxJQUFQO0FBQ0QsQ0E3Qk0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL3V0aWxzL2V4ZWN1dGVDaGlsZHJlbi50c1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRDNOb2RlLCBEM0VkZ2UgfSBmcm9tICd0eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBleGVjdXRlTm9kZWxpa2VDaGlsZHJlbiA9IChcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50LFxuICBub2RlczogRDNOb2RlW10sXG4pOiB7XG4gIFtrZXk6IHN0cmluZ106IHtcbiAgICB0aWNrOiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB0aWNrOiAoKSA9PiB2b2lkO1xuICAgIH07XG4gIH07XG59ID0+IHtcbiAgY29uc3Qgbm9kZSA9IHt9O1xuXG4gIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLm1hcCgoYzogSlNYLkVsZW1lbnQpID0+IHtcbiAgICAvLyBDaGVjayBmb3IgYSBub2RlLWxpa2UgY29tcG9uZW50XG4gICAgaWYgKGMudHlwZS5uYW1lID09PSAnTm9kZScpIHtcbiAgICAgIGNvbnN0IGJsYW5rID0gYy50eXBlKHsgLi4uYy5wcm9wcywgbm9kZXM6IG5vZGVzIH0pO1xuXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGMucHJvcHMuY2hpbGRyZW4pLm1hcCgobjogSlNYLkVsZW1lbnQpID0+IHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgbm9kZS1saWtlIGNvbXBvbmVudCBhcyB0aG91Z2ggaXQgd2VyZSBhIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGNoaWxkID0gbi50eXBlKHsgLi4ubi5wcm9wcywgbm9kZXM6IG5vZGVzLCBibGFuayB9KTtcblxuICAgICAgICAvLyBLZWVwIHRoZSBub2RlLWxpa2UgY29tcG9uZW50J3MgdGljayBmdW5jdGlvblxuICAgICAgICBub2RlW2NoaWxkLm5hbWVdID0ge1xuICAgICAgICAgIHRpY2s6IGNoaWxkLnRpY2ssXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVFZGdlbGlrZUNoaWxkcmVuID0gKFxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQsXG4gIGVkZ2VzOiBEM0VkZ2VbXSxcbik6IHtcbiAgW2tleTogc3RyaW5nXToge1xuICAgIHRpY2s6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIHRpY2s6ICgpID0+IHZvaWQ7XG4gICAgfTtcbiAgfTtcbn0gPT4ge1xuICBjb25zdCBlZGdlID0ge307XG5cbiAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubWFwKChjOiBKU1guRWxlbWVudCkgPT4ge1xuICAgIC8vIENoZWNrIGZvciBhIGVkZ2UtbGlrZSBjb21wb25lbnRcbiAgICBpZiAoYy50eXBlLm5hbWUgPT09ICdFZGdlJykge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjLnByb3BzLmNoaWxkcmVuKS5tYXAoKGw6IEpTWC5FbGVtZW50KSA9PiB7XG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGVkZ2UtbGlrZSBjb21wb25lbnQgYXMgdGhvdWdoIGl0IHdlcmUgYSBmdW5jdGlvblxuICAgICAgICBjb25zdCBjaGlsZCA9IGwudHlwZSh7IC4uLmwucHJvcHMsIGVkZ2VzOiBlZGdlcyB9KTtcblxuICAgICAgICAvLyBLZWVwIHRoZSBlZGdlLWxpa2UgY29tcG9uZW50J3MgdGljayBmdW5jdGlvblxuICAgICAgICBlZGdlW2NoaWxkLm5hbWVdID0ge1xuICAgICAgICAgIHRpY2s6IGNoaWxkLnRpY2ssXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlO1xufTtcbiJdfQ==