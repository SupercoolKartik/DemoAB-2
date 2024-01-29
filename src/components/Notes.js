import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes, getNotes } = useContext(noteContext);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        {notes.map((note, index) => (
          <div key={index} className="col-md-4 mb-3">
            {/* col-md-4 will create 3 columns on medium-sized screens */}
            <NoteItem key={note._id} note={note} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
