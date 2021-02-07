import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getTrendingMovies = () => {
  return async (dispatch) => {
    try {
      const trending = await api.get(request.getTrendingMovies);

      dispatch({
        type: actionTypes.GET_TRENDING_MOVIES,
        payload: trending.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
