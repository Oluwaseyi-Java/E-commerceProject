import React from 'react'
import MoreCard from './MoreCard'
import { moreCardData } from '../../DataApi'

const More = () => {


  const moreCard = moreCardData.map(data => {
    return (
      <MoreCard
        key={data.id}
        imgUrl={data.imgUrl}
        description={data.description}
        date={data.date}
      />
    )
  })

  return (
    <div className='More'>
      <h4>VELTIT ESSE</h4>
      <h1>Quam nihil</h1>


      <div className="MoreCard">
        {moreCard}
      </div>

    </div>
  )
}

export default More