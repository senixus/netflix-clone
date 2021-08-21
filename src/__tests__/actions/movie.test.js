import * as actionTypes from "../../redux/actions/actionTypes";
import { mockStore } from "../../setupTests";
import { getActionMovies } from "../../redux/actions/movieActions/getActionMovies";
import { getCrimeMovies } from "../../redux/actions/movieActions/getCrimeMovies";
import { getDramaMovies } from "../../redux/actions/movieActions/getDramaMovies";
import { getPopularMovies } from "../../redux/actions/movieActions/getPopularMovies";
import { getRomanceMovies } from "../../redux/actions/movieActions/getRomanceMovies";
import { getTrendingMovies } from "../../redux/actions/movieActions/getTrendingMovies";
import { getWarMovies } from "../../redux/actions/movieActions/getWarMovies";

describe("movie actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("should return action movies", async () => {
    expect.assertions(1);
    await store.dispatch(getActionMovies());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_ACTION_MOVIES,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });

  it("should return crime movies", async () => {
    expect.assertions(1);
    await store.dispatch(getCrimeMovies());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_CRIME_MOVIES,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return drama movies", async () => {
    expect.assertions(1);
    await store.dispatch(getDramaMovies());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_DRAMA_MOVIES,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return popular movies", async () => {
    expect.assertions(1);
    await store.dispatch(getPopularMovies());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_POPULAR_MOVIES,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return romance movies", async () => {
    expect.assertions(1);
    await store.dispatch(getRomanceMovies());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_ROMANCE_MOVIES,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return trending movies", async () => {
    expect.assertions(1);
    await store.dispatch(getTrendingMovies());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_TRENDING_MOVIES,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return war movies", async () => {
    expect.assertions(1);
    await store.dispatch(getWarMovies());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_WAR_MOVIES,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
});
