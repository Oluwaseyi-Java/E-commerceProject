import React, { useState, useRef, useEffect } from 'react'
import Brandname from '../body/Brandname';
import Search from '../body/Search';
import NavIcon from './NavIcon'

const Header = () => {

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

    // <div className='navitems'>
    //     Nav items
    // </div>
    // <div className='headerIcons'>

    // </div>
    return (
        <div>

            <div className={`header ${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef} id="sticky-header">
                <Brandname />

                <Search />

                <NavIcon />
            </div>

        </div>
    )
}

export default Header