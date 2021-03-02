import * as actionTypes from "../actionTypes";
import { request } from "../../../requests/requests";
import api from "../../../api/api";

export const searchShows = (show) => {
  return async (dispatch) => {
    try {
      const response = await api.get(request.searchShows + `&query=${show}`);

      dispatch({ type: actionTypes.SEARCH_SHOW, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
