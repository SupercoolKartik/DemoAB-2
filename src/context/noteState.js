import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // eslint-disable-next-line
  const [notes, setNotes] = useState([]);
  const host = "http://localhost:5000";

  const getNotes = async () => {
    const res = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJXb25kZXIgV29tYW4iLCJpZCI6IjY1YjM4ZDY2ZDU5ODhhNmNjZWVlMzY0OSJ9LCJpYXQiOjE3MDYyNjU5NTh9.8ml-L3HGliUhEUXx4yINYpzoaJazk0A-BGbb_v4hD8w",
      },
    });

    const responseData = await res.json();
    setNotes(responseData);
  };

  ////FUNCTIONS

  //Creating a new Note
  const addNote = async (title, description, tag) => {
    const res = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJXb25kZXIgV29tYW4iLCJpZCI6IjY1YjM4ZDY2ZDU5ODhhNmNjZWVlMzY0OSJ9LCJpYXQiOjE3MDYyNjU5NTh9.8ml-L3HGliUhEUXx4yINYpzoaJazk0A-BGbb_v4hD8w",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
  };

  const deleteNote = async (id) => {
    const res = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJXb25kZXIgV29tYW4iLCJpZCI6IjY1YjM4ZDY2ZDU5ODhhNmNjZWVlMzY0OSJ9LCJpYXQiOjE3MDYyNjU5NTh9.8ml-L3HGliUhEUXx4yINYpzoaJazk0A-BGbb_v4hD8w",
      },
    });
    const responseData = await res.json();
    console.log(responseData);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
