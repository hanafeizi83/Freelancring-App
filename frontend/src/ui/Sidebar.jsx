import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar({ children }) {
    const navigate = useNavigate();
    return (
        <div className='bg-primary-800 text-secondary-0 row-span-2 row-start-1 pr-3 '>
            <div className='flex items-center py-6' onClick={() => navigate('/')}>
                <img src="/images/logo white.png" alt="logo" className='w-16 h-18' />
                <h1 className='hidden md:flex font-arahala text-xl'>کارجو</h1>
            </div>
            <ul className='space-y-4'>
                {children}
            </ul>
        </div>
    )
}

export default Sidebar

