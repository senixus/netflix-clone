import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const logoutActions = () => {
  return async (dispatch) => {
    try {
      const response = await auth.signOut();
      dispatch({ type: actionTypes.LOGOUT, payload: response });
    } catch (error) {
      console.log(error);
    }
  };
};
