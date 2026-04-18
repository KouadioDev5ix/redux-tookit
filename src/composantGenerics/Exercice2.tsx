//**Enonce  */

/**
 * 
Liste générique
Facile generics array
Crée un composant List<T> qui reçoit items: T[] et renderItem: (item: T) => React.ReactNode. Il parcourt les items et délègue le rendu de chacun à renderItem. C'est le même principe que le render du tableau — mais pour une liste.
 */

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  emptyMessage: string;
  getKey: (item: T) => string | number;
}

export default function List<T>({
  emptyMessage,
  getKey,
  items,
  renderItem,
}: ListProps<T>) {
  if (items.length === 0) return <p>{emptyMessage} </p>;
  return (
    <section>
      <ul>
        {items.map((item: T, index) => (
          <li key={getKey ? getKey(item) : index}>{renderItem(item)}</li>
        ))}
      </ul>
    </section>
  );
}
