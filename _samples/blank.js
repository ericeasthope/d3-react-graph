// _samples/blank.js

import React, { useState, useEffect } from 'react';
import { Graph, Node, Edge, BlankNode, BlankEdge, Forces } from 'components';

const BlankGraph = () => {
  const [nodes] = useState([
    {
      id: 'MATHXXX',
      title: '(unknown)',
      year: 1,
      count: 5,
    },
    {
      id: 'MATHYYY',
      title: 'Computer Methods in Earth, Ocean and Atmospheric Sciences',
      year: 2,
      count: 8,
    },
    {
      id: 'MATHZZZ',
      title: '(unknown)',
      year: 1,
      count: 5,
    },
  ]);
  const [edges] = useState([
    {
      value: 1,
      target: 'MATHXXX',
      source: 'MATHYYY',
    },
    {
      value: 1,
      target: 'MATHYYY',
      source: 'MATHZZZ',
    },
    {
      value: 1,
      target: 'MATHZZZ',
      source: 'MATHXXX',
    },
  ]);

  const [forces, setForces] = useState({
    forceCenter: { name: 'center' },
  });

  useEffect(() => {
    setTimeout(() => {
      console.log('Change forces!');
      setForces((f) => ({ ...f, forceX: { name: 'x' } }));
    }, 2000);
  }, [setForces]);

  return (
    <Graph nodes={nodes} edges={edges} forces={forces}>
      <Forces forces={forces} />
      <Edge>
        <BlankEdge
          title={() => null}
          attrs={{}}
          styles={{}}
          dataKey={(d) => d}
          onMouseOver={() => null}
          onMouseOut={() => null}
          onClick={() => null}
          onDoubleClick={() => null}
        />
      </Edge>
      <Node>
        <BlankNode
          title={(d) => d.id}
          attrs={{}}
          styles={{}}
          dataKey={(d) => d.id}
          onMouseOver={() => null}
          onMouseOut={() => null}
          onClick={() => null}
          onDoubleClick={() => null}
        />
      </Node>
    </Graph>
  );
};

export default BlankGraph;
