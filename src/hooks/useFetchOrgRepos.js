import { useCallback, useEffect, useState } from "react";
import api from "utils/api";
import { ApiEndpoints } from "utils/endpoints";

export function useFetchOrgRepos(org = "") {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async (org) => {
      setLoading(true);
      setData(null);
      try {
        const response = await api.get(ApiEndpoints.GET_ORG_REPOS(org));
        console.log({ response });
        setData(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    if (org !== "") handleFetch(org);
  }, [org]);

  return {
    data,
    isLoading,
  };
}
