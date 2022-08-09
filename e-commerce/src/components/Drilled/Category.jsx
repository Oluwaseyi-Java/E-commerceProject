import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../contextApi/Context.api'
import CatItemCard from './CatItemCard'
import Modal from "./Modal"
const Category = () => {
    const { shopItems, isModal, modalContent, checkModal } = useGlobalContext();
    const [shopItem, setShopItem] = useState([]);

    const { category } = useParams();
    useEffect(() => {
        const newItems = shopItems.filter((item) => item.category === category)
        setShopItem(newItems)
    }, [category, shopItems]);


    return (
        <div className='CategorySection'>
            {isModal && <Modal content={modalContent} />}
            <h2>{category}</h2>
            <div className='CategorySectionItems'>
                {
                    shopItem.map((item, index) => {
                        return <CatItemCard
                            key={index}
                            name={item.name}
                            price={item.price}
                            imgUrl={item.image_url}
                            modal={checkModal}
                            description={item.description} />
                    })
                }
            </div>

        </div>
    )
}

export default Category