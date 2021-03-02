import { GET_USERS_LIST, GET_USERS_ID } from "./AbouteActTypes";

const AbinitialState = {
    data: [{
        id: "0",
        title: "سعید بایرامپور",
    }, ],
};

const AboutReducer = (state = AbinitialState, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: "1",
                        title: "shoghi",
                    },
                    {
                        id: "2",
                        title: "haghighi",
                    },
                ],
            };

            break;

        default:
            return state;
    }
};

export default AboutReducer;