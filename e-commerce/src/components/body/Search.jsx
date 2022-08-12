import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from "../../contextApi/Context.api"

const Search = () => {
    const { shopItems } = useGlobalContext();
    const [searchInput, setSearchInput] = useState("")

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (searchInput) {
            localStorage.setItem("searchedData",
                JSON.stringify(shopItems.filter((items) =>
                    items.category === searchInput.trim().toLowerCase() ||
                    items.category.toLowerCase().includes(searchInput.trim().toLowerCase()) ||
                    items.name.toLowerCase().includes(searchInput.trim().toLowerCase()))))
        }
        window.location.assign(`/category/${"search"}`)
    }

    return (
        <div className='search'>
            <form onSubmit={HandleSubmit}>
                <input
                    type="text"
                    value={searchInput}
                    name="searchInput"
                    placeholder="Search"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button><FaSearch /> </button>
            </form>
        </div>

    )
}

export default Search