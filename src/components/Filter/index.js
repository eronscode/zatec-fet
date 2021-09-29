import Input from "components/Input";
import { useEffect } from "react";
import { useState } from "react";
import { FilterWrapper } from "./styles";

function Filter() {
  const [value, setValue] = useState({
    name: "",
    min: "",
    max: "",
  });
  const [isError, setIsError] = useState("");
  const { name, min, max } = value;

  function handleChange(e) {
    let value = "";
    if (["max", "min"].includes(e.target.name)) {
      value = parseInt(e.target.value);
    }
    setValue((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  }

  useEffect(() => {
    if (min !== "" && max !== "") {
      if (min >= max) {
        setIsError("Conflicting min and max values");
      } else {
        setIsError("");
      }
    }
  }, [min, max]);

  return (
    <FilterWrapper>
      <div className='form-wrap'>
        <Input
          label='Filter repositories by name'
          onChange={handleChange}
          name='name'
          value={name}
          placeholder='Type to filter'
        />
      </div>
      <div className='form-wrap'>
        <label>Filter by number of issues</label>
        <div className='num-filter'>
          <div>
            <Input
              onChange={handleChange}
              name='min'
              value={min}
              type='number'
              placeholder='Min.'
              isError={isError}
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              name='max'
              value={max}
              type='number'
              placeholder='Max.'
              isError={isError}
              errorMsg={isError}
            />
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default Filter;
