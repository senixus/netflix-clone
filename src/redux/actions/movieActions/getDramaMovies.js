import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getDramaMovies = () => {
  return async (dispatch) => {
    try {
      const drama = await api.get(request.getDramaMovies);

      dispatch({ type: actionTypes.GET_DRAMA_MOVIES, payload: drama.data });
    } catch (error) {
      console.log(error);
    }
  };
};
