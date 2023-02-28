import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";

const STYLES = {
  small: {},
  large: {},
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ width, ...STYLES[size] }}>
      <Icon id={icon} />
      <NativeInput type="text" placeholder={placeholder} aria-label={label} />
    </Wrapper>
  );
};

const NativeInput = styled.input`
  position: absolute;
  inset: ;
`;

const Wrapper = styled.div`
  position: relative;
`;

export default IconInput;
