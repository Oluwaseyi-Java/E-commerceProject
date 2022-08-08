import React from 'react'
import { useGlobalContext } from '../../contextApi/Context.api'
import Carousel from './Carousel'
import Header from './Header'

const Dashboasrd = () => {
  const { isOpen } = useGlobalContext();

  return (
    <div className='dashboard '>
      <Header />
      {isOpen && <Carousel />}
    </div>
  )
}

export default Dashboasrd