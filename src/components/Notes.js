import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const navigate = useNavigate();
  const { notes, getNotes, editNote, mode } = useContext(noteContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }

    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  const ref = useRef(null);
  const refToClose = useRef(null);

  // Launching the Modal for Editing note
  const launchModal = (currentNote) => {
    setNote({
      ...note,
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    }); // Passing the values of the current note
    ref.current.click(); // This triggers Modal launch
  };

  // Passing the values put in the Modal form in the notes state
  const onChange = async (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // Submitting the updated values to the database
  const submitUpdate = async (e) => {
    e.preventDefault();
    ref.current.click();
    await editNote(note.id, note.title, note.description, note.tag);
    props.showAlert("Note is Updated Successfully!", "success");
  };

  return (
    //MODAL FORM
    <div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Edit the Note
      </button>

      <div
        className={`modal fade `}
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className={`modal-content ${
              mode === "dark" ? "bg-dark text-light" : ""
            }`}
          >
            <div
              className={`modal-header ${
                mode === "dark" ? "bg-dark text-light" : ""
              }`}
            >
              <h5 className="modal-title">Edit Note!</h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#000",
                  fontSize: "1.5rem",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <form onSubmit={submitUpdate}>
                <div className="form-group d-flex flex-column align-items-start my-1">
                  <label htmlFor="title">Title:</label>
                  <textarea
                    type="text"
                    className={`form-control`}
                    id="title"
                    name="title"
                    placeholder="Enter Title"
                    value={note.title}
                    onChange={onChange}
                    minLength="3"
                    rows="1"
                    style={{
                      color: mode === "light" ? "#333" : "#FFF",
                      backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                      borderColor: mode === "light" ? "#CCCCCC" : "#333",
                    }}
                  />
                </div>
                <div className="form-group d-flex flex-column align-items-start my-1">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    type="text"
                    className={`form-control `}
                    id="description"
                    name="description"
                    placeholder="Enter the Description"
                    value={note.description}
                    onChange={onChange}
                    minLength="5"
                    rows="4"
                    style={{
                      color: mode === "light" ? "#333" : "#FFF",
                      backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                      borderColor: mode === "light" ? "#CCCCCC" : "#333",
                    }}
                  />
                </div>
                <div className="form-group d-flex flex-column align-items-start my-1">
                  <label htmlFor="tag">Tag:</label>
                  <textarea
                    type="text"
                    className={`form-control `}
                    id="tag"
                    name="tag"
                    placeholder="Enter Tag"
                    value={note.tag}
                    onChange={onChange}
                    rows="1"
                    style={{
                      color: mode === "light" ? "#333" : "#FFF",
                      backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                      borderColor: mode === "light" ? "#CCCCCC" : "#333",
                    }}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    ref={refToClose}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className={`row justify-content-center text-${
          mode === "light" ? "dark" : "light"
        }`}
      >
        <h1 className="my-3">Notes</h1>

        {notes.map((note, index) => (
          <div key={index} className="col-md-4 mb-3">
            <NoteItem
              key={note._id}
              note={note}
              launchModal={launchModal}
              showAlert={props.showAlert}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
