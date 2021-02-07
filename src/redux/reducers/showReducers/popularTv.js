import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const popularTv = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_TV:
      return {
        ...state,
        popularTv: action.payload,
      };

    default:
      return state;
  }
};
