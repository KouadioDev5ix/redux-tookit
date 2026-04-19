import type { iCounter } from "../types/counterTypes";
import type { iTodo } from "../types/todosTypes";

/**
 *
 * @returns
 */
export const chargerEtatInitial = (): iCounter => {
  const counterEnregistre = localStorage.getItem("compteur");
  return {
    valeur: counterEnregistre ? Number(counterEnregistre) : 0,
  };
};
/**
 *
 * @param counter
 */

export const obtenirEtatInitial = (counter: string) => {
  localStorage.setItem("compteur", counter);
};

//:::::::::::::::::::::::::::::Todos functions :::::::::::::::::::::::::::

/**
 *
 * @returns
 */
export const recupererTâcheLocalStorage = (): iTodo[] => {
  const donnee = localStorage.getItem("tâches");
  return donnee ? JSON.parse(donnee) : [];
};

/**
 *
 * @param T
 */
export const chargerTâcheLocalStorage = (T: iTodo[]) => {
  localStorage.setItem("tâches", JSON.stringify(T));
};
