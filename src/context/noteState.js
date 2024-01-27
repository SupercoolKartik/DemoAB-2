import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // eslint-disable-next-line
  const [state, setState] = useState({
    name: "Suraj",
    age: 25,
  });

  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
