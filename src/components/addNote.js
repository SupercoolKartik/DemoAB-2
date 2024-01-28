import React from "react";

const AddNote = () => {
  return (
    <>
      <h2>Add a Note</h2>
      <div className="container my-3 ">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <input
              type="tect"
              className="form-control"
              id="desc"
              name="desc"
              placeholder="Enter the Description"
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
