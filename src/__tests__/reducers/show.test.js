import * as actionTypes from "../../redux/actions/actionTypes";
import { actionAdventureTv } from "../../redux/reducers/showReducers/actionAdventureTv";
import { crimeTv } from "../../redux/reducers/showReducers/crimeTv";
import { dramaTv } from "../../redux/reducers/showReducers/dramaTv";
import { netflixOriginal } from "../../redux/reducers/showReducers/netflixOriginal";
import { popularTv } from "../../redux/reducers/showReducers/popularTv";
import { trendingTv } from "../../redux/reducers/showReducers/trendingTv";
import { warTv } from "../../redux/reducers/showReducers/warTv";
import { initialState } from "../../redux/reducers/initialState";

describe("showReducer", () => {
  it("should return initial state", () => {
    expect(actionAdventureTv(undefined, {})).toEqual(initialState);
    expect(crimeTv(undefined, {})).toEqual(initialState);
    expect(dramaTv(undefined, {})).toEqual(initialState);
    expect(netflixOriginal(undefined, {})).toEqual(initialState);
    expect(popularTv(undefined, {})).toEqual(initialState);
    expect(trendingTv(undefined, {})).toEqual(initialState);
    expect(warTv(undefined, {})).toEqual(initialState);
  });

  it("should return action tv show", () => {
    const state = {
      actionAdventureTv: [],
    };
    const action = {
      type: actionTypes.GET_ACTION_TV,
      payload: [{ id: 1, name: "Test action tv show" }],
    };
    expect(actionAdventureTv(state, action)).toEqual({
      actionAdventureTv: [{ id: 1, name: "Test action tv show" }],
    });
  });
  it("should return popular tv show", () => {
    const state = {
      popularTv: [],
    };
    const action = {
      type: actionTypes.GET_POPULAR_TV,
      payload: [{ id: 1, name: "Test popular tv show" }],
    };
    expect(popularTv(state, action)).toEqual({
      popularTv: [{ id: 1, name: "Test popular tv show" }],
    });
  });
  it("should return drama tv show", () => {
    const state = {
      dramaTv: [],
    };
    const action = {
      type: actionTypes.GET_DRAMA_TV,
      payload: [{ id: 1, name: "Test drama tv show" }],
    };
    expect(dramaTv(state, action)).toEqual({
      dramaTv: [{ id: 1, name: "Test drama tv show" }],
    });
  });
  it("should return war tv show", () => {
    const state = {
      warTv: [],
    };
    const action = {
      type: actionTypes.GET_WAR_TV,
      payload: [{ id: 1, name: "Test war tv show" }],
    };
    expect(warTv(state, action)).toEqual({
      warTv: [{ id: 1, name: "Test war tv show" }],
    });
  });
  it("should return netflix original shows", () => {
    const state = {
      netflixOriginalTv: [],
    };
    const action = {
      type: actionTypes.GET_NETFLIX_ORIGINAL,
      payload: [{ id: 1, name: "Test netflix original shows" }],
    };
    expect(netflixOriginal(state, action)).toEqual({
      netflixOriginalTv: [{ id: 1, name: "Test netflix original shows" }],
    });
  });
  it("should return trending tv show", () => {
    const state = {
      trendingTv: [],
    };
    const action = {
      type: actionTypes.GET_TRENDING_TV,
      payload: [{ id: 1, name: "Test trending tv show" }],
    };
    expect(trendingTv(state, action)).toEqual({
      trendingTv: [{ id: 1, name: "Test trending tv show" }],
    });
  });
  it("should return crime tv show", () => {
    const state = {
      crimeTv: [],
    };
    const action = {
      type: actionTypes.GET_CRIME_TV,
      payload: [{ id: 1, name: "Test crime tv show" }],
    };
    expect(crimeTv(state, action)).toEqual({
      crimeTv: [{ id: 1, name: "Test crime tv show" }],
    });
  });
});
