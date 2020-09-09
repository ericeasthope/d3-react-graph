// _samples/blank.tsx

import React from 'react';
import { Graph, Node, Edge, BlankNode, BlankEdge } from 'components';
import { D3Node, D3Edge } from 'types';

interface Props {
  nodes?: D3Node[];
  edges?: D3Edge[];
}

const Blank = (props: Props): JSX.Element => (
  <Graph {...props}>
    <Edge>
      <BlankEdge
        title={() => null}
        attrs={{}}
        styles={{}}
        dataKey={(d: D3Edge) => d}
        onMouseOver={() => null}
        onMouseOut={() => null}
        onClick={() => null}
        onDoubleClick={() => null}
      />
    </Edge>
    <Node>
      <BlankNode
        title={(d: D3Node) => d.id}
        attrs={{}}
        styles={{}}
        dataKey={(d: D3Node) => d.id}
        onMouseOver={() => null}
        onMouseOut={() => null}
        onClick={() => null}
        onDoubleClick={() => null}
      />
    </Node>
  </Graph>
);

export default Blank;
