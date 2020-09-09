// components/Node.tsx

import React from 'react';

interface Props {
  children?: JSX.Element;
}

const Node = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default Node;

/*
.call((node) =>
  node.transition().attr("r", function (d) {
    return 10 - d.depth;
  })
)

import styled, { keyframes } from 'styled-components';

interface NodesProps {
  // node: boolean;
  // colorScaleType: string;
  // colorScale: string;
  // clickAction: any;
}

const Nodes = ({
  // colorScale,
  // colorScaleType,
  // mouseoverEvent,
  // mouseoutEvent,
  nodes,
}: // onClickEvent,
// onMouseEnterEvent,
// onMouseExitEvent,
// doubleClickEvent,
NodesProps) => {
  // const color = colorScaleType ? d3[colorScaleType](d3[colorScale]) : () => '#808080';
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  return (
    <g className="nodes">
      {/*nodes.map((node: D3Node, index: number) => {
        return (
          <Node
            color={color(node.group.toString())}
          />
        );
    </g>
  );
};

export const Text = ({ label }: { label: string }) => {
  return (
    <text
      dy="2"
      textAnchor="middle"
      style={{
        stroke: 'none',
        fill: '#000',
        fontFamily: 'monospace',
        fontSize: '6px',
        cursor: 'default',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      {label}
    </text>
  );
};


const easeOutElastic = keyframes`
  0% {
    transform: scale(1);
  }

  16% {
    transform: scale(-0.32);
  }

  28% {
    transform: scale(0.13);
  }
`;

export const ClickableNode = styled.circle`
  transition: transform 125ms ease-out;
  &:hover {
    transform: scale(1.16);
    // animation: ${easeOutElastic} 2s 1;
    // animation-iteration-count: 1;
  }
  &:active {
    transform: scale(0.84);
    // animation: ${easeOutElastic} 2s;
  }
`;


var node = svg
  .append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(graph.nodes)
  .enter()
  .append("circle")
  .attr("r", function (d) {
    return Math.sqrt(8 * Math.PI * d.year);
  })
  .attr("fill", function (d) {
    return color(Math.sqrt(d.count / maxCount));
  })
  .call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  )
  .on("mouseover", function (d) {
    div.transition().duration(250).style("opacity", 1.0);

    return div
      .html(d.id + ": " + d.title)
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY + "px");
  })

  .on("mouseout", function (d) {
    return div.transition().duration(250).style("opacity", 0);
  });
*/
