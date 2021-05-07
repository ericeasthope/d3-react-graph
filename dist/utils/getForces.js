"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var d3 = _interopRequireWildcard(require("d3"));

// components/utils/getForces.ts
var getForces = function getForces(forces) {
  var forceArray = [];
  Object.entries(forces).map(function (f) {
    // Destructure force function name and parameters
    // Call corresponding force function
    var _f = (0, _slicedToArray2["default"])(f, 2),
        name = _f[0],
        parameters = _f[1];

    var force = d3[name](); // console.log(`Add force: ${name}.`);

    Object.keys(parameters).filter(function (key) {
      return key !== 'name';
    }).map(function (key) {
      var parameter = parameters[key];

      if (typeof parameter === 'string' && parameter.split('=>').length > 1) {
        console.log('Generated parameter map.');

        var _parameter$split = parameter.split('=>'),
            _parameter$split2 = (0, _slicedToArray2["default"])(_parameter$split, 2),
            args = _parameter$split2[0],
            output = _parameter$split2[1];

        var inputs = args.match(/\((.*)\)/).pop();

        if (inputs.length === 0) {
          var argMap = Function('return' + output);
          console.log(key, argMap);
          force[key](argMap);
        } else {
          var _argMap = Function('d', 'return' + output);

          force[key](_argMap);
        }
      } else {
        force[key](parameter);
      }
    });
    forceArray.push([parameters.name, force]);
  });
  return forceArray;
};

