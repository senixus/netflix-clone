import * as actionTypes from "../../redux/actions/actionTypes";
import { actionMovies } from "../../redux/reducers/movieReducers/actionMovies";
import { crimeMovies } from "../../redux/reducers/movieReducers/crimeMovies";
import { dramaMovies } from "../../redux/reducers/movieReducers/dramaMovies";
import { popularMovies } from "../../redux/reducers/movieReducers/popularMovies";
import { romanceMovies } from "../../redux/reducers/movieReducers/romanceMovies";
import { trendingMovies } from "../../redux/reducers/movieReducers/trendingMovies";
import { warMovies } from "../../redux/reducers/movieReducers/warMovies";
import { initialState } from "../../redux/reducers/initialState";

describe("movieReducer", () => {
  it("should return initial state", () => {
    expect(actionMovies(undefined, {})).toEqual(initialState);
    expect(crimeMovies(undefined, {})).toEqual(initialState);
    expect(dramaMovies(undefined, {})).toEqual(initialState);
    expect(popularMovies(undefined, {})).toEqual(initialState);
    expect(romanceMovies(undefined, {})).toEqual(initialState);
    expect(trendingMovies(undefined, {})).toEqual(initialState);
    expect(warMovies(undefined, {})).toEqual(initialState);
  });

  it("should return action movies", () => {
    const state = {
      actionMovie: [],
    };
    const action = {
      type: actionTypes.GET_ACTION_MOVIES,
      payload: [{ id: 1, name: "Test action movie" }],
    };
    expect(actionMovies(state, action)).toEqual({
      actionMovie: [{ id: 1, name: "Test action movie" }],
    });
  });
  it("should return popular movies", () => {
    const state = {
      popularMovie: [],
    };
    const action = {
      type: actionTypes.GET_POPULAR_MOVIES,
      payload: [{ id: 1, name: "Test popular movie" }],
    };
    expect(popularMovies(state, action)).toEqual({
      popularMovie: [{ id: 1, name: "Test popular movie" }],
    });
  });
  it("should return romance movies", () => {
    const state = {
      romanceMovie: [],
    };
    const action = {
      type: actionTypes.GET_ROMANCE_MOVIES,
      payload: [{ id: 1, name: "Test romance movie" }],
    };
    expect(romanceMovies(state, action)).toEqual({
      romanceMovie: [{ id: 1, name: "Test romance movie" }],
    });
  });
  it("should return war movies", () => {
    const state = {
      warMovie: [],
    };
    const action = {
      type: actionTypes.GET_WAR_MOVIES,
      payload: [{ id: 1, name: "Test war movie" }],
    };
    expect(warMovies(state, action)).toEqual({
      warMovie: [{ id: 1, name: "Test war movie" }],
    });
  });
  it("should return trending movies", () => {
    const state = {
      trendingMovie: [],
    };
    const action = {
      type: actionTypes.GET_TRENDING_MOVIES,
      payload: [{ id: 1, name: "Test trending movie" }],
    };
    expect(trendingMovies(state, action)).toEqual({
      trendingMovie: [{ id: 1, name: "Test trending movie" }],
    });
  });
  it("should return drama movies", () => {
    const state = {
      dramaMovie: [],
    };
    const action = {
      type: actionTypes.GET_DRAMA_MOVIES,
      payload: [{ id: 1, name: "Test drama movie" }],
    };
    expect(dramaMovies(state, action)).toEqual({
      dramaMovie: [{ id: 1, name: "Test drama movie" }],
    });
  });
  it("should return crime movies", () => {
    const state = {
      crimeMovie: [],
    };
    const action = {
      type: actionTypes.GET_CRIME_MOVIES,
      payload: [{ id: 1, name: "Test crime movie" }],
    };
    expect(crimeMovies(state, action)).toEqual({
      crimeMovie: [{ id: 1, name: "Test crime movie" }],
    });
  });
});
