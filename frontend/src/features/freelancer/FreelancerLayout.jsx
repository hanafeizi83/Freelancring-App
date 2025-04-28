import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomeNavLink from '../../ui/CustomeNavLink'
import { HiOutlineHome } from 'react-icons/hi'
import { GoProjectSymlink } from 'react-icons/go'
import { TiThSmallOutline } from 'react-icons/ti'

function FreelancerLayout() {
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
                <CustomeNavLink to='proposals'>
                    <TiThSmallOutline className='icon-sidbar' />
                    <span className='TextSidebar'>درخواست ها</span>
                </CustomeNavLink>

            </Sidebar>
        </AppLayout>
    )
}

export default FreelancerLayout
