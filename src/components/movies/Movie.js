import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActionMovies } from "../../redux/actions/movieActions/getActionMovies";
import { getCrimeMovies } from "../../redux/actions/movieActions/getCrimeMovies";
import { getRomanceMovies } from "../../redux/actions/movieActions/getRomanceMovies";
import { getTrendingMovies } from "../../redux/actions/movieActions/getTrendingMovies";
import { getWarMovies } from "../../redux/actions/movieActions/getWarMovies";
import { getDramaMovies } from "../../redux/actions/movieActions/getDramaMovies";
import { getPopularMovies } from "../../redux/actions/movieActions/getPopularMovies";

import Movies from "./Movies";

const Movie = () => {
  const dispatch = useDispatch();
  const getPopular = () => dispatch(getPopularMovies());
  const actionMovies = () => dispatch(getActionMovies());
  const crimeMovies = () => dispatch(getCrimeMovies());
  const romanceMovies = () => dispatch(getRomanceMovies());
  const trendingMovies = () => dispatch(getTrendingMovies());
  const warMovies = () => dispatch(getWarMovies());
  const dramaMovies = () => dispatch(getDramaMovies());

  const actions = useSelector((state) => state.actionMovie.actionMovie);
  const populars = useSelector((state) => state.popularMovie.popularMovie);
  const crime = useSelector((state) => state.crimeMovie.crimeMovie);
  const drama = useSelector((state) => state.dramaMovie.dramaMovie);
  const romance = useSelector((state) => state.romanceMovie.romanceMovie);
  const trendings = useSelector((state) => state.trendingMovie.trendingMovie);
  const war = useSelector((state) => state.warMovie.warMovie);

  useEffect(() => {
    getPopular();
    actionMovies();
    crimeMovies();
    romanceMovies();
    trendingMovies();
    warMovies();
    dramaMovies();
  }, []);

  return (
    <>
      <Movies movies={trendings.results} title="Trending Now" />
      <Movies movies={populars.results} title="Popular Movies" />
      <Movies movies={actions.results} title="Action Movies" />
      <Movies movies={crime.results} title="Crime Movies" />
      <Movies movies={romance.results} title="Romance Movies" />
      <Movies movies={drama.results} title="Drama Movies" />
      <Movies movies={war.results} title="War Movies" />
    </>
  );
};

export default Movie;
