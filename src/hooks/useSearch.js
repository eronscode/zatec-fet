import { useState } from "react";
import { debounce } from "lodash";

export default function useSearch(fetchApiFn) {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = debounce((newValue) => {
    if (newValue !== "") fetchApiFn(newValue, setIsLoading, setData);
  }, 1000);

  return {
    value,
    setValue,
    data,
    setData,
    isLoading,
    handleSearch,
  };
}
