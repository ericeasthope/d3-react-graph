// components/Line.tsx

import * as d3 from 'd3';

import { D3Edge } from 'types';

interface Props {
  edges?: D3Edge[];
  stroke?: {
    enterStroke: string;
    updateStroke: string;
    exitStroke: string;
  };
  strokeWidth?:
    | number
    | string
    | ((d: D3Edge) => number)
    | ((d: D3Edge) => string);
}

const Line = ({
  edges,
  stroke,
  strokeWidth,
}: Props): JSX.Element & {
  name: string;
  tick: () => void;
} => {
  const { enterStroke, updateStroke, exitStroke } = stroke;
  const edge = d3
    .select('.edges')
    .selectAll('line')
    .data(edges)
    .join(
      (enter) => enter.append('line').attr('stroke', enterStroke),
      (update) => update.attr('stroke', updateStroke),
      (exit) => exit.attr('stroke', exitStroke).remove(),
    )
    .attr('stroke-width', strokeWidth ? strokeWidth : 1) // (d) => Math.sqrt(d.value ? d.value : 1));
    .attr('stroke-opacity', 0.6);

  /*
  style={{
    // stroke: '#111',
    strokeOpacity: 1,
  }}
  strokeWidth={Math.sqrt(edge.value ? edge.value : 1)}
  */

  return {
    name: 'line',
    tick: () => {
      edge
        .attr('x1', (d: D3Edge & { source: { x: number } }) => d.source.x)
        .attr('y1', (d: D3Edge & { source: { y: number } }) => d.source.y)
        .attr('x2', (d: D3Edge & { target: { x: number } }) => d.target.x)
        .attr('y2', (d: D3Edge & { target: { y: number } }) => d.target.y);
    },
  };
};

export default Line;

/*
const Line = React.forwardRef(({ title, color, width, dashed }, ref) => {
  return (
    <line
      stroke={color}
      className="edge"
      ref={ref}
      strokeDasharray={dashed ? '2' : null}
      strokeWidth={Math.sqrt(width)}
    >
      <title>{title}</title>
    </line>
  );
});
*/
