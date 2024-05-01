import { React, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";
import { RiLoginBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";

export default function Navbar() {
  //Used useLocation in order to the make the current path in Navbar look active
  const location = useLocation();
  const navigate = useNavigate();

  const navbarRef = useRef(null);
  const togglerRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        togglerRef.current &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target) &&
        !togglerRef.current.contains(e.target)
      ) {
        // Clicked outside the toggle menu, close it
        const toggleButton = togglerRef.current;
        if (toggleButton.getAttribute("aria-expanded") === "true") {
          toggleButton.click();
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  const handleLinkClick = () => {
    // Programmatically trigger a click event on the toggler button to close the navbar
    togglerRef.current.click();
  };
  const { mode, modeChanger } = useContext(noteContext);
  //  if(mode==="dark"){setMode("light");localStorage.removeItem('.....
  useEffect(() => {}, [location, mode]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top "
        ref={navbarRef}
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
        <div className="container-fluid">
          {" "}
          {/* ----NotesCloud logo---- */}
          <Link className="navbar-brand ms-1 " to="/" style={{ color: "red" }}>
            <b className="pacifico-regular">NotesCloud</b>
          </Link>
          {/* ----Navbar toggler for mobile---- */}
          <button
            ref={togglerRef}
            className="navbar-toggler d-md-none " // Added btn-sm class to make it smaller
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "transparent", border: "none" }} // Custom style for button
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            {" "}
            {/* Left Justified Navbar Elements */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item active" onClick={handleLinkClick}>
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                  style={
                    mode === "dark" ? { color: "white" } : { color: "black" }
                  }
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                  style={
                    mode === "dark" ? { color: "white" } : { color: "black" }
                  }
                >
                  About
                </Link>
              </li>
            </ul>
            {/* Right Justified Navbar Elements */}
            <ul className="nav navbar-nav navbar-right">
              <li className="my-2  mx-2" onClick={handleLinkClick}>
                <Link to="/user">
                  <i
                    className="fa-regular fa-user"
                    title="User Profile"
                    style={{ color: "#74C0FC" }}
                  ></i>
                </Link>
              </li>
              <li className="my-auto  mx-3">
                {mode === "light" ? (
                  <i
                    className="bi bi-moon-stars-fill text-dark"
                    title="Turn on Dark Mode"
                    onClick={modeChanger}
                  ></i>
                ) : (
                  <i
                    className="bi bi-brightness-high-fill text-light"
                    title="Turn on Light Mode"
                    onClick={modeChanger}
                  ></i>
                )}
              </li>
              {!localStorage.getItem("token") ? (
                <li className="nav-item" onClick={handleLinkClick}>
                  <Link
                    className="nav-link text-success d-flex align-items-center justify-content-center "
                    to="/login"
                  >
                    <RiLoginBoxLine className="me-1 fs-5" />
                    <b className="fs-8">
                      <span>Login</span>
                    </b>
                  </Link>
                </li>
              ) : (
                <li
                  className="nav-item"
                  onClick={() => {
                    logoutHandler(); // Call the logoutHandler function
                    handleLinkClick(); // Call the handleLinkClick function
                  }}
                >
                  <Link className="nav-link text-danger d-flex align-items-center justify-content-center ">
                    <RiLogoutBoxRLine className="me-1 fs-5" />{" "}
                    <b className="fs-8">LogOut</b>
                  </Link>
                </li>
              )}
              {!localStorage.getItem("token") && (
                <li className="nav-item" onClick={handleLinkClick}>
                  <Link
                    className="nav-link text-success d-flex align-items-center justify-content-center "
                    to="/signup"
                    role="button"
                  >
                    <FiUserPlus className="me-1 fs-5" />
                    <b className="fs-8">SignUp</b>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
