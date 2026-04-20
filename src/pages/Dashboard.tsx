import { CustomInputDate } from "@/components/CustomDate";
import React from "react";

export default function Dashboard() {
  const updateProduct = React.useMemo(() => {
    const productList = [
      {
        id: 1,
        quantite: 5,
        prix: 25000,
        nom: "Patate",
      },
    ];

    return productList.map((p) => (p.id === 1 ? { ...p, stock: 1 } : p));
  }, []);

  const data = document.querySelector("a");

  const addOrConcat = (
    a: number,
    b: number,
    c: "add" | "concat",
  ): string | number => {
    if (c === "add") return a + b;
    return "" + a + b;
  };

  const myVal: string = addOrConcat(2, 5, "add") as string;
  return (
    <div className="flex items-center justify-center mt-7">
      <div className="w-11/12 max-w-3xl mx-auto h-64">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Formulaire d'enregistrement</h1>
        </div>

        <form action="">
          <div>
            <label htmlFor="nom" className="label">
              Nom
            </label>
            <input className="input" id="nom" placeholder="Exemple: Koffi" />
          </div>

          <div>
            <label htmlFor="prenoms" className="label">
              Prenoms
            </label>
            <input
              className="input"
              id="prenoms"
              placeholder="Exemple: Koffi Mathieu"
            />
          </div>

          <div>
            <CustomInputDate label={"Date"} />
          </div>
        </form>
      </div>
    </div>
  );
}
