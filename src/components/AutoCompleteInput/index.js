import { useState } from "react";
import PropTypes from "prop-types";

import { SuggestionsList, SuggestionsWrapper } from "./styles";
import Input from "components/Input";
import loader from "assets/images/loader.gif";

const propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  invalid: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  placeholder: undefined,
  name: undefined,
  value: undefined,
  label: undefined,
  invalid: undefined,
  onChange: () => {},
};

function AutoCompleteInput({ placeholder }) {
  const [value, setValue] = useState(false);

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <SuggestionsWrapper>
        <p className="no-results">No Results</p>
        {renderSuggestionsList()}
        {renderLoadingIndicator()}
      </SuggestionsWrapper>
    </div>
  );
}

function renderSuggestionsList(params) {
  return (
    <SuggestionsList>
      <ul>
        <li>Option</li>
        <li>Option</li>
        <li>Option</li>
      </ul>
    </SuggestionsList>
  );
}

function renderLoadingIndicator(params) {
  return <img src={loader} alt='loading...' />;
}

AutoCompleteInput.defaultProps = defaultProps;
AutoCompleteInput.propTypes = propTypes;

export default AutoCompleteInput;
