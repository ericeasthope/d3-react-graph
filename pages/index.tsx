// pages/index.tsx

import React, { useState } from 'react';
import { SVG } from 'components';
import BlankGraph from '_samples/blank';

const Index = (): JSX.Element => {
  const [nodes] = useState([
    {
      id: 'MATHXXX',
      title: '(unknown)',
      year: 1,
      count: 5,
    },
    {
      id: 'MATHYYY',
      title: 'Computer Methods in Earth, Ocean and Atmospheric Sciences',
      year: 2,
      count: 8,
    },
    {
      id: 'MATHZZZ',
      title: '(unknown)',
      year: 1,
      count: 5,
    },
  ]);
  const [edges] = useState([
    {
      value: 1,
      target: 'MATHXXX',
      source: 'MATHYYY',
    },
    {
      value: 1,
      target: 'MATHYYY',
      source: 'MATHZZZ',
    },
    {
      value: 1,
      target: 'MATHZZZ',
      source: 'MATHXXX',
    },
  ]);

  const [forces] = useState({
    // velocityDecay: 2 / 10,
    forceLink: {
      name: 'link',
      id: (d) => d.id,
      strength: 1,
      distance: (d) => (d.value === 'or' ? 0 : 10),
    },
    forceManyBody: {
      name: 'charge',
      strength: (d) => (d.year > 2 ? -100 : -10),
    },
    forceX: { name: 'x' },
    forceY: { name: 'y' },
    forceCenter: { name: 'center' },
    forceCollide: {
      name: 'collide',
      radius: (d) => {
        // return 12
        // return 10 - d.depth;
        // if (d.id === root) return 20;
        // if (d.type === 'leaf') return radius/2;
        // return radiusStep / 4; // 2*((d.year+2) * 2);
        return d.r;
      },
      strength: 1,
      iterations: 3,
    },
  });

  // useEffect(() => {}, []);

  return (
    <SVG centerOrigin>
      <BlankGraph nodes={nodes} edges={edges} forces={forces} />
    </SVG>
  );
};

export default Index;
