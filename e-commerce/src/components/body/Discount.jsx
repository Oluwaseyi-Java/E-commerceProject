import React from 'react'
import Headset from "../../Images/Ecommerce-stock-image/headphone-png-854118.png"


const Discount = () => {
  return (
    <div className='Discount'>

      <div className='DiscountHeader'>
        <div className='DiscountHeaderTitle'><h2>Magni dolores</h2></div>
        <div className='DiscountHeaderTimer'><h2>21 : 56 : 14 : 42</h2></div>
      </div>

      <div className='DiscountBody'>
        <div className='ProductCategory'>
          <div className='Container'>
            <h2>Voluptate</h2>
            <p>Phones</p>
            <p>Electronics</p>
            <p>Appliances</p>
            <p>Clothes</p>
            <p>Kids</p>
          </div>
        </div>

        <div className='ProductImg'><img src={Headset} alt="pic" /></div>

        <div className='ProductDescription'>
          <h3>Quis autem vel eum iure reprehenderit</h3>
          <p className='price'>$199 <span>$299</span> </p>

          <p className='description'>
            Since version 4, Animate.css uses custom properties
            (also known as CSS variables) to define the animation's duration,izable.
            delay, and iterations. This makes Animate.css very flexible and customizable
          </p>

          <div>
            <p>Solid:120</p>
            <p>Quantity:500</p>
          </div>
          <input type="range" min="0" max="500" />

          <button>Add to cart</button>

        </div>
      </div>
    </div>
  )
}

export default Discount