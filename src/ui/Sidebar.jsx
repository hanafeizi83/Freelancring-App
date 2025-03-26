import React from 'react'
import { GoProjectSymlink } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import CustomeNavLink from './CustomeNavLink'

function Sidebar() {
    return (
        <div className='bg-primary-800 text-secondary-0 row-span-2 row-start-1 pr-2 pt-14'>
            <ul className='space-y-4'>
                <CustomeNavLink to='dashboard'>
                    <HiHome />
                    <span>داشبورد</span>
                </CustomeNavLink>

                <CustomeNavLink to='projects'>
                    <GoProjectSymlink />
                    <span>پروژه ها</span>
                </CustomeNavLink>
            </ul>
        </div>
    )
}

export default Sidebar


