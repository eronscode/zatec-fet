import { useState } from "react";
import Input from "components/Input";

function AutoCompleteInput() {
  const [value, setValue] = useState(false);
  
  return (
    <div>
      <Input />
    </div>
  );
}

export default AutoCompleteInput;
