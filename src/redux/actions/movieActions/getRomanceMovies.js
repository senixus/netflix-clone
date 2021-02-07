import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getRomanceMovies = () => {
  return async (dispatch) => {
    try {
      const romance = await api.get(request.getRomanceMovies);

      dispatch({ type: actionTypes.GET_ROMANCE_MOVIES, payload: romance.data });
    } catch (error) {
      console.log(error);
    }
  };
};
