import { combineReducers } from "redux";
import auth from "../state/Auth/reducer";

const reducer = combineReducers({
  auth,
})

export default reducer
