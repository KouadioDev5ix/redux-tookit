import { twMerge } from "tailwind-merge";

type CardComponentProps<T> = {
  label: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => number | string;
  boxeContainerClassName?: string;
  listItemClassName?: string;
};

/**
 *
 * @param param0
 * @returns
 */

export default function CardComponent<T>({
  items,
  label,
  renderItem,
  getKey,
  boxeContainerClassName,
  listItemClassName,
}: CardComponentProps<T>) {
  return (
    <section
      className={twMerge(
        "border border-gray-200 shadow-sm rounded-lg ",
        boxeContainerClassName,
      )}
    >
      <div>{label && <h1>{label}</h1>}</div>
      <ul>
        {items.map((item, index) => (
          <li
            key={getKey ? getKey(item) : index}
            className={twMerge(
              "text-gray-950 text-sm font-medium bg-gray-100 rounded-md",
              listItemClassName,
            )}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </section>
  );
}
