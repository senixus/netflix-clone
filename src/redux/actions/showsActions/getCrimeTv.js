import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getCrimeTv = () => {
  return async (dispatch) => {
    try {
      const crime = await api.get(request.getCrimeTvShows);

      dispatch({ type: actionTypes.GET_CRIME_TV, payload: crime.data });
    } catch (error) {
      console.log(error);
    }
  };
};
