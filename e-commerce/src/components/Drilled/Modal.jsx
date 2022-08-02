import React, { useState } from 'react'

const Modal = ({ content, closeModal }) => {

    const [count, setCount] = useState(0)


    const checkNumber = (number) => {
        if (number < 0) {
            return 0

        }
        return number

    }
    const increment = () => {
        const newNumber = checkNumber(count + 1)
        setCount(() => newNumber)
    }
    const decrement = () => {
        const newNumber = checkNumber(count - 1)
        setCount(() => newNumber)

    }


    return (

        <article className='Modal'>
            <div className='Modal-Card'>
                <div className='head'>
                    <h2>Checklist</h2>
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
                <div className='Modal-Section'>
                    <h3>{content.name}</h3>
                    <h4>${content.price}</h4>
                    <p>{content.description === "" ? "Description Not Available" : content.description}</p>

                    <div className='Item-Numbers'>
                        <button className='decr' onClick={decrement}>-</button>
                        <p>{count}</p>
                        <button className='incr' onClick={increment}>+</button>
                    </div>
                    <button className='CartButton'>Add to Cart</button>
                </div>
            </div>
        </article>
    )
}

export default Modal