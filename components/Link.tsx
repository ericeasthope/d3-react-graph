// components/Link.tsx

import React, { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
}

const Link = ({ children }: LinkProps) => {
  return <>{children}</>;
};

export default Link;
