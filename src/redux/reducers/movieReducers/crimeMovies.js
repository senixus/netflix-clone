import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const crimeMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CRIME_MOVIES:
      return {
        ...state,
        crimeMovie: action.payload,
      };

    default:
      return state;
  }
};
