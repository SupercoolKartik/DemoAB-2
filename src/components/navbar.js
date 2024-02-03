import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  //Used useLocation in order to the make the current path in Navbar look active
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {}, [location]);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
        <Link className="navbar-brand" style={{ marginLeft: "7px" }} to="/">
          NotesCloud
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
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
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/home">
                Disabled
              </Link>
            </li>
          </ul>
        </div>

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
    </>
  );
}
