import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Items from './Items'
import { ShopData } from "../../UIDatas"
import CatItemCard from './CatItemCard'

const Category = () => {
    const [shopItems, setShopItems] = useState([]);

    const { category } = useParams();
    console.log(category)

    const filterItems = (category) => {
        const newItems = ShopData.products.filter((item) => item.category === category)
        setShopItems(newItems)
    }

    useEffect(() => {
        filterItems(category);
    }, [category]);


    return (
        <div className='CategorySection'>
            {
                shopItems.map((item, index) => {
                    return <CatItemCard
                        key={index}
                        name={item.name}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        description={item.description} />

                })
            }

        </div>
    )
}

export default Category