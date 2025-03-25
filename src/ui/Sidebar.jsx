import React, { Children } from 'react'
import { GoProjectSymlink } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='bg-secondary-0 row-span-2 row-start-1 p-4'>
            <ul className='space-y-4'>
                <CustomNavLink to='dashboard'>
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavLink>

                <CustomNavLink to='projects'>
                    <GoProjectSymlink />
                    <span>پروژه ها</span>
                </CustomNavLink>
            </ul>
        </div>
    )
}

export default Sidebar


function CustomNavLink({ to, children }) {
    const navlinkClass = "flex items-center gap-x-2 hover:bg-primary-100/80 hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all duration-300";
    return <li>
        <NavLink
            to={to}
            className={({ isActive }) => {
                isActive
                    ? `${navlinkClass} bg-primary-100/80 text-primary-900`
                    : `${navlinkClass} text-secondary-600`
            }}
        >
            {children}
        </NavLink>
    </li>
}