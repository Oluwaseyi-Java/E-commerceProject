import React, { useState, useRef, useEffect } from 'react'
import NavIcon from './NavIcon'

const Header = () => {

    const [searchInput, setSearchInput] = useState("Search")



    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <div>

            <div className={`header ${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef} id="sticky-header">

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
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>


                <NavIcon />
            </div>

        </div>
    )
}

export default Header