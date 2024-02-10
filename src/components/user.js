import React, { useState, useEffect } from "react";
import userImage from "../resources/user.png";

const User = () => {
  //Getting user details
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    const response = await fetch("http://localhost:5000/api/auth/getuserdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const responseData = await response.json();

    setUser(responseData);
    console.log(responseData);
    console.log(user);
  };
  useEffect(() => {
    // return () => {
    getUserData();

    // };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="vh-100 mt-3">
        <div className="py-5 h-100">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-black"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                      backgroundColor: "#babdd0",
                    }}
                  >
                    <img
                      src={userImage}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>{user.username}</h5>
                    <p>
                      <small>{user._id}</small>
                    </p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div
                    className="col-md-8"
                    style={{ backgroundColor: "#959596" }}
                  >
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{user.email}l</p>
                        </div>
                        <div className="col mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col mb-3">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col mb-3">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
