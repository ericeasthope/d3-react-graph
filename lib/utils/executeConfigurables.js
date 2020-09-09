"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// components/utils/executeConfigurables.ts
var executeConfigurables = function executeConfigurables(children) {
  children.map(function (c) {
    if (c.type.name === 'Zoomable') {
      c.type(_objectSpread({}, c.props));
    }
  }); // d3.select('.nodes').call(drag(simulation));

  return;
};

var _default = executeConfigurables;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvZXhlY3V0ZUNvbmZpZ3VyYWJsZXMudHMiXSwibmFtZXMiOlsiZXhlY3V0ZUNvbmZpZ3VyYWJsZXMiLCJjaGlsZHJlbiIsIm1hcCIsImMiLCJ0eXBlIiwibmFtZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsUUFBRCxFQUFtQztBQUM5REEsRUFBQUEsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsQ0FBRCxFQUFvQjtBQUMvQixRQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QkYsTUFBQUEsQ0FBQyxDQUFDQyxJQUFGLG1CQUFZRCxDQUFDLENBQUNHLEtBQWQ7QUFDRDtBQUNGLEdBSkQsRUFEOEQsQ0FPOUQ7O0FBQ0E7QUFDRCxDQVREOztlQVdlTixvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvdXRpbHMvZXhlY3V0ZUNvbmZpZ3VyYWJsZXMudHNcblxuY29uc3QgZXhlY3V0ZUNvbmZpZ3VyYWJsZXMgPSAoY2hpbGRyZW46IEpTWC5FbGVtZW50W10pOiBudWxsID0+IHtcbiAgY2hpbGRyZW4ubWFwKChjOiBKU1guRWxlbWVudCkgPT4ge1xuICAgIGlmIChjLnR5cGUubmFtZSA9PT0gJ1pvb21hYmxlJykge1xuICAgICAgYy50eXBlKHsgLi4uYy5wcm9wcyB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGQzLnNlbGVjdCgnLm5vZGVzJykuY2FsbChkcmFnKHNpbXVsYXRpb24pKTtcbiAgcmV0dXJuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhlY3V0ZUNvbmZpZ3VyYWJsZXM7XG4iXX0=