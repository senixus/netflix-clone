import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const deleteAction = () => {
  return async (dispatch) => {
    try {
      await auth.currentUser.delete();
      dispatch({ type: actionTypes.DELETE_ACCOUNT });
    } catch (error) {
      console.log(error);
    }
  };
};
