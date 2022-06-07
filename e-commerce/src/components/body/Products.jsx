import React from 'react'
// import HeadsetImg from "toppng.com-headphone-669x846.png"
import cartImg from "../../Images/Ecommerce-stock-image/Cart-Transparent-PNG.png"




const Products = ({ imgUrl,price,name}) => {
    return (


        <div className='ProductComponentContainer'>
            <div className='containerImg'>
                <img src={require('../../Images/Ecommerce-stock-image/'+imgUrl+'.png')} alt="pic" />
            </div>
            <h2>{ name}</h2>
            <p>{ `$${price}`}</p>
            <img className='cart' src={cartImg} alt="pic" />
        </div>


    )
}

export default Products

