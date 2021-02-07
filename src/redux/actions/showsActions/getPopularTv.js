import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getPopularTv = () => {
  return async (dispatch) => {
    try {
      const popular = await api.get(request.getPopularTv);

      dispatch({ type: actionTypes.GET_POPULAR_TV, payload: popular.data });
    } catch (error) {
      console.log(error);
    }
  };
};
