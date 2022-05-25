import React from 'react'
import Categories from './Categories'
import Overview from './Overview'
import ProductTypes from './ProductTypes'
import Services from './Services'

const Body = () => {
  return (
      <div>
      
          <Services/>
          <Categories />
          <Overview />
          <ProductTypes/>
      </div>
  )
}

export default Body