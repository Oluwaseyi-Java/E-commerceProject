import React from 'react'
// import VirtualImg from "Virtual Reality.png"
// , Fade, Handler
//  ${ Fade.isFade ? 'reveal fade-bottom' : '' }`} ref={Handler}
import Zoom from "react-reveal"


const MoreCard = ({ imgUrl, description, date }) => {
    return (

        <Zoom>
            <div className="Card" >
                <div className='img'>
                    <img
                        alt='pic'
                        src={require('../../Images/Ecommerce-stock-image/' + imgUrl + '.png')} />
                </div>
                <h3>{description}</h3>
                <p>{date}</p>
            </div>
        </Zoom>



    )
}

export default MoreCard