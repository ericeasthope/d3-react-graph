// utils/executeConfigurables.ts

const executeConfigurables = (children) => {
  children.map((c) => {
    if (c.type.name === 'Zoomable') {
      c.type({ ...c.props });
    }
  });

  // d3.select('.nodes').call(drag(simulation));
};

export default executeConfigurables;
