import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const trendingMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovie: action.payload,
      };

    default:
      return state;
  }
};
