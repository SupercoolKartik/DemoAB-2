import { useState, useCallback } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // eslint-disable-next-line

  const host = "http://localhost:5000";

  ////FUNCTIONS

  //Fetch all notes by a user
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const res = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const responseData = await res.json();
    setNotes(responseData);
  };

  //Create a new Note
  const addNote = useCallback(async (title, description, tag) => {
    const res = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    const responseData = await res.json();
    console.log(responseData);

    getNotes(); //To fetch/refresh all notes whenever a note is added
  }, []);

  //Delete a Note
  const deleteNote = useCallback(async (id) => {
    const res = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const responseData = await res.json();
    console.log(responseData);

    getNotes(); //To fetch/refresh all notes whenever a note is deleted
  }, []);

  //Edit a Note
  const editNote = useCallback(async (id, title, description, tag) => {
    const res = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    const responseData = await res.json();
    console.log(responseData);

    getNotes(); //To fetch/refresh all notes whenever a note is editted
  }, []);

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, getNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
