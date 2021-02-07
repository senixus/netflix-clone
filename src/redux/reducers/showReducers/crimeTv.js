import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const crimeTv = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CRIME_TV:
      return {
        ...state,
        crimeTv: action.payload,
      };

    default:
      return state;
  }
};
