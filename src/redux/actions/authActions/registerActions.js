import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const registerAction = (email, password, username) => {
  return async (dispatch) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        response.user.updateProfile({
          displayName: username,
        });
      }
      dispatch({ type: actionTypes.REGISTER, payload: response });
    } catch (error) {
      dispatch({
        type: actionTypes.SHOW_ERROR,
        payload: "Please check your email and password",
      });
    }
  };
};
