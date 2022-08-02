import React, { useState } from 'react'
import HorizontalScroll from './HorizontalScroll'
import { ShopData } from '../../UIDatas'
import "./Main.css"
import Modal from './Modal'

const allCategories = [...new Set(ShopData.products.map((product) => product.category))]

const Main = ({ items }) => {
    const [categories] = useState(allCategories);
    const [isModal, setIsModal] = useState(false)

    const [modalContent, setModalContent] = useState({
        name: "",
        price: "",
        description: "",
        imgUrl: ""
    })

    const checkModal = (name, price, description, imgUrl) => {

        setModalContent({
            ...modalContent,
            name: name,
            price: price,
            description: description,
            imgUrl: imgUrl
        })
        setIsModal(true)
    }

    return (
        <div>
            {isModal && <Modal content={modalContent} closeModal={setIsModal} />}
            <div className='main'>
                <div className='main-items'>
                    {categories.map((item, index) => {
                        return <HorizontalScroll key={index} modal={checkModal} category={item} />
                    })
                    }
                </div>
            </div>

        </div>
    )
}

export default Main