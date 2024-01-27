import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";

const About = () => {
  const a = useContext(noteContext);
  return (
    <div>
      <h2>You're ABOUT to go home! {a.name}</h2>
    </div>
  );
};

export default About;
