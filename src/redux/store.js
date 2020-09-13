import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import phoneBookReducers from "./phoneBookActions/phoneBookReducers";

const rootReducer = combineReducers({
  contacts: phoneBookReducers,
});
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
