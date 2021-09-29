import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { color, font } from "styles/styleUtils";

const propTypes = {
  value: PropTypes.string,
};

const defaultProps = {
  value: undefined,
};

function Tooltip({ value }) {
  return (
    <ToolTipWrapper>
      <p>{value}</p>
    </ToolTipWrapper>
  );
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;

const ToolTipWrapper = styled.div`
  background: ${color.darkGrey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  p {
    ${font.size(12)};
    line-height: 14px;
    color: ${color.white};
    padding: 13px 10px;
    word-break: break-word;
  }
`;
