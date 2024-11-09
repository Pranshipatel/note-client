import React, { useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, fetchNoteById } from '../../store/action/noteAction';

const View = () => {
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useSelector((state) => state.notes.find((note) => note._id === noteId));

  const handleDeleteNote = () => {
    dispatch(deleteNote(noteId));
  };

  const handleEditNote = () => {
    navigate(`/edit/${noteId}`);
  };

  useEffect(() => {
    if (!note) {
      dispatch(fetchNoteById(noteId));
    }
  }, [noteId, note, dispatch]);

  if (!note) {
    return <Navigate to='/note' />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="card w-full max-w-lg p-8 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl border border-gray-300">
        <h2 className="text-3xl font-semibold text-white mb-6">{note.title}</h2>
        <p className="text-lg text-gray-100 mb-8">{note.content}</p>

        <div className="flex gap-6 mt-6 justify-center">
          <button onClick={handleEditNote} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Edit
          </button>
          <button onClick={handleDeleteNote} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
