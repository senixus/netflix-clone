import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const dramaTv = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DRAMA_TV:
      return {
        ...state,
        dramaTv: action.payload,
      };

    default:
      return state;
  }
};
