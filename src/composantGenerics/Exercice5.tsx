//**Enonce */

/**
 * 
Formulaire générique
Difficile generics keyof Record
Crée un composant Form<T> qui reçoit fields: { key: keyof T; label: string; type: "text" | "number" }[], une valeur initiale initialValues: T, et un callback onSubmit: (values: T) => void. Il génère automatiquement les inputs depuis la liste de champs et retourne les valeurs typées.
 */

interface GenericFormsProps<T> {
  fields: { key: keyof T; label: string; type: "text" | "number" }[];
  initialValues: T;
  onSubmit: (values: T) => void;
  labelClassName?: string;
  inputClassName?: string;
  getKey: (item: T) => number | string;
}

export default function GenericForms<T>({
  inputClassName,
  labelClassName,
  fields,
  initialValues,
  onSubmit,
}: GenericFormsProps<T>) {
  /**
   *
   * @param e
   */
  const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const s = e.target.value;

    console.log(s);
  };
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div>
            <label htmlFor="">{field.label}</label>
            <input type={field.type} />
          </div>
        ))}
      </form>
    </section>
  );
}
