import { combineReducers } from "redux";

//storage units
import auth from './auth/auth.reducer'
import user from './user/user.reducer'
import restaurant from './restaurant/restaurant.reducer'
import image from './image/image.reducer'
const rootReducer = combineReducers({
    auth,
    user,
    restaurant
});

export default rootReducer;