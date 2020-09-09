// components/SVG.tsx

import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: JSX.Element;
  centerOrigin?: boolean;
}

const SVG = ({ children, centerOrigin }: Props): JSX.Element => {
  return (
    <ScalingSVGContainer>
      <ScalingSVG
        preserveAspectRatio="xMidYMid meet"
        viewBox={`-${centerOrigin ? 50 : 0} -${centerOrigin ? 50 : 0} 100 100`}
      >
        {children}
      </ScalingSVG>
    </ScalingSVGContainer>
  );
};

export default SVG;

const ScalingSVGContainer = styled.div`
  position: relative;
  padding-bottom: 100vh;
  max-height: 100vh;
  display: flex;
  flex: 1;
`;

const ScalingSVG = styled.svg`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  text {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  text::selection {
    background: none;
  }
`;
