import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const host = "http://localhost:5000";
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

      // if (!res.ok) {
      //   throw new Error(`Request failed with status ${res.status}`);
      // }

      const responseData = await res.json();

      if (responseData.success) {
        localStorage.setItem("token", responseData.authToken);
        navigate("/");
        console.log("Redirected!");
        props.showAlert("Loged in Successfully!", "success");
      } else {
        props.showAlert("Invalid User Details", "danger");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <h1 className="my-3">Login to NotesCloud</h1>
      <div className="container" style={{ width: "45%" }}>
        <form onSubmit={onClickHandler}>
          <div className="d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputEmail1">
              <strong>Email address:</strong>
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
            />
          </div>
          <div className="d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputPassword1">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={onChange}
              minLength="5"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
