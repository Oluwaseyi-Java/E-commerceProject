import React from 'react'

const Newsletter = () => {
    return (
        <div className='Newsletter'>

            <div className='about'>
                <p id='n1'>ODIO DISNISSIMOS</p>
                <h1>Ducimus qui</h1>
                <p id='n2'>Note that the development build is not optimized.
                    To create a production build, use npm run build.    use npm run build.</p>
            </div>
            <div className='Subscribe'>
                <input type="email" placeholder='Enter your Email...' />
                <button>Subscribe</button>
            </div>

            <div className='circle n1'></div>
            <div className='circle n2'></div>
            <div className='circle n3'></div>
        </div>
    )
}

export default Newsletter