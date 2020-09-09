// components/utils/executeConfigurables.ts

const executeConfigurables = (children: JSX.Element[]): null => {
  children.map((c: JSX.Element) => {
    if (c.type.name === 'Zoomable') {
      c.type({ ...c.props });
    }
  });

  // d3.select('.nodes').call(drag(simulation));
  return;
};

export default executeConfigurables;
