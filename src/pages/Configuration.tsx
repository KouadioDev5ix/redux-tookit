import { CustomTable, type Column } from "@/components";
import { CustomSelect } from "@/components/CustumSelect";
import { useAppSelector } from "@/hooks/hooks";
import { selectListDesConfiguration } from "@/store/slices/Configuration/configurationSlice";
import { useConfiguration } from "@/swr/useConfigurationListe";
import React from "react";

interface User {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
}

const columns: Column<User>[] = [
  { key: "item1", header: "item 1" },
  { key: "item2", header: "item 2" },
  { key: "item3", header: "item 3" },
  { key: "item4", header: "item 4" },
  { key: "item5", header: "item 5" },
  { key: "item6", header: "item 6" },
  { key: "item7", header: "item 7" },
];

const Configuration = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useConfiguration();

  const ouvrirModal = () => {
    (document.getElementById("my_modal_3") as HTMLDialogElement).showModal();
  };

  // const data = useAppSelector(selectListDesConfiguration);

  const data: User[] = [
    {
      item1: "td item_1",
      item2: "td item_2",
      item3: "td item_3",
      item4: "td item_4",
      item5: "td item_5",
      item6: "td item_6",
      item7: "td item_7",
    },
    {
      item1: "td item_1",
      item2: "td item_2",
      item3: "td item_3",
      item4: "td item_4",
      item5: "td item_5",
      item6: "td item_6",
      item7: "td item_7",
    },
    {
      item1: "td item_1",
      item2: "td item_2",
      item3: "td item_3",
      item4: "td item_4",
      item5: "td item_5",
      item6: "td item_6",
      item7: "td item_7",
    },
    {
      item1: "td item_1",
      item2: "td item_2",
      item3: "td item_3",
      item4: "td item_4",
      item5: "td item_5",
      item6: "td item_6",
      item7: "td item_7",
    },
    {
      item1: "td item_1",
      item2: "td item_2",
      item3: "td item_3",
      item4: "td item_4",
      item5: "td item_5",
      item6: "td item_6",
      item7: "td item_7",
    },
    {
      item1: "td item_1",
      item2: "td item_2",
      item3: "td item_3",
      item4: "td item_4",
      item5: "td item_5",
      item6: "td item_6",
      item7: "td item_7",
    },
    {
      item1: "td item_1",
      item2: "td item_2",
      item3: "td item_3",
      item4: "td item_4",
      item5: "td item_5",
      item6: "td item_6",
      item7: "td item_7",
    },
  ];

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Accessories", value: "accessories" },
    { label: "Clothing", value: "clothing" },
    { label: "Electronics", value: "electronics" },
    { label: "Home & Kitchen", value: "home" },
    { label: "Sports & Outdoors", value: "sports" },
  ];

  const [category, setCategory] = React.useState("all");
  return (
    <div>
      <div>Configuration</div>

      <div onClick={ouvrirModal}>
        <button className="text-xs font-medium  bg-blue-900 text-white w-44 h-10">
          Ajouter une configuration
        </button>
      </div>
      <div>Liste des donnees</div>

      <div>
        {/* {data?.map((item) => (
          <div>{item?.nomArticle}</div>
        ))} */}
      </div>
      <dialog
        id="my_modal_3"
        className="modal flex justify-center items-start pt-5 mx-auto"
      >
        <div className="modal-box ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="h-72 ">
            <h1 className="text-xl font-extrabold ">Configuration article</h1>
            {/* from */}
            <div className="flex items-start gap-3">
              <div>
                <label className="label ">Nom produit</label>
                <input className="input" />
              </div>

              <div>
                <label className="label ">Categories</label>
                <input className="input" />
              </div>
            </div>

            <div>
              <label className="label ">identifiants</label>
              <input className="input" />
            </div>

            <div>
              <label className="label ">Fournisseur</label>
              <input className="input" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <button className="text-white bg-blue-900 h-10 w-full">
              Enregistrer
            </button>
            <button className="text-white bg-gray-600 h-10 w-full">
              Annuler
            </button>
          </div>
        </div>
      </dialog>
      <CustomSelect
        options={categories}
        value={category}
        onChange={(val) => setCategory(val)}
      />

      <CustomTable
        data={data}
        columns={columns}
        onActionClick={(row) => console.log("action row", row)}
      />
    </div>
  );
};

export default Configuration;
