import React from 'react'
//icons
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import Navbar from "../Components/Navbar";
// import ImageGrid from "../Components/Restaurant/ImageGrid";
// import InfoButton from "../Components/Restaurant/InfoButton";
// import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
// import Tabs from "../Components/Restaurant/Tabs";
// import CartContainer from "../Components/Cart/CartContainer";

const RestaurantLayout = ({ Component }) => ({ ...props }) => {
    return <>
        <Navbar />
        <div>
            <Component {...props} />
        </div>
    </>
}

export default RestaurantLayout


// <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
//    <ImageGrid images={}/>
//           <RestaurantInfo
//             name=""
//             restaurantRating=""
//             deliveryRating=""
//             cuisine=""
//             address=""
//           />
//           <div className="my-4 flex flex-wrap gap-3 mx-auto">
//             <InfoButton isActive="true">
//               <TiStarOutline /> Add Review
//             </InfoButton>
//             <InfoButton>
//               <RiDirectionLine /> Direction
//             </InfoButton>
//             <InfoButton>
//               <BiBookmarkPlus /> Bookmark
//             </InfoButton>
//             <InfoButton>
//               <RiShareForwardLine /> Share
//             </InfoButton>
//           </div>
//           <div className="my-10">
//             <Tabs />
//           </div>
//           <Component {...props} />
//         </div>
//         <CartContainer />