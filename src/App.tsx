import {
  decrementerCoumpteur,
  incrementerCompteur,
  reinitialiserCompteur,
} from "./features/counterSlices/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

function App() {
  const distributeur = useAppDispatch();
  const valeur = useAppSelector((state) => state.counter.valeur);

  return (
    <div className="flex items-center justify-center ">
      <div className="">
        <h1 className="text-xl text-center font-bold text-gray-800 ">
          Counter intelligent
        </h1>
        <h1
          className={`text-center  font-bold text-5xl pt-7 ${valeur > 0 ? "text-blue-800 " : valeur === 0 ? "text-black" : "text-red-600"}`}
        >
          {valeur}
        </h1>
        <div className="">
          <button
            className="bg-blue-950 text-white text-sm font-normal w-44 h-10 rounded-md"
            onClick={() => distributeur(incrementerCompteur())}
          >
            Incrémenter
          </button>
          <button
            className="mx-4  bg-gray-600 text-black text-sm font-normal w-44 h-10 rounded-md  "
            onClick={() => distributeur(reinitialiserCompteur())}
          >
            Réinitialiser
          </button>
          <button
            className=" bg-red-600 text-white text-sm font-normal w-44 h-10 rounded-md  "
            onClick={() => distributeur(decrementerCoumpteur())}
          >
            Decrémenter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
