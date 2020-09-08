// components/Line.tsx

import * as d3 from 'd3';

import { D3Link } from 'types';

interface Props {
  links?: D3Link[];
  stroke?: {
    enterStroke: string;
    updateStroke: string;
    exitStroke: string;
  };
  strokeWidth?:
    | number
    | string
    | ((d: D3Link) => number)
    | ((d: D3Link) => string);
}

const Line = ({
  links,
  stroke,
  strokeWidth,
}: Props): JSX.Element & {
  name: string;
  tick: () => void;
} => {
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
    .attr('stroke-width', strokeWidth ? strokeWidth : 1) // (d) => Math.sqrt(d.value ? d.value : 1));
    .attr('stroke-opacity', 0.6);

  /*
  style={{
    // stroke: '#111',
    strokeOpacity: 1,
  }}
  strokeWidth={Math.sqrt(link.value ? link.value : 1)}
  */

  return {
    name: 'line',
    tick: () => {
      link
        .attr('x1', (d: D3Link & { source: { x: number } }) => d.source.x)
        .attr('y1', (d: D3Link & { source: { y: number } }) => d.source.y)
        .attr('x2', (d: D3Link & { target: { x: number } }) => d.target.x)
        .attr('y2', (d: D3Link & { target: { y: number } }) => d.target.y);
    },
  };
};

export default Line;

/*
const Line = React.forwardRef(({ title, color, width, dashed }, ref) => {
  return (
    <line
      stroke={color}
      className="link"
      ref={ref}
      strokeDasharray={dashed ? '2' : null}
      strokeWidth={Math.sqrt(width)}
    >
      <title>{title}</title>
    </line>
  );
});
*/
