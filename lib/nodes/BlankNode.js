"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var d3 = _interopRequireWildcard(require("d3"));

// components/BlankNode.tsx
var BlankNode = function BlankNode(_ref) {
  var nodes = _ref.nodes,
      dataKey = _ref.dataKey,
      attrs = _ref.attrs,
      styles = _ref.styles,
      title = _ref.title,
      onMouseOver = _ref.onMouseOver,
      onMouseOut = _ref.onMouseOut,
      onClick = _ref.onClick,
      onDoubleClick = _ref.onDoubleClick;
  var blank = d3.select('.nodes').selectAll('g').data(nodes, dataKey).join(function (enter) {
    return enter.append('g');
  }, function (update) {
    return update;
  }, function (exit) {
    return exit.remove();
  });
  Object.entries(attrs).map(function (attr) {
    var _attr = (0, _slicedToArray2["default"])(attr, 2),
        name = _attr[0],
        value = _attr[1];

    blank.attr(name, value);
  });
  Object.entries(styles).map(function (style) {
    var _style = (0, _slicedToArray2["default"])(style, 2),
        name = _style[0],
        value = _style[1];

    blank.style(name, value);
  });
  blank.append('title').text(title);
  blank.on('mouseover', onMouseOver ? onMouseOver : null).on('mouseout', onMouseOut ? onMouseOut : null).on('click', onClick ? onClick : null).on('dblclick', onDoubleClick ? onDoubleClick : null);
  return {
    name: 'blank',
    tick: function tick() {
      return blank.attr('transform', function (d) {
        return "translate(".concat(d.x, ", ").concat(d.y, ")");
      });
    }
  };
};

