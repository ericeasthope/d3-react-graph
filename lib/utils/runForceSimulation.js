'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var d3 = _interopRequireWildcard(require('d3'));

// utils/runForceSimulation.ts

/*
const TestProps = {
  dimensions: 3,
  draggable: true,
  zoomable: true,
  pannable: false,
  alphaDecay: 1e-3,
  velocityDecay: 4e-1,
  // onNodeMouseover: () => {},
  // onNodeMouseout: () => {},
  // onNodeClick: () => {},
};

forces={[
  // { forceManyBody: { strength: "-30", key: 'charge' } },
  { forceCenter: { key: 'center' } },
  { forceLink: { key: 'link', id: '(d) => d.id' } },
  { forceX: { key: 'x', x: 0, strength: 0.2 } },
  { forceY: { key: 't', y: 0, strength: 0.2 } },
  {
    forceCollide: {
      key: 'collide',
      radius: '(d) => 5',
      iterations: 3,
    },
  },
]}

// Configure D3.js force simulation
var forces = {
  forceLink: {name: "link", id: d => d.id},
  forceManyBody: {name: "charge", strength: () => -120},
  forceX: {name:"x"},
  forceY: {name:"y"},
  forceCenter: {name:"center"},
  forceCollide: {name:"collide", radius: d => d.r}
}
graph.addForce(forces);


      /*
        .force('surface', d3ForceSurface()
            .surfaces([
              {from: {x:-50,y:0}, to: {x:50,y:0}},
            ])
            .oneWay(true)
            .radius(d => d.r)
            .onImpact(() => console.log("impact."))
        );
*/
var runForceSimulation = function runForceSimulation(nodes, links) {
  // Map link and node array content to objects
  // const l = links.map((d) => Object.assign({}, d));
  // const n = nodes.map((d) => Object.assign({}, d, { selected: false }));
  // const links = linksData.map((d: D3Link) => Object.assign({}, d));
  // const nodes = nodesData.map((d: D3Node) => Object.assign({}, d, { selected: false }));
  // Initialize a Barnes-Hut force simulation
  var simulation = d3.forceSimulation(nodes); // Configure the force simulation

  simulation
    .alphaDecay(1e-3)
    .velocityDecay(4e-1)
    .force('charge', d3.forceManyBody().strength(-150))
    .force('x', d3.forceX())
    .force('y', d3.forceY())
    .force(
      'link',
      d3.forceLink(links).id(function (d) {
        return d.id;
      }),
    )
    .force(
      'collide',
      d3.forceCollide().radius(function (d) {
        return d.r ? d.r : 8;
      }),
    ); // Set `simulation` dimensions, alpha/velocity decay if specified
  // dimensions ? simulation.numDimensions(dimensions) : null;
  // velocityDecay ? simulation.velocityDecay(velocityDecay) : null;
  // alphaDecay ? simulation.alphaDecay(alphaDecay) : null;
  // For all forces, add each force to `simulation`
  // if (forces) getForces(forces).map((f) => simulation.force(...f));

  return {
    _simulation: simulation,
    _destroyer: function _destroyer() {
      simulation.stop();
      console.log('Simulation stopped.');
    },
  };
};

