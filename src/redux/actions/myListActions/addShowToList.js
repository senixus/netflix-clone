import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const addShowToList = (uid, movie) => {
  return async (dispatch) => {
    try {
      await db.collection("mylist").add({
        uid,
        movie,
      });

      dispatch({ type: actionTypes.ADD_SHOW_TO_LIST, payload: movie });
    } catch (error) {
      console.log(error);
    }
  };
};
