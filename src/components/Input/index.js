import { forwardRef } from "react";
import PropTypes from "prop-types";

import { StyledInput, InputElement, ErrorContainer } from "./styles";
import { ErrorIcon } from "utils/icons";
import Tooltip from "components/Tooltip";

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  isError: PropTypes.string,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  name: undefined,
  value: undefined,
  label: undefined,
  isError: undefined,
  errorMsg: undefined,
  onChange: () => {},
};

const Input = forwardRef(
  (
    { className, label, name, isError, errorMsg, onChange, value, ...inputProps },
    ref
  ) => {
    return (
      <>
        {label && <label htmlFor={name}>{label} </label>}
        <StyledInput className={className}>
          {errorMsg && (
            <ErrorContainer>
              <Tooltip value={errorMsg} />
              <ErrorIcon />
            </ErrorContainer>
          )}
          <InputElement
            value={value}
            invalid={isError}
            name={name}
            ref={ref}
            onChange={onChange}
            {...inputProps}
          />
        </StyledInput>
      </>
    );
  }
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
