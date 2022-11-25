import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleAuth } from "../Redux/Reducers/auth/auth.action";

const GoogleAuth = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            dispatch(googleAuth(token)).then(() => navigate("/delivery"));
        }
    }, []);
    return <img src="https://i.pinimg.com/originals/b0/70/1a/b0701aa6ae2a696e7caf2f4a57eef5e8.jpg" />
}

export default GoogleAuth