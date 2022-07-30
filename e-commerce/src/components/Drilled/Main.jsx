import React from 'react'
import HorizontalScroll from './HorizontalScroll'



const Main = ({ items }) => {
    
    return (
        <div>
            <div className='main'>
                <div className='main-items'>
{/**
category={category}
data={shopItems}
*/}
                  <HorizontalScroll  />
                </div>
            </div>

        </div>
    )
}

export default Main