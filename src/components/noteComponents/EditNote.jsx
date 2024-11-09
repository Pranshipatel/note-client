import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchNoteById, updateNote } from '../../store/action/noteAction';

const Edit = () => {
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector((state) => state.notes.find((note) => note._id === noteId));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!note) {
      dispatch(fetchNoteById(noteId));
    } else {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note, noteId, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateNote(noteId, { title, content }));
    navigate(`/view/${noteId}`);
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form onSubmit={handleUpdate} className="w-full max-w-lg p-8 bg-white shadow-xl rounded-xl border border-gray-300">
        <h2 className="text-2xl font-semibold mb-6">Edit Note</h2>
        <label className="block mb-4">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Content</span>
          <textarea
            className="form-textarea mt-1 block w-full"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;
