import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  ajouterTâche,
  supprimerTâche,
  modifierTâche,
} from "../redux/todosSlices/todosSlices";
import { PenLine, Trash } from "lucide-react";

type User = {
  id: number;
  nom: string;
  age: number;
};
export default function TodoApplication() {
  const [input, setInput] = useState<string>("");
  const [modeEdition, setModeEdition] = useState<boolean>(false);
  const [tacheId, setTacheId] = useState<number>(0);
  const distributeur = useAppDispatch();
  const tableauTaches = useAppSelector((state) => state.liste);
  // const [todos, setTodos] = useState<Map<number, Todo>>(new Map());

  // Definir un user
  const users = new Map<number, User>();
  // Ajouter des users
  users.set(1, {
    id: 1,
    nom: "Kouadio",
    age: 29,
  });

  users.set(2, { id: 2, nom: "Konan", age: 23 });

  // Afficher tous les users

  const informationsUtilisateurs = {
    id: 1,
    nom: "Konan",
    prenoms: "Konan Benjamin",
  };

  console.log("info user===>", informationsUtilisateurs["prenoms"]);

  /**
   * Bouclage avec for of
   */

  useEffect(() => {
    console.log("Les utilisateurs", users);
  }, []);

  const activerModeEdition = (texte: string) => {
    setInput(texte);
    setModeEdition(true);
  };

  const handleModifierTâche = (id: number) => {
    distributeur(modifierTâche({ id, description: input }));
    setModeEdition(false);
    setInput("");
  };

  /**
   *
   * @returns
   */
  const handleAjouterTaches = () => {
    if (input.trim() === "") return;
    distributeur(ajouterTâche(input));
    setModeEdition(false);
    setInput("");
  };

  /**
   *
   *
   * @param id
   */
  const handleSupprimerTache = (id: number) => {
    distributeur(supprimerTâche(id));
  };

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="flex flex-col gap-4 w-10/12 max-w-md mx-auto">
        <div>
          <h1
            className="text-gray-900 font-medium
           text-xl"
          >
            Todo Liste avec - RTK
          </h1>
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            className="w-full h-8 border border-orange-600 rounded-lg focus:outline-none px-2 text-sm "
            placeholder="Ajouter une tâche..."
          />
          <button
            className="w-24 h-8 bg-blue-900 text-white text-xs rounded-lg"
            onClick={() => {
              if (modeEdition) {
                handleModifierTâche(tacheId);
              } else {
                handleAjouterTaches();
              }
            }}
          >
            {modeEdition ? "Modifier" : "Ajouter"}
          </button>
        </div>

        <div>
          {tableauTaches.liste.length === 0 ? (
            <p className="text-center text-sm font-medium">
              Aucune tache disponibles...
            </p>
          ) : null}

          {[...tableauTaches.liste].reverse().map((item) => (
            <p
              key={item.id}
              className="border rounded-md my-4 px-3 bg-gray-100"
            >
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-xs text-gray-600">
                  <input type="checkbox" className="cursor-pointer pt-2" />
                  {item.description}
                </span>

                <button className="flex items-center gap-2">
                  <PenLine
                    className="text-blue-600 w-4"
                    onClick={() => {
                      setTacheId(item.id);
                      activerModeEdition(item.description);
                    }}
                  />
                  <Trash
                    className="text-orange-600 w-4"
                    onClick={() => handleSupprimerTache(item.id)}
                  />
                </button>
              </li>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
