import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import NoteState from "./context/noteState";
import Login from "./components/login";
import Signup from "./components/signup";
import { useState } from "react";
import Alert from "./components/alert";
import User from "./components/user";

function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({ message: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <div className="App">
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
    </>
  );
}

export default App;
