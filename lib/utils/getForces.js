'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);

var d3f3d = _interopRequireWildcard(require('d3-force-3d'));

// utils/getForces.ts
var getForces = function getForces(forces) {
  var forceArray = [];
  forces.map(function (f) {
    // Call corresponding force function
    var force = d3f3d[Object.keys(f)[0]](); // Get force function parameters

    var parameters = f[Object.keys(f)[0]];
    console.log('Add force', Object.keys(f)[0], '...');
    Object.keys(parameters)
      .filter(function (k) {
        return k !== 'key';
      })
      .map(function (k) {
        var value = parameters[k];

        if (typeof value === 'string' && value.split('=>').length > 1) {
          console.log('Generated parameter map.');

          var _value$split = value.split('=>'),
            _value$split2 = (0, _slicedToArray2['default'])(_value$split, 2),
            args = _value$split2[0],
            output = _value$split2[1];

          var inputs = args.match(/\((.*)\)/).pop();

          if (inputs.length === 0) {
            var argMap = Function('return' + output);
            console.log(k, argMap);
            force[k](argMap);
          } else {
            var _argMap = Function('d', 'return' + output);

            force[k](_argMap);
          }
        } else {
          console.log(k, value);
          force[k](value);
        }
      });
    forceArray.push([parameters['key'], force]);
  });
  return forceArray;
};

var _default = getForces;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvZ2V0Rm9yY2VzLnRzIl0sIm5hbWVzIjpbImdldEZvcmNlcyIsImZvcmNlcyIsImZvcmNlQXJyYXkiLCJtYXAiLCJmIiwiZm9yY2UiLCJkM2YzZCIsIk9iamVjdCIsImtleXMiLCJwYXJhbWV0ZXJzIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsImsiLCJ2YWx1ZSIsInNwbGl0IiwibGVuZ3RoIiwiYXJncyIsIm91dHB1dCIsImlucHV0cyIsIm1hdGNoIiwicG9wIiwiYXJnTWFwIiwiRnVuY3Rpb24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRkE7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxNQUFELEVBQVk7QUFDNUIsTUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLENBQUQsRUFBTztBQUNoQjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosQ0FBWixFQUFlLENBQWYsQ0FBRCxDQUFMLEVBQWQsQ0FGZ0IsQ0FJaEI7O0FBQ0EsUUFBTUssVUFBVSxHQUFHTCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixDQUFaLEVBQWUsQ0FBZixDQUFELENBQXBCO0FBRUFNLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixDQUFaLEVBQWUsQ0FBZixDQUF6QixFQUE0QyxLQUE1QztBQUNBRyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsVUFBWixFQUNHRyxNQURILENBQ1UsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsS0FBSyxLQUFiO0FBQUEsS0FEVixFQUVHVixHQUZILENBRU8sVUFBQ1UsQ0FBRCxFQUFPO0FBQ1YsVUFBTUMsS0FBSyxHQUFHTCxVQUFVLENBQUNJLENBQUQsQ0FBeEI7O0FBQ0EsVUFBSSxPQUFPQyxLQUFQLEtBQWlCLFFBQWpCLElBQTZCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWSxJQUFaLEVBQWtCQyxNQUFsQixHQUEyQixDQUE1RCxFQUErRDtBQUM3RE4sUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7O0FBRDZELDJCQUV0Q0csS0FBSyxDQUFDQyxLQUFOLENBQVksSUFBWixDQUZzQztBQUFBO0FBQUEsWUFFdERFLElBRnNEO0FBQUEsWUFFaERDLE1BRmdEOztBQUc3RCxZQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLFVBQVgsRUFBdUJDLEdBQXZCLEVBQWY7O0FBQ0EsWUFBSUYsTUFBTSxDQUFDSCxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLGNBQU1NLE1BQU0sR0FBR0MsUUFBUSxDQUFDLFdBQVdMLE1BQVosQ0FBdkI7QUFDQVIsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLENBQVosRUFBZVMsTUFBZjtBQUNBakIsVUFBQUEsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU1MsTUFBVDtBQUNELFNBSkQsTUFJTztBQUNMLGNBQU1BLE9BQU0sR0FBR0MsUUFBUSxDQUFDLEdBQUQsRUFBTSxXQUFXTCxNQUFqQixDQUF2Qjs7QUFDQWIsVUFBQUEsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU1MsT0FBVDtBQUNEO0FBQ0YsT0FaRCxNQVlPO0FBQ0xaLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxDQUFaLEVBQWVDLEtBQWY7QUFDQVQsUUFBQUEsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsS0FBVDtBQUNEO0FBQ0YsS0FwQkg7QUFxQkFaLElBQUFBLFVBQVUsQ0FBQ3NCLElBQVgsQ0FBZ0IsQ0FBQ2YsVUFBVSxDQUFDLEtBQUQsQ0FBWCxFQUFvQkosS0FBcEIsQ0FBaEI7QUFDRCxHQTlCRDtBQStCQSxTQUFPSCxVQUFQO0FBQ0QsQ0FsQ0Q7O2VBb0NlRixTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvZ2V0Rm9yY2VzLnRzXG5cbmltcG9ydCAqIGFzIGQzZjNkIGZyb20gJ2QzLWZvcmNlLTNkJztcblxuY29uc3QgZ2V0Rm9yY2VzID0gKGZvcmNlcykgPT4ge1xuICBjb25zdCBmb3JjZUFycmF5ID0gW107XG4gIGZvcmNlcy5tYXAoKGYpID0+IHtcbiAgICAvLyBDYWxsIGNvcnJlc3BvbmRpbmcgZm9yY2UgZnVuY3Rpb25cbiAgICBjb25zdCBmb3JjZSA9IGQzZjNkW09iamVjdC5rZXlzKGYpWzBdXSgpO1xuXG4gICAgLy8gR2V0IGZvcmNlIGZ1bmN0aW9uIHBhcmFtZXRlcnNcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gZltPYmplY3Qua2V5cyhmKVswXV07XG5cbiAgICBjb25zb2xlLmxvZygnQWRkIGZvcmNlJywgT2JqZWN0LmtleXMoZilbMF0sICcuLi4nKTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKVxuICAgICAgLmZpbHRlcigoaykgPT4gayAhPT0gJ2tleScpXG4gICAgICAubWFwKChrKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1trXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3BsaXQoJz0+JykubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdHZW5lcmF0ZWQgcGFyYW1ldGVyIG1hcC4nKTtcbiAgICAgICAgICBjb25zdCBbYXJncywgb3V0cHV0XSA9IHZhbHVlLnNwbGl0KCc9PicpO1xuICAgICAgICAgIGNvbnN0IGlucHV0cyA9IGFyZ3MubWF0Y2goL1xcKCguKilcXCkvKS5wb3AoKTtcbiAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgYXJnTWFwID0gRnVuY3Rpb24oJ3JldHVybicgKyBvdXRwdXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaywgYXJnTWFwKTtcbiAgICAgICAgICAgIGZvcmNlW2tdKGFyZ01hcCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ01hcCA9IEZ1bmN0aW9uKCdkJywgJ3JldHVybicgKyBvdXRwdXQpO1xuICAgICAgICAgICAgZm9yY2Vba10oYXJnTWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coaywgdmFsdWUpO1xuICAgICAgICAgIGZvcmNlW2tdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgZm9yY2VBcnJheS5wdXNoKFtwYXJhbWV0ZXJzWydrZXknXSwgZm9yY2VdKTtcbiAgfSk7XG4gIHJldHVybiBmb3JjZUFycmF5O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9yY2VzO1xuIl19
