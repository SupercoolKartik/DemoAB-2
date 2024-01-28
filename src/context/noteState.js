import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // eslint-disable-next-line
  const [notes, setNotes] = useState([
    {
      _id: "65b3941cce2fb311c7fde97e2",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note",
      description: "Note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:14:36.102Z",
      __v: 0,
    },
    {
      _id: "65b39447ce2fb31s1c7de97e4",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note 2",
      description: "Another note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    },
    {
      _id: "65b39g447ce2fb311c7de97e4",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note 2",
      description: "Another note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    },
    {
      _id: "65b39s447ce2fb311c7de97e4",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note 2",
      description: "Another note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    },
    {
      _id: "65b39447ce2fb311c7de9j7e4",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note 2",
      description: "Another note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    },
    {
      _id: "65b39447ce2fb311c7dge97e4",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note 2",
      description: "Another note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    },
    {
      _id: "65b39447cce2fb311c7de97e4",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note 2",
      description: "Another note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    },
    {
      _id: "65b39447ce2fbr311c7de97e4",
      user: "65b38d66d5988a6cceee3649",
      title: "Wonder Woman Note 2",
      description: "Another note made by Wonder Woman",
      tag: "Personal",
      date: "2024-01-26T11:15:19.653Z",
      __v: 0,
    },
  ]);

  ////FUNCTIONS

  //Add a Note
  const addNote = (title, description, tag) => {
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

  return (
    <NoteContext.Provider value={{ notes, addNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
