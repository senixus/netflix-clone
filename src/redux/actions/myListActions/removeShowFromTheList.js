import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const removeShowFromTheList = (showId) => {
  return async (dispatch) => {
    try {
      await db.collection("mylist").doc(showId).delete();
      dispatch({ type: actionTypes.REMOVE_SHOW_FROM_LIST });
    } catch (error) {
      console.log(error);
    }
  };
};
