import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_SHOW:
      if (action.payload === "") {
        return {
          ...state,
          searchedShows: [],
        };
      }
      return {
        ...state,
        searchedShows: action.payload,
      };

    default:
      return state;
  }
};
