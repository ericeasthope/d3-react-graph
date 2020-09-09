// components/BlankEdge.tsx

import { ReactNode, ReactText } from 'react';
import * as d3 from 'd3';
import { D3Edge } from 'types';

interface Props {
  edges?: D3Edge[];
  dataKey?: (d: D3Edge) => string;
  attrs?: Record<string, unknown>;
  styles?: Record<string, unknown>;
  title?: string | ((d: D3Edge) => string | ReactText);
  onMouseOver?: (d: D3Edge) => void;
  onMouseOut?: (d: D3Edge) => void;
  onClick?: (d: D3Edge) => void;
  onDoubleClick?: (d: D3Edge) => void;
}

const BlankEdge = ({
  edges,
  dataKey,
  attrs,
  styles,
  title,
  onMouseOver,
  onMouseOut,
  onClick,
  onDoubleClick,
}: Props): ReactNode & {
  name: string;
  tick: () => void;
} => {
  const blank = d3
    .select('.edges')
    .selectAll('g')
    .data(edges, dataKey)
    .join(
      (enter) => enter.append('g'),
      (update) => update,
      (exit) => exit.remove(),
    );

  Object.entries(attrs).map((attr) => {
    const [name, value] = attr;
    blank.attr(name, value as string);
  });

  Object.entries(styles).map((style) => {
    const [name, value] = style;
    blank.style(name, value as string);
  });

  blank.append('title').text(title as string);

  blank
    .on('mouseover', onMouseOver ? onMouseOver : null)
    .on('mouseout', onMouseOut ? onMouseOut : null)
    .on('click', onClick ? onClick : null)
    .on('dblclick', onDoubleClick ? onDoubleClick : null);

  return {
    name: 'blank',
    tick: () =>
      blank.attr(
        'transform',
        (
          d: D3Edge & {
            source: { x: number; y: number };
            target: { x: number; y: number };
          },
        ) =>
          `translate(${(1 / 2) * (d.source.x + d.target.x)}, ${
            (1 / 2) * (d.source.y + d.target.y)
          })`,
      ),
  };
};

export default BlankEdge;
