import { useEffect, useRef, useState } from "react";

export default function useDropdownVisible(initialState) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(initialState);
  const ref = useRef(null);

  function handleClickOutside(event) {
    if (ref && ref?.current && !ref?.current?.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return {
    ref,
    isDropdownVisible,
    setIsDropdownVisible,
  };
}
