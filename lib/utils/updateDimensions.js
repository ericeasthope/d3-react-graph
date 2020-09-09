'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

// utils/updateDimensions.ts
var updateDimensions = function updateDimensions() {
  simulation
    .force('x', forcer.forceX(context.width / 2))
    .force('y', forcer.forceY(context.height / 2))
    .force('y', forcer.forceZ(context.width / 2))
    .force(
      'center',
      forcer.forceCenter(
        context.width / 2,
        context.height / 2,
        context.width / 2,
      ),
    );
  simulation.alpha(1).restart();
};

var _default = updateDimensions;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvdXBkYXRlRGltZW5zaW9ucy50cyJdLCJuYW1lcyI6WyJ1cGRhdGVEaW1lbnNpb25zIiwic2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VyIiwiZm9yY2VYIiwiY29udGV4dCIsIndpZHRoIiwiZm9yY2VZIiwiaGVpZ2h0IiwiZm9yY2VaIiwiZm9yY2VDZW50ZXIiLCJhbHBoYSIsInJlc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QkMsRUFBQUEsVUFBVSxDQUNQQyxLQURILENBQ1MsR0FEVCxFQUNjQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsT0FBTyxDQUFDQyxLQUFSLEdBQWdCLENBQTlCLENBRGQsRUFFR0osS0FGSCxDQUVTLEdBRlQsRUFFY0MsTUFBTSxDQUFDSSxNQUFQLENBQWNGLE9BQU8sQ0FBQ0csTUFBUixHQUFpQixDQUEvQixDQUZkLEVBR0dOLEtBSEgsQ0FHUyxHQUhULEVBR2NDLE1BQU0sQ0FBQ00sTUFBUCxDQUFjSixPQUFPLENBQUNDLEtBQVIsR0FBZ0IsQ0FBOUIsQ0FIZCxFQUlHSixLQUpILENBS0ksUUFMSixFQU1JQyxNQUFNLENBQUNPLFdBQVAsQ0FDRUwsT0FBTyxDQUFDQyxLQUFSLEdBQWdCLENBRGxCLEVBRUVELE9BQU8sQ0FBQ0csTUFBUixHQUFpQixDQUZuQixFQUdFSCxPQUFPLENBQUNDLEtBQVIsR0FBZ0IsQ0FIbEIsQ0FOSjtBQWFBTCxFQUFBQSxVQUFVLENBQUNVLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0JDLE9BQXBCO0FBQ0QsQ0FmRDs7ZUFpQmVaLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvdXBkYXRlRGltZW5zaW9ucy50c1xuXG5jb25zdCB1cGRhdGVEaW1lbnNpb25zID0gKCkgPT4ge1xuICBzaW11bGF0aW9uXG4gICAgLmZvcmNlKCd4JywgZm9yY2VyLmZvcmNlWChjb250ZXh0LndpZHRoIC8gMikpXG4gICAgLmZvcmNlKCd5JywgZm9yY2VyLmZvcmNlWShjb250ZXh0LmhlaWdodCAvIDIpKVxuICAgIC5mb3JjZSgneScsIGZvcmNlci5mb3JjZVooY29udGV4dC53aWR0aCAvIDIpKVxuICAgIC5mb3JjZShcbiAgICAgICdjZW50ZXInLFxuICAgICAgZm9yY2VyLmZvcmNlQ2VudGVyKFxuICAgICAgICBjb250ZXh0LndpZHRoIC8gMixcbiAgICAgICAgY29udGV4dC5oZWlnaHQgLyAyLFxuICAgICAgICBjb250ZXh0LndpZHRoIC8gMixcbiAgICAgICksXG4gICAgKTtcblxuICBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURpbWVuc2lvbnM7XG4iXX0=
