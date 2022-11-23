import React, { useState } from 'react';

//components
import DeliveryCarousel from './DeliveryCarousel';
// import 
const Delivery = () => {
    const [restaurantlist, setRestaurantlist] = useState([]);
    return (
        <>

            <DeliveryCarousel />
            <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
                Delivery Restauraunts in Mumbai
            </h1>
            <div className='flex justify-between flex-wrap mt-5'>
                {restaurantlist.map((restaurant) => (
                    <>  </> // <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
}

export default Delivery