'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var d3 = _interopRequireWildcard(require('d3'));

// components/Zoomable.tsx
var Zoomable = function Zoomable(_ref) {
  var disablePan = _ref.disablePan,
    disableDoubleClick = _ref.disableDoubleClick,
    disableTranslation = _ref.disableTranslation;
  var width = d3.select('svg').node().getBoundingClientRect().width;
  var height = d3.select('svg').node().getBoundingClientRect().height;
  var zoomable = d3.select('svg').call(
    d3
      .zoom()
      .scaleExtent([1, 100])
      .on('zoom', function () {
        var e = d3.event.transform; // const tx = Math.min(0, Math.max(e.x, width - width * e.k));
        // const ty = Math.min(0, Math.max(e.y, height - height * e.k));
        // Set zoom transformation

        var transformation = d3.zoomIdentity // .translate(width/2, height/2)
          .scale(e.k)
          .translate(
            disableTranslation ? 0 : e.x,
            disableTranslation ? 0 : e.y,
          );
        d3.select('svg').select('g').attr('transform', transformation);
      }),
  ); // Disable double click D3 zoom behaviour

  if (disableDoubleClick) zoomable.on('dblclick.zoom', null); // Disable D3 zoom panning if desired

  if (disablePan) zoomable.on('mousedown.zoom', null);
  return {};
};

