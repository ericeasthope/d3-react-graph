'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty'),
);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2['default'])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

// utils/executeConfigurables.ts
var executeConfigurables = function executeConfigurables(children) {
  children.map(function (c) {
    if (c.type.name === 'Zoomable') {
      c.type(_objectSpread({}, c.props));
    }
  }); // d3.select('.nodes').call(drag(simulation));
};

var _default = executeConfigurables;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvZXhlY3V0ZUNvbmZpZ3VyYWJsZXMudHMiXSwibmFtZXMiOlsiZXhlY3V0ZUNvbmZpZ3VyYWJsZXMiLCJjaGlsZHJlbiIsIm1hcCIsImMiLCJ0eXBlIiwibmFtZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3pDQSxFQUFBQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxDQUFELEVBQU87QUFDbEIsUUFBSUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUJGLE1BQUFBLENBQUMsQ0FBQ0MsSUFBRixtQkFBWUQsQ0FBQyxDQUFDRyxLQUFkO0FBQ0Q7QUFDRixHQUpELEVBRHlDLENBT3pDO0FBQ0QsQ0FSRDs7ZUFVZU4sb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1dGlscy9leGVjdXRlQ29uZmlndXJhYmxlcy50c1xuXG5jb25zdCBleGVjdXRlQ29uZmlndXJhYmxlcyA9IChjaGlsZHJlbikgPT4ge1xuICBjaGlsZHJlbi5tYXAoKGMpID0+IHtcbiAgICBpZiAoYy50eXBlLm5hbWUgPT09ICdab29tYWJsZScpIHtcbiAgICAgIGMudHlwZSh7IC4uLmMucHJvcHMgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBkMy5zZWxlY3QoJy5ub2RlcycpLmNhbGwoZHJhZyhzaW11bGF0aW9uKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRlQ29uZmlndXJhYmxlcztcbiJdfQ==
