/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const wrapperStyles = {
  large: {
    "--border-radius": "8px",
    "--height": "24px",
    "--padding": "4px",
  },
  medium: {
    "--border-radius": "4px",
    "--height": "12px",
  },
  small: {
    "--border-radius": "4px",
    "--height": "8px",
  },
};

const Wrapper = styled.div`
  padding: var(--padding);
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  background: ${COLORS.transparentGray15};
`;

const barWrapperStyles = {
  large: {
    "--border": "solid 4px transparent",
  },
  medium: {},
  small: {},
};

const BarWrapper = styled.div`
  height: 100%;
  width: 100%;
  border: var(--border);
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: ${({ value }) => `${value}%`};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      style={wrapperStyles[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-label="Loading"
    >
      <BarWrapper styles={barWrapperStyles[size]}>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
