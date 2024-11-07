import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNote } from '../../store/action/noteAction';


const CreateNote = ({onClose}) => {
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')

  const dispatch = useDispatch();

  const HandleNoteCreated = (e)=>{
    e.preventDefault()
    const data = {title, content};
    console.log(data)
    dispatch(createNote(data))
    onClose()
  }
  return (
    <div className='border-zinc-700 border-[0.1rem] w-[35rem] h-[30rem] rounded-md p-2 gap-2 overflow-hidden bg-white '>
        <div className="div w-full text-2xl font-bold flex items-center justify-between p-3">
            <h1>Create your note</h1>
            <RxCross2 onClick={onClose} className='cursor-pointer' />
        </div>
      <div className="title flex flex-col gap-2 p-3">

      <label className='text-md  font-semibold' htmlFor="">Title</label>

      <input 
      type="text"
      placeholder='Title'
      value={title}
      onChange={(e)=>settitle(e.target.value)}
      className='p-3  rounded-md bg-zinc-100 text-gray-800 outline-none '
       />


      </div>
      <div className="div flex flex-col gap-2 p-3">

      <label className='text-md  font-semibold' htmlFor="">Content</label>

      <textarea
       value={content}
       onChange={(e)=>setcontent(e.target.value)}
       className='bg-zinc-100 min-h-[10rem] rounded-md outline-none p-3' 
       placeholder='Content'
      ></textarea>

      </div>
      <div className="div flex w-full items-center justify-center p-3">
      <button
      onClick={HandleNoteCreated} 
      className='bg-black text-white  py-3 rounded-md w-full'>
        Save Changes
      </button>
      </div>
    </div>
  )
}

export default CreateNote
