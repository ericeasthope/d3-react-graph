// components/Circles.tsx

import { ReactText } from 'react';
import * as d3 from 'd3';
import { D3Node } from 'types';

interface Props {
  nodes?: D3Node[];
  title?: string | ((d: D3Node) => string | ReactText);
}

const Circle = ({
  nodes,
  onMouseOver,
  title,
}: Props): JSX.Element & {
  name: string;
  tick: () => void;
} => {
  const circle = d3
    .select('.nodes')
    .selectAll('circle')
    .data(nodes, (d) => d.id)
    .join(
      (enter) => {
        console.log('Circle enter.');
        return enter
          .append('circle')
          .attr('fill', 'green')
          .attr('r', (d) => (d.r ? d.r : 8));
      },
      (update) =>
        update
          .transition()
          .duration(250)
          .attr('fill', 'gray')
          .attr('r', (d) => (d.r ? d.r : 8)),
      (exit) =>
        exit
          .attr('fill', 'red')
          .transition()
          .style('opacity', 0)
          .attr('r', 0)
          .on('end', function () {
            d3.select(this).remove();
          }),
    )
    .attr('stroke', '#fff')
    .attr('stroke-width', 1);

  circle.append('title').text(title);

  circle
    .on('mouseover', onMouseOver)
    .on('mouseout', onMouseOut);

  return {
    name: 'circle',
    tick: () => circle.attr('cx', (d) => d.x).attr('cy', (d) => d.y),
    /*
        .attr('r', (d: any) =>
          5 + (3 * d.z) / 20 > 0 ? 5 + (3 * d.z) / 20 : 0,
        ),
        */
  };
};

export default Circle;

/*
d3
  .drag()
  .on('start', dragstarted)
  .on('drag', dragged)
  .on('end', dragended)

const Node = ({
  node,
  color,
}:
NodeProps) => {
    /*
    d3.select(ref.current)
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
*/
