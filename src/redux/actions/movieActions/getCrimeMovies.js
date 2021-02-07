import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getCrimeMovies = () => {
  return async (dispatch) => {
    try {
      const crime = await api.get(request.getCrimeMovies);

      dispatch({ type: actionTypes.GET_CRIME_MOVIES, payload: crime.data });
    } catch (error) {
      console.log(error);
    }
  };
};
