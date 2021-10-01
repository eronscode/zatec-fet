import { forwardRef } from "react";
import PropTypes from "prop-types";

import { StyledSelect, SelectElement, SelectWrapper } from "./styles";

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  isError: PropTypes.string,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  name: undefined,
  value: undefined,
  options: [],
  label: undefined,
  isError: undefined,
  errorMsg: undefined,
  onChange: () => {},
};

const Select = forwardRef(
  (
    {
      className,
      label,
      name,
      isError,
      errorMsg,
      onChange,
      value,
      options,
      ...inputProps
    },
    ref
  ) => {
    return (
      <SelectWrapper>
        {label && <label htmlFor={name}>{label} </label>}
        <StyledSelect className={className}>
          <SelectElement
            value={value}
            ref={ref}
            onChange={onChange}
            {...inputProps}
          >
            {options?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </SelectElement>
        </StyledSelect>
      </SelectWrapper>
    );
  }
);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
