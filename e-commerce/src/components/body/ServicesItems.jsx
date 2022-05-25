import React from 'react'
import img from "../../Images/Ecommerce-stock-image/bag.png"

const ServicesItems = () => {
  return (
      <div>
      
      <div className='ServicesItems'>

              <div className='img'>
                  <img src={img} alt='pic' />
              </div>
              <div className='description'>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum lorent  lorent la porees porees bouir
                      rem ipsum       </p>
              </div>
          </div>
      <div className='ServicesItems'>

              <div className='img'>
                  <img src={img} alt='pic' />
              </div>
              <div className='description'>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum lorent ipsum  la porees bouir rem ipsum   </p>
              </div>
          </div>
      <div className='ServicesItems'>

              <div className='img'>
                  <img src={img} alt='pic' />
              </div>
              <div className='description'>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum lorent la porees la porees bouir
                      rem ipsum       </p>
              </div>
          </div>
      
      </div>
    
  )
}

export default ServicesItems