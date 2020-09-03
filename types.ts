// types.ts

import * as d3 from 'd3';

export interface D3Node extends d3.SimulationNodeDatum {
  id: string | number;
  group: number;
  x: number;
}

export interface D3Link extends d3.SimulationLinkDatum<D3Node> {
  source: string | number;
  target: string | number;
  value: number;
}

export interface D3Graph {
  nodes: D3Node[];
  links: D3Link[];
}

export interface D3Word extends d3.SimulationNodeDatum {
  id: string;
  size: string;
  align: string;
  uni: string;
  width: number;
}

export interface EdgeNode<Type> {
  node: {
    frontmatter: { [Property in keyof Type]: Type[Property] };
    excerpt?: string;
  };
}
