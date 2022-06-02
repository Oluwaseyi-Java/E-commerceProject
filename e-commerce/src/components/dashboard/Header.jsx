import React, { useState } from 'react'
import NavIcon from './NavIcon'

const Header = () => {

    const [searchInput,setSearchInput]=useState("Search")

//     let navbar ;
//     let sticky = navbar.offsetTop;


//     function myNav() {
//         if (window.pageYOffset >= sticky) {
//             navbar="sticky"
//         } else {
//             navbar=""
//         }
//    }
//     window.onscroll = function () {
//         myNav()
//     }
//     id = {`${navbar}`
// }

    return (
      <div>
      
      <div className='header'>
      
          <div className='brandName'>
          
          <h2>RELAP</h2>
          </div>

          <div className='navitems'>
              Nav items
          </div>
          <div className='headerIcons'>
              
          </div>
          <div className='search'>
              <input
                  type="text"
                  value={searchInput}
                  name="searchInput"
                  onChange={(e)=> setSearchInput(e.target.value)}
              />
          </div>
          
      
            </div>
            
            <NavIcon/>
      </div>
  )
}

export default Header