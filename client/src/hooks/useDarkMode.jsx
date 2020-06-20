// External imports
import React, { useEffect } from 'react'

// Local imports
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage(value)
    
    useEffect(() => {
        const docBody = document.querySelector('body')

        darkMode ? docBody.classList.add('dark-mode') : docBody.classList.remove('dark-mode')
    }, [darkMode])

    return [ darkMode, setDarkMode ]
}