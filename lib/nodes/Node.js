"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var Node = function Node(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

var _default = Node;
/*
.call((node) =>
  node.transition().attr("r", function (d) {
    return 10 - d.depth;
  })
)

import styled, { keyframes } from 'styled-components';

interface NodesProps {
  // node: boolean;
  // colorScaleType: string;
  // colorScale: string;
  // clickAction: any;
}

const Nodes = ({
  // colorScale,
  // colorScaleType,
  // mouseoverEvent,
  // mouseoutEvent,
  nodes,
}: // onClickEvent,
// onMouseEnterEvent,
// onMouseExitEvent,
// doubleClickEvent,
NodesProps) => {
  // const color = colorScaleType ? d3[colorScaleType](d3[colorScale]) : () => '#808080';
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  return (
    <g className="nodes">
      {/*nodes.map((node: D3Node, index: number) => {
        return (
          <Node
            color={color(node.group.toString())}
          />
        );
    </g>
  );
};

export const Text = ({ label }: { label: string }) => {
  return (
    <text
      dy="2"
      textAnchor="middle"
      style={{
        stroke: 'none',
        fill: '#000',
        fontFamily: 'monospace',
        fontSize: '6px',
        cursor: 'default',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      {label}
    </text>
  );
};


const easeOutElastic = keyframes`
  0% {
    transform: scale(1);
  }

  16% {
    transform: scale(-0.32);
  }

  28% {
    transform: scale(0.13);
  }
`;

export const ClickableNode = styled.circle`
  transition: transform 125ms ease-out;
  &:hover {
    transform: scale(1.16);
    // animation: ${easeOutElastic} 2s 1;
    // animation-iteration-count: 1;
  }
  &:active {
    transform: scale(0.84);
    // animation: ${easeOutElastic} 2s;
  }
`;


var node = svg
  .append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(graph.nodes)
  .enter()
  .append("circle")
  .attr("r", function (d) {
    return Math.sqrt(8 * Math.PI * d.year);
  })
  .attr("fill", function (d) {
    return color(Math.sqrt(d.count / maxCount));
  })
  .call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  )
  .on("mouseover", function (d) {
    div.transition().duration(250).style("opacity", 1.0);

    return div
      .html(d.id + ": " + d.title)
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY + "px");
  })

  .on("mouseout", function (d) {
    return div.transition().duration(250).style("opacity", 0);
  });
*/

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbm9kZXMvTm9kZS50c3giXSwibmFtZXMiOlsiTm9kZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQU1BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXNDO0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQztBQUNqRCxzQkFBTyxrRUFBR0EsUUFBSCxDQUFQO0FBQ0QsQ0FGRDs7ZUFJZUQsSTtBQUVmIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Ob2RlLnRzeFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbj86IEpTWC5FbGVtZW50O1xufVxuXG5jb25zdCBOb2RlID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuXG4vKlxuLmNhbGwoKG5vZGUpID0+XG4gIG5vZGUudHJhbnNpdGlvbigpLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIDEwIC0gZC5kZXB0aDtcbiAgfSlcbilcblxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBOb2Rlc1Byb3BzIHtcbiAgLy8gbm9kZTogYm9vbGVhbjtcbiAgLy8gY29sb3JTY2FsZVR5cGU6IHN0cmluZztcbiAgLy8gY29sb3JTY2FsZTogc3RyaW5nO1xuICAvLyBjbGlja0FjdGlvbjogYW55O1xufVxuXG5jb25zdCBOb2RlcyA9ICh7XG4gIC8vIGNvbG9yU2NhbGUsXG4gIC8vIGNvbG9yU2NhbGVUeXBlLFxuICAvLyBtb3VzZW92ZXJFdmVudCxcbiAgLy8gbW91c2VvdXRFdmVudCxcbiAgbm9kZXMsXG59OiAvLyBvbkNsaWNrRXZlbnQsXG4vLyBvbk1vdXNlRW50ZXJFdmVudCxcbi8vIG9uTW91c2VFeGl0RXZlbnQsXG4vLyBkb3VibGVDbGlja0V2ZW50LFxuTm9kZXNQcm9wcykgPT4ge1xuICAvLyBjb25zdCBjb2xvciA9IGNvbG9yU2NhbGVUeXBlID8gZDNbY29sb3JTY2FsZVR5cGVdKGQzW2NvbG9yU2NhbGVdKSA6ICgpID0+ICcjODA4MDgwJztcbiAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG4gIHJldHVybiAoXG4gICAgPGcgY2xhc3NOYW1lPVwibm9kZXNcIj5cbiAgICAgIHsvKm5vZGVzLm1hcCgobm9kZTogRDNOb2RlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5vZGVcbiAgICAgICAgICAgIGNvbG9yPXtjb2xvcihub2RlLmdyb3VwLnRvU3RyaW5nKCkpfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgPC9nPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSAoeyBsYWJlbCB9OiB7IGxhYmVsOiBzdHJpbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx0ZXh0XG4gICAgICBkeT1cIjJcIlxuICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBzdHJva2U6ICdub25lJyxcbiAgICAgICAgZmlsbDogJyMwMDAnLFxuICAgICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICAgICAgZm9udFNpemU6ICc2cHgnLFxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgV2Via2l0VXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICBNb3pVc2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIG1zVXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L3RleHQ+XG4gICk7XG59O1xuXG5cbmNvbnN0IGVhc2VPdXRFbGFzdGljID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDE2JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMC4zMik7XG4gIH1cblxuICAyOCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xMyk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDbGlja2FibGVOb2RlID0gc3R5bGVkLmNpcmNsZWBcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEyNW1zIGVhc2Utb3V0O1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTYpO1xuICAgIC8vIGFuaW1hdGlvbjogJHtlYXNlT3V0RWxhc3RpY30gMnMgMTtcbiAgICAvLyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODQpO1xuICAgIC8vIGFuaW1hdGlvbjogJHtlYXNlT3V0RWxhc3RpY30gMnM7XG4gIH1cbmA7XG5cblxudmFyIG5vZGUgPSBzdmdcbiAgLmFwcGVuZChcImdcIilcbiAgLmF0dHIoXCJjbGFzc1wiLCBcIm5vZGVzXCIpXG4gIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgLmRhdGEoZ3JhcGgubm9kZXMpXG4gIC5lbnRlcigpXG4gIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCg4ICogTWF0aC5QSSAqIGQueWVhcik7XG4gIH0pXG4gIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBjb2xvcihNYXRoLnNxcnQoZC5jb3VudCAvIG1heENvdW50KSk7XG4gIH0pXG4gIC5jYWxsKFxuICAgIGQzLmRyYWcoKS5vbihcInN0YXJ0XCIsIGRyYWdzdGFydGVkKS5vbihcImRyYWdcIiwgZHJhZ2dlZCkub24oXCJlbmRcIiwgZHJhZ2VuZGVkKVxuICApXG4gIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCkge1xuICAgIGRpdi50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjUwKS5zdHlsZShcIm9wYWNpdHlcIiwgMS4wKTtcblxuICAgIHJldHVybiBkaXZcbiAgICAgIC5odG1sKGQuaWQgKyBcIjogXCIgKyBkLnRpdGxlKVxuICAgICAgLnN0eWxlKFwibGVmdFwiLCBkMy5ldmVudC5wYWdlWCArIFwicHhcIilcbiAgICAgIC5zdHlsZShcInRvcFwiLCBkMy5ldmVudC5wYWdlWSArIFwicHhcIik7XG4gIH0pXG5cbiAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZGl2LnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTApLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgfSk7XG4qL1xuIl19