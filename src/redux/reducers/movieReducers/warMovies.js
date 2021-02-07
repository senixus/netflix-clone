import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const warMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WAR_MOVIES:
      return {
        ...state,
        warMovie: action.payload,
      };

    default:
      return state;
  }
};
