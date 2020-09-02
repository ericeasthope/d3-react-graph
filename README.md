---
tags: react d3 typescript graph component-based
---

# fancy-graph

React.js, D3.js, and TypeScript all come together with some pretty obscure NPM packages, fancy 3D, and transition effects, to bring you yet _another_ pluggable spec-based D3.js force-directed grapher.

## How to use

See [`pages/index.tsx`] for an example.

**tl;dr** (I'm not sure if it actually works yet, though.)

```js
import FancyGraph, { SVG, Graph, Link, Line, Node, Circle } from 'fancy-graph';

const MyComponent = () => {
  //  ...

  return (
    <FancyGraph>
      <SVG centerOrigin>
        <Graph>
          <Link>
            <Line
              // Set link line colour based on data join status
              stroke={{
                enterStroke: 'green',
                updateStroke: 'yellow',
                exitStroke: 'red',
              }}
            />
          </Link>
          <Node>
            <Circle
              // Set node circle hover tooltip based on ID
              title={(d) => d.id}
            />
          </Node>
        </Graph>
      </SVG>
    <FancyGraph>
  );

export default MyComponent;
```

## Contributing

Please fork and send pull requests!

---

Inspired by:

- ["Force-directed graph"](https://observablehq.com/@d3/force-directed-graph)

- ["Creating a Force Graph using React and D3"](https://levelup.gitconnected.com/creating-a-force-graph-using-react-and-d3-6579bcd9628c)

- ["React/D3 Ecosystem"](https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/)

- ["Understanding React's `useEffect` callback function"](https://stackoverflow.com/questions/59188972/understanding-react-hooks-useeffect-function-when-is-the-callback-functioni-e-u)

- ["Example: `react-d3-force`"](https://onedrive.live.com/?authkey=%21AL75phd8K0DQDgs&id=CC807E0FCC4169F4%2137080&cid=CC807E0FCC4169F4)

---

> Authored by Eric Easthope ([@ericeasthope](https://github.com/ericeasthope)), MIT License
