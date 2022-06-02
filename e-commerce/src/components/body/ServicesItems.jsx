import React from 'react'
import bag from "../../Images/Ecommerce-stock-image/bag.png"

const ServicesItems = ({ ImgUrl, title, description }) => {
    return (
        <div className='ServicesItemsParentContainer'>

            <div className='ServicesItems'>

                <div className='img'>
                    <img src={bag} alt='pic' />
                </div>
                <div className='description'>
                    <h2>{title}</h2>
                    <p>{description} </p>
                </div>
            </div>

        </div>

    )
}

export default ServicesItems