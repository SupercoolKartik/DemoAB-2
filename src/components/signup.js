import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";

const Signup = (props) => {
  let navigate = useNavigate();
  const { mode } = useContext(noteContext);
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const responseData = await res.json();

      if (responseData.success) {
        localStorage.setItem("token", responseData.authToken);
        navigate("/");
        props.showAlert("User Created Successfully!", "success");
      } else {
        props.showAlert("Invalid User Details", "danger");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h1 className={`my-3 ${mode === "dark" ? "text-light" : ""}`}>
        Sign Up to NotesCloud
      </h1>
      <div className={`container `} style={{ width: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputUsername">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              className={`form-control `}
              onChange={onChange}
              name="username"
              id="exampleInputUsername"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              minLength="3"
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputEmail1">
              <strong>Email address:</strong>
            </label>
            <input
              type="email"
              className={`form-control `}
              onChange={onChange}
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputPassword1">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              className={`form-control `}
              onChange={onChange}
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
              minLength="5"
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputCPassword1">
              <strong>Confirm Password:</strong>
            </label>
            <input
              type="password"
              className={`form-control `}
              onChange={onChange}
              name="cpassword"
              id="exampleInputCPassword1"
              placeholder="Confirm Password"
              minLength="5"
              style={{
                color: mode === "light" ? "#333" : "#FFF",
                backgroundColor: mode === "light" ? "#FFF" : "#9c9c9c",
                borderColor: mode === "light" ? "#CCC" : "#333",
              }}
            />
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

export default Signup;
