import React, { useState, useRef, useEffect } from 'react'
import Brandname from '../body/Brandname';
import Search from '../body/Search';
import NavIcon from './NavIcon'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [sticky, setSticky] = useState(
        {
            isSticky: false,
            offset: 0
        }
    );

    const headerRef = useRef(null);

    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        let header = headerRef.current.getBoundingClientRect();
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
    const checkNav = (value) => {
        setIsOpen(value)
        console.log(isOpen)
    }
    return (
        <div>

            <div className={`header ${sticky.isSticky ? ' sticky' : ''} ${isOpen && "Open"}`} ref={headerRef} id="sticky-header">
                <Brandname />

                <Search />

                <NavIcon Open={checkNav} check={ isOpen} />
            </div>

        </div>
    )
}

export default Header