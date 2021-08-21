import * as actionTypes from "../../redux/actions/actionTypes";
import { searchShows } from "../../redux/actions/searchActions/searchShow";
import { mockStore } from "../../setupTests";

const store = mockStore({});

describe("searchShow action", () => {
  it("should search a show", async () => {
    expect.assertions(1);
    await store.dispatch(searchShows("midsommar"));
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.SEARCH_SHOW,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
});
