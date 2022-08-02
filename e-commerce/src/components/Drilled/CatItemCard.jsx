import React from 'react'

const CatItemCard = ({ imgUrl, price, name, modal, description }) => {


    return (

        <div className='ProductComponentContainer ComponentContainer'>
            <div className='containerImg'>
                {<img src={imgUrl} alt="pic" />}
            </div>
            <h2>{name.length < 20 ? name : `${name.substring(0, 20) + "..."}`}</h2>
            <p>{`$${price}`}</p>
            <button onClick={() =>
                modal(name, price, description, imgUrl)
            }>Add to Cart</button>

        </div>
    )
}

export default CatItemCard