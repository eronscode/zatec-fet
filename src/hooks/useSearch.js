import { useEffect, useState } from "react";
import { debounce } from "lodash";


export default function useSearch(fetchApiFn) {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value !== "") handleSearch();
  }, [value]);

  const handleSearch = debounce(() => {
    fetchApiFn(value, setIsLoading, setData);
  }, 1000);

  return {
    value,
    setValue,
    data,
    setData,
    isLoading,
  };
}
