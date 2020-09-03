// components/Graph.js

import React, { ReactNode, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'components/State';
import { runForceSimulation } from 'utils/forceSimulationGenerator';

interface Props {
  children?: ReactNode;
}

const Graph = ({ children }: Props): JSX.Element => {
  const graph = useRef(null);

  const dispatch = useDispatch();
  const links = useSelector((state: RootState) => state.graph.links);
  const nodes = useSelector((state: RootState) => state.graph.nodes);

  useEffect(() => {
    let destroyer: void | (() => void);

    if (graph.current) {
      console.log('Graph mount.');
      const { _destroyer } = runForceSimulation(
        links,
        nodes,
        React.Children.toArray(children),
      );
      destroyer = _destroyer;
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

export default Graph;
