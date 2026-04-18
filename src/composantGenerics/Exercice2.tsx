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


export default function List<T>({emptyMessage , getKey }:ListProps<T>){

}
