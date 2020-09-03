// components/Link.tsx

import React, { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
}

const Link = ({ children }: LinkProps): JSX.Element => {
  return <>{children}</>;
};

export default Link;
