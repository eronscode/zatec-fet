import Input from "components/Input";
import { HeaderWrapper } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <div className="input-wrapper">
        <Input />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