var _default = getForces;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvZ2V0Rm9yY2VzLnRzIl0sIm5hbWVzIjpbImdldEZvcmNlcyIsImZvcmNlcyIsImZvcmNlQXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZiIsIm5hbWUiLCJwYXJhbWV0ZXJzIiwiZm9yY2UiLCJkMyIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJwYXJhbWV0ZXIiLCJzcGxpdCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhcmdzIiwib3V0cHV0IiwiaW5wdXRzIiwibWF0Y2giLCJwb3AiLCJhcmdNYXAiLCJGdW5jdGlvbiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFGQTtBQUtBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFFMEI7QUFDMUMsTUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBRUFDLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxNQUFmLEVBQXVCSSxHQUF2QixDQUEyQixVQUFDQyxDQUFELEVBQU87QUFDaEM7QUFDQTtBQUZnQyw2Q0FHTEEsQ0FISztBQUFBLFFBR3pCQyxJQUh5QjtBQUFBLFFBR25CQyxVQUhtQjs7QUFJaEMsUUFBTUMsS0FBSyxHQUFHQyxFQUFFLENBQUNILElBQUQsQ0FBRixFQUFkLENBSmdDLENBS2hDOztBQUVBSixJQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWUgsVUFBWixFQUNHSSxNQURILENBQ1UsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsS0FBSyxNQUFqQjtBQUFBLEtBRFYsRUFFR1IsR0FGSCxDQUVPLFVBQUNRLEdBQUQsRUFBUztBQUNaLFVBQU1DLFNBQVMsR0FBR04sVUFBVSxDQUFDSyxHQUFELENBQTVCOztBQUVBLFVBQUksT0FBT0MsU0FBUCxLQUFxQixRQUFyQixJQUFpQ0EsU0FBUyxDQUFDQyxLQUFWLENBQWdCLElBQWhCLEVBQXNCQyxNQUF0QixHQUErQixDQUFwRSxFQUF1RTtBQUNyRUMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7O0FBRHFFLCtCQUU5Q0osU0FBUyxDQUFDQyxLQUFWLENBQWdCLElBQWhCLENBRjhDO0FBQUE7QUFBQSxZQUU5REksSUFGOEQ7QUFBQSxZQUV4REMsTUFGd0Q7O0FBR3JFLFlBQU1DLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsVUFBWCxFQUF1QkMsR0FBdkIsRUFBZjs7QUFDQSxZQUFJRixNQUFNLENBQUNMLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsY0FBTVEsTUFBTSxHQUFHQyxRQUFRLENBQUMsV0FBV0wsTUFBWixDQUF2QjtBQUNBSCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWixFQUFpQlcsTUFBakI7QUFDQWYsVUFBQUEsS0FBSyxDQUFDSSxHQUFELENBQUwsQ0FBV1csTUFBWDtBQUNELFNBSkQsTUFJTztBQUNMLGNBQU1BLE9BQU0sR0FBR0MsUUFBUSxDQUFDLEdBQUQsRUFBTSxXQUFXTCxNQUFqQixDQUF2Qjs7QUFDQVgsVUFBQUEsS0FBSyxDQUFDSSxHQUFELENBQUwsQ0FBV1csT0FBWDtBQUNEO0FBQ0YsT0FaRCxNQVlPO0FBQ0xmLFFBQUFBLEtBQUssQ0FBQ0ksR0FBRCxDQUFMLENBQVdDLFNBQVg7QUFDRDtBQUNGLEtBcEJIO0FBc0JBWixJQUFBQSxVQUFVLENBQUN3QixJQUFYLENBQWdCLENBQUNsQixVQUFVLENBQUNELElBQVosRUFBa0JFLEtBQWxCLENBQWhCO0FBQ0QsR0E5QkQ7QUErQkEsU0FBT1AsVUFBUDtBQUNELENBckNEOztlQXVDZUYsUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvdXRpbHMvZ2V0Rm9yY2VzLnRzXG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IEQzTm9kZSwgRDNFZGdlIH0gZnJvbSAndHlwZXMnO1xuXG5jb25zdCBnZXRGb3JjZXMgPSAoZm9yY2VzOiB7XG4gIFtrZXk6IHN0cmluZ106IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufSk6IFtzdHJpbmcsIGQzLkZvcmNlPEQzTm9kZSwgRDNFZGdlPl1bXSA9PiB7XG4gIGNvbnN0IGZvcmNlQXJyYXkgPSBbXTtcblxuICBPYmplY3QuZW50cmllcyhmb3JjZXMpLm1hcCgoZikgPT4ge1xuICAgIC8vIERlc3RydWN0dXJlIGZvcmNlIGZ1bmN0aW9uIG5hbWUgYW5kIHBhcmFtZXRlcnNcbiAgICAvLyBDYWxsIGNvcnJlc3BvbmRpbmcgZm9yY2UgZnVuY3Rpb25cbiAgICBjb25zdCBbbmFtZSwgcGFyYW1ldGVyc10gPSBmO1xuICAgIGNvbnN0IGZvcmNlID0gZDNbbmFtZV0oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgQWRkIGZvcmNlOiAke25hbWV9LmApO1xuXG4gICAgT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ga2V5ICE9PSAnbmFtZScpXG4gICAgICAubWFwKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyc1trZXldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1ldGVyID09PSAnc3RyaW5nJyAmJiBwYXJhbWV0ZXIuc3BsaXQoJz0+JykubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdHZW5lcmF0ZWQgcGFyYW1ldGVyIG1hcC4nKTtcbiAgICAgICAgICBjb25zdCBbYXJncywgb3V0cHV0XSA9IHBhcmFtZXRlci5zcGxpdCgnPT4nKTtcbiAgICAgICAgICBjb25zdCBpbnB1dHMgPSBhcmdzLm1hdGNoKC9cXCgoLiopXFwpLykucG9wKCk7XG4gICAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ01hcCA9IEZ1bmN0aW9uKCdyZXR1cm4nICsgb3V0cHV0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSwgYXJnTWFwKTtcbiAgICAgICAgICAgIGZvcmNlW2tleV0oYXJnTWFwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXJnTWFwID0gRnVuY3Rpb24oJ2QnLCAncmV0dXJuJyArIG91dHB1dCk7XG4gICAgICAgICAgICBmb3JjZVtrZXldKGFyZ01hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcmNlW2tleV0ocGFyYW1ldGVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBmb3JjZUFycmF5LnB1c2goW3BhcmFtZXRlcnMubmFtZSwgZm9yY2VdKTtcbiAgfSk7XG4gIHJldHVybiBmb3JjZUFycmF5O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9yY2VzO1xuIl19