import isEmpty from "lodash/isEmpty";

export const handleFilterOptions = (
  array = [],
  name = "",
  max = null,
  min = null
) => {
  let newArray = [...array];

  if (isEmpty(name) && max === "" && min === "") {
    return newArray;
  }

  if (!isEmpty(name)) {
    newArray = newArray.filter((item) => item.repo_name.includes(name));
  }

  if (max !== null && min !== null && (min < max)) {
    console.log({ min, max });
    newArray = newArray.filter(function (o) {
      return o.repo_issue <= max && o.repo_issue >= min;
    });
  }

  return newArray;
};
