// pages/index.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from 'components/State';

import SVG from 'components/SVG';
import Graph from 'components/Graph';
import Line from 'components/Line';
import Circle from 'components/Circle';
import Node from 'components/Node';
import Link from 'components/Link';

/*
const TestProps = {
  nodes: [
    { id: '0', group: 0 },
    { id: '1', group: 1 },
    { id: '2', group: 2 },
  ],
  links: [
    { source: 0, target: 1 },
    { source: 1, target: 2 },
    { source: 2, target: 0 },
  ],
  dimensions: 3,
  draggable: true,
  zoomable: true,
  pannable: false,
  alphaDecay: 1e-3,
  velocityDecay: 4e-1,
  // onNodeMouseover: () => {},
  // onNodeMouseout: () => {},
  // onNodeClick: () => {},
};
*/

/*
forces={[
  // { forceManyBody: { strength: "-30", key: 'charge' } },
  { forceCenter: { key: 'center' } },
  { forceLink: { key: 'link', id: '(d) => d.id' } },
  { forceX: { key: 'x', x: 0, strength: 0.2 } },
  { forceY: { key: 't', y: 0, strength: 0.2 } },
  {
    forceCollide: {
      key: 'collide',
      radius: '(d) => 5',
      iterations: 3,
    },
  },
]}
*/

const Index = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SVG centerOrigin>
        <Graph>
          <Link>
            <Line
              stroke={{
                enterStroke: '#111',
                updateStroke: '#999',
                exitStroke: 'red',
              }}
              strokeWidth={(d) => Math.sqrt(d.value ? d.value : 1)}
            />
          </Link>
          <Node>
            <Circle title={(d) => d.id} />
          </Node>
        </Graph>
      </SVG>
    </Provider>
  );
};

export default Index;
