import CustumSelect from "../Exercice3";

interface Pays {
  code: string;
  label: string;
}

const pays: Pays[] = [
  {
    code: "CIV",
    label: "Cote d'Ivoire",
  },
];

export default function RenderExercice3() {
  return (
    <div>
      <CustumSelect
        SelectBoxclassName=""
        optionsClassName=""
        options={pays}
        getKey={(pays) => pays.code}
        labelKey="label"
        valueKey="code"
        placeholder="Selectionner un pays"
        onChange={(pays) => console.log(pays)}
      />
    </div>
  );
}
