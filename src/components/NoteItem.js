import React from "react";

const NoteItem = (props) => {
  return (
    <div className="container-fluid note-container d-flex justify-content-center mx-1 my-1">
      <div className="card ">
        <div className="card-header">{props.note.title}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.note.description}</p>
            <footer className="blockquote-footer">
              {props.note.user}
              <br />
              <cite title="Source Title">Author</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
