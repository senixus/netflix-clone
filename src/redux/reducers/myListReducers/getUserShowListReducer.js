import { initialState } from "../initialState";
import * as actionTypes from "../../actions/actionTypes";

export const getUserShowListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SHOW_LIST:
      const { userId } = action.payload;
      const filter = action.payload.items.filter((data) => {
        return data.uid === userId.uid;
      });

      if (filter) {
        return {
          ...state,
          getUserShowList: filter,
        };
      }

    default:
      return state;
  }
};
