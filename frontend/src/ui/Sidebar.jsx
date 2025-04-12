import React from 'react'

function Sidebar({ children }) {
    return (
        <div className='bg-primary-800 text-secondary-0 row-span-2 row-start-1 pr-3'>
            <div className='flex items-center py-6'>
                <img src="/images/logo white.png" alt="logo" className='w-16 h-18' />
                <h1 className='font-arahala text-xl'>کارجو</h1>
            </div>
            <ul className='space-y-4'>
                {children}
            </ul>
        </div>
    )
}

export default Sidebar


