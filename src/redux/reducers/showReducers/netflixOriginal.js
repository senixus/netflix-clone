import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const netflixOriginal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NETFLIX_ORIGINAL:
      return {
        ...state,
        netflixOriginalTv: action.payload,
      };

    default:
      return state;
  }
};
