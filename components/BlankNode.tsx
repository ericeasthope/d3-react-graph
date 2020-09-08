// components/BlankNode.tsx

import { ReactText } from 'react';
import * as d3 from 'd3';
import { D3Node } from 'types';

interface Props {
  nodes?: D3Node[];
  title?: string | ((d: D3Node) => string | ReactText);
}

const BlankNode = ({
  nodes,
  title,
}: Props): JSX.Element & {
  name: string;
  tick: () => void;
} => {
  const blank = d3
    .select('.nodes')
    .selectAll('g')
    .data(nodes, (d) => d.id)
    .join(
      (enter) => enter.append('g'),
      (update) => update,
      (exit) => exit.remove(),
    );

  blank.append('title').text(title);

  return {
    name: 'blank',
    tick: () => blank.attr('transform', (d) => `translate(${d.x}, ${d.y})`),
  };
};

export default BlankNode;
