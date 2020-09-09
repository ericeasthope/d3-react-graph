// components/utils/runForceSimulation.ts

import * as d3 from 'd3';
import { D3Node, D3Edge } from 'types';
import getForces from './getForces';

const runForceSimulation = (
  nodes: D3Node[],
  edges: D3Edge[],
  forces: {
    [key: string]: Record<string, unknown>;
  },
): { _simulation: d3.Simulation<D3Node, D3Edge>; _destroyer: () => void } => {
  // Map edge and node array content to objects
  // const l = edges.map((d: D3Edge) => Object.assign({}, d));
  // const n = nodes.map((d: D3Node) => Object.assign({}, d, { selected: false }));

  // Initialize a Barnes-Hut force simulation
  const simulation = d3.forceSimulation(nodes);

  // For all forces, add each force to `simulation`
  if (forces) getForces(forces).map((f) => simulation.force(...f));

  // Configure the force simulation
  simulation.force(
    'link',
    d3.forceLink(edges).id((d: D3Node) => d.id as string),
  );

  return {
    _simulation: simulation,
    _destroyer: () => {
      simulation.stop();
      console.log('Simulation stopped.');
    },
  };
};

export default runForceSimulation;

/*
  .alphaDecay(1e-3)
  .velocityDecay(4e-1)
  .numDimensions(dimensions)
  .force(
    'collide',
    d3.forceCollide().radius((d) => (d.r ? d.r : 8)),
  );
*/
