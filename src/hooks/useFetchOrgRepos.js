import { useEffect, useState } from "react";
import api from "utils/api";
import { ApiEndpoints } from "utils/endpoints";

export function useFetchOrgRepos(org = "") {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFetchOrgRepos = async (org) => {
    setLoading(true);
    setData(null);
    setIsError(false);
    try {
      const response = await api.get(ApiEndpoints.GET_ORG_REPOS(org));
      setData(response);
    } catch (error) {
      api.handleApiError(error);
      setIsError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (org !== "") handleFetchOrgRepos(org);
  }, [org]);

  return {
    isError,
    data,
    isLoading,
    handleFetchOrgRepos,
  };
}
