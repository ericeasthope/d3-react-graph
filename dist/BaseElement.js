"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

// components/BaseElement.ts
var BaseElement = function BaseElement(_ref) {
  var _ref$attrs = _ref.attrs,
      attrs = _ref$attrs === void 0 ? {} : _ref$attrs,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      title = _ref.title,
      onMouseOver = _ref.onMouseOver,
      onMouseOut = _ref.onMouseOut,
      onClick = _ref.onClick,
      onDoubleClick = _ref.onDoubleClick;
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
};

var _default = BaseElement;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvQmFzZUVsZW1lbnQudHMiXSwibmFtZXMiOlsiQmFzZUVsZW1lbnQiLCJhdHRycyIsInN0eWxlcyIsInRpdGxlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25DbGljayIsIm9uRG91YmxlQ2xpY2siLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiYXR0ciIsIm5hbWUiLCJ2YWx1ZSIsImJsYW5rIiwic3R5bGUiLCJhcHBlbmQiLCJ0ZXh0Iiwib24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFlQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQVFQO0FBQUEsd0JBUFhDLEtBT1c7QUFBQSxNQVBYQSxLQU9XLDJCQVBILEVBT0c7QUFBQSx5QkFOWEMsTUFNVztBQUFBLE1BTlhBLE1BTVcsNEJBTkYsRUFNRTtBQUFBLE1BTFhDLEtBS1csUUFMWEEsS0FLVztBQUFBLE1BSlhDLFdBSVcsUUFKWEEsV0FJVztBQUFBLE1BSFhDLFVBR1csUUFIWEEsVUFHVztBQUFBLE1BRlhDLE9BRVcsUUFGWEEsT0FFVztBQUFBLE1BRFhDLGFBQ1csUUFEWEEsYUFDVztBQUNYQyxFQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZVIsS0FBZixFQUFzQlMsR0FBdEIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsZ0RBQ1pBLElBRFk7QUFBQSxRQUMzQkMsSUFEMkI7QUFBQSxRQUNyQkMsS0FEcUI7O0FBRWxDQyxJQUFBQSxLQUFLLENBQUNILElBQU4sQ0FBV0MsSUFBWCxFQUFpQkMsS0FBakI7QUFDRCxHQUhEO0FBS0FMLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUCxNQUFmLEVBQXVCUSxHQUF2QixDQUEyQixVQUFDSyxLQUFELEVBQVc7QUFBQSxpREFDZEEsS0FEYztBQUFBLFFBQzdCSCxJQUQ2QjtBQUFBLFFBQ3ZCQyxLQUR1Qjs7QUFFcENDLElBQUFBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSCxJQUFaLEVBQWtCQyxLQUFsQjtBQUNELEdBSEQ7QUFLQUMsRUFBQUEsS0FBSyxDQUFDRSxNQUFOLENBQWEsT0FBYixFQUFzQkMsSUFBdEIsQ0FBMkJkLEtBQTNCO0FBRUFXLEVBQUFBLEtBQUssQ0FDRkksRUFESCxDQUNNLFdBRE4sRUFDbUJkLFdBQVcsR0FBR0EsV0FBSCxHQUFpQixJQUQvQyxFQUVHYyxFQUZILENBRU0sVUFGTixFQUVrQmIsVUFBVSxHQUFHQSxVQUFILEdBQWdCLElBRjVDLEVBR0dhLEVBSEgsQ0FHTSxPQUhOLEVBR2VaLE9BQU8sR0FBR0EsT0FBSCxHQUFhLElBSG5DLEVBSUdZLEVBSkgsQ0FJTSxVQUpOLEVBSWtCWCxhQUFhLEdBQUdBLGFBQUgsR0FBbUIsSUFKbEQ7QUFLRCxDQTFCRDs7ZUE0QmVQLFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0Jhc2VFbGVtZW50LnRzXG5cbmltcG9ydCB7IFJlYWN0VGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEQzTm9kZSwgRDNFZGdlIH0gZnJvbSAndHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBzdHlsZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgdGl0bGU/OiBzdHJpbmcgfCAoKGQ6IEQzTm9kZSB8IEQzRWRnZSkgPT4gc3RyaW5nIHwgUmVhY3RUZXh0KTtcbiAgb25Nb3VzZU92ZXI/OiAoZDogRDNOb2RlKSA9PiB2b2lkO1xuICBvbk1vdXNlT3V0PzogKGQ6IEQzTm9kZSkgPT4gdm9pZDtcbiAgb25DbGljaz86IChkOiBEM05vZGUpID0+IHZvaWQ7XG4gIG9uRG91YmxlQ2xpY2s/OiAoZDogRDNOb2RlKSA9PiB2b2lkO1xufVxuXG5jb25zdCBCYXNlRWxlbWVudCA9ICh7XG4gIGF0dHJzID0ge30sXG4gIHN0eWxlcyA9IHt9LFxuICB0aXRsZSxcbiAgb25Nb3VzZU92ZXIsXG4gIG9uTW91c2VPdXQsXG4gIG9uQ2xpY2ssXG4gIG9uRG91YmxlQ2xpY2ssXG59OiBQcm9wcykgPT4ge1xuICBPYmplY3QuZW50cmllcyhhdHRycykubWFwKChhdHRyKSA9PiB7XG4gICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGF0dHI7XG4gICAgYmxhbmsuYXR0cihuYW1lLCB2YWx1ZSBhcyBzdHJpbmcpO1xuICB9KTtcblxuICBPYmplY3QuZW50cmllcyhzdHlsZXMpLm1hcCgoc3R5bGUpID0+IHtcbiAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gc3R5bGU7XG4gICAgYmxhbmsuc3R5bGUobmFtZSwgdmFsdWUgYXMgc3RyaW5nKTtcbiAgfSk7XG5cbiAgYmxhbmsuYXBwZW5kKCd0aXRsZScpLnRleHQodGl0bGUgYXMgc3RyaW5nKTtcblxuICBibGFua1xuICAgIC5vbignbW91c2VvdmVyJywgb25Nb3VzZU92ZXIgPyBvbk1vdXNlT3ZlciA6IG51bGwpXG4gICAgLm9uKCdtb3VzZW91dCcsIG9uTW91c2VPdXQgPyBvbk1vdXNlT3V0IDogbnVsbClcbiAgICAub24oJ2NsaWNrJywgb25DbGljayA/IG9uQ2xpY2sgOiBudWxsKVxuICAgIC5vbignZGJsY2xpY2snLCBvbkRvdWJsZUNsaWNrID8gb25Eb3VibGVDbGljayA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVsZW1lbnQ7XG4iXX0=