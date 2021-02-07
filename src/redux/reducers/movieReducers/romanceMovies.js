import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const romanceMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROMANCE_MOVIES:
      return {
        ...state,
        romanceMovie: action.payload,
      };

    default:
      return state;
  }
};
