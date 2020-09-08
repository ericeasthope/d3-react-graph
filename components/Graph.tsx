// components/Graph.tsx

import React, { ReactNode, useEffect, useRef } from 'react';
import { D3Node, D3Link } from 'types';
import {
  runForceSimulation,
  executeConfigurables,
  executeNodelikeChildren,
  executeLinklikeChildren,
} from './utils';

interface Props {
  children: ReactNode;
  nodes: D3Node[];
  links: D3Link[];
  forces: any;
}

const Graph = ({ children, nodes, links, forces }: Props): JSX.Element => {
  // Initialize reference to D3 force simulation
  const simulation = useRef(null);

  // Initialize reference to graph SVG container
  const graph = useRef(null);

  // Initialize refences to graph node and link D3 selectors
  const node = useRef(null);
  const link = useRef(null);

  useEffect(() => {
    let destroyer: void | (() => void);

    if (graph.current) {
      const { _simulation, _destroyer } = runForceSimulation(
        nodes,
        links,
        forces,
      );
      simulation.current = _simulation;
      destroyer = _destroyer;

      console.log(simulation.current);

      executeConfigurables(React.Children.toArray(children));
    }

    return destroyer;
  }, []);

  useEffect(() => {
    simulation.current.nodes(nodes);
    node.current = executeNodelikeChildren(children, nodes);

    simulation.current.force('link').links(links);
    link.current = executeLinklikeChildren(children, links);

    simulation.current.on('tick', () => {
      Object.values(node.current).map((n: { name: string; tick: () => void }) =>
        n.tick ? n.tick() : null,
      );
      Object.values(link.current).map((l: { name: string; tick: () => void }) =>
        l.tick ? l.tick() : null,
      );
    });
  }, [nodes, links]);

  // useEffect(() => {}, [links]);
  // useEffect(() => {}, [forces]);

  return (
    <g ref={graph}>
      <g className="links" />
      <g className="nodes" />
    </g>
  );
};

export default Graph;
