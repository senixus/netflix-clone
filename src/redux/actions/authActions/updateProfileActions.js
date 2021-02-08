import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const updateEmail = (email) => {
  return async (dispatch) => {
    try {
      await auth.currentUser.updateEmail(email);
      dispatch({ type: actionTypes.UPDATE_EMAIL });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePassword = (password) => {
  return async (dispatch) => {
    try {
      await auth.currentUser.updatePassword(password);
      dispatch({ type: actionTypes.UPDATE_PASSWORD });
    } catch (error) {
      console.log(error);
    }
  };
};
