import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

import { SuggestionsList, SuggestionsWrapper } from "./styles";
import Input from "components/Input";
import loader from "assets/images/loader.gif";
import useDropdownVisible from "hooks/useDropdownVisible";

const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.object,
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
  const { ref, isDropdownVisible, setIsDropdownVisible } = useDropdownVisible();

  function handleInputChange(e) {
    onChange(e.target.value);
    setIsDropdownVisible(true);
  }
  function handleOptionSelect(value) {
    selectOption(value);
    setIsDropdownVisible(false);
  }

  return (
    <div ref={ref}>
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {((!isEmpty(data) && isDropdownVisible) || (isLoading && data===null)) && (
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
          <ul key={item.id}>
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
