import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import NoteState from "./context/noteState";
import Login from "./components/login";
import Signup from "./components/signup";
import { useState, useContext } from "react";
import Alert from "./components/alert";
import User from "./components/user";
import noteContext from "./context/noteContext";

function App() {
  const [alert, setalert] = useState(null);
  const mode = useContext(noteContext);

  const showAlert = (message, type) => {
    setalert({ message: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <div>
      <NoteState>
        <div className={`App ${mode === "dark" ? "bg-dark text-light" : ""}`}>
          <Router>
            <Navbar />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/user" element={<User />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </Router>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
