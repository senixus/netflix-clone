import * as actionTypes from "../../redux/actions/actionTypes";
import { mockStore } from "../../setupTests";
import { currentUserAction } from "../../redux/actions/authActions/currentUserActions";
import { deleteAction } from "../../redux/actions/authActions/deleteActions";
import { loginAction } from "../../redux/actions/authActions/loginActions";
import { logoutActions } from "../../redux/actions/authActions/logoutActions";
import { registerAction } from "../../redux/actions/authActions/registerActions";
import {
  updateEmail,
  updatePassword,
} from "../../redux/actions/authActions/updateProfileActions";

jest.mock("../../firebase/firebase.js", () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve(),
    currentUser: {
      delete: () => Promise.resolve(),
      updateEmail: () => Promise.resolve(),
      updatePassword: () => Promise.resolve(),
    },
    signOut: () => Promise.resolve(),
    createUserWithEmailAndPassword: () => Promise.resolve(),
    onAuthStateChanged: () => Promise.resolve(true),
  },
}));

describe("auth action", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  //   it("should run currentUser action", async () => {
  //     expect.assertions(1);

  //     await store.dispatch(currentUserAction());
  //     const action = store.getActions();

  //     const expectedAction = {
  //       type: actionTypes.CURRENT_USER,
  //     };

  //     expect(action[0]).toEqual(expectedAction);
  //   });

  it("should delete user account", async () => {
    expect.assertions(1);

    await store.dispatch(deleteAction());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.DELETE_ACCOUNT,
    };

    expect(action[0]).toEqual(expectedAction);
  });

  it("should run login action", async () => {
    expect.assertions(1);

    await store.dispatch(loginAction());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.LOGIN,
    };

    expect(action[0]).toEqual(expectedAction);
  });

  it("should run signOut action", async () => {
    expect.assertions(1);

    await store.dispatch(logoutActions());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.LOGOUT,
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("should run register action", async () => {
    expect.assertions(1);

    await store.dispatch(registerAction());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.REGISTER,
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("should run updateEmail action", async () => {
    expect.assertions(1);

    await store.dispatch(updateEmail());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.UPDATE_EMAIL,
    };

    expect(action[0]).toEqual(expectedAction);
  });

  it("should run updatePassword action", async () => {
    expect.assertions(1);

    await store.dispatch(updatePassword());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.UPDATE_PASSWORD,
    };

    expect(action[0]).toEqual(expectedAction);
  });
});
