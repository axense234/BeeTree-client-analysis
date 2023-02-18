import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

import { useDispatch, useSelector } from "react-redux";

import { register } from "./redux/apiCalls";
import Navbar from "./components/navbar";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      register({ name, email, password }, dispatch);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="reg">
        <form className="signup-form">
          <div className="form-header">HoneyPot | Update Using redux </div>

          <div className="form-body">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailOrPhone">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Enter Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-footer">
            <button
              type="submit"
              disabled={isFetching}
              onClick={handleRegister}>
              Register
            </button>
            {error && <span className="error">something went wrong</span>}

            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
