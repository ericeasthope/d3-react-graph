// components/Graph.tsx

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { D3Types } from 'types';
import { runForceSimulation, executeConfigurables } from 'utils';

/*
interface Props {
  nodes: Array<{ id: string; group: number | string }>;
  links: Array<{ source: number | string; target: number | string }>;
  dimensions?: number;
  draggable?: boolean;
  zoomable?: boolean;
  pannable?: boolean;
  alphaDecay?: number;
  velocityDecay?: number;
  onNodeMouseout?: () => void;
  onNodeMouseover?: () => void;
  onNodeClick?: () => void;

  // forces: Array;
  // forceX: { origin: string; strength: number };
  // forceY: { origin: string; strength: number };
  // forceZ: { origin: string; strength: number };
}

simulation,
height,
// nodes = [],
links = [],
dimensions = 2,
draggable = false,
zoomable = false,
pannable = false,
alphaDecay = 1e-2,
velocityDecay = 4e-1,
onNodeMouseover,
onNodeMouseout,
onNodeClick,
*/

const Graph = ({ children, nodes, links }: {}): JSX.Element => {
  const simulation = useRef(null);

  // Initialize reference to graph SVG container
  const graph = useRef(null);

  // Initialize refences to graph node and link D3 selectors
  const node = useRef(null);
  const link = useRef(null);

  useEffect(() => {
    let destroyer: void | (() => void);

    if (graph.current) {
      const { _simulation, _destroyer } = runForceSimulation(nodes, links);
      simulation.current = _simulation;
      destroyer = _destroyer;

      console.log(simulation.current);

      executeConfigurables(React.Children.toArray(children));
    }
  }, []);

  useEffect(() => {
    simulation.current.nodes(nodes);
    node.current = executeNodelikeChildren(children, nodes);

    simulation.current.force('link').links(links);
    link.current = executeLinklikeChildren(children, links);

    simulation.current.on('tick', () => {
      Object.values(node.current).map((n) => (n.tick ? n.tick() : null));
      Object.values(link.current).map((l) => (l.tick ? l.tick() : null));
    });
  }, [nodes, links]);

  useEffect(() => {}, [links]);

  return (
    <g ref={graph}>
      <g className="links" />
      <g className="nodes" />
    </g>
  );
};

export default Graph;

const executeNodelikeChildren = (children, nodes) => {
  const node = {};

  React.Children.toArray(children).map((c) => {
    // Check for a node-like component
    if (c.type.name === 'Node') {
      React.Children.toArray(c.props.children).map((n) => {
        // Execute the node-like component as though it were a function
        const child = n.type({ ...n.props, nodes: nodes });

        // Keep the node-like component's tick function
        node[child.name] = {
          tick: child.tick,
        };
      });
    }
  });

  return node;
};

const executeLinklikeChildren = (children, links) => {
  const link = {};

  React.Children.toArray(children).map((c) => {
    // Check for a link-like component
    if (c.type.name === 'Link') {
      React.Children.toArray(c.props.children).map((l) => {
        // Execute the link-like component as though it were a function
        const child = l.type({ ...l.props, links: links });

        // Keep the link-like component's tick function
        link[child.name] = {
          tick: child.tick,
        };
      });
    }
  });

  return link;
};
