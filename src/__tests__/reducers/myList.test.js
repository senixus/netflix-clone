import * as actionTypes from "../../redux/actions/actionTypes";
import { getUserShowListReducer } from "../../redux/reducers/myListReducers/getUserShowListReducer";
import { initialState } from "../../redux/reducers/initialState";

describe("myList reducer", () => {
  it("should return initial state", () => {
    expect(getUserShowListReducer(undefined, {})).toEqual(initialState);
  });

  it("should return getUserShowList", () => {
    const state = {
      getUserShowList: [],
    };
    const action = {
      type: actionTypes.GET_USER_SHOW_LIST,
      payload: {
        userId: { uid: 1 },
        items: [{ uid: 1 }],
      },
    };
    expect(getUserShowListReducer(state, action)).toEqual({
      getUserShowList: [
        {
          uid: 1,
        },
      ],
    });
  });
});
