import React from 'react'
import { Outlet } from 'react-router-dom'

import RestaurantLayout from '../Layouts/Restaurant.layout';
const Restaurant = () => {
    return (<>
        <h2>Restaurant Page</h2>
        <Outlet />
    </>
    )
}

export default RestaurantLayout(Restaurant);