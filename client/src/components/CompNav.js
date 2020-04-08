// External imports
import React, { useState } from 'react'

// Local imports
import { useDarkMode } from '../hooks/useDarkMode'


const Navbar = () => {
    
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = ( e ) => {
        e.preventDefault()
        console.log('toggled: ', !darkMode)
        setDarkMode(!darkMode)
    }

    return (
        <nav className="navbar">
            <h1>Women's Worlds Cup</h1>
            <div className="dark-mode__toggle">
                <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}></div>
            </div>
        </nav>
    )
}

export default Navbar