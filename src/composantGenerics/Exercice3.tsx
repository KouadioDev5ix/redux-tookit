//**Enonnce */

import { twMerge } from "tailwind-merge";

/**
 * 
Select générique
Moyen generics keyof
Crée un composant Select<T> qui reçoit une liste d'options options: T[], deux clés valueKey: keyof T et labelKey: keyof T, et un callback onChange: (value: T) => void. Le composant affiche un <select> HTML dont les options sont construites depuis le tableau.
valueKey: keyof T; labelKey: keyof T
 */

interface CustumSelectProps<T> {
  SelectBoxclassName?: string;
  optionsClassName?: string;
  options: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  onChange: (item: T) => void;
  getKey: (item: T) => number | string;
  placeholder?: string;
}

export default function CustumSelect<T>({
  SelectBoxclassName,
  optionsClassName,
  options,
  getKey,
  labelKey,
  valueKey,
  placeholder,
  onChange,
}: CustumSelectProps<T>) {
  /**
   *
   * @param e
   */

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    const selectedOptions = options.find(
      (option) => String(option[valueKey]) === selectedValue,
    );

    if (selectedOptions) {
      onChange(selectedOptions);
    }
  };

  return (
    <section>
      <select
        name=""
        id=""
        onChange={handleChange}
        defaultValue={""}
        className={twMerge("w-full rounded-md", SelectBoxclassName)}
      >
        <option value="">{placeholder}</option>

        {options.map((option, index) => (
          <option
            value={String(option[valueKey])}
            key={getKey ? getKey(option) : index}
            className={twMerge(
              "px-4 py-2 bg-gray-100 rounded-md",
              optionsClassName,
            )}
          >
            {String(option[labelKey])}
          </option>
        ))}
      </select>
    </section>
  );
}
