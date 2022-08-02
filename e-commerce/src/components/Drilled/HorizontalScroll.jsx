import React, { useEffect, useState } from 'react'
import CatItemCard from './CatItemCard'
import { ShopData } from '../../UIDatas'


const HorizontalScroll = ({ category,modal }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(ShopData.products.filter((item) => item.category === category))
  }, [])
  return (

    <div  className='HorizontalScroll'>
      <h1>{category}</h1>
      <div className='Card_Con'>
        {
          items.map((obj, index) => {
            return <CatItemCard key={index} description={obj.description} modal={modal} name={obj.name} imgUrl={obj.image_url} price={obj.price} />
          })
        }
      </div>
    </div>

  )
}

export default HorizontalScroll