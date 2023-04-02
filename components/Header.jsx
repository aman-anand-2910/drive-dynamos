import React, { useState, useEffect, useRef } from 'react'
import LogoIcon from './icons/Logo'

function Header() {
    // Editor visibility.
    const [menuActive, setMenuActive] = useState(false)

    // Ref to the menu element.
    const menuRef = useRef(null)

    // Toggle menu.
    function toggleMenu() {
        setMenuActive(!menuActive)
    }

    // Close menu if clicked outside.
    function handleClickOutside(event) {
        // Check if the click happened outside the menu and not on the toggle button.
        if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id !== 'menu-toggle') {
            setMenuActive(false)
        }
    }

    // Add event listener on mount, remove on unmount.
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div id='header'>
            <h1>
                <LogoIcon />
                <strong>4x4</strong>builder
            </h1>
            <div className='actions'>
                <a target='_blank' href='https://github.com/theshanergy/4x4builder' title='GitHub'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1024 1024' className='icon'>
                        <path
                            fill='#1B1F23'
                            fill-rule='evenodd'
                            d='M512 0a512 512 0 0 0-162 998c26 4 35-11 35-25v-95c-129 24-162-31-173-60-5-15-30-60-52-72-18-10-44-34-1-34 41-1 69 37 79 52 46 78 120 56 149 42 5-33 18-55 33-68-114-13-233-57-233-253 0-56 20-102 52-137-5-13-23-66 5-136 0 0 43-14 141 52a475 475 0 0 1 256 0c98-66 141-52 141-52 28 70 10 123 5 136 33 35 53 81 53 137 0 197-120 240-234 253 19 16 35 47 35 95l-1 140c0 14 10 30 35 25A513 513 0 0 0 512 0Z'
                            clip-rule='evenodd'
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Header
