import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const currentUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        error: "",
      };
    case actionTypes.SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
