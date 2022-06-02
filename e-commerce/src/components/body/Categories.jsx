import React from 'react'
import img from "../../Images/Ecommerce-stock-image/kisspng-laptop-ideapad-lenovo-solid-state-drive-computer-platinum-coins-5add19910d75f1.1518534915244394410552.png"
const Categories = () => {
    return (
        <div className='Category'>

            <div className='CategoryHeader'>
                <h3>NATUS ERROR</h3>
                <h2>Unde omnis iste</h2>
                <p>Lor em ipsum la  e la bour soir.un practos lepradus ondes palu em ipsum la vorade e la bour soir.unondes palu.</p>
            </div>

            <div className='CategoryItem'>

                <div className='item'>
                    <img src={img} alt='pic' />
                    <p><a href='/'>SmartPhone</a></p>
                    <p><a href='/'>Components</a></p>
                    <p><a href='/'>Specifications</a></p>
                    <p><a href='/'>Similar</a></p>
                    <h4><a href='/'>See all</a></h4>
                </div>

                <div className='item'>
                    <img src={img} alt='pic' />
                    <p><a href='/'>SmartPhone</a></p>
                    <p><a href='/'>Components</a></p>
                    <p><a href='/'>Specifications</a></p>
                    <p><a href='/'>Similar</a></p>
                    <h4><a href='/'>See all</a></h4>
                </div>

                <div className='item'>
                    <img src={img} alt='pic' />
                    <p><a href='/'>SmartPhone</a></p>
                    <p><a href='/'>Components</a></p>
                    <p><a href='/'>Specifications</a></p>
                    <p><a href='/'>Similar</a></p>
                    <h4><a href='/'>See all</a></h4>
                </div>

                <div className='item'>
                    <img src={img} alt='pic' />
                    <p><a href='/'>SmartPhone</a></p>
                    <p><a href='/'>Components</a></p>
                    <p><a href='/'>Specifications</a></p>
                    <p><a href='/'>Similar</a></p>
                    <h4><a href='/'>See all</a></h4>
                </div>

            </div>
        </div>
    )
}

export default Categories