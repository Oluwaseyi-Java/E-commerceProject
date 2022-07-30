import React, { useState } from 'react'
import { ShopData } from "../../UIDatas"


const allCategories = [ ...new Set(ShopData.products.map((product) => product.category))]
console.log(allCategories)
const NavIcon = ({ Open, check }) => {

    const [categories, setCategories] = useState(allCategories);


    return (
        <div className='Navigation'>
            <input type="checkbox"
                onClick={() => Open()}
                className="openSidebarMenu"
                onChange={(e) => Open(e.target.checked)}
                id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu"
                className={`sidebarIconToggle ${check && "checkProperty"}`} >
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal part-3"></div>
                <div className="spinner diagonal part-2"></div>
            </label>


            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li> <span>Shoppy Stores</span></li>
                    {categories.map((category, index) => {
                        return <li key={index} ><a href={`/${category}`}>{category}</a></li>

                    })}
                    <li><a href="/myaccount" >Account</a></li>

                    <li><a href="/cart" >Cart</a></li>
                </ul>

            </div>
        </div>
    )
}
// 747-950

export default NavIcon