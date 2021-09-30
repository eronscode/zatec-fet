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

  if (max !== null && min !== null && min < max) {
    newArray = newArray.filter(function (o) {
      return o.repo_issue <= max && o.repo_issue >= min;
    });
  }

  return newArray;
};


export const handleFilterStorage = (params) => {
  const {name, min, max, organization, organizationFilter,  setOrganizationFilter} = params
  if (name !== "" || min !== "" || max !== "") {
    //check if organization is in filter state
    const id = organizationFilter.find(
      (item) => item.organization === organization?.login
    );

    //if filters for organization doesn't already exists...
    if (!id) {
      const payload = {
        organization: organization?.login,
        filters: {
          name,
          min,
          max,
        },
      };
      const copyOrg = [...organizationFilter];
      copyOrg.push(payload);
      setOrganizationFilter(copyOrg);
    }

    //if filters for organization already exists...
    if (id) {
      const copyOrg = organizationFilter.map((item) =>
        item.organization === organization?.login
          ? {
              ...item,
              filters: {
                name,
                min,
                max,
              },
            }
          : item
      );
      setOrganizationFilter(copyOrg);
    }
  }
}

