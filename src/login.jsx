import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

import { useDispatch, useSelector } from "react-redux";

import { login } from "./redux/apiCalls";
import Navbar from "./components/navbar";
import { loginFailure, loginStart, loginSuccess } from "./redux/userSlice";
import axios from "axios";
import { loginRoute } from "./api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { isFetching, error } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (email === "Waphilo7@gmail.com" && password === "admin") {
        window.open("/admin", "_blank");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setError(error.message);
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
            <button type="submit" onClick={handleLogin}>
              Login
            </button>

            <span className="error"> {error}</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
