import React, { useState, useContext } from "react";
import noteContext from "../context/noteContext";

const AddNote = (props) => {
  // eslint-disable-next-line
  const { notes, addNote, mode } = useContext(noteContext);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title.length < 3)
      return props.showAlert(
        "The minimum length of title should be 3!",
        "danger"
      );
    else if (note.description.length < 5)
      return props.showAlert(
        "The minimum length of description should be 5!",
        "danger"
      );
    else {
      addNote(note.title, note.description, note.tag);
      props.showAlert("Note added successfully!", "success");
    }
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`text-${mode === "light" ? "dark" : "light"} `}
      // style={
      //   mode === "dark"
      //     ? { backgroundColor: "black" }
      //     : { backgroundColor: "white" }
      // }
      // #585258
    >
      <h2 className=" mb-1" style={{ marginTop: "100px" }}>
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
              minLength={3}
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
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
              minLength={5}
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
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
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCCCCC" : "#333",
              }}
              rows="1"
            />
          </div>

          <button type="submit" className="btn my-1 btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
