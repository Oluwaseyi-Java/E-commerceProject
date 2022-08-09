import React, { useEffect, useState } from 'react'
import Zoom from "react-reveal"
import { useGlobalContext } from '../../contextApi/Context.api';

const listItem = () => {
    let list = localStorage.getItem("list");

    if (list) {
        return JSON.parse(localStorage.getItem("list"))
    }
    else {
        return [];
    }
}

const Modal = ({ content }) => {
    const { closeModal } = useGlobalContext();
    const [count, setCount] = useState(1)
    const [list, setList] = useState(listItem);
    const [modal, setModal] = useState(false)
    const checkNumber = (number) => {
        if (number < 1) {
            return 1
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

    const addToCart = () => {
        setList((item) => [...item, {
            name: content.name,
            price: content.price,
            quantity: count
        }])

        setModal(true)
        setTimeout(() => {
            setModal(false)
        }, 1000)
    }
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list])

    return (
        <article className='Modal'>
            <Zoom>
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
                        <button className='CartButton' onClick={addToCart}>{`${modal ? "Added successfully" : "Add to Cart"}`}</button>
                    </div>
                </div>
            </Zoom>
        </article>
    )
}

export default Modal