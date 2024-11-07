import axios from "../../utils/axios";
import { addNote, setnote } from "../reducers/noteSlice";

export const createNote = (noteData) => async (dispatch) => {
  try {
    const { data } = await axios.post("/note/create",noteData);
    dispatch(addNote(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchNote = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/note");
    dispatch(setnote(data)); 
  } catch (error) {
    console.log(error);
  }
};
