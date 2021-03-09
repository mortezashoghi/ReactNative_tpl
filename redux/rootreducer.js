import { combineReducers } from "redux";
import reducer from "./test/reducers/reducers";
import userReducer from "./users/userReducer";
import todoReducer from "./todo/todoReducer";
import AboutReducer from "./About/AbouteReducers";
import regReducer from "./registeration/RegReducer";
const rootreducer = combineReducers({
  reducer,
  userReducer,
  todoReducer,
  AboutReducer,
  regReducer,

  //other reducers user or market
});
export default rootreducer;
