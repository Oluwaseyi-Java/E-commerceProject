import { useState } from "react"
import React from 'react'

const Search = () => {
    const [searchInput, setSearchInput] = useState("Search")



    return (
        <div className='search'>
            <input
                type="text"
                value={searchInput}
                name="searchInput"
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>

  )
}

export default Search