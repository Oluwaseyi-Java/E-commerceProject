import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../contextApi/Context.api';
import cartImg from "../../Images/Ecommerce-stock-image/Cart-Transparent-PNG.png"

const listItem = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"))
  }
  else {
    return [];
  }
}

const Cart = () => {

  const { checkIfIsOpen } = useGlobalContext();

  const [list, setList] = React.useState(listItem);
  const [total, setTotal] = useState(0)

  const { cart } = useParams();
  useEffect(() => {
    checkIfIsOpen(cart)

    let total1 = 0
    for (let i = 0; i < list.length; i++) {
      total1 += list[i].price * list[i].quantity
    }
    setTotal(total1)
  }, [list, cart, checkIfIsOpen])

  return (
    <section className='Cart'>
      <div className='Head'>
        <h2>Cart</h2>
        <p><span>Order</span> > <span>Payment</span>
        </p>
      </div>
      <div className='Body'>
        <div className='description'>
          <img src={cartImg} alt='pic' />
          <h2>Your shopping cart</h2>
          <p>This is a free and responsive shopping cart layout, made by Tutori s is a free and responsive shopping cart layout, made by Tutori s is a free and responsive shopping cart layout, made by Tutori</p>
        </div>
        <div className='ItemHead'>

          <p>QTY</p>
          <div className='sub'>
            <p>ITEM</p>
            <p>PRICE</p>
          </div>
        </div>
        {
          list.map((item, index) => {
            return (
              <div key={index} className='Card'>
                <p>{item.quantity}</p>
                <div className='sub2'>
                  <p className='itemName'>{item.name.substring(0, 30)}</p>
                  <p className='price'>${(item.price) * (item.quantity)}</p>
                </div>
              </div>
            )
          })
        }
        <div className='summary'>
          <p>Total: ${total} </p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </section >
  )
}
export default Cart