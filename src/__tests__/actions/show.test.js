import * as actionTypes from "../../redux/actions/actionTypes";
import { mockStore } from "../../setupTests";
import { getActionAdventureTv } from "../../redux/actions/showsActions/getActionAdventureTv";
import { getCrimeTv } from "../../redux/actions/showsActions/getCrimeTv";
import { getDramaTv } from "../../redux/actions/showsActions/getDramaTv";
import { getNetflixOriginal } from "../../redux/actions/showsActions/getNetflixOriginal";
import { getPopularTv } from "../../redux/actions/showsActions/getPopularTv";
import { getTrendingTv } from "../../redux/actions/showsActions/getTrendingTv";
import { getWarTv } from "../../redux/actions/showsActions/getWarTv";

describe("movie actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("should return action shows", async () => {
    expect.assertions(1);
    await store.dispatch(getActionAdventureTv());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_ACTION_TV,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });

  it("should return crime shows", async () => {
    expect.assertions(1);
    await store.dispatch(getCrimeTv());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_CRIME_TV,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return drama shows", async () => {
    expect.assertions(1);
    await store.dispatch(getDramaTv());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_DRAMA_TV,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return netflix original shows", async () => {
    expect.assertions(1);
    await store.dispatch(getNetflixOriginal());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_NETFLIX_ORIGINAL,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return popular shows", async () => {
    expect.assertions(1);
    await store.dispatch(getPopularTv());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_POPULAR_TV,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return trending shows", async () => {
    expect.assertions(1);
    await store.dispatch(getTrendingTv());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_TRENDING_TV,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
  it("should return war shows", async () => {
    expect.assertions(1);
    await store.dispatch(getWarTv());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_WAR_TV,
    };
    expect(action[0].type).toEqual(expectedAction.type);
  });
});
