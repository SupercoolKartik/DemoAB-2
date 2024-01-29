import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // eslint-disable-next-line
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
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

  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    const newNote = {
      _id: "65b39447ce2fbr311c7de97e4",
      user: "65b38d66d5988a6cceee3649",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    };

    setNotes(notes.concat(newNote));
  };

  //Delete a Note
  const deleteNote = (id) => {
    //TODO: API Call
    const newNotes = notes.filter((note) => {
      return id !== note._id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getData }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
