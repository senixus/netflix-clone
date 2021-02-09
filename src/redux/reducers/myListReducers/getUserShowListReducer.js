import { initialState } from "../initialState";
import * as actionTypes from "../../actions/actionTypes";

export const getUserShowListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SHOW_LIST:
      return {
        ...state,
        getUserShowList: action.payload,
      };

    default:
      return state;
  }
};
