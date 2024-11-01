import React from 'react'

const NoteCard = () => {
  return (
    <div className="card bg-red-400 w-[15rem] h-[15rem] flex flex-col p-2 justify-between rounded-md shadow-md">
      <div className="card-body flex-grow">
        <h5 className="card-title text-lg font-semibold">Title</h5>
        <p className="card-text text-sm">Content</p>
      </div>
      <div className="card-footer flex justify-between p-2">
        <button className="btn btn-primary btn-sm">View</button>
        <button className="btn btn-warning btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
      
  )
}

export default NoteCard
