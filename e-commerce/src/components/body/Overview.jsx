import React from 'react'
import firstItemimg from "../../Images/Ecommerce-stock-image/pnghut_galaxy-background-mobile-phones-electric-blue-phone-accessories.png"
import slantImg from "../../Images/Ecommerce-stock-image/imgbin_smartphone-feature-phone-mobile-phones-fingerprint-vivo-png.png"
import CameraImg from "../../Images/Ecommerce-stock-image/iPhone-13-PNG-Cutout.png"
import desktop from "../../Images/Ecommerce-stock-image/pinpng.com-laptop-png-603767 (1).png"


const Overview = () => {
    return (
        <div className='overview'>

            <h4>DESRANT</h4>
            <h1>Mollit anim</h1>
            <div className='item-con'>


                <div className='first item'>
                    <h2>Sed ut perspiciatis</h2>
                    <p>Unde onmis iste natus error</p>
                    <button>Shop now</button>
                    <img className='img firstImg' src={firstItemimg} alt='' />
                </div>
                <div className='three object'>

                    <div className='first'>
                        <div className='first item' >
                            <h2>Totam rem aperiam</h2>
                            <p>$199</p>
                            <img className='img' src={slantImg} alt='pic' />
                        </div>
                        <div className='second item'>
                            <h2>Eaque ipsa</h2>
                            <p>$99</p>
                            <img className='img' src={CameraImg} alt='pic' />
                        </div>
                    </div>
                    <div className='second1 item'>
                        <h2>Quae ab illo inventore</h2>
                        <p>Architects beaae vitae dicta sunt</p>
                        <button>Shop now</button>
                        <img className='img' src={desktop} alt='pic' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Overview