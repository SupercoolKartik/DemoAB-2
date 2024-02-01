import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const responseData = await res.json();

      if (responseData.success) {
        localStorage.setItem("token", responseData.authToken);
        navigate("/");
        console.log("Redirected!");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <h1>Sign Up to NotesCloud</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputUsername">Name</label>
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
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={onChange}
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
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
          <div className="form-group">
            <label htmlFor="exampleInputCPassword1">Confirm Password</label>
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
