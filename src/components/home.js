// eslint-disable-next-line
import { React, useContext } from "react";
import Notes from "./Notes.js";
const Home = () => {
  return (
    <div>
      <div className="container my-3 ">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter the Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Tag</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Tag"
            />
          </div>
          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn my-1 btn-primary">
            Submit
          </button>
        </form>
      </div>
      <h1>Notes</h1>
      <Notes />
    </div>
  );
};

export default Home;
