import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import NoteState from "./context/noteState";
function App() {
  return (
    <>
      <NoteState>
        <div className="App">
          <Router>
            <Navbar />
            <h1>Welcome to NotesCloud</h1>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;
