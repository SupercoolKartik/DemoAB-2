import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";

export default function Navbar() {
  //Used useLocation in order to the make the current path in Navbar look active
  const location = useLocation();
  const navigate = useNavigate();

  const { mode, modeChanger } = useContext(noteContext);
  //  if(mode==="dark"){setMode("light");localStorage.removeItem('
  useEffect(() => {}, [location, mode]);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={
          mode === "dark"
            ? { backgroundColor: "#001f3f" }
            : {
                backgroundColor: "#d5d5d5",
                border: "solid 1px",
                borderRadius: "5px",
              }
        }
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          className="navbar-brand"
          style={{ marginLeft: "7px", color: "red" }}
          to="/"
        >
          NotesCloud
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                style={
                  mode === "dark" ? { color: "white" } : { color: "black" }
                }
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                style={
                  mode === "dark" ? { color: "white" } : { color: "black" }
                }
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link
                className="nav-link disabled"
                style={
                  mode === "dark" ? { color: "white" } : { color: "black" }
                }
                to="/home"
              >
                Disabled
              </Link> */}
            </li>
          </ul>
        </div>
        <div className="me-4">
          {mode === "light" ? (
            <i
              className="bi bi-moon-stars-fill text-dark"
              title="Turn on Dark Mode"
              onClick={modeChanger}
            ></i>
          ) : (
            <i
              className="bi bi-brightness-high-fill text-light "
              title="Turn on Light Mode"
              onClick={modeChanger}
            ></i>
          )}
        </div>
        {/* <div className="form-check form-switch me-1">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label> 
        </div> */}

        {!localStorage.getItem("token") ? (
          <div>
            <Link className="btn btn-secondary mx-1" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-secondary me-5" to="/signup" role="button">
              SignUp
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/user">
              <i
                className="fa-regular fa-user me-4 ms-3"
                title="User Profile"
                style={{ color: "#74C0FC" }}
              ></i>
            </Link>
            <button
              className="btn btn-secondary me-5 ms-1 "
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
