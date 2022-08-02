import React from 'react'
import Overview from './Overview'
import ProductTypes from './ProductTypes'
import Services from './Services'
import Categories from './Categories'
import Discount from './Discount'
import More from './More'

const Home = () => {

    return (
        <div>
            <Services />
            <Categories />
            <Overview />
            <ProductTypes />
            <Discount />
            <More />

        </div>
    )
}

export default Home
