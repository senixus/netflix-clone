import React, { useState } from "react";
import "./auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerAction } from "../../redux/actions/authActions/registerActions";

const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const dispatch = useDispatch();
  const register = (email, password, username) =>
    dispatch(registerAction(email, password, username));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user.email, user.password, user.username);
    setUser({ email: "", password: "", username: "" });
  };

  const handleError = () => {
    return error;
  };

  return (
    <div className="auth-form">
      <div className="auth-form__child">
        <h2>Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="form-group__control"
              onChange={handleChange}
              value={user.username}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-group__control"
              onChange={handleChange}
              value={user.email}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-group__control"
              onChange={handleChange}
              value={user.password}
              required
            />
          </div>
          <small style={{ color: "red" }}>{handleError()}</small>

          <div className="form-group">
            <button type="submit" className="form-btn">
              Sign Up
            </button>
          </div>
        </form>
        <div className="sign-up">
          <p>Have you already an account?</p>
          <Link to="/login">Sign In now.</Link>
        </div>
        <div className="captcha-info">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
