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
    removeNote:(state,action)=>{
      return state.filter(note => note._id !== action.payload)
    }
  },
});

export const { setnote, addNote , removeNote} = noteSlice.actions;
export default noteSlice.reducer;
