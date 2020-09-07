'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var __jsx = _react['default'].createElement;

var SVG = function SVG(_ref) {
  var children = _ref.children,
    centerOrigin = _ref.centerOrigin;
  return /*#__PURE__*/ _react['default'].createElement(
    ScalingSVGContainer,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      ScalingSVG,
      {
        preserveAspectRatio: 'xMidYMid meet',
        viewBox: '-'
          .concat(centerOrigin ? 50 : 0, ' -')
          .concat(centerOrigin ? 50 : 0, ' 100 100'),
      },
      children,
    ),
  );
};

var _default = SVG;
exports['default'] = _default;

var ScalingSVGContainer = _styledComponents['default'].div.withConfig({
  displayName: 'SVG__ScalingSVGContainer',
  componentId: 'unrltp-0',
})([
  'position:relative;padding-bottom:100vh;max-height:100vh;display:flex;flex:1;',
]);

var ScalingSVG = _styledComponents['default'].svg.withConfig({
  displayName: 'SVG__ScalingSVG',
  componentId: 'unrltp-1',
})([
  'background-color:transparent;position:absolute;width:100%;height:100%;left:0;top:0;text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}text::selection{background:none;}',
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvU1ZHLnRzeCJdLCJuYW1lcyI6WyJTVkciLCJjaGlsZHJlbiIsImNlbnRlck9yaWdpbiIsIlNjYWxpbmdTVkdDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTY2FsaW5nU1ZHIiwic3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQU9BLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQW9EO0FBQUEsTUFBakRDLFFBQWlELFFBQWpEQSxRQUFpRDtBQUFBLE1BQXZDQyxZQUF1QyxRQUF2Q0EsWUFBdUM7QUFDOUQsc0JBQ0UsZ0NBQUMsbUJBQUQscUJBQ0UsZ0NBQUMsVUFBRDtBQUNFLElBQUEsbUJBQW1CLEVBQUMsZUFEdEI7QUFFRSxJQUFBLE9BQU8sYUFBTUEsWUFBWSxHQUFHLEVBQUgsR0FBUSxDQUExQixlQUFnQ0EsWUFBWSxHQUFHLEVBQUgsR0FBUSxDQUFwRDtBQUZULEtBSUdELFFBSkgsQ0FERixDQURGO0FBVUQsQ0FYRDs7ZUFhZUQsRzs7O0FBRWYsSUFBTUcsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9GQUF6Qjs7QUFRQSxJQUFNQyxVQUFVLEdBQUdGLDZCQUFPRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVOQUFoQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvU1ZHLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICBjZW50ZXJPcmlnaW4/OiBib29sZWFuO1xufVxuXG5jb25zdCBTVkcgPSAoeyBjaGlsZHJlbiwgY2VudGVyT3JpZ2luIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTY2FsaW5nU1ZHQ29udGFpbmVyPlxuICAgICAgPFNjYWxpbmdTVkdcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICB2aWV3Qm94PXtgLSR7Y2VudGVyT3JpZ2luID8gNTAgOiAwfSAtJHtjZW50ZXJPcmlnaW4gPyA1MCA6IDB9IDEwMCAxMDBgfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1NjYWxpbmdTVkc+XG4gICAgPC9TY2FsaW5nU1ZHQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU1ZHO1xuXG5jb25zdCBTY2FsaW5nU1ZHQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuYDtcblxuY29uc3QgU2NhbGluZ1NWRyA9IHN0eWxlZC5zdmdgXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcblxuICB0ZXh0IHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgdGV4dDo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5gO1xuIl19
