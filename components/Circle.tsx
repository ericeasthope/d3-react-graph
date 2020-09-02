// components/Circle.tsx

import * as d3 from 'd3';

const Circle = ({ nodes, title }) => {
  const circle = d3
    .select('.nodes')
    .selectAll('circle')
    .data(nodes)
    .join(
      (enter) => enter.append('circle').attr('fill', 'green'),
      (update) => update.attr('fill', 'gray'),
      (exit) => exit.remove(),
    )
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)
    .attr('r', 8);

  circle.append('title').text(title);

  return {
    name: 'circle',
    selection: circle,
    tick: () => circle.attr('cx', (d) => d.x).attr('cy', (d) => d.y),
  };
};

export default Circle;

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
