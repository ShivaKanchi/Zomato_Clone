import React, { useState } from 'react';
import RestaurantCard from '../RestaurantCard';

//components
import DeliveryCarousel from './DeliveryCarousel';
// import 
const Delivery = () => {
    const [restaurantlist, setRestaurantlist] = useState([
        {
            _id: "124ksjf435245jv34fg3",
            isPro: true,
            isOff: true,
            name: "Nathu's Sweets",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Mithai",
                "South Indian",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
        {
            _id: "sdffdsadadsfadfadsfadsf",
            isPro: true,
            isOff: false,
            name: "Master Koii's",
            restaurantReviewValue: "4.6",
            cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
            averageCost: "600",
        },
        {
            _id: "124ksjf435245jfdfv34fg3",
            isPro: true,
            isOff: true,
            name: "Nathu's Sweets",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Mithai",
                "South Indian",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
    ]);
    return (
        <>

            <DeliveryCarousel />
            <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
                Delivery Restauraunts in Mumbai
            </h1>
            <div className='flex justify-between flex-wrap mt-5'>
                {restaurantlist.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
}

export default Delivery