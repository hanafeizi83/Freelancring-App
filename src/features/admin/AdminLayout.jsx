import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomeNavLink from '../../ui/CustomeNavLink'
import { HiOutlineHome, HiOutlineUser } from 'react-icons/hi'
import { GoProjectSymlink } from 'react-icons/go'
import { TiThSmallOutline } from 'react-icons/ti'

function AdminLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomeNavLink to='dashboard'>
                    <HiOutlineHome className='icon' />
                    <span>داشبورد</span>
                </CustomeNavLink>
                <CustomeNavLink to='users'>
                    <HiOutlineUser className='icon' />
                    <span>کاربران</span>
                </CustomeNavLink>
                <CustomeNavLink to='projects'>
                    <GoProjectSymlink className='icon' />
                    <span>پروژه ها</span>
                </CustomeNavLink>
                <CustomeNavLink to='proposals'>
                    <TiThSmallOutline className='icon' />
                    <span>درخواست ها</span>
                </CustomeNavLink>
            </Sidebar>
        </AppLayout>
    )
}

export default AdminLayout
