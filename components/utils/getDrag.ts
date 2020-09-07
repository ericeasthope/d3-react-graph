// utils/getDrag.ts

import * as d3 from 'd3';

const getDrag = (simulation) => {
  const dragstart = (d) => {
    if (!d3.event.active) simulation.alpha(1).restart();
    d.fx = d.x;
    d.fy = d.y;
    d3.select(this).attr('stroke', 'red');
    // onNodeMousestart ? onNodeMousestart(d) : null;
  };

  const dragging = (d: D3Types.D3Node) => {
    // onNodeMouseout ? onNodeMouseout(d) : null;
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  };

  const dragend = (d) => {
    // onNodeMouseover ? onNodeMouseover(d) : null;
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    d3.select(this).attr('stroke', null);
  };

  return d3
    .drag<SVGCircleElement, D3Types.D3Node>()
    .on('start', dragstart)
    .on('drag', dragging)
    .on('end', dragend);
};

export default getDrag;
