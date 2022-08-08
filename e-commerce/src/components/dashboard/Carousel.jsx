import React from 'react'
import img from "../../Images/Ecommerce-stock-image/carousel_img.png"
import prev from "../../Images/Ecommerce-stock-image/carousel_prev.png"
import next from "../../Images/Ecommerce-stock-image/carousel_next.png"



const Carousel = () => {
  return (
    <div className='carousel'>
      <div className='about'>
      <h1>BUY 50 ITEMS AND GET 1 FREE</h1>
      <p>In our mid-year discount, we make shopping easy for our buyers. Buy 50 items and we will give you a phone. Lets go Shopping.</p>
        <button
          onClick={() => {
            window.location.assign("/all")
          }}
        >Shop now</button>
      </div>

      <div className='product'>
        <img className='product' src={img} alt='pic' />
        <img className='previous' src={prev} alt='pic' />
        <img className='next' src={next} alt='pic' />

      </div>
    </div>
  )
}

export default Carousel