import React from "react";
import { Link } from "react-router-dom";
import "./browseFooter.scss";
import * as Fa from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const BrowseFooter = () => {
  return (
    <footer className="browse-footer">
      <div className="browse-footer__child">
        <ul className="browse-footer__icons">
          <li className="icons">
            <Link to="/facebook">
              <Fa.FaFacebookSquare />
            </Link>
          </li>
          <li className="icons">
            <Link to="/facebook">
              <ImInstagram />
            </Link>
          </li>
          <li className="icons">
            <Link to="/facebook">
              <Fa.FaTwitter />
            </Link>
          </li>
          <li className="icons">
            <Link to="/facebook">
              <Fa.FaYoutube />
            </Link>
          </li>
        </ul>

        <div className="browse-footer__list">
          <div className="footer-child-first">
            <ul>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Investor Relations</Link>
              </li>
              <li>
                <Link to="/">Ways to Watch</Link>
              </li>
              <li>
                <Link to="/">Corporate Information</Link>
              </li>
            </ul>
          </div>
          <div className="footer-child-second">
            <ul>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Jobs</Link>
              </li>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="footer-child-third">
            <ul>
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <Link to="/">Redeem Gift Cards</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-child-fourth">
            <ul>
              <li>
                <Link to="/">Media Center</Link>
              </li>
              <li>
                <Link to="/">Buy Gift Cards</Link>
              </li>
              <li>
                <Link to="/">Cookie Preferences</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BrowseFooter;
