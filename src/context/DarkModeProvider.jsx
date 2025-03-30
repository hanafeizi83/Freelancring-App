import React, { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorageTheme from '../hook/useLocalStorageTheme';

const darkModeCotext = createContext();
function DarkModeProvider({ children }) {

    const [isDarkMode, setIsDarkMode] = useLocalStorageTheme('isDarkMode',
        window.matchMedia('(prefers-color-scheme: dark)').matches)

        

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode')
            document.documentElement.classList.remove('light-mode')
        } else {
            document.documentElement.classList.add('light-mode')
            document.documentElement.classList.remove('dark-mode')
        }


    }, [isDarkMode]);

    const ToggleDarkMode = () => setIsDarkMode((prev) => !prev)
    return (
        <darkModeCotext.Provider value={{ isDarkMode, ToggleDarkMode }}>
            {children}
        </darkModeCotext.Provider>
    )
}

export default DarkModeProvider

export function useDarkMode() {
    const context = useContext(darkModeCotext);
    if (context === undefined) throw new Error('DarkModeContext was used outside of DarkModeProvider')
    return context
}