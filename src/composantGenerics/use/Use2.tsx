import List from "../Exercice2";

interface Product {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
}

const produits: Product[] = [
  {
    id: 1,
    name: "Xiaomi",
    price: 95000,
    quantity: 1,
  },
];

export default function RenderExercice2() {
  return (
    <div>
      <List
        renderItem={(item) => (
          <ul>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.quantity}</li>
          </ul>
        )}
        items={produits}
        getKey={(item) => item.id}
        emptyMessage={"Aucune donnee disponible..."}
      />
    </div>
  );
}
