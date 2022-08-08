import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Drilled/Main'
import Home from './Home'
import Category from '../Drilled/Category'
import Cart from "../Drilled/Cart"
import { useGlobalContext } from '../../contextApi/Context.api'

const Body = () => {
  const { shopItems } = useGlobalContext();
  return (
    <div>
      <Routes>
        <Route path='/all' element={<Main items={shopItems} />} />
        <Route path='/' element={<Home />} />
        <Route path={`/category/:category`} element={<Category />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Body