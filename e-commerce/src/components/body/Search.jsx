import { useEffect, useState } from "react"
import React from 'react'
import { ShopData } from "../../UIDatas"



const Search = () => {
    const [searchInput, setSearchInput] = useState("Search")

    const getTerms = () => {
        ShopData.products.find((item)=>item.category===searchInput)
    }
useEffect(()=>{getTerms()})

    return (
        <div className='search'>
            <form>
            <input
            type="text"
            value={searchInput}
            name="searchInput"
            onChange={(e) => setSearchInput(e.target.value)}
                />
                <button>Search</button>
            </form>
        </div>

  )
}

export default Search