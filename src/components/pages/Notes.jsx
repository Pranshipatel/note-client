import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import CreateNote from '../noteComponents/CreateNote';
import NoteCard from '../noteComponents/NoteCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNote } from '../../store/action/noteAction';


const Notes = () => {
  const [isNoteCreated, setisNoteCreated] = useState(false)
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes || [])
 console.log("note",notes)
  useEffect(() => {
    dispatch(fetchNote())
  }, [dispatch])

  const HandleNoteCreation = () => {
    setisNoteCreated(true)
  }

  const HandleNoteClose = () => {
    setisNoteCreated(false)
  }
  return (
    <div className='w-full h-screen min-h-[100%]  flex flex-col '>
      <div className="nav w-full h-[9%]  p-3 flex items-center justify-between flex-row">
        <div className="search w-[85%] rounded-md overflow-hidden border-[0.1rem] bg-[#FFFFFF] p-2 px-4 flex items-center border-zinc-400">
          <FiSearch />
          <input
            type="text"
            placeholder='Search'
            minLength={3}
            maxLength={50}
            className='bg-[#FFFFFF] w-full p-1 outline-none'
          />
        </div>
        <button className='bg-black text-white p-2.5 rounded-md px-5 flex items-center gap-1.5 text-lg'>
          <IoFilter />
          <h1>Filter</h1>
        </button>
        <button onClick={HandleNoteCreation}
          className='bg-black text-white p-2.5 rounded-md px-5 flex items-center gap-1 text-lg'>
          <IoAddOutline />
          <h1>New Note</h1>
        </button>
      </div>
      {isNoteCreated &&
        (<div className="absolute top-0 left-0  note w-full h-[100%] bg-[#00000085]  flex items-center justify-center">
          <CreateNote onClose={HandleNoteClose} />
        </div>)}

        <div className="div w-full h-[90%] flex p-3 gap-2">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            
            <NoteCard key={index} title={note.title} content={note.content} />
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>

    </div>
  )
}

export default Notes
