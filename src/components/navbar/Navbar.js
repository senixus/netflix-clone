import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useHistory } from "react-router-dom";
import brand from "../../images/brand.png";
import avatar from "../../images/Netflix-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { currentUserAction } from "../../redux/actions/authActions/currentUserActions";
import { logoutActions } from "../../redux/actions/authActions/logoutActions";
import * as Fa from "react-icons/fa";
import { searhShows } from "../../redux/actions/searchActions/searchShow";

const Navbar = () => {
  const dispatch = useDispatch();
  const getCurrentUser = () => dispatch(currentUserAction());
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const logout = () => dispatch(logoutActions());
  const search = (show) => dispatch(searhShows(show));
  const [isTrue, setIsTrue] = useState(false);
  const [show, setShow] = useState("");

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleNavbar = () => {
    const { pathname } = history.location;
    if (
      pathname === "/profile" ||
      pathname === "/email" ||
      pathname === "/password" ||
      pathname === "/browse/my-list"
    ) {
      return true;
    }
  };

  const handleSearchBar = (e) => {
    if (e.target) {
      setIsTrue(!isTrue);
    }
  };
  const handleSearch = (e) => {
    const query = e.target.value;
    setShow(query);
    search(show);
  };

  const handleIndexPage = () => {
    if (history.location.pathname !== "/") {
      return (
        <ul className="navbar-navs">
          <li className="navbar-navs__item">
            <Link to="/browse" className="navbar-navs__link">
              Home
            </Link>
          </li>
          <li className="navbar-navs__item">
            <Link to="/tv" className="navbar-navs__link">
              TV Shows
            </Link>
          </li>
          <li className="navbar-navs__item">
            <Link to="/movies" className="navbar-navs__link">
              Movies
            </Link>
          </li>
          <li className="navbar-navs__item">
            {user && (
              <Link to="/browse/my-list" className="navbar-navs__link">
                My List
              </Link>
            )}
          </li>
        </ul>
      );
    }
  };

  const checkUserAndPath = () => {
    if (user && history.location.pathname !== "/") {
      return (
        <li className="browse-navbar__item">
          <input
            type="text"
            placeholder="Search movie,tv shows"
            className={isTrue ? `search-bar` : `browse-navbar__search`}
            onChange={handleSearch}
            name="show"
            value={show}
          />
          <Fa.FaSearch className="search-icon" onClick={handleSearchBar} />
          <Link
            className="browse-navbar__link dropdown-btn"
            style={{ marginLeft: "1rem" }}
          >
            <img src={avatar} alt="netflix avatar" className="avatar" />
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>

              <Link to="/" onClick={() => logout()}>
                Sign Out
              </Link>
            </div>
          </Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login" className="sign-in">
            Sign In
          </Link>
        </li>
      );
    }
  };

  return (
    <nav
      className="navbar"
      style={handleNavbar() && { backgroundColor: "#000" }}
    >
      <div className="navbar-logo">
        <p className="navbar-logo__item">
          <Link to="/" className="navbar-logo__link">
            <img src={brand} alt="netflix" className="navbar-logo__image" />
          </Link>
        </p>
      </div>

      {handleIndexPage()}
      <div className="last-child">
        <ul className="browse-navbar">{checkUserAndPath()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
