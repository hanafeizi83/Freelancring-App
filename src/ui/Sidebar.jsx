import React from 'react'

function Sidebar({ children }) {
    return (
        <div className='bg-primary-800 text-secondary-0 row-span-2 row-start-1 pr-2 pt-14'>
            <ul className='space-y-4'>
                {children}
            </ul>
        </div>
    )
}

export default Sidebar


