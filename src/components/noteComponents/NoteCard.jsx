import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../store/action/noteAction';
import { useNavigate } from 'react-router-dom';

const NoteCard = ({noteId,title, content}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteNote = ()=>{
    dispatch(deleteNote(noteId))
  }
  
  const viewHandler = ()=>{
    navigate(`/view/${noteId}`)
  }
  
  return (
    <div className="card bg-red-400 w-[15rem] h-[15rem] flex flex-col p-2 justify-between rounded-md shadow-md">
      <div className="card-body flex-grow">
        <h5 className="card-title text-lg font-semibold">{title}</h5>
        <p className="card-text text-sm">{content}</p>
      </div>
      <div className="card-footer flex justify-between p-2">
        <button className="btn btn-primary btn-sm">View</button>
        <button className="btn btn-warning btn-sm">Edit</button>
        <button onClick={handleDeleteNote} className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
      
  )
}

export default NoteCard
 