// _samples/complete.js

// Generates a complete graph with `n` nodes
// See `en.wikipedia.org/wiki/Complete_graph` for more info

import React, { useState, useEffect } from 'react';
import { Graph, Node, Edge, BlankEdge, Forces, Circle } from 'components';

const CompleteGraph = ({ n }) => {
  // Generate `n` nodes as JavaScript objects
  const nodes = [...Array(n).keys()].map((_, index) => {
    return { id: index };
  });

  // Generate all `(1/2) * n * (n-1)` edges as JavaScript objects
  // From `stackoverflow.com/a/43241287`
  const edges = [].concat(
    ...nodes.map((s, index) =>
      nodes.slice(index + 1).map((t) => ({ source: s.id, target: t.id })),
    ),
  );

  const [forces, setForces] = useState({
    forceCenter: { name: 'center' },
  });

  /*
  useEffect(() => {
    setTimeout(() => {
      console.log('Change forces!');
      setForces((f) => ({ ...f, forceX: { name: 'x' } }));
    }, 2000);
  }, [setForces]);
  */

  return (
    <Graph nodes={nodes} edges={edges} forces={forces}>
      <Forces forces={forces} />
      <Edge>
        <BlankEdge attrs={{}} styles={{}} />
      </Edge>
      <Node>
        <Circle />
      </Node>
    </Graph>
  );
};

export default CompleteGraph;
