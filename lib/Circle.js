"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var d3 = _interopRequireWildcard(require("d3"));

// components/Circles.tsx
var Circle = function Circle(_ref) {
  var nodes = _ref.nodes,
      title = _ref.title;
  var circle = d3.select('.nodes').selectAll('circle').data(nodes, function (d) {
    return d.id;
  }).join(function (enter) {
    console.log('Circle enter.');
    return enter.append('circle').attr('fill', 'green').attr('r', function (d) {
      return d.r ? d.r : 8;
    });
  }, function (update) {
    return update.transition().duration(250).attr('fill', 'gray').attr('r', function (d) {
      return d.r ? d.r : 8;
    });
  }, function (exit) {
    return exit.attr('fill', 'red').transition().style('opacity', 0).attr('r', 0).on('end', function () {
      d3.select(this).remove();
    });
  }).attr('stroke', '#fff').attr('stroke-width', 1);
  circle.append('title').text(title);
  return {
    name: 'circle',
    tick: function tick() {
      return circle.attr('cx', function (d) {
        return d.x;
      }).attr('cy', function (d) {
        return d.y;
      });
    }
    /*
        .attr('r', (d: any) =>
          5 + (3 * d.z) / 20 > 0 ? 5 + (3 * d.z) / 20 : 0,
        ),
        */

  };
};

