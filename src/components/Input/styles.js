import styled, { css } from "styled-components";

import { color, font } from "styles/styleUtils";

const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 40px;
  width: 100%;
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
  ${font.size(15)}

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

const ErrorText = styled.p`
  color: ${color.red};
  ${font.size(13)}
`;

export { InputElement, StyledInput, ErrorText };
