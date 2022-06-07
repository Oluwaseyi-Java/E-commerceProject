import React from 'react'
// import VirtualImg from "Virtual Reality.png"


const MoreCard = ({ imgUrl, description, date }) => {
    return (


        <div className='Card'>
            <img
                alt='pic'
                src={require('../../Images/Ecommerce-stock-image/' + imgUrl + '.png')} />
            <h3>{description}</h3>
            <p>{date}</p>
        </div>



    )
}

export default MoreCard