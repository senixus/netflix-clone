import * as actionTypes from "../../redux/actions/actionTypes";
import { searchReducer } from "../../redux/reducers/searchReducers/searchReducer";
import { initialState } from "../../redux/reducers/initialState";

describe("searchReducer", () => {
  it("should return initial state", () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  it("should return searched shows", () => {
    const state = {
      searchedShows: [],
    };
    const action = {
      type: actionTypes.SEARCH_SHOW,
      payload: [
        { id: 1, name: "Test show 1" },
        { id: 2, name: "Test show 2" },
      ],
    };
    expect(searchReducer(state, action)).toEqual({
      searchedShows: [
        { id: 1, name: "Test show 1" },
        { id: 2, name: "Test show 2" },
      ],
    });
  });
});
