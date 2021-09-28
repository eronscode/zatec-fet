import { forwardRef } from "react";
import PropTypes from "prop-types";

import { StyledInput, InputElement, ErrorText } from "./styles";

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  invalid: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  name: undefined,
  value: undefined,
  label: undefined,
  invalid: undefined,
  onChange: () => {},
};

const Input = forwardRef(
  (
    { className, label, name, invalid, onChange, value, ...inputProps },
    ref
  ) => {
    return (
      <StyledInput className={className}>
        {label && <label htmlFor={name}>{label} </label>}
        <InputElement
          value={value}
          invalid={invalid}
          name={name}
          ref={ref}
          onChange={onChange}
          {...inputProps}
        />
        {invalid && <ErrorText>{invalid}</ErrorText>}
      </StyledInput>
    );
  }
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
