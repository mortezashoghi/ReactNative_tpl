import { combineReducers } from "redux";
import reducer from "./test/reducers/reducers";
import userReducer from "./users/userReducer";
import todoReducer from "./todo/todoReducer";
import AboutReducer from "./About/AbouteReducers";

const rootreducer = combineReducers({
    reducer,
    userReducer,
    todoReducer,
    AboutReducer,

    //other reducers user or market
});
export default rootreducer;