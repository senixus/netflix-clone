import React from "react";
import * as Fa from "react-icons/io";
import { Link } from "react-router-dom";
import "./getStarted.scss";

const GetStarted = () => {
  return (
    <div className="header-register">
      <p className="header-register__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input
        type="email"
        placeholder="Email address"
        className="header-register__input"
      />
      <Link to="/register" className="header-register__link">
        get started
        <Fa.IoIosArrowForward style={{ verticalAlign: "text-top" }} />
      </Link>
    </div>
  );
};

export default GetStarted;
