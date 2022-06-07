import React from 'react'
// import img from "../../Images/Ecommerce-stock-image/kisspng-laptop-ideapad-lenovo-solid-state-drive-computer-platinum-coins-5add19910d75f1.1518534915244394410552.png"
const CategoryItem = ({imgUrl}) => {
  return (
      <div className='ItemParentClass'>

          <div className='item'>
              <div className='img'>
              <img src={require('../../Images/Ecommerce-stock-image/'+imgUrl+'.png')} alt='pic' />
              </div>
              <p><a href='/'>SmartPhone</a></p>
              <p><a href='/'>Components</a></p>
              <p><a href='/'>Specifications</a></p>
              <p><a href='/'>Similar</a></p>
              <h4><a href='/'>See all</a></h4>
          </div>

      </div>
  )
}

export default CategoryItem