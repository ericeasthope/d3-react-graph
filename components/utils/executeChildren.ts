// components/utils/executeChildren.ts

export const executeNodelikeChildren = (children, nodes) => {
  const node = {};

  React.Children.toArray(children).map((c) => {
    // Check for a node-like component
    if (c.type.name === 'Node') {
      React.Children.toArray(c.props.children).map((n) => {
        // Execute the node-like component as though it were a function
        const child = n.type({ ...n.props, nodes: nodes });

        // Keep the node-like component's tick function
        node[child.name] = {
          tick: child.tick,
        };
      });
    }
  });

  return node;
};

export const executeLinklikeChildren = (children, links) => {
  const link = {};

  React.Children.toArray(children).map((c) => {
    // Check for a link-like component
    if (c.type.name === 'Link') {
      React.Children.toArray(c.props.children).map((l) => {
        // Execute the link-like component as though it were a function
        const child = l.type({ ...l.props, links: links });

        // Keep the link-like component's tick function
        link[child.name] = {
          tick: child.tick,
        };
      });
    }
  });

  return link;
};
