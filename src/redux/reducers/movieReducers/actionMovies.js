import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const actionMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACTİON_MOVIES:
      return {
        ...state,
        actionMovie: action.payload,
      };

    default:
      return state;
  }
};
