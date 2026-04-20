interface BoxWrapperProps<T> {
  value: T;
  label: string;
}

export default function BoxWrapper<T>({ label, value }: BoxWrapperProps<T>) {
  /**
   * @param value
   * @returns
   */
  const renderValue = (value: any) => {
    if (typeof value === "object" && value !== null) {
      return <pre>{JSON.stringify(value, null, 2)}</pre>;
    }

    return value;
  };
  return (
    <div className="border border-gray-100 rounded-xl ">
      <div>
        {label && <h1 className="font-bold text-gray-800 text-lg">{label}</h1>}
      </div>

      <p className="font-medium">{renderValue(value)}</p>
    </div>
  );
}
