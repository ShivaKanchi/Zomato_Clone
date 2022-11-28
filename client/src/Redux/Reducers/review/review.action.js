import axios from "axios";
import dotenv from "dotenv";
// redux
import { GET_REVIEW, POST_REVIEW } from "./review.type";

export const getReview = (resId) => async (dispatch) => {
    try {
        const reviewList = await axios({
            method: "GET",
            url: `${REACT_APPCLIENT_URL}/review/${resId}`,
        });
        // console.log("getting reviews", reviewList.data)
        return dispatch({ type: GET_REVIEW, payload: reviewList.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const postReview = (reviewData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: `${REACT_APPCLIENT_URL}/review/new`,
            data: { reviewData },
        });

        return dispatch({ type: POST_REVIEW, payload: reviewData });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};