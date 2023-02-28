import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
// import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  display: inline-block;
  position: relative;
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875;
`;

const NativeSelect = styled.select`
  cursor: pointer;
  display: inline-block;
  appearance: none;
  background: transparent;
  padding: 0.75rem 3.25rem 0.75rem 1rem;
  border: none;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
`;

const DropDownIcon = styled(Icon)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  // const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
        <NativeSelect value={value} onChange={onChange} aria-label={label}>
          {children}
        </NativeSelect>
        <DropDownIcon id="chevron-down" size="24" strokeWidth={2} />
      </Wrapper>
    </>
  );
};

export default Select;
