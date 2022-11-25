import { combineReducers } from "redux";

//storage units
import auth from './auth/auth.reducer'
import user from './user/user.reducer'
const rootReducer = combineReducers({
    auth,
    user
});

export default rootReducer;