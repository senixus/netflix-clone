import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getDramaTv = () => {
  return async (dispatch) => {
    try {
      const drama = await api.get(request.getDramaTvShows);

      dispatch({ type: actionTypes.GET_DRAMA_TV, payload: drama.data });
    } catch (error) {
      console.log(error);
    }
  };
};
