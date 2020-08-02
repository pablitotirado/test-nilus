import { combineReducers } from "redux";
import reducerItems from "./reducer-items";
import reducerItemActive from "./reducer-active";
import reducerLeague from "./reducer-league";

const reducer = combineReducers({
  items: reducerItems,
  item: reducerItemActive,
  league: reducerLeague,
});

export default reducer;
