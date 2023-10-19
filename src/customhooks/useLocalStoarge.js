import { useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
  const value = JSON.parse(localStorage.getItem(key));
  if (value) return value;
  return initialValue;
};
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
export default useLocalStorage;
