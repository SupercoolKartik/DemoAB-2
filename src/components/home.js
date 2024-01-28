// eslint-disable-next-line
import { React, useContext } from "react";
import AddNote from "./addNote.js";
import Notes from "./Notes.js";
const Home = () => {
  return (
    <>
      <AddNote />
      <h1>Notes</h1>
      <Notes />
    </>
  );
};

export default Home;
