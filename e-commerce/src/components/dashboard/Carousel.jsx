import React from 'react'
import img from "../../Images/Ecommerce-stock-image/carousel_img.png"
import prev from "../../Images/Ecommerce-stock-image/carousel_prev.png"
import next from "../../Images/Ecommerce-stock-image/carousel_next.png"



const Carousel = () => {
  return (
    <div className='carousel'>
      <div className='about'>
        <p>MINIM VENIAM</p>
        <h1>Ut labore et dolore</h1>
        <button>Buy now</button>
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