import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const currentUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
