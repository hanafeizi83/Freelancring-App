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
                    <HiOutlineHome className='icon-sidbar' />
                    <span className='TextSidebar'>داشبورد</span>
                </CustomeNavLink>

                <CustomeNavLink to='projects'>
                    <GoProjectSymlink className='icon-sidbar' />
                    <span className='TextSidebar'>پروژه ها</span>
                </CustomeNavLink>
            </Sidebar>
        </AppLayout>
    )
}

export default OwnerLayout
