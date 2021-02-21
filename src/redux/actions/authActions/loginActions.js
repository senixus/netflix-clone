import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const loginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: actionTypes.LOGIN, payload: response });
    } catch (error) {
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: "Please check your email and password",
      });
    }
  };
};
