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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvZXhlY3V0ZUNoaWxkcmVuLnRzIl0sIm5hbWVzIjpbImV4ZWN1dGVOb2RlbGlrZUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJub2RlcyIsIm5vZGUiLCJSZWFjdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsIm1hcCIsImMiLCJ0eXBlIiwibmFtZSIsInByb3BzIiwibiIsImNoaWxkIiwidGljayIsImV4ZWN1dGVFZGdlbGlrZUNoaWxkcmVuIiwiZWRnZXMiLCJlZGdlIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBR08sSUFBTUEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUNyQ0MsUUFEcUMsRUFFckNDLEtBRnFDLEVBVWxDO0FBQ0gsTUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUFDLG9CQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJMLFFBQXZCLEVBQWlDTSxHQUFqQyxDQUFxQyxVQUFDQyxDQUFELEVBQW9CO0FBQ3ZEO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLElBQVAsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUJOLHdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJFLENBQUMsQ0FBQ0csS0FBRixDQUFRVixRQUEvQixFQUF5Q00sR0FBekMsQ0FBNkMsVUFBQ0ssQ0FBRCxFQUFvQjtBQUMvRDtBQUNBLFlBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDSCxJQUFGLGlDQUFZRyxDQUFDLENBQUNELEtBQWQ7QUFBcUJULFVBQUFBLEtBQUssRUFBRUE7QUFBNUIsV0FBZCxDQUYrRCxDQUkvRDs7QUFDQUMsUUFBQUEsSUFBSSxDQUFDVSxLQUFLLENBQUNILElBQVAsQ0FBSixHQUFtQjtBQUNqQkksVUFBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBREssU0FBbkI7QUFHRCxPQVJEO0FBU0Q7QUFDRixHQWJEOztBQWVBLFNBQU9YLElBQVA7QUFDRCxDQTdCTTs7OztBQStCQSxJQUFNWSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQ3JDZCxRQURxQyxFQUVyQ2UsS0FGcUMsRUFVbEM7QUFDSCxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQWIsb0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkwsUUFBdkIsRUFBaUNNLEdBQWpDLENBQXFDLFVBQUNDLENBQUQsRUFBb0I7QUFDdkQ7QUFDQSxRQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsSUFBUCxLQUFnQixNQUFwQixFQUE0QjtBQUMxQk4sd0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkUsQ0FBQyxDQUFDRyxLQUFGLENBQVFWLFFBQS9CLEVBQXlDTSxHQUF6QyxDQUE2QyxVQUFDVyxDQUFELEVBQW9CO0FBQy9EO0FBQ0EsWUFBTUwsS0FBSyxHQUFHSyxDQUFDLENBQUNULElBQUYsaUNBQVlTLENBQUMsQ0FBQ1AsS0FBZDtBQUFxQkssVUFBQUEsS0FBSyxFQUFFQTtBQUE1QixXQUFkLENBRitELENBSS9EOztBQUNBQyxRQUFBQSxJQUFJLENBQUNKLEtBQUssQ0FBQ0gsSUFBUCxDQUFKLEdBQW1CO0FBQ2pCSSxVQUFBQSxJQUFJLEVBQUVELEtBQUssQ0FBQ0M7QUFESyxTQUFuQjtBQUdELE9BUkQ7QUFTRDtBQUNGLEdBYkQ7O0FBZUEsU0FBT0csSUFBUDtBQUNELENBN0JNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy91dGlscy9leGVjdXRlQ2hpbGRyZW4udHNcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEQzTm9kZSwgRDNFZGdlIH0gZnJvbSAndHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZXhlY3V0ZU5vZGVsaWtlQ2hpbGRyZW4gPSAoXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudCxcbiAgbm9kZXM6IEQzTm9kZVtdLFxuKToge1xuICBba2V5OiBzdHJpbmddOiB7XG4gICAgdGljazoge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgdGljazogKCkgPT4gdm9pZDtcbiAgICB9O1xuICB9O1xufSA9PiB7XG4gIGNvbnN0IG5vZGUgPSB7fTtcblxuICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5tYXAoKGM6IEpTWC5FbGVtZW50KSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIGEgbm9kZS1saWtlIGNvbXBvbmVudFxuICAgIGlmIChjLnR5cGUubmFtZSA9PT0gJ05vZGUnKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGMucHJvcHMuY2hpbGRyZW4pLm1hcCgobjogSlNYLkVsZW1lbnQpID0+IHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgbm9kZS1saWtlIGNvbXBvbmVudCBhcyB0aG91Z2ggaXQgd2VyZSBhIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGNoaWxkID0gbi50eXBlKHsgLi4ubi5wcm9wcywgbm9kZXM6IG5vZGVzIH0pO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIG5vZGUtbGlrZSBjb21wb25lbnQncyB0aWNrIGZ1bmN0aW9uXG4gICAgICAgIG5vZGVbY2hpbGQubmFtZV0gPSB7XG4gICAgICAgICAgdGljazogY2hpbGQudGljayxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgZXhlY3V0ZUVkZ2VsaWtlQ2hpbGRyZW4gPSAoXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudCxcbiAgZWRnZXM6IEQzRWRnZVtdLFxuKToge1xuICBba2V5OiBzdHJpbmddOiB7XG4gICAgdGljazoge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgdGljazogKCkgPT4gdm9pZDtcbiAgICB9O1xuICB9O1xufSA9PiB7XG4gIGNvbnN0IGVkZ2UgPSB7fTtcblxuICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5tYXAoKGM6IEpTWC5FbGVtZW50KSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIGEgZWRnZS1saWtlIGNvbXBvbmVudFxuICAgIGlmIChjLnR5cGUubmFtZSA9PT0gJ0VkZ2UnKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGMucHJvcHMuY2hpbGRyZW4pLm1hcCgobDogSlNYLkVsZW1lbnQpID0+IHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgZWRnZS1saWtlIGNvbXBvbmVudCBhcyB0aG91Z2ggaXQgd2VyZSBhIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IGNoaWxkID0gbC50eXBlKHsgLi4ubC5wcm9wcywgZWRnZXM6IGVkZ2VzIH0pO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIGVkZ2UtbGlrZSBjb21wb25lbnQncyB0aWNrIGZ1bmN0aW9uXG4gICAgICAgIGVkZ2VbY2hpbGQubmFtZV0gPSB7XG4gICAgICAgICAgdGljazogY2hpbGQudGljayxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2U7XG59O1xuIl19