var _default = BlankNode;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbm9kZXMvQmxhbmtOb2RlLnRzeCJdLCJuYW1lcyI6WyJCbGFua05vZGUiLCJub2RlcyIsImRhdGFLZXkiLCJhdHRycyIsInN0eWxlcyIsInRpdGxlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25DbGljayIsIm9uRG91YmxlQ2xpY2siLCJibGFuayIsImQzIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiZGF0YSIsImpvaW4iLCJlbnRlciIsImFwcGVuZCIsInVwZGF0ZSIsImV4aXQiLCJyZW1vdmUiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiYXR0ciIsIm5hbWUiLCJ2YWx1ZSIsInN0eWxlIiwidGV4dCIsIm9uIiwidGljayIsImQiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBOztBQUhBO0FBa0JBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BYWI7QUFBQSxNQVpIQyxLQVlHLFFBWkhBLEtBWUc7QUFBQSxNQVhIQyxPQVdHLFFBWEhBLE9BV0c7QUFBQSxNQVZIQyxLQVVHLFFBVkhBLEtBVUc7QUFBQSxNQVRIQyxNQVNHLFFBVEhBLE1BU0c7QUFBQSxNQVJIQyxLQVFHLFFBUkhBLEtBUUc7QUFBQSxNQVBIQyxXQU9HLFFBUEhBLFdBT0c7QUFBQSxNQU5IQyxVQU1HLFFBTkhBLFVBTUc7QUFBQSxNQUxIQyxPQUtHLFFBTEhBLE9BS0c7QUFBQSxNQUpIQyxhQUlHLFFBSkhBLGFBSUc7QUFDSCxNQUFNQyxLQUFLLEdBQUdDLEVBQUUsQ0FDYkMsTUFEVyxDQUNKLFFBREksRUFFWEMsU0FGVyxDQUVELEdBRkMsRUFHWEMsSUFIVyxDQUdOYixLQUhNLEVBR0NDLE9BSEQsRUFJWGEsSUFKVyxDQUtWLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxHQUFiLENBQVg7QUFBQSxHQUxVLEVBTVYsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQVo7QUFBQSxHQU5VLEVBT1YsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0MsTUFBTCxFQUFWO0FBQUEsR0FQVSxDQUFkO0FBVUFDLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlbkIsS0FBZixFQUFzQm9CLEdBQXRCLENBQTBCLFVBQUNDLElBQUQsRUFBVTtBQUFBLGdEQUNaQSxJQURZO0FBQUEsUUFDM0JDLElBRDJCO0FBQUEsUUFDckJDLEtBRHFCOztBQUVsQ2hCLElBQUFBLEtBQUssQ0FBQ2MsSUFBTixDQUFXQyxJQUFYLEVBQWlCQyxLQUFqQjtBQUNELEdBSEQ7QUFLQUwsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVsQixNQUFmLEVBQXVCbUIsR0FBdkIsQ0FBMkIsVUFBQ0ksS0FBRCxFQUFXO0FBQUEsaURBQ2RBLEtBRGM7QUFBQSxRQUM3QkYsSUFENkI7QUFBQSxRQUN2QkMsS0FEdUI7O0FBRXBDaEIsSUFBQUEsS0FBSyxDQUFDaUIsS0FBTixDQUFZRixJQUFaLEVBQWtCQyxLQUFsQjtBQUNELEdBSEQ7QUFLQWhCLEVBQUFBLEtBQUssQ0FBQ08sTUFBTixDQUFhLE9BQWIsRUFBc0JXLElBQXRCLENBQTJCdkIsS0FBM0I7QUFFQUssRUFBQUEsS0FBSyxDQUNGbUIsRUFESCxDQUNNLFdBRE4sRUFDbUJ2QixXQUFXLEdBQUdBLFdBQUgsR0FBaUIsSUFEL0MsRUFFR3VCLEVBRkgsQ0FFTSxVQUZOLEVBRWtCdEIsVUFBVSxHQUFHQSxVQUFILEdBQWdCLElBRjVDLEVBR0dzQixFQUhILENBR00sT0FITixFQUdlckIsT0FBTyxHQUFHQSxPQUFILEdBQWEsSUFIbkMsRUFJR3FCLEVBSkgsQ0FJTSxVQUpOLEVBSWtCcEIsYUFBYSxHQUFHQSxhQUFILEdBQW1CLElBSmxEO0FBTUEsU0FBTztBQUNMZ0IsSUFBQUEsSUFBSSxFQUFFLE9BREQ7QUFFTEssSUFBQUEsSUFBSSxFQUFFO0FBQUEsYUFDSnBCLEtBQUssQ0FBQ2MsSUFBTixDQUNFLFdBREYsRUFFRSxVQUFDTyxDQUFEO0FBQUEsbUNBQXVEQSxDQUFDLENBQUNDLENBQXpELGVBQStERCxDQUFDLENBQUNFLENBQWpFO0FBQUEsT0FGRixDQURJO0FBQUE7QUFGRCxHQUFQO0FBUUQsQ0FsREQ7O2VBb0RlakMsUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQmxhbmtOb2RlLnRzeFxuXG5pbXBvcnQgeyBSZWFjdE5vZGUsIFJlYWN0VGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IEQzTm9kZSB9IGZyb20gJ3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbm9kZXM/OiBEM05vZGVbXTtcbiAgZGF0YUtleT86IChkOiBEM05vZGUpID0+IHN0cmluZztcbiAgYXR0cnM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgc3R5bGVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIHRpdGxlPzogc3RyaW5nIHwgKChkOiBEM05vZGUpID0+IHN0cmluZyB8IFJlYWN0VGV4dCk7XG4gIG9uTW91c2VPdmVyPzogKGQ6IEQzTm9kZSkgPT4gdm9pZDtcbiAgb25Nb3VzZU91dD86IChkOiBEM05vZGUpID0+IHZvaWQ7XG4gIG9uQ2xpY2s/OiAoZDogRDNOb2RlKSA9PiB2b2lkO1xuICBvbkRvdWJsZUNsaWNrPzogKGQ6IEQzTm9kZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgQmxhbmtOb2RlID0gKHtcbiAgbm9kZXMsXG4gIGRhdGFLZXksXG4gIGF0dHJzLFxuICBzdHlsZXMsXG4gIHRpdGxlLFxuICBvbk1vdXNlT3ZlcixcbiAgb25Nb3VzZU91dCxcbiAgb25DbGljayxcbiAgb25Eb3VibGVDbGljayxcbn06IFByb3BzKTogUmVhY3ROb2RlICYge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpY2s6ICgpID0+IHZvaWQ7XG59ID0+IHtcbiAgY29uc3QgYmxhbmsgPSBkM1xuICAgIC5zZWxlY3QoJy5ub2RlcycpXG4gICAgLnNlbGVjdEFsbCgnZycpXG4gICAgLmRhdGEobm9kZXMsIGRhdGFLZXkpXG4gICAgLmpvaW4oXG4gICAgICAoZW50ZXIpID0+IGVudGVyLmFwcGVuZCgnZycpLFxuICAgICAgKHVwZGF0ZSkgPT4gdXBkYXRlLFxuICAgICAgKGV4aXQpID0+IGV4aXQucmVtb3ZlKCksXG4gICAgKTtcblxuICBPYmplY3QuZW50cmllcyhhdHRycykubWFwKChhdHRyKSA9PiB7XG4gICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGF0dHI7XG4gICAgYmxhbmsuYXR0cihuYW1lLCB2YWx1ZSBhcyBzdHJpbmcpO1xuICB9KTtcblxuICBPYmplY3QuZW50cmllcyhzdHlsZXMpLm1hcCgoc3R5bGUpID0+IHtcbiAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gc3R5bGU7XG4gICAgYmxhbmsuc3R5bGUobmFtZSwgdmFsdWUgYXMgc3RyaW5nKTtcbiAgfSk7XG5cbiAgYmxhbmsuYXBwZW5kKCd0aXRsZScpLnRleHQodGl0bGUgYXMgc3RyaW5nKTtcblxuICBibGFua1xuICAgIC5vbignbW91c2VvdmVyJywgb25Nb3VzZU92ZXIgPyBvbk1vdXNlT3ZlciA6IG51bGwpXG4gICAgLm9uKCdtb3VzZW91dCcsIG9uTW91c2VPdXQgPyBvbk1vdXNlT3V0IDogbnVsbClcbiAgICAub24oJ2NsaWNrJywgb25DbGljayA/IG9uQ2xpY2sgOiBudWxsKVxuICAgIC5vbignZGJsY2xpY2snLCBvbkRvdWJsZUNsaWNrID8gb25Eb3VibGVDbGljayA6IG51bGwpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2JsYW5rJyxcbiAgICB0aWNrOiAoKSA9PlxuICAgICAgYmxhbmsuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIChkOiBEM05vZGUgJiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pID0+IGB0cmFuc2xhdGUoJHtkLnh9LCAke2QueX0pYCxcbiAgICAgICksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbGFua05vZGU7XG4iXX0=