import React from "react";
import GetStarted from "../getStarted/GetStarted";
import Navbar from "../navbar/Navbar";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-text">
        <h1 className="header-text__head">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="header-text__subhead">Watch anywhere. Cancel anytime.</p>
      </div>
      <GetStarted />
    </header>
  );
};

export default Header;
