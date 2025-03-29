import React from 'react'
import DashboardHeader from '../../ui/DashboardHeader'
import Stats from './stats'
import useOwnerProjects from './../projects/useOwnerProjects'
function DashboardLayout() {
    const { projects } = useOwnerProjects();
    return (
        <div className='space-y-3'>
            <DashboardHeader />
            <Stats projects={projects}/>
        </div>
    )
}

export default DashboardLayout
