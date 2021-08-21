import * as actionTypes from "../../redux/actions/actionTypes";
import { currentUserReducers } from "../../redux/reducers/authReducers/currentUserReducer";
import { initialState } from "../../redux/reducers/initialState";

describe("currentUserReducer", () => {
  it("should return initial state", () => {
    expect(currentUserReducers(undefined, {})).toEqual(initialState);
  });

  it("should return current user", () => {
    const state = {
      user: {},
      error: "",
    };

    const action = {
      type: actionTypes.CURRENT_USER,
      payload: {
        id: 1,
        name: "Test user",
      },
    };
    expect(currentUserReducers(state, action)).toEqual({
      user: {
        id: 1,
        name: "Test user",
      },
      error: "",
    });
  });

  it("should return error", () => {
    const state = {
      error: "",
    };
    const action = {
      type: actionTypes.SHOW_ERROR,
      payload: "Something went wrong",
    };
    expect(currentUserReducers(state, action)).toEqual({
      error: "Something went wrong",
    });
  });
});
