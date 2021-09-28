import Input from "components/Input";
import { useState } from "react";
import { FilterWrapper } from "./styles";

function Filter() {
  const [value, setValue] = useState({
    name: "",
    min: "",
    max: "",
  });

  function handleChange(e) {
    setValue({
      [e.target.name]: e.target.value,
    });
  }

  const { name, min, max } = value;

  return (
    <FilterWrapper>
      <div className='form-wrap'>
        <Input
          label='Filter repositories by name'
          onChange={handleChange}
          name='name'
          value={name}
          placeholder='Filter By Name'
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
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              name='max'
              value={max}
              type='number'
              placeholder='Max.'
            />
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default Filter;
