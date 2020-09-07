// components/LinkText.tsx

import React, { ReactNode } from 'react';
import * as d3 from 'd3';

import { D3Link } from 'types';

interface Props {
  children: JSX.Element[];
  links?: D3Link[];
}

const LinkText = ({ children, links }: Props): JSX.Element => {
  const g = d3
    .select('.links')
    .selectAll('g')
    .data(links)
    .join(
      (enter) => enter.append('g'),
      (update) => update,
      (exit) => exit.remove(),
    );

  children.map((c) => {
    let text = g
      .append('text')
      .text(c.text)
      .attr('text-anchor', 'middle')
      .style('font-size', c.fontSize)
      .attr('fill', c.fill)
      .attr('dy', c.dy)
      .attr('alignment-baseline', 'middle');

    text
      .on('mouseover', function () {
        c.onMouseOver ? c.onMouseOver(d3.select(this)) : null;
      })
      .on('mouseout', function () {
        c.onMouseOut ? c.onMouseOut(d3.select(this)) : null;
      });

    c.onClick
      ? text.on('click', function (d) {
          if (!d3.event.defaultPrevented) {
            c.onClick(d3.select(this), d);
          }

          // If dragging ...
          return;
        })
      : null;

    text.append('title').text(c.title);
  });

  const tick = () => {
    g
      /*
      .attr('x1', (d: D3Link & { source: { x: number } }) => d.source.x)
      .attr('y1', (d: D3Link & { source: { y: number } }) => d.source.y)
      .attr('x2', (d: D3Link & { target: { x: number } }) => d.target.x)
      .attr('y2', (d: D3Link & { target: { y: number } }) => d.target.y);
      */
      .attr('transform', function (d) {
        return (
          'translate(' +
          (d.source.x + d.target.x) / 2 +
          ',' +
          (d.source.y + d.target.y) / 2 +
          ')' +
          'rotate(' +
          (180 / Math.PI) *
            Math.atan2(d.target.y - d.source.y, d.target.x - d.source.x) +
          ')'
        );
      });
  };

  return {
    name: 'text',
    tick: tick,
  };
};

export default LinkText;
