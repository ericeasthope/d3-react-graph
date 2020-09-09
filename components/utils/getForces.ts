// components/utils/getForces.ts

import * as d3 from 'd3';
import { D3Node, D3Edge } from 'types';

const getForces = (forces: {
  [key: string]: Record<string, unknown>;
}): [string, d3.Force<D3Node, D3Edge>][] => {
  const forceArray = [];

  Object.entries(forces).map((f) => {
    // Destructure force function name and parameters
    // Call corresponding force function
    const [name, parameters] = f;
    const force = d3[name]();
    // console.log(`Add force: ${name}.`);

    Object.keys(parameters)
      .filter((key) => key !== 'name')
      .map((key) => {
        const parameter = parameters[key];

        if (typeof parameter === 'string' && parameter.split('=>').length > 1) {
          console.log('Generated parameter map.');
          const [args, output] = parameter.split('=>');
          const inputs = args.match(/\((.*)\)/).pop();
          if (inputs.length === 0) {
            const argMap = Function('return' + output);
            console.log(key, argMap);
            force[key](argMap);
          } else {
            const argMap = Function('d', 'return' + output);
            force[key](argMap);
          }
        } else {
          force[key](parameter);
        }
      });

    forceArray.push([parameters.name, force]);
  });
  return forceArray;
};

export default getForces;