var _default = Circle;
/*
const Node = ({
  node,
  color,
}: // mouseoutEvent,
// mouseoverEvent,
// onClickEvent,
// onMouseExitEvent,
// onMouseEnterEvent,
// doubleClickEvent,
NodeProps) => {
    /*
    d3.select(ref.current)
      .on('dblclick', doubleClickEvent)
      .on('mouseover', () => {
        d3.select(ref.current)
          .style('filter', 'url(#blur)');
        d3.select('#blur')
          .select('feGaussianBlur')
          .attr('stdDeviation', 1);
      })
      .on('mouseout', () => {
        d3.select('svg#blur')
          .transition()
          .duration(125)
          .attr('stdDeviation', 0);
        d3.select(ref.current)
          .transition()
          .duration(125)
          .style('filter', 'url(#blur)');
      });
  });

  return (
      {/*{node.type === "circle" ? (
      <g
        className="node"
        onMouseLeave={() => onMouseExitEvent(node)}
        onMouseEnter={() => onMouseEnterEvent(node)}
        onClick={() => onClickEvent(node)}
        ref={ref}
      >
        <Circle title={node.name} color={color} />
        {/*<Text label={node.label} />}
      </g>
    ) : node.type === "tweet" ? (
      <TwitterLogo ref={ref} title={node.id} color={color} />
    ) : null}
    </>
  );
};
*/

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvQ2lyY2xlLnRzeCJdLCJuYW1lcyI6WyJDaXJjbGUiLCJub2RlcyIsInRpdGxlIiwiY2lyY2xlIiwiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZCIsImlkIiwiam9pbiIsImVudGVyIiwiY29uc29sZSIsImxvZyIsImFwcGVuZCIsImF0dHIiLCJyIiwidXBkYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsInN0eWxlIiwib24iLCJyZW1vdmUiLCJ0ZXh0IiwibmFtZSIsInRpY2siLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7O0FBSEE7QUFXQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQU1WO0FBQUEsTUFMSEMsS0FLRyxRQUxIQSxLQUtHO0FBQUEsTUFKSEMsS0FJRyxRQUpIQSxLQUlHO0FBQ0gsTUFBTUMsTUFBTSxHQUFHQyxFQUFFLENBQ2RDLE1BRFksQ0FDTCxRQURLLEVBRVpDLFNBRlksQ0FFRixRQUZFLEVBR1pDLElBSFksQ0FHUE4sS0FITyxFQUdBLFVBQUNPLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEVBQVQ7QUFBQSxHQUhBLEVBSVpDLElBSlksQ0FLWCxVQUFDQyxLQUFELEVBQVc7QUFDVEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLFdBQU9GLEtBQUssQ0FDVEcsTUFESSxDQUNHLFFBREgsRUFFSkMsSUFGSSxDQUVDLE1BRkQsRUFFUyxPQUZULEVBR0pBLElBSEksQ0FHQyxHQUhELEVBR00sVUFBQ1AsQ0FBRDtBQUFBLGFBQVFBLENBQUMsQ0FBQ1EsQ0FBRixHQUFNUixDQUFDLENBQUNRLENBQVIsR0FBWSxDQUFwQjtBQUFBLEtBSE4sQ0FBUDtBQUlELEdBWFUsRUFZWCxVQUFDQyxNQUFEO0FBQUEsV0FDRUEsTUFBTSxDQUNIQyxVQURILEdBRUdDLFFBRkgsQ0FFWSxHQUZaLEVBR0dKLElBSEgsQ0FHUSxNQUhSLEVBR2dCLE1BSGhCLEVBSUdBLElBSkgsQ0FJUSxHQUpSLEVBSWEsVUFBQ1AsQ0FBRDtBQUFBLGFBQVFBLENBQUMsQ0FBQ1EsQ0FBRixHQUFNUixDQUFDLENBQUNRLENBQVIsR0FBWSxDQUFwQjtBQUFBLEtBSmIsQ0FERjtBQUFBLEdBWlcsRUFrQlgsVUFBQ0ksSUFBRDtBQUFBLFdBQ0VBLElBQUksQ0FDREwsSUFESCxDQUNRLE1BRFIsRUFDZ0IsS0FEaEIsRUFFR0csVUFGSCxHQUdHRyxLQUhILENBR1MsU0FIVCxFQUdvQixDQUhwQixFQUlHTixJQUpILENBSVEsR0FKUixFQUlhLENBSmIsRUFLR08sRUFMSCxDQUtNLEtBTE4sRUFLYSxZQUFZO0FBQ3JCbEIsTUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUFnQmtCLE1BQWhCO0FBQ0QsS0FQSCxDQURGO0FBQUEsR0FsQlcsRUE0QlpSLElBNUJZLENBNEJQLFFBNUJPLEVBNEJHLE1BNUJILEVBNkJaQSxJQTdCWSxDQTZCUCxjQTdCTyxFQTZCUyxDQTdCVCxDQUFmO0FBK0JBWixFQUFBQSxNQUFNLENBQUNXLE1BQVAsQ0FBYyxPQUFkLEVBQXVCVSxJQUF2QixDQUE0QnRCLEtBQTVCO0FBRUEsU0FBTztBQUNMdUIsSUFBQUEsSUFBSSxFQUFFLFFBREQ7QUFFTEMsSUFBQUEsSUFBSSxFQUFFO0FBQUEsYUFBTXZCLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZLElBQVosRUFBa0IsVUFBQ1AsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ21CLENBQVQ7QUFBQSxPQUFsQixFQUE4QlosSUFBOUIsQ0FBbUMsSUFBbkMsRUFBeUMsVUFBQ1AsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ29CLENBQVQ7QUFBQSxPQUF6QyxDQUFOO0FBQUE7QUFDTjs7Ozs7O0FBSEssR0FBUDtBQVNELENBakREOztlQW1EZTVCLE07QUFFZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ2lyY2xlcy50c3hcblxuaW1wb3J0IHsgUmVhY3RUZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgRDNOb2RlIH0gZnJvbSAndHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBub2Rlcz86IEQzTm9kZVtdO1xuICB0aXRsZT86IHN0cmluZyB8ICgoZDogRDNOb2RlKSA9PiBzdHJpbmcgfCBSZWFjdFRleHQpO1xufVxuXG5jb25zdCBDaXJjbGUgPSAoe1xuICBub2RlcyxcbiAgdGl0bGUsXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50ICYge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpY2s6ICgpID0+IHZvaWQ7XG59ID0+IHtcbiAgY29uc3QgY2lyY2xlID0gZDNcbiAgICAuc2VsZWN0KCcubm9kZXMnKVxuICAgIC5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgLmRhdGEobm9kZXMsIChkKSA9PiBkLmlkKVxuICAgIC5qb2luKFxuICAgICAgKGVudGVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDaXJjbGUgZW50ZXIuJyk7XG4gICAgICAgIHJldHVybiBlbnRlclxuICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnZ3JlZW4nKVxuICAgICAgICAgIC5hdHRyKCdyJywgKGQpID0+IChkLnIgPyBkLnIgOiA4KSk7XG4gICAgICB9LFxuICAgICAgKHVwZGF0ZSkgPT5cbiAgICAgICAgdXBkYXRlXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnZ3JheScpXG4gICAgICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gKGQuciA/IGQuciA6IDgpKSxcbiAgICAgIChleGl0KSA9PlxuICAgICAgICBleGl0XG4gICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAncmVkJylcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAuYXR0cigncicsIDApXG4gICAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgfSksXG4gICAgKVxuICAgIC5hdHRyKCdzdHJva2UnLCAnI2ZmZicpXG4gICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDEpO1xuXG4gIGNpcmNsZS5hcHBlbmQoJ3RpdGxlJykudGV4dCh0aXRsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnY2lyY2xlJyxcbiAgICB0aWNrOiAoKSA9PiBjaXJjbGUuYXR0cignY3gnLCAoZCkgPT4gZC54KS5hdHRyKCdjeScsIChkKSA9PiBkLnkpLFxuICAgIC8qXG4gICAgICAgIC5hdHRyKCdyJywgKGQ6IGFueSkgPT5cbiAgICAgICAgICA1ICsgKDMgKiBkLnopIC8gMjAgPiAwID8gNSArICgzICogZC56KSAvIDIwIDogMCxcbiAgICAgICAgKSxcbiAgICAgICAgKi9cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcblxuLypcbmNvbnN0IE5vZGUgPSAoe1xuICBub2RlLFxuICBjb2xvcixcbn06IC8vIG1vdXNlb3V0RXZlbnQsXG4vLyBtb3VzZW92ZXJFdmVudCxcbi8vIG9uQ2xpY2tFdmVudCxcbi8vIG9uTW91c2VFeGl0RXZlbnQsXG4vLyBvbk1vdXNlRW50ZXJFdmVudCxcbi8vIGRvdWJsZUNsaWNrRXZlbnQsXG5Ob2RlUHJvcHMpID0+IHtcbiAgICAvKlxuICAgIGQzLnNlbGVjdChyZWYuY3VycmVudClcbiAgICAgIC5vbignZGJsY2xpY2snLCBkb3VibGVDbGlja0V2ZW50KVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudClcbiAgICAgICAgICAuc3R5bGUoJ2ZpbHRlcicsICd1cmwoI2JsdXIpJyk7XG4gICAgICAgIGQzLnNlbGVjdCgnI2JsdXInKVxuICAgICAgICAgIC5zZWxlY3QoJ2ZlR2F1c3NpYW5CbHVyJylcbiAgICAgICAgICAuYXR0cignc3RkRGV2aWF0aW9uJywgMSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZDMuc2VsZWN0KCdzdmcjYmx1cicpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMjUpXG4gICAgICAgICAgLmF0dHIoJ3N0ZERldmlhdGlvbicsIDApO1xuICAgICAgICBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMjUpXG4gICAgICAgICAgLnN0eWxlKCdmaWx0ZXInLCAndXJsKCNibHVyKScpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgICB7Lyp7bm9kZS50eXBlID09PSBcImNpcmNsZVwiID8gKFxuICAgICAgPGdcbiAgICAgICAgY2xhc3NOYW1lPVwibm9kZVwiXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gb25Nb3VzZUV4aXRFdmVudChub2RlKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBvbk1vdXNlRW50ZXJFdmVudChub2RlKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja0V2ZW50KG5vZGUpfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgID5cbiAgICAgICAgPENpcmNsZSB0aXRsZT17bm9kZS5uYW1lfSBjb2xvcj17Y29sb3J9IC8+XG4gICAgICAgIHsvKjxUZXh0IGxhYmVsPXtub2RlLmxhYmVsfSAvPn1cbiAgICAgIDwvZz5cbiAgICApIDogbm9kZS50eXBlID09PSBcInR3ZWV0XCIgPyAoXG4gICAgICA8VHdpdHRlckxvZ28gcmVmPXtyZWZ9IHRpdGxlPXtub2RlLmlkfSBjb2xvcj17Y29sb3J9IC8+XG4gICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59O1xuKi9cbiJdfQ==