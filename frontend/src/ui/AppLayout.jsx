import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function AppLayout({ children }) {
  return (
    <div className='grid grid-cols-[12rem_1fr] grid-rows-[3rem_1fr] h-screen'>
      <Header />
      {children}
      <div className='bg-secondary-100 p-8 overflow-y-auto'>
        <div className='w-auto max-w-screen-lg'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
