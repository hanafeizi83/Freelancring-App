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
                    <HiOutlineHome className='icon' />
                    <span>داشبورد</span>
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

export default FreelancerLayout
