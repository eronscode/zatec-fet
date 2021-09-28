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
      {(!isEmpty(data) || isLoading) && (
        <SuggestionsWrapper>
          {isLoading && renderLoadingIndicator()}
          {data?.total_count === 0 && <p className='no-results'>No Results</p>}
          {!isEmpty(data) && renderSuggestionsList(handleOptionSelect, data)}
        </SuggestionsWrapper>
      )}
    </div>
  );
}

function renderSuggestionsList(handleOptionSelect = () => {}, data = []) {
  return (
    <SuggestionsList>
      {data?.items.map((item) => {
        return (
          <ul>
            <li onClick={() => handleOptionSelect(item)}>{item.login}</li>
          </ul>
        );
      })}
    </SuggestionsList>
  );
}

function renderLoadingIndicator() {
  return <img src={loader} alt='loading...' />;
}

AutoCompleteInput.defaultProps = defaultProps;
AutoCompleteInput.propTypes = propTypes;

export default AutoCompleteInput;
