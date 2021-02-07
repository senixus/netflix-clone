import React from "react";
import "./authFooter.scss";
import { Link } from "react-router-dom";
const AuthFooter = () => {
  return (
    <footer className="auth-footer">
      <div className="auth-footer__child">
        <div>
          <ul>
            <li>
              <Link to="!">FAQ</Link>
            </li>
            <li>
              <Link to="!">Cookie Preferences</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link to="!">Help Center</Link>
            </li>
            <li>
              <Link to="!">Corporate Information</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link to="!">Term of Use</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link to="!">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
