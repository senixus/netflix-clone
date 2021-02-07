import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const dramaMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DRAMA_MOVIES:
      return {
        ...state,
        dramaMovie: action.payload,
      };

    default:
      return state;
  }
};
