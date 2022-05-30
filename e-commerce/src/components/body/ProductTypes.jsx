import React from 'react'
import Products from './Products'

const ProductTypes = () => {
    return (
        <div className='productTypes'>

            <div className='ProductHeaderContainer'>
                <div className='productContainerTitle'>
                    <h1>Unde omnis</h1>
                </div>
                <div className='ProductCategory'>
                    <ul>
                        <li><a href='/'>Phones</a></li>
                        <li><a href='/'>Electronics</a></li>
                        <li><a href='/'>Appliances</a></li>
                        <li><a href='/'>Clothes</a></li>
                        <li><a href='/'>Kids</a></li>
                    </ul>
                </div>
            </div>
           <Products/>

        </div>
    )
}

export default ProductTypes