var _default = runForceSimulation;
exports['default'] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvcnVuRm9yY2VTaW11bGF0aW9uLnRzIl0sIm5hbWVzIjpbInJ1bkZvcmNlU2ltdWxhdGlvbiIsIm5vZGVzIiwibGlua3MiLCJzaW11bGF0aW9uIiwiZDMiLCJmb3JjZVNpbXVsYXRpb24iLCJhbHBoYURlY2F5IiwidmVsb2NpdHlEZWNheSIsImZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiZm9yY2VYIiwiZm9yY2VZIiwiZm9yY2VMaW5rIiwiaWQiLCJkIiwiZm9yY2VDb2xsaWRlIiwicmFkaXVzIiwiciIsIl9zaW11bGF0aW9uIiwiX2Rlc3Ryb3llciIsInN0b3AiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFGQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUN6QkMsS0FEeUIsRUFFekJDLEtBRnlCLEVBR3dCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxlQUFILENBQW1CSixLQUFuQixDQUFuQixDQVJpRCxDQVVqRDs7QUFDQUUsRUFBQUEsVUFBVSxDQUNQRyxVQURILENBQ2MsSUFEZCxFQUVHQyxhQUZILENBRWlCLElBRmpCLEVBR0dDLEtBSEgsQ0FHUyxRQUhULEVBR21CSixFQUFFLENBQUNLLGFBQUgsR0FBbUJDLFFBQW5CLENBQTRCLENBQUMsR0FBN0IsQ0FIbkIsRUFJR0YsS0FKSCxDQUlTLEdBSlQsRUFJY0osRUFBRSxDQUFDTyxNQUFILEVBSmQsRUFLR0gsS0FMSCxDQUtTLEdBTFQsRUFLY0osRUFBRSxDQUFDUSxNQUFILEVBTGQsRUFNR0osS0FOSCxDQU9JLE1BUEosRUFRSUosRUFBRSxDQUFDUyxTQUFILENBQWFYLEtBQWIsRUFBb0JZLEVBQXBCLENBQXVCLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNELEVBQVQ7QUFBQSxHQUF2QixDQVJKLEVBVUdOLEtBVkgsQ0FXSSxTQVhKLEVBWUlKLEVBQUUsQ0FBQ1ksWUFBSCxHQUFrQkMsTUFBbEIsQ0FBeUIsVUFBQ0YsQ0FBRDtBQUFBLFdBQVFBLENBQUMsQ0FBQ0csQ0FBRixHQUFNSCxDQUFDLENBQUNHLENBQVIsR0FBWSxDQUFwQjtBQUFBLEdBQXpCLENBWkosRUFYaUQsQ0EwQmpEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFPO0FBQ0xDLElBQUFBLFdBQVcsRUFBRWhCLFVBRFI7QUFFTGlCLElBQUFBLFVBQVUsRUFBRSxzQkFBTTtBQUNoQmpCLE1BQUFBLFVBQVUsQ0FBQ2tCLElBQVg7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDRDtBQUxJLEdBQVA7QUFPRCxDQTVDRDs7ZUE4Q2V2QixrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHV0aWxzL3J1bkZvcmNlU2ltdWxhdGlvbi50c1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBEM05vZGUsIEQzTGluayB9IGZyb20gJ3R5cGVzJztcblxuLypcbmNvbnN0IFRlc3RQcm9wcyA9IHtcbiAgZGltZW5zaW9uczogMyxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICB6b29tYWJsZTogdHJ1ZSxcbiAgcGFubmFibGU6IGZhbHNlLFxuICBhbHBoYURlY2F5OiAxZS0zLFxuICB2ZWxvY2l0eURlY2F5OiA0ZS0xLFxuICAvLyBvbk5vZGVNb3VzZW92ZXI6ICgpID0+IHt9LFxuICAvLyBvbk5vZGVNb3VzZW91dDogKCkgPT4ge30sXG4gIC8vIG9uTm9kZUNsaWNrOiAoKSA9PiB7fSxcbn07XG5cbmZvcmNlcz17W1xuICAvLyB7IGZvcmNlTWFueUJvZHk6IHsgc3RyZW5ndGg6IFwiLTMwXCIsIGtleTogJ2NoYXJnZScgfSB9LFxuICB7IGZvcmNlQ2VudGVyOiB7IGtleTogJ2NlbnRlcicgfSB9LFxuICB7IGZvcmNlTGluazogeyBrZXk6ICdsaW5rJywgaWQ6ICcoZCkgPT4gZC5pZCcgfSB9LFxuICB7IGZvcmNlWDogeyBrZXk6ICd4JywgeDogMCwgc3RyZW5ndGg6IDAuMiB9IH0sXG4gIHsgZm9yY2VZOiB7IGtleTogJ3QnLCB5OiAwLCBzdHJlbmd0aDogMC4yIH0gfSxcbiAge1xuICAgIGZvcmNlQ29sbGlkZToge1xuICAgICAga2V5OiAnY29sbGlkZScsXG4gICAgICByYWRpdXM6ICcoZCkgPT4gNScsXG4gICAgICBpdGVyYXRpb25zOiAzLFxuICAgIH0sXG4gIH0sXG5dfVxuXG4vLyBDb25maWd1cmUgRDMuanMgZm9yY2Ugc2ltdWxhdGlvblxudmFyIGZvcmNlcyA9IHtcbiAgZm9yY2VMaW5rOiB7bmFtZTogXCJsaW5rXCIsIGlkOiBkID0+IGQuaWR9LFxuICBmb3JjZU1hbnlCb2R5OiB7bmFtZTogXCJjaGFyZ2VcIiwgc3RyZW5ndGg6ICgpID0+IC0xMjB9LFxuICBmb3JjZVg6IHtuYW1lOlwieFwifSxcbiAgZm9yY2VZOiB7bmFtZTpcInlcIn0sXG4gIGZvcmNlQ2VudGVyOiB7bmFtZTpcImNlbnRlclwifSxcbiAgZm9yY2VDb2xsaWRlOiB7bmFtZTpcImNvbGxpZGVcIiwgcmFkaXVzOiBkID0+IGQucn1cbn1cbmdyYXBoLmFkZEZvcmNlKGZvcmNlcyk7XG5cblxuICAgICAgLypcbiAgICAgICAgLmZvcmNlKCdzdXJmYWNlJywgZDNGb3JjZVN1cmZhY2UoKVxuICAgICAgICAgICAgLnN1cmZhY2VzKFtcbiAgICAgICAgICAgICAge2Zyb206IHt4Oi01MCx5OjB9LCB0bzoge3g6NTAseTowfX0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLm9uZVdheSh0cnVlKVxuICAgICAgICAgICAgLnJhZGl1cyhkID0+IGQucilcbiAgICAgICAgICAgIC5vbkltcGFjdCgoKSA9PiBjb25zb2xlLmxvZyhcImltcGFjdC5cIikpXG4gICAgICAgICk7XG4qL1xuXG5jb25zdCBydW5Gb3JjZVNpbXVsYXRpb24gPSAoXG4gIG5vZGVzOiBEM05vZGVbXSxcbiAgbGlua3M6IEQzTGlua1tdLFxuKTogeyBfc2ltdWxhdGlvbjogYW55OyBfZGVzdHJveWVyOiAoKSA9PiB2b2lkIH0gPT4ge1xuICAvLyBNYXAgbGluayBhbmQgbm9kZSBhcnJheSBjb250ZW50IHRvIG9iamVjdHNcbiAgLy8gY29uc3QgbCA9IGxpbmtzLm1hcCgoZCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgZCkpO1xuICAvLyBjb25zdCBuID0gbm9kZXMubWFwKChkKSA9PiBPYmplY3QuYXNzaWduKHt9LCBkLCB7IHNlbGVjdGVkOiBmYWxzZSB9KSk7XG4gIC8vIGNvbnN0IGxpbmtzID0gbGlua3NEYXRhLm1hcCgoZDogRDNMaW5rKSA9PiBPYmplY3QuYXNzaWduKHt9LCBkKSk7XG4gIC8vIGNvbnN0IG5vZGVzID0gbm9kZXNEYXRhLm1hcCgoZDogRDNOb2RlKSA9PiBPYmplY3QuYXNzaWduKHt9LCBkLCB7IHNlbGVjdGVkOiBmYWxzZSB9KSk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBhIEJhcm5lcy1IdXQgZm9yY2Ugc2ltdWxhdGlvblxuICBjb25zdCBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKG5vZGVzKTtcblxuICAvLyBDb25maWd1cmUgdGhlIGZvcmNlIHNpbXVsYXRpb25cbiAgc2ltdWxhdGlvblxuICAgIC5hbHBoYURlY2F5KDFlLTMpXG4gICAgLnZlbG9jaXR5RGVjYXkoNGUtMSlcbiAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtMTUwKSlcbiAgICAuZm9yY2UoJ3gnLCBkMy5mb3JjZVgoKSlcbiAgICAuZm9yY2UoJ3knLCBkMy5mb3JjZVkoKSlcbiAgICAuZm9yY2UoXG4gICAgICAnbGluaycsXG4gICAgICBkMy5mb3JjZUxpbmsobGlua3MpLmlkKChkKSA9PiBkLmlkKSxcbiAgICApXG4gICAgLmZvcmNlKFxuICAgICAgJ2NvbGxpZGUnLFxuICAgICAgZDMuZm9yY2VDb2xsaWRlKCkucmFkaXVzKChkKSA9PiAoZC5yID8gZC5yIDogOCkpLFxuICAgICk7XG5cbiAgLy8gU2V0IGBzaW11bGF0aW9uYCBkaW1lbnNpb25zLCBhbHBoYS92ZWxvY2l0eSBkZWNheSBpZiBzcGVjaWZpZWRcbiAgLy8gZGltZW5zaW9ucyA/IHNpbXVsYXRpb24ubnVtRGltZW5zaW9ucyhkaW1lbnNpb25zKSA6IG51bGw7XG4gIC8vIHZlbG9jaXR5RGVjYXkgPyBzaW11bGF0aW9uLnZlbG9jaXR5RGVjYXkodmVsb2NpdHlEZWNheSkgOiBudWxsO1xuICAvLyBhbHBoYURlY2F5ID8gc2ltdWxhdGlvbi5hbHBoYURlY2F5KGFscGhhRGVjYXkpIDogbnVsbDtcblxuICAvLyBGb3IgYWxsIGZvcmNlcywgYWRkIGVhY2ggZm9yY2UgdG8gYHNpbXVsYXRpb25gXG4gIC8vIGlmIChmb3JjZXMpIGdldEZvcmNlcyhmb3JjZXMpLm1hcCgoZikgPT4gc2ltdWxhdGlvbi5mb3JjZSguLi5mKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBfc2ltdWxhdGlvbjogc2ltdWxhdGlvbixcbiAgICBfZGVzdHJveWVyOiAoKSA9PiB7XG4gICAgICBzaW11bGF0aW9uLnN0b3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTaW11bGF0aW9uIHN0b3BwZWQuJyk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bkZvcmNlU2ltdWxhdGlvbjtcbiJdfQ==
