import type { RootState } from "@/store/generalStore";
import type { TConfiguration } from "@/types/configuration";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IConfiguration {
  listesConfiguration: TConfiguration[];
}

const initialState: IConfiguration = {
  listesConfiguration: [],
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: initialState,
  reducers: {
    setListeConfiguration: (state, action: PayloadAction<TConfiguration[]>) => {
      state.listesConfiguration = action.payload;
    },
  },
});

export const { setListeConfiguration } = configurationSlice.actions;

/**
 *
 * @param state -
 * @returns
 */

export const selectListDesConfiguration = (state: RootState) =>
  state?.configuration?.listesConfiguration || [];

export default configurationSlice.reducer;
