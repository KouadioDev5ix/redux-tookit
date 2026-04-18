//**Enonnce */

import { selectListDesConfiguration } from "@/store/slices/Configuration/configurationSlice";

/**
 * 
Select générique
Moyen generics keyof
Crée un composant Select<T> qui reçoit une liste d'options options: T[], deux clés valueKey: keyof T et labelKey: keyof T, et un callback onChange: (value: T) => void. Le composant affiche un <select> HTML dont les options sont construites depuis le tableau.
valueKey: keyof T; labelKey: keyof T
 */

interface CustumSelectProps<T> {
  options: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  onChange: (item: T) => void;
  getKey: (item: T) => number | string;
  placeholder?: string;
}

export default function CustumSelect<T>({
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
      <select name="" id="" onChange={handleChange} defaultValue={""}>
        <option value="">{placeholder}</option>

        {options.map((option, index) => (
          <option
            value={String(option[valueKey])}
            key={getKey ? getKey(option) : index}
          >
            {String(option[labelKey])}
          </option>
        ))}
      </select>
    </section>
  );
}
