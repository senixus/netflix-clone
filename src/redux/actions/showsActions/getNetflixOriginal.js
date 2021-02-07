import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getNetflixOriginal = () => {
  return async (dispatch) => {
    try {
      const netflix = await api.get(request.getNetflixOriginal);

      dispatch({
        type: actionTypes.GET_NETFLIX_ORIGINAL,
        payload: netflix.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
