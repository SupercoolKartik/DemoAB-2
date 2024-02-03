import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
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

      // if (!res.ok) {
      //   throw new Error(`Request failed with status ${res.status}`);
      // }

      const responseData = await res.json();

      if (responseData.success) {
        localStorage.setItem("token", responseData.authToken);
        navigate("/");
        console.log("Redirected!");
        props.showAlert("User Created Successfully!", "success");
      } else {
        props.showAlert("Invalid User Details", "danger");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <h1 className="my-3">Sign Up to NotesCloud</h1>
      <div className="container" style={{ width: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputUsername">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              name="username"
              id="exampleInputUsername"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              minLength="3"
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputEmail1">
              <strong>Email address:</strong>
            </label>
            <input
              type="email"
              className="form-control"
              onChange={onChange}
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputPassword1">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              className="form-control"
              onChange={onChange}
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
              minLength="5"
            />
          </div>
          <div className="form-group d-flex flex-column align-items-start my-3">
            <label htmlFor="exampleInputCPassword1">
              <strong>Confirm Password:</strong>
            </label>
            <input
              type="password"
              className="form-control"
              onChange={onChange}
              name="cpassword"
              id="exampleInputCPassword1"
              placeholder="Confirm Password"
              minLength="5"
            />
          </div>
          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
