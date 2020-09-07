// pages/index.tsx

import React, { useState, useEffect } from 'react';

import * as d3 from 'd3';
import SVG from 'components/SVG';
import Graph from 'components/Graph';
import Circle from 'components/Circle';
import Node from 'components/Node';
import Line from 'components/Line';
import Link from 'components/Link';
import LinkText from 'components/LinkText';
import Zoomable from 'components/Zoomable';

const Index = (): JSX.Element => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // d3.select('svg.links').selectAll('*').remove();
    // d3.select('svg.nodes').selectAll('*').remove();

    setTimeout(() => {
      console.log('Add node.');
      setNodes((n) => [...n, { id: 0, r: 8 }]);
    }, 500);

    setTimeout(() => {
      console.log('Add nodes.');
      setNodes((n) => [...n, { id: 1, r: 8 }, { id: 2, r: 8 }]);
    }, 1000);

    setTimeout(() => {
      console.log('Add links.');
      setEdges((l) => [
        ...l,
        { source: 0, target: 1 },
        { source: 1, target: 2 },
        { source: 0, target: 2 },
      ]);
    }, 1500);

    setTimeout(() => {
      console.log('Remove node.');
      setNodes((nods) => [...nods.filter((n) => n.id !== 0)]);
      setEdges((lins) => [
        ...lins.filter((l) => (l.source.id !== 0) & (l.target.id !== 0)),
      ]);
    }, 2000);
  }, []);

  return (
    <SVG centerOrigin>
      <Graph nodes={nodes} links={edges}>
        <Zoomable disablePan disableDoubleClick />
        <Link>
          {/*<Line
              stroke={{
                enterStroke: '#111',
                updateStroke: '#555',
                exitStroke: '#999',
              }}
              strokeWidth={(d) => Math.sqrt(d.value ? d.value : 1)}
            />
            */}
          <LinkText>
            {[
              {
                name: 'arrow',
                text: (d) => `\u27f6`,
                title: (d) => `${d.source.id} => ${d.target.id}`,
                fontSize: '12px',
                fill: '#000',
              },
              {
                name: 'plus',
                text: '+',
                title: '+',
                fontSize: '6px',
                fill: '#999',
                dy: '-0.67em',
                onMouseOver: (el, d) => el.attr('fill', '#000'),
                onMouseOut: (el) => el.attr('fill', '#999'),
                onClick: (el, d) => {
                  const targetNode = nodes.filter(
                    (n) => n.id === d.target.id,
                  )[0];
                  targetNode.r += 1;
                  el.interrupt();
                  setNodes((n) =>
                    n.map((node) =>
                      node.id === d.target.id ? targetNode : node,
                    ),
                  );
                },
              },
              {
                name: 'minus',
                text: '–',
                title: '–',
                fontSize: '6px',
                fill: '#999',
                dy: '0.67em',
                onMouseOver: (el, d) => el.attr('fill', '#000'),
                onMouseOut: (el, d) => el.attr('fill', '#999'),
                onClick: (el, d) => {
                  const targetNode = nodes.filter(
                    (n) => n.id === d.target.id,
                  )[0];
                  targetNode.r -= 1;
                  el.interrupt();
                  setNodes((n) =>
                    n.map((node) =>
                      node.id === d.target.id ? targetNode : node,
                    ),
                  );
                },
              },
            ]}
          </LinkText>
        </Link>
        <Node>
          <Circle title={(d) => d.id} />
        </Node>
      </Graph>
    </SVG>
  );
};

export default Index;
