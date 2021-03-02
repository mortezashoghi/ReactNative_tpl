import { GET_USERS_LIST, GET_USERS_ID } from "./AbouteActTypes";

export const getuserslist = (users) => {
    return {
        type: GET_USERS_LIST,
        payload: {},
    };
};
export const getuserid = (userid) => {
    return {
        type: GET_USERS_ID,
        payload: {
            userid,
        },
    };
};