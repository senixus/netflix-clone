import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getUserShowList = (userId) => {
  return (dispatch) => {
    try {
      db.collection("mylist").onSnapshot((querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
     

        dispatch({
          type: actionTypes.GET_USER_SHOW_LIST,
          payload: { items, userId },
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
};
