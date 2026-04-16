import React from "react";

const GenericComponent = () => {
  return (
    <>
      <List
        data={[{ id: 1, name: "Koffi", isProgrammer: true }]}
        getItem={(item) =>
          item.isProgrammer
            ? "C'est un developpeur"
            : "Il n'est pas developpeur"
        }
        getKey={(item) => item.id}
      />
    </>
  );
};

type TListItemsProps<T> = {
  data: T[];
  getKey: (item: T) => React.Key;
  getItem: (item: T) => React.ReactNode;
};

function List<U>({ data, getItem, getKey }: TListItemsProps<U>) {
  return data.map((item) => <div key={getKey(item)}>{getItem(item)}</div>);
}

export default GenericComponent;
