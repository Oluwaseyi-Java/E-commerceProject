import React from 'react'
import Categories from './Categories'
import Discount from './Discount'
import More from './More'
import Newsletter from './Newsletter'
import Overview from './Overview'
import ProductTypes from './ProductTypes'
import Services from './Services'


const Body = () => {
  return (
    <div>


      <Services />
      <Categories />
      <Overview />
      <ProductTypes />
      <Discount />
      <More />
      <Newsletter />

    </div>
  )
}

export default Body