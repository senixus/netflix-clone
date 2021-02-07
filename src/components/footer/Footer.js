import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-child">
        <div className="footer-child-first">
          <ul>
            <li>
              <Link to="!">FAQ</Link>
            </li>
            <li>
              <Link to="!">Investor Relations</Link>
            </li>
            <li>
              <Link to="!">Ways to Watch</Link>
            </li>
            <li>
              <Link to="!">Corporate Information</Link>
            </li>
            <li>
              <Link to="!">Netflix Originals</Link>
            </li>
          </ul>
        </div>
        <div className="footer-child-second">
          <ul>
            <li>
              <Link to="!">Help Center</Link>
            </li>
            <li>
              <Link to="!">Jobs</Link>
            </li>
            <li>
              <Link to="!">Terms of Use</Link>
            </li>
            <li>
              <Link to="!">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-child-third">
          <ul>
            <li>
              <Link to="!">Account</Link>
            </li>
            <li>
              <Link to="!">Redeem Gift Cards</Link>
            </li>
            <li>
              <Link to="!">Privacy</Link>
            </li>
            <li>
              <Link to="!">Speed Test</Link>
            </li>
          </ul>
        </div>
        <div className="footer-child-fourth">
          <ul>
            <li>
              <Link to="!">Media Center</Link>
            </li>
            <li>
              <Link to="!">Buy Gift Cards</Link>
            </li>
            <li>
              <Link to="!">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="!">Legal Notices</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
