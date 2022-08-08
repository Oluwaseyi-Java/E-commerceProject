import React from 'react'
import bag from "../../Images/Ecommerce-stock-image/bag.png"
import Zoom from "react-reveal"

const ServicesItems = ({ imgUrl, title, description }) => {
    return (
        <div className='ServicesItemsParentContainer'>
            <Zoom>
                <div className='ServicesItems'>

                    <div className='img'>
                        <img src={bag} alt='pic' />
                    </div>
                    <div className='description'>
                        <h2>{title}</h2>
                        <p>{description} </p>
                    </div>
                </div>
            </Zoom>

        </div>

    )
}

export default ServicesItems