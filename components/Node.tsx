// components/Node.tsx

import React, { ReactNode } from 'react';

interface NodeProps {
  node: D3Node;
  children: ReactNode;
  color: string;
  // clickAction: any;
}

const Node = ({ children }) => {
  return <>{children}</>;
};

export default Node;
