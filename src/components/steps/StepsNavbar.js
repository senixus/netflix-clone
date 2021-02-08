import React from "react";
import brand from "../../images/brand.png";
import { Link } from "react-router-dom";
import "./steps.scss";

const StepsNavbar = () => {
  return (
    <nav className="navbar-steps">
      <div className="navbar-steps__item">
        <Link to="/">
          <img
            src={brand}
            alt="Netflix brand"
            className="navbar-steps__image"
          />
        </Link>
      </div>
      <div className="navbar-steps__item">
        <Link to="/login" className="navbar-steps__link">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default StepsNavbar;
