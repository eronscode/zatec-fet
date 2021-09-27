import AutoCompleteInput from "components/AutoCompleteInput";
import { HeaderWrapper } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <div className='input-wrapper'>
        <AutoCompleteInput placeholder='Search for an organisation' />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
