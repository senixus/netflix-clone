import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./profile.scss";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

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
                <li>{user.email}</li>
                <li>{user.password || <p>******</p>} </li>
                <li>Standart</li>
              </ul>
              <ul>
                <li>
                  <Link to="/email">Change email</Link>
                </li>
                <li>
                  <Link to="/password">Change password</Link>
                </li>
                <li>
                  <Link to="/change-plan">Change plan</Link>
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
