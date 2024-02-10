// eslint-disable-next-line
import { React, useContext } from "react";
import AddNote from "./addNote.js";
import Notes from "./Notes.js";
const Home = (props) => {
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <Notes showAlert={props.showAlert} />
    </>
  );
};

export default Home;
