// components/Edge.tsx

import React from 'react';

interface EdgeProps {
  children: JSX.Element;
}

const Edge = ({ children }: EdgeProps): JSX.Element => {
  return <>{children}</>;
};

export default Edge;
