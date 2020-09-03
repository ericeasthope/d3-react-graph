// utils/runForceSimulation.js

import React from 'react';
import * as d3 from 'd3';
import { D3Node, D3Link } from 'types';

const runForceSimulation = (
  linksData: D3Link[],
  nodesData: D3Node[],
  children: JSX.Element,
): { _destroyer: () => void } => {
  // Map link and node array content to objects
  const links = linksData.map((d: D3Link) => Object.assign({}, d));
  const nodes = nodesData.map((d: D3Node) =>
    Object.assign({}, d, { selected: false }),
  );

  // Initialize a Barnes-Hut force simulator
  const simulation = d3
    .forceSimulation(nodes)
    .alphaDecay(1e-3)
    .velocityDecay(4e-1)
    .force(
      'link',
      d3.forceLink(links).id((d) => d.id),
    )
    .force('charge', d3.forceManyBody().strength(-30))
    .force('x', d3.forceX())
    .force('y', d3.forceY())
    .force('collide', d3.forceCollide().radius(8));
  // .numDimensions(dimensions)

  const node = {};
  const link = {};

  children.map((c) => {
    // Get data join selection and tick function for every node-like component
    if (c.type.name === 'Node') {
      React.Children.toArray(c.props.children).map((n) => {
        const child = n.type({ ...n.props, nodes: nodes });
        node[child.name] = {
          selection: child.selection,
          tick: child.tick,
        };
      });
    }

    // Get data join selection and tick function for every link-like component
    if (c.type.name === 'Link') {
      React.Children.toArray(c.props.children).map((l) => {
        const child = l.type({ ...l.props, links: links });
        link[child.name] = {
          selection: child.selection,
          tick: child.tick,
        };
      });
    }
  });

  // Call all tick functions
  simulation.on('tick', () => {
    node.circle.tick();
    link.line.tick();
  });

  return {
    _destroyer: () => {
      simulation.stop();
      console.log('Graph unmount.');
    },
  };
};

export default runForceSimulation;
