import * as types from "./types";

const defaultState = {
  user: null,
  isLoggedIn: false,
}

export default function reducer(state = defaultState, action: any = {}) {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload, isLoggedIn: true }
    case types.LOGOUT_USER:
      return { ...state, user: {}, isLoggedIn: false }
    default:
      return state
  }
}
