import React, { useState, useContext } from "react";
import noteContext from "../context/noteContext";

const AddNote = (props) => {
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
      props.showAlert("Note Added Successfully!", "success");
    }
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="mt-5 mb-1">
        <strong>Add a Note</strong>
      </h2>
      <div className="container my-3" style={{ width: "60%" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group d-flex flex-column align-items-start my-1">
            <label htmlFor="title">
              <strong>Title:</strong>
            </label>
            <textarea
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={note.title}
              onChange={onChange}
              minLength="3"
              rows="1"
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-1">
            <label htmlFor="description">
              <strong>Description:</strong>
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter the Description"
              value={note.description}
              onChange={onChange}
              minLength="5"
              rows="6"
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-1">
            <label htmlFor="tag">
              <strong>Tag:</strong>
            </label>
            <textarea
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Enter Tag"
              value={note.tag}
              onChange={onChange}
              rows="1"
            />
          </div>

          <button type="submit" className="btn my-1 btn-primary">
            Submit
          </button>
        </form>
        <hr className="my-5" />
      </div>
    </>
  );
};

export default AddNote;
