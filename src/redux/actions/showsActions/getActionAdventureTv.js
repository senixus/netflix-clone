import * as actionTypes from "../actionTypes";
import api from "../../../api/api";
import { request } from "../../../requests/requests";

export const getActionAdventureTv = () => {
  return async (dispatch) => {
    try {
      const action = await api.get(request.getActionAdventureTvShows);

      dispatch({ type: actionTypes.GET_ACTİON_TV, payload: action.data });
    } catch (error) {
      console.log(error);
    }
  };
};
