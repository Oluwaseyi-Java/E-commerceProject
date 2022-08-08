import React, { useEffect, useState } from 'react'
import CatItemCard from './CatItemCard'
import { FaLongArrowAltRight } from "react-icons/fa"
import { useGlobalContext } from '../../contextApi/Context.api'

const HorizontalScroll = ({ category, modal }) => {
  const { shopItems } = useGlobalContext();
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(shopItems.filter((item) => item.category === category))
  }, [shopItems, category])
  
  return (
    <div className='HorizontalScroll'>
      <div className='head'>
        <h1>{category}</h1>
        <FaLongArrowAltRight
          className='arrow'
          onClick={() => window.location.assign(`/category/${category}`)}
        />
      </div>
      <div className='Card_Con'>
        {
          items.map((obj, index) => {
            return <CatItemCard
              key={index}
              description={obj.description}
              modal={modal} name={obj.name}
              imgUrl={obj.image_url}
              price={obj.price} />
          })
        }
      </div>
    </div>

  )
}

export default HorizontalScroll