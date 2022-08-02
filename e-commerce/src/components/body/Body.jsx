import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Drilled/Main'
import { ShopData } from '../../UIDatas'
import Home from './Home'
import Category from '../Drilled/Category'


const Body = () => {

  const [shopItems, setShopItems] = useState(ShopData.products);

  /**
   * 
   * 
  const [categories, setCategories] = useState(allCategories);

  useEffect(() => {
    setCategories(allCategories);
    setShopItems(ShopData.products)
},[])

   */
  return (
    <div>
      <Routes>
        <Route path='/all' element={<Main items={shopItems} />} />
        <Route path='/' element={<Home />} />
        <Route path={`/category/:category`} element={<Category />} />
      </Routes>
    </div>
  )
}

export default Body