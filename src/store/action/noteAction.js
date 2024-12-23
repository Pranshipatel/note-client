import axios from "../../utils/axios";
import { addNote, removeNote, setnote } from "../reducers/noteSlice";

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

export const deleteNote = (noteId)=> async(dispatch)=>{
  try {
    await axios.delete(`/note/delete/${noteId}`)
    dispatch(removeNote(noteId))
   
  } catch (error) {
    console.log(error)
  }
}

export const fetchNoteById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/notes/${id}`);
      const data = await response.json();
      dispatch({ type: 'FETCH_NOTE_BY_ID', payload: data });
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };
};


