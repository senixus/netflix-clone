import React from "react";
import brand from "../../images/brand.png";
import "./userHeader.scss";
import { Link } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { useHistory } from "react-router-dom";

const UserHeader = () => {
  const history = useHistory();

  return (
    <header className="user-header">
      <div className="user-header__image">
        <Link to="/">
          <img src={brand} alt="netflix brand" />
        </Link>
      </div>
      {history.location.pathname === "/login" ? <SignIn /> : <SignUp />}
    </header>
  );
};

export default UserHeader;
