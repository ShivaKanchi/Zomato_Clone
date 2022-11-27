import { combineReducers } from "redux";

//storage units
import auth from './auth/auth.reducer'
import user from './user/user.reducer'
import restaurant from './restaurant/restaurant.reducer'
import image from './image/image.reducer'
import review from './review/review.reducer'
import food from './food/food.reducer'
const rootReducer = combineReducers({
    auth,
    user,
    restaurant,
    image,
    review,
    food
});

export default rootReducer;