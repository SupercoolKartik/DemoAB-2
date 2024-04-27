import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";

const Login = (props) => {
  let navigate = useNavigate();
  const { mode } = useContext(noteContext);
  //const host = "http://localhost:5000";
  const host = "https://notescloud-backend.onrender.com";
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onClickHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const responseData = await res.json();

      if (responseData.success) {
        localStorage.setItem("token", responseData.authToken);
        navigate("/");
        props.showAlert("Logged in successfully!", "success");
      } else {
        props.showAlert("Invalid User Details", "danger");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h1
        className={` ${mode === "dark" ? "text-light" : ""}`}
        style={{ marginTop: "100px" }}
      >
        Login to NotesCloud
      </h1>
      <div
        className={`container ${mode === "dark" ? "text-light" : ""}`}
        style={{ width: "45%" }}
      >
        {/* ${mode === "dark" ? "text-light" : ""} */}
        <form onSubmit={onClickHandler}>
          <div className="d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputEmail1">
              <strong>Email address:</strong>
            </label>
            <input
              type="email"
              name="email"
              className={`form-control `}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
            />
          </div>
          <div className="d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputPassword1">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              className={`form-control `}
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={onChange}
              minLength="5"
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className={`form-check-label ${
                mode === "dark" ? "text-light" : ""
              }`}
              htmlFor="exampleCheck1"
            >
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className={`btn ${mode === "dark" ? "btn-light" : "btn-primary"}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
