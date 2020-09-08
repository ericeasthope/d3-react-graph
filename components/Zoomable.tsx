// components/Zoomable.tsx

import { ReactText } from 'react';
import * as d3 from 'd3';

const Zoomable = ({
  disablePan,
  disableDoubleClick,
  disableTranslation,
}): JSX.Element => {
  const width = d3.select('svg').node().getBoundingClientRect().width;
  const height = d3.select('svg').node().getBoundingClientRect().height;

  const zoomable = d3.select('svg').call(
    d3
      .zoom()
      .scaleExtent([1, 100])
      .on('zoom', function () {
        const e = d3.event.transform;

        // const tx = Math.min(0, Math.max(e.x, width - width * e.k));
        // const ty = Math.min(0, Math.max(e.y, height - height * e.k));

        // Set zoom transformation
        const transformation = d3.zoomIdentity
          // .translate(width/2, height/2)
          .scale(e.k)
          .translate(
            disableTranslation ? 0 : e.x,
            disableTranslation ? 0 : e.y,
          );

        d3.select('svg').select('g').attr('transform', transformation);
      }),
  );

  // Disable double click D3 zoom behaviour
  if (disableDoubleClick) zoomable.on('dblclick.zoom', null);

  // Disable D3 zoom panning if desired
  if (disablePan) zoomable.on('mousedown.zoom', null);

  return {};
};

export default Zoomable;
