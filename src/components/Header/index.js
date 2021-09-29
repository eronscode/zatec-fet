import AutoCompleteInput from "components/AutoCompleteInput";
import { HeaderWrapper } from "./styles";
import { useAppContext } from "context/app.context";
import useSearch from "hooks/useSearch";
import { fetchOrganizations } from "hooks/useFetchOrganizations";

function Header() {
  const { value, setValue, data, setData, isLoading, handleSearch } = useSearch(fetchOrganizations);
  const { setOrganization } = useAppContext();

  function handleInputChange(value) {
    setValue(value);
    handleSearch(value)
  }

  function selectOrganization(data) {
    setOrganization(data);
    setData(null);
    setValue(data?.login);
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
