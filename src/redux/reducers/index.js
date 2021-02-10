import { combineReducers } from "redux";

// Movies
import { popularMovies } from "../reducers/movieReducers/popularMovies";
import { actionMovies } from "../reducers/movieReducers/actionMovies";
import { crimeMovies } from "../reducers/movieReducers/crimeMovies";
import { dramaMovies } from "../reducers/movieReducers/dramaMovies";
import { romanceMovies } from "../reducers/movieReducers/romanceMovies";
import { trendingMovies } from "../reducers/movieReducers/trendingMovies";
import { warMovies } from "../reducers/movieReducers/warMovies";

// Tv
import { actionAdventureTv } from "../reducers/showReducers/actionAdventureTv";
import { crimeTv } from "../reducers/showReducers/crimeTv";
import { dramaTv } from "../reducers/showReducers/dramaTv";
import { netflixOriginal } from "../reducers/showReducers/netflixOriginal";
import { popularTv } from "../reducers/showReducers/popularTv";
import { trendingTv } from "../reducers/showReducers/trendingTv";
import { warTv } from "../reducers/showReducers/warTv";

// Auth
import { currentUserReducers } from "../reducers/authReducers/currentUserReducer";

// Mylist
import { getUserShowListReducer } from "../reducers/myListReducers/getUserShowListReducer";

// Search
import { searchReducer } from "../reducers/searchReducers/searchReducer";

export const rootReducer = combineReducers({
  // Movies
  popularMovie: popularMovies,
  actionMovie: actionMovies,
  crimeMovie: crimeMovies,
  dramaMovie: dramaMovies,
  romanceMovie: romanceMovies,
  trendingMovie: trendingMovies,
  warMovie: warMovies,

  // Tv
  actionTv: actionAdventureTv,
  crimeTv,
  dramaTv,
  netflix: netflixOriginal,
  popularTv,
  trendingTv,
  warTv,

  // Auth
  auth: currentUserReducers,

  // List
  getUserShowList: getUserShowListReducer,

  // Search
  search: searchReducer,
});
