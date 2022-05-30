import React from 'react'
import VirtualImg from "../../Images/Ecommerce-stock-image/Virtual Reality.png"


const MoreCard = () => {
    return (

        <div className="MoreCard">
        
            <div className='Card'>
                <img alt='' src={VirtualImg } />
                <h3>Vel illum qui dolorem eum fugiat</h3>
                <p>June 01/2019</p>
            </div>
            <div className='Card'>
                <img alt='' src={VirtualImg } />
                <h3>Vel illum qui dolorem eum fugiat</h3>
                <p>June 01/2019</p>
            </div>
            <div className='Card'>
                <img alt='' src={VirtualImg } />
                <h3>Vel illum qui dolorem eum fugiat</h3>
                <p>June 01/2019</p>
            </div>
        
        </div>
  )
}

export default MoreCard