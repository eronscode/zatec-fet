import isEmpty from "lodash/isEmpty";

export const handleFilterOptions = (
  array = [],
  name = "",
  max = 0,
  min = 0
) => {
  let newArray = [...array];

  if (isEmpty(name) && isEmpty(max) && isEmpty(min)) {
    return newArray;
  }

  if (!isEmpty(name)) {
    newArray = newArray.filter((item) => item.repo_name.includes(name));
  }

  return newArray;
};
