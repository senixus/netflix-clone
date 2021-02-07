import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getTrendingTv = () => {
  return async (dispatch) => {
    try {
      const trending = await api.get(request.getTrendingTv);

      dispatch({ type: actionTypes.GET_TRENDING_TV, payload: trending.data });
    } catch (error) {
      console.log(error);
    }
  };
};
