import {
    REGISTER_NEW_USER,
    GET_ALL_USERS,
    FORGET_PASSWORD,
    UPDATE_USER_INFO,
    REMOVE_USER,
    GET_USER,
} from "./ActionTypes";
import registeration from "../../screens/users/registeration";

const initialStatereg = {
    result: false,
};

const regReducer = (state = initialStatereg, action) => {
    switch (action.type) {
        case REGISTER_NEW_USER:
            if (1 == 1) {
                //state.result = true;
                return {...state, result: true };
            } else return state.result;

        default:
            return state;
    }
};

export default regReducer;