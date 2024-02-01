// eslint-disable-next-line
import { React, useContext } from "react";
import AddNote from "./addNote.js";
import Notes from "./Notes.js";
const Home = (props) => {
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <h1>Notes</h1>
      <Notes showAlert={props.showAlert} />
    </>
  );
};

export default Home;
