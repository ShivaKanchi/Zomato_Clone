import React from 'react'

const DeliverySmCard = ({ image, title }) => {
    return (
        <>
            <div className='lg:hidden bg-white shadow rounded-md w-24 md:w-56'>
                <div className='w-full h-24'>
                    <img
                        className='w-full h-full object-cover object-center rounded-t-md'
                        src={image}
                        alt={title}
                    />
                </div>
                <div>
                    <h3 className='text-sm my-1 text-center fomt-light'></h3>
                </div>
            </div>
        </>
    )
};
const DeliveryLgCard = ({ image, title }) => {
    return (
        <>

        </>
    )
};

const DeliveryCategoryCard = (props) => {
    return (
        <>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </>
    )
}

export default DeliveryCategoryCard