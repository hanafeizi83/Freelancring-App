import React from 'react'
import useProject from '../features/project/useproject'
import ProjectHeader from '../features/project/ProjectHeader'
import ProposalTable from '../features/project/ProposalTable'

function Project() {
    const { project={} } = useProject()
    return (
        <div>
            <ProjectHeader project={project} />
            <ProposalTable proposals={project.proposals} />
        </div>
    )
}

export default Project
