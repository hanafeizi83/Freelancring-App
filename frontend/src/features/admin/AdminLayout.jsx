import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomeNavLink from '../../ui/CustomeNavLink'
import { HiOutlineHome, HiOutlineUser } from 'react-icons/hi'
import { GoProjectSymlink } from 'react-icons/go'
import { TiThSmallOutline } from 'react-icons/ti'
import { MdOutlineCategory } from 'react-icons/md'

function AdminLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomeNavLink to='dashboard'>
                    <HiOutlineHome className='icon-sidbar' />
                    <span className='TextSidebar'>داشبورد</span>
                </CustomeNavLink>
                <CustomeNavLink to='users'>
                    <HiOutlineUser className='icon-sidbar' />
                    <span className='TextSidebar'>کاربران</span>
                </CustomeNavLink>
                <CustomeNavLink to='projects'>
                    <GoProjectSymlink className='icon-sidbar' />
                    <span className='TextSidebar'>پروژه ها</span>
                </CustomeNavLink>
                <CustomeNavLink to='proposals'>
                    <TiThSmallOutline className='icon-sidbar' />
                    <span className='TextSidebar'>درخواست ها</span>
                </CustomeNavLink>
                <CustomeNavLink to='categories'>
                    <MdOutlineCategory className='icon-sidbar' />
                    <span className='TextSidebar'>دسته بندی ها</span>
                </CustomeNavLink>
            </Sidebar>
        </AppLayout>
    )
}

export default AdminLayout
