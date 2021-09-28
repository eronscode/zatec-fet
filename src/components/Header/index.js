import AutoCompleteInput from "components/AutoCompleteInput";
import { HeaderWrapper } from "./styles";
import { useAppContext } from "context/app.context";
import useSearch from "hooks/useSearch";

function Header() {
  const { value, setValue, data, isLoading } = useSearch();
  const { setOrganization } = useAppContext();

  function handleInputChange(value) {
    setValue(value);
  }

  function selectOrganization(data) {
    setOrganization(data);
  }

  return (
    <HeaderWrapper>
      <div className='input-wrapper'>
        <AutoCompleteInput
          value={value}
          isLoading={isLoading}
          onChange={handleInputChange}
          data={data}
          placeholder='Search for an organisation'
          selectOption={selectOrganization}
        />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
