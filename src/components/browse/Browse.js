import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./browse.scss";
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../redux/actions/movieActions/getPopularMovies";
import Movie from "../movies/Movie";
import Tvs from "../tv/Tvs";
import { useHistory } from "react-router-dom";
import BrowseFooter from "../browseFooter/BrowseFooter";

const Browse = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getPopular = () => dispatch(getPopularMovies());
  const populars = useSelector((state) => state.popularMovie.popularMovie);

  let randIndex = 0;

  useEffect(() => {
    getPopular();
  }, []);

  const handlePath = () => {
    if (history.location.pathname === "/browse") {
      return (
        <>
          <Movie /> <Tvs />
          <BrowseFooter />
        </>
      );
    }
  };

  const getRandomMovie = () => {
    randIndex = Math.floor(Math.random() * populars.results.length);

    return (
      <>
        <main
          className="browse"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/original/${populars.results[randIndex].backdrop_path})`,
          }}
        >
          <Navbar />
          <div className="browse-main">
            <div className="browse-main__title">
              <h1>
                {populars.results[randIndex].title ||
                  populars.results[randIndex].name}
              </h1>
            </div>
            <div className="browse-main__description">
              <p>
                {populars.results[randIndex].overview.length >= 75
                  ? populars.results[randIndex].overview.substr(0, 75) + "..."
                  : populars.results[randIndex].overview}
              </p>
            </div>
            <div className="browse-main__btns">
              <button type="button" className="play">
                <span>
                  <GrPlayFill />
                </span>
                Play
              </button>
              <button type="button" className="about">
                <span>
                  <AiOutlineInfoCircle />
                </span>
                About more
              </button>
            </div>
          </div>
        </main>
      </>
    );
  };

  return (
    <div>
      {populars.results && getRandomMovie()}

      {handlePath()}
    </div>
  );
};

export default Browse;
