import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getUserShowList = (user) => {
  return (dispatch) => {
    try {
      db.collection("mylist")
        .where("uid", "==", user)
        .onSnapshot((querySnapshot) => {
          const items = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          dispatch({
            type: actionTypes.GET_USER_SHOW_LIST,
            payload: items,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
