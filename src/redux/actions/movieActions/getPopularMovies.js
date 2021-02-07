import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getPopularMovies = () => {
  return async (dispatch) => {
    try {
      const popular = await api.get(request.getPopularMovies);

      dispatch({ type: actionTypes.GET_POPULAR_MOVIES, payload: popular.data });
    } catch (error) {
      console.log(error);
    }
  };
};
