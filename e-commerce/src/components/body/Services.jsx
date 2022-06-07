import React from 'react'
import ServicesItems from './ServicesItems'

import { overViewData } from '../../DataApi'

const Services = () => {

  const Services = overViewData.map((data) => {
    return (
      <ServicesItems
        key={data.id}
        imgUrl={data.imgUrl}
        title={data.title}
        description={data.description}
      />

    )
  })
  return (
    <div className='services'>
      {Services}
    </div>
  )
}

export default Services