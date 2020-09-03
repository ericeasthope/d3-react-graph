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
  selection: d3.Selection<SVGLineElement, D3Link, SVGElement, unknown>;
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
    .attr('stroke-width', strokeWidth);

  return {
    name: 'line',
    selection: link,
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
