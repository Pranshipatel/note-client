import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoteCard = ({ noteId, title, content }) => {
  const navigate = useNavigate();

  
  const viewHandler = () => {
    navigate(`/view/${noteId}`);
  };

  return (
    <div className="card bg-teal-800 text-white w-[15rem] h-[15rem] flex flex-col p-2 justify-between rounded-md shadow-md">
      <div className="card-body flex-grow">
        <h5 className="card-title text-lg font-semibold">{title}</h5>
        <p className="card-text text-sm">{content}</p>
      </div>
      <div className="card-footer flex justify-end p-2 ">
        <button onClick={viewHandler} className="btn btn-primary btn-sm">View</button>
      </div>
    </div>
  );
};

export default NoteCard;
