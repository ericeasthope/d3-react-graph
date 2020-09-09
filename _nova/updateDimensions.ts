// components/utils/updateDimensions.ts

import * as d3 from 'd3';
import { D3Node, D3Edge } from 'types';

const updateDimensions = (
  simulation: d3.Simulation<D3Node, D3Edge>,
  context: { width: number; height: number },
): null => {
  simulation
    .force('x', d3.forceX(context.width / 2))
    .force('y', d3.forceY(context.height / 2))
    .force('center', d3.forceCenter(context.width / 2, context.height / 2));

  simulation.alpha(1).restart();
  return;
};

export default updateDimensions;

/*
// update on resize
function updateWindow() {
  (width = body.node().getBoundingClientRect().width),
    (height = (9 / 16) * width); // aspect ratio

  svg
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 " + width + " " + height);
}
d3.select(window).on("resize", updateWindow);

updateWindow();

// update on resize
function updateWindow() {
    width = body.node().getBoundingClientRect().width,
    height = (9/16)*width; // aspect ratio

    svg.attr('width', width)
       .attr('height', height)
       .attr('viewBox', '0 0 '+width+' '+height);

    categoryInput.attr('width', width/4)
                 .attr('height', height/20)
                 .attr('x', width/2 - width/8)
                 .attr('y', height*19/20 - height/40);

    nameText.attr('x', width/2)
            .attr('y', height*9/10 - height/40);
     };
d3.select(window).on('resize', updateWindow);
*/
