import React, { useEffect, useState } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeProvider'

function DarkMode() {
    const { isDarkMode, ToggleDarkMode } = useDarkMode();

    return (
        <button onClick={ToggleDarkMode}>

            {
                isDarkMode ? <HiOutlineSun className='w-6 h-10 text-primary-800' /> :
                    <HiOutlineMoon className='w-6 h-10 text-primary-800' />
            }
        </button>
    )
}

export default DarkMode
