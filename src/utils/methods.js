import isEmpty from "lodash/isEmpty";

export const handleFilterOptions = (
  array = [],
  name = "",
  max = null,
  min = null
) => {
  let newArray = [...array];
  let isMinLessThanMax = true;

  if (isEmpty(name) && max === "" && min === "") {
    return newArray;
  }

  
  if (max !== "" && min !== "" && min < max) {
    newArray = newArray.filter(function (o) {
      return o.repo_issue <= max && o.repo_issue >= min;
    });
  }
  
  if (max !== "" && min !== "" && min > max) {
    isMinLessThanMax = false;
  }
  
  if (!isEmpty(name) && isMinLessThanMax) {
    newArray = newArray.filter((item) => item.repo_name.includes(name));
  }

  
  return newArray;
};

export const handleFilterStorage = (params) => {
  const {
    name,
    min,
    max,
    organization,
    organizationFilter,
    setOrganizationFilter,
  } = params;
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
};

export const handleApiErrorCodes = (errorCode) => {
  switch (errorCode) {
    case 304:
      return {
        message: "Not Modified",
      };
    case 404:
      return {
        message: "Requested operation not found",
      };
    case 403:
      return {
        message:
          "API rate limit exceeded. Try waiting for sometime and refresh page",
      };
    case 422:
      return {
        message: "Something went wrong. Unable to process request",
      };
    case 503:
      return {
        message:
          "Something went wrong. Please check your internet connection or contact our support.",
      };
    default:
      return {
        message:
          "Something went wrong. Please check your internet connection or contact our support.",
      };
  }
};
