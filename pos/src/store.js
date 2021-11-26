import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { forgotReducer, loginReducer } from "./reducers/userReducer";
const middleware = [thunk];

const store = createStore(combineReducers({
  user: loginReducer,
  forgotPassword: forgotReducer}),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store; 