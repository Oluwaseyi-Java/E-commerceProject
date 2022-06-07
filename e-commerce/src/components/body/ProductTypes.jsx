import React from 'react'
import Products from './Products'
import { productTypeswData } from '../../DataApi'
const ProductTypes = () => {

    const Product = productTypeswData.map(data => {
        return (

            <Products
                key={data.id}
                imgUrl={data.imgUrl}
                price={data.price}
                name={data.description}
            />
        )
    })
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

            <div className='ProductContainer'>

            {Product}
            </div>
        </div>
    )
}

export default ProductTypes