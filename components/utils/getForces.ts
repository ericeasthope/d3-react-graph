// utils/getForces.ts

import * as d3f3d from 'd3-force-3d';

const getForces = (forces) => {
  const forceArray = [];
  forces.map((f) => {
    // Call corresponding force function
    const force = d3f3d[Object.keys(f)[0]]();

    // Get force function parameters
    const parameters = f[Object.keys(f)[0]];

    console.log('Add force', Object.keys(f)[0], '...');
    Object.keys(parameters)
      .filter((k) => k !== 'key')
      .map((k) => {
        const value = parameters[k];
        if (typeof value === 'string' && value.split('=>').length > 1) {
          console.log('Generated parameter map.');
          const [args, output] = value.split('=>');
          const inputs = args.match(/\((.*)\)/).pop();
          if (inputs.length === 0) {
            const argMap = Function('return' + output);
            console.log(k, argMap);
            force[k](argMap);
          } else {
            const argMap = Function('d', 'return' + output);
            force[k](argMap);
          }
        } else {
          console.log(k, value);
          force[k](value);
        }
      });
    forceArray.push([parameters['key'], force]);
  });
  return forceArray;
};

export default getForces;
