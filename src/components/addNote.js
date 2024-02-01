import React, { useState, useContext } from "react";
import noteContext from "../context/noteContext";

const AddNote = () => {
  // eslint-disable-next-line
  const { notes, addNote } = useContext(noteContext);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title === "") return alert("Please enter a note title");
    else if (note.description === "")
      return alert("Please enter a note description");
    else {
      addNote(note.title, note.description, note.tag);
    }
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Add a Note</h2>
      <div className="container my-3 ">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={note.title}
              onChange={onChange}
              minLength="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="tect"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter the Description"
              value={note.description}
              onChange={onChange}
              minLength="5"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Enter Tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn my-1 btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
