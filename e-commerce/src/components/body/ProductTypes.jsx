import React, { useState, useEffect } from 'react'
import Products from './Products'

import { ShopData } from "../../UIDatas"
import { productTypeswData } from '../../DataApi'

const allCategories = [...new Set(ShopData.products.map((product) => product.category))]


const ProductTypes = () => {

    const [categories, setCategories] = useState(allCategories);


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
                        {categories.map((category, index) => {
                            return <li key={index} ><a href={`/category/${category}`}>{category}</a></li>

                        })}
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