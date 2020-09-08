// components/Node.tsx

import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Node = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default Node;

/*
import styled, { keyframes } from 'styled-components';

interface NodesProps {
  nodes: D3Node[];
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
            key={index}
            node={node}
            color={color(node.group.toString())}
            // mouseoverEvent={mouseoverEvent}
            // mouseoutEvent={mouseoutEvent}
            // doubleClickEvent={doubleClickEvent}
            // onMouseEnterEvent={onMouseEnterEvent}
            // onMouseExitEvent={onMouseExitEvent}
            // onClickEvent={onClickEvent}
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
*/
