import React from 'react'
import Table from '../../ui/Table'

function ProjectsRow({ project, index }) {
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{project.title}</td>
            <td>{project.description}</td>
            <td>{project.deadline}</td>
            <td>{project.budget}</td>
            <td>{project.category.title}</td>
            <td>{'tags'}</td>
            <td>{project.freelance?.name || '-'}</td>
            <td>{project.status}</td>
            <td>...</td>
        </Table.Row>
    )
}

export default ProjectsRow
