// utils/forceSimulationGenerator.js

import React from 'react';
import * as d3 from 'd3';

export function runForceSimulation(linksData, nodesData, children) {
  // Map link and node array content to objects
  const links = linksData.map((d) => Object.assign({}, d));
  const nodes = nodesData.map((d) => Object.assign({}, d, { selected: false }));

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
      const nodeChildren = React.Children.toArray(c.props.children).map((n) => {
        let child = n.type({ ...n.props, nodes: nodes });
        node[child.name] = {
          selection: child.selection,
          tick: child.tick,
        };
      });
    }

    // Get data join selection and tick function for every link-like component
    if (c.type.name === 'Link') {
      const linkChildren = React.Children.toArray(c.props.children).map((l) => {
        let child = l.type({ ...l.props, links: links });
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
    destroy: () => {
      simulation.stop();
      console.log('Graph unmount.');
    },
  };
}
