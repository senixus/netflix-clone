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
    } catch (error) {
      console.log(error);
    }
  };
};
