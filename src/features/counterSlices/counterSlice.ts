import { createSlice } from "@reduxjs/toolkit";
import {
  chargerEtatInitial,
  obtenirEtatInitial,
} from "../../functions/localStorage";
import type { iCounter } from "../../types/counterTypes";

const initialState: iCounter = chargerEtatInitial();

const compteurSlice = createSlice({
  name: "compteur",
  initialState,
  reducers: {
    incrementerCompteur(state) {
      state.valeur += 1;
      obtenirEtatInitial(state.valeur.toString());
    },
    decrementerCoumpteur(state) {
      state.valeur -= 1;
      obtenirEtatInitial(state.valeur.toString());
    },
    reinitialiserCompteur(state) {
      state.valeur = 0;
      obtenirEtatInitial(state.valeur.toString());
    },
  },
});

export const {
  incrementerCompteur,
  decrementerCoumpteur,
  reinitialiserCompteur,
} = compteurSlice.actions;

export default compteurSlice.reducer;
