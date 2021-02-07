import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const actionAdventureTv = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACTİON_TV:
      return {
        ...state,
        actionAdventureTv: action.payload,
      };

    default:
      return state;
  }
};
