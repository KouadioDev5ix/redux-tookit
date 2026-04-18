import React from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const [storeValue, setStoreValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("Erreur lecture localStorage :", err);
      return initialValue;
    }
  });

  const setvalue = (v: T) => {
    try {
      setStoreValue(v);
      localStorage.setItem(key, JSON.stringify(v));
    } catch (error) {
      console.error("Erreur écriture localStorage : ", error);
    }
  };

  React.useEffect(() => {
    try {
      const item = localStorage.getItem(key);

      setStoreValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      setStoreValue(initialValue);
      console.error(error);
    }
  }, [key, initialValue]);

  return [storeValue, setvalue];
}

export { useLocalStorage };
