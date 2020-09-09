// components/Graph.tsx

import React, { useEffect, useRef } from 'react';
import { D3Node, D3Edge } from 'types';
import {
  runForceSimulation,
  executeConfigurables,
  executeNodelikeChildren,
  executeEdgelikeChildren,
} from './utils';

interface Props {
  children: JSX.Element;
  nodes: D3Node[];
  edges: D3Edge[];
  forces: {
    [key: string]: Record<string, unknown>;
  };
}

const Graph = ({ children, nodes, edges, forces }: Props): JSX.Element => {
  // Initialize reference to D3 force simulation
  const simulation = useRef(null);

  // Initialize reference to graph SVG container
  const graph = useRef(null);

  // Initialize refences to graph node and edge D3 selectors
  const node = useRef(null);
  const edge = useRef(null);

  useEffect(() => {
    let destroyer: void | (() => void);

    if (graph.current) {
      const { _simulation, _destroyer } = runForceSimulation(
        nodes,
        edges,
        forces,
      );
      simulation.current = _simulation;
      destroyer = _destroyer;

      console.log(simulation.current);

      executeConfigurables(React.Children.toArray(children) as JSX.Element[]);
    }

    return destroyer;
  }, []);

  useEffect(() => {
    simulation.current.nodes(nodes);
    node.current = executeNodelikeChildren(children, nodes);

    simulation.current.force('link').links(edges);
    edge.current = executeEdgelikeChildren(children, edges);

    simulation.current.on('tick', () => {
      Object.values(node.current).map((n: { name: string; tick: () => void }) =>
        n.tick ? n.tick() : null,
      );
      Object.values(edge.current).map((l: { name: string; tick: () => void }) =>
        l.tick ? l.tick() : null,
      );
    });
  }, [nodes, edges]);

  // useEffect(() => {}, [edges]);
  // useEffect(() => {}, [forces]);

  return (
    <g ref={graph}>
      <g className="edges" />
      <g className="nodes" />
    </g>
  );
};

export default Graph;
