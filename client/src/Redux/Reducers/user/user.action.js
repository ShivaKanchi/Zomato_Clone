import axios from "axios";
import dotenv from "dotenv";
// redux types
import { GET_USER, SELF, CLEAR_USER } from "./user.type";

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `${REACT_APPCLIENT_URL}/user/${_id}`,
        });

        return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getMySelf = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `${REACT_APPCLIENT_URL}/user/`,
        });

        //        console.log(User.data.user);

        return dispatch({ type: SELF, payload: { ...User.data.user } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const clearUser = () => async (dispatch) => {
    try {
        return dispatch({ type: CLEAR_USER, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};