import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  chargerTâcheLocalStorage,
  recupererTâcheLocalStorage,
} from "../../functions/localStorage";
import type { iTodo } from "../../types/todosTypes";

type TodosState = {
  liste: iTodo[];
};

const initialState: TodosState = {
  liste: recupererTâcheLocalStorage(),
};

const tachesSlices = createSlice({
  name: "T",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param action
     */
    ajouterTâche: (state, action: PayloadAction<string>) => {
      const nouvelleTache: iTodo = {
        id: Date.now(),
        description: action.payload,
        completed: false,
        createAt: new Date().toISOString(),
      };
      state.liste.push(nouvelleTache);
      chargerTâcheLocalStorage(state.liste);
    },

    /**
     *
     * @param state
     * @param action
     */
    supprimerTâche: (state, action: PayloadAction<number>) => {
      state.liste = state.liste.filter((item) => item.id !== action.payload);
      chargerTâcheLocalStorage(state.liste);
    },

    /**
     *
     * @param state
     * @param action
     */

    modifierTâche: (
      state,
      action: PayloadAction<{ id: number; description: string }>,
    ) => {
      const trouverTâches = state.liste.find(
        (tache) => tache.id === action.payload.id,
      );

      if (trouverTâches) {
        trouverTâches.description = action.payload.description;
      }
      chargerTâcheLocalStorage(state.liste);
    },
  },
});

export const { ajouterTâche, supprimerTâche, modifierTâche } =
  tachesSlices.actions;

export default tachesSlices.reducer;
