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
        window.location.reload();
        return dispatch({ type: SIGN_IN, payload: userData });
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
