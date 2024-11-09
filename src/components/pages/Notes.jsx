import React, { useEffect, useState } from 'react'
import CreateNote from '../noteComponents/CreateNote';
import NoteCard from '../noteComponents/NoteCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNote } from '../../store/action/noteAction';
import Navbar from '../noteComponents/Navbar';


const Notes = () => {
  const [isNoteCreated, setisNoteCreated] = useState(false)
  const [searchQuery,setsearchQuery] = useState("")
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes || [])
  

  useEffect(() => {
    dispatch(fetchNote())
  }, [dispatch])

  

  const HandleNoteClose = () => {
    setisNoteCreated(false)
  }

  const filterNote = notes.filter((note)=>{
    return note.title.toLowerCase().includes(searchQuery.toLowerCase())
  })
  return (
    <div className='w-full h-screen min-h-[100%]  flex flex-col '>
      <Navbar setisNoteCreated={setisNoteCreated} setsearchquery={setsearchQuery}/>
      {isNoteCreated &&
        (<div className="absolute top-0 left-0  note w-full h-[100%] bg-[#00000085]  flex items-center justify-center">
          <CreateNote onClose={HandleNoteClose} />
        </div>)}

        <div className="div w-full h-[90%] flex p-3 gap-2">
        {filterNote.length > 0 ? (
          filterNote.map((note,index) => (
            
            <NoteCard key={index} title={note.title} content={note.content} noteId={note._id} />
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>

    </div>
  )
}

export default Notes
