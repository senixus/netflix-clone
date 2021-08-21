import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const currentUserAction = () => {
  return async (dispatch) => {
    try {
      auth.onAuthStateChanged((user) =>
        dispatch({ type: actionTypes.CURRENT_USER, payload: user })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
