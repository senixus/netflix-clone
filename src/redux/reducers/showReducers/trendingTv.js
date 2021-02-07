import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const trendingTv = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRENDING_TV:
      return {
        ...state,
        trendingTv: action.payload,
      };

    default:
      return state;
  }
};
