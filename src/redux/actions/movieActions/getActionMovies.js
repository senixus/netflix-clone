import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getActionMovies = () => {
  return async (dispatch) => {
    try {
      const action = await api.get(request.getActionMovies);

      dispatch({ type: actionTypes.GET_ACTION_MOVIES, payload: action.data });
    } catch (error) {
      console.log(error);
    }
  };
};
