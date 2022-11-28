import axios from "axios";
import dotenv from "dotenv";
import { GET_FOOD, GET_FOOD_LIST } from "./food.type";

export const getFood = (foodId) => async (dispatch) => {
    try {
        const Food = await axios({
            method: "GET",
            url: `${REACT_APPCLIENT_URL}/food/${foodId}`,
        });
        return dispatch({ type: GET_FOOD, payload: Food.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};
export const getFoodList = (menuId) => async (dispatch) => {
    try {
        const Menu = await axios({
            method: "GET",
            url: `${REACT_APPCLIENT_URL}/menu/list/${menuId}`,
        });
        return dispatch({ type: GET_FOOD_LIST, payload: Menu.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};