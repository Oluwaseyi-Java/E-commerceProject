import React from 'react'
import HeadsetImg from "../../Images/Ecommerce-stock-image/toppng.com-headphone-669x846.png"
import cartImg from "../../Images/Ecommerce-stock-image/Cart-Transparent-PNG.png"




const Products = () => {
    return (

        <div className='ProductContainer'>

            <div className='ProductComponentContainer'>
                <div className='containerImg'>
                    <img src={HeadsetImg} alt="pic" />
                </div>
                <h2>Nemo enim ipsam</h2>
                <p>$180</p>
                <img  className='cart' src={cartImg} alt="pic" />
            </div>
            <div className='ProductComponentContainer'>
                <div className='containerImg'>
                    <img src={HeadsetImg} alt="pic" />
                </div>
                <h2>Nemo enim ipsam</h2>
                <p>$180</p>
                <img className='cart'  src={cartImg} alt="pic" />
            </div>
            <div className='ProductComponentContainer'>
                <div className='containerImg'>
                    <img src={HeadsetImg} alt="pic" />
                </div>
                <h2>Nemo enim ipsam</h2>
                <p>$180</p>
                <img  className='cart' src={cartImg} alt="pic" />
            </div>


        </div>
    )
}

export default Products

