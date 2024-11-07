import { createSlice } from '@reduxjs/toolkit'

const initialState={
    allNote:{}
}

export const NotesSlice = createSlice({
    name:"allNote",
    initialState,
    reducers:{
        setAllNote :(state,action)=>{
            state.allNote= action.payload
        }
    }
})

export const {setAllNote} = NoteSlice.actions

export default NoteSlice.reducer