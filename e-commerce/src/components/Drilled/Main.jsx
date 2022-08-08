import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../contextApi/Context.api'
import HorizontalScroll from './HorizontalScroll'
import "./Main.css"
import Modal from './Modal'

const Main = () => {
    const { categories, isModal, modalContent, checkModal, checkIfIsOpen } = useGlobalContext();

    const { all } = useParams();
    useEffect(() => {
        checkIfIsOpen(all)
    }, [all, checkIfIsOpen])
    return (
        <div>

            {isModal && <Modal content={modalContent} />}
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