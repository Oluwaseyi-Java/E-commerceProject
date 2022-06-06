import React from 'react'



const NavIcon = () => {
    return (
        <div className='Navigation'>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal part-3"></div>
                <div className="spinner diagonal part-2"></div>
            </label>


            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li> <span>Shoppy Stores</span></li>
                    <li><a href="/Furniture" >Furniture</a></li>
                    <li><a href="/Footwears">Footwears</a></li>
                    <li><a href="/Accessories" >Accessories</a></li>
                    <li><a href="/Clothings" >Clothings</a></li>
                    <li><a href="/Home Appliances" >Appliances</a></li>

                    <li><a href="/myaccount" >Account</a></li>

                    <li><a href="/cart" >Cart</a></li>
                </ul>
            </div>
        </div>
    )
}
// 747-950

export default NavIcon