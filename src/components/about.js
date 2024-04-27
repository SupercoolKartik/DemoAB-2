import { React, useContext } from "react";
import noteContext from "../context/noteContext";
const About = () => {
  const { mode } = useContext(noteContext);
  return (
    <div
      className="px-4"
      style={
        mode === "dark"
          ? { color: "white", marginTop: "100px" }
          : { marginTop: "100px" }
      }
    >
      <h2 className="mb-4">About NotesCloud</h2>
      <p className="lead">
        This is NotesCloud, a dynamic and intuitive note-taking application
        designed to streamline your organization and productivity. With a sleek
        and user-friendly interface crafted using React.js and Bootstrap, Notes
        Cloud offers a seamless experience for capturing, organizing, and
        accessing your thoughts, ideas, and tasks.
      </p>
      <p>
        Powered by a robust Node.js backend and MongoDB database, Notes Cloud
        ensures secure and reliable data storage, allowing you to access your
        notes from anywhere, at any time. Whether you're jotting down quick
        reminders, drafting detailed project plans, or brainstorming creative
        concepts, Notes Cloud provides the tools you need to stay organized and
        focused.
      </p>
      <p>
        At Notes Cloud, we understand the importance of simplicity and
        efficiency. That's why our app prioritizes ease of use and
        functionality, allowing you to create, edit, and manage your notes with
        ease. Whether you're a student, professional, or creative thinker, Notes
        Cloud adapts to your workflow, helping you stay productive and organized
        in today's fast-paced world.
      </p>
      <p>
        With JWT authorization integrated into our system, Notes Cloud ensures
        that your data remains safe and accessible only to authorized users.
      </p>
      <p>
        Join the Notes Cloud community today and experience the convenience of
        seamless note-taking, backed by cutting-edge technology and a commitment
        to innovation. Empower yourself to capture ideas, stay organized, and
        unleash your creativity with Notes Cloud.
      </p>
    </div>
  );
};

export default About;
