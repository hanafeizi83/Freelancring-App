import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomeNavLink from '../../ui/CustomeNavLink'
import { HiOutlineHome } from 'react-icons/hi'
import { GoProjectSymlink } from 'react-icons/go'

function OwnerLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomeNavLink to='dashboard'>
                    <HiOutlineHome className='icon' />
                    <span>داشبورد</span>
                </CustomeNavLink>

                <CustomeNavLink to='projects'>
                    <GoProjectSymlink className='icon' />
                    <span>پروژه ها</span>
                </CustomeNavLink>
            </Sidebar>
        </AppLayout>
    )
}

export default OwnerLayout
