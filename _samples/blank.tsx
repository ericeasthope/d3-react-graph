// _samples/blank.tsx

import { Graph, Node, Link, BlankNode, BlankLink } from 'components';

interface Props {}

export default (props: Props) => (
  <Graph {...props}>
    <Link>
      <BlankLink
        title={(d) => ``}
        attrs={{}}
        styles={{}}
        dataKey={(d) => d}
        onMouseOver={(d) => {}}
        onMouseOut={(d) => {}}
        onClick={(d) => {}}
        onDoubleClick={(d) => {}}
      />
    </Link>
    <Node>
      <BlankNode
        title={(d) => d.id}
        attrs={{}}
        styles={{}}
        dataKey={(d) => d.id}
        onMouseOver={(d) => {}}
        onMouseOut={(d) => {}}
        onClick={(d) => {}}
        onDoubleClick={(d) => {}}
      />
    </Node>
  </Graph>
);
