import React from 'react'
import Zoom from "react-reveal"

const CatItemCard = ({ imgUrl, price, name, modal, description }) => {
    return (
        <div className='ProductComponentContainer ComponentContainer'>
            <Zoom>
                <div className='containerImg'>
                    {<img src={imgUrl} alt="pic" />}
                </div>
                <h2>{name.length < 20 ? name : `${name.substring(0, 20) + "..."}`}</h2>
                <p>{`$${price}`}</p>
                <button onClick={() =>
                    modal(name, price, description, imgUrl)
                }>Order</button>
            </Zoom>
        </div>
    )
}

export default CatItemCard