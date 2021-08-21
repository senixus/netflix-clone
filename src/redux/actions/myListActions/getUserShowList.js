import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getUserShowList = (userId) => {
  return async (dispatch) => {
    try {
      const response = await db.collection("mylist").get();

      const items = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch({
        type: actionTypes.GET_USER_SHOW_LIST,
        payload: { items, userId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
