import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function LayoutAsli() {
    return (
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    )
}

export default LayoutAsli
