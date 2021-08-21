import * as actionTypes from "../../redux/actions/actionTypes";
import { mockStore } from "../../setupTests";
import { addShowToList } from "../../redux/actions/myListActions/addShowToList";
import { getUserShowList } from "../../redux/actions/myListActions/getUserShowList";
import { removeShowFromTheList } from "../../redux/actions/myListActions/removeShowFromTheList";

jest.mock("../../firebase/firebase.js", () => ({
  db: {
    collection: () => ({
      doc: () => ({
        delete: () => Promise.resolve(),
      }),
      add: () => Promise.resolve(),
      get: jest.fn().mockReturnValue({
        docs: [],
      }),
    }),
  },
}));

describe("myList action", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should add a show to list ", async () => {
    expect.assertions(1);
    await store.dispatch(addShowToList());
    const action = store.getActions();

    const expectedAction = {
      type: actionTypes.ADD_SHOW_TO_LIST,
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("should remove a show from the list", async () => {
    expect.assertions(1);
    await store.dispatch(removeShowFromTheList());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.REMOVE_SHOW_FROM_LIST,
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("should return show list", async () => {
    expect.assertions(1);
    await store.dispatch(getUserShowList());
    const action = store.getActions();

    const expectedAction = {
      type: actionTypes.GET_USER_SHOW_LIST,
      payload: {
        items: [],
        userId: undefined,
      },
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
