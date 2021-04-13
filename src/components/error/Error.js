import React from "react";
import { Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  return (
    <main className="error-wrapper">
      <div className="error-wrapper__text">
        <h1>404 not found</h1>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
};

export default Error;
