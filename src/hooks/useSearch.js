import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { fetchOrganizations } from "./useFetchOrganizations";

export default function useSearch() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value !== "") handleSearch();
  }, [value]);

  const handleSearch = debounce(() => {
    fetchOrganizations(value, setIsLoading, setData);
  }, 1000);

  return {
    value,
    setValue,
    data,
    isLoading,
  };
}
