import React from 'react'
import ProjectsTable from '../features/projects/ProjectsTable'
import ProjectsHeader from '../features/projects/ProjectsHeader'

function Projects() {
    return (
        <div className='space-y-2'>
            <ProjectsHeader />
            <ProjectsTable />
        </div>
    )
}

export default Projects
