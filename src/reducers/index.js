import { combineReducers } from "redux";
import reducerItems from "./reducer-people";

const reducer = combineReducers({ items: reducerItems });

export default reducer;
