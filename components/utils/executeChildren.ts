// components/utils/executeChildren.ts

import React from 'react';
import { D3Node, D3Edge } from 'types';

export const executeNodelikeChildren = (
  children: JSX.Element,
  nodes: D3Node[],
): {
  [key: string]: {
    tick: {
      name: string;
      tick: () => void;
    };
  };
} => {
  const node = {};

  React.Children.toArray(children).map((c: JSX.Element) => {
    // Check for a node-like component
    if (c.type.name === 'Node') {
      React.Children.toArray(c.props.children).map((n: JSX.Element) => {
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

export const executeEdgelikeChildren = (
  children: JSX.Element,
  edges: D3Edge[],
): {
  [key: string]: {
    tick: {
      name: string;
      tick: () => void;
    };
  };
} => {
  const edge = {};

  React.Children.toArray(children).map((c: JSX.Element) => {
    // Check for a edge-like component
    if (c.type.name === 'Edge') {
      React.Children.toArray(c.props.children).map((l: JSX.Element) => {
        // Execute the edge-like component as though it were a function
        const child = l.type({ ...l.props, edges: edges });

        // Keep the edge-like component's tick function
        edge[child.name] = {
          tick: child.tick,
        };
      });
    }
  });

  return edge;
};
