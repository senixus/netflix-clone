import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./profile.scss";

const Profile = () => {
  return (
    <>
      <Navbar />
      <main className="profile">
        <div className="profile-childs">
          <h1>Account</h1>
          <div className="subscription">
            <div>
              <h4 className="subscription-header">membership and payment</h4>
              <button type="button" className="subscription-cancel">
                cancel subscription
              </button>
              <h4>Plans</h4>
            </div>
            <div className="profile-childs__information">
              <ul>
                <li>Email</li>
                <li>Password</li>
                <li>Standart</li>
              </ul>
              <ul>
                <li>
                  <Link to="">Change email</Link>
                </li>
                <li>
                  <Link to="">Change password</Link>
                </li>
                <li>
                  <Link to="/">Change plan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
