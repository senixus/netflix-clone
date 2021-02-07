import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const popularMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovie: action.payload,
      };

    default:
      return state;
  }
};
