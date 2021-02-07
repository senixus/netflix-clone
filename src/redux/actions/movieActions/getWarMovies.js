import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getWarMovies = () => {
  return async (dispatch) => {
    try {
      const war = await api.get(request.getWarMovies);

      dispatch({ type: actionTypes.GET_WAR_MOVIES, payload: war.data });
    } catch (error) {
      console.log(error);
    }
  };
};
