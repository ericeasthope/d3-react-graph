// components/Graph.js

import React, { useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { runForceSimulation } from 'utils/forceSimulationGenerator';

const Graph = ({ children, links, nodes, linksData, nodesData }) => {
  const graph = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let destroyer;

    if (graph.current) {
      console.log('Graph mount.');
      let { destroyer } = runForceSimulation(
        links,
        nodes,
        React.Children.toArray(children),
      );
    }

    return destroyer;
  }, [nodes, links]);

  useEffect(() => {
    setTimeout(() => {
      console.log('Add node!');
      dispatch({ type: 'ADD_NODE', node: { id: 2, group: 2 } });
      dispatch({ type: 'ADD_LINK', link: { source: 1, target: 2 } });
    }, 3000);
  }, []);

  return (
    <g ref={graph}>
      <g className="links" />
      <g className="nodes" />
    </g>
  );
};

export default connect((state) => state.graph)(Graph);
