import React, { useContext } from "react";
import noteContext from "../context/noteContext";

const NoteItem = (props) => {
  const { deleteNote } = useContext(noteContext);
  return (
    <div className="container-fluid note-container d-flex justify-content-center mx-1 my-1">
      <div className="card ">
        <div className="card-header" style={{ backgroundColor: "#f3effc" }}>
          {props.note.title}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.note.description}</p>
            <footer className="blockquote-footer">
              {props.note.user}
              <br />
              <cite title="Source Title">Author</cite>
            </footer>
            <i
              className="fa-solid fa-pen mx-4 ml-0"
              title="Edit Note"
              onClick={() => {
                props.launchModal(props.note);
              }}
            ></i>
            <i
              className="fa-solid fa-trash mx-4"
              title="Delete Note"
              onClick={() => {
                deleteNote(props.note._id);
                props.showAlert("User Deleted Successfully!", "success");
              }}
            ></i>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
