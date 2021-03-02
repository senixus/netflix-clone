import React, { useEffect, useState } from "react";
import "./auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginAction } from "../../redux/actions/authActions/loginActions";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const login = (email, password) => dispatch(loginAction(email, password));
  const currentUser = useSelector((state) => state.auth.user);
  const history = useHistory();
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    const handleCurrentUser = () => {
      if (currentUser) {
        history.push("/browse");
      }
    };

    handleCurrentUser();
  }, []);

  if (currentUser) {
    history.push("/browse");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(user.email, user.password);
    setUser({ email: "", password: "" });
  };

  const handleError = () => {
    return error;
  };

  return (
    <div className="auth-form">
      <div className="auth-form__child">
        <h2>Sign In</h2>
        <form className="form" onSubmit={handleSubmit}>
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
              Sign In
            </button>
          </div>

          <div className="form-group check">
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="remember"
                className="form-checkbox"
              />
              <span> Remember me</span>
            </div>
            <div className="form-group">
              <Link to="/help" className="need-help">
                Need Help?
              </Link>
            </div>
          </div>
        </form>
        <div className="sign-up">
          <p>New to Netflix?</p> <Link to="/register">Sign up now.</Link>
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

export default SignIn;
