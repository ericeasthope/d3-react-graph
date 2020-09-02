// components/Line.tsx

import * as d3 from 'd3';

const Line = ({ links, stroke, strokeWidth }) => {
  const { enterStroke, updateStroke, exitStroke } = stroke;
  const link = d3
    .select('.links')
    .selectAll('line')
    .data(links)
    .join(
      (enter) => enter.append('line').attr('stroke', enterStroke),
      (update) => update.attr('stroke', updateStroke),
      (exit) => exit.attr('stroke', exitStroke).remove(),
    )
    .attr('stroke-width', strokeWidth);

  return {
    name: 'line',
    selection: link,
    tick: () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);
    },
  };
};

export default Line;
