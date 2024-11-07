import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    setnote: (state, action) => {
      return action.payload; // Make sure this replaces state with fetched notes
    },
    addNote: (state, action) => {
      state.push(action.payload); // Adding a single note
    },
  },
});

export const { setnote, addNote } = noteSlice.actions;
export default noteSlice.reducer;
