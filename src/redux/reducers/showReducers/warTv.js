import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const warTv = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WAR_TV:
      return {
        ...state,
        warTv: action.payload,
      };

    default:
      return state;
  }
};
