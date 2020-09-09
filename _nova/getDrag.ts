// components/utils/getDrag.ts

import * as d3 from 'd3';
import { D3Node, D3Edge } from 'types';

const getDrag = (
  simulation: d3.Simulation<D3Node, D3Edge>,
): d3.DragBehavior<SVGElement, D3Node, SVGSVGElement> => {
  const dragstart = (d: D3Node) => {
    if (!d3.event.active) simulation.alpha(1).restart();
    d.fx = d.x;
    d.fy = d.y;
    d3.select(this).attr('stroke', 'red');
    // onNodeMousestart ? onNodeMousestart(d) : null;
  };

  const dragging = (d: D3Node) => {
    // onNodeMouseout ? onNodeMouseout(d) : null;
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  };

  const dragend = (d: D3Node) => {
    // onNodeMouseover ? onNodeMouseover(d) : null;
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    d3.select(this).attr('stroke', null);
  };

  return d3
    .drag<SVGElement, D3Node>()
    .on('start', dragstart)
    .on('drag', dragging)
    .on('end', dragend);
};

export default getDrag;

/*
function dragstarted(d) {
  if (!d3.event.active) {
    // sim.velocityDecay(1/2);
    sim.alphaTarget(3/10).restart();
  }
  d.fx = d.id === root ? 0 : null;
  d.fy = d.id === root ? 0 : null;
  // extendFrom(d);
}

function dragged(d) {
  //holding = setTimeout(function() {
  //  sim.force('link').strength(0);
  //  sim.restart();
  //}, 100/60); // refresh rate
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  // if (!holding) clearTimeout(holding);
  if (!d3.event.active) {
    // sim.force('link').strength(0);
    // sim.velocityDecay(7/10)
    sim.alphaTarget(0).restart();
  }
  d.fx = null;
  d.fy = null;
}
*/
