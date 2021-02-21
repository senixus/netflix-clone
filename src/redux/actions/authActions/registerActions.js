import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const registerAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      dispatch({ type: actionTypes.REGISTER, payload: response });
      console.log(response);
    } catch (error) {
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: "Please check your email and password",
      });
    }
  };
};
