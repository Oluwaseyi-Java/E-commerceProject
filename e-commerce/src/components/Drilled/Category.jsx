import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../contextApi/Context.api'
import Search from '../body/Search'
import CatItemCard from './CatItemCard'
import Modal from "./Modal"


const data = () => {
    let searchedData = localStorage.getItem("searchedData");
    if (searchedData) {
        return JSON.parse(localStorage.getItem("searchedData"))
    }
    else {
        return []
    }
}

const Category = () => {
    const { shopItems, isModal, modalContent, checkModal, checkIfIsCategory } = useGlobalContext();
    const [shopItem, setShopItem] = useState([]);

    const { category } = useParams();
    useEffect(() => {
        checkIfIsCategory(category)

        if (category === "search") {
            setShopItem(data)
        } else {
            const newItems = shopItems.filter((item) => item.category === category)
            setShopItem(newItems)
        }
    }, [category, shopItems, checkIfIsCategory]);


    return (
        <div className='CategorySection'>
            {isModal && <Modal content={modalContent} />}
            <h2>{category}</h2>
            {
                shopItem.length !== 0
                    ?
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
                    :
                    <div className='NoItem'>
                        <p>No match</p>
                        <h4>Search for other item</h4>
                        <Search />
                    </div>
            }

        </div>
    )
}

export default Category