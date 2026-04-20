import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type TStudent = {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  birthDate: string;
  className: string;
  matricule: string;
  email: string;
  phone: string;
  address: string;
  parentName: string;
  parentPhone: string;
  status: "active" | "inactive";
  photo?: string;
};

type studentState = {
  data: TStudent[];
};

const initialState: studentState = {
  data: [],
};

const studentSlices = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    setStudent: (state, action: PayloadAction<TStudent>) => {
      state.data.push(action.payload);
    },
  },
});


export default studentSlices.reducer;
