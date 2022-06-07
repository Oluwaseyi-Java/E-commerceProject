import React from 'react'
import { categoryData } from '../../DataApi'
import CategoryItem from "./CategoryItem"


const Categories = () => {



    const Category = categoryData.map(data => {
        return (

            <CategoryItem key={data.id} imgUrl={ data.imgUrl}/>

        )
    })
    return (
        <div className='Category'>

            <div className='CategoryHeader'>
                <h3>NATUS ERROR</h3>
                <h2>Unde omnis iste</h2>
                <p>Lor em ipsum la  e la bour soir.un practos lepradus ondes palu em ipsum la vorade e la bour soir.unondes palu.</p>
            </div>

            <div className='CategoryItem'>

                {Category}



            </div>
        </div>
    )
}

export default Categories