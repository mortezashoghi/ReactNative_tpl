import {
  REGISTER_NEW_USER,
  GET_ALL_USERS,
  FORGET_PASSWORD,
  UPDATE_USER_INFO,
  REMOVE_USER,
  GET_USER,
} from "./ActionTypes";

export const registerNewUser = (info) => {
  return {
    type: REGISTER_NEW_USER,
    payload: {
      mobile: info.mobile,
      email: info.email,
      agree: info.agree,
    },
  };
};

export const getAllUsers = () => {
  return {
    action: GET_ALL_USERS,
    payload: {},
  };
};

export const getUserInfo = (id) => {
  return {
    action: GET_USER,
    payload: {
      id,
    },
  };
};