var _default = Zoomable;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvWm9vbWFibGUudHN4Il0sIm5hbWVzIjpbIlpvb21hYmxlIiwiZGlzYWJsZVBhbiIsImRpc2FibGVEb3VibGVDbGljayIsImRpc2FibGVUcmFuc2xhdGlvbiIsIndpZHRoIiwiZDMiLCJzZWxlY3QiLCJub2RlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwiem9vbWFibGUiLCJjYWxsIiwiem9vbSIsInNjYWxlRXh0ZW50Iiwib24iLCJlIiwiZXZlbnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbiIsInpvb21JZGVudGl0eSIsInNjYWxlIiwiayIsInRyYW5zbGF0ZSIsIngiLCJ5IiwiYXR0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7O0FBSEE7QUFLQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUlFO0FBQUEsTUFIakJDLFVBR2lCLFFBSGpCQSxVQUdpQjtBQUFBLE1BRmpCQyxrQkFFaUIsUUFGakJBLGtCQUVpQjtBQUFBLE1BRGpCQyxrQkFDaUIsUUFEakJBLGtCQUNpQjtBQUNqQixNQUFNQyxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLEtBQVYsRUFBaUJDLElBQWpCLEdBQXdCQyxxQkFBeEIsR0FBZ0RKLEtBQTlEO0FBQ0EsTUFBTUssTUFBTSxHQUFHSixFQUFFLENBQUNDLE1BQUgsQ0FBVSxLQUFWLEVBQWlCQyxJQUFqQixHQUF3QkMscUJBQXhCLEdBQWdEQyxNQUEvRDtBQUVBLE1BQU1DLFFBQVEsR0FBR0wsRUFBRSxDQUFDQyxNQUFILENBQVUsS0FBVixFQUFpQkssSUFBakIsQ0FDZk4sRUFBRSxDQUNDTyxJQURILEdBRUdDLFdBRkgsQ0FFZSxDQUFDLENBQUQsRUFBSSxHQUFKLENBRmYsRUFHR0MsRUFISCxDQUdNLE1BSE4sRUFHYyxZQUFZO0FBQ3RCLFFBQU1DLENBQUMsR0FBR1YsRUFBRSxDQUFDVyxLQUFILENBQVNDLFNBQW5CLENBRHNCLENBR3RCO0FBQ0E7QUFFQTs7QUFDQSxRQUFNQyxjQUFjLEdBQUdiLEVBQUUsQ0FBQ2MsWUFBSCxDQUNyQjtBQURxQixLQUVwQkMsS0FGb0IsQ0FFZEwsQ0FBQyxDQUFDTSxDQUZZLEVBR3BCQyxTQUhvQixDQUluQm5CLGtCQUFrQixHQUFHLENBQUgsR0FBT1ksQ0FBQyxDQUFDUSxDQUpSLEVBS25CcEIsa0JBQWtCLEdBQUcsQ0FBSCxHQUFPWSxDQUFDLENBQUNTLENBTFIsQ0FBdkI7QUFRQW5CLElBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLEtBQVYsRUFBaUJBLE1BQWpCLENBQXdCLEdBQXhCLEVBQTZCbUIsSUFBN0IsQ0FBa0MsV0FBbEMsRUFBK0NQLGNBQS9DO0FBQ0QsR0FuQkgsQ0FEZSxDQUFqQixDQUppQixDQTJCakI7O0FBQ0EsTUFBSWhCLGtCQUFKLEVBQXdCUSxRQUFRLENBQUNJLEVBQVQsQ0FBWSxlQUFaLEVBQTZCLElBQTdCLEVBNUJQLENBOEJqQjs7QUFDQSxNQUFJYixVQUFKLEVBQWdCUyxRQUFRLENBQUNJLEVBQVQsQ0FBWSxnQkFBWixFQUE4QixJQUE5QjtBQUVoQixTQUFPLEVBQVA7QUFDRCxDQXRDRDs7ZUF3Q2VkLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1pvb21hYmxlLnRzeFxuXG5pbXBvcnQgeyBSZWFjdFRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbmNvbnN0IFpvb21hYmxlID0gKHtcbiAgZGlzYWJsZVBhbixcbiAgZGlzYWJsZURvdWJsZUNsaWNrLFxuICBkaXNhYmxlVHJhbnNsYXRpb24sXG59KTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB3aWR0aCA9IGQzLnNlbGVjdCgnc3ZnJykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSBkMy5zZWxlY3QoJ3N2ZycpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgY29uc3Qgem9vbWFibGUgPSBkMy5zZWxlY3QoJ3N2ZycpLmNhbGwoXG4gICAgZDNcbiAgICAgIC56b29tKClcbiAgICAgIC5zY2FsZUV4dGVudChbMSwgMTAwXSlcbiAgICAgIC5vbignem9vbScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZSA9IGQzLmV2ZW50LnRyYW5zZm9ybTtcblxuICAgICAgICAvLyBjb25zdCB0eCA9IE1hdGgubWluKDAsIE1hdGgubWF4KGUueCwgd2lkdGggLSB3aWR0aCAqIGUuaykpO1xuICAgICAgICAvLyBjb25zdCB0eSA9IE1hdGgubWluKDAsIE1hdGgubWF4KGUueSwgaGVpZ2h0IC0gaGVpZ2h0ICogZS5rKSk7XG5cbiAgICAgICAgLy8gU2V0IHpvb20gdHJhbnNmb3JtYXRpb25cbiAgICAgICAgY29uc3QgdHJhbnNmb3JtYXRpb24gPSBkMy56b29tSWRlbnRpdHlcbiAgICAgICAgICAvLyAudHJhbnNsYXRlKHdpZHRoLzIsIGhlaWdodC8yKVxuICAgICAgICAgIC5zY2FsZShlLmspXG4gICAgICAgICAgLnRyYW5zbGF0ZShcbiAgICAgICAgICAgIGRpc2FibGVUcmFuc2xhdGlvbiA/IDAgOiBlLngsXG4gICAgICAgICAgICBkaXNhYmxlVHJhbnNsYXRpb24gPyAwIDogZS55LFxuICAgICAgICAgICk7XG5cbiAgICAgICAgZDMuc2VsZWN0KCdzdmcnKS5zZWxlY3QoJ2cnKS5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm1hdGlvbik7XG4gICAgICB9KSxcbiAgKTtcblxuICAvLyBEaXNhYmxlIGRvdWJsZSBjbGljayBEMyB6b29tIGJlaGF2aW91clxuICBpZiAoZGlzYWJsZURvdWJsZUNsaWNrKSB6b29tYWJsZS5vbignZGJsY2xpY2suem9vbScsIG51bGwpO1xuXG4gIC8vIERpc2FibGUgRDMgem9vbSBwYW5uaW5nIGlmIGRlc2lyZWRcbiAgaWYgKGRpc2FibGVQYW4pIHpvb21hYmxlLm9uKCdtb3VzZWRvd24uem9vbScsIG51bGwpO1xuXG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFpvb21hYmxlO1xuIl19
