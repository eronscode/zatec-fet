import styled, { css } from "styled-components";

import { color, font } from "styles/styleUtils";

const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  label {
    ${font.bold};
    ${font.size(12)};
    line-height: 14px;
    margin-bottom: 4px;
    display: block;
  }
`;

const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 13px 10px;
  height: 40px;
  border: 1px solid ${color.lightGrey};
  color: ${color.black};
  background: ${color.white};
  transition: background 0.1s;
  ${font.size(12)};
  line-height: 14px;

  &:hover {
    /* background: ${color.backgroundLight}; */
  }
  &:focus {
    background: #fff;
    border: 1px solid ${color.blue};
    box-shadow: 0px 0px 8px rgba(0, 133, 255, 0.3);
  }
  ${(props) =>
    props.invalid &&
    css`
      border: 1px solid ${color.red};
      &,
      &:focus {
        border: 1px solid ${color.red};
        box-shadow: none;
      }
    `}
`;

const ErrorContainer = styled.div`
  position: absolute;
  right: -106px;
  top: -60px;
  width: 200px;
  text-align: center;
`;

export { InputElement, StyledInput, ErrorContainer };
