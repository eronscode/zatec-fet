import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

import { SuggestionsList, SuggestionsWrapper } from "./styles";
import Input from "components/Input";
import loader from "assets/images/loader.gif";

const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  selectOption: PropTypes.func,
};

const defaultProps = {
  placeholder: undefined,
  value: undefined,
  data: undefined,
  isLoading: undefined,
  onChange: () => {},
  selectOption: () => {},
};

function AutoCompleteInput({
  placeholder,
  value,
  onChange,
  isLoading,
  data,
  selectOption,
}) {
  function handleInputChange(e) {
    onChange(e.target.value);
  }
  function handleOptionSelect(params) {
    selectOption();
  }

  return (
    <div>
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {!isEmpty(data) ||
        (isLoading && (
          <SuggestionsWrapper>
            {/* <p className='no-results'>No Results</p> */}
            {data && renderSuggestionsList(handleOptionSelect, data)}
            {isLoading && renderLoadingIndicator()}
          </SuggestionsWrapper>
        ))}
    </div>
  );
}

function renderSuggestionsList(handleOptionSelect = () => {}, data = []) {
  return (
    <SuggestionsList>
      <ul>
        <li onClick={handleOptionSelect}>Option</li>
        <li>Option</li>
        <li>Option</li>
      </ul>
    </SuggestionsList>
  );
}

function renderLoadingIndicator() {
  return <img src={loader} alt='loading...' />;
}

AutoCompleteInput.defaultProps = defaultProps;
AutoCompleteInput.propTypes = propTypes;

export default AutoCompleteInput;
