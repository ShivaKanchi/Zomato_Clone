import axios from 'axios'
//redux types
import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH } from './auth.type'

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POSt",
            url: "http://localhost:4000/auth/login",
            data: { credentials: userData }
        });
        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));
        // window.location.reload();
        return dispatch({ type: SIGN_IN, payload: userData });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}


export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POSt",
            url: "http://localhost:4000/auth/register",
            data: { credentials: userData }
        });
        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));
        //  window.location.reload();
        return dispatch({ type: SIGN_UP, payload: userData });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}



export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("zomatoUser")
        window.location.href = "http://localhost:3000"
        return dispatch({ type: SIGN_OUT, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const googleAuth = (token) => async (dispatch) => {
    try {
        localStorage.setItem("zomatoUser", JSON.stringify({ token }))
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return dispatch({ type: GOOGLE_AUTH, payload: { token } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}


//example
// export const signIn = (userData) => async (dispatch) => {
//     try {

//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// }
