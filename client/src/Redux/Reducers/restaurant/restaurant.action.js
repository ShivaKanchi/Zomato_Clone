import axios from "axios";
// redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: `http://localhost:4000/restaurant/?city=Mumbai`,
        });
        //  console.log("niiii", restaurantList.data.restuarants);
        return dispatch({
            type: GET_RESTAURANT,
            payload: restaurantList.data.restuarants,
        });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getSpecificRestaurant = (_id) => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: `http://localhost:4000/restaurant/${_id}`,
        });
        // console.log("yo", restaurantList.data.restuarant)
        return dispatch({
            type: GET_SPECIFIC_RESTAURANT,
            payload: restaurantList.data.restuarant,
        });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};