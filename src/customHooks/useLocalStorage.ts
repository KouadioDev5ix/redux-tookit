import React from "react";

const useLocalStorage = <T>(
  key: string,
  ininiallEntry: T,
): [T, (value: T) => void] => {
  const [value, setValue] = React.useState(() => {
    return JSON.parse(
      localStorage.getItem(key)! || JSON.stringify(ininiallEntry),
    );
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };




