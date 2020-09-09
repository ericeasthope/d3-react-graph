// components/BlankNode.tsx

import { ReactNode, ReactText } from 'react';
import * as d3 from 'd3';
import { D3Node } from 'types';

interface Props {
  nodes?: D3Node[];
  dataKey?: (d: D3Node) => string;
  attrs?: Record<string, unknown>;
  styles?: Record<string, unknown>;
  title?: string | ((d: D3Node) => string | ReactText);
  onMouseOver?: (d: D3Node) => void;
  onMouseOut?: (d: D3Node) => void;
  onClick?: (d: D3Node) => void;
  onDoubleClick?: (d: D3Node) => void;
}

const BlankNode = ({
  nodes,
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
    .select('.nodes')
    .selectAll('g')
    .data(nodes, dataKey)
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
        (d: D3Node & { x: number; y: number }) => `translate(${d.x}, ${d.y})`,
      ),
  };
};

export default BlankNode;
