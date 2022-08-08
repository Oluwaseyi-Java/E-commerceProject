import React from 'react'
import Zoom from "react-reveal"

// import img from "../../Images/Ecommerce-stock-image/kisspng-laptop-ideapad-lenovo-solid-state-drive-computer-platinum-coins-5add19910d75f1.1518534915244394410552.png"
const CategoryItem = ({ imgUrl }) => {
    return (
        <div className='ItemParentClass'>
            <Zoom>
                <div className='item'>
                    <div className='img'>
                        <img src={require('../../Images/Ecommerce-stock-image/' + imgUrl + '.png')} alt='pic' />
                    </div>
                    <p><a href='/accessories'>SmartPhone</a></p>
                    <p><a href='/accessories'>Components</a></p>
                    <p><a href='/accessories'>Specifications</a></p>
                    <p><a href='/accessories'>Similar</a></p>
                    <h4><a href='/all'>See all</a></h4>
                </div>
            </Zoom>

        </div>
    )
}

export default CategoryItem