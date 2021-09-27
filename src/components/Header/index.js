import { useState } from "react";
import AutoCompleteInput from "components/AutoCompleteInput";
import { HeaderWrapper } from "./styles";

function Header() {
  const [value, setValue] = useState("");
  return (
    <HeaderWrapper>
      <div className='input-wrapper'>
        <AutoCompleteInput
          value={value}
          onChange={setValue}
          placeholder='Search for an organisation'
        />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
