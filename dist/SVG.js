"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var __jsx = _react["default"].createElement;

var SVG = function SVG(_ref) {
  var children = _ref.children,
      centerOrigin = _ref.centerOrigin;
  return /*#__PURE__*/_react["default"].createElement(ScalingSVGContainer, null, /*#__PURE__*/_react["default"].createElement(ScalingSVG, {
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "-".concat(centerOrigin ? 50 : 0, " -").concat(centerOrigin ? 50 : 0, " 100 100")
  }, children));
};

var _default = SVG;
exports["default"] = _default;

var ScalingSVGContainer = _styledComponents["default"].div.withConfig({
  displayName: "SVG__ScalingSVGContainer",
  componentId: "unrltp-0"
})(["position:relative;padding-bottom:100vh;max-height:100vh;display:flex;flex:1;"]);

var ScalingSVG = _styledComponents["default"].svg.withConfig({
  displayName: "SVG__ScalingSVG",
  componentId: "unrltp-1"
})(["background-color:transparent;position:absolute;width:100%;height:100%;left:0;top:0;text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}text::selection{background:none;}"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvU1ZHLnRzeCJdLCJuYW1lcyI6WyJTVkciLCJjaGlsZHJlbiIsImNlbnRlck9yaWdpbiIsIlNjYWxpbmdTVkdDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTY2FsaW5nU1ZHIiwic3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQU9BLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQW9EO0FBQUEsTUFBakRDLFFBQWlELFFBQWpEQSxRQUFpRDtBQUFBLE1BQXZDQyxZQUF1QyxRQUF2Q0EsWUFBdUM7QUFDOUQsc0JBQ0UsZ0NBQUMsbUJBQUQscUJBQ0UsZ0NBQUMsVUFBRDtBQUNFLElBQUEsbUJBQW1CLEVBQUMsZUFEdEI7QUFFRSxJQUFBLE9BQU8sYUFBTUEsWUFBWSxHQUFHLEVBQUgsR0FBUSxDQUExQixlQUFnQ0EsWUFBWSxHQUFHLEVBQUgsR0FBUSxDQUFwRDtBQUZULEtBSUdELFFBSkgsQ0FERixDQURGO0FBVUQsQ0FYRDs7ZUFhZUQsRzs7O0FBRWYsSUFBTUcsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9GQUF6Qjs7QUFRQSxJQUFNQyxVQUFVLEdBQUdGLDZCQUFPRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVOQUFoQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvU1ZHLnRzeFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuPzogSlNYLkVsZW1lbnQ7XG4gIGNlbnRlck9yaWdpbj86IGJvb2xlYW47XG59XG5cbmNvbnN0IFNWRyA9ICh7IGNoaWxkcmVuLCBjZW50ZXJPcmlnaW4gfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNjYWxpbmdTVkdDb250YWluZXI+XG4gICAgICA8U2NhbGluZ1NWR1xuICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgIHZpZXdCb3g9e2AtJHtjZW50ZXJPcmlnaW4gPyA1MCA6IDB9IC0ke2NlbnRlck9yaWdpbiA/IDUwIDogMH0gMTAwIDEwMGB9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2NhbGluZ1NWRz5cbiAgICA8L1NjYWxpbmdTVkdDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTVkc7XG5cbmNvbnN0IFNjYWxpbmdTVkdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG5gO1xuXG5jb25zdCBTY2FsaW5nU1ZHID0gc3R5bGVkLnN2Z2BcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuXG4gIHRleHQge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICB0ZXh0OjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbmA7XG4iXX0=