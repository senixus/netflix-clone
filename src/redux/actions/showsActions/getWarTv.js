import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getWarTv = () => {
  return async (dispatch) => {
    try {
      const war = await api.get(request.getWarTvShows);

      dispatch({ type: actionTypes.GET_WAR_TV, payload: war.data });
    } catch (error) {
      console.log(error);
    }
  };
};
