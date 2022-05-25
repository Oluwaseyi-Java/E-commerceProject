import React from 'react'
import HeadsetImg from "../../Images/Ecommerce-stock-image/toppng.com-headphone-669x846.png"

import cartImg from "../../Images/Ecommerce-stock-image/Cart-Transparent-PNG.png"



const Products = () => {
    return (
        <div className='ProductComponentContainer'>
            <img src={HeadsetImg} alt="pic" />
            <h2>Nemo enim ipsam</h2>
            <p>$180</p>
            <img src={cartImg} alt="pic" />
        </div>
    )
}

export default Products

