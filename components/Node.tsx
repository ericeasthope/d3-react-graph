// components/Node.tsx

import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Node = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default Node;
