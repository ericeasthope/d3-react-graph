// utils/runForceSimulation.ts

import * as d3 from 'd3';
import { D3Node, D3Link } from 'types';

/*
const TestProps = {
  dimensions: 3,
  draggable: true,
  zoomable: true,
  pannable: false,
  alphaDecay: 1e-3,
  velocityDecay: 4e-1,
  // onNodeMouseover: () => {},
  // onNodeMouseout: () => {},
  // onNodeClick: () => {},
};

forces={[
  // { forceManyBody: { strength: "-30", key: 'charge' } },
  { forceCenter: { key: 'center' } },
  { forceLink: { key: 'link', id: '(d) => d.id' } },
  { forceX: { key: 'x', x: 0, strength: 0.2 } },
  { forceY: { key: 't', y: 0, strength: 0.2 } },
  {
    forceCollide: {
      key: 'collide',
      radius: '(d) => 5',
      iterations: 3,
    },
  },
]}

// Configure D3.js force simulation
var forces = {
  forceLink: {name: "link", id: d => d.id},
  forceManyBody: {name: "charge", strength: () => -120},
  forceX: {name:"x"},
  forceY: {name:"y"},
  forceCenter: {name:"center"},
  forceCollide: {name:"collide", radius: d => d.r}
}
graph.addForce(forces);


      /*
        .force('surface', d3ForceSurface()
            .surfaces([
              {from: {x:-50,y:0}, to: {x:50,y:0}},
            ])
            .oneWay(true)
            .radius(d => d.r)
            .onImpact(() => console.log("impact."))
        );
*/

const runForceSimulation = (
  nodes: D3Node[],
  links: D3Link[],
): { _simulation: any; _destroyer: () => void } => {
  // Map link and node array content to objects
  // const l = links.map((d) => Object.assign({}, d));
  // const n = nodes.map((d) => Object.assign({}, d, { selected: false }));
  // const links = linksData.map((d: D3Link) => Object.assign({}, d));
  // const nodes = nodesData.map((d: D3Node) => Object.assign({}, d, { selected: false }));

  // Initialize a Barnes-Hut force simulation
  const simulation = d3.forceSimulation(nodes);

  // Configure the force simulation
  simulation
    .alphaDecay(1e-3)
    .velocityDecay(4e-1)
    .force('charge', d3.forceManyBody().strength(-150))
    .force('x', d3.forceX())
    .force('y', d3.forceY())
    .force(
      'link',
      d3.forceLink(links).id((d) => d.id),
    )
    .force(
      'collide',
      d3.forceCollide().radius((d) => (d.r ? d.r : 8)),
    );

  // Set `simulation` dimensions, alpha/velocity decay if specified
  // dimensions ? simulation.numDimensions(dimensions) : null;
  // velocityDecay ? simulation.velocityDecay(velocityDecay) : null;
  // alphaDecay ? simulation.alphaDecay(alphaDecay) : null;

  // For all forces, add each force to `simulation`
  // if (forces) getForces(forces).map((f) => simulation.force(...f));

  return {
    _simulation: simulation,
    _destroyer: () => {
      simulation.stop();
      console.log('Simulation stopped.');
    },
  };
};

export default runForceSimulation